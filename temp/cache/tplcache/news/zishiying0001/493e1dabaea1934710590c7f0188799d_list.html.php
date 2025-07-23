<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php echo $this->_var['toptitle']; ?></title>
<meta name="description" content="<?php echo $this->_var['description']; ?>" />
<meta name="keywords" content="<?php echo $this->_var['keywords']; ?>" />
<link rel="stylesheet" type="text/css" href="<?php echo $this->_var['theme_path']; ?>/css/site.css">
</head>
<body>
<?php echo $this->fetch('header.html'); ?>
<main class="site-main">
  <section class="primary-content">
    <h2 style="height:30px; font-size:14px; line-height:30px; margin:0 0 18px 0; text-indent:13px; border-bottom:3px #4e8100 solid; background:url(images/ico-3.jpg) 0 13px no-repeat; font-weight:normal;">
      当前位置：<a href="/">首页</a> &gt; <a href="<?php echo $this->_var['thisurl']; ?>"><?php echo $this->_var['typename']; ?></a>
    </h2>
    <ul class="article-list">
      <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["e5600196b6e8b5baf2d90c27d15609d2"]=$this->tag_block_loop(array('type'=>'arclist','row'=>'20',),$this)){ foreach($this->_tags_data["e5600196b6e8b5baf2d90c27d15609d2"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
        <li><a href="<?php echo $this->_var['vo']['url']; ?>"><?php echo $this->_var['vo']['title']; ?></a><span class="date"><?php echo $this->_var['vo']['postdate']; ?></span></li>
      <?php }} ?>
    </ul>
    <div class="text-center">
      <ul style="display:flex;justify-content:center;list-style:none;padding-left:0;margin:18px 0;">
        <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["5f3fb7af461661cda2a13b220f2c0d5a"]=$this->tag_block_loop(array('type'=>'page','tpl'=>'list',),$this)){ foreach($this->_tags_data["5f3fb7af461661cda2a13b220f2c0d5a"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
        <li style="margin:0 3px;">
          <a href="<?php echo $this->_var['vo']['url']; ?>" style="display:block;padding:6px 14px;border-radius:4px;background:#f6f6f8;color:#2779d2;text-decoration:none;font-size:13px;">
            <?php echo $this->_var['vo']['title']; ?>
          </a>
        </li>
        <?php }} ?>
      </ul>
    </div>


  </section>
  <aside class="sidebar">
    <div class="focus-box">
      <h4>焦点资讯</h4>
      <ul class="focus-list">
        <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["681178c0ee7e09fbb87938b7827042da"]=$this->tag_block_loop(array('type'=>'arclist','row'=>'4','image'=>'1',),$this)){ foreach($this->_tags_data["681178c0ee7e09fbb87938b7827042da"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
        <li>
          <a href="<?php echo $this->_var['vo']['url']; ?>" class="thumb"><img src="<?php echo $this->_var['vo']['pic']; ?>" alt="<?php echo $this->_var['vo']['title']; ?>"></a>
          <p class="title"><a href="<?php echo $this->_var['vo']['url']; ?>"><?php echo $this->_var['vo']['title']; ?></a></p>
        </li>
        <?php }} ?>
      </ul>
    </div>
    <div class="recommend-box">
      <h4>编辑推荐</h4>
      <ul class="recommend-list">
        <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["50b4df1f8b39044757ab9851a81c53f1"]=$this->tag_block_loop(array('type'=>'arclist','row'=>'8',),$this)){ foreach($this->_tags_data["50b4df1f8b39044757ab9851a81c53f1"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
          <li><a href="<?php echo $this->_var['vo']['url']; ?>"><?php echo $this->_var['vo']['title']; ?></a></li>
        <?php }} ?>
      </ul>
    </div>
    <?php echo $this->fetch('link.html'); ?>
  </aside>
</main>
<?php echo $this->fetch('footer.html'); ?>
<script src="<?php echo $this->_var['theme_path']; ?>/js/site.js"></script>
</body>
</html>