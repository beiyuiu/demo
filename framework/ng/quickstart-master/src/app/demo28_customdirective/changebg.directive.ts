import { Directive ,Input ,ElementRef ,OnInit} from '@angular/core';

@Directive({ selector: '[changebg]' })
export class ChangeBgDirective implements OnInit{
    @Input() changebg:string;
    constructor(private myElRef:ElementRef) { 
        console.log("爱定义构造函数");
    }

    ngOnInit(){
        this.myElRef.nativeElement.style.backgroundColor = this.changebg;
    }
}