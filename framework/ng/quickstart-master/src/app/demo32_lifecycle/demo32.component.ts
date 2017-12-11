import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'demo32',
    template: `
        <h1>demo32</h1>
        <button (click)="add()">clickMe</button>
    <hr/>
    <demo33 *ngIf="count<3" [myNum]="count" [myStu]="stu"></demo33>
    `
})

export class Demo32Component implements OnInit {
     count:number=0;
     stu = {age:10,score:60};
     constructor() { }

    ngOnInit() { }
    add(){
        this.count++;
        this.stu.score++;
    }
}