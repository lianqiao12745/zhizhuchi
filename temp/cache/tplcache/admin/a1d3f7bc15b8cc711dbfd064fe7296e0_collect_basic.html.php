<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><tr class="tdbg">
	<td class="w100 config_td_first" align="right">规则名称：</td> 
	<td align="left">
	<input type="text" name="r[name]" class="input"  value="<?php echo $this->_var['name']; ?>" style="width:200px"> <font color="red">*</font> 
	</td>
</tr>
<tr class="tdbg">
  <td rowspan="2"  align="right" class="config_td_first"><font color="#ff3300">选择保存到的库：</font></td>
  <td class="icheck_radios"><label><input type="radio" id="dbtype1" name="rules[dbtype]" value="1" <?php if($this->_var['rules']['dbtype'] == 1 || $this->_var['rules']['dbtype'] == ''): ?>checked<?php endif; ?>>模型公共库</label>
		<label><input type="radio" id="dbtype2" name="rules[dbtype]" value="2" <?php if($this->_var['rules']['dbtype'] == 2): ?>checked<?php endif; ?>>指定网站分组库(<font color="red">new</font>)</label>
	</td>
</tr>
<tr class="tdbg" id="module_tr" <?php if($this->_var['rules']['dbtype'] == 2): ?>style="display:none"<?php endif; ?>>
  <td align="left" class="config_td_first"><b>所属模型：</b><select name="arctype[]" multiple="multiple" class="multiple">
  <?php $_from=$this->_var['classlist']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['vo']):
?>
	<option value="<?php echo $this->_var['vo']['id']; ?>" <?php if(in_array ( $this->_var['vo'] [ 'id' ] , $this->_var['arctypes'] )): ?>selected="selected"<?php endif; ?>><?php echo $this->_var['vo']['name']; ?></option>
  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
  </select>(可按住 CTRL 多选)</td>
</tr>
<tr id="domain_tr" <?php if($this->_var['rules']['dbtype'] == 1 || $this->_var['rules']['dbtype'] == ''): ?>style="display:none"<?php endif; ?>>
	<td align="left" class="config_td_first"><b>网站分组：</b><select name="rules[domaincid]" id="domaincid">
	<?php $_from=$this->_var['domainlist']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?>
		<option value="<?php echo $this->_var['vo']['id']; ?>" <?php if($this->_var['vo']['id'] == $this->_var['rules']['domaincid']): ?>selected="selected"<?php endif; ?>><?php echo $this->_var['vo']['name']; ?></option>
	<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
		</select>
	</td>
</tr>
<script type="text/javascript">
$("#dbtype2").on('ifChecked', function(event) {
	$('#module_tr').hide();
	$('#domain_tr').show(500);
});
$("#dbtype1").on('ifChecked', function(event) {
	$('#domain_tr').hide();
	$('#module_tr').show(500);
});
</script>
<tr class="tdbg">
	<td class="w100 config_td_first" align="right">采集上限：</td> 
	<td align="left">
	<input type="text" name="r[maxnum]" class="input"  value="<?php echo (!isset($this->_var['maxnum']) || $this->_var['maxnum']==='') ? 0 : $this->_var['maxnum']; ?>" style="width:70px"> <span>个，也是自动采集的每日上限，0为不限制  <font color="red">*</font> 
	</td>
</tr>

<tr class="tdbg">
  <td align="right" class="config_td_first">每日采集次数上限：</td>
  <td><input name="rules[collect_day_num]" type="text" class="input" value="<?php echo (!isset($this->_var['rules']['collect_day_num']) || $this->_var['rules']['collect_day_num']==='') ? 0 : $this->_var['rules']['collect_day_num']; ?>" size="5"> <span>次，即每天的采集次数，匹配的网址全部采集后才算一次，0为不限制  <font color="red">*</font> </span></span>
  </td>
