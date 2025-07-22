<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<body class="body-main">
<ul id="admin_sub_title">
	<li class="sub"><a href="javascript:void(0)" onClick="selectTab('config0',this)">基本设置</a></li>
	<li class="unsub"><a href="javascript:void(0)" onClick="selectTab('config1',this)">站点模式</a></li>
	<li class="unsub"><a href="javascript:void(0)" onClick="selectTab('config2',this)">内容模式</a></li>
	<li class="unsub"><a href="javascript:void(0)" onClick="selectTab('config5',this)">URL设置</a></li>
	<li class="unsub"><a href="javascript:void(0)" onClick="selectTab('config4',this)">手机版设置</a></li>
	<li class="unsub"><a href="javascript:void(0)" onClick="selectTab('config6',this)">其他设置</a></li>
</ul>
<div id="admin_right_b">
<form method="post">
<input type="hidden" name="r[id]" value="<?php echo (!isset($this->_var['id']) || $this->_var['id']==='') ? 0 : $this->_var['id']; ?>">
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" class="tableConfig" id="config0">
	<tr class="tdbg item_title">
		<td width="100" align="right"><i class="typcn typcn-cog"></i> 基本设置</td>
		<td></td>
	</tr>
	<tr>
      <td width="100" align="right" class="config_td_first">分组名称：</td>
      <td class="tdbg" colspan="4"><input name="r[name]" type="text" value="<?php echo $this->_var['name']; ?>" class="input" size="20"> <font color="#ff3300">*</font> <span>给本分组起个名字</span></td>
    </tr>
	<tr>
      <td align="right" class="config_td_first">配置文件夹（<font color="red">不可重复</font>）</td>
      <td class="tdbg" colspan="4"><input name="r[dirname]" id="dirname" type="text" value="<?php echo $this->_var['dirname']; ?>" class="input <?php if($this->_var['id']): ?>lockinput<?php endif; ?>" size="20" <?php if($this->_var['id']): ?> readonly<?php endif; ?>> <font color="#ff3300">*</font> <font size="" color="red">填字母</font>，<span>分组的关键词和外链将放在此文件夹，<font color="red">保存后不可更改</font></span></td>
    </tr>
	<tr>
	  <td align="right" class="config_td_first">所属模型：</td>
	  <td class="tdbg"> <?php if($this->_var['id']): ?>
		<input type="hidden" name="r[cid]" value="<?php echo $this->_var['cid']; ?>">
	  <?php endif; ?>
	  <select name="r[cid]" id="cid" onchange="get_catelog_num(this.value);" <?php if($this->_var['id']): ?>disabled<?php endif; ?>>
	  <?php $_from=$this->_var['classlist']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['vo']):
?>
		<option dir="<?php echo $this->_var['vo']['dirname']; ?>" value="<?php echo $this->_var['vo']['id']; ?>" <?php if($this->_var['vo']['id'] == $this->_var['cid']): ?>selected="selected"<?php endif; ?>><?php echo $this->_var['vo']['name']; ?></option>
	  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
	  </select> <span> <font color="#ff3300">*</font> <font color="red">保存后不可更改</font></span></td>
	</tr>
	<tr>
	  <td align="right" class="config_td_first">模板类型：</td>
	  <td class="icheck_radios tdbg">
			<label><input type="radio" name="con[themetype]" value="1" <?php if($this->_var['themetype']==1|| ! $this->_var['themetype']): ?> checked<?php endif; ?>>模型模板</label>
			<label><input type="radio" name="con[themetype]" value="2" <?php if($this->_var['themetype'] == 2): ?> checked<?php endif; ?>>本分组独立模板</label>
			 <font color="#ff3300">*</font> <span>使用模型模板还是本独立分组下的模板</span>
	</tr>
	<tr>
	 <td align="right" class="config_td_first">根域名(<font color="red">非子域名</font>)<br><br>非二级域名，不带www<br>一行一个，不加端口</td>
	  <td> <font color='green'>如：google.com</font><textarea name="domain" id="text" type="text" style="height:220px;width:350px;margin-top:5px"><?php echo $this->_var['domain']; ?></textarea></td>
	</tr>
	
