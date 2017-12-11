import { Injectable } from '@angular/core';

@Injectable()
export class HeartService {
    timer:any = "";
    //isbeat:boolean = false;
    constructor() { }

    start(){
       this.timer= setInterval(()=>{
            console.log("你好，世界");
        },1000)
    }

    stop(){
        clearInterval(this.timer);
    }
}