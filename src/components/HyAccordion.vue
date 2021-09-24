<script>
import $ from "jquery";
import { onMounted, reactive, nextTick, watch } from "@vue/runtime-core";
export default {
  setup() {
    const arr = reactive({
      data: [
        {
          title: "第一項說明",
          content:
            "1直麼後大得股的要會使成事公人策公！我古車未書！上工題向案校立詩為色能狀計氣卻力沒時臺地是了養、後天連意市風怕著數往發民文手好，費的而西成曾給理必事後生包，就雄一過電流人住完是成；識愛作流：數關與不個性，還行案！住像印以排傷顧向樓事不音受差，重飯就孩他政的給滿綠不受東心斷來前現模微。",
        },
        {
          title: "第二項說明",
          content:
            "1直麼後大得股的要會使成事公人策公！我古車未書！上工題向案校立詩為色能狀計氣卻力沒時臺地是了養、後天連意市風怕著數往發民文手好，費的而西成曾給理必事後生包，就雄一過電流人住完是成；識愛作流：數關與不個性，還行案！住像印以排傷顧向樓事不音受差，重飯就孩他政的給滿綠不受東心斷來前現模微。",
        },
        {
          title: "第三項說明",
          content:
            "1直麼後大得股的要會使成事公人策公！我古車未書！上工題向案校立詩為色能狀計氣卻力沒時臺地是了養、後天連意市風怕著數往發民文手好，費的而西成曾給理必事後生包，就雄一過電流人住完是成；識愛作流：數關與不個性，還行案！住像印以排傷顧向樓事不音受差，重飯就孩他政的給滿綠不受東心斷來前現模微。",
        },
      ],
    });
    let accordionClick = null;
    watch(arr, () => {
      nextTick(() => {
        accordionClick();
      });
    });
    onMounted(() => {
      /*-----------------------------------*/
      //////////// Accordion設定 ////////////
      /*-----------------------------------*/
      accordionClick = function() {
        $(".accordion").each(function() {
          $(this)
            .find(".accordion-content")
            .hide();
          var _accordionItem = $(this)
            .children("ul")
            .children("li")
            .children("a");
          _accordionItem.each(function() {
            function accordion(e) {
              $(this)
                .parent("li")
                .siblings()
                .children("a")
                .removeClass("active");
              $(this).toggleClass("active");
              $(this)
                .parent("li")
                .siblings()
                .children(".accordion-content")
                .slideUp();
              $(this)
                .next(".accordion-content")
                .slideToggle();
              e.preventDefault();
            }
            $(this).click(accordion);
            $(this).keyup(accordion);
          });
        });
      };
      accordionClick();
    });
    return {
      arr,
      accordionClick,
    };
  },
};
</script>
<template>
  <div class="accordion">
    <ul>
      <li v-for="item in arr.data" :key="item.url">
        <a href="#" title=""> {{ item.title }}</a>
        <div class="accordion-content">
          {{ item.content }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
