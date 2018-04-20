import { Component, OnInit } from '@angular/core';

import { Title } from '../title';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {
  titles: Title[];

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.getTitles();
  }

  getTitles(): void {
    this.titleService.getTitles()
    .subscribe(titles => this.titles = titles);
  }

}
