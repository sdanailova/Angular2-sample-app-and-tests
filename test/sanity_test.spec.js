System.register(['angular2/testing', "../app/services/speaker.service"], function(exports_1) {
    var testing_1, speaker_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (speaker_service_1_1) {
                speaker_service_1 = speaker_service_1_1;
            }],
        execute: function() {
            testing_1.describe('universal truths', function () {
                testing_1.it('should do math', function () {
                    testing_1.expect(1 + 1).toEqual(2);
                    testing_1.expect(5).toBeGreaterThan(4);
                });
                xit('should skip this', function () {
                    testing_1.expect(4).toEqual(40);
                });
            });
            testing_1.describe('with fake async', function () {
                testing_1.beforeEachProviders(function () { return [speaker_service_1.LectureService]; });
                testing_1.it('should greet when pin is right', testing_1.injectAsync([speaker_service_1.LectureService], function (service) {
                    service.pin = 2015;
                    return service.getLectures().then(function (lectures) {
                        testing_1.expect(lectures).toBeDefined("No lectures");
                    });
                }), 3000);
            });
        }
    }
});
//# sourceMappingURL=sanity_test.spec.js.map