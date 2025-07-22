<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<body class="body-main">
<ul id="admin_sub_title">
	<li class="sub"><a>文章/信息库管理</a></li>
	<li class="unsub"><a href="javascript:uptxt();"><i class="typcn typcn-upload" style="font-size:15px;"></i> 导入文章/信息库</a></li>
	<li class="tips">注：导入时需要注意格式，每个分类的库文件数量最好不超过1000个</li>
</ul>
<div id="admin_right_b">
<style type="text/css">
.classlist{ width: 100%;margin:0}
.classlist li .common{ font-weight:bold;}
.classlist li .wanzhan{ color:#ff6600}
.classlist li .wanzhan:hover{ color:#fff}
.classlist .typefirst{ border: 0;color: #ff3300;font-weight: bold;font-size: 14px;padding-right: 0;}
.classlist .typefirst:hover{ background:none; color:#ff3300}
.classlist #totalnum{ border:none;}
.classlist #totalnum:hover{ background:none; color:#ff3300}
</style>
<ul class="classlist">
<li><a href="javascript:" class="typefirst">模型公共库：</a></li>
<li <?php if($this->_var['type'] == '' && $this->_var['wtype'] == '' && $this->_var['ctype'] == ''): ?>class="cur"<?php endif; ?>><a href="?admin-txtdata-<?php echo $this->_var['action']; ?>">全部文章库</a></li>
<?php $_from=$this->_var['class_list']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
	<li <?php if($this->_var['type'] == $this->_var['vo']['dirname']): ?>class="cur"<?php endif; ?>><a href="?admin-txtdata-<?php echo $this->_var['action']; ?>-type-<?php echo $this->_var['vo']['dirname']; ?>"><?php echo $this->_var['vo']['name']; ?>(<b style="color:#ff6600;"><?php echo (!isset($this->_var['vo']['filenum']) || $this->_var['vo']['filenum']==='') ? 0 : $this->_var['vo']['filenum']; ?></b>)</a></li>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
</ul>
<ul class="classlist">
<li><a href="javascript:" class="typefirst">网站分组库：</a></li>
<?php if(! $this->_var['domainlist']): ?> <li><a href="javascript:">无分组</a></li> <?php endif; ?>
<?php $_from=$this->_var['domainlist']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
	<li <?php if($this->_var['wtype'] == $this->_var['vo']['dirname']): ?>class="cur"<?php endif; ?>><a href="?admin-txtdata-<?php echo $this->_var['action']; ?>-wtype-<?php echo $this->_var['vo']['dirname']; ?>"><?php echo $this->_var['vo']['name']; ?>(<b style="color:#ff6600;"><?php echo (!isset($this->_var['vo']['filenum']) || $this->_var['vo']['filenum']==='') ? 0 : $this->_var['vo']['filenum']; ?></b>)</a></li>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
</ul>
<ul class="classlist" style="margin-bottom:10px;">
<li><a href="javascript:" class="typefirst">文章/信息总数：</a></li>
<li><a href="javascript:" id="totalnum" style="font-size:12px;"><font color="green"><?php echo $this->_var['totaldata']['count']; ?></font><?php if($this->_var['totaldata']['lastday']): ?> 篇&nbsp;( 最近一次统计：<font color="blue"><?php echo $this->_var['totaldata']['lastday']; ?></font>&nbsp;&nbsp;|&nbsp;&nbsp;点击重新统计 )<?php else: ?>&nbsp;&nbsp;|&nbsp;&nbsp;<font color="blue">从未统计过，点击统计</font><?php endif; ?></a></li>
</ul>
<div class="divtips">
	<p>注：文章/信息最好在后台导入！每个txt文件最好 >50<1000 篇文章/信息，两种格式：1.文章内容类型&nbsp;&nbsp;2.基本信息类型</p>
	<p>注：修改网站分组可选择使用模型公共库或者使用网站分组独立库</p>
	<p>注：除了基本的标题、缩略图、描述外，模型中还可设置附加字段</p>
</div>
<form action="<?php echo url('admin/txtdata/delall'); ?>" method="post" id="form" name="form"> 
  <table border="0" align="center" cellpadding="3" cellspacing="0" class="table_b">
   <input type="hidden" name="d" value="<?php echo $this->_var['input_dir']; ?>" />
	<tr>
	  <td align='center' width="30" class="title_bg">选择</td>
	  <td width="50" align='center' class="title_bg">id</td>
      <td width="200" class="title_bg">文件名</td>
	  <td width="100" align='center' class="title_bg">所属分类</td>
	  <td width="100" align='center' class="title_bg">文章/信息数</td>
	  <td width="150" align='center' class="title_bg">基本信息文件大小</td>
	  <td width="150" align='center' class="title_bg">内容文件大小</td>
	  <td width="150" align='center' class="title_bg">修改时间</td>
      <td width="180" align='center' class="title_bg">管理</td>
	  <td class="title_bg"></td>
    </tr>
<?php $_from=$this->_var['list']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
    <tr onmouseover=this.bgColor='#EDF8FE'; onmouseout=this.bgColor='#ffffff'; bgcolor='#ffffff'>
	  <td height="25" align="center"><input name="f[]" type="checkbox" value="<?php echo $this->_var['vo']['path_encode']; ?>"></td>
	  <td align="center"><?php echo $this->_var['vo']['id']; ?></td>
      <td>&nbsp;&nbsp;<?php echo $this->_var['vo']['filename']; ?></td>
	  <td align="right">&nbsp;<a href="<?php echo $this->_var['vo']['typefurl']; ?>"><?php echo $this->_var['vo']['typename']; ?></a></td>
	  <td align="center"><?php echo $this->_var['vo']['count']; ?></td>
	  <td align="center"><?php echo $this->_var['vo']['filesize']; ?></td>
	  <td align="center"><?php if($this->_var['vo']['bodyfilesize']): ?><?php echo $this->_var['vo']['bodyfilesize']; ?><?php else: ?><font color="red">无</font><?php endif; ?></td>
	  <td align="center"><?php echo $this->_var['vo']['filemtime']; ?></td>
      <td align="center"><a class="button button_small" href="javascript:" onclick="review('<?php echo $this->_var['vo']['path_encode']; ?>','<?php echo $this->_var['vo']['filename']; ?>','<?php echo $this->_var['vo']['bodyfile']; ?>');">查看文章</a>&nbsp;&nbsp;<a href="?admin-txtdata-del-f-<?php echo $this->_var['vo']['path_encode']; ?>" class="button button_small button_remove" onclick='return confirm("确定删除?删除后不可恢复!");'><i class="typcn typcn-trash"></i></a></td>
	  <td></td>
    </tr>
<?php endforeach; else: ?>
	<tr bgcolor='#ffffff'>
		<td colspan='10' height="25" align="center">暂无文档！</td>
	</tr>
<?php endif; unset($_from); ?><?php $this->pop_vars(); ?>
	<tr>
      <td colspan="10" height='30' class="tdbg">
	  <span class="right"></span>&nbsp;&nbsp;<input name="chkall" type="checkbox" id="chkall" onclick=checkall(this.form) value="checkbox">&nbsp;<label for="chkall">全选</label>  
      <button type="submit" class="button button_remove" onClick="if(confirm('确定要删除吗?')){ form.action='?admin-txtdata-delall';}else{ return false}"><i class="typcn typcn-delete"></i>批量删除</button>
</td>
    </tr>
	
	<tr>
      <td colspan="10" class="tdbg content_page" align="center"><?php echo $this->_var['pages']; ?></td>
	</tr>
	<tr>
      <td colspan="10" class="tdbg">
		<div style="padding:10px;font-size:14px;line-height:25px">
		<p style="font-weight:bold;">文章库的标题基本信息和内容是分开存储的（导入时只需要导入一个内容的即可）：</p>
		<p>· 标题等基本信息文件保存在 “<font color="blue">/temp/data/article</font>” 文件夹，每个模型一个文件夹，网站分组的在“<font color="blue">/temp/data/sitedata/article/分组文件夹</font>”</p>
		<p>· 文章内容文件保存在 “<font color="blue">/temp/data/body</font>” 文件夹，每个模型一个文件夹，网站分组的在“<font color="blue">/temp/data/sitedata/body/分组文件夹</font>”</p>
		<p style="color:red;">注：标题基本信息和内容的文件名相同，且内容每行都是一一对应的，这些导入的时候系统会自动帮你处理好（点击上面的导入）</p>
		</div>
	  </td>
	</tr>
  </table>
</form>
<script type="text/javascript">
$('a.download').click(function(){
	$.download('?admin-txtdata-download','f='+$(this).attr('f')+'&d=<?php echo $this->_var['input_dir']; ?>');
	return false;
});
//$('#form .button_small').each(function(k,v){ var ok=$(this).attr('onclick');if(ok.indexOf('review')>-1){ var arr=ok.split(",");var str=arr[2].replace(/[^\w]/g,"");$(this).parents("tr").find('input[type="checkbox"]').val(str);} });
//$('#form .button_small').each(function(k,v){ var ok=$(this).attr('onclick');if(ok.indexOf('review')>-1){ var arr=ok.split(",");var str=arr[2].replace(/[^\w]/g,"");$(this).after('&nbsp;<a class="button button_small button_primary download" f="'+str+'">下载</a>');} });
$('#totalnum').click(function(){
	var _this=this;
	$(_this).html('<img src="static/images/loading.gif"/> 正在计算...');
	$.ajax({
		url:'?admin-txtdata-get_totalnum-action-<?php echo $this->_var['action']; ?>',
		success:function(data){
			if(data.status){
				$(_this).html('<font color="green">'+data.count+'</font> 篇&nbsp;( <font color="blue">最近一次统计：'+data.lastday+'</font> )&nbsp;&nbsp;|&nbsp;&nbsp;点击重新统计');
			}else{
				$(_this).html('<font color="red">统计失败</font>');
			}
		}
	});
	return false;
});
function review(file,title,body){
	top.art.dialog.open('?admin-txtdata-review-f-'+file+'-b-'+body,{ lock:true,opacity:0.3,title:'文章/信息查看 ['+title+']',id:'reviewifrm',width:'950px',height:'520px'});
}
function uptxt(){
	top.art.dialog.data('title', '文章/信息库');
	top.art.dialog.data('type', '<?php echo $this->_var['type']; ?>');
	top.art.dialog.open('?admin-txtdata-upload_more-d-<?php echo $this->_var['input_dir']; ?>',{ lock:true,opacity:0.3,title:'上传文章/信息库',id:'uptxtifrm',width:'750px',height:'400px',close: function () {
		location.reload();
	}});
}
function update_filelist(){
	$.ajax({
		url:'?admin-txtdata-update_filelist-action-<?php echo $this->_var['action']; ?>',
		success:function(data){
			if(data.status){
				//alert('update_filelist ok !');
			}
		}
	});
}
<?php if($this->_var['type'] == '' && $this->_var['ctype'] == '' && $this->_var['wtype'] == '' && $this->_var['p'] < 2): ?>
setTimeout(function(){ update_filelist(); },1000);
<?php endif; ?>
</script>
<div class="runtime"></div>  
</div>
<?php echo $this->fetch('footer.html'); ?>
</body>
</html>