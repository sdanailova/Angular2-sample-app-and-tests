import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Speaker, Lecture} from './speaker';
import {SpeakerService, LectureService} from '../services/speaker.service';

@Component({
  selector: 'my-lecture-detail',
  templateUrl: 'app/components/lecture-detail.component.html',
  styleUrls: ['app/components/lecture-detail.component.css'],
  inputs: ['lecture']
})
export class LectureDetailComponent implements OnInit {
  public lecture: Lecture;
  public speaker: Speaker;

  constructor(private _lectureService: LectureService, private _speakerService: SpeakerService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let self = this;
    if (!this.lecture) {
      let id = +this._routeParams.get('id');
      this._lectureService.getLecture(id).then(lecture => this.lecture = lecture).then(function(lecture){
            self._speakerService.getSpeaker(lecture.speaker).then(speaker => self.speaker = speaker);
      });
    }
  }

  goBack() {
    window.history.back();
  }
}
