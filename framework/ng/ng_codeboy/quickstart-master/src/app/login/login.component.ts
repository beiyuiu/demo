import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/myhttp.service';
import {Router} from '@angular/router';

@Component({
    selector: 'storeLogin',
    templateUrl: './login.component.html',
    styleUrls: ['assets/css/login.css']
})

export class LoginComponent implements OnInit {
   
    uName:string = "";
    uPwd:string = "";
    constructor(private myHttp:MyHttpService,private myRouter:Router) { }

    ngOnInit() { 
        this.checkLogin();
    }

    checkLogin(){
        //将用户名与密码发给服务器，根据服务器端返回登录结果
        this.myHttp.sendRequest('http://localhost/ajia_code/data/user/login.php?uname='+this.uName+"&upwd="+this.uPwd).subscribe((result:any)=>{
            console.log(result);
            if(result.code==200){
                this.myRouter.navigateByUrl('/index');
            }
        })
    }
}