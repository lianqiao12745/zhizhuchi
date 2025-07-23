<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<body class="body-main">
<ul id="admin_sub_title">
	<li class="sub"><a><?php echo $this->_var['title']; ?>管理</a></li>
	<li class="unsub"><a href="javascript:uptxt();"><i class="typcn typcn-upload" style="font-size:15px;"></i>  导入<?php echo $this->_var['title']; ?>库</a></li>
	<li class="tips">注：一行一个，为了性能，每个文件最好不要超过2M，每个分类的库文件数量不超过500个</li>
</ul>
<div id="admin_right_b">
<style type="text/css">
.classlist{ width: 100%;margin:0}
.classlist li .common{ font-weight:bold;}
.classlist li .wanzhan{ color:#ff6600}
.classlist li .wanzhan:hover{ color:#fff}
.classlist .typefirst{ border: 0;color: #ff3300;font-weight: bold;font-size: 14px;padding-right: 0;}
.classlist .typefirst:hover{ background:none; color:#ff3300}
</style>
<?php if(ACTION_NAME == 'diy'): ?>
<div class="divtips" style="font-size:13px;margin-top:10px;">
	<p>模板调用标签： <u>&#123;getone name="diy"/}</u>，如txt内容中需识别模板标签，设置fetchstr参数即可识别，如：fetchstr=1，<u>&#123;getone name="diy" fetchstr="1"/}</u></p>
</div>
<?php endif; ?>
<ul class="classlist">
<li><a href="javascript:" class="typefirst">模型公共库：</a></li>
<li <?php if($this->_var['type'] == '' && $this->_var['wtype'] == ''): ?>class="cur"<?php endif; ?>><a href="?admin-txtdata-<?php echo $this->_var['action']; ?>">全部<?php echo $this->_var['title']; ?></a></li>
<?php $_from=$this->_var['class_list']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
	<li <?php if($this->_var['type'] == $this->_var['vo']['dirname']): ?>class="cur"<?php endif; ?>><a href="?admin-txtdata-<?php echo $this->_var['action']; ?>-type-<?php echo $this->_var['vo']['dirname']; ?>"><?php echo $this->_var['vo']['name']; ?>(<b style="color:#ff6600;"><?php echo (!isset($this->_var['vo']['filenum']) || $this->_var['vo']['filenum']==='') ? 0 : $this->_var['vo']['filenum']; ?></b>)</a></li>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
</ul>
<div style="border-top:1px solid #ddd;margin:5px 0;"></div>
<ul class="classlist" style="margin-bottom:10px;">
<li><a href="javascript:" class="typefirst">网站分组库：</a></li>
<?php if(! $this->_var['domainlist']): ?> <li><a href="javascript:">无分组</a></li> <?php endif; ?>
<?php $_from=$this->_var['domainlist']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
	<li <?php if($this->_var['wtype'] == $this->_var['vo']['dirname']): ?>class="cur"<?php endif; ?>><a href="?admin-txtdata-<?php echo $this->_var['action']; ?>-wtype-<?php echo $this->_var['vo']['dirname']; ?>"><?php echo $this->_var['vo']['name']; ?>(<b style="color:#ff6600;"><?php echo (!isset($this->_var['vo']['filenum']) || $this->_var['vo']['filenum']==='') ? 0 : $this->_var['vo']['filenum']; ?></b>)</a></li>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
</ul>
<div style="color:#cc0000;padding-bottom:10px;font-size:14px;line-height:25px">
	<p>注：修改网站分组可选择使用模型公共库或者使用网站分组独立库</p>
</div>
<form action="<?php echo url('admin/txtdata/delall'); ?>" method="post" id="form" name="form"> 
  <table border="0" align="center" cellpadding="3" cellspacing="0" class="table_b">
   <input type="hidden" name="d" value="<?php echo $this->_var['input_dir']; ?>" />
	<tr>
	  <td align='center' width="30" class="title_bg">选择</td>
	  <td width="50" align='center' class="title_bg">id</td>
      <td width="200" class="title_bg">文件名</td>
	  <td width="100" align='center' class="title_bg">所属分类</td>
	  <td width="100" align='center' class="title_bg">行数</td>
	  <td width="100" align='center' class="title_bg">文件大小</td>
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
	  <td align="right"><a href="<?php echo $this->_var['vo']['typefurl']; ?>"><?php echo $this->_var['vo']['typename']; ?></a>&nbsp;</td>
	  <td align="center"><?php echo $this->_var['vo']['count']; ?></td>
	  <td align="center"><?php echo $this->_var['vo']['filesize']; ?></td>
	  <td align="center"><?php echo $this->_var['vo']['filemtime']; ?></td>
      <td align="center"><a class="button button_small" href="javascript:" onclick="review('<?php echo $this->_var['vo']['path_encode']; ?>','<?php echo $this->_var['vo']['filename']; ?>');">预览</a>&nbsp;&nbsp;<a class="button button_small button_primary download" f="<?php echo $this->_var['vo']['path_encode']; ?>">下载</a>&nbsp;&nbsp;<a href="?admin-txtdata-del-f-<?php echo $this->_var['vo']['path_encode']; ?>" class="button button_small button_remove" onclick='return confirm("确定删除?删除后不可恢复!");'><i class="typcn typcn-trash"></i></a></td>
	  <td></td>
    </tr>
<?php endforeach; else: ?>
	<tr bgcolor='#ffffff'>
		<td colspan='9' height="25" align="center">暂无文档！</td>
	</tr>
<?php endif; unset($_from); ?><?php $this->pop_vars(); ?>
	<tr>
      <td colspan="9" height='30' class="tdbg">
	  <span class="right"></span>&nbsp;&nbsp;<input name="chkall" type="checkbox" id="chkall" onclick=checkall(this.form) value="checkbox">&nbsp;<label for="chkall">全选</label>  
      <button type="submit" class="button button_remove" onClick="if(confirm('确定要删除吗?')){ form.action='?admin-txtdata-delall';}else{ return false}"><i class="typcn typcn-delete"></i>批量删除</button>
	  <button type="submit" class="button button_primary" onclick="form.action='?admin-txtdata-download';"><i class="typcn typcn-download"></i>批量下载</button>
</td>
    </tr>
	<tr>
      <td colspan="9" class="tdbg content_page" align="center"><?php echo $this->_var['pages']; ?></td>
	</tr>
	<?php if(ACTION_NAME == 'body'): ?><tr>
      <td colspan="9" class="tdbg">
		<div style="color:#cc0000;padding:10px;font-size:14px;line-height:25px">
		<p>设置说明：</p>
		<p>1. txt文件里，一行放一篇文章</p>
		<p>2. 如果有标题，则格式为：标题******内容</p>
		</div>
	  </td>
	</tr><?php endif; ?>
  </table>
</form>
<script type="text/javascript">
$('a.download').click(function(){
	$.download('?admin-txtdata-download','f='+$(this).attr('f')+'&d=<?php echo $this->_var['input_dir']; ?>');
	return false;
});
function review(file,title){
	top.art.dialog.open('?admin-txtdata-review-f-'+file,{ lock:true,opacity:0.3,title:'文件预览 ['+title+']',id:'reviewifrm',width:'700px'});
}
function uptxt(){
	top.art.dialog.data('title', '<?php echo $this->_var['title']; ?>');
	top.art.dialog.data('type', '<?php echo $this->_var['type']; ?>');
	top.art.dialog.open('?admin-txtdata-upload_more-d-<?php echo $this->_var['input_dir']; ?>',{ lock:true,opacity:0.3,title:'上传<?php echo $this->_var['title']; ?>',id:'uptxtifrm',width:'750px',height:'400px',close: function () {
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