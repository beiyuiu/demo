import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
    selector: 'demo24',
    template: `
        <h1>服务</h1>
        <button (click)="handleClick()">clickMe</button>
    `
})

export class Demo24Component implements OnInit {
    constructor(private myLogService:LogService) { }

    ngOnInit() { }

    handleClick(){
        //console.log('user money:100000000000000000');
        this.myLogService.mylog('user money:100000000000000000');
    }
}