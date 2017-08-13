<template>
  <div class="head">
    <div class="head wrapper">
      <span class="closebtn">
        <img id="close_down_bar" src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png"></span>
      <div class="red packet">
        <a href="https://wap.epet.com/download.html?do=market&amp;utm_source=baidu-wap-pz&amp;utm_type=source" style="display: block;">

          <img src=" https://img2.epetbar.com/nowater/2017-07/03/10/211547bb51dd23758f74fb86e9d7aae5.png@!water" alt="">
        </a>
      </div>
    </div>
    <div class="search-outer">
      <div class="search-in">
        <div class="location">
          <span class="dog">狗站</span>
          <span class="line">|</span>
          <a href="https://wap.epet.com/place.html?pet_type=dog&amp;">
            <span class="address">重庆</span>
          </a>
          <span class="icon"></span>
        </div>
        <p class="searchtext">
            <!--<a href="https://wap.epet.com/search.html?pet_type=dog&fw=0"></a>-->
            <a href="https://wap.epet.com/wappms/pms.html?fw=0">
              <input type="search" placeholder="搜索商品和品牌">
            </a>
            <span class="inputicon"></span>

        </p>
        <a class="message" href="https://wap.epet.com/wappms/pms.html?fw=0" >
          <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/mydope.png">
        </a>

      </div>

    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

    .wrapper
      width 100%
      position relative
      .red packet
        width 100%
      .closebtn img
        display inline-block
        width 5%
        margin-right 2%
        vertical-align middle
        position: absolute
        top 29%
        left 2%

      a img
        width 100%
        vertical-align middle
    .search-outer
      width 100%
      height 43px
      padding 0px 10px
      box-sizing border-box
      .search-in
        width 100%
        height 27px
        padding 8px 0
        .location
          float left
          height 22px
          font-size 0px
          color #666
          position relative
          text-align center
          width 20%
          margin 5px 20px 0 0
          .dog
            font-size 14px
          .address
            font-size 14px
            color black
          .line
            font-size 14px
          .icon
            position absolute
            top 0px
            left 74px
            width 0px
            height 0px
            border-style solid
            border-color transparent transparent black transparent
            border-width 4px
        .searchtext
          float left
          position relative
          width 60%
          input
            width 100%
            margin-left 10px
            outline none
            text-indent 10px
            border-radius 4px
            background-color: #f6f6f6
            border none
            height 25px
            font-size 13px
          .inputicon
            display block
            background url(../../assets/search.png) no-repeat
            background-size 11px auto
            width 11px
            height 11px
            position absolute
            right 0
            top 7px
            bottom 0
        .message
          width 10%
          float left
          margin-left 10px
        .message img
          width 25px
          margin-left 10px
          vertical-align middle
          text-decoration none




</style>
