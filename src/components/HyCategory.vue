<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      /*-----------------------------------*/
      /////////// category active  //////////
      /*-----------------------------------*/
      $(".category")
        .find("a")
        .off()
        .click(function(event) {
          event.preventDefault();
          $(this)
            .parent("li")
            .siblings()
            .find("a")
            .removeClass("active");
          $(this).addClass("active");
        });
    });
  },
};
</script>
<template>
  <div class="category">
    <ul>
      <li><a href="#">標籤1</a></li>
      <li><a href="#">標籤2</a></li>
      <li><a href="#">標籤3</a></li>
      <li><a href="#">標籤4</a></li>
      <li><a href="#">標籤5</a></li>
      <li><a href="#">標籤6</a></li>
      <li><a href="#">標籤7</a></li>
      <li><a href="#">標籤8</a></li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
