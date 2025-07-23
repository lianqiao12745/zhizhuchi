<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<style type="text/css">
img{
	max-width:500px;
}
.title_bg{ text-align:right;color:#333 }
td .img {
  max-width: 500px;
  vertical-align: middle;
}
</style>
<div style="padding:0 10px 10px 10px;">
<fieldset>
	<legend title="点击展开/收起">列表页获取</legend>
	<table width="98%" border="0" cellpadding="5" cellspacing="1" bgcolor="#eeeeee">
		<tr bgcolor="#ffffff">
			<td align="right" width="100" class="title_bg">列表地址：</td>
			<td align="left">
				<div style="max-height:80px;overflow:auto;background:#eee;max-width: 600px;">
					<pre style="padding:0 10px;margin:0"><?php echo implode($this->_var['listurlarr']['url'],"\r\n");?></pre>
				</div>
			</td>
		</tr>
		<tr bgcolor="#ffffff">
			<td align="right" class="title_bg">测试提取地址：</td>
			<td align="left"><font color="#990000"><?php echo $this->_var['listurl']; ?></font></td>
		</tr>

		<tr bgcolor="#ffffff">
			<td align="right" class="title_bg">内容页地址：</td>
			<td align="left">
				<div style="max-height:150px;overflow:auto;background:#eee;max-width: 600px;">
					<pre style="padding:0 10px;margin:0"><?php echo implode($this->_var['showurlarr'],"\r\n");?></pre>
				</div>
			</td>
		</tr>
	</table>
</fieldset>
<fieldset>
	<legend class="c9" title="点击展开/收起">返回列表HTML（点击展开）</legend>
	<table width="98%" border="0" cellpadding="3" cellspacing="2" class="none">
		<tr>
			<td><textarea style="width:100%;height:160px"><?php echo htmlspecialchars($this->_var['list_html']); ?></textarea></td> 
		</tr>
	</table>
</fieldset>
<fieldset>
	<legend title="点击展开/收起">内容页获取</legend>
	<table width="98%" border="0" cellpadding="5" cellspacing="1" bgcolor="#eeeeee">
		<tr bgcolor="#ffffff">
			<td align="right" width="100" class="title_bg">测试提取地址：</td> 
			<td align="left"><font color="#990000"><?php echo $this->_var['showurl']; ?></font></td>
		</tr>
		<?php if(! $this->_var['rules']['split']): ?>
		<tr bgcolor="#ffffff">
			<td align="right" class="title_bg">标题获取(自动)：</td> 
			<td align="left"><font color="#990000"><?php echo (!isset($this->_var['title']) || $this->_var['title']==='') ? '无' : $this->_var['title']; ?></font></td>
		</tr>
		<?php endif; ?>
		<tr bgcolor="#ffffff">
			<td align="right" width="100" class="title_bg">伪原创：</td> 
			<td align="left"><?php if(! $this->_var['rules']['replace_word'] && ! $this->_var['rules']['replace_api']): ?><font color=red>未开启</font><?php endif; ?><?php if($this->_var['rules']['replace_word']): ?><font color=blue>伪原创替换</font><?php endif; ?>&nbsp;&nbsp;<u><?php if($this->_var['rules']['replace_api']): ?><font color=blue>伪原创api ：<font color="red"><?php echo $this->_var['replace_api_title']; ?></font> , 状态：<?php echo $this->_var['replace_api_status']; ?></font><?php endif; ?></u></td>
		</tr>
		<tr bgcolor="#ffffff">
			<td align="right" class="title_bg"><?php if($this->_var['rules']['split']): ?>句子<?php else: ?>内容<?php endif; ?>获取：</td> 
			<td align="left">
				<div style="max-height:150px;overflow:auto;background:#eee;max-width: 600px;">
					<pre style="padding:0 10px;margin:0"><?php echo $this->_var['content']; ?></pre>
				</div>
			</td>
		</tr>
		<tr class="list">
			<td align="right" class="title_bg">图片地址获取：</td> 
			<td align="left">
				<div style="max-height:100px;overflow:auto;background:#eee;max-width: 600px;">
					<pre style="padding:0 10px;margin:0"><?php echo implode($this->_var['picarr'],"\r\n");?></pre>
				</div>
			</td>
		</tr>
</table>
</fieldset>
<fieldset>
	<legend class="c9" title="点击展开/收起">返回内容HTML（点击展开）</legend>
	<table width="98%" border="0" cellpadding="3" cellspacing="2" class="none">
		<tr>
			<td><textarea style="width:100%;height:160px"><?php echo htmlspecialchars($this->_var['html']); ?></textarea></td> 
		</tr>
	</table>
</fieldset>
</div>
<script type="text/javascript">
$("fieldset legend").click(function(){
	$(this).parent().find("table:first").toggle();
	$(this).toggleClass("c9");
});

</script>