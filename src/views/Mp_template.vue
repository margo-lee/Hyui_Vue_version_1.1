<script></script>
<template>
  <!-- main Start -->
  <div id="center" class="main">
    <a class="accesskey" href="#aC" id="aC" accesskey="C" title="主要內容區"
      >:::</a
    >
    <!-- 任何一個section下一層都要包下一層都要包div container作對齊 -->
    <!-- //// class 都可以隨意命名 !!! ///// -->
    <section class="demosection col-12 full">
      <div class="container">
        <div class="col">1欄滿版</div>
      </div>
    </section>
    <section class="demosection col-12">
      <div class="container">
        <div class="col">1欄</div>
      </div>
    </section>
    <!--  兩欄樣式 -->
    <section class="demosection col-6-6">
      <div class="container">
        <div class="col">2欄</div>
        <div class="col">2欄</div>
      </div>
    </section>
    <!--  兩欄樣式 8-4 -->
    <section class="demosection col-8-4">
      <div class="container">
        <div class="col">2欄</div>
        <div class="col">2欄</div>
      </div>
    </section>
    <!--  兩欄樣式 4-8 -->
    <section class="demosection col-4-8">
      <div class="container">
        <div class="col">2欄</div>
        <div class="col">2欄</div>
      </div>
    </section>
    <!--  三欄樣式 -->
    <section class="demosection col-4-4-4">
      <div class="container">
        <div class="col">3欄</div>
        <div class="col">3欄</div>
        <div class="col">3欄</div>
      </div>
    </section>
    <!--  四欄樣式 -->
    <section class="demosection col-3-3-3-3">
      <div class="container">
        <div class="col">4欄</div>
        <div class="col">4欄</div>
        <div class="col">4欄</div>
        <div class="col">4欄</div>
      </div>
    </section>
    <!--  六欄樣式 -->
    <section class="demosection col-2-2-2-2-2-2">
      <div class="container">
        <div class="col">6欄</div>
        <div class="col">6欄</div>
        <div class="col">6欄</div>
        <div class="col">6欄</div>
        <div class="col">6欄</div>
        <div class="col">6欄</div>
      </div>
    </section>
    <!--  四欄樣式 有底色 -->
    <section class="demosection col-3-3-3-3 bg">
      <h2>有底色</h2>
      <div class="container">
        <div class="col">4欄</div>
        <div class="col">4欄</div>
        <div class="col">4欄</div>
        <div class="col">4欄</div>
      </div>
    </section>
    <!-- 可用有意義名稱命名 -->
    <section class="demosection cssname">
      <h2>可用有意義語意classname</h2>
      <div class="container">
        <div class="col news">News區塊- 8</div>
        <div class="col video">Video區塊 -4</div>
      </div>
    </section>
    <!-- 進階設定，class名稱一樣可用nth-child 控制個別寬度 -->
    <section class="demosection col-3-6-3">
      <h2>可自由編輯大小順序</h2>
      <div class="container">
        <div class="col">小欄-3</div>
        <div class="col">大欄-6</div>
        <div class="col">小欄-3</div>
      </div>
    </section>
    <!-- 進階設定，class名稱一樣可用nth-child 控制個別寬度 -->
    <section class="demosection col-5">
      <h2>可利用offset，製作單數欄格線</h2>
      <div class="container">
        <div class="col">5欄</div>
        <div class="col">5欄</div>
        <div class="col">5欄</div>
        <div class="col">5欄</div>
        <div class="col">5欄</div>
      </div>
    </section>
  </div>
</template>
