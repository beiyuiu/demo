import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'

@Component({
    selector: 'notFound',
    templateUrl: './notFound.component.html',
    
   
})

export class NotFoundComponent implements OnInit {
    constructor(private myLocation:Location) { }

    ngOnInit() { }

    jumpPre(){
        this.myLocation.back();
    }
}