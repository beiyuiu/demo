import { Component, OnInit } from '@angular/core';
import {HeartService} from './heartbeat.service';

@Component({
    selector: 'demo25',
    template: `
        <button (click)="StartClick()">开始</button>
        <button (click)="StopClick()">结束</button>
    `
})

export class Demo25Component implements OnInit {
    isShow:boolean = true;
    constructor(private myClick:HeartService) { }

    ngOnInit() { }

    StartClick(){
        this.myClick.start();
    }
    StopClick(){
        this.myClick.stop();
    }
}