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
      let width = 9;
      let res = value/width;
      $('.slider-sumT').animate({"left": res + "px"},200);
    }else if(who =="date"){
      let width = 12.7;
      let res = value*width;
      $('.slider-date').animate({"left": res + "px"},200);
    }

  }

  function sliding( newVal, oper){
    // var value = oldVall + 50;
    // while(newVal != value){

    // let sld = setTimeout(function(){
    // while(newVal != value){

    // let slid = setInterval(function(){
        // value += 50;
        // console.log("Slidin + = " + value);
        $(this).animate({
          scroll: newVal
        },5000,function(){});
        // console.log($(this).val());
      // },1000);

    // }
    // if(newVal == value){
    //   clearInterval(slid);
    // }
    // },1000);

  }

  var inputMainSum = $('.hero_main-sum > input').val();
  $('.hero_main-sum > input').on('change',function(){
    let value = $(this).val();
    $(this).prop('Counter',inputMainSum).animate({
          Counter: $(this).val()
      }, {
          duration: 200,
          easing: 'swing',
          delay: 0,
          step: function (now) {
            console.log(`now the value of variable now is ${now}`);
              $(this).val(now);
          }
      });
    inputMainSum = $(this).val();
    $('.hero_main-sumC').val(value);
    $('.slider-sumT').text(value);
    $('.res-resCred').text(value);
    slide(value,'sum');
    var ls = 1800;
    sliding.call(this, value,'+');
    res();
  });

  $('.hero_main-sumC').on('change',function(){
    var value = Number($(this).val());
    if(value >= 3500){
      value = 3500;
      $('.hero_main-sumC').val(value);
    }else if(value <= 50){
      value = 50;
      $('.hero_main-sumC').val(value);
    };
    console.log(value);
    $('.slider-sumT').text(value);
    $('.hero_main-sum > input').val(value);
    slide(value,'sum');
    sliding.call(this,value,'+')
    res();


  });

  $('.hero_main-date').on('change',function(){

    var value = Number($(this).val());

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
    slide(value,'date');
    res();


  });

  $('.hero_main-sumT > input').on('mousedown',function(){
    const a = $(this).val();
    console.log(a);
  });

  var inputSumT = $('.hero_main-sumT > input').val();
  $('.hero_main-sumT > input').on('change',function(){
    let value = $(this).val();
    // var oldVal = inputSumT;
    // console.log(`value ${value}`);
    console.log(`1nputSumT is ${inputSumT} `);
    $(this).prop('Val',inputSumT).animate({
          Counter: $(this).val()
      }, {
          duration:   200,
          easing: 'swing',
          step: function (now) {
              $(this).val(now);
          }
      });
    inputSumT = $(this).val();
    $('.hero_main-date').val(value);
    let proc = (value/10).toFixed(2);
    $('.slider-date').text(value);
    $('.res-resProc').text(proc);
    slide(value,'date');
    res();
    // console.log(proc);
  });

  $('.hero_main-sum-before').on('click',function(){
    // var that = this;
    var val = parseInt($('.hero_main-sum > input ').val());
    val = val - 50;
    console.log('New value' + val);
    $('.hero_main-sum > input ').val(val);
    $('.hero_main-sumC  ').val(val);
    $('.slider-sumT').text(val);
    $('.res-resCred').text(val);
    res();
    slide(val,'sum');
    var ls = 200;
    sliding.call(this, val,'+');
  });

  $('.hero_main-sum-after').on('click',function(){
    var val = parseInt($('.hero_main-sum > input ').val());
    console.log(val);
    console.log(typeof(val));
    val = val + 50;
    console.log('New value' + val);
    $('.hero_main-sum > input ').val(val);
    $('.hero_main-sumC  ').val(val);
    $('.slider-sumT').text(val);
    $('.res-resCred').text(val);
    res();
    // console.log($(this).val());
    slide(val,'sum');
  });

  $('.hero_main-sumT-before').on('click',function(){
    var val = parseInt($('.hero_main-sumT > input ').val());
    console.log(val);
    console.log(typeof(val));
    val--;
    console.log('New value' + val);
    $('.hero_main-sumT > input ').val(val);

    $('.hero_main-date ').val(val);
    $('.slider-date').text(val);
    $('.res-resCred').text(val);
    res();
    // console.log($(this).val());
    slide(val,'date');
  });

  $('.hero_main-sumT-after').on('click',function(){
    var val = parseInt($('.hero_main-sumT > input ').val());
    // console.log(val);
    // console.log(typeof(val));
    val++;
    // console.log('New value' + val);
    $('.hero_main-sumT > input ').val(val);

    $('.hero_main-date').val(val);
    $('.slider-date').text(val);
    $('.res-resCred').text(val);
    res();
    // console.log($(this).val());
    slide(val,'date');
  });
  // console.log($('.hero_main-sumT > input:active '));
  $('.hero_main-sumT > input:active ').on('change',function(){
    alert('sadasdasdasd');
    // console.log($('.hero_main-sumT > input:active '));
    let val = $('.hero_main-sumT > input ').val();
    // console.log(val);
    let ls = 200;
    sliding.call(this,val,'+')
  });



})
