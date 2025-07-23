<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<body class="body-main">
<ul id="admin_sub_title">
	<li class="sub"><a>采集临时库</a></li>
</ul>
<div id="admin_right_b">
<div class="divtips">这里的文件为采集发布策略的临时库，当内容达到设定的条数时，文件就会保存到内容库中，目前用于文章库<br>当前设定的值为：文章库：<?php echo $this->_var['collect_send_num_body']; ?>条</div>
<form action="" method="post" id="form" name="form"> 
  <table border="0" align="center" cellpadding="3" cellspacing="0" class="table_b">
	<tr>
      <td width="200" class="title_bg">文件名</td>
	  <td width="100" align='center' class="title_bg">所属库</td>
	  <td width="120" align='center' class="title_bg">分组</td>
	  <td width="100" align='center' class="title_bg">行数</td>
	  <td width="100" align='center' class="title_bg">文件大小</td>
	  <td width="150" align='center' class="title_bg">更新时间</td>
      <td width="250" align='center' class="title_bg">管理</td>
	  <td class="title_bg"></td>
    </tr>
<?php $_from=$this->_var['list']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
    <tr onmouseover=this.bgColor='#EDF8FE'; onmouseout=this.bgColor='#ffffff'; bgcolor='#ffffff'>
      <td>&nbsp;&nbsp;<?php echo $this->_var['vo']['filename']; ?></td>
	  <td align="center"><?php echo $this->_var['vo']['txtname']; ?>库</td>
	  <td align="center"><?php echo $this->_var['vo']['typename']; ?></td>
	  <td align="center"><?php echo $this->_var['vo']['count']; ?></td>
	  <td align="center"><?php echo $this->_var['vo']['filesize']; ?></td>
	  <td align="center"><?php echo $this->_var['vo']['filemtime']; ?></td>
      <td align="center">
		<a class="button button_small" href="javascript:" onclick="review('<?php echo $this->_var['vo']['file_encode']; ?>','<?php echo $this->_var['vo']['filename']; ?>');">查看文档</a>&nbsp;&nbsp;
		<a class="button button_small button_inverse" href="javascript:" onclick="todb('<?php echo $this->_var['vo']['file_encode']; ?>','<?php echo $this->_var['vo']['filename']; ?>',<?php echo $this->_var['vo']['count']; ?>);"><i class="typcn typcn-export"></i>强制入库</a>&nbsp;&nbsp;
		<a href="?admin-collect-tempdb_del-f-<?php echo $this->_var['vo']['file_encode']; ?>" class="button button_small button_remove" onclick='return confirm("确定删除?删除后不可恢复!");'><i class="typcn typcn-trash"></i></a></td>
	  <td></td>
    </tr>
<?php endforeach; else: ?>
	<tr bgcolor='#ffffff'>
		<td colspan='8' height="25" align="center">暂无文档！</td>
	</tr>
<?php endif; unset($_from); ?><?php $this->pop_vars(); ?>
	<tr>
      <td colspan="8" class="tdbg content_page" align="center"><?php echo $this->_var['pages']; ?></td>
	</tr>
	<tr>
      <td colspan="8" class="tdbg">
		<div style="color:#cc0000;padding:10px;font-size:14px;line-height:25px">
		<p>文件保存在 “temp/cache_tempdb” 文件夹，每个模型（网站分组）一个文件</p>
		</div>
	  </td>
	</tr>
  </table>
</form>
<script type="text/javascript">
function review(file,title){
	top.art.dialog.open('?admin-collect-tempdb_review-f-'+file,{ lock:true,opacity:0.3,title:'文件预览 ['+title+']',id:'reviewifrm',width:'700px'});
}
function todb(file,title,count){
	if(confirm("------------------------\n确定将此文件入库？\n文件：《"+title+"》\n行数："+count+"，未达到入库设定值！\n------------------------")){
		showDialog('正在处理！请稍等...','notice');
		$.ajax({
			type:"get",
			url:'?admin-collect-tempdb_todb-f-'+file,
			dataType:'json',
			success:function(data){
				if(data.status==1){
					showAlert('success',data.info,'?admin-collect-tempdb');
				}else{
					showAlert('error',data.info);
				}
			},error:function(){
				showAlert('error','入库失败，系统错误！');
			}
		});
	}
}
</script>
<div class="runtime"></div>  
</div>
<?php echo $this->fetch('footer.html'); ?>
</body>
</html>