$(function () {
Lotto = {};Lotto.comment = function(){$("#qq").blur(function(){$('#qq').attr("sl",true);$("#ajaxloading").html('<img src="../content/templates/SLgreen/qq/loading.gif"><a style="font-size:12px;margin-left:5px;">????????????QQ??????..</a>');$.getJSON('../content/templates/sygreen/qq/?qq='+$('#qq').val()+'&callback=?', function(q){if(q.name){$('#slname').val(q.name);$('#slmail').val($('#qq').val()+'@qq.com');$('#qq').attr("disabled",false);$("#ajaxloading").hide();}else{$("#ajaxloading").hide();$("#error").html('QQ??????????????????????????????????????????????????????').show().fadeOut(10000);$('#qq').attr("sl",false);}});});};Lotto.run = function(){this.comment();};Lotto.run();});

//(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("mouseover",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);$(function () {$("#slider").responsiveSlides({auto:true,pager:false,nav:true,speed:2000,namespace: "slide"});});

function slkeyword(){if(document.keyform.keyword.value.length == 0){alert("??????????????????????????????");document.keyform.keyword.focus();return false;}}
$(function(){$(".icon-navicon").each(function(){var e=$(this);var target=e.attr("data-target");e.click(function(){$(target).toggleClass("nav-navicon")})});});

var FpaksTeQ1="\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31\x2c\x73\x68\x75\x79\x6f\x6e\x67\x2e\x6e\x65\x74\x2c\x77\x79\x73\x2e\x6d\x65\x2c\x77\x61\x6e\x67\x79\x75\x73\x68\x75\x61\x6e\x67\x2e\x63\x6f\x6d\x2c\x6c\x69\x61\x6f\x74\x61\x6f\x6f\x2e\x63\x6e\x2c\x79\x65\x63\x68\x61\x6e\x67\x6c\x69\x61\x6e\x67\x2e\x63\x6f\x6d";var uvGb2=location["\x68\x6f\x73\x74\x6e\x61\x6d\x65"];var Vtyh3=uvGb2["\x73\x70\x6c\x69\x74"]("\x2e");if(Vtyh3["\x6c\x65\x6e\x67\x74\x68"]==3){uvGb2=Vtyh3[1]+"\x2e"+Vtyh3[2];}if(FpaksTeQ1["\x69\x6e\x64\x65\x78\x4f\x66"](uvGb2)<0){window["\x61\x6c\x65\x72\x74"]("\u4f60\u4f7f\u7528\u7684\u4e3a\u6536\u8d39\u6a21\u677f\uff0c\u8bf7\u8054\u7cfb\u820d\u529b\u8d2d\u4e70");window["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"]["\x68\x72\x65\x66"]="\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x73\x68\x75\x79\x6f\x6e\x67\x2e\x6e\x65\x74\x2f\x67\x6f\x2f\x73\x68\x65\x6c\x69\x2e\x68\x74\x6d\x6c";}

function dashangToggle(){$(".shang_box").fadeToggle();}function changeItem(i){var k = 3;for(var j = 0;j < k;j++){if(j == i){document.getElementById("sl_shang" + j).style.display = "block";}else{document.getElementById("sl_shang" + j).style.display = "none";}}}function opay(){document.getElementById("sl_shang").target="_parent";}

$(document).on('click','.slzanpd',function(){var a = $(this),id = a.data('slzanpd');if(slzanpd_check(id)) {alert('???????????????????????????');}else{$.post('', {	plugin: 'slzanpd',action: 'slzan',id:id},function(b){a.find('u').html(b);slzanpd_(a);alert('???????????????');});}});
function slzanpd_check(id) {return new RegExp('slzanpd_' + id + '=true').test(document.cookie);}
$('[data-slzanpd]').each(function() {var a = $(this),id = a.data('slzanpd');if(slzanpd_check(id)){slzanpd_(a);}else {a.attr('title', '?????????????????????')}});
function slzanpd_(a){a.css('cursor', 'not-allowed').attr('title', '?????????????????????');}


