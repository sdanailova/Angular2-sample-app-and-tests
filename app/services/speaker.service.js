System.register(['angular2/core', '../components/mock-data'], function(exports_1) {
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
    var core_1, mock_data_1;
    var SpeakerService, LectureService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_data_1_1) {
                mock_data_1 = mock_data_1_1;
            }],
        execute: function() {
            SpeakerService = (function () {
                function SpeakerService() {
                }
                SpeakerService.prototype.getSpeakers = function () {
                    return Promise.resolve(mock_data_1.Speakers);
                };
                SpeakerService.prototype.getSpeaker = function (id) {
                    return Promise.resolve(mock_data_1.Speakers)
                        .then(function (speakers) { return speakers.filter(function (h) { return h.id === id; })[0]; });
                };
                SpeakerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SpeakerService);
                return SpeakerService;
            })();
            exports_1("SpeakerService", SpeakerService);
            LectureService = (function () {
                function LectureService() {
                }
                LectureService.prototype.getLectures = function () {
                    return Promise.resolve(mock_data_1.Lectures);
                };
                LectureService.prototype.getLecture = function (id) {
                    return Promise.resolve(mock_data_1.Lectures)
                        .then(function (lectures) { return lectures.filter(function (h) { return h.id === id; })[0]; });
                };
                return LectureService;
            })();
            exports_1("LectureService", LectureService);
        }
    }
});
//# sourceMappingURL=speaker.service.js.map