import {Component, OnInit} from '@angular/core';
import {MyHttpService} from '../utility/service/myhttp.service';

@Component({
    selector: 'storeIndex',
    templateUrl: './index.component.html',
    styleUrls: ['assets/css/animate.css', 'assets/css/item_cat.css']
})

export class IndexComponent implements OnInit {
    carouselItems:Array<any> = [];
    newArrivalItems:Array<any> = [];
    recommendedItems:Array<any> = [];
    topSaleItems:Array<any> = [];
    //图片之间轮播的间隔时间
    private NextPhotoInterval: number = 1000;
    //是否要禁用循环播放
    private noLoopSlides: boolean = false;
    //Photos
    private slides: Array<any> = [];


    constructor(private myHttp:MyHttpService) { }

    ngOnInit() { 
        this.initData();
    }

    initData(){
        this.myHttp
            .sendRequest("http://localhost/ajia_code/data/product/index.php")
            .subscribe((result:any)=>{
                console.log(result);
                this.carouselItems = result.carouselItems;
                this.recommendedItems = result.recommendedItems;
                this.newArrivalItems = result.newArrivalItems;
                this.topSaleItems = result.topSaleItems;

                //给轮播图准备数据
                for(var i=0;i<this.carouselItems.length;i++){
                    this.slides.push(
                        {
                            image:this.carouselItems[i].img
                        }
                    )
                }
                

            })
    }
}