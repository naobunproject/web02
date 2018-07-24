import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable ,  of } from 'rxjs';

import { Title } from './title';
import { TITLES } from './mock-titles';

@Injectable()
export class TitleService {

  constructor(private http: HttpClient) { }

  getTitles(): Observable<Title[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(TITLES);
  }

  getTitle(id: number): Observable<Title> {
    // TODO: send the message _after_ fetching the hero
    return of(TITLES.find(title => title.id === id));
  }

}
