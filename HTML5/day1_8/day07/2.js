/**
 * Created by web-01 on 2017/10/23.
 */
function getSum(num){
    "use strict";
    var rs=0;
    for(var i=0;i<=num;i++){
        rs +=i;
    }
    return rs;
}
onmessage=function(e){
    "use strict";
    var val =e.data;
    var rs =getSum(val);
    postMessage(rs);
}