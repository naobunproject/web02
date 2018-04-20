import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Title }         from '../title';
import { TitleService }  from '../title.service';

@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.css']
})
export class TitleDetailComponent implements OnInit {
  @Input() title: Title;

  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService,
    private location: Location
  ) {}

	ngOnInit(): void {
	  this.getTitle();
	}
	
	getTitle(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.titleService.getTitle(id)
		.subscribe(title => this.title = title);
	}

}
