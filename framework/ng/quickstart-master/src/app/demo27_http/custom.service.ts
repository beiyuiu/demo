import { Injectable } from '@angular/core';

@Injectable()
export class CustomService {

    constructor() { }

//检查用户是否登录
    checkUserLogin(){
        return false;
    }
}