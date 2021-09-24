<script>
import $ from "jquery";
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
  setup() {},
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
        <h2 class="title">意見信箱</h2>
        <!-- function_panel -->
        <HyFunctionPanel />
        <!-- function功能區塊 -->
        <HyFunction />
        <!-- QP Start -->
        <section class="">
          <p>
            註:<abbr class="necessary" title="為必填(選)欄位,不能為空白。"
              >*</abbr
            >為必填(選)欄位, 不能為空白。
          </p>
          <form action="" class="form_grid flex_form">
            <div class="form_grp">
              <label for="" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >您的真實姓名：</label
              >
              <div class="form_content">
                <input type="text" id="" value="" />
              </div>
            </div>
            <div class="form_grp">
              <label for="password" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >聯絡電話：</label
              >
              <div class="form_content">
                <input name="" id="" type="text" />
              </div>
            </div>
            <div class="form_grp">
              <label for="" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >您的電子信箱：</label
              >
              <div class="form_content">
                <input name="" id="" type="text" />
              </div>
            </div>
            <div class="form_grp">
              <label for="" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >意見類別：</label
              >
              <div class="form_content">
                <div class="radio_grp form_inline">
                  <label>
                    <input
                      type="radio"
                      name="sampleRadio5"
                      value=""
                      checked=""
                    />類別1</label
                  >
                  <label>
                    <input
                      type="radio"
                      name="sampleRadio5"
                      value=""
                    />類別2</label
                  >
                  <label>
                    <input
                      type="radio"
                      name="sampleRadio5"
                      value=""
                    />類別3</label
                  >
                </div>
              </div>
            </div>
            <div class="form_grp">
              <label for="" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >意見類別：</label
              >
              <div class="form_content">
                <div class="check_grp form_inline">
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      value=""
                      checked=""
                    />類別1</label
                  >
                  <label>
                    <input type="checkbox" name="" value="" />類別2</label
                  >
                  <label>
                    <input type="checkbox" name="" value="" />類別3</label
                  >
                </div>
              </div>
            </div>
            <div class="form_grp">
              <label for="" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >內容：</label
              >
              <div class="form_content">
                <textarea name="" id="" cols="30" rows="70"></textarea>
              </div>
            </div>
            <div class="form_grp">
              <label for="selectSample" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >意見類別：</label
              >
              <div class="form_content form_inline">
                <select id="selectSample" name="">
                  <option value="">類別1</option>
                  <option value="">類別2</option>
                  <option value="">類別3</option>
                </select>
              </div>
            </div>
            <div class="form_grp">
              <label class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >驗證碼：</label
              >
              <div class="form_content">
                <img src="images/basic/captcha.gif" alt="" class="captcha" />
                <input type="text" id="" value="" />
              </div>
            </div>
            <div class="btn_grp form_inline">
              <input name="" type="reset" value="清除" class="btn btn-reset" />
              <input
                name="Search"
                type="submit"
                value="送出"
                class="btn btn-submit"
              />
            </div>
          </form>
        </section>
        <!-- QP End -->
      </div>
    </div>
  </div>
</template>
<style></style>
