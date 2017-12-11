import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo07',
    templateUrl: './demo07.component.html'
})

export class Demo07Component implements OnInit {
    constructor() { }

    ngOnInit() { }
    login(){
        alert("请输入对应的用户名和密码");
    }
    register(){
        alert("注册成功");
    }
}