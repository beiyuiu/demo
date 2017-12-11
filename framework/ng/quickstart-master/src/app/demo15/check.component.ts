import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'check',
    template: `
        <h1>商品查看页</h1>
        <button (click)="jumpToPay()">去支付</button>
        <p>{{"id为"+uid}}</p>
    `
})

export class CheckComponent implements OnInit {
    uid:string = "";
    constructor(private myRouter:Router,private myAR:ActivatedRoute) { }

    ngOnInit() { 
        this.myAR.params.subscribe((data:any)=>{
            console.log(data);
            this.uid = data.id;
        })
    }
    
    jumpToPay(){
        this.myRouter.navigateByUrl('/pay/100');
    }
}