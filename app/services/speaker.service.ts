import {Injectable} from 'angular2/core';
import {Speakers, Lectures} from '../components/mock-data';

@Injectable()
export class SpeakerService {
	getSpeakers() {
		return Promise.resolve(Speakers);
	}

	getSpeaker(id: number) {
    return Promise.resolve(Speakers)
      .then(speakers => speakers.filter(h => h.id === id)[0]);
	}
}

export class LectureService {
	getLectures() {
		return Promise.resolve(Lectures);
	}

	getLecture(id: number) {
		return Promise.resolve(Lectures)
			.then(lectures => lectures.filter(h => h.id === id)[0]);
	}
}
