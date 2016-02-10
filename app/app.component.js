System.register(['angular2/core', 'angular2/router', './components/speakers.component', './components/speaker-detail.component', './components/lecture-detail.component', './components/dashboard.component', './services/speaker.service', 'angular2-jwt', 'angular2/http'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, speakers_component_1, speaker_detail_component_1, lecture_detail_component_1, dashboard_component_1, speaker_service_1, angular2_jwt_1, http_1;
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
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http, authHttp) {
                    this.http = http;
                    this.authHttp = authHttp;
                    this.title = 'IT Event 2016';
                    this.lock = new Auth0Lock('EQPeIRuAD0AwO1AlQQ0OyhAs9qGnEUDs', 'sdanailova.eu.auth0.com');
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
                }
                AppComponent.prototype.login = function () {
                    var _this = this;
                    this.lock.show(function (err, profile, id_token) {
                        if (err) {
                            throw new Error(err);
                        }
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        _this.useJwtHelper();
                    });
                };
                AppComponent.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                };
                AppComponent.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                AppComponent.prototype.useJwtHelper = function () {
                    var token = localStorage.getItem('id_token');
                    console.log(this.jwtHelper.decodeToken(token), this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token));
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: " <h1>{{title}}</h1>\n              <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav\">\n                   <li> <a [routerLink]=\"['Agenda']\">Agenda</a></li>\n                   <li> <a [routerLink]=\"['Speakers']\">Speakers</a> </li>\n                </ul>\n                <button *ngIf=\"!loggedIn()\" (click)=\"login()\">Login</button>\n                <button *ngIf=\"loggedIn()\" (click)=\"logout()\">Logout</button>\n              </div>\n              <router-outlet></router-outlet>",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [speaker_service_1.SpeakerService, speaker_service_1.LectureService]
                    }),
                    router_1.CanActivate(function () { return angular2_jwt_1.tokenNotExpired(); }),
                    router_1.RouteConfig([
                        { path: '/dashboard', name: 'Agenda', component: dashboard_component_1.DashboardComponent },
                        { path: '/speakers', name: 'Speakers', component: speakers_component_1.SpeakersComponent },
                        { path: '/speakerdetail/:id', name: 'SpeakerDetail', component: speaker_detail_component_1.SpeakerDetailComponent },
                        { path: '/lecturedetail/:id', name: 'LectureDetail', component: lecture_detail_component_1.LectureDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map