// JavaScript Document

$(document).ready(function(e) {
	huandeng(0)
	xiala(0)

	
	$(".yiji").mouseover(function(e){
		xl_num=$(".yiji").index(this)
		xiala(xl_num)
	});
	
	$(".yiji").mouseout(function(e){
		$(".yiji ul").hide()
	});
	
});


function huandeng(hd_n)
{
	$(".huandeng").animate({left:-1990*hd_n})
	hd_n++;
	if(hd_n>=$(".huandeng li").length)
	{
		hd_n=0;
	}
	hd_x=hd_n
	hd_t=window.setTimeout("huandeng(hd_x)",2300)
}

function xiala(xl_n)
{
	$(".yiji ul").hide()
	$(".yiji ul:eq("+xl_n+")").show()
}






