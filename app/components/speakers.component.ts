import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {SpeakerService} from '../services/speaker.service';
import {SpeakerDetailComponent} from './speaker-detail.component';
import {Speaker} from './speaker';

@Component({
  selector: 'my-speakers',
  templateUrl: 'app/components/speakers.component.html',
  styleUrls: ['app/components/speakers.component.css'],
  directives: [SpeakerDetailComponent]
})
export class SpeakersComponent implements OnInit {
  public speakers: Speaker[];
  public selectedSpeaker: Speaker;

  constructor(private _speakerService: SpeakerService, private _router: Router) { }

  getSpeakers() {
    this._speakerService.getSpeakers().then(speakers => this.speakers = speakers);
  }

  gotoDetail() {
    this._router.navigate(['SpeakerDetail', { id: this.selectedSpeaker.id }]);
  }

  ngOnInit() {
    this.getSpeakers();
  }

  onSelect(speaker: Speaker) { this.selectedSpeaker = speaker; }
}