</table>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" class="tableConfig" id="config1" style="display:none">
	<tr class="tdbg item_title">
		<td width="100" align="right"><i class="typcn typcn-cog"></i> 站点模式</td>
		<td></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">站点模式：</td>
	  <td><select name="r[domain_mod]">
		<option value="1" <?php if(!$this->_var['domain_mod']||$this->_var['domain_mod'] == '1'): ?> selected="selected"<?php endif; ?>>泛域名</option>
		<option value="2" <?php if($this->_var['domain_mod'] == '2'): ?> selected="selected"<?php endif; ?>>单域名</option>
	  </select>&nbsp;&nbsp;<span>泛域名需泛解析</span></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">301重定向到www：</td>
	  <td class="icheck_radios"><label><input type="radio" name="con[rewww]" value="1" <?php if($this->_var['rewww'] == 1): ?> checked<?php endif; ?>>全部重定向</label>
			<label><input type="radio" name="con[rewww]" value="2" <?php if($this->_var['rewww'] == 2): ?> checked<?php endif; ?>>顶级域名重定向</label>
			<label><input type="radio" name="con[rewww]" value="0" <?php if(! $this->_var['rewww']): ?> checked<?php endif; ?>>关闭</label></td>
	</tr>
	<tr class="make">
	  <td align="right" class="config_td_first">屏蔽非自定义泛前缀访问：</td>
	  <td class="tdbg icheck_radios"><label><input type="radio" name="con[ban_prefix]" value="1" <?php if($this->_var['ban_prefix']): ?> checked<?php endif; ?>>开启</label>
			<label><input type="radio" name="con[ban_prefix]" value="0" <?php if(! $this->_var['ban_prefix']): ?> checked<?php endif; ?>>关闭</label>　<span>屏蔽非自定义泛前缀的域名访问</span></td>
	</tr>
	<tr class="make">
	  <td align="right" class="config_td_first">启用城市泛域名：</td>
	  <td class="tdbg icheck_radios"><label><input type="radio" name="con[city_prefix]" value="1" <?php if($this->_var['city_prefix']): ?> checked<?php endif; ?>>开启</label>
			<label><input type="radio" name="con[city_prefix]" value="0" <?php if(! $this->_var['city_prefix']): ?> checked<?php endif; ?>>关闭</label>　<span style="color:red">开启后自动将城市拼音加入泛域名前缀列表</span></td>
	</tr>
	<tr class="make">
		<td></td>
		<td class="tdbg"><font color="blue">注：如果前缀使用了标签并且超过50个，不要屏蔽，否则会卡</font></td>
	</tr>
	<tr class="make">
	 <td align="right" class="config_td_first">自定义泛域名前缀：<br>(一行一个<br>注：不要超过1000)</td>
	  <td><span class="red">支持标签：{数字}、{字母}、{数字字母}<br>标签后面加数字是位数，{数字8}表示8个数字、{数字1-8}示随机1-8个数字<br></span><textarea name="domain_prefix" type="text" style="height:180px;width:350px;"><?php echo $this->_var['domain_prefix']; ?></textarea></td>
	</tr>
