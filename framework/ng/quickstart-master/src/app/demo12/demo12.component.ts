import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'demo12',
    templateUrl: './demo12.component.html'
})

export class Demo12Component implements OnInit {
    userInput:string = "";
    constructor(private myRouter:Router) { }

    ngOnInit() { }
    //跳转
    jump(){
        this.myRouter.navigateByUrl('demo13');
    }
    jumpTO(){
        this.myRouter.navigateByUrl('demo14/'+this.userInput);//此处忧伤；地址拼接应当注意
    }
}