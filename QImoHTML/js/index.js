// JavaScript Document

$(document).ready(function(e) {
	huandeng(0)
	xiala(0)
	tz(0)
	dr(0)
	xw(0)
	huad(0)
	
	$(".yiji").mouseover(function(e){
		xl_num=$(".yiji").index(this)
		xiala(xl_num)
	});
	
	$(".yiji").mouseout(function(e){
		$(".yiji ul").hide()
	});
	
	$(".one_left li").mouseover(function(e){
		tz_num=$(".one_left li").index(this)
		tz(tz_num)
		tm(tz_num)
	});
	
	$(".three_z li").mouseover(function(e){
		dr_num=$(".three_z li").index(this)
		xw(dr_num)
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

function tz(tz_n)
{
	$(".one_right li").hide()
	$(".one_right li:eq("+tz_n+")").show()
}

function tm(tm_n)
{
	$(".one_left li img").css("opacity","0.3")
	$(".one_left li:eq("+tm_n+") img").css("opacity","1")
}


function dr(dr_n)
{
	$(".three_s ul li").hide()
	
	$(".three_s ul li:eq("+dr_n+")").fadeIn(2000)
	
	dr_n++;
	if(dr_n>=$(".three_s ul li").length)
		{
			dr_n=0;
		}
	dr_x=dr_n
	dr_t=window.setTimeout("dr(dr_x)",3500)
}


function xw(xw_n)
{
	$(".zixun").hide()
	$(".zixun:eq("+xw_n+")").show()
	
}


function huad(hd_m)
{
	$(".four_x").animate({left:-1337*hd_m})
	hd_m++;
	if(hd_m>=$(".four_x li").length)
	{
		hd_m=0;
	}
	hd_z=hd_m
	hd_t=window.setTimeout("huad(hd_z)",2300)
}




