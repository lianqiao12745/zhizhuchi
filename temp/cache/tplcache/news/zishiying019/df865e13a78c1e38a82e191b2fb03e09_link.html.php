<?php if(!defined('INI_XXFSEO')){define('INI_XXFSEO',true);} ?><div class="trends-ad mb10">
    <h4 class="text-left">友情链接</h4>
    <ul class="trends-ads">
        <?php if(!isset($this->_tags_data)){ $this->_tags_data=array(); } if($this->_tags_data["976aaf4546ee96e17a6fa10824e3d0c5"]=$this->tag_block_loop(array('type'=>'domain',),$this)){ foreach($this->_tags_data["976aaf4546ee96e17a6fa10824e3d0c5"] as $this->_var["k"]=>$this->_var["vo"]){ ?>
        <li class="friend"><a href="<?php echo $this->_var['vo']['url']; ?>" target="_blank"><?php echo $this->_var['vo']['title']; ?></a></li>
        <?php }} ?>
    </ul>
</div>