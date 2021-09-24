<script>
import HyFunction from "@/components/HyFunction.vue";
import HyShare from "@/components/HyShare.vue";
import HyFontSize from "@/components/HyFontSize.vue";
export default {
  components: {
    HyFunction,
    HyShare,
    HyFontSize,
  },
};
</script>
<template>
  <div class="function_panel">
    <div class="publish_time">
      <span>發布日期：</span><time>2019-01-01</time>
    </div>
    <!-- 文字大小 -->
    <HyFontSize />
    <!-- function功能區塊 -->
    <HyFunction />
    <!-- 社群分享 -->
    <HyShare />
  </div>
</template>
