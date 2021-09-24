/*-----------------------------------*/
///////////// fix iOS bug /////////////
/*-----------------------------------*/
document.documentElement.addEventListener(
  "gesturestart",
  function (event) {
    event.preventDefault();
  },
  false
);
