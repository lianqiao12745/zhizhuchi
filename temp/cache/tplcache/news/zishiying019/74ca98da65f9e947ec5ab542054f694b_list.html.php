<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<title><?php echo $this->_var['toptitle']; ?></title>
<meta name="description" content="<?php echo $this->_var['description']; ?>" />
<meta name="keywords" content="<?php echo $this->_var['keywords']; ?>" />
<link href="<?php echo $this->_var['theme_path']; ?>/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="<?php echo $this->_var['theme_path']; ?>/css/import.css">
</head>
<body>
<?php echo $this->fetch('head.html'); ?>
<div class="container">
  <div class="row clearfix">
    <div class="col-md-8 col-sm-12">
      <div class="text-left h-news">最新文章</div>
      <ul class="h-newslist">
	    <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["e5600196b6e8b5baf2d90c27d15609d2"]=$this->tag_block_loop(array('type'=>'arclist','row'=>'20',),$this)){ foreach($this->_tags_data["e5600196b6e8b5baf2d90c27d15609d2"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
        <li><a href="<?php echo $this->_var['vo']['url']; ?>" title="<?php echo $this->_var['vo']['title']; ?>"><?php echo $this->tag_function_catelog(array( 'type'=>"name", ),$this); ?>| <?php echo $this->_var['vo']['title']; ?></a><span><?php echo $this->_var['vo']['postdate']; ?></span></li>
         <?php }} ?> 
      </ul>
      <div class="text-center">
        <ul class="pagination">
          <li><a href="#">上一页</a></li>
          <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["2184997a7029df23f645508a0c22d9c2"]=$this->tag_block_loop(array('type'=>'typename',),$this)){ foreach($this->_tags_data["2184997a7029df23f645508a0c22d9c2"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
            <li><a href="<?php echo $this->_var['vo']['typeurl']; ?>"><?php echo ($this->_var['k']+1); ?></a></li>
			<?php }} ?>
          <li class="dn"><a href="#">下一页</a></li>
        </ul>
      </div>
    </div>
    <div class="col-md-4 col-sm-12">
      <div class="trends">
        <h4 class="text-left">重点关注</h4>
        <ul class="xgtj-side xgtj-side-list">
		 <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["9d3af35781360a08c6941355762a5475"]=$this->tag_block_loop(array('type'=>'arclist','row'=>'4','image'=>'1',),$this)){ foreach($this->_tags_data["9d3af35781360a08c6941355762a5475"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
		 <li class="item">
            <div class="item-con">
              <div class="pic"> <a href="<?php echo $this->_var['vo']['url']; ?>" target="_blank" class="avatar"> <img src="<?php echo $this->_var['vo']['pic']; ?>" alt="<?php echo $this->_var['vo']['title']; ?>"> </a> </div>
              <div class="text">
                <h5 class="tit"><a href="<?php echo $this->_var['vo']['url']; ?>" target="_blank"><?php echo $this->_var['vo']['title']; ?></a></h5>
                <div class="info">
                  <div class="c2"> <span class="date"><?php echo $this->_var['vo']['postdate']; ?></span> </div>
                </div>
              </div>
            </div>
          </li>
		  <?php }} ?>
        </ul>
      </div>
      <div class="trends-ad">
        <h4 class="text-left">编辑推荐</h4>
        <ul class="trends-ads">
		  <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["50b4df1f8b39044757ab9851a81c53f1"]=$this->tag_block_loop(array('type'=>'arclist','row'=>'8',),$this)){ foreach($this->_tags_data["50b4df1f8b39044757ab9851a81c53f1"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
          <li class="item"> <a href="<?php echo $this->_var['vo']['url']; ?>" title="<?php echo $this->_var['vo']['title']; ?>" target="_blank"><?php echo $this->_var['vo']['title']; ?></a> </li>
           <?php }} ?>
        </ul>
      </div>
      <?php echo $this->fetch('link.html'); ?>
    </div>
  </div>
</div>
<footer class="container tail text-center">
  <?php echo $this->fetch('footer.html'); ?>
</footer>
<script src="<?php echo $this->_var['theme_path']; ?>/js/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $this->_var['theme_path']; ?>/js/nav.min.js"></script>
<script type="text/javascript">
		$(function() {
			$('.nav_n').pgwMenu({
				mainClassName: 'nav_n',
				dropDownLabel: '导航',
				viewMoreLabel: '更多<span class="icon"></span>'
			});
		});
	</script>
</body>
</html>