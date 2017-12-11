import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/myhttp.service';

@Component({
    selector: 'storeList',
    templateUrl: `./list.component.html`,
    styleUrls :['assets/css/products.css']
})

export class ListComponent implements OnInit {
    list:Array<any> = [];
    pageCount:number = 0;
    nowPage:number = 1;
    constructor(private myHttp:MyHttpService) { }

    ngOnInit() { 
        this.loadList();
    }

    loadList(){
        this.myHttp.sendRequest('http://localhost/ajia_code/data/product/list.php?pno='+this.nowPage).subscribe((result:any)=>{
            console.log(result);
            //服务器返回当前页数据
            this.list=result.data;
            //服务器返回的总页数
            this.pageCount=result.pageCount;
            console.log(this.list);
           //准备数组放置数组元素，让数组元素个数和pageCount一样
           //给页码指定加载数据的功能
        })
    }
}