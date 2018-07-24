import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable ,  of } from 'rxjs';

import { Creator } from './creator';
import { CREATORS } from './mock-creators';

@Injectable()
export class CreatorService {

  constructor(private http: HttpClient) { }

  getCreators(): Observable<Creator[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(CREATORS);
  }

  getCreator(id: number): Observable<Creator> {
    // TODO: send the message _after_ fetching the hero
    return of(CREATORS.find(creator => creator.id === id));
  }

}