</table>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" class="tableConfig" id="config5" style="display:none">
	<tr class="tdbg item_title">
		<td width="160" align="right"><i class="typcn typcn-cog"></i> URL设置</td>
		<td></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">URL规则缓存开关：</td>
	  <td><select name="con[urlrules_cache]">
		<option value="1" <?php if($this->_var['urlrules_cache'] || $this->_var['urlrules_cache'] == ''): ?> selected="selected"<?php endif; ?>>开启</option>
		<option value="0" <?php if($this->_var['urlrules_cache'] == '0'): ?> selected="selected"<?php endif; ?>>关闭</option>
	  </select>&nbsp;&nbsp;<span>开启后可实现一个站点固定一条url规则，不开启则随机获取</span></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">URL路径：</td>
	  <td class="tdbg icheck_radios"><label><input type="radio" name="con[url_prefix]" value="1" <?php if($this->_var['url_prefix'] == 1 || $this->_var['url_prefix'] == ''): ?> checked<?php endif; ?>>绝对路径</label>
			<label><input type="radio" name="con[url_prefix]" value="2" <?php if($this->_var['url_prefix'] == 2): ?> checked<?php endif; ?>>相对路径</label>　<span>相对路径不带域名</span></td>
	</tr>
	<tr>
		<td align="right" class="config_td_first">屏蔽非URL规则地址：</td>
		<td class="icheck_radios" colspan="2">
			<label><input type="radio" name="con[urlrule_ban]" value="2" <?php if($this->_var['urlrule_ban'] == '2'): ?> checked<?php endif; ?>>重定向到URL规则地址</label>
			<label><input type="radio" name="con[urlrule_ban]" value="1" <?php if($this->_var['urlrule_ban'] == '1'): ?> checked<?php endif; ?>>显示404</label>
			<label><input type="radio" name="con[urlrule_ban]" value="0" <?php if(! $this->_var['urlrule_ban']): ?> checked<?php endif; ?>>不处理</label>
			<span class="tips">如何处理不符合设置的URL规则</span>
		</td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">图片url本地化(<font color="red">new</font>)</td>
	  <td class="icheck_radios"><label><input type="radio" name="con[localpic]" value="1" <?php if($this->_var['localpic']): ?> checked<?php endif; ?>>开启</label>
			<label><input type="radio" name="con[localpic]" value="0" <?php if(! $this->_var['localpic']): ?> checked<?php endif; ?>>关闭</label>　<span>关闭则直接调用原始图片url（<u style="color:red">仅在开启缩略图补给时有效</u>）</span></td>
	</tr>
	<tr class="tdbg">
      <td align="right" class="config_td_first">图片URL规则：</td>
      <td><input name="con[urlrule_pic]" type="text" value="<?php echo $this->_var['urlrule_pic']; ?>" class="input" size="30"> <font color="#ff3300">*</font> <br><span>开启图片url本地化时有效，必须带上<font color="red">{id}</font>且不支持标签</span></td>
    </tr>