</tr>
<tr class="tdbg">
	<td align="right" class="config_td_first">User-Agent：</td>
	<td>
	<input name="rules[user_agent]" id="co_user_agent" type="text" class="input" value="<?php echo (!isset($this->_var['rules']['user_agent']) || $this->_var['rules']['user_agent']==='') ? 'Mozilla/4.0 (compatible; MSIE 10.0; Windows NT 5.2; SV1; Maxthon; .NET CLR 1.1.4322)' : $this->_var['rules']['user_agent']; ?>" style='width:450px' />&nbsp;
	<select onchange="$('#co_user_agent').val(this.value);">
		<option value="">自定义</option>
		<option <?php if($this->_var['rules'] [ 'user_agent' ] == " Mozilla / 4.0 ( compatible ; MSIE 10.0 ; Windows NT 5.2 ; SV1 ; Maxthon ; .NET CLR 1.1.4322 ) "): ?>selected<?php endif; ?> value="Mozilla/4.0 (compatible; MSIE 10.0; Windows NT 5.2; SV1; Maxthon; .NET CLR 1.1.4322)">正常访问</option>
		<option <?php if($this->_var['rules']['user_agent'] == "Baiduspider/2.0+(+http://www.baidu.com/search/spider.htm)"): ?>selected<?php endif; ?> value="Baiduspider/2.0+(+http://www.baidu.com/search/spider.htm)">百度蜘蛛</option>
		<option <?php if($this->_var['rules'] [ 'user_agent' ] == " Mozilla / 5.0 ( compatible ; Googlebot / 2.1 ; + http : / / www.google.com / bot.html ) "): ?>selected<?php endif; ?> value="Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)">谷歌蜘蛛</option>
	</select>（浏览器标识符，可模拟蜘蛛）
	</td>
</tr>
<?php if($this->_var['model'] != 'pic' && $this->_var['model'] != 'typename'): ?>
<tr class="tdbg">
	<td align="right" class="config_td_first"><font color="#ff3300">内容语言：</font></td> 
	<td>
		<select name="rules[collect_lang]">
			<option value="cn" <?php if($this->_var['rules']['collect_lang'] == 'cn'): ?>selected="selected"<?php endif; ?>>中文</option>
			<option value="en" <?php if($this->_var['rules']['collect_lang'] == 'en'): ?>selected="selected"<?php endif; ?>>英文</option>
		</select> <span> 如果是英文或者属于空格分割的语言（越、泰语等）请选择英文</span></td>
</tr>
<tr class="tdbg">
  <td align="right" class="config_td_first"><font color="blue">伪原创 · 词汇替换</font>：</td>
  <td class="icheck_radios"><label><input type="radio" name="rules[replace_word]" value="1" <?php if($this->_var['rules']['replace_word']): ?> checked<?php endif; ?>>开启</label>
		<label><input type="radio" name="rules[replace_word]" value="0" <?php if(! $this->_var['rules']['replace_word']): ?> checked<?php endif; ?>>关闭</label> <span>是否进行伪原创词汇替换，词汇在<font color="green">站点优化->伪原创 · 词汇</font>中设置</span>
	</td>
</tr>
<tr class="tdbg">
  <td align="right" class="config_td_first"><font color="blue">伪原创 · API</font>：</td>
  <td><?php if($this->_var['repalce_api_list']): ?><select name="rules[replace_api]">
			<option value="">----不使用！----</option>
			 <?php $_from=$this->_var['repalce_api_list']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['vo']):
?>
				<option value="<?php echo $this->_var['vo']['id']; ?>" <?php if($this->_var['vo']['id'] == $this->_var['rules']['replace_api']): ?>selected="selected"<?php endif; ?>><?php echo $this->_var['vo']['api_title']; ?></option>
			  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
		</select>
		<?php else: ?>
		<font color="red">无伪原创API，请先添加！</font>
		<?php endif; ?>
		<span>选择伪原创API处理，在<font color="green">站点优化->伪原创 · AI</font>中设置</span>
	</td>
</tr>
<?php endif; ?>