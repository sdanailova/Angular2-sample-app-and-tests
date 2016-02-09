import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick } from 'angular2/testing';
import {LectureService} from "../app/services/speaker.service";
import {Injectable} from 'angular2/core';

// !!!! referenciite w index.html trqbwa da sa syshtite kato files pattern v karma.config.js
describe('universal truths', () => {
  it('should do math', () => {

    expect(1 + 1).toEqual(2);
    expect(5).toBeGreaterThan(4);

  });

  xit('should skip this', () => {
    expect(4).toEqual(40);
  });

});

describe('with fake async', () => {
  beforeEachProviders(() => [LectureService]);
  it('should greet when pin is right', injectAsync([LectureService], (service) => {
      service.pin = 2015;
      return service.getLectures().then((lectures) => {
        expect(lectures).toBeDefined("No lectures");
      });
    }), 3000);
});
