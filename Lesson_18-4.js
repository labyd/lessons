$(document).ready(function(){
  $('body').css('border','1px solid red');
  $('.header').css('border', '1px solid blue');
  $('#main_nav').css('border', '1px solid green');
  $('ul>li').css('border', '1px solid black');
  $('a[href=#home]').css('font-widht', 'bold');
  $('img[src$=.gif]').css('height', '80px');

  $('ul li a:eq(1)').CSS('color', 'red');
  $('ul li a:nth-child(2n)').css('text-decoration', 'none');
  $('a:contains(Home4)').remove();
  $('input[type=text]').css('border', '1px solid black');
  $('input:text').css('border', '1px solid black');
  $(':input:text:disabled').css('height', '80px');
});
