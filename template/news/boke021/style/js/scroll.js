;(function($){
    var methods = {
        intervalId :'',
        delay:100,
        run:function(opt){
            //console.log("run:" + this + JSON.stringify(opt.arr));
            var i = 0;
            this.intervalId = setInterval(function(){
                var txt = opt.arr[++i%opt.arr.length];
                opt.ele.text(txt).val(txt);
                //console.log(txt);
            },this.delay);
        },
        stop :function(opt){
            //console.clear();
            clearInterval(this.intervalId);
            if(!opt.finalTxt){
                return ;
            }
            opt.ele.text(opt.finalTxt).val(opt.finalTxt);
        },
        auto:function(opt){
            var during = opt.during;
            var seconds = parseInt(Math.random()*10000)%(during.max-during.min)+during.min;
            this.run(opt);
            setTimeout(function(the,opt){the.stop(opt)},seconds,this,opt);
        }
    }
      function makeRandomTotalAmount(){
        var arr = [2.33,6.66,9.99,8.88,1,23];
        for(var i = 0; i < 10; i++){
            arr.push(parseFloat(Math.random()*10).toFixed(2));
        }
        return arr;
    }
    $.fn.scroll = function(opt){
        var the = this;
        var setting = $.extend({
            m:"auto",
            arr:makeRandomTotalAmount(),
            ele:this,
            during:{
                min:1000,max:3000
            }
        },opt)
        if(methods[setting.m]){
            methods[setting.m](setting);
        }
    }
})(jQuery);