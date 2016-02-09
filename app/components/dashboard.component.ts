import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Lecture} from './speaker';
import {LectureService} from '../services/speaker.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/dashboard.component.html',
  styleUrls: ['app/components/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public lectures: Lecture[] = [];
  constructor(private _lectureService: LectureService, private _router: Router) { }

  ngOnInit() {
    this._lectureService.getLectures().then(lectures => this.lectures = lectures.slice(1,5));
  }

  gotoDetail(lecture: Lecture) {
    this._router.navigate(['LectureDetail', { id: lecture.id }]);
  }
}
