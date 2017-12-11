import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template: `
        <h1>登录页</h1>
        <input type="text" [(ngModel)]="value"/>
        <button (click)="jumpTo()">跳转</button>
        <a [routerLink]="['/dashboard',{value:this.value}]">跳转到dash</a>
    `
})

export class LoginComponent implements OnInit {
    value:any = "";
    constructor(private myDash:Router) { }

    ngOnInit() { }

    jumpTo(){
        this.myDash.navigate(['/dashboard',{value:this.value}]);
    }
}