document.addEventListener('DOMContentLoaded',function(){
  var switcher=document.getElementById('navSwitcher');
  var nav=document.getElementById('navMenu');
  if(switcher){
    switcher.addEventListener('click',function(){
      if(nav.style.display==='block'){
        nav.style.display='none';
      }else{
        nav.style.display='block';
      }
    });
  }
});
