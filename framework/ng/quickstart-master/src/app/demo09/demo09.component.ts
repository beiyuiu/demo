import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo09',
    templateUrl: './demo09.component.html',
    styleUrls:['./test.css']
})

export class Demo09Component implements OnInit {
    myColor:string = "#ff0";
    constructor() { }

    ngOnInit() { }
}