$(function () {
  /*------------------------------------*/
  /////////////字型大小 font-size//////////
  /*------------------------------------*/
  $(".font_size")
    .find(".small")
    .click(function (e) {
      $(this).parent("li").siblings("li").find("a").removeClass("active");
      $(".innerpage").removeClass("large_size").addClass("small_size");
      $(this).addClass("active");
      e.preventDefault();
      createCookie("FontSize", "small", 356);
    });
  $(".font_size")
    .find(".medium")
    .click(function (e) {
      $(this).parent("li").siblings("li").find("a").removeClass("active");
      $(".innerpage").removeClass("large_size small_size");
      $(this).addClass("active");
      e.preventDefault();
      createCookie("FontSize", "medium", 356);
    });
  $(".font_size")
    .find(".large")
    .click(function (e) {
      $(this).parent("li").siblings("li").find("a").removeClass("active");
      $(".innerpage").removeClass("small_size").addClass("large_size");
      $(this).addClass("active");
      e.preventDefault();
      createCookie("FontSize", "large", 356);
    });

  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = "; expires=" + date.toGMTString();
    } else expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  window.onload = function (e) {
    var cookie = readCookie("FontSize");
    //alert('cookie='+cookie);
    if (cookie == "small") {
      //$('.font_size').find('.small').click();
      $(".font_size")
        .find(".small")
        .parent("li")
        .siblings("li")
        .find("a")
        .removeClass("active");
      $(".innerpage")
        .removeClass("large_size medium_size")
        .addClass("small_size");
      $(".font_size").find(".small").addClass("active");
      e.preventDefault();
    } else {
      if (cookie == "large") {
        //$('.font_size').find('.large').click();
        $(".font_size")
          .find(".large")
          .parent("li")
          .siblings("li")
          .find("a")
          .removeClass("active");
        $(".innerpage")
          .removeClass("small_size medium_size")
          .addClass("large_size");
        $(".font_size").find(".large").addClass("active");
        e.preventDefault();
      } else {
        //這裡是預設宣告
        //$('.font_size').find('.medium').click();
        $(".font_size")
          .find(".medium")
          .parent("li")
          .siblings("li")
          .find("a")
          .removeClass("active");
        $(".innerpage").removeClass("large_size small_size");
        $(".font_size").find(".medium").addClass("active");
        e.preventDefault();
      }
    }
  };
});
