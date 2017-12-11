import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
//EventEmitter事件触发器
@Component({
    selector: 'son',
    templateUrl: './son.component.html'
})

export class SonComponent implements OnInit {
    /*@Input() myName:string = "";*/
    //给输入属性myName取别名uName
    @Input('myName') uName:string = "";
    @Output()  customEvent = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    triggerEvent(){
        this.customEvent.emit('用户已登录');
    }
}