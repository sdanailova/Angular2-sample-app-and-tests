System.register(['angular2/core', 'angular2/router', '../services/speaker.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, speaker_service_1;
    var SpeakerDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speaker_service_1_1) {
                speaker_service_1 = speaker_service_1_1;
            }],
        execute: function() {
            SpeakerDetailComponent = (function () {
                function SpeakerDetailComponent(_speakerService, _routeParams) {
                    this._speakerService = _speakerService;
                    this._routeParams = _routeParams;
                }
                SpeakerDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.speaker) {
                        var id = +this._routeParams.get('id');
                        this._speakerService.getSpeaker(id).then(function (speaker) { return _this.speaker = speaker; });
                    }
                };
                SpeakerDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                SpeakerDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-speaker-detail',
                        templateUrl: 'app/components/speaker-detail.component.html',
                        styleUrls: ['app/components/speaker-detail.component.css'],
                        inputs: ['speaker']
                    }), 
                    __metadata('design:paramtypes', [speaker_service_1.SpeakerService, router_1.RouteParams])
                ], SpeakerDetailComponent);
                return SpeakerDetailComponent;
            })();
            exports_1("SpeakerDetailComponent", SpeakerDetailComponent);
        }
    }
});
//# sourceMappingURL=speaker-detail.component.js.map