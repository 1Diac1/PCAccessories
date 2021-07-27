$(document).ready(function(){
  $('.bminus').click(function(e){
  e.preventDefault();
  let $this = $(this);
  let input = $('#counter');
  let value = parseInt(input.val());
  if(value > 1){value = value - 1;}
  else{value = 0;}
  input.val(value);
  });
  
  $('.bplus').click(function(e){
  e.preventDefault();
  let $this = $(this);
  let input = $('#counter');
  let value = parseInt(input.val());
  if(value < 100){value = value + 1;}
  else{value = 100;}
  input.val(value);
  });
  });