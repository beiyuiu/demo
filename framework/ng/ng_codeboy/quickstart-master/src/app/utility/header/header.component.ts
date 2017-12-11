import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../service/myhttp.service';

@Component({
    selector: 'storeHeader',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    isUserLogin:boolean = false;
    uName:string = ""; 
    constructor(private myHttp:MyHttpService) { }

    ngOnInit() {
        this.checkUserLogin();
     }

    checkUserLogin(){
        this.myHttp.sendRequest('http://localhost/ajia_code/data/user/session_data.php').subscribe((result:any)=>{
            if(result.uid){
                this.isUserLogin = true;
                this.uName = result.uname;
            }else{
                this.isUserLogin = false;
            }
        })
    }

    logout(){
        this.myHttp.sendRequest('http://localhost/ajia_code/data/user/logout.php').subscribe((result:any)=>{
            if(result.code==200){
                this.isUserLogin =false;
                this.uName = "";
            }
        })
    }
}