import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'myindex',
    template: `
        <h1>首页</h1>
        <hr/>
        <myslides></myslides>
    `
})

export class MyIndexComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}