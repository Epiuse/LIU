// JavaScript Document
$(document).ready(function(e) {
	huandeng(0)
	xl(0)
	zl(0)
	cj(0)
	yc(0)
	
	$(".yiji").mouseover(function(e) {
	a=$(".yiji").index(this)
	xl(a)
    });
	$(".yiji").mouseout(function(e) {
        $(".yiji ul").hide()
    });
	
	$(".zl li").mouseover(function(e){
		b=$(".zl li").index(this)
		zl(b)
	}); 
	$(".chaju li").mouseover(function(e){
		c=$(".chaju li").index(this)
		cj(c)
	});
	$(".four_r li").mouseover(function(e){
		d=$(".four_r li").index(this)
		
		yc(d)
	});
	$(".")
})

function huandeng(n)
{
	$(".hd").animate({left:-2200*n})
	n++
	if(n>=$(".hd img").length)n=0
	x=n
	t=window.setTimeout("huandeng(x)",3000)
}

function xl(m)
{
	$(".yiji ul").hide()
	$(".yiji ul:eq("+m+")").show()
}

function zl(x)
{
	$(".onebottom_1_xia li").hide()
	$(".onebottom_1_xia li:eq("+x+")").show()
}

function cj(cj_n)
{
	$(".biaoqian_4 li").hide()
	$(".biaoqian_4 li:eq("+cj_n+")").show()
}

function yc(yc_n)
{
	$(".four_l li").hide()
	$(".four_l li:eq("+yc_n+")").show()
	$(".four_r li").css("opacity","0.4")
	$(".four_r li:eq("+yc_n+")").css("opacity","1")
}


















//liuzhouxin