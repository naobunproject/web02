import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Creator }         from '../creator';
import { CreatorService }  from '../creator.service';

@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.css']
})
export class CreatorDetailComponent implements OnInit {
  @Input() creator: Creator;

  constructor(
    private route: ActivatedRoute,
    private creatorService: CreatorService,
    private location: Location
  ) {}

	ngOnInit(): void {
	  this.getCreator();
	}
	
	getCreator(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.creatorService.getCreator(id)
		.subscribe(creator => this.creator = creator);
	}

}