</table>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" class="tableConfig" id="config2" style="display:none">
	<tr>
		<td colspan="2" class="divtips">提示：请确保你选择的库类型里面有文件，否则前台无内容</td>
	</tr>
	<tr class="tdbg item_title">
		<td width="100" align="right"><i class="typcn typcn-cog"></i> 内容模式设置</td>
		<td></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">随机导航：</td>
	  <td><select name="con[menu_rand]">
		<option value="1" <?php if($this->_var['menu_rand'] == '' || $this->_var['menu_rand'] == '1'): ?> selected="selected"<?php endif; ?>>开启</option>
		<option value="0" <?php if($this->_var['menu_rand'] == '0'): ?> selected="selected"<?php endif; ?>>关闭</option>
	  </select>&nbsp;&nbsp;<span>导航是否随机调用栏目库，多栏目时推荐开启</span></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">导航缓存：</td>
	  <td><select name="con[menu_cache]">
		<option value="1" <?php if($this->_var['menu_cache']): ?> selected="selected"<?php endif; ?>>开启</option>
		<option value="0" <?php if(! $this->_var['menu_cache']): ?> selected="selected"<?php endif; ?>>关闭</option>
	  </select>&nbsp;&nbsp;<span>开启随机导航时，可实现当前域名导航固定</span></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">随机栏目：</td>
	  <td><select name="con[catelog_rand]">
		<option value="1" <?php if($this->_var['catelog_rand'] == '' || $this->_var['catelog_rand'] == '1'): ?> selected="selected"<?php endif; ?>>开启</option>
		<option value="0" <?php if($this->_var['catelog_rand'] == '0'): ?> selected="selected"<?php endif; ?>>关闭</option>
	  </select>&nbsp;&nbsp;<span>loop调用的栏目库是否随机，多栏目时推荐开启</span></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">网站名称库：</td>
	  <td class="icheck_radios">
			<label><input type="radio" name="con[dbtype_webname]" value="1" <?php if($this->_var['dbtype_webname']==1|| ! $this->_var['dbtype_webname']): ?> checked<?php endif; ?>>模型公共库</label>
			<label><input type="radio" name="con[dbtype_webname]" value="2" <?php if($this->_var['dbtype_webname'] == 2): ?> checked<?php endif; ?>>本分组独立库( <font color="#ff6600" id="webname_num_dm">0</font>个文件 )</label>
			 <font color="#ff3300">*</font> <span>使用模型公共库还是本网站分组下的网站名称库</span>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">栏目库：</td>
	  <td class="icheck_radios">
			<label><input type="radio" class="dbtype_catelog" name="con[dbtype_catelog]" value="1" <?php if($this->_var['dbtype_catelog']==1|| ! $this->_var['dbtype_catelog']): ?> checked<?php endif; ?>>模型公共库</label>
			<label><input type="radio" class="dbtype_catelog" name="con[dbtype_catelog]" value="2" <?php if($this->_var['dbtype_catelog'] == 2): ?> checked<?php endif; ?>>本分组独立库( <font color="#ff6600" id="catelog_num_dm">0</font>个栏目 )</label>
			 <font color="#ff3300">*</font> <span>使用模型公共库还是本网站分组下的栏目库</span>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">文章/信息库：</td>
	  <td class="icheck_radios">
			<label><input type="radio" name="con[dbtype_article]" value="1" <?php if($this->_var['dbtype_article']==1|| ! $this->_var['dbtype_article']): ?> checked<?php endif; ?>>模型公共库</label>
			<label><input type="radio" name="con[dbtype_article]" value="2" <?php if($this->_var['dbtype_article'] == 2): ?> checked<?php endif; ?>>本分组独立库( <font color="#ff6600" id="article_num_dm">0</font>个文件 )</label>
			 <font color="#ff3300">*</font> <span>使用模型公共库还是本网站分组下的文章/信息库</span>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">图片库：</td>
	  <td class="icheck_radios">
			<label><input type="radio" class="dbtype_pic" name="con[dbtype_pic]" value="1" <?php if($this->_var['dbtype_pic']==1|| ! $this->_var['dbtype_pic']): ?> checked<?php endif; ?>>模型公共库</label>
			<label><input type="radio" class="dbtype_pic" name="con[dbtype_pic]" value="2" <?php if($this->_var['dbtype_pic'] == 2): ?> checked<?php endif; ?>>本分组独立库( <font color="#ff6600" id="pic_num_dm">0</font>个文件 )</label>
			 <font color="#ff3300">*</font> <span>使用模型公共库还是本网站分组下的图片库</span>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">自定义库：</td>
	  <td class="icheck_radios">
			<label><input type="radio" class="dbtype_diy" name="con[dbtype_diy]" value="1" <?php if($this->_var['dbtype_diy']==1|| ! $this->_var['dbtype_diy']): ?> checked<?php endif; ?>>模型公共库</label>
			<label><input type="radio" class="dbtype_diy" name="con[dbtype_diy]" value="2" <?php if($this->_var['dbtype_diy'] == 2): ?> checked<?php endif; ?>>本分组独立库( <font color="#ff6600" id="diy_num_dm">0</font>个文件 )</label>
			 <font color="#ff3300">*</font> <span>使用模型公共库还是本网站分组下的自定义库</span>
	</tr>
