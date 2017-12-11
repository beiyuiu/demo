import { Component, OnInit } from '@angular/core';
import { MyService } from './myservice.service';

@Component({
    selector: 'demo29',
    providers:[MyService],
    template: `
        <h1>demo29</h1>
        <button (click)="handleClick()">服务数组插入数据</button>
        <hr/>
        <demo30></demo30>
    `
})

export class Demo29Component implements OnInit {
    constructor(private myservice:MyService) { }

    ngOnInit() { }

    handleClick(){
        this.myservice.list.push(100);
        console.log("操作完成后"+this.myservice.list);
    }
}