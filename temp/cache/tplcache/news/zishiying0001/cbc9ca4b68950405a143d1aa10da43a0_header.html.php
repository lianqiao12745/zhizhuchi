<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><header class="header-bar">
  <div class="inner-wrap">
    <div class="logo-box">
      <a href="/" class="site-logo" title="<?php echo $this->_var['web_name']; ?>"><?php echo $this->_var['web_name']; ?></a>
    </div>
    <button class="nav-toggle" id="navToggle">&#9776;</button>
    <nav class="site-nav" id="mainNav">
      <ul class="menu-list">
        <li><a href="/" class="active">首页</a></li>
        <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["76a37b39e0e3729815e093dfef4bccec"]=$this->tag_block_loop(array('type'=>'typename','type1'=>'top','row'=>'8',),$this)){ foreach($this->_tags_data["76a37b39e0e3729815e093dfef4bccec"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
          <li><a href="<?php echo $this->_var['vo']['typeurl']; ?>"><?php echo $this->_var['vo']['typename']; ?></a></li>
        <?php }} ?>
      </ul>
    </nav>
  </div>
</header>