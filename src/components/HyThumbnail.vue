<script>
export default {};
</script>
<template>
  <div class="thumbnail">
    <a href="#">
      <div class="img-container">
        <picture>
          <source
            media="(min-width: 1200px)"
            data-srcset="images/demo/01.jpg"
          />
          <source media="(min-width: 992px)" data-srcset="images/demo/01.jpg" />
          <source media="(min-width: 576px)" data-srcset="images/demo/01.jpg" />
          <source media="(max-width: 575px)" data-srcset="images/demo/01.jpg" />
          <img data-src="images/demo/01.jpg" class="lazy" />
          <img src="~@/assets/images/demo/01.jpg" />
          <!-- <noscript><img src="~@/assets/images/demo/01.jpg"></noscript> -->
        </picture>
      </div>
    </a>
    <div class="caption">
      <time>2018-01-01</time>
      <h3>標題文字</h3>
    </div>
    <hr />
    <div class="btn_grp">
      <button class="btn">按鈕</button>
    </div>
  </div>
</template>
<style lang="scss"></style>
