import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo23',
    template: `
        <h1>自定义管道类</h1>
        <p>{{value | sexchange:false}}</p>
    `
})

export class Demo23Component implements OnInit {
    value:number = 1;
    constructor() { }

    ngOnInit() { }
}