var ias = $.ias({
    container: ".left", //???????????????????????????
    item: ".list", //????????????
    pagination: ".pagenav", //????????????
    next: ".pagenav a.slnext", //???????????????
});

ias.extension(new IASTriggerExtension({
    text: '<div class="gengduo">????????????????????????</div>', //????????????????????????????????????
    offset: 1, //????????????????????? offset+1 ??????????????????????????????????????????????????????????????????????????????
}));
ias.extension(new IASSpinnerExtension());
ias.extension(new IASNoneLeftExtension({
    text: '<div class="gengduo">????????????????????????</div>', // ????????????????????????
}));


function copybq(){
$("body").bind('copy', function (e){if(typeof window.getSelection == "undefined") return;var body_element = document.getElementsByTagName('body')[0];var selection = window.getSelection();if (("" + selection).length < 30) return;var newdiv = document.createElement('div');newdiv.style.position = 'absolute';newdiv.style.left = '-99999px';body_element.appendChild(newdiv);newdiv.appendChild(selection.getRangeAt(0).cloneContents());if(selection.getRangeAt(0).commonAncestorContainer.nodeName == "PRE"){newdiv.innerHTML = "<pre>" + newdiv.innerHTML + "</pre>";}
newdiv.innerHTML += "<br />???????????????" + document.location.href + "";
selection.selectAllChildren(newdiv);window.setTimeout(function(){body_element.removeChild(newdiv);},200);});
}

function qzbh(){
document.writeln("<style>html{filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:grayscale(100%);filter:gray;}</style>");
}

function shangxia(){
jQuery(document).ready(function($) {$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body");$("#shang").mouseover(function() {up()}).mouseout(function() {clearTimeout(fq)}).click(function() {$body.animate({scrollTop: 0},400)});$("#xia").mouseover(function() {dn()}).mouseout(function() {clearTimeout(fq)}).click(function() {$body.animate({scrollTop: $(document).height()},400)});$("#cmmt").click(function() {$body.animate({scrollTop: $("#respond").offset().top},400)});});function up() {$wd = $(window);$wd.scrollTop($wd.scrollTop() - 1);fq = setTimeout("up()", 50)};function dn() {$wd = $(window);$wd.scrollTop($wd.scrollTop() + 1);fq = setTimeout("dn()", 50)};
}

function qzbh(){
document.writeln("<style>html{filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:grayscale(100%);filter:gray;}</style>");
}

function bdfx(){
document.writeln("<div class=\"bdsharebuttonbox\"><a href=\"#\" class=\"bds_weixin\" data-cmd=\"weixin\" title=\"???????????????\"></a><a href=\"#\" class=\"bds_qzone\" data-cmd=\"qzone\" title=\"?????????QQ??????\"></a><a href=\"#\" class=\"bds_tqq\" data-cmd=\"tqq\" title=\"?????????????????????\"></a><a href=\"#\" class=\"bds_tsina\" data-cmd=\"tsina\" title=\"?????????????????????\"></a><a href=\"#\" class=\"bds_t163\" data-cmd=\"t163\" title=\"?????????????????????\"></a><a href=\"#\" class=\"bds_more\" data-cmd=\"more\"></a></div>");
document.writeln("<script>window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":[\"qzone\",\"tsina\",\"weixin\",\"tqq\",\"t163\",\"meilishuo\",\"mogujie\",\"diandian\",\"huaban\",\"share189\",\"duitang\",\"hx\",\"fx\",\"youdao\",\"sdo\",\"qingbiji\",\"people\",\"xinhua\",\"mail\",\"kanshou\",\"isohu\",\"yaolan\",\"wealink\",\"xg\",\"ty\",\"iguba\",\"fbook\",\"twi\",\"linkedin\",\"copy\",\"print\"],\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"32\"},\"share\":{}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>");
}
