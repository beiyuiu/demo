import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    //标识是否为开发环境
    isDev:boolean  = false;
    
    constructor() { }

    mylog(msg:any){
        if(this.isDev){console.log(msg);}
    }
}