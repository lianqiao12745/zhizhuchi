<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><header>
  <div class="apex">
    <div class="container"> <span class="apex_h">欢迎来到<?php echo $this->_var['web_name']; ?>网站！</span>
      <div class="apex_head_r text-right"> <span class="apex_head_r0"><a href="#">注册</a></span> <span class="apex_head_r0">|</span> <span class="apex_head_r0"><a href="#">登录</a></span> </div>
    </div>
  </div>
  <div class="apex_head_bz container"> <a href="/" title="<?php echo $this->_var['web_name']; ?>">
    <div class="txt-logo"><?php echo $this->_var['web_name']; ?></div>
    </a> </div>
  <div class="navL">
    <div class="container">
      <ul class="nav_n">
        <li><a class="selected" href="/">首页</a></li>
        <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["76a37b39e0e3729815e093dfef4bccec"]=$this->tag_block_loop(array('type'=>'typename','type1'=>'top','row'=>'8',),$this)){ foreach($this->_tags_data["76a37b39e0e3729815e093dfef4bccec"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
          <li><a href="<?php echo $this->_var['vo']['typeurl']; ?>" target="_self"><?php echo $this->_var['vo']['typename']; ?></a></li>
		 <?php }} ?>
      </ul>
    </div>
  </div>
</header>