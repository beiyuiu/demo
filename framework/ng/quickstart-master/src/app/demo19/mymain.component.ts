import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mymain',
    templateUrl: './mymain.component.html'
})

export class MyMainComponent implements OnInit {
    loginResult:boolean =true;
    constructor() { }

    ngOnInit() { }

    rcvLogin(data:any){
        console.log(data);
        this.loginResult = data;
    }
}