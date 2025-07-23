jQuery(document).ready(function() {
	function a(a, b, c) {
		var d, e, f;
		document.selection ? (a.focus(), sel = document.selection.createRange(), sel.text = c ? b + sel.text + c : b, a.focus()) : a.selectionStart || "0" == a.selectionStart ? (d = a.selectionStart, e = a.selectionEnd, f = e, a.value = c ? a.value.substring(0, d) + b + a.value.substring(d, e) + c + a.value.substring(e, a.value.length) : a.value.substring(0, d) + b + a.value.substring(e, a.value.length), f += c ? b.length + c.length : b.length - e + d, d == e && c && (f -= c.length), a.focus(), a.selectionStart = f, a.selectionEnd = f) : (a.value += b + c, a.focus())
	}
	var b, c, d, e;
	Date.prototype.format = function(a) {
		var b, c = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			S: this.getMilliseconds()
		};
		/(y+)/.test(a) && (a = a.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
		for (b in c) new RegExp("(" + b + ")").test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? c[b] : ("00" + c[b]).substr(("" + c[b]).length)));
		return a
	}, b = (new Date).format("yyyy-MM-dd hh:mm:ss"), c = b.toLocaleString(), d = document.getElementById("comment") || 0, e = {
		daka: function() {
			a(d, "??????????????????????????????" + c, "????????????????????????????????????~")
		},
	}, window.SIMPALED = {}, window.SIMPALED.Editor = e
})

/* <![CDATA[ */
    function grin(tag) {
    	var myField;
    	tag = ' ' + tag + ' ';
        if (document.getElementById('comment') && document.getElementById('comment').type == 'textarea') {
    		myField = document.getElementById('comment');
    	} else {
    		return false;
    	}
    	if (document.selection) {
    		myField.focus();
    		sel = document.selection.createRange();
    		sel.text = tag;
    		myField.focus();
    	}
    	else if (myField.selectionStart || myField.selectionStart == '0') {
    		var startPos = myField.selectionStart;
    		var endPos = myField.selectionEnd;
    		var cursorPos = endPos;
    		myField.value = myField.value.substring(0, startPos)
    					  + tag
    					  + myField.value.substring(endPos, myField.value.length);
    		cursorPos += tag.length;
    		myField.focus();
    		myField.selectionStart = cursorPos;
    		myField.selectionEnd = cursorPos;
    	}
    	else {
    		myField.value += tag;
    		myField.focus();
    	}
    }
/* ]]> */
