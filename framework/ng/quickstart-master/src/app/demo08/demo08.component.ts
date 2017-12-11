import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo08',
    templateUrl: './demo08.component.html'
})

export class Demo08Component implements OnInit {
    imgUrl:string="img/img8.jpg";
    linkUrl:string = "http://www.tmooc.cn  ";
    myValue:string = "HELLO TOM";
    myResult:string = "HELLO world";
    myName:string = "";
    constructor() { }

    ngOnInit() { }
    handleModelChange(data:any){
        console.log(this.myName);
        console.log(data);
    }
}