document.onkeydown=nextpage;

function nextpage(event){

var $target = $(event.target);
//console.log($target.attr("id"));

if($target.attr("id") != "txaArticle"){
   event = event ? event : (window.event ? window.event : null);
   if (event.keyCode==39)
   {
   	if (document.getElementById("nextpage")){
     document.getElementById("nextpage").click();
      }
   }
  if (event.keyCode==37)
  {
   	if (document.getElementById("prevpage")){
     document.getElementById("prevpage").click();
     }
  }
}
}

$(document).ready(function(){ 

if(zbp.cookie.get("kownPageTips")!="1"){
	if (document.getElementById("closePageTips")){

var closePageTips=document.getElementById("closePageTips"),pageTipsBox=closePageTips.parentNode;
pageTipsBox.style.display="block";
closePageTips.onclick=function(){pageTipsBox.style.display="none"; zbp.cookie.set("kownPageTips","1",365);}
}
}
});

