"use strict"
$(document).ready(function(){

  (function(){
  let date = new Date();
  let month = date.getMonth();
  let year = date.getYear();
  let dates = date.getDate();
  let day = date.getDay();
  var dayDescribe;
  switch (day) {
    case 0:
      dayDescribe = 'воскресенье';
      $('.hero__res-date > p ').addClass('hero__res-dateRed');
      break;
    case 1:
      dayDescribe = 'понедельник';
      break;
    case 2:
      dayDescribe = 'вторник';
      break;
    case 3:
      dayDescribe = 'среда';
      break;
    case 4:
      dayDescribe = 'четверг';
      break;
    case 5:
      dayDescribe = 'пятница';
      break;
    case 6:
      dayDescribe = 'суботттттртатата';
      $('.hero__res-date > p ').addClass('res-dateRed');
      break;
  }
  $('.hero__res-date > p ').text(dates + "." + month + "." + year + " " +  "(" + dayDescribe + ")");
}());// console.log(date + 'sasda' + dayDescribe);



  // function change (target){
  //   target.on('change',function(){
  //
  //   })
  //
  // }

  function res(){
    let cred = Number($('.res-resCred').text());
    var res = cred + Number($('.res-resProc').text());
    // console.log($('.res-resCred').val());

    // let result = cred + res;
    console.log(res);
    $('.res-resRes').text(res);
  }
  $('.hero_main-sum > input').on('change',function(){
    let value = $(this).val();
    $('.hero_main-sumC').val(value);
    $('.slider-sumT').text(value);
    $('.res-resCred').text(value);
    // console.log($(this).val());
    res();
  });

  $('.hero_main-sumT > input').on('change',function(){
    let value = $(this).val();
    $('.hero_main-date').val(value);
    let proc = (value/10).toFixed(2);
    $('.slider-date').text(value);
    $('.res-resProc').text(proc);
    res();
    // console.log(proc);
  });


})
