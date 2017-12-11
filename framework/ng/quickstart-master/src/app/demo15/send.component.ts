import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'send',
    template: `
        <h1>发货页</h1>
        <button (click)="jumpToCheck()">商品查看</button>
    `
})

export class SendComponent implements OnInit {
    constructor(private myRouter:Router) { }

    ngOnInit() { }

    jumpToCheck(){
        this.myRouter.navigate(['/check',{id:10}]);
    }
}