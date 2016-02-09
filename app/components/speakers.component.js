System.register(['angular2/core', 'angular2/router', '../services/speaker.service', './speaker-detail.component'], function(exports_1) {
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
    var core_1, router_1, speaker_service_1, speaker_detail_component_1;
    var SpeakersComponent;
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
            },
            function (speaker_detail_component_1_1) {
                speaker_detail_component_1 = speaker_detail_component_1_1;
            }],
        execute: function() {
            SpeakersComponent = (function () {
                function SpeakersComponent(_speakerService, _router) {
                    this._speakerService = _speakerService;
                    this._router = _router;
                }
                SpeakersComponent.prototype.getSpeakers = function () {
                    var _this = this;
                    this._speakerService.getSpeakers().then(function (speakers) { return _this.speakers = speakers; });
                };
                SpeakersComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['SpeakerDetail', { id: this.selectedSpeaker.id }]);
                };
                SpeakersComponent.prototype.ngOnInit = function () {
                    this.getSpeakers();
                };
                SpeakersComponent.prototype.onSelect = function (speaker) { this.selectedSpeaker = speaker; };
                SpeakersComponent = __decorate([
                    core_1.Component({
                        selector: 'my-speakers',
                        templateUrl: 'app/components/speakers.component.html',
                        styleUrls: ['app/components/speakers.component.css'],
                        directives: [speaker_detail_component_1.SpeakerDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [speaker_service_1.SpeakerService, router_1.Router])
                ], SpeakersComponent);
                return SpeakersComponent;
            })();
            exports_1("SpeakersComponent", SpeakersComponent);
        }
    }
});
//# sourceMappingURL=speakers.component.js.map