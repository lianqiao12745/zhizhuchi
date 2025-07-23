
addComment = {
	moveForm : function(commId, parentId, respondId, postId) {
		var t = this, div, comm = t.I(commId), respond = t.I(respondId), cancel = t.I('cancel-comment-reply-link'), parent = t.I('comment_parent'), post = t.I('comment_post_ID');

		if ( ! comm || ! respond || ! cancel || ! parent )
			return;

		t.respondId = respondId;
		postId = postId || false;

		if ( ! t.I('wp-temp-form-div') ) {
			div = document.createElement('div');
			div.id = 'wp-temp-form-div';
			div.style.display = 'none';
			respond.parentNode.insertBefore(div, respond);
		}

		comm.parentNode.insertBefore(respond, comm.nextSibling);
		if ( post && postId )
			post.value = postId;
		parent.value = parentId;
		cancel.style.display = '';

		cancel.onclick = function() {
			var t = addComment, temp = t.I('wp-temp-form-div'), respond = t.I(t.respondId);

			if ( ! temp || ! respond )
				return;

			t.I('comment_parent').value = '0';
			temp.parentNode.insertBefore(respond, temp);
			temp.parentNode.removeChild(temp);
			this.style.display = 'none';
			this.onclick = null;
			return false;
		}

		try { t.I('comment').focus(); }
		catch(e) {}

		return false;
	},

	I : function(e) {
		return document.getElementById(e);
	}
}



//????????????????????????
//*********************************************************
//*********************************************************
// ?????????    ??????Cookie
// ?????????    sName, sValue,iExpireDays
// ?????????    ???
//*********************************************************
function SetCookie(sName, sValue,iExpireDays) {
	if (iExpireDays){
		var dExpire = new Date();
		dExpire.setTime(dExpire.getTime()+parseInt(iExpireDays*24*60*60*1000));
		document.cookie = sName + "=" + escape(sValue) + "; expires=" + dExpire.toGMTString()+ "; path=/;domain=zhangliseo.com";
	}
	else{
		document.cookie = sName + "=" + escape(sValue)+ "; path=/;domain=zhangliseo.com";
	}
}
 
//*********************************************************
//*********************************************************
// ?????????    ??????Cookie
// ?????????    Name
// ?????????    Cookie???
//*********************************************************
function GetCookie(sName) {
	var arr = document.cookie.match(new RegExp("(^| )"+sName+"=([^;]*)(;|$)"));
	if(arr !=null){return unescape(arr[2])};
	return null;
 
}
//*********************************************************
//*********************************************************
// ?????????    ????????????
// ?????????    ???
// ?????????    ???
//*********************************************************
function LoadRememberInfo() {
	var strName=GetCookie("author");
	var strEmail=GetCookie("email");
	var strHomePage=GetCookie("url");
	var bolRemember=GetCookie("chkRemember");
    var a_vlaue= document.getElementById("author");
    if (a_vlaue != null){
	    if(bolRemember=="true"){
		    if(strName){document.getElementById("author").value=decodeURIComponent(strName);};
		    if(strEmail){document.getElementById("email").value=strEmail;};
		    if(strHomePage){document.getElementById("url").value=decodeURIComponent(strHomePage);};
		    if(bolRemember){document.getElementById("saveme").checked=bolRemember;};
	    }
 
	    if(GetCookie("username")){
		    document.getElementById("author").value=unescape(GetCookie("username"));
	    }
    }
}
 
//*********************************************************
//*********************************************************
// ?????????    ????????????
// ?????????    ???
// ?????????    ???
//*********************************************************
function SaveRememberInfo() {
	var strName=document.getElementById("author").value;
	var strEmail=document.getElementById("email").value;
	var strHomePage=document.getElementById("url").value;
	var bolRemember=document.getElementById("saveme").checked;
 
	SetCookie("author",encodeURIComponent(strName),365);
	SetCookie("email",strEmail,365);
	SetCookie("url",encodeURIComponent(strHomePage),365);
	SetCookie("chkRemember",bolRemember,365);
 
}
//*********************************************************
//*********************************************************
// ?????????    ????????????
// ?????????    ???
// ?????????    ???
//*********************************************************
function RemoveRememberInfo() {
	SetCookie("author",'',365);
	SetCookie("email",'',365);
	SetCookie("url",'',365);
	SetCookie("chkRemember",'false',365);
 
}
//*********************************************************
//*********************************************************
// ?????????    ????????????
// ?????????    ???
// ?????????    ???
//*********************************************************
jQuery(document).ready(function($){
       LoadRememberInfo();
    $("#respond #submit").click(function(){
       SaveRememberInfo();
    });
    $("#respond #reset").click(function(){
        RemoveRememberInfo();
    });
});