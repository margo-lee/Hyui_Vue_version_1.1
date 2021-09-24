<script>
import HyFunctionPanel from "@/components/HyFunctionPanel.vue";
import HyFunction from "@/components/HyFunction.vue";
import HyBreadcrumb from "@/components/HyBreadcrumb.vue";
import HyLanguage from "@/components/HyLanguage.vue";
export default {
  components: {
    HyFunctionPanel,
    HyFunction,
    HyBreadcrumb,
    HyLanguage,
  },
};
</script>
<template>
  <!-- main Start -->
  <div id="center" class="main innerpage">
    <!-- 內頁新增一個classname-->
    <a class="accesskey" href="#aC" id="aC" accesskey="C" title="主要內容區"
      >:::</a
    >
    <div class="container">
      <!-- 左側 -->
      <div class="left_block">
        <div class="leftblock_banner">
          <div class="item">Banner</div>
          <div class="item">Banner</div>
          <div class="item">Banner</div>
          <div class="item">Banner</div>
        </div>
      </div>
      <!-- 主要內容區 -->
      <div class="center_block">
        <!-- breadcrumb路徑 -->
        <HyBreadcrumb />
        <!-- h2節點 -->
        <h2 class="title">節點標題</h2>
        <HyFunctionPanel />
        <!-- function功能區塊 -->
        <HyFunction />
        <!-- NP Start -->
        <section class="sub_menu">
          <ul>
            <li>
              <a href="#"
                ><span class="num">1</span
                >節點1節點1節點1節點1節點1節點1節點1節點1節點1節點1節點1節點1節點1節點1節點1節點1節點1</a
              >
            </li>
            <li>
              <a href="#"><span class="num">2</span>節點2</a>
            </li>
            <li>
              <a href="#"><span class="num">3</span>節點3</a>
            </li>
            <li>
              <a href="#"><span class="num">4</span>節點4</a>
            </li>
            <li>
              <a href="#"
                ><span class="num">5</span
                >節點5節點5節點5節點5節點5節點5節點5節點5節點5節點5節點5節點5節點5節點5節點5節點5</a
              >
            </li>
            <li>
              <a href="#"><span class="num">6</span>節點6</a>
            </li>
            <li>
              <a href="#"><span class="num">7</span>節點7</a>
            </li>
            <li>
              <a href="#"><span class="num">8</span>節點8</a>
            </li>
            <li>
              <a href="#"><span class="num">9</span>節點9</a>
            </li>
            <li>
              <a href="#"><span class="num">10</span>節點10</a>
            </li>
          </ul>
        </section>
        <!-- NP End -->
      </div>
    </div>
  </div>
</template>
<style></style>
