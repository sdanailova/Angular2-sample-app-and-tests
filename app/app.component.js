System.register(['angular2/core', 'angular2/router', './components/speakers.component', './components/speaker-detail.component', './components/lecture-detail.component', './components/dashboard.component', './services/speaker.service'], function(exports_1) {
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
    var core_1, router_1, speakers_component_1, speaker_detail_component_1, lecture_detail_component_1, dashboard_component_1, speaker_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speakers_component_1_1) {
                speakers_component_1 = speakers_component_1_1;
            },
            function (speaker_detail_component_1_1) {
                speaker_detail_component_1 = speaker_detail_component_1_1;
            },
            function (lecture_detail_component_1_1) {
                lecture_detail_component_1 = lecture_detail_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (speaker_service_1_1) {
                speaker_service_1 = speaker_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'IT Event 2016';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: " <h1>{{title}}</h1>\n              <a [routerLink]=\"['Agenda']\">Agenda</a>\n              <a [routerLink]=\"['Speakers']\">Speakers</a>\n              <router-outlet></router-outlet>",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [speaker_service_1.SpeakerService, speaker_service_1.LectureService]
                    }),
                    router_1.RouteConfig([
                        // {path: '/', redirectTo: ['Dashboard'] },
                        { path: '/dashboard', name: 'Agenda', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/speakers', name: 'Speakers', component: speakers_component_1.SpeakersComponent },
                        { path: '/speakerdetail/:id', name: 'SpeakerDetail', component: speaker_detail_component_1.SpeakerDetailComponent },
                        { path: '/lecturedetail/:id', name: 'LectureDetail', component: lecture_detail_component_1.LectureDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map