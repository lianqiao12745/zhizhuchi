<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><script id="robot_list_scriptbox" type="text/px-templates">
<form method="post">
<table align="center" cellpadding="8" cellspacing="1" id="robot_list">
		<tr align="center">
		  <td width="110" align='center' class="title_bg">蜘蛛</td>
		  <td width="110" align='center' class="title_bg">蜘蛛</td>
		  <td width="110" align='center' class="title_bg">蜘蛛</td>
		  <td width="110" align='center' class="title_bg">蜘蛛</td>
		</tr>
<?php $i=1; ?>
<?php $_from=$this->_var['robot_list']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('key', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['key'] => $this->_var['vo']):
?>
<?php if($i==1):?><tr><?php endif; ?>
	<td align="right"><label for="in_<?php echo $this->_var['key']; ?>"><?php echo $this->_var['vo']; ?></label><input type="checkbox" title="<?php echo $this->_var['vo']; ?>" id="in_<?php echo $this->_var['key']; ?>" value="<?php echo $this->_var['key']; ?>"/></td>
		<?php if($i!=$this->_var['list_last'] and ($i%4==0)):?>
			</tr><tr>
		<?php endif; ?>
	<?php $i++; ?>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?>
<tr bgcolor='#ffffff' style="border-top:1px solid #eee">
	<td colspan="4">
		<label><input name="chkall" type="checkbox" id="chkall" onclick=checkall(this.form) value="checkbox"> 全选/反选</label>
		<button type="button" class="button" onclick="select_robots_ok();"><i class="typcn typcn-tick"></i>确定选择</button>
	</td>
</tr>
</table>
</form>
</script>
<script type="text/javascript">
var robot_dialog;
var robot_body=$('#robot_list_scriptbox').html();
function select_robots(){
	var rbvalue=','+$('#rb_value').val()+',';
	robot_dialog=art.dialog({ 
		content:'<div id="robot_list_box">'+robot_body+'</div>',
		init: function(){
			var select0=false;
			$('#robot_list input:checkbox').each(function(i) {
				if(rbvalue.indexOf(','+$(this).val()+',')>-1 || rbvalue==$(this).val()){
					$(this).attr('checked',true);
					if($(this).val()==0){
						select0=true;
					}
				}
				if(select0 && $(this).val()!=0){
					$(this).attr('disabled',true);
				}
			});
		},
		lock:true,opacity:0.3,title:'选择开启此功能的蜘蛛',id:'rifrm_robot'
	});
	robot_dialog.show();
}
function select_robots_ok(){
	var rb=new Array();
	var rbtitle=new Array();
	$('#robot_list input[type="checkbox"]:checked').each(function(i,item) {
		rb[i]=$(this).val();
		rbtitle[i]=$(this).attr('title');
	});
	var rbvalue=rb.join(',');
	var rbtitles=rbtitle.join(',');
	if(rbvalue==''){
		rbtitles='不限制';
	}
	$('#rb_items').html(rbtitles);
	$('#rb_value').val(rbvalue);
	robot_dialog.hide();
}
</script>