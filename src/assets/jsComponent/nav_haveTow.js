$(function () {
  /*-----------------------------------*/
  //////////// nav如果有兩個選單///////// 這段沒有使用了
  /*-----------------------------------*/
  var _navLength = $(".navigation ul").length;
  if (_navLength > 1) {
    $(".navigation ul:nth-child(1)").addClass("left_nav");
  }
  $(".navigation").has(".language").addClass("have_language");
});
