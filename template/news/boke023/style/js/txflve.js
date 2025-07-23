//设置cookie 
function setCookie(name,value){ 
    var exp = new Date();  
    exp.setTime(exp.getTime() + 10*60*1000);//有效期10分钟
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 
//取cookies函数 
function getCookie(name){ 
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)")); 
    if(arr != null) return unescape(arr[2]); return null; 
}

window.onload = function(){
	if(getCookie("footad")==0){
    //在时间内
	document.getElementById("logotu").style.display="none";
	document.getElementById("wenziyun").style.display="none";
	document.getElementById("hot").style.display="none";
	document.getElementById("cxslide_x").style.display="none";
	}else{
    //不在时间内	
	document.getElementById("logotu").style.display="block";
	document.getElementById("cxslide_x").style.display="block";
	document.getElementById("hot").style.display="block";
	document.getElementById("wenziyun").style.display="block";
	}
}
//关闭底部广告
function closeFootAd() {
	alert("您将进入清爽模式，10分钟内不显示广告~");
	//document.getElementById("wenziyun").style.display="none";
	//document.getElementById("hot").style.display="none";
	//document.getElementById("cxslide_x").style.display="none";
	//document.getElementById("logotu").style.display="none";
	setTimeout("document.getElementById('wenziyun').style.display='none'",100);
	setTimeout("document.getElementById('lunbo').style.display='none'",300);
	setTimeout("document.getElementById('cxslide_x').style.display='none'",500);
	setTimeout("document.getElementById('hot').style.display='none'",800);
	setTimeout("document.getElementById('logotu').style.display='none'",1200);
  
	setCookie("footad","0");
}

/**  **/
document.addEventListener('copy', function() {
		var selection = window.getSelection(),
			pagelink = '\u5fae\u8d5a\u7f51\u002d\u7248\u6743\u6240\u6709: ' + document.location.href,
			copytext = selection + pagelink,
			newdiv = document.createElement('div');
		newdiv.style.position = 'absolute';
		newdiv.style.left = '-99999px';
		document.body.appendChild(newdiv);
		newdiv.innerHTML = pagelink;
		selection.selectAllChildren(newdiv);
		window.setTimeout(function () {
			document.body.removeChild(newdiv);
		}, 100);
	});

