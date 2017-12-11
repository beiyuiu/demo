import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sexchange'
})

export class SexChangePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if(value===1){
            if(args[0] || args.length==0){
            return "男"
            }
            else{
            return "boy";
            }
        }
        if(value===0){
            if(args[0] || args.length==0){
            return "女"
            }
            else{
            return "girl";
            }
        }
        
    }
}