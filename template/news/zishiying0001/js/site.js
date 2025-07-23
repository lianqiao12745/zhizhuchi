document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if(toggle){
    toggle.addEventListener('click', function(){
      if(nav.style.display === 'block'){
        nav.style.display = 'none';
      }else{
        nav.style.display = 'block';
      }
    });
  }
});
