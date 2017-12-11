import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo34',
    template: `
        <h1>demo34</h1>
        <carousel [interval]="NextPhotoInterval" [noWrap]="noLoopSlides">
            <slide *ngFor="let slidez of slides; let index=index" [active]="slidez.active">
                <img [src]="slidez.image" style="margin:auto;">

                <div class="carousel-caption">
                    <h3 style="background-color: transparent;color: white;">Slide {{index + 1}}</h3>
                    <p style="background-color: transparent;color: white;">{{slidez.text}}</p>
                </div>
            </slide>
        </carousel>
    `,
    styleUrls:['assets/css/bootstrap.css']
})

export class Demo34Component implements OnInit {
     //图片之间轮播的间隔时间
    private NextPhotoInterval: number = 1000;
    //是否要禁用循环播放
    private noLoopSlides: boolean = false;
    //Photos
    private slides: Array<any> = [];

    constructor() { }

    ngOnInit() {
        this.slides.push(
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' }
        );
     }
}