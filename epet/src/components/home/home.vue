<template>
  <div>
    <e-header></e-header>
    <ul class="nav">
      <li>
        <router-link to="/">
          <span class="homepage">首页</span>
          <span>
            <i class="xiaolv"></i>
          </span>
        </router-link>
      </li>
      <li>
        <router-link to="/dogfood">
          <span class="dogfood">狗粮</span>
        </router-link>
      </li>
      <li>
        <router-link to="/temai">
          <span class="sell">特卖</span >
        </router-link>
      </li>
      <li>
        <router-link to="/video">
          <span class="video">潮品视频</span>
        </router-link>
      </li>
      <li>
        <router-link to="/classroom">
          <span class="classroom">新汪课堂</span>
        </router-link>
      </li>
    </ul>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://img2.epetbar.com/nowater/2017-08/04/13/759151da4635e0dfa29a208fc9cb8926.png@!water" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img2.epetbar.com/nowater/2017-08/07/19/0c2cf3f90fc7ed878ffff646309d4208.png@!water" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img2.epetbar.com/nowater/2017-08/10/10/4ac6d96cb9cb8051d4823c5f388a2598.jpg@!water" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img2.epetbar.com/nowater/2017-08/11/19/005dbfcd5a5449670063fc1bb877acf5.jpg@!water" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img2.epetbar.com/nowater/2017-08/10/14/dbd128641ff7dc4a02637f57e3b68258.jpg@!water" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img2.epetbar.com/nowater/2017-08/08/09/30fed7c2d515bbc687ad8ccd1e0ccda7.jpg@!water" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img2.epetbar.com/nowater/2017-08/04/13/feb112a0b6fc07f5b5210a007f3c69aa.jpg@!water" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!--<div class="swiper-button-prev"></div>-->
      <!--<div class="swiper-button-next"></div>-->

      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
    <!--轮播图插件swipe,swiper,better-scroll,vue-scroller-->
    <div class="gowrapper">
      <div class="go">
        <img src="https://img2.epetbar.com/nowater/2017-06/27/16/986dc2be74b6528cea780c2efbd51988.gif" alt="">
      </div>
      <ul class="pagebtn">
        <li><img src="https://img1.epetbar.com/2017-08/03/09/27e9bbcf34c51c1077d4dd8b835d0a2f.png@!water" alt=""></li>
        <li><img src="https://img1.epetbar.com/2017-08/03/09/7afb8e7f8be2b0dc2f91eec9a073cde8.png@!water" alt=""></li>
        <li><img src="https://img1.epetbar.com/2017-08/03/09/e5aac3f233b17be1e7c245a598f812e0.png@!water" alt=""></li>
        <li><img src="https://img1.epetbar.com/2017-08/03/09/75feae28f5876aaa615478b0b68992c3.png@!water" alt=""></li>
        <li><img src="https://img1.epetbar.com/2017-08/03/09/9c429ba6358ee54f4c6bdd8e4aa6831f.png@!water" alt=""></li>
      </ul>
    </div>
    <div class="cut-off"></div>
    <div class="everyday">
      <div class="everyday-time">
        <div class="everydayimg">
          <img src="https://static.epetbar.com/static_wap/epetapp/pages/index/images/suprice.png" alt="">
        </div>
        <div class="finish">距本场结束</div>
        <div class="time">00:00:00</div>
        <div class="more">MORE</div>

      </div>
      <div class="everyday-list">

      </div>
    </div>
  </div>
</template>

<script>
  import header from '../header/header.vue'
export default {
    components: {
      'e-header': header
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    height 160px
    .swiper-wrapper
      .swiper-slide img
        width 100%
    .swiper-pagination
      .swiper-pagination-bullet
        background #ffffff
        opacity 1
      .swiper-pagination-bullet-active
        width 17px
        border-radius 4px
  .gowrapper
    width 100%
    height 100%
    .go
      img
        width 100%
    .pagebtn
      height 90px
      li
        width 20%
        float left
        img
          width 100%
          border 0px
          display block
          vertical-align middle
  .nav
    width 100%
    height 35px
    min-width 320px
    white-space nowrap
    box-sizing border-box
    li
      float left
      width 20%
      text-align center
      line-height 36px
      color #666
      display block
  .cut-off
    width 100%
    height 10px
    background-color  #f3f4f5

  .everyday
    box-sizing border-box
    .everyday-time
      width 100%
      padding 10px
      overflow hidden
      .everydayimg
        width 29%
        float left
        img
          width 100%
      .finish
        width 22%
        float left
      .time
        width 19%
        float left
      .more
        width 30%
        position absolute
        top 2px
        right -8px
        left 0
        bottom 0
</style>
