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


  function res(){
    let cred = Number($('.res-resCred').text());
    var res = cred + Number($('.res-resProc').text());
    // console.log($('.res-resCred').val());

    // let result = cred + res;
    // console.log(res);
    $('.res-resRes').text(res);
  }

  function slide (value,who){
    if(who =="sum"){
      // let value = 1800;
      let width = 9;
      let res = value/width;
      // console.log(res + " RES");
      $('.slider-sumT').css({"left": res + "px"});
    }else if(who =="date"){
      let width = 12.7;
      let res = value*width;
      // console.log(res + " RES");
      $('.slider-date').css({"left": res + "px"});
    }

  }
  $('.hero_main-sum > input').on('change',function(){
    let value = $(this).val();
    $('.hero_main-sumC').val(value);
    $('.slider-sumT').text(value);
    $('.res-resCred').text(value);
    // console.log($(this).val());
    slide(value,'sum');
    res();
  });

  $('.hero_main-sumC').on('change',function(){

    var value = Number($(this).val());
    // console.log(value);
    // console.log(typeof(value));
    if(value >= 3500){
      value = 3500;
      $('.hero_main-sumC').val(value);
    }else if(value <= 50){
      value = 50;
      $('.hero_main-sumC').val(value);
    }
    $('.hero_main-sumC').val(value);
    $('.slider-sumT').text(value);
    $('.hero_main-sum > input').val(value);
    // let proc = (value/10).toFixed(2);
    // $('.slider-date').text(value);
    // $('.res-resProc').text(proc);
    // res();


  });

  $('.hero_main-date').on('change',function(){

    var value = Number($(this).val());
    // console.log(value);
    // console.log(typeof(value));
    if(value >= 30){
      value = 30;
      $('.hero_main-date').val(value);
    }else if(value <=1 ){
      value = 1;
      $('.hero_main-date').val(value);
    }
    $('.hero_main-date').val(value);
    $('.hero_main-date > input').val(value);
    $('.slider-date').text(value);
    // let proc = (value/10).toFixed(2);
    // $('.slider-date').text(value);
    // $('.res-resProc').text(proc);
    // res();


  });

  $('input[type=range]::-moz-range-thumb').on('change', function(){
    // var x = $(this).position();
    // let slide = $('.slider-date').position();
    alert('sa');
    // console.log('Elem' + slide.left);
    // console.log("This" + x.left);
  })


  $('.hero_main-sumT > input').on('change',function(){
    let value = $(this).val();
    $('.hero_main-date').val(value);
    let proc = (value/10).toFixed(2);
    $('.slider-date').text(value);
    $('.res-resProc').text(proc);
    slide(value,'date');
    res();
    // console.log(proc);
  });

  // $('.hero_main-sum::after').on('click',function(){
  //   var val = $('.hero_main-sumT ').val();
  //   console.log(val);
  //   $('.hero_main-sumT ').val(val--);
  //   // res();
  //   // console.log(proc);
  // });




})
