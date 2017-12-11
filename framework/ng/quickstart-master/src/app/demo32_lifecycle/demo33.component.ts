import { Component, OnInit,OnDestroy,OnChanges,Input,DoCheck } from '@angular/core';

@Component({
    selector: 'demo33',
    template: `
        <h1>demo33</h1>
    `
})

export class Demo33Component implements OnInit,OnDestroy,OnChanges {
    @Input() myNum:number;
    @Input() myStu:Object;
    constructor() { 
        console.log('demo33 constructor');
    }

    ngOnChanges(){
        console.log('demo33 onChanges');
    }
    ngDoCheck(){
        console.log('变化');
    }
    ngOnInit() { 
        console.log('demo33 onInit');
    }
    ngOnDestroy() { 
        console.log('demo33 onDestroy');
    }
}