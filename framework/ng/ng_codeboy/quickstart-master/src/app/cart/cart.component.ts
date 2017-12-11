import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/myhttp.service';

@Component({
    selector: 'storeCart',
    templateUrl: './cart.component.html',
    styleUrls: ['assets/css/cart.css']
})

export class CartComponent implements OnInit {
    list:Array<any> = [];
    code:number = 200;
    uid:number = 1 ;
    constructor(private myHttp:MyHttpService) { }

    ngOnInit() { 
        this.addCart();
    }

    addCart(){
        this.myHttp.sendRequest('http://localhost/ajia_code/data/cart/list.php?uid='+this.uid).subscribe((result:any)=>{
            console.log(result);
            this.code = result.code;
            this.list = result.data;
        })
    }
    jumpTo(){
        
    }
}