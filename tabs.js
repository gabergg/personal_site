$(document).ready( function(){
  $('#biography_tab').show();
  $('.selected').css("opacity","1");
  $('a').on('click',function(){
      $('.selected').css("opacity",".5");
      $('.selected').removeClass('selected');
      $(this).closest('li').addClass('selected');
      $('.selected').css("opacity","1");

      $('.content').hide();

      var choose_content = $(this).attr('title');
      $("#"+choose_content).show();
  });
});