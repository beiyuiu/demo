import { Directive,ElementRef,OnInit } from '@angular/core';
/*对元素进行操作进入ElementRef,初始化引入OnInit；构造函数constructor中实例化自定义指令；*/ 
@Directive({ selector: '[test]' })
export class TestDirective implements OnInit{
    //private public protected
    constructor(private el:ElementRef) {
        console.log('custom directive is called');
     }
     ngOnInit(){
         console.log('in onInit lifecycle hook');
         this.el.nativeElement.style.visibility = "hidden";
     }
}