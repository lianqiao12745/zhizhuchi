<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php echo $this->_var['toptitle']; ?></title>
<meta name="keywords" content="<?php echo $this->_var['keywords']; ?>" />
<meta name="description" content="<?php echo $this->_var['description']; ?>" />
<link rel="stylesheet" type="text/css" href="<?php echo $this->_var['theme_path']; ?>/css/site.css">
</head>
<body>
<?php echo $this->fetch('header.html'); ?>
<main class="site-main">
  <article class="primary-content">
    <h1 class="detail-title"><?php echo $this->_var['title']; ?></h1>
    <div class="meta"><span class="date"><?php echo $this->_var['postdate']; ?></span><span class="source"><?php echo $this->tag_function_getone(array( 'name'=>"keywords", 'cacheid'=>"rand", ),$this); ?></span></div>
    <div class="detail-body">
      <?php echo $this->_var['body']; ?>
    </div>
    <div class="more-link">更多内容请访问 <a href="<?php echo $this->_var['typeurl']; ?>"><?php echo $this->_var['typename']; ?></a> 栏目&gt;&gt;&gt;</div>
  </article>
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