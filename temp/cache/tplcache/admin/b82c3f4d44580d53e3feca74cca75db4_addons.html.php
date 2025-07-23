<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<body class="body-main">
<ul id="admin_sub_title">
	<li class="sub"><a>插件列表</a></li>
	<li class="unsub"><a href="javascript:up_addon();"><i class="typcn typcn-upload" style="font-size:15px;"></i> 上传插件</a></li>
</ul>
<div id="admin_right_b">
	<div class="divtips">
	注：插件必须选择分组才会被启用，开发插件参考<a href="https://www.xxfseo.com/spider/203.html" target="blank">《小旋风·万能蜘蛛池》插件开发说明</a>

	</div>
  <table border="0" align="center" cellpadding="3" cellspacing="0" class="table_b">
	<tr>
	  <td width="20" align='center' class="title_bg">序号</td>
      <td width="150" class="title_bg">插件名称</td>
	  <td width="70" align='center' class="title_bg">标识</td>
	  <td width="180" class="title_bg">开启的分组</td>
	  <td width="300" align='center' class="title_bg">描述</td>
	  <td width="70" align='center' class="title_bg">作者</td>
	  <td width="40" align='center' class="title_bg">版本</td>
	  <td width="80" align='center' class="title_bg">状态</td>
      <td width="120" align='center' class="title_bg">管理</td>
	  <td class="title_bg"></td>
    </tr>
<?php $_from=$this->_var['list']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
    <tr onmouseover=this.bgColor='#EDF8FE'; onmouseout=this.bgColor='#ffffff'; bgcolor='#ffffff'>
	  <td align="center"><?php echo $this->_var['vo']['id']; ?></td>
      <td><?php echo $this->_var['vo']['title']; ?></td>
	  <td><?php echo $this->_var['vo']['name']; ?></td>
	  <td align="center"><font  color="#ff6600"><?php echo $this->_var['vo']['groupname']; ?></font></td>
	  <td><?php echo $this->_var['vo']['description']; ?></td>
	  <td align="center"><?php echo $this->_var['vo']['author']; ?></td>
	  <td align="center"><?php echo $this->_var['vo']['version']; ?></td>
      <td align="center">
	  <?php if($this->_var['vo']['errmsg']): ?>
		错误
	 <?php else: ?>
		<?php if($this->_var['vo']['status']): ?>
			<a class="button button_small button_success" href="?admin-addons-status-sid-0-name-<?php echo $this->_var['vo']['name']; ?>" title="点击关闭启用">已启用</a>
		<?php else: ?>
			<a class="button button_small button_warning" href="?admin-addons-status-sid-1-name-<?php echo $this->_var['vo']['name']; ?>" title="点击启用">未启用</a>
		<?php endif; ?>
	<?php endif; ?></td>
   <td align="center">
		<a class="button button_small" href="?admin-addons-config-name-<?php echo $this->_var['vo']['name']; ?>">配置</a>&nbsp;&nbsp;
		<a href="?admin-addons-del-name-<?php echo $this->_var['vo']['name']; ?>" class="button button_small button_remove" onclick='return confirm("确定删除?删除后不可恢复!");'><i class="typcn typcn-trash"></i></a>
		</td>
	  <td></td>
    </tr>
<?php endforeach; else: ?>
	<tr bgcolor='#ffffff'>
		<td colspan='10' height="25" align="center">暂无插件！</td>
	</tr>
<?php endif; unset($_from); ?><?php $this->pop_vars(); ?>
	
  </table>
<script type="text/javascript">
function up_addon(){
	top.art.dialog.open('?admin-addons-upload',{ lock:true,opacity:0.3,title:'上传插件',id:'uptxtifrm',width:'750px',height:'400px',close: function () {
		location.reload();
	}});
}
</script>
<div class="runtime"></div>  
</div>
<?php echo $this->fetch('footer.html'); ?>
</body>
</html>