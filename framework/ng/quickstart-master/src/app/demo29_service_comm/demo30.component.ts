import { Component, OnInit } from '@angular/core';
import { MyService } from './myservice.service';

@Component({
    selector: 'demo30',
   template: `
        <h1>demo30</h1>
        <button (click)="handleClick()">读取服务数据</button>
    `
})

export class Demo30Component implements OnInit {
    constructor(private myservice:MyService) { }

    ngOnInit() { }

    handleClick(){
        console.log(this.myservice.list);
    }
}