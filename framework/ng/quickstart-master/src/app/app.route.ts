/*配置路由词典*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo12Component } from './demo12/demo12.component';
import { Demo13Component } from './demo13/demo13.component';
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
import { MyMainComponent }  from './demo19/mymain.component';
import { MyIndexComponent }  from './demo20/myindex.component';
import { Demo23Component }  from './demo23/demo23.component';
import { Demo24Component }  from './demo24/demo24.component';
import { Demo25Component }  from './demo25/demo25.component';
import { Demo26Component }  from './demo26_http/demo26.component';
import { Demo27Component }  from './demo27_http/demo27.component';
import { Demo28Component }  from './demo28_customdirective/demo28.component';
import {Demo29Component} from './demo29_service_comm/demo29.component';
import {Demo30Component} from './demo29_service_comm/demo30.component';
import {Demo31Component} from './demo31_guard/demo31.component';
import { MyGuard} from './demo31_guard/myguard.service';
import {Demo32Component} from './demo32_lifecycle/demo32.component';
import {  Demo34Component } from './demo34_carsouel/demo34.component';


import { NotFoundComponent }  from './notFound/not-found.component';

const routes: Routes = [
    { path: '', redirectTo:'/demo29',pathMatch:'full'},
  
  { path: 'demo34', component: Demo34Component},
  { path: 'demo32', component: Demo32Component},
  { path: 'demo31', component: Demo31Component,canActivate:[MyGuard] },
  { path: 'demo30', component: Demo30Component },
  { path: 'demo29', component: Demo29Component },
  { path: 'demo28', component: Demo28Component },
  { path: 'demo27', component: Demo27Component },
  { path: 'demo26', component: Demo26Component },
  { path: 'demo25', component: Demo25Component },
  { path: 'demo24', component: Demo24Component },
  { path: 'demo23', component: Demo23Component },
  { path: 'demo12', component: Demo12Component },
  { path: 'demo13', component: Demo13Component },
  { path: 'demo14/:uName', component: Demo14Component },
  { path: 'check', component: CheckComponent },
  { path: 'pay/:price', component: PayComponent },
  { path: 'send', component: SendComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mail', component: MailComponent,children:[
    /*{ path: '', component: InBoxComponent },*/
    {path: '',redirectTo:'mail/inbox',pathMatch:'full'},
    { path: 'inbox', component: InBoxComponent },
    { path: 'outbox', component: OutBoxComponent },
    { path: '**', component: NotFoundComponent },
  ] },
  {path :'parent',component:ParentComponent},
  {path :'mymain',component:MyMainComponent},
  {path :'myindex',component:MyIndexComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//edemo12/demo12. const routedComponents = [Demo12Compdemo12/demo12.];