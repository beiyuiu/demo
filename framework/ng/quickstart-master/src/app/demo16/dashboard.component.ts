import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'dashboard',
    template: `
        <h1>dash</h1>
        <h1>{{pic}}</h1>
    `
})

export class DashboardComponent implements OnInit {
    pic:any = "";
    constructor(private myAR:ActivatedRoute) { }

    ngOnInit() { 
        this.myAR.params.subscribe((data:any)=>{
            console.log(data);
            this.pic = data.value;
        })
    }
}