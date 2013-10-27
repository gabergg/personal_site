$(document).ready( function(){
  $('#biography_tab').show();
  $('a').on('click',function(){
      $('.selected').removeClass('selected');
      $(this).closest('li').addClass('selected');
      
      $('.content').hide();
      
      var choose_content = $(this).attr('title');
      $("#"+choose_content).show();
  });
});
