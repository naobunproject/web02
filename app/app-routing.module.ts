import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitlesComponent }      from './titles/titles.component';
import { TitleDetailComponent }      from './title-detail/title-detail.component';
import { CreatorsComponent }      from './creators/creators.component';
import { CreatorDetailComponent }      from './creator-detail/creator-detail.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'title/:id', component: TitleDetailComponent },
  { path: 'titles', component: TitlesComponent },
  { path: 'creator/:id', component: CreatorDetailComponent },
  { path: 'creators', component: CreatorsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}