<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      /*-----------------------------------*/
      /////////////fatfooter開關/////////////
      /*-----------------------------------*/
      $(function() {
        $(".btn-fatfooter").click(function(e) {
          $(this)
            .parent(".container")
            .find("nav>ul>li>ul")
            .stop(true, true)
            .slideToggle(function() {
              if ($(this).is(":visible")) {
                $(".btn-fatfooter").html("收合/CLOSE");
                $(".btn-fatfooter").attr("name", "收合選單/CLOSE");
              } else {
                $(".btn-fatfooter").html("展開/OPEN");
                $(".btn-fatfooter").attr("name", "展開選單/OPEN");
              }
            });
          $(this)
            .stop(true, true)
            .toggleClass("close");
        });
      });
    });
  },
};
</script>
<template>
  <section class="fatfooter">
    <div class="container">
      <button
        type="button"
        name="展開選單/OPEN"
        aria-label="導覽選單展開/收合"
        class="btn btn-fatfooter close"
      >
        展開/OPEN
      </button>
      <nav>
        <ul>
          <li>
            <a href="#">關於本局</a>
            <ul style="display: none;">
              <li><a href="#">本局沿革</a></li>
              <li><a href="#">本局願景</a></li>
              <li><a href="#">組織介紹</a></li>
              <li><a href="#">本局願景</a></li>
              <li><a href="#">局處執掌</a></li>
              <li><a href="#">重大政策</a></li>
              <li><a href="#">施政重點</a></li>
              <li><a href="#">本局位置</a></li>
            </ul>
          </li>
          <li>
            <a href="#">訊息公告</a>
            <ul style="display: none;">
              <li><a href="#">本局公告</a></li>
              <li><a href="#">環保署公告</a></li>
              <li><a href="#">環境用藥公告</a></li>
              <li><a href="#">環保專案成果報告</a></li>
            </ul>
          </li>
          <li>
            <a href="#">業務專區</a>
            <ul style="display: none;">
              <li><a href="#">化學物質</a></li>
              <li><a href="#">毒性化學物質</a></li>
              <li><a href="#">危害性化學物質災害防救</a></li>
              <li><a href="#">環境用藥</a></li>
              <li><a href="#">石綿危害資訊</a></li>
            </ul>
          </li>
          <li>
            <a href="#">便民服務</a>
            <ul style="display: none;">
              <li><a href="#">線上服務</a></li>
              <li><a href="#">教育宣導</a></li>
              <li><a href="#">影音專區</a></li>
              <li><a href="#">下載專區</a></li>
              <li><a href="#">常見問答</a></li>
              <li><a href="#">相關連結</a></li>
              <li><a href="#">訂閱電子報</a></li>
            </ul>
          </li>
          <li>
            <a href="#">政府資訊公開</a>
            <ul style="display: none;">
              <li><a href="#">行政院環境保護署資訊公開要點</a></li>
              <li><a href="#">預算及會計月報</a></li>
              <li><a href="#">性別平等專區</a></li>
              <li><a href="#">人權專區</a></li>
              <li><a href="#">環境統計資料庫</a></li>
              <li><a href="#">業務標準作業流程</a></li>
              <li><a href="#">行政院環保署Open Data資料集</a></li>
            </ul>
          </li>
          <li>
            <a href="#">法規專區</a>
            <ul style="display: none;">
              <li><a href="#">主管法規查詢系統</a></li>
              <li><a href="#">全國法規資料庫</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style></style>
