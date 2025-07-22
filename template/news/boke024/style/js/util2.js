(function(){

	var oDiv=document.getElementById("daohangbg");
	var H=0,iE6;
	var Y=oDiv;
	while(Y){H+=Y.offsetTop;Y=Y.offsetParent};
	iE6=window.ActiveXObject&&!window.XMLHttpRequest;
	if(!iE6){
		window.onscroll=function()
		{
			var s=document.body.scrollTop||document.documentElement.scrollTop;
			if(s>H){oDiv.className="daohangbg2";if(iE6){oDiv.style.top=(s-H)+"px";}}
			else{oDiv.className="div1";}	
		};
	}

})();