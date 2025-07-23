<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<body class="body-main">
<ul id="admin_sub_title">
	<li class="sub"><a href="javascript:void(0)" onClick="selectTab('config0',this)">缓存设置</a></li>
	<li class="unsub"><a href="<?php echo url('admin/cache/clear'); ?>">清除缓存</a></li>
	<li class="unsub"><a href="<?php echo url('admin/cache/clearzd'); ?>" style="color:red">清除指定缓存</a></li>
</ul>
<table border="0" align="center" cellpadding="8" cellspacing="1" class="tableConfig">
<tr class="item_title">
	<td><i class="typcn typcn-cog"></i>缓存配置（一个网站分组一个配置） (<span class="tips" style="color:red">注：如果网站分组未设置，则使用默认配置</span>)</td>
</tr>
<tr>
	<td>
	<div class="boxlist">
	<dl class="default">
		<dt>
			<p class="title">默认的缓存配置</p>
			<p>页面缓存开关：<?php if($this->_var['default']['web_caching']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>页面缓存类型：<b style="color:blue"><?php if($this->_var['default']['web_cachefile_type'] == 1 || $this->_var['default']['web_cachefile_type'] == ''): ?>hash方式<?php else: ?>url方式<?php endif; ?></b></p>
			<p>GZ压缩缓存：<?php if($this->_var['default']['web_cache_gzip']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>仅蜘蛛爬行缓存：<?php if($this->_var['default']['web_cache_robots']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>首页缓存时间：<b style="color:blue"><?php echo (!isset($this->_var['default']['cache_lifetime_index']) || $this->_var['default']['cache_lifetime_index']==='') ? '0' : $this->_var['default']['cache_lifetime_index']; ?></b> 小时</p>
			<p>分类页缓存时间：<b style="color:blue"><?php echo (!isset($this->_var['default']['cache_lifetime_list']) || $this->_var['default']['cache_lifetime_list']==='') ? '0' : $this->_var['default']['cache_lifetime_list']; ?></b> 小时</p>
			<p>内容页缓存时间：<b style="color:blue"><?php echo (!isset($this->_var['default']['cache_lifetime_show']) || $this->_var['default']['cache_lifetime_show']==='') ? '0' : $this->_var['default']['cache_lifetime_show']; ?></b> 小时</p>
			<p>其他页缓存时间：<b style="color:blue"><?php echo (!isset($this->_var['default']['cache_lifetime_other']) || $this->_var['default']['cache_lifetime_other']==='') ? '0' : $this->_var['default']['cache_lifetime_other']; ?></b> 小时</p>
			<p>tkd等缓存时间：<?php if($this->_var['default']['cache_lifetime_tkd'] == 0): ?>已关闭<?php else: ?><b color="blue"><?php echo (!isset($this->_var['default']['cache_lifetime_tkd']) || $this->_var['default']['cache_lifetime_tkd']==='') ? '0' : $this->_var['default']['cache_lifetime_tkd']; ?></b> 小时<?php endif; ?></p>
			<p>发布时间缓存：<?php if($this->_var['default']['web_postdate_cache']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>外链缓存时间：<b style="color:blue"><?php echo (!isset($this->_var['default']['cache_lifetime_link']) || $this->_var['default']['cache_lifetime_link']==='') ? '0' : $this->_var['default']['cache_lifetime_link']; ?></b> 小时</p>
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
			<p>页面缓存开关：<?php if($this->_var['vo']['data']['web_caching']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>页面缓存类型：<b style="color:blue"><?php if($this->_var['vo']['data']['web_cachefile_type'] == 1 || $this->_var['vo']['data']['web_cachefile_type'] == ''): ?>hash方式<?php else: ?>url方式<?php endif; ?></b></p>
			<p>GZ压缩缓存：<?php if($this->_var['vo']['data']['web_cache_gzip']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>仅蜘蛛爬行缓存：<?php if($this->_var['vo']['data']['web_cache_robots']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>首页缓存时间：<b style="color:blue"><?php echo (!isset($this->_var['vo']['data']['cache_lifetime_index']) || $this->_var['vo']['data']['cache_lifetime_index']==='') ? '0' : $this->_var['vo']['data']['cache_lifetime_index']; ?></b> 小时</p>
			<p>分类页缓存时间：<b style="color:blue"><?php echo (!isset($this->_var['vo']['data']['cache_lifetime_list']) || $this->_var['vo']['data']['cache_lifetime_list']==='') ? '0' : $this->_var['vo']['data']['cache_lifetime_list']; ?></b> 小时</p>
			<p>内容页缓存时间：<b style="color:blue"><?php echo (!isset($this->_var['vo']['data']['cache_lifetime_show']) || $this->_var['vo']['data']['cache_lifetime_show']==='') ? '0' : $this->_var['vo']['data']['cache_lifetime_show']; ?></b> 小时</p>
			<p>其他页缓存时间：<b style="color:blue"><?php echo (!isset($this->_var['vo']['data']['cache_lifetime_other']) || $this->_var['vo']['data']['cache_lifetime_other']==='') ? '0' : $this->_var['vo']['data']['cache_lifetime_other']; ?></b> 小时</p>
			<p>tkd等缓存时间：<?php if($this->_var['vo']['data']['cache_lifetime_tkd'] == 0): ?>已关闭<?php else: ?><b color="blue"><?php echo (!isset($this->_var['vo']['data']['cache_lifetime_tkd']) || $this->_var['vo']['data']['cache_lifetime_tkd']==='') ? '0' : $this->_var['vo']['data']['cache_lifetime_tkd']; ?></b> 小时<?php endif; ?></p>
			<p>发布时间缓存：<?php if($this->_var['vo']['data']['web_postdate_cache']): ?><b style="color:green">已开启</b><?php else: ?><b class="red">已关闭</b><?php endif; ?></p>
			<p>外链缓存时间：<b style="color:blue"><?php echo (!isset($this->_var['vo']['data']['cache_lifetime_link']) || $this->_var['vo']['data']['cache_lifetime_link']==='') ? '0' : $this->_var['vo']['data']['cache_lifetime_link']; ?></b> 小时</p>
			<?php else: ?>
			<p>页面缓存开关：未设置</p>
			<p>页面缓存类型：未设置</p>
			<p>GZ压缩缓存：未设置</p>
			<p>仅蜘蛛爬行缓存：未设置</p>
			<p>首页缓存时间：未设置</p>
			<p>分类页缓存时间：未设置</p>
			<p>内容页缓存时间：未设置</p>
			<p>其他页缓存时间：未设置</p>
			<p>tkd等缓存时间：未设置</p>
			<p>发布时间缓存：未设置</p>
			<p>外链缓存时间：未设置</p>
			<?php endif; ?>
		</dt>
        <dd><?php if($this->_var['vo']['isset']): ?><a class="button button_small button_success" href="javascript:" onclick="edit('<?php echo $this->_var['vo']['id']; ?>','<?php echo $this->_var['vo']['name']; ?>');">修改配置</a>&nbsp;&nbsp;<a href="?admin-cache-del-cid-<?php echo $this->_var['vo']['id']; ?>" class="button button_small button_remove" onclick='return confirm("确定清除该配置？!");'>清除配置</a><?php else: ?><a class="button button_small" href="javascript:" onclick="edit('<?php echo $this->_var['vo']['id']; ?>','<?php echo $this->_var['vo']['name']; ?>');">未设置，点击设置</a><?php endif; ?></dd>
      </dl>
	<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?></div>
	</td>
</tr>
</table>
<script type="text/javascript">
function edit(id,typename){
	var title=id?'修改':'添加';
	edit_dialog({
		title:title+'缓存配置【'+typename+'】',
		url:'?admin-cache-edit-cid-'+id,
		posturl:'?admin-cache-update',
		width:880,
		height:480
	});
}
</script>
<div class="runtime"></div>  
</div>
<?php echo $this->fetch('footer.html'); ?>
</body>
</html>