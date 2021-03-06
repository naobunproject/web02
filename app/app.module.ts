import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TitleDetailComponent }  from './title-detail/title-detail.component';
import { TitlesComponent }      from './titles/titles.component';
import { TitleService }          from './title.service'; 
import { CreatorDetailComponent }  from './creator-detail/creator-detail.component';
import { CreatorsComponent }      from './creators/creators.component';
import { CreatorService }          from './creator.service'; 
import { IndexComponent } from './index/index.component';

import { AppRoutingModule }     from './app-routing.module';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMobileComponent,
    HeroComponent,
    FooterComponent,
    MainMenuComponent,
    SubscribeComponent,
    TitleDetailComponent,
    TitlesComponent,
    CreatorDetailComponent,
    CreatorsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TitleService, CreatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
