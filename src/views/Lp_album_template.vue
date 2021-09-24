<script>
import HyBreadcrumb from "@/components/HyBreadcrumb.vue";
import HyFunctionPanel from "@/components/HyFunctionPanel.vue";
import HyFunction from "@/components/HyFunction.vue";
import HyCategory from "@/components/HyCategory.vue";
import HyPaginations from "@/components/HyPaginations.vue";
import HyThumbnail from "@/components/HyThumbnail.vue";

export default {
  components: {
    HyBreadcrumb,
    HyFunctionPanel,
    HyFunction,
    HyCategory,
    HyPaginations,
    HyThumbnail,
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
      <div class="left_block hidden">
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
        <!-- LP Start -->
        <section class="">
          <!-- category -->
          <HyCategory />
          <!-- grid:flex -->
          <section class="flex-equal-3">
            <div class="container">
              <div class="Flex-set">
                <HyThumbnail />
                <HyThumbnail /> <HyThumbnail /> <HyThumbnail /> <HyThumbnail />
                <HyThumbnail /> <HyThumbnail />
              </div>
            </div>
          </section>
        </section>
        <!-- LP End -->
        <!-- Pagination -->
        <HyPaginations />
      </div>
    </div>
  </div>
</template>
<style></style>
