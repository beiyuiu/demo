import { Component, OnInit } from '@angular/core';
import { CustomService} from './custom.service';

@Component({
    selector: 'demo27',
    template: `
        <ul *ngIf="isUserLogin">
            <li>test01</li>
            <li>test02</li>
            <li>test03</li>
        </ul>
    `
})

export class Demo27Component implements OnInit {
    isUserLogin:boolean = true;
    constructor(private myService:CustomService) { }

    ngOnInit() { 
        this.isUserLogin=this.myService.checkUserLogin();
    }
}