import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html'
})

export class ParentComponent implements OnInit {
    sonName:string = "tom454";
    constructor() { }

    ngOnInit() { }

    rcvMsg(data:any){
        console.log("父组件接收到子组件数据为"+data);
    }
}