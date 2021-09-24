<script>
import $ from "jquery";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  setup() {
    const openList = ref(true);
    const openLang = () => {
      openList.value = !openList.value;
    };
    onMounted(() => {
      $(document).on("touchend click", function(e) {
        var target = e.target;
        if (!$(target).is(".language a")) {
          openList.value = true;
        }
      });
    });
    return {
      openList,
      openLang,
    };
  },
};
</script>
<template>
  <div class="language">
    <a @click.prevent="openLang" @keyup.prevent="openLang" href="#">語言選擇</a>
    <ul :class="{ close: openList }">
      <li><a href="#">繁體中文</a></li>
      <li><a href="#">简体中文</a></li>
      <li><a @focusout.prevent="openLang" href="#">ENGLISH</a></li>
    </ul>
  </div>
</template>
<style lang="scss" soped>
.language {
  ul {
    transition: all 0.5s;
    max-height: 140px;
    overflow: hidden;
    display: block;
  }
  .close {
    max-height: 0;
    transition: all 0.5s;
    overflow: hidden;
  }
}
</style>
