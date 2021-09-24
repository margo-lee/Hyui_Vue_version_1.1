$(function () {
  /*-----------------------------------*/
  //////////////相簿燈箱//////////////// 這段沒有使用了
  /*-----------------------------------*/
  //相簿JQ設定
  if ($(".has_lightbox").length > 0) {
    var lightbox_Status = false;
    $(".album").append(
      '<div class="lightbox"><a href="#" class="light_close">關閉</a><a href="#" class="light_prev">上一張</a><a href="#" class="light_next">下一張</a><img src="" alt=""><div class="galler_overlay"></div></div>'
    );
    $(".album .lightbox").hide(); // lightbox先隱藏
    $(".light_close").click(function (event) {
      $(".album .lightbox").hide(); // 如果點到close，lightbox隱藏
      $("body").removeClass("noscroll");
      $(".album .lightbox .caption").html("");
      lightbox_Status = false;
    });
    $(".album .lightbox .galler_overlay").click(function (event) {
      $(".album .lightbox").hide(); // 如果點到overlay，lightbox隱藏
      $("body").removeClass("noscroll");
      $(".album .lightbox .caption").html("");
      lightbox_Status = false;
    });
    var PIC_SRC = $(".album .lightbox img").attr("src");
    // var THUMB_PIC = $(this).attr('src');
    var PIC_INDEX = 0;
    $(".album a").click(function (e) {
      e.preventDefault();
      lightbox_Status = true;
    });
    $(".album .thumbnail a").each(function (index) {
      $(this).click(function (e) {
        var THUMB_H3 = $(this).find(".img-container img").attr("alt");
        $("body").addClass("noscroll");
        $(".album .lightbox").append(
          '<div class="caption">' + THUMB_H3 + "<div>"
        );
        THUMB_PIC = $(this).find(".img-container img").attr("data-src");
        $(".album .lightbox img").attr("src", THUMB_PIC);
        $(".album .lightbox").fadeIn();
        $(".album .lightbox .galler_overlay").fadeIn();
        PIC_INDEX = index;
        e.preventDefault();
      });
    });
    //計算當頁縮圖數量
    var PIC_NUM = $(".album .thumbnail").length;
    // 下一張 function
    function NEXT_MOV() {
      //pic_index+1 如果小於 圖片數量
      if (PIC_INDEX + 1 < PIC_NUM) {
        //PIC_INDEX = (PIC_INDEX + 1) % PIC_NUM;//取餘數
        PIC_INDEX++; //pic_index ++
        //if(PIC_INDEX >= PIC_NUM){PIC_INDEX=0;}
      } else {
        PIC_INDEX = 0; //如果等於或大於圖片數量 pic_index =0 ，跳到第一張
      }
      THUMB_PIC = $(".album .thumbnail")
        .eq(PIC_INDEX)
        .find(".img-container picture source:first")
        .attr("data-srcset");
      // 沒寫picture
      // THUMB_PIC = $('.album .thumbnail').eq(PIC_INDEX).find('.img-container img').attr('src');
      THUMB_H3 = $(".album .thumbnail")
        .eq(PIC_INDEX)
        .find(".img-container img")
        .attr("alt");
      $(".album .lightbox .caption").html(THUMB_H3);
      $(".album .lightbox img").hide();
      $(".album .lightbox img").fadeIn();
      $(".album .lightbox img").attr("src", THUMB_PIC);
      //放入燈箱 img src
    }
    $(".album .light_next").click(function (e) {
      NEXT_MOV();
      e.preventDefault();
    });
    // 上一張 function
    function PREV_MOV() {
      if (PIC_INDEX + 1 > 1) {
        //pic_index+1  如果大於 1
        //PIC_INDEX = (PIC_INDEX + 1) % PIC_NUM;//取餘數
        PIC_INDEX--; //pic_index --
        //if(PIC_INDEX >= PIC_NUM){PIC_INDEX=0;}
      } else {
        PIC_INDEX = PIC_NUM - 1; //如果等於或小於圖片數量 pic_index =圖片數量-1 ，跳到最後一張
      }
      //取縮圖 img src
      THUMB_PIC = $(".album .thumbnail")
        .eq(PIC_INDEX)
        .find(".img-container picture source:first")
        .attr("data-srcset");
      // 沒寫picture
      // THUMB_PIC = $('.album .thumbnail').eq(PIC_INDEX).find('.img-container img').attr('src');
      THUMB_H3 = $(".album .thumbnail")
        .eq(PIC_INDEX)
        .find(".img-container img")
        .attr("alt");
      $(".album .lightbox .caption").html(THUMB_H3);
      $(".album .lightbox img").hide();
      $(".album .lightbox img").fadeIn();
      $(".album .lightbox img").attr("src", THUMB_PIC);
      //放入燈箱 img src
    }
    $(".album .light_prev").click(function (e) {
      PREV_MOV();
      e.preventDefault();
    });
    //左右按鍵移動
    if ((lightbox_Status = true)) {
      $("body").keydown(function (e) {
        if (e.keyCode == 37) {
          PREV_MOV();
        } else if (e.keyCode == 39) {
          NEXT_MOV();
        } else if (e.keyCode == 27) {
          $(".album .lightbox").hide();
          $("body").removeClass("noscroll");
        }
      });
    }
  }
});
