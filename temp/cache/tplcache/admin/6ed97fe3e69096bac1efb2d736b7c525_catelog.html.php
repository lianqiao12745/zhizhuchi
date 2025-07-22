<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<body class="body-main">
<ul id="admin_sub_title">
	<li class="sub"><a>栏目管理</a></li>
	<li class="unsub"><a href="javascript:" onclick="edit(0);"><i class="typcn typcn-plus"></i>添加栏目</a></li>
	<li class="unsub"><a href="javascript:addmore();"><i class="typcn typcn-plus"></i>批量添加</a></li>
</ul>
<div id="admin_right_b">
<div class="divtips">
	<p>提示：栏目数量建议不要超过2000个！否则可能影响性能！模型中将模板设为栏目页，就可以给该模板添加栏目</p>
	<p><i class="typcn typcn-warning"></i>注：<b>网站分组可选择使用分组栏目或模型栏目，产品类型的栏目，需要指定产品库。未使用的分组栏目会显示半透明</b></p>
</div>
<style type="text/css">
.classlist{ width: 100%;margin:0}
.classlist .typefirst{ border: 0;color: #ff3300;font-weight: bold;font-size: 14px;padding-right: 0;}
.classlist .typefirst:hover{ background:none; color:#ff3300}
</style>
<ul class="classlist">
<li><a href="javascript:" class="typefirst">模型公共栏目：</a></li>
<li <?php if($this->_var['arctypeid'] == '' && $this->_var['domainid'] == ''): ?>class="cur"<?php endif; ?>><a href="?admin-catelog-index">全部栏目(<b style="color:#ff6600;"><?php echo (!isset($this->_var['catelognum']) || $this->_var['catelognum']==='') ? 0 : $this->_var['catelognum']; ?></b>)</a></li>
<?php $_from=$this->_var['modellist']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
	<li <?php if($this->_var['arctypeid'] == $this->_var['vo']['id']): ?>class="cur"<?php endif; ?>><a href="?admin-catelog-index-arctypeid-<?php echo $this->_var['vo']['id']; ?>"><?php echo $this->_var['vo']['name']; ?>(<b style="color:#ff6600;"><?php echo (!isset($this->_var['vo']['num']) || $this->_var['vo']['num']==='') ? 0 : $this->_var['vo']['num']; ?></b>)</a></li>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
</ul>
<div style="border-top:1px solid #ddd;margin:5px 0;"></div>
<ul class="classlist" style="margin-bottom:10px;">
<li><a href="javascript:" class="typefirst">网站分组栏目：</a></li>
<?php if(! $this->_var['domainlist']): ?> <li><a href="javascript:">无分组</a></li> <?php endif; ?>
<?php $_from=$this->_var['domainlist']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
	<li <?php if($this->_var['domainid'] == $this->_var['vo']['id']): ?>class="cur"<?php endif; ?>><a href="?admin-catelog-index-domainid-<?php echo $this->_var['vo']['id']; ?>"><?php echo $this->_var['vo']['name']; ?>(<b style="color:#ff6600;"><?php echo (!isset($this->_var['vo']['num']) || $this->_var['vo']['num']==='') ? 0 : $this->_var['vo']['num']; ?></b>)</a></li>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
</ul>
<form action="<?php echo url('admin/catelog/uporder'); ?>" method="post"> 
<table border="0" align="center" cellpadding="3" cellspacing="0" class="table_b">
	<tr>
	  <td width="30" align='center' class="title_bg">选择</td>
	  <td width="50" align='center' class="title_bg">id</td>
      <td width="200" class="title_bg">栏目名称</td>
      <td width="80" class="title_bg">栏目类型</td>
      <td width="100" class="title_bg">所属分组</td>
	  <td width="120" align='center' class="title_bg">别名</td>
	  <td width="100" align='center' class="title_bg">列表模板</td>
	  <td width="70" align='center' class="title_bg">前台显示</td>
	  <td width="70" align='center' class="title_bg">指定文章/信息</td>
	  <td width="130" align='center' class="title_bg">添加子栏目</td>
      <td width="120" align='center' class="title_bg">管理</td>
	  <td width="80" align='center' class="title_bg">排序</td>
	  <td class="title_bg">&nbsp;</td>
    </tr>
	<?php if($this->_var['class_list']): ?>
		<?php echo $this->_var['class_list']; ?>
		<tr>
		<td colspan="12" class="tdbg">
			&nbsp;&nbsp;<input name="chkall" type="checkbox" id="chkall" onclick='checkall(this.form);' value="checkbox">&nbsp;<label for="chkall">全选</label>
			<button type="submit" class="button button_remove" onClick="if(confirm('确定要删除吗?')){ form.action='?admin-catelog-delall';page_loading('正在删除...');}else{ return false}"><i class="typcn typcn-delete"></i>批量删除</button>
			<button type="submit" class="button">保存排序</button>
		</td>
		</tr>
	<?php else: ?>
		<tr onmouseover=this.bgColor='#EDF8FE'; onmouseout=this.bgColor='#ffffff'; bgcolor='#ffffff'>
			<td align="center" colspan='12' height="55"><font color="red"><?php if($this->_var['arctypeid'] == '' && $this->_var['domainid'] == ''): ?>请先添加栏目！<?php else: ?>该分组下无栏目数据！<?php endif; ?></font></td>
		</tr>
	<?php endif; ?>
  </table>
</form>
<div class="runtime"></div>  
</div>
<script type="text/javascript">
<?php if($this->_var['errmsg']): ?>
	showAlert('error','<?php echo $this->_var['errmsg']; ?>','',99999);
<?php endif; ?>
function addmore(pid){
	edit_dialog({
		title:'栏目批量添加',
		url:'?admin-catelog-edit-pid-'+pid+'-more-1',
		posturl:'?admin-catelog-update_more',
		width:800,
		height:500
	});
}
function edit(id,ispid){
	var title=id?'修改':'添加';
	var gurl='?admin-catelog-edit-id-'+id;
	if(ispid){
		gurl='?admin-catelog-edit-pid-'+id;
		title='添加子';
	}
	edit_dialog({
		title:title+'栏目',
		url:gurl,
		posturl:'?admin-catelog-update',
		width:850,
		height:530
	});
}
</script>
</body>
</html>