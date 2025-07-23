<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<body class="body-main">
<ul id="admin_sub_title">
	<li class="sub"><a href="javascript:void(0)">关键词设置</a></li>
</ul>
<div id="admin_right_b">
<div class="divtips">插入的关键词可以在模板文件或者TKD模板中调用，能调用的数量取决于设置的插入关键词个数<br>模板文件或者TKD模板中的调用标签 {<a></a>$randkws}、{<a></a>$randkws1}、{<a></a>$randkws2}...</div>
<style type="text/css">
.boxlist dl{ min-width:180px;width:auto;}
.red{ color:red}
</style>
<table border="0" align="center" cellpadding="8" cellspacing="1" class="tableConfig">
<tr class="item_title">
	<td colspan="5"><i class="typcn typcn-cog"></i>关键词设置配置（一个网站分组一个配置） (<span class="tips" style="color:red">注：如果网站分组未设置，则使用默认配置</span>)</td>
</tr>
<tr>
	<td colspan="5">
	<div class="boxlist">
	<dl class="default">
		<dt>
			<p class="title">默认的调用配置</p>
			<p>插入概率：<?php echo $this->_var['default']['insertkw_odds']; ?>%</p>
			<p>调用全局关键词库：<?php if($this->_var['default']['insertkw_common']): ?><b style="color:green">是</b><?php else: ?><b class="blue">否</b><?php endif; ?></p>
			<p>限制域名：<?php if($this->_var['default']['insertkw_domains']): ?><b style="color:red">限制</b><?php else: ?><b class="blue">不限制</b><?php endif; ?></p>
			<p>首页标题插入：<?php if($this->_var['default']['insertkw_index']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>文章栏目页标题插入：<?php if($this->_var['default']['insertkw_list']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>文章内容页标题插入：<?php if($this->_var['default']['insertkw_show']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>文章内容插入：<?php if($this->_var['default']['insertkw2content']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>关键词加粗显示：<?php if($this->_var['default']['insertkw_strong']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>关键词unicode转码：<?php if($this->_var['default']['insertkw_unicode']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>关键词插入数量：<?php echo (!isset($this->_var['default']['insertkw_num']) || $this->_var['default']['insertkw_num']==='') ? 1 : $this->_var['default']['insertkw_num']; ?></p>
			<p>标题的格式：-----</p>
		</dt>
		<dd><a class="button button_small button_warning" href="javascript:" onclick="edit('0','默认的调用配置');">点击修改</a></dd>
	  </dl>
	<?php $_from=$this->_var['list']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
	<dl>
        <dt>
			<p class="title"><?php echo $this->_var['vo']['name']; ?></p>
			<?php if($this->_var['vo']['isset']): ?>
			<p>插入概率：<?php echo $this->_var['vo']['data']['insertkw_odds']; ?>%</p>
			<p>调用全局关键词库：<?php if($this->_var['vo']['data']['insertkw_common']): ?><b style="color:green">是</b><?php else: ?><b class="blue">否</b><?php endif; ?></p>
			<p>限制域名：<?php if($this->_var['vo']['data']['insertkw_domains']): ?><b style="color:red">限制</b><?php else: ?><b class="blue">不限制</b><?php endif; ?></p>
			<p>首页标题插入：<?php if($this->_var['vo']['data']['insertkw_index']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>文章栏目页标题插入：<?php if($this->_var['vo']['data']['insertkw_list']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>文章内容页标题插入：<?php if($this->_var['vo']['data']['insertkw_show']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>文章内容插入：<?php if($this->_var['vo']['data']['insertkw2content']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>关键词加粗显示：<?php if($this->_var['vo']['data']['insertkw_strong']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>关键词unicode转码：<?php if($this->_var['vo']['data']['insertkw_unicode']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>关键词插入数量：<?php echo (!isset($this->_var['vo']['data']['insertkw_num']) || $this->_var['vo']['data']['insertkw_num']==='') ? 1 : $this->_var['vo']['data']['insertkw_num']; ?></p>
			<p>标题的格式：-----</p>
			<?php else: ?>
			<p>插入概率：未设置</p>
			<p>调用全局关键词库：未设置</p>
			<p>限制域名：未设置</p>
			<p>首页标题插入：未设置</p>
			<p>文章栏目页标题插入：未设置</p>
			<p>文章内容页标题插入：未设置</p>
			<p>文章内容插入：未设置</p>
			<p>关键词加粗显示：未设置</p>
			<p>关键词unicode转码：未设置</p>
			<p>关键词插入数量：未设置</p>
			<p>标题的格式：-----</p>
			<?php endif; ?>
		</dt>
        <dd><?php if($this->_var['vo']['isset']): ?><a class="button button_small button_success" href="javascript:" onclick="edit('<?php echo $this->_var['vo']['id']; ?>','<?php echo $this->_var['vo']['name']; ?>');"><i class="typcn typcn-edit"></i>修改</a>&nbsp;&nbsp;<a href="?admin-keywords-del-cid-<?php echo $this->_var['vo']['id']; ?>" class="button button_small button_remove" onclick='return confirm("确定清除该配置？!");'>清除</a><?php else: ?><a class="button button_small" href="javascript:" onclick="edit('<?php echo $this->_var['vo']['id']; ?>','<?php echo $this->_var['vo']['name']; ?>');">未设置，点击设置</a><?php endif; ?></dd>
      </dl>
	<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?></div>
	</td>
</tr>
</table>
<script type="text/javascript">
function edit(id,typename){
	var title=id?'修改':'添加';
	edit_dialog({
		title:title+'关键词插入配置【'+typename+'】',
		url:'?admin-keywords-edit-cid-'+id,
		posturl:'?admin-keywords-update',
		width:880,
		height:550
	});
}
</script>
<div class="runtime"></div>  
</div>
<?php echo $this->fetch('footer.html'); ?>
</body>
</html>