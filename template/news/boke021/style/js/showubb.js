//*********************************************************
// ?????????    ??????UBB
//*********************************************************
function UBB4ZBPexportUbbFrame() {

		objActive="txaArticle";

		var sUbbFrame="";

		sUbbFrame=sUbbFrame+("<div id=\"UbbLabel\" style=\"display:none;border: 1px solid #c0c0c0;margin: 1px;padding: 4px;\"><div onclick=\"$('#UbbFrame').hide().addClass('ubb-frame-hide');\" id=\"UbbFrame\" class=\"ubb-frame-hide\" style=\"display:none;position:absolute;z-index:540;width:280px;margin-top:24px;\"></div><span>");
		sUbbFrame=sUbbFrame+("<a onmousedown=\"if($('#UbbFrame').attr('class')=='ubb-frame-hide'){$('#UbbLabel').hide();}else{$('#UbbFrame').hide().addClass('ubb-frame-hide');}\" style=\"float:right;cursor:pointer;\"><img src=\""+bloghost+"zb_users/plugin/UBB4ZBP/images/close.png\"/></a>  ");
		sUbbFrame=sUbbFrame+("<a onmousedown=\"InsertText(objActive,ReplaceText(objActive,'[B]','[/B]'),true);\" style=\"cursor:pointer;\"><img src=\""+bloghost+"zb_users/plugin/UBB4ZBP/images/text_bold.png\"/></a>  ");
		sUbbFrame=sUbbFrame+("<a onmousedown=\"InsertText(objActive,ReplaceText(objActive,'[I]','[/I]'),true);\" style=\"cursor:pointer;\"><img src=\""+bloghost+"zb_users/plugin/UBB4ZBP/images/text_italic.png\"/></a>  ");
		sUbbFrame=sUbbFrame+("<a onmousedown=\"InsertText(objActive,ReplaceText(objActive,'[U]','[/U]'),true);\" style=\"cursor:pointer;\"><img src=\""+bloghost+"zb_users/plugin/UBB4ZBP/images/text_underline.png\"/></a>  ");
		sUbbFrame=sUbbFrame+("<a onmousedown=\"InsertText(objActive,ReplaceText(objActive,'[S]','[/S]'),true);\" style=\"cursor:pointer;\"><img src=\""+bloghost+"zb_users/plugin/UBB4ZBP/images/text_strikethrough.png\"/></a>  ");
		sUbbFrame=sUbbFrame+("<a  onclick=\"if($('#UbbFrame').attr('class')=='ubb-frame-hide'){UBB4ZBPinsertUbbFace();$('#UbbFrame').fadeIn('normal').removeClass('ubb-frame-hide');}else{$('#UbbFrame').fadeOut('normal').addClass('ubb-frame-hide');}\" style=\"cursor:pointer;\"><img src=\""+bloghost+"zb_users/plugin/UBB4ZBP/images/emoticon_smile.png\"/></a>  ");
		sUbbFrame=sUbbFrame+("</span>");
		sUbbFrame=sUbbFrame+("</div>");

		$("#txaArticle").before(sUbbFrame);

		$("#txaArticle").focus(function(){$("#UbbLabel").fadeIn("normal");})

}

//*********************************************************


//*********************************************************
// ?????????    ??????????????????HTML??????
// ?????????    ???
// ?????????    ???
//*********************************************************
function UBB4ZBPinsertUbbFace() {


		var aryFileName="";
		var strFileName="";
		var strFaceHtml="";
    strFaceName = UBB4ZBPFaceList;
		aryFileName = strFaceName.split("|");

		for (var i=0;i<aryFileName.length;i++)
		{
			strFileName = aryFileName[i];
			strFaceHtml=strFaceHtml + "<img src=\""+bloghost+"zb_users/plugin/UBB4ZBP/face/"+strFileName+".gif\" title=\""+strFileName+"\" alt=\""+strFileName+"\" onclick=\"InsertText(objActive,'[F]'+this.alt+'[/F]',false);\" style=\"padding:2px;cursor:pointer;\" />";
		}

		$("#UbbFrame").html(strFaceHtml);


}

function InsertText(objHTML,strText,bolReplace) {
	if(strText==""){return("")}
	var obj=document.getElementById(objHTML);
	if(document.selection){
		if (obj.currPos){
			if(bolReplace && (obj.value=="")){
				obj.currPos.text=strText;
			}
			else{
				obj.currPos.text+=strText;
			}
		}
		else{
			obj.value+=strText;
		}
	}
	else{
		if(bolReplace){
			obj.value=obj.value.slice(0,obj.selectionStart) + strText + obj.value.slice(obj.selectionEnd,obj.value.length);
		}
		else{
			obj.value=obj.value.slice(0,obj.selectionStart) + strText + obj.value.slice(obj.selectionStart,obj.value.length);
		}
	}
	//obj.focus();
}

function ReplaceText(objHTML,strPrevious,strNext) {
	var obj=document.getElementById(objHTML);
	var strText;
	if(document.selection && document.selection.type == "Text"){
		if (obj.currPos){
			var range = document.selection.createRange();
			range.text = strPrevious + range.text + strNext;
			return("");
		}
		else{
			strText=strPrevious + strNext;
			return(strText);
		}
	}
	else{
		if(obj.selectionStart || obj.selectionEnd){
			strText=strPrevious + obj.value.slice(obj.selectionStart,obj.selectionEnd) + strNext;
			return(strText);
		}
		else{
			strText=strPrevious + strNext;
			return(strText);
		}
	}
}


$(document).ready(function(){

UBB4ZBPexportUbbFrame();

$("#UbbFrame").bind("click", function(event) {
if (event && event.stopPropagation) {
event.stopPropagation();
} else {
event.cancelBubble = true;
}

}); 


$(document).bind("click", function(e){
var $target = $(e.target);
//console.log($target.attr("id"));
if ($target.parent().parent().parent().attr("id") != "UbbLabel") {
$('#UbbFrame').fadeOut('normal').addClass('ubb-frame-hide');
}
}); 


});
