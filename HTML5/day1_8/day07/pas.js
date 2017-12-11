/**
 * Created by web-01 on 2017/10/23.
 */
var http = require('http');
var cheerio = require('cheerio');
http.get('http://tuijian.hao123.com/hotrank',function(res){
    "use strict";
    var data = "";
    res.on("data",function(chunk){
        data += chunk;
    });
    res.on('end',function(){
        filter(data);
    })
});
function filter(data){
    "use strict";
    var result = {};
    var $ = cheerio.load(data);
    var temp_div = $('.top-wrap');
    var temp_title = [];
    temp_div.each(function(index,item){
        temp_title.push($(item).find('h2').text());
        var temp_arr = $(item).find('.point-bd').find('.point-title');
        var innerResult = result[temp_title[index]] = [];
        temp_arr.each(function(_index,_item){
            innerResult.push($(_item).text())
        })
    })
    console.log(result);
}