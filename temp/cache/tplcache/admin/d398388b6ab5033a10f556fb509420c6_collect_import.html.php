<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<div style="padding:0 10px 10px 10px;">
<form method="post">
<fieldset>
	<legend title="点击展开/收起">导入规则</legend>
	<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" id="tagContent0">
<?php if($this->_var['id']): ?>
	<tr>
		<td>覆盖规则：
			<font color="blue"><?php echo $this->_var['name']; ?></font>
		</td>
	</tr>
<?php else: ?>
	<tr>
		<td>所属模型：<select name="arctype">
			<?php echo $this->_var['class_option']; ?>
			</select>
		</td>
	</tr>
<?php endif; ?>
	<tr>
	  <td><textarea name="code" id="text" type="text" style="height:250px;width:98%;"></textarea></td>
	</tr>
	<tr>
	  <td><button type="button" id="dosave" class="button">确定导入</button></td>
	</tr>
	</table>
</fieldset>
</form>
<script type="text/javascript">
$("#dosave").click(function(){
		$.ajax({
			type:"post",
			url:"?admin-collect-import-id-<?php echo $this->_var['id']; ?>",
			data:$("form").serialize(),
			dataType:'json',
			timeout:28000,
			global:false,
			success:function(data){
				if(data.status==1){
					showAlert('success',data.info);
					setTimeout(function(){ var win = art.dialog.open.origin;win.location.reload(); top.art.dialog.list['nodeTestifrm'].close(); },2000);
				}else{
					showAlert('error',data.info);
				}
			}
		});
	 return false;
	});
</script>
</body>
</html>