import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.route';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { Demo02Component }  from './demo02/demo02.component';
import { Demo03Component }  from './demo03/demo03.component';
import { Demo04Component }  from './demo04/demo04.component';
import { Demo05Component }  from './demo05/demo05.component';
import { Demo06Component }  from './demo06/demo06.component';
import { Demo07Component }  from './demo07/demo07.component';
import { MyInputComponent }  from './demo07/myinput.component';
import { Demo08Component }  from './demo08/demo08.component';
import { Demo09Component }  from './demo09/demo09.component';
import { Demo10Component }  from './demo10/demo10.component';
import { Demo11Component }  from './demo11/demo11.component';
import { TestDirective }  from './demo11/test.directive';
import { Demo12Component }  from './demo12/demo12.component';
import { Demo13Component }  from './demo13/demo13.component';
import { NotFoundComponent }  from './notFound/not-found.component';
import { Demo14Component }  from './demo14/demo14.component';
import { CheckComponent }  from './demo15/check.component';
import { PayComponent }  from './demo15/pay.component';
import { SendComponent }  from './demo15/send.component';
import { LoginComponent }  from './demo16/login.component';
import { DashboardComponent }  from './demo16/dashboard.component';
import { MailComponent }  from './demo17/mail.component';
import { InBoxComponent }  from './demo17/inbox.component';
import { OutBoxComponent }  from './demo17/outbox.component';
import { ParentComponent }  from './demo18/parent.component';
import { SonComponent }  from './demo18/son.component';
import { MyMainComponent }  from './demo19/mymain.component';
import { MyHeaderComponent }  from './demo19/myheader.component';
import { MyIndexComponent }  from './demo20/myindex.component';
import { MySlidesComponent }  from './demo20/myslides.component';
import { Demo23Component }  from './demo23/demo23.component';
import { SexChangePipe }  from './demo23/sex.pipe';
import { Demo24Component }  from './demo24/demo24.component';
import {LogService} from './demo24/log.service';
import { Demo25Component }  from './demo25/demo25.component';
import {HeartService} from './demo25/heartbeat.service';
import { Demo26Component }  from './demo26_http/demo26.component';
import {MyHttpService} from './demo26_http/myhttp.service';
import { Demo27Component }  from './demo27_http/demo27.component';
import {CustomService} from './demo27_http/custom.service';
import { Demo28Component }  from './demo28_customdirective/demo28.component';
import {ChangeBgDirective }  from './demo28_customdirective/changebg.directive';
import {Demo29Component} from './demo29_service_comm/demo29.component';
import {Demo30Component} from './demo29_service_comm/demo30.component';
import {MyService} from './demo29_service_comm/myservice.service';
import {Demo31Component} from './demo31_guard/demo31.component';
import { MyGuard} from './demo31_guard/myguard.service';
import {Demo32Component} from './demo32_lifecycle/demo32.component';
import {Demo33Component} from './demo32_lifecycle/demo33.component';
import {  Carousel } from './demo34_carsouel/carousel.component';
import {  Slide } from './demo34_carsouel/slide.component';
import {  Demo34Component } from './demo34_carsouel/demo34.component';

@NgModule({
  providers:[LogService,HeartService,MyHttpService,CustomService,MyGuard],
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,HttpModule,],
  declarations: [
      Demo34Component,
      Carousel,
      Slide,
      Demo33Component,
      Demo32Component,
      Demo31Component,
      Demo29Component,
      Demo30Component,
      ChangeBgDirective,
      Demo28Component,
      Demo27Component,
      Demo26Component,
      Demo25Component,
      Demo24Component,
      Demo23Component,
      SexChangePipe,
      MySlidesComponent,
      MyIndexComponent,
      MyMainComponent,
      MyHeaderComponent,
      SonComponent,
      ParentComponent,
      OutBoxComponent,
      InBoxComponent,
      MailComponent,
      DashboardComponent,
      LoginComponent,
      SendComponent,
      PayComponent,
      CheckComponent,
      Demo14Component,
      NotFoundComponent,
      Demo13Component, 
      Demo12Component, 
      TestDirective, 
      Demo11Component, 
      Demo10Component, 
      Demo09Component, 
      Demo08Component, 
      MyInputComponent, 
      Demo07Component, 
      Demo06Component,
      Demo05Component, 
      Demo04Component, 
      Demo03Component, 
      Demo02Component, 
      AppComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
