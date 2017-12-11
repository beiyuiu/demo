import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo05',
    templateUrl: './demo05.component.html'
})

export class Demo05Component implements OnInit {
    ulist:Array<Object> = [
        {sorce:70,age:25,sex:1},
        {sorce:70,age:25,sex:1},
        {sorce:70,age:25,sex:1},
        {sorce:83,age:25,sex:1},
        {sorce:90,age:25,sex:1}
    ];
    constructor() { }

    ngOnInit() { }
}