(function(aVe){aVe.fn.cxSlide=function(JdN){if(!this.length)return;JdN=aVe.extend({},aVe.cxSlide.defaults,JdN);var acg=this,Jgf={};Jgf.fn={};var cYa;Jgf.box=acg.find(".box"),Jgf.list=Jgf.box.find(".list"),Jgf.items=Jgf.list.find("li"),Jgf.itemSum=Jgf.items.length;if(Jgf.itemSum<=1)return;Jgf.numList=acg.find(".btn"),Jgf.numBtns=Jgf.numList.find("li"),Jgf.plusBtn=acg.find(".plus"),Jgf.minusBtn=acg.find(".minus"),Jgf.boxWidth=Jgf.box.width(),Jgf.boxHeight=Jgf.box.height(),Jgf.s=0;if(JdN.btn&&!Jgf.numList.length){cYa="";for(var YbC=1;YbC<=Jgf.itemSum;YbC++)cYa+="<li class='b_"+YbC+"'>"+YbC+"</li>";Jgf.numList=aVe("<ul></ul>",{class:"btn",html:cYa}).appendTo(acg),Jgf.numBtns=Jgf.numList.find("li")}JdN.plus&&!Jgf.plusBtn.length&&(Jgf.plusBtn=aVe("<div></div>",{class:"plus"}).appendTo(acg)),JdN.minus&&!Jgf.minusBtn.length&&(Jgf.minusBtn=aVe("<div></div>",{class:"minus"}).appendTo(acg)),Jgf.fn.on=function(){if(!JdN.auto)return;Jgf.fn.off(),Jgf.run=setTimeout(function(){Jgf.fn.goto()},JdN.time)},Jgf.fn.off=function(){typeof Jgf.run!="undefined"&&clearTimeout(Jgf.run)},Jgf.fn.checkBtn=function(aVe){Jgf.numList.length&&Jgf.numBtns.eq(aVe).addClass("selected").siblings("li").removeClass("selected")},Jgf.fn.goto=function(aVe){Jgf.fn.off();var acg=typeof aVe=="undefined"?Jgf.s+1:parseInt(aVe,10),cYa=Jgf.s,YbC=Jgf.itemSum-1;if(acg==Jgf.s){Jgf.fn.on();return}acg>YbC?acg=0:acg<0&&(acg=YbC),Jgf.fn.checkBtn(acg);var eQb;switch(JdN.type){case"x":eQb=Jgf.boxWidth*acg,acg==0&&cYa==YbC?(Jgf.items.eq(0).css({left:Jgf.boxWidth*Jgf.itemSum}),eQb=Jgf.boxWidth*Jgf.itemSum):cYa==0&&(Jgf.items.eq(0).css({left:""}),Jgf.box.scrollLeft(0)),Jgf.box.stop(!0,!1).animate({scrollLeft:eQb},JdN.speed);break;case"y":eQb=Jgf.boxHeight*acg,acg==0&&cYa==YbC?(Jgf.items.eq(0).css({top:Jgf.boxHeight*Jgf.itemSum}),eQb=Jgf.boxHeight*Jgf.itemSum):cYa==0&&(Jgf.items.eq(0).css({top:""}),Jgf.box.scrollTop(0)),Jgf.box.stop(!0,!1).animate({scrollTop:eQb},JdN.speed);break;case"fade":Jgf.items.css({display:"none",position:"absolute",top:0,left:0,zIndex:""}),Jgf.items.eq(cYa).css({display:"",zIndex:1}),Jgf.items.eq(acg).css({zIndex:2}).fadeIn(JdN.speed);break;case"toggle":Jgf.items.eq(acg).show().siblings("li").hide()}Jgf.s=acg,Jgf.box.queue(function(){Jgf.fn.on(),Jgf.box.dequeue()})},Jgf.box.hover(function(){Jgf.fn.off()},function(){Jgf.fn.on()}),JdN.btn&&Jgf.numList.delegate("li",JdN.events,function(){Jgf.fn.goto(Jgf.numBtns.index(aVe(this)))}),JdN.plus&&Jgf.plusBtn.bind(JdN.events,function(){Jgf.fn.goto()}),JdN.minus&&Jgf.minusBtn.bind(JdN.events,function(){Jgf.fn.goto(Jgf.s-1)}),Jgf.fn.checkBtn(JdN.start),Jgf.fn.goto(JdN.start)},aVe.cxSlide={defaults:{events:"click",type:"x",start:0,speed:800,time:5e3,auto:!0,btn:!0,plus:!1,minus:!1}}})(jQuery);function sidefixed(){var aVe=$("#float"),JdN;var acg=$("#float").offset().top;var Jgf=$("#box").offset().top;$(window).scroll(function(){JdN=Math.max(document.body.scrollTop||document.documentElement.scrollTop);if($(".index-z").height()>$(".index-y").height()){if(JdN>acg){aVe.addClass("fixedbox-on")}else{aVe.removeClass("fixedbox-on")}}})}$(function(){var aVe=location.href;var JdN=$(".place a:eq(1)").attr("href");var acg=$("#pull");var Jgf=$("#nav ul");var cYa=Jgf.height();$("#nav li a").each(function(){if($(this).attr("href")==aVe||$(this).attr("href")==JdN)$(this).parent().addClass("on")});$("#menu li a").each(function(){if($(this).attr("href")==aVe||$(this).attr("href")==JdN)$(this).parent().addClass("on")});$("#gotop").click(function(){$("body,html").animate({scrollTop:0},1e3)});$(acg).on("click",function(aVe){aVe.preventDefault();Jgf.slideToggle()});$(window).resize(function(){var aVe=$(window).width();if(aVe>320&&Jgf.is(":hidden")){Jgf.removeAttr("style")}});sidefixed();function YbC(aVe){var JdN=document.getElementsByTagName("*");for(s=0;s<JdN.length;s++){if(JdN[s].className==aVe){return JdN[s]}}}var eQb=YbC("menu_zzjs_net").getElementsByTagName("li");tabCon=YbC("sub_zzjs").getElementsByTagName("ul");for(i=0;i<eQb.length;i++){(function(){var aVe=i;eQb[aVe].onmouseover=function(){for(o=0;o<tabCon.length;o++){tabCon[o].style.display="none";eQb[o].className="";if(aVe==o){this.className="this_zzjs";tabCon[o].style.display="block"}}}})()}});// JavaScript Document