import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'pay',
    template: `
        <h1>支付页</h1>
        <a routerLink="/send"></a>
        <p>{{"价格为"+myPrice}}</p>
    `
})

export class PayComponent implements OnInit {
    myPrice:string = "";
    constructor(private myAR:ActivatedRoute) { }

    ngOnInit() {
        this.myAR.params.subscribe((data:any)=>{
            console.log(data);
            this.myPrice = data.price;
        })
     }
}