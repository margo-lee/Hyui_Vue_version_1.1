<script>
import { onMounted, reactive, watch, nextTick } from "@vue/runtime-core";
import $ from "jquery";
export default {
  setup() {
    const arr = reactive({
      data: [
        { title: "1第ㄧ則消息", time: "107-01-01" },
        { title: "第二則消息", time: "107-01-01" },
        { title: "第三則消息", time: "107-01-01" },
        { title: "第四則消息", time: "107-01-01" },
        { title: "第五則消息", time: "107-01-01" },
      ],
      data2: [
        { title: "2第ㄧ則消息", time: "107-01-02" },
        { title: "第二則消息", time: "107-01-02" },
        { title: "第三則消息", time: "107-01-02" },
        { title: "第四則消息", time: "107-01-02" },
        { title: "第五則消息", time: "107-01-02" },
      ],
      data3: [
        { title: "3第ㄧ則消息", time: "107-01-02" },
        { title: "第二則消息", time: "107-01-02" },
        { title: "第三則消息", time: "107-01-02" },
        { title: "第四則消息", time: "107-01-02" },
        { title: "第五則消息", time: "107-01-02" },
      ],
      data4: [
        { title: "4第ㄧ則消息", time: "107-01-02" },
        { title: "第二則消息", time: "107-01-02" },
        { title: "第三則消息", time: "107-01-02" },
        { title: "第四則消息", time: "107-01-02" },
        { title: "第五則消息", time: "107-01-02" },
      ],
    });
    let tabSet = null;
    watch(arr, () => {
      nextTick(() => {
        tabSet();
      });
    });
    onMounted(() => {
      // axios
      //   .get("https://vue-lessons-api.herokuapp.com/photo/list")
      //   .then(function(response) {
      //     arr.data = response.data;
      //     // console.log(arr.data);
      //   });
      /*-----------------------------------*/
      ///////////////// 變數 ////////////////
      /*-----------------------------------*/
      var _window = $(window),
        ww = _window.outerWidth(),
        wh = _window.height(),
        wwNormal = 1400,
        wwMedium = 992,
        wwSmall = 768,
        wwxs = 576;
      /*-----------------------------------*/
      ////////////////多組Tab////////////////
      /*-----------------------------------*/
      var tab_headerHeight = Math.floor($(".header").outerHeight(true));
      var resizeTimer1;
      const resizeFn = () => {
        _window.resize(function() {
          clearTimeout(resizeTimer1);
          resizeTimer1 = setTimeout(function() {
            ww = _window.outerWidth();
            tabSet();
          }, 50);
        });
      };
      resizeFn();
      tabSet = () => {
        $(".tabs").each(function() {
          var _tab = $(this),
            _tabItem = _tab.find(".tabItem"),
            _tabContent = _tab.find(".tabContent"),
            tabwidth = _tab.width(),
            tabItemHeight = _tabItem.outerHeight(),
            tabContentHeight = _tab
              .find(".active")
              .next()
              .innerHeight(),
            tiGap = 0,
            tabItemLength = _tabItem.length,
            tabItemWidth;
          _tab
            .find(".active")
            .next(".tabContent")
            .show();
          if (ww >= wwSmall) {
            _tabContent.css("top", tabItemHeight);
            _tabContent = _tab.find(".tabContent");
            _tab.height(tabContentHeight + tabItemHeight);
            tabItemWidth =
              (tabwidth - (tabItemLength - 1) * tiGap) / tabItemLength;
            _tabItem.width(tabItemWidth).css("margin-left", tiGap);
            _tabItem.first().css("margin-left", 0);
          } else {
            _tab.css("height", "auto");
            _tabItem
              .css("margin-left", 0)
              .last()
              .css("position", "relative");
          }
          _tabItem.focus(tabs); //改button後，前面改_tabItem
          _tabItem.click(tabs); //改button後，前面改_tabItem
          function tabs(e) {
            var _tabItemNow = $(this), //改button後，原來$(this).parent(),改$(this)
              tvp = _tab.offset().top,
              tabIndex = _tabItemNow.index() / 2,
              scollDistance = tvp + tabItemHeight * tabIndex - tab_headerHeight;
            _tabItem.removeClass("active");
            _tabItemNow.addClass("active");
            if (ww <= wwSmall) {
              _tabItem
                .not(".active")
                .next()
                .slideUp();
              _tabItemNow.next().slideDown();
              $("html,body")
                .stop(true, false)
                .animate({ scrollTop: scollDistance });
            } else {
              _tabItem
                .not(".active")
                .next()
                .hide();
              _tabItemNow.next().show();
              tabContentHeight = _tabItemNow.next().innerHeight();
              _tab.height(tabContentHeight + tabItemHeight);
            }
            e.preventDefault();
          }
        });
      };
      $(".tabs>.tabItem:first-child>a").trigger("click");
      tabSet();
    });
    return {
      arr,
    };
  },
};
</script>
<template>
  <div class="tabSet">
    <section class="tabs example-1">
      <h2 class="tabItem active"><a href="#">第一個頁籤</a></h2>
      <!--選到的頁籤項目-->
      <div class="tabContent">
        <ul>
          <li v-for="item in arr.data" :key="item.title">
            <a href="#">{{ item.title }}</a
            ><time>{{ item.time }}</time>
          </li>
        </ul>
        <div class="more"><a href="#">更多</a></div>
      </div>
      <h2 class="tabItem"><a href="#">第二個頁籤</a></h2>
      <div class="tabContent">
        <ul>
          <li v-for="item in arr.data2" :key="item.title">
            <a href="#">{{ item.title }}</a
            ><time>{{ item.time }}</time>
          </li>
        </ul>
        <div class="more"><a href="#">更多</a></div>
      </div>
      <h2 class="tabItem"><a href="#">第三個頁籤</a></h2>
      <div class="tabContent">
        <ul>
          <li v-for="item in arr.data3" :key="item.title">
            <a href="#">{{ item.title }}</a
            ><time>{{ item.time }}</time>
          </li>
        </ul>
        <div class="more"><a href="#">更多</a></div>
      </div>
      <h2 class="tabItem"><a href="#">第四個頁籤</a></h2>
      <div class="tabContent">
        <ul>
          <li v-for="item in arr.data4" :key="item.title">
            <a href="#">{{ item.title }}</a
            ><time>{{ item.time }}</time>
          </li>
        </ul>
        <div class="more"><a href="#">更多</a></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss"></style>
