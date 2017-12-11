/**
 * Created by web-01 on 2017/10/23.
 */
function isPrime(num){
    "use strict";
    var start =new Date().getTime();
    do{
        var end =new Date().getTime();
    }while(end-start<=500)
    for(var i=2;i<=num;i++){
        if(num%i==0) break;
    }
    if(i==num){ return false;}
    else {return true;}
}
console.time("01");
var rs=isPrime(5);
console.timeEnd("01");
postMessage(rs);
onmessage =function(e){
    "use strict";
    var val=e.data;
    postMessage("UI线程传输的数据"+val);
}