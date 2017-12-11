import {Component, OnInit,OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'orderConfirmStepThree', 
    template: `<h1 style="text-align:center">距离跳转{{nb}}S</h1>`
})

export class OrderConfirmStepThreeComponent implements OnInit ,OnDestroy{
    nb : number = 5;
    timer : any;
    constructor(private myRouter : Router) {}

    ngOnInit() {
        this.jumpTo();
    }
   

    jumpTo() {
        this.timer = setInterval(() => {
            this.nb--;
            if (this.nb == 0) {
                clearInterval(this.timer);
                this.timer = null;
                this.myRouter
                    .navigateByUrl('/index');
            }
        }, 1000);
    } 
    ngOnDestroy(){
        if(this.timer){
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}