</table>
<script type="text/javascript">
var domainid='<?php echo (!isset($this->_var['id']) || $this->_var['id']==='') ? 0 : $this->_var['id']; ?>';
if(domainid){
	get_catelog_num($('#cid').val());
}
function get_catelog_num(arctypeid){
	$.ajax({
		type:"get",
		url:"?admin-domain-get_catelog_num-arctypeid-"+arctypeid+"-domainid-"+domainid,
		success:function(d){
			$('#catelog_num_dm').html(d.catelog_num);
			$('#webname_num_dm').html(d.webname_num);
			$('#article_num_dm').html(d.article_num);
			$('#pic_num_dm').html(d.pic_num);
			$('#diy_num_dm').html(d.diy_num);
		}
	});
}
</script>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" class="tableConfig" id="config3" style="display:none">

	<tr class="tdbg item_title">
		<td width="100" align="right"><i class="typcn typcn-cog"></i> MIP模块设置</td>
		<td></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">是否MIP站点：</td>
	  <td><select name="con[mip_open]">
		<option value="1" <?php if($this->_var['mip_open']): ?> selected="selected"<?php endif; ?>>是</option>
		<option value="0" <?php if(! $this->_var['mip_open']): ?> selected="selected"<?php endif; ?>>否</option>
	  </select>&nbsp;&nbsp;<span>当前站点是否设为MIP站点，MIP站点使用MIP模板</span></td>
	</tr>
	<tr>
      <td align="right" class="config_td_first">mip域名前缀：</td>
      <td class="tdbg" colspan="4"><input name="con[mip_prefix]" type="text" value="<?php echo $this->_var['mip_prefix']; ?>" class="input" size="10"> <span>mip域名前缀，如：mip，当域名前缀为该设置时设为MIP站点</span></td>
    </tr>
	<tr>
	  <td class="tdbg">&nbsp;</td>
	  <td><font color="red">注：mip域名前缀设置为空时，本分组下的全部域名都视为MIP站点（请关闭手机版)</font></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">无视MIP效验：</td>
	  <td><select name="con[mip_nosee]">
		<option value="1" <?php if($this->_var['mip_nosee']): ?> selected="selected"<?php endif; ?>>开启</option>
		<option value="0" <?php if(! $this->_var['mip_nosee']): ?> selected="selected"<?php endif; ?>>关闭</option>
	  </select>&nbsp;<span><font color="red">关闭后，广告、统计将失效，以便通过MIP效验</font></span></td>
	</tr>
	<!-- <tr>
	  <td class="tdbg">&nbsp;</td>
	  <td><font color="red">· 关闭才能通过效验，不过统计广告这些自定义js是无法通过效验的<br>· 通不过效验就进不了百度MIP索引，变成普通站点</font></td>
	</tr> -->
	<tr class="tdbg item_title">
		<td width="100" align="right"><i class="typcn typcn-cog"></i> MIP统计设置</td>
		<td><font color="blue" style="font-weight:500">（MIP引擎只支持以下统计，开启无视MIP效验时，将使用系统设置里的）</font></td>
	</tr>
	<tr>
      <td align="right" class="config_td_first">百度统计token：</td>
      <td class="tdbg" colspan="4"><input name="con[mip_tj_bdtk]" type="text" value="<?php echo $this->_var['mip_tj_bdtk']; ?>" class="input" size="20"> <span>百度统计代码里的token的值，一般是32位的字符</span></td>
    </tr>
	<tr>
      <td align="right" class="config_td_first">cnzz统计token：</td>
      <td class="tdbg" colspan="4"><input name="con[mip_tj_cnzztk]" type="text" value="<?php echo $this->_var['mip_tj_cnzztk']; ?>" class="input" size="20"> <span>cnzz友盟统计的token，一般是一串数字</span></td>
    </tr>
</table>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" class="tableConfig" id="config4" style="display:none">
	<tr class="tdbg item_title">
		<td width="100" align="right"><i class="typcn typcn-cog"></i> 手机版设置</td>
		<td></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">开启手机版：</td>
	  <td><select name="con[mobile_open]">
		<option value="1" <?php if($this->_var['mobile_open']): ?> selected="selected"<?php endif; ?>>开启</option>
		<option value="0" <?php if(! $this->_var['mobile_open']): ?> selected="selected"<?php endif; ?>>关闭</option>
	  </select>&nbsp;&nbsp;<span>是否开启手机版</span></td>
	</tr>
	<tr class="tdbg">
	  <td align="right" class="config_td_first">地址跳转：</td>
	  <td><select name="con[mobile_jump]">
		<option value="1" <?php if($this->_var['mobile_jump']): ?> selected="selected"<?php endif; ?>>开启</option>
		<option value="0" <?php if(! $this->_var['mobile_jump']): ?> selected="selected"<?php endif; ?>>关闭</option>
	  </select>&nbsp;&nbsp;<span>手机访问时自动转到手机版地址</span></td>
	</tr>
	<tr>
      <td align="right" class="config_td_first">手机域名前缀：</td>
      <td class="tdbg" colspan="4"><input name="con[mobile_prefix]" type="text" value="<?php echo $this->_var['mobile_prefix']; ?>" class="input" size="10"> <span>手机版域名前缀，如：m 或者 wap，<font color="red">留空则全部打开都是手机版</font></span></td>
    </tr>
