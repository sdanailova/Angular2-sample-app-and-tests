import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, CanActivate,Location} from 'angular2/router';
import {SpeakersComponent} from './components/speakers.component';
import {SpeakerDetailComponent} from './components/speaker-detail.component';
import {LectureDetailComponent} from './components/lecture-detail.component';
import {DashboardComponent} from './components/dashboard.component';
import {SpeakerService, LectureService} from './services/speaker.service';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {Http} from 'angular2/http';

declare var Auth0Lock;

@Component({
  selector: 'my-app',
  template: ` <h1>{{title}}</h1>
              <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                   <li> <a [routerLink]="[\'Agenda\']">Agenda</a></li>
                   <li> <a [routerLink]="[\'Speakers\']">Speakers</a> </li>
                </ul>
                <button *ngIf="!loggedIn()" (click)="login()">Login</button>
                <button *ngIf="loggedIn()" (click)="logout()">Logout</button>
              </div>
              <router-outlet></router-outlet>`,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [SpeakerService, LectureService]
})

@CanActivate(() => tokenNotExpired())


@RouteConfig([
  // {path: '/', redirectTo: ['Dashboard'] },
  // {path: '/',  name: 'Login', component: Login, useAsDefault: true},
  {path: '/dashboard', name: 'Agenda', component: DashboardComponent},
  {path: '/speakers', name: 'Speakers', component: SpeakersComponent},
  {path: '/speakerdetail/:id', name: 'SpeakerDetail', component: SpeakerDetailComponent},
  {path: '/lecturedetail/:id', name: 'LectureDetail', component: LectureDetailComponent}
])
export class AppComponent {
  public title = 'IT Event 2016';
  lock = new Auth0Lock('EQPeIRuAD0AwO1AlQQ0OyhAs9qGnEUDs', 'sdanailova.eu.auth0.com');
   jwtHelper: JwtHelper = new JwtHelper();

constructor(public http: Http, public authHttp: AuthHttp) {}

login() {
     this.lock.show((err: string, profile: string, id_token: string) => {

     if (err) {
       throw new Error(err);
     }

     localStorage.setItem('profile', JSON.stringify(profile));
     localStorage.setItem('id_token', id_token);
     this.useJwtHelper();
    });
   }

   logout() {
   localStorage.removeItem('profile');
   localStorage.removeItem('id_token');
 }

 loggedIn() {
   return tokenNotExpired();
 }

 useJwtHelper() {
    var token = localStorage.getItem('id_token');

    console.log(
      this.jwtHelper.decodeToken(token),
      this.jwtHelper.getTokenExpirationDate(token),
      this.jwtHelper.isTokenExpired(token)
    );
  }

}
