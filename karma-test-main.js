// Tun on full stack traces in errors to help debugging
Error.stackTraceLimit=Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// // Cancel Karma's synchronous start,
// // we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
    packages: {     
        "base/": {
            defaultJsExtension: true
        }
    }
});

System.import('angular2/src/platform/browser/browser_adapter').then(function (browser_adapter) {
    browser_adapter.BrowserDomAdapter.makeCurrent();
}).then(function () {
    return Promise.all(
    Object.keys(window.__karma__.files) // All files served by Karma.
    .filter(onlySpecFiles)
    // .map(filePath2moduleName) // Normalize paths to module names.
    .map(function (moduleName) {
        // loads all spec files via their global module names (e.g. 'base/src/app/hero.service.spec')
        return System.import(moduleName);
    }));
})
.then(function() {
__karma__.start();
}, function (error) {
    __karma__.error(error.stack || error);
});

function filePath2moduleName(filePath) {
return filePath.
replace(/^\//, ''). // remove / prefix
replace(/\.\w+$/, ''); // remove suffix
}

function onlyAppFiles(filePath) {
return /\/base\/app\/(?!.*\.spec\.js$).*\.js$/.test(filePath);
}

function onlySpecFiles(path) {
return /spec\.js$/.test(path);
}