</table>
<table width="98%" border="0" align="center" cellpadding="3" cellspacing="1" class="tableConfig" id="config6" style="display:none">
	
	<tr class="tdbg item_title">
		<td width="120" align="right"><i class="typcn typcn-cog"></i> 其他设置</td>
		<td></td>
	</tr>
	<tr class="tdbg">
      <td align="right" class="config_td_first">文章库内容支持标签：</td>
      <td class="icheck_radios"><label><input type="radio" name="con[articlebody_tag]" value="1"<?php if($this->_var['articlebody_tag']): ?> checked<?php endif; ?>>开启</label>
			<label><input type="radio" name="con[articlebody_tag]" value="0"<?php if(! $this->_var['articlebody_tag']): ?> checked<?php endif; ?>>关闭</label>
			 <span>开启文章库txt的内容也支持标签</span>
		</td>
    </tr>
	<tr class="tdbg">
      <td align="right" class="config_td_first">其他模板内容标签调用：</td>
      <td class="icheck_radios"><label><input type="radio" name="con[is_show_tpl]" value="1"<?php if($this->_var['is_show_tpl']): ?> checked<?php endif; ?>>开启</label>
			<label><input type="radio" name="con[is_show_tpl]" value="0"<?php if(! $this->_var['is_show_tpl']): ?> checked<?php endif; ?>>关闭</label>
			 <span>开启后非show模板，也可以使用内容页show的标签，如 $body</span>
		</td>
    </tr>
	<tr class="tdbg">
      <td align="right" class="config_td_first">sitemap开关：</td>
      <td class="icheck_radios"><label><input type="radio" name="con[sitemap_open]" value="1"<?php if($this->_var['sitemap_open'] == '1' || $this->_var['sitemap_open'] == ''): ?> checked<?php endif; ?>>开启</label>
			<label><input type="radio" name="con[sitemap_open]" value="0"<?php if($this->_var['sitemap_open'] == '0'): ?> checked<?php endif; ?>>关闭</label>
			 <span>关闭后，打开sitemap地图将显示404</span>
		</td>
    </tr>
	<tr class="tdbg">
      <td align="right" class="config_td_first">缩略图补给：</td>
      <td class="icheck_radios"><label><input type="radio" name="con[litpic_supply]" value="1"<?php if($this->_var['litpic_supply'] == '1' || $this->_var['litpic_supply'] == ''): ?> checked<?php endif; ?>>开启</label>
			<label><input type="radio" name="con[litpic_supply]" value="0"<?php if($this->_var['litpic_supply'] == '0'): ?> checked<?php endif; ?>>关闭</label>
			 <span>没有缩略图的文章自动从图片库提取补给</span>
		</td>
    </tr>
	<tr class="tdbg">
      <td align="right" class="config_td_first">文章内容自动插图(<font color="red">new</font>)：</td>
      <td class="icheck_radios">
			<label><input type="radio" name="con[pic_insert_body]" value="0"<?php if(! $this->_var['pic_insert_body']): ?> checked<?php endif; ?>>关闭</label>
			<label><input type="radio" name="con[pic_insert_body]" value="1"<?php if($this->_var['pic_insert_body'] == '1'): ?> checked<?php endif; ?>>无图时插</label>
			<label><input type="radio" name="con[pic_insert_body]" value="2"<?php if($this->_var['pic_insert_body'] == '2'): ?> checked<?php endif; ?>>全部插</label>
			 <span>文章内容中自动插入图片库的图片</span>
			 <span style="padding-top:5px;margin-top: 8px;border-top:1px solid #eee;display: block;color: #222;">图片插入数：<input name="con[pic_insert_body_num]" type="text" value="<?php echo (!isset($this->_var['pic_insert_body_num']) || $this->_var['pic_insert_body_num']==='') ? 3 : $this->_var['pic_insert_body_num']; ?>" class="input" size="5"> 张 </span>
			 <span style="padding-top:5px;margin-top: 8px;border-top:1px solid #eee;display: block;color: #222;">指定图片库：<input name="con[pic_insert_body_file]" type="text" id="bodypicfile" value="<?php echo $this->_var['pic_insert_body_file']; ?>" class="input" size="25"> <button onclick="window.parent.select_file(document,'bodypicfile','pic',$('#cid').find('option:selected').attr('dir'));" type="button" class="button">选择</button> <span>不填则随机取自图片库<br/>(<font color="#ff6600">指定后，插入的图片url就不会进行本地化</font>)</span></span>
		</td>
    </tr>
	<tr class="tdbg item_title">
		<td width="120" align="right"><i class="typcn typcn-cog"></i> 独立设置</td>
		<td>( <font style="font-weight:500;color:red">独立设置优先于全局设置</font> )</td>
	</tr>
	<tr class="tdbg">
      <td align="right" class="config_td_first"><font color="red">独立</font>屏蔽游客访问：</td>
      <td class="icheck_radios">
			<label><input type="radio" name="con[user_ban]" value="0"<?php if($this->_var['user_ban'] == '0'): ?> checked<?php endif; ?>>不屏蔽</label>
			<label><input type="radio" name="con[user_ban]" value="1"<?php if($this->_var['user_ban'] == '1'): ?> checked<?php endif; ?>>PC端屏蔽</label>
			<label><input type="radio" name="con[user_ban]" value="2"<?php if($this->_var['user_ban'] == '2'): ?> checked<?php endif; ?>>移动端屏蔽</label>
			<label><input type="radio" name="con[user_ban]" value="4"<?php if($this->_var['user_ban'] == '4'): ?> checked<?php endif; ?>>全部屏蔽</label>
			<label><input type="radio" name="con[user_ban]" value="3"<?php if($this->_var['user_ban'] == '3' || $this->_var['user_ban'] == ''): ?> checked<?php endif; ?>>跟随全局设置</label>
			 <span class="tips">禁止非蜘蛛用户访问</span>
			</td>
    </tr>

	<tr class="tdbg">
      <td align="right" class="config_td_first"><font color="red">独立</font>游客访问跳转：</td>
      <td class="icheck_radios">
			<label><input type="radio" name="con[user_jump]" value="0"<?php if($this->_var['user_jump'] == '0'): ?> checked<?php endif; ?>>不跳转</label>
			<label><input type="radio" name="con[user_jump]" value="1"<?php if($this->_var['user_jump'] == '1'): ?> checked<?php endif; ?>>PC端跳转</label>
			<label><input type="radio" name="con[user_jump]" value="2"<?php if($this->_var['user_jump'] == '2'): ?> checked<?php endif; ?>>移动端跳转</label>
			<label><input type="radio" name="con[user_jump]" value="4"<?php if($this->_var['user_jump'] == '4'): ?> checked<?php endif; ?>>全部跳转</label>
			<label><input type="radio" name="con[user_jump]" value="3"<?php if($this->_var['user_jump'] == '3' || $this->_var['user_jump'] == ''): ?> checked<?php endif; ?>>跟随全局设置</label>
			 <span class="tips">蜘蛛不跳转</span>

			</td>
    </tr>

	<tr class="tdbg">
      <td width="150" align="right" class="config_td_first"><font color="red">独立</font>游客跳转地址（<font color="red">PC端</font>）：</td>
      <td class="tdbg"><input name="con[user_jumpurl_pc]" type="text" class="input" value="<?php echo (!isset($this->_var['user_jumpurl_pc']) || $this->_var['user_jumpurl_pc']==='') ? 'http://' : $this->_var['user_jumpurl_pc']; ?>" size="60"></td>
    </tr>
	<tr class="tdbg">
      <td width="150" align="right" class="config_td_first"><font color="red">独立</font>游客跳转地址（<font color="red">移动端</font>）：</td>
      <td class="tdbg"><input name="con[user_jumpurl_m]" type="text" class="input" value="<?php echo (!isset($this->_var['user_jumpurl_m']) || $this->_var['user_jumpurl_m']==='') ? 'http://' : $this->_var['user_jumpurl_m']; ?>" size="60"></td>
    </tr>

	<tr class="tdbg">
      <td align="right" class="config_td_first"><font color="red">独立</font>流量统计代码：</td>
      <td><textarea name="con[tongji]"  rows="3"  class="inputs" style="width:450px;"><?php echo $this->_var['tongji']; ?></textarea></td>
    </tr>

</table>
</form>

</body>
</html>