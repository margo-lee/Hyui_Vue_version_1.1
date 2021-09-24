<script>
import $ from "jquery";
// import HyHeader from "@/components/HyHeader.vue";
// import HyFooter from "@/components/HyFooter.vue";
// import HyFatfooter from "@/components/HyFatfooter.vue";
// import HyGoTopBtn from "@/components/HyGoTopBtn.vue";
import HyNavigation from "@/components/HyNavigation.vue";
import HyMarquee from "@/components/HyMarquee.vue";
import HyModal from "@/components/HyModal.vue";
import HyTabs from "@/components/HyTabs.vue";
import HyWeblink from "@/components/HyWeblink.vue";
import HyMeun from "@/components/HyMenu.vue";
import HyLanguage from "@/components/HyLanguage.vue";
import HyFontSize from "@/components/HyFontSize.vue";
import HySearch from "@/components/HySearch.vue";
import HyAccordion from "@/components/HyAccordion.vue";
import HyBreadcrumb from "@/components/HyBreadcrumb.vue";
import HyCategory from "@/components/HyCategory.vue";
import HyFileDownload from "@/components/HyFileDownload.vue";
import HyFixedSidebar from "@/components/HyFixedSidebar.vue";
import HyFatfooter from "@/components/HyFatfooter.vue";
import HyFunctionPanel from "@/components/HyFunctionPanel.vue";
import HyFunction from "@/components/HyFunction.vue";
import HyShare from "@/components/HyShare.vue";
import HyFooter from "@/components/HyFooter.vue";
import HyNotice from "@/components/HyNotice.vue";
import HyPaginations from "@/components/HyPaginations.vue";
import HyThumbnail from "@/components/HyThumbnail.vue";
import HyTag from "@/components/HyTag.vue";

import { onMounted, ref, watch } from "@vue/runtime-core";

export default {
  components: {
    HyNavigation,
    HyMarquee,
    HyModal,
    HyTabs,
    HyWeblink,
    HyMeun,
    HyLanguage,
    HyFontSize,
    HySearch,
    HyAccordion,
    HyBreadcrumb,
    HyCategory,
    HyFileDownload,
    HyFixedSidebar,
    HyFatfooter,
    HyFunctionPanel,
    HyFunction,
    HyShare,
    HyFooter,
    HyNotice,
    HyPaginations,
    HyThumbnail,
    HyTag,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="wrapper">
    <!-- 模組 -->
    <HyAccordion />
    <!-- <Album+Lightbox/> -->
    <!-- 首頁 -->
    <HyNavigation />
    <HySearch />
    <HyMeun />
    <HyLanguage />

    <HyBreadcrumb />
    <HyCategory />
    <HyFileDownload />
    <HyFixedSidebar />
    <HyFatfooter />

    <HyFunctionPanel />
    <HyFontSize />
    <HyFunction />
    <HyShare />

    <HyFooter />
    <HyModal />
    <HyMarquee />
    <HyNotice />
    <HyPaginations />
    <!-- <Silder/> -->
    <HyTabs />
    <HyTag />
    <HyThumbnail />

    <HyWeblink />
  </div>
</template>

<style lang="scss">
// @import "~@/assets/sass/hyui.scss";
</style>
