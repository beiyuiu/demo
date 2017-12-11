if(typeof jQuery!=="function"){
	throw new Error("my-ui依赖于jQuery，必须先引入jQuery");
}else{
/****************************dropdown*********************************************/
$(()=>{
	$("[data-trigger=dropdown]").parent()
        .hover(function(){
            $(this)
				.children().last()
				.toggleClass("in")
		});
})
/******************accordion**********************************************************/
$(()=>{
	$("[data-trigger=tab]")
	.on(
		"click",
		":even",
		e=>
		$(e.target)
			.next().toggleClass("in")
			.siblings(":nth-child(2n)").removeClass("in")
	);
})
}