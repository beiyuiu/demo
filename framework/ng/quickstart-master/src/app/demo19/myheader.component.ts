import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'myheader',
    templateUrl: './myheader.component.html'
})

export class MyHeaderComponent implements OnInit {
    @Input() version:string = "";
    @Output()  checkEvent = new EventEmitter();
    isUserLogin:boolean = false;
    constructor() { }

    ngOnInit() { this.checkEvent.emit(this.isUserLogin);} 
}