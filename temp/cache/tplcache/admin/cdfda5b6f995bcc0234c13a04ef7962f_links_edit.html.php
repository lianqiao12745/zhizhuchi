<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<body class="body-main">
<form method="post">
<input type="hidden" name="r[cid]" value="<?php echo (!isset($this->_var['cid']) || $this->_var['cid']==='') ? 0 : $this->_var['cid']; ?>">
<table border="0" cellpadding="8" cellspacing="0" class="tableConfig">
<tr class="tdbg item_title">
	<td colspan=2><i class="typcn typcn-cog"></i> 基本设置</td>
	<td></td>
</tr>
		<tr class="tdbg">
		  <td align="right" class="config_td_first">网站分组：</td>
		  <td class="tdbg"><font color="blue"><?php echo $this->_var['classname']; ?></font></td>
		</tr>
<tr>
	<td width="120" align="right" class="config_td_first">外链开关：</td>
	<td class="icheck_radios"><label><input type="radio" name="r[links_open]" value="1" <?php if($this->_var['links_open']): ?> checked<?php endif; ?>>开启</label>
	<label><input type="radio" name="r[links_open]" value="0" <?php if(! $this->_var['links_open']): ?> checked<?php endif; ?>>关闭</label>
	</td>
</tr>
<tr class="tdbg">
  <td align="right" class="config_td_first">外链调用条数：</td>
  <td class="tdbg"><input name="r[links_default_num]" type="text" class="input" value="<?php echo (!isset($this->_var['links_default_num']) || $this->_var['links_default_num']==='') ? 10 : $this->_var['links_default_num']; ?>" size="12">
  <span class="tips">当模板标签中未指定条数时使用此值</span>
  </td>
</tr>
<tr>
	<td align="right" class="config_td_first">指定蜘蛛：</td>
	<td><input type="hidden" name="r[links_robots]" id="rb_value" value="<?php echo $this->_var['links_robots']; ?>" /><font id="rb_items" color="#ff6600"><?php if(! $this->_var['links_robots_itemsname']): ?>不限制<?php else: ?><?php echo $this->_var['links_robots_itemsname']; ?><?php endif; ?></font>&nbsp;&nbsp;<a href="javascript:" class="button button_small" onclick="select_robots();"><i class="typcn typcn-zoom-in"></i>点击选择</a> <span class="tips" style="color:red"><i class="typcn typcn-info"></i>选中的蜘蛛才进行显示，一个不选则全部显示</span></td>
</tr>
<tr class="tdbg item_title">
	<td colspan=2><i class="typcn typcn-cog"></i> 索引池设置（即外链库中的格式未设置描文本时）</td>
	<td></td>
</tr>
<tr class="tdbg">
  <td align="right" class="config_td_first">外链描文本：</td>
  <td class="tdbg"><select name="r[links_title]" onchange="links_title(this.value);">
			<option value="article" <?php if(!$this->_var['links_title']||$this->_var['links_title'] == 'article'): ?> selected="selected"<?php endif; ?>>文章标题</option>
			<option value="keywords" <?php if($this->_var['links_title'] == 'keywords'): ?> selected="selected"<?php endif; ?>>关键词库</option>
			<option value="url" <?php if($this->_var['links_title'] == 'url'): ?> selected="selected"<?php endif; ?>>使用URL链接</option>
			<option value="txt" <?php if($this->_var['links_title'] == 'txt'): ?> selected="selected"<?php endif; ?>>指定txt文件</option>
		  </select>
  <span class="tips">默认使用标题库</span>
  </td>
</tr>
<tr class="tdbg">
  <td align="right" class="config_td_first">描文本指定文件：</td>
  <td class="tdbg"><input id="links_title_txt" name="r[links_title_txt]" type="text" class="input" value="<?php echo $this->_var['links_title_txt']; ?>" size="30">
  <span class="tips">输入文件路径，如： /temp/data/links_title.txt</span>
  </td>
</tr>
</table>
</form>
<script type="text/javascript">
function links_title(s){
	if(s=='txt'){
		lockinput('#links_title_txt',0);
	}else{
		lockinput('#links_title_txt',1);
	}
}
<?php if($this->_var['links_title'] != 'txt'): ?> lockinput('#links_title_txt',1); <?php endif; ?>

</script>
<?php echo $this->fetch('group_robot_list.html'); ?>
</body>
</html>