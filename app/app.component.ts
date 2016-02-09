import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SpeakersComponent} from './components/speakers.component';
import {SpeakerDetailComponent} from './components/speaker-detail.component';
import {LectureDetailComponent} from './components/lecture-detail.component';
import {DashboardComponent} from './components/dashboard.component';
import {SpeakerService, LectureService} from './services/speaker.service';

@Component({
  selector: 'my-app',
  template: ` <h1>{{title}}</h1>
              <a [routerLink]="[\'Agenda\']">Agenda</a>
              <a [routerLink]="[\'Speakers\']">Speakers</a>
              <router-outlet></router-outlet>`,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [SpeakerService, LectureService]
})
@RouteConfig([
  // {path: '/', redirectTo: ['Dashboard'] },
  {path: '/dashboard', name: 'Agenda', component: DashboardComponent, useAsDefault: true},
  {path: '/speakers', name: 'Speakers', component: SpeakersComponent},
  {path: '/speakerdetail/:id', name: 'SpeakerDetail', component: SpeakerDetailComponent},
  {path: '/lecturedetail/:id', name: 'LectureDetail', component: LectureDetailComponent}
])
export class AppComponent {
  public title = 'IT Event 2016';
}
