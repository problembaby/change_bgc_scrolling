$(document).ready(function(){
  let wHeight = $(window).height(); //윈도우 높이
  console.log("창높이 : ",wHeight);

  $('.slide').height(wHeight)
  .scrollie({
    scrollOffset : -50, // 상단에서 50px 떨어졌을시 작동
    scrollingInView: function(elem){
      let bgColor = elem.data('background');
      console.log("색상 : ",bgColor);
      $('body').css('background-color',bgColor) 

    }


  })

});