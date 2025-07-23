<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><?php echo $this->fetch('header.html'); ?>
<script type="text/javascript" src="static/js/highcharts/highcharts.js"></script>
<script type="text/javascript" src="static/js/highcharts/themes/xxfseo.js"></script>
<body class="body-main">
<ul id="admin_sub_title">
	<li class="sub"><a href="javascript:">蜘蛛访问记录</a></li>
	<li class="tips"><a href="javascript:" onclick="recount();" style="color:red">（点击修正/重新计算）</a></li>
</ul>
<script type="text/javascript">
function recount(){
	if(confirm("此操作会暂时关闭蜘蛛记录，待修正完毕会自动开启\n------------------------------------\n数量大的话会需要点时间\n------------------------------------\n注：24小时段的无法修复\n------------------------------------\n\n确定执行吗？\n------------------------------------")==false){
		return false;
	}
	page_loading('正在计算蜘蛛爬行记录...');
	$.ajax({
		url:'?admin-robot-recount',
		success:function(h){
			page_loading_close();
			alert(h);
			location.reload();
		}
	});
}
</script>
<div id="admin_right_b">
<?php if($this->_var['total']): ?>
<div style="height: 300px;">
	<div style="position: relative;">
		<div id="line_tab" class="chart_tab" style="margin-left:31%;">
			<span class="cur" data="0">今日</span>
			<span data="1">昨日</span>
			<span data="2">前日</span>
		</div>
		<div id="chart_line_day_box" class="chart_box"><?php echo $this->fetch('chart_line_day.html'); ?></div>
	</div>
	<div style="position: relative;text-align:right">
		<div id="pie_tab" class="chart_tab" style="text-align: right;width: 30%;left: -10px;">
			<span class="cur" data="0">今日</span>
			<span data="1">昨日</span>
			<span data="7">7日</span>
			<span data="30">30日</span>
			<span data="365">1年</span>
		</div>
		<div id="chart_pie_day_box" class="chart_box"><?php echo $this->fetch('chart_pie_day.html'); ?></div>
	</div>
</div>
<div style="position: relative;">
	<div class="type_tab" id="week_type_tab">
		<span class="cur" data="">全部</span><span data="detail">明细</span>
	</div>
	<span id="week_type" data=""></span>
	<div id="week_tab" class="chart_tab" style="left:160px;">
		<span data="10" class="cur">近10日</span>
		<span data="30">近30日</span>
		<span data="365">近1年</span>
	</div>
	<div id="chart_line_week_box" class="chart_box"><?php echo $this->fetch('chart_line_week.html'); ?></div>
