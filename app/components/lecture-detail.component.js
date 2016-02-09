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
    var LectureDetailComponent;
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
            LectureDetailComponent = (function () {
                function LectureDetailComponent(_lectureService, _speakerService, _routeParams) {
                    this._lectureService = _lectureService;
                    this._speakerService = _speakerService;
                    this._routeParams = _routeParams;
                }
                LectureDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var self = this;
                    if (!this.lecture) {
                        var id = +this._routeParams.get('id');
                        this._lectureService.getLecture(id).then(function (lecture) { return _this.lecture = lecture; }).then(function (lecture) {
                            self._speakerService.getSpeaker(lecture.speaker).then(function (speaker) { return self.speaker = speaker; });
                        });
                    }
                };
                LectureDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                LectureDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-lecture-detail',
                        templateUrl: 'app/components/lecture-detail.component.html',
                        styleUrls: ['app/components/lecture-detail.component.css'],
                        inputs: ['lecture']
                    }), 
                    __metadata('design:paramtypes', [speaker_service_1.LectureService, speaker_service_1.SpeakerService, router_1.RouteParams])
                ], LectureDetailComponent);
                return LectureDetailComponent;
            })();
            exports_1("LectureDetailComponent", LectureDetailComponent);
        }
    }
});
//# sourceMappingURL=lecture-detail.component.js.map