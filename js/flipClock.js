var genDOM = function(num){
  return   '<div class="page next top" data-num="'+(num+1)+'" ></div>'+
  '<div class="page prev top" data-num="'+num+'"></div>'+
  '<div class="page prev bottom" data-num="'+num+'"></div>'+
    '<div class="page next bottom" data-num="'+(num+1)+'"></div>'
}

var i = 1;
setInterval(function(){
  var stage = $('.stage');
  stage.empty().append(genDOM(i++));
},1000);