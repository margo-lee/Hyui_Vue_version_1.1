<script>
import HyBreadcrumb from "@/components/HyBreadcrumb.vue";
import HyFunctionPanel from "@/components/HyFunctionPanel.vue";
import HyFunction from "@/components/HyFunction.vue";
import HyCategory from "@/components/HyCategory.vue";
import HyPaginations from "@/components/HyPaginations.vue";

export default {
  components: {
    HyBreadcrumb,
    HyFunctionPanel,
    HyFunction,
    HyCategory,
    HyPaginations,
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
        <div class="leftblock_nodemenu">
          <h2>標題文字</h2>
          <ul>
            <li>
              <a href="#">節點連結文字樣式節點連結文字樣式</a>
            </li>
            <li>
              <a href="#">節點連結文字樣式節點連結文字樣式</a>
            </li>
            <li>
              <a href="#">節點連結文字樣式節點連結文字樣式</a>
            </li>
            <li>
              <a href="#">節點連結文字樣式節點連結文字樣式</a>
            </li>
            <li>
              <a href="#">節點連結文字樣式節點連結文字樣式</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 主要內容區 -->
      <div class="center_block">
        <!-- breadcrumb路徑 -->
        <HyBreadcrumb />
        <!-- h2節點 -->
        <h2 class="title">節點標題</h2>
        <!-- function_panel -->
        <HyFunctionPanel />
        <!-- function功能區塊 -->
        <HyFunction />
        <!-- LP Start -->
        <section class="lp">
          <!-- category -->
          <HyCategory />
          <!-- 文字列表 -->
          <div class="list">
            <ul>
              <li>
                <a href="#">
                  <span class="num">1</span> 颱風逼近軍民齊心加強防颱戒備
                  <span class="dept">(服務照顧處)</span>
                  <time>2018-03-09</time>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="num">2</span>
                  東坑微電網示範將到期縣府盼由台電承接
                  <span class="dept"> (就養養護處)</span>
                  <time>2018-03-09</time>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="num">3</span> 公務員高普考10日登場縣府謹慎試務
                  <span class="dept"> (就學就業處)</span>
                  <time>2018-03-09</time>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="num">4</span> 縣長﹕導引正向能量提升教育競爭力
                  <span class="dept">(就學就業處)</span>
                  <time>2018-03-09</time>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="num">5</span> 颱風逼近軍民齊心加強防颱戒備
                  <span class="dept">(就學就業處)</span>
                  <time>2018-03-09</time>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="num">6</span
                  >立法院三讀通過「國軍退除役官兵輔導條例」第3條之1、第33條、第34條修正案
                  <span class="dept">(就學就業處)</span>
                  <time>2018-03-09</time>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="num">7</span> 國軍退除役官兵年終慰問金發放說明
                  <span class="dept">(就學就業處)</span>
                  <time>2018-03-09</time>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="num">8</span>
                  因應募兵制推動輔導會就業處積極為榮民（眷）與退役官士兵就學、職訓、就業輔導服務升級
                  <span class="dept">(就學就業處)</span>
                  <time>2018-03-09</time>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="num">9</span>
                  輔導會各榮院全力投入「二O六大地震」救災
                  <span class="dept">(就學就業處)</span>
                  <time>2018-03-09</time>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="num">10</span>
                  退除役官兵申請就學獎助學金自二月一日起開始受理
                  <span class="dept">(就學就業處)</span>
                  <time>2018-03-09</time>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <!-- LP End -->
        <!-- Pagination -->
        <HyPaginations />
      </div>
    </div>
  </div>
</template>
<style></style>