</div>
<script type="text/javascript">
$(function () {
	$('#pie_tab span').click(function(){
		$(this).siblings().removeClass('cur').end().addClass('cur');
		var gurl='?admin-robot-getchartpie-'+'value-'+$(this).attr('data');
		$('#chart_pie_day_box .highcharts-container').css({ opacity: 0.3 });
		$('#chart_pie_day').append('<div class="loading">加载中...</div>');
		$.ajax({
			url:gurl,
			success:function(data){
				$('#chart_pie_day_box .highcharts-container').html(data.html).css({ opacity:1 });
			}
		});
	});
	$.ajax({
		url:'?admin-robot-getchartline-value-0',
		success:function(data){
			$('#chart_line_day_box .highcharts-container').html(data.html);
		}
	});
	$('#line_tab span').click(function(){
		$(this).siblings().removeClass('cur').end().addClass('cur');
		var gurl='?admin-robot-getchartline-'+'value-'+$(this).attr('data');
		$('#chart_line_day_box .highcharts-container').css({ opacity: 0.3 });
		$('#chart_line_day').append('<div class="loading">加载中...</div>');
		$.ajax({
			url:gurl,
			success:function(data){
				$('#chart_line_day_box .highcharts-container').html(data.html).css({ opacity:1 });
			}
		});
	});
	$('#week_type_tab span').click(function(){
		$(this).siblings().removeClass('cur').end().addClass('cur');
		$('#week_type').attr('data',$(this).attr('data'));
		var gurl='?admin-robot-getchartweek-'+'value-10'+'-type-'+$('#week_type').attr('data');
		$('#chart_line_week_box .highcharts-container').css({ opacity: 0.3 });
		$('#chart_line_week').append('<div class="loading">加载中...</div>');
		$.ajax({
			url:gurl,
			success:function(data){
				$('#chart_line_week_box .highcharts-container').html(data.html).css({ opacity:1 });
			}
		});
	});
	$('#week_tab span').click(function(){
		$(this).siblings().removeClass('cur').end().addClass('cur');
		var gurl='?admin-robot-getchartweek-'+'value-'+$(this).attr('data')+'-type-'+$('#week_type').attr('data');
		$('#chart_line_week_box .highcharts-container').css({ opacity: 0.3 });
		$('#chart_line_week').append('<div class="loading">加载中...</div>');
		$.ajax({
			url:gurl,
			success:function(data){
				$('#chart_line_week_box .highcharts-container').html(data.html).css({ opacity:1 });
			}
		});
	});
});
</script>
<style type="text/css">
#scount a{ font-size:12px;}
.curday{ border-bottom: 2px solid #ff6600;}
.siftday { padding: 3px 3px;}
</style>
<div class="divtips" style="margin-top:20px">
	<i class="typcn typcn-info"></i> 提示：如域名使用了CDN无法获取真实IP，请到 “系统设置”中，开启“域名是否使用了CDN”
</div>
<table border="0" align="center" cellpadding="3" cellspacing="0" class="table_b" style="margin-top:10px">
	<tbody>
	<tr class="tdbg item_title">
		<td colspan="8">
			<i class="typcn typcn-th-list"></i> 蜘蛛访问明细&nbsp;&nbsp;<input id="sday" type="text" onClick="WdatePicker({ dateFmt:'yyyyMMdd'})" class="input Wdate" style="width:150px;" value="<?php echo $this->_var['sday']; ?>">&nbsp;&nbsp;<button type="button" class="button" onclick="get_list('?admin-robot-index-day-'+$('#sday').val());"><i class="typcn typcn-zoom-in"></i>查看</button>
			&nbsp;&nbsp;
			<span class="glist">
				<i class="typcn typcn-stopwatch"></i>&nbsp;<a href="?admin-robot-index-day-<?php echo date('Ymd'); ?>" class="siftday day<?php echo date('Ymd'); ?>">今日蜘蛛</a>&nbsp;
				<font style="font-weight: normal;color:#ccc">|</font>&nbsp;<a href="?admin-robot-index-day-<?php echo $this->_var['yesterday']; ?>" class="siftday day<?php echo $this->_var['yesterday']; ?>">昨日蜘蛛</a>&nbsp;<font style="font-weight: normal;color:#ccc">|</font>&nbsp;
				<a href="?admin-robot-index-day-<?php echo $this->_var['yesterday2']; ?>" class="siftday day<?php echo $this->_var['yesterday2']; ?>">前日蜘蛛</a>&nbsp;<font style="font-weight: normal;color:#ccc">|</font>&nbsp;
				<a href="?admin-robot-index-day-<?php echo $this->_var['yesterday3']; ?>" class="siftday day<?php echo $this->_var['yesterday3']; ?>">前2日蜘蛛</a>&nbsp;
			</span>
		</td>
	</tr>
	<tr class="tdbg item_title">
		<td colspan="8">
			<span id="scount"><?php $_from=$this->_var['scount']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('k', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['k'] => $this->_var['vo']):
?><span class="glist"><?php if($this->_var['vo']['ico']): ?><img src="<?php echo $this->_var['vo']['ico']; ?>" height="15" />&nbsp;<?php endif; ?><a href="<?php echo $this->_var['vo']['url']; ?>"><?php echo $this->_var['vo']['name']; ?>(<font style="font-size:11px;<?php if($this->_var['vo']['count'] > 0): ?>color:#ff3300;<?php endif; ?>"><?php echo $this->_var['vo']['count']; ?></font>)</a></span>&nbsp;<font style="font-weight: normal;color:#ccc">|</font>&nbsp;<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars(); ?></span>
		</td>
	</tr>
	<tr>
	  <td width="50" align='center' class="title_bg">id</td>
	  <td width="100" align='center' class="title_bg">蜘蛛名称</td>
	  <td width="110" align='center' class="title_bg">IP地址</td>
	  <td width="80" align='center' class="title_bg">国家/城市</td>
      <td class="title_bg">访问地址</td>
	  <td width="150" align='center' class="title_bg">模板</td>
	  <td width="50" align='center' class="title_bg">蜘蛛类型</td>
	  <td width="140" align='center' class="title_bg">访问时间</td>
    </tr>
	</tbody>
	<tbody id="rlist">
	<?php $_from=$this->_var['list']; if(!is_array($_from) && !is_object($_from)){ settype($_from, 'array'); }; $this->push_vars('', 'vo');if(count($_from)):
    foreach($_from AS $this->_var['vo']):
?>
		<tr class="tdbg">
			<td align="center"><?php echo $this->_var['vo']['id']; ?></td>
			<td align="center"><?php if($this->_var['vo']['sourl']): ?><span class="glist"><a href="<?php echo $this->_var['vo']['sourl']; ?>"><?php echo $this->_var['vo']['name']; ?></a></span><?php else: ?><?php echo $this->_var['vo']['name']; ?><?php endif; ?></td>
			<td align="center"><a title="点击查询IP归属" href="https://www.ip138.com/iplookup.asp?ip=<?php echo $this->_var['vo']['ip']; ?>&action=2" target="_blank"><?php echo $this->_var['vo']['ip']; ?></a></td>
			<td align="center"><?php echo $this->_var['vo']['city']; ?></td>
			<td><?php echo $this->_var['vo']['url']; ?></td>
			<td align="center"><?php echo (!isset($this->_var['vo']['typename']) || $this->_var['vo']['typename']==='') ? '无' : $this->_var['vo']['typename']; ?></td>
			<td align="center"><?php echo $this->_var['vo']['terminal_name']; ?></td>
			<td align="center"><?php echo $this->_var['vo']['time']; ?></td>
		</tr>
	<?php endforeach; else: ?>
		<tr bgcolor='#ffffff'>
			<td colspan='8' height="25" align="center">暂无记录！</td>
		</tr>
	<?php endif; unset($_from); ?><?php $this->pop_vars(); ?>
	</tbody>
	<tbody>
	<tr>
      <td colspan="8" class="tdbg content_page" align="center"><a>共 <font id="total"><?php echo $this->_var['total']; ?></font> 条</a>&nbsp;<span class="glist" id="pages"><?php echo $this->_var['pages']; ?></span></td>
	</tr>
	</tbody>
</table>
<script type="text/javascript">
bind_page();
function bind_page(){
	$('.glist a').off("click");
	$('.glist a').click(function(){
		var href=$(this).attr('href');
		if(href){
			get_list(href);
			return false;
		}
	});
}
function get_list(url){
	page_loading();
	var today='<?php echo date("Ymd"); ?>';
	var yesterday='<?php echo $this->_var['yesterday']; ?>';
	var yesterday2='<?php echo $this->_var['yesterday']; ?>';
	$.ajax({
		url:url,
		success:function(data){
			$('#pages').html(data.pages);
			str='';
			$.each(data.list,function($n,$vo){
				str+='<tr class="tdbg">';
				str+='	<td align="center">'+$vo['id']+'</td>';
				str+='	<td align="center"><span class="glist"><a href="'+$vo.sourl+'">'+$vo['name']+'</a></td>';
				str+='	<td align="center"><a title="点击查询IP归属" href="https://www.ip138.com/iplookup.asp?ip='+$vo['ip']+'&action=2" target="_blank">'+$vo['ip']+'</a></td>';
				str+='	<td align="center">'+$vo['city']+'</td>';
				str+='	<td>'+$vo['url']+'</td>';
				str+='	<td align="center">'+$vo['typename']+'</td>';
				str+='	<td align="center">'+$vo['terminal_name']+'</td>';
				str+='	<td align="center">'+$vo['time']+'</td>';
				str+='</tr>';
			});
			cstr='';
			$.each(data.scount,function($n,$vo){
				cstr+='<span class="glist">'+($vo['ico']?'<img src="'+$vo['ico']+'" height="15" />&nbsp;':'')+'<a href="'+$vo['url']+'"><font '+($vo['key']==data.spider ? 'color="red"':'')+'>'+$vo['name']+'(<font color="'+($vo['count']>0?'#ff3300':'')+'">'+$vo['count']+'</font>)</font></a></span>&nbsp;<font style="font-weight: normal;color:#ccc">|</font>&nbsp;</span>';
			});
			$('.siftday').removeClass('curday');
			$('.day'+data.getday).addClass('curday');
			$('#rlist').html(str);
			$('#scount').html(cstr);
			$('#total').html(data.total);
			page_loading_close();
			bind_page();
		}
	});
}
</script>
<?php else: ?>
<script type="text/javascript">
showDialog();
showDialog('<?php echo $this->_var['errmsg']; ?>','notice');
</script>
<?php endif; ?>
<div class="runtime"></div>  
</div>
<?php echo $this->fetch('footer.html'); ?>
</body>
</html>