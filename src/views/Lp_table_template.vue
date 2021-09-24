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
        <!-- function_panel -->
        <HyFunctionPanel />
        <!-- function功能區塊 -->
        <HyFunction />
        <section class="lp">
          <!-- category -->
          <HyCategory />
          <div class="table_list">
            <table>
              <thead>
                <tr>
                  <th>編號</th>
                  <th>標題</th>
                  <th>日期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-title="編號" class="num">01</td>
                  <td data-title="標題">
                    <a href="#">通勤搭車看預報 環保集點10倍送</a>
                  </td>
                  <td data-title="日期" class="date">2018/01/01</td>
                </tr>
                <tr>
                  <td data-title="編號" class="num">02</td>
                  <td data-title="標題">
                    <a href="#">春節不無聊上網學習環境教育</a>
                  </td>
                  <td data-title="日期" class="date">2018/01/01</td>
                </tr>
                <tr>
                  <td data-title="編號" class="num">03</td>
                  <td data-title="標題"><a href="#">洗錢防制，國家向前</a></td>
                  <td data-title="日期" class="date">2018/01/01</td>
                </tr>
                <tr>
                  <td data-title="編號" class="num">04</td>
                  <td data-title="標題">
                    <a href="#">春節送禮認標章 環保減碳又健康</a>
                  </td>
                  <td data-title="日期" class="date">2018/01/01</td>
                </tr>
                <tr>
                  <td data-title="編號" class="num">05</td>
                  <td data-title="標題">
                    <a href="#">環保替代役歲末新春送溫暖</a>
                  </td>
                  <td data-title="日期" class="date">2018/01/01</td>
                </tr>
                <tr>
                  <td data-title="編號" class="num">06</td>
                  <td data-title="標題">
                    <a href="#">向非法化學物質說不 安全蛋品 吃得健康</a>
                  </td>
                  <td data-title="日期" class="date">2018/01/01</td>
                </tr>
                <tr>
                  <td data-title="編號" class="num">07</td>
                  <td data-title="標題">
                    <a href="#">春節期間廚餘回收真惜福 狗年來富又來福</a>
                  </td>
                  <td data-title="日期" class="date">2018/01/01</td>
                </tr>
                <tr>
                  <td data-title="編號" class="num">08</td>
                  <td data-title="標題">
                    <a href="#">春節長假看Chem Life，增長知識又可抽獎</a>
                  </td>
                  <td data-title="日期" class="date">2018/01/01</td>
                </tr>
                <tr>
                  <td data-title="編號" class="num">09</td>
                  <td data-title="標題">
                    <a href="#">金狗年春節旅遊好去處，環保署報你知</a>
                  </td>
                  <td data-title="日期" class="date">2018/01/01</td>
                </tr>
                <tr>
                  <td data-title="編號" class="num">10</td>
                  <td data-title="標題">
                    <a href="#">清新空氣保健康 神明歡喜過好年</a>
                  </td>
                  <td data-title="日期" class="date">2018/01/01</td>
                </tr>
              </tbody>
            </table>
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
