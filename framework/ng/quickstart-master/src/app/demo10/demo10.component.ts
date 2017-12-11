import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo10',
    templateUrl: './demo10.component.html',

})

export class Demo10Component implements OnInit {
    myOpacity:any = 0;
    constructor() { }

    ngOnInit() { }
    myClick(){
        setInterval(()=>{
            this.myOpacity+=0.1;
            if(this.myOpacity>1){
                this.myOpacity=0;
            }
        },500)
        
    }
}