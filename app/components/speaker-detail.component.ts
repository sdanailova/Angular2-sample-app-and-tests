import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Speaker} from './speaker';
import {SpeakerService} from '../services/speaker.service';

@Component({
  selector: 'my-speaker-detail',
  templateUrl: 'app/components/speaker-detail.component.html',
  styleUrls: ['app/components/speaker-detail.component.css'],
  inputs: ['speaker']
})
export class SpeakerDetailComponent implements OnInit {
  public speaker: Speaker;

  constructor(private _speakerService: SpeakerService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    if (!this.speaker) {
      let id = +this._routeParams.get('id');
      this._speakerService.getSpeaker(id).then(speaker => this.speaker = speaker);
    }
  }

  goBack() {
    window.history.back();
  }
}
