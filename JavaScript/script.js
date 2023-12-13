  



// 新增行程
function $id(id) {
  return document.getElementById(id);
}

function addSpot() {
  let myForm = $id("myForm");
  let btnSend = $id("btnSend");
  let spot = document.getElementsByClassName("spot")[0];
  let newSpot = spot.cloneNode(true);
  newSpot.style.display = "block";
  newSpot.getElementsByClassName("time")[0].onclick = removeSpot;
  myForm.insertBefore(newSpot, btnSend);
}

function removeSpot(e) {
  let trash = e.target;
  $id("myForm").removeChild(trash.parentNode);
}

window.addEventListener("load", function () {
  //---------------btnAddSpot.onclick
  $id("btnAddSpot").onclick = addSpot;
});

// 動畫
AOS.init({
    duration:3000,
});


// 回到TOP
$(function() {
    var $win = $(window);
    var $backToTop = $('.js-back-to-top');
    // 当用户滚动到离顶部100像素时，展示回到顶部按钮
    $win.scroll(function() {
      if ($win.scrollTop() > 100) {
        $backToTop.show();
      } else {
        $backToTop.hide();
      }
    });
    // 当用户点击按钮时，通过动画效果返回头部
    $backToTop.click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });
  });






  $(function(){
    var $li = $('ul.path li');
        $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.card').hide();
    
        $li.click(function(){
            $($(this).find('a'). attr ('href')).show().siblings ('.card').hide();
            $(this).addClass('active'). siblings ('.active').removeClass('active');
        });
    });



