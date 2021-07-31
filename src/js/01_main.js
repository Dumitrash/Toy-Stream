$(document).ready(function(){
  $('.slider').slick({
    dots: true, //включаем точки
    vertical: true, //уже понятно 
    appendDots:$('.custom-dots') //передаем блок с нашими кастомными точками

  });
});

