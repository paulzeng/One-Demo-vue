<template>
    <div class="indexDetailPicture-wrapper">
        <div class="indexDetailPicture-container" v-if="lists[0]">
            <img :src="lists[0].img_url">
            <p class="indexDetailPicture-page-volume">{{lists[0].volume}}</p>
            <p class="indexDetailPicture-page-pic_info">绘画 / {{lists[0].pic_info}}</p>
            <p class="indexDetailPicture-page-date1">{{indexDate[0]}}</p>
            <p class="indexDetailPicture-page-date2">{{indexDate[1]}}.{{indexDate[2]}}</p>
            <hr class="indexDetailPicture-page-hr">
            <p class="indexDetailPicture-page-forward">{{lists[0].forward}}</p>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .indexDetailPicture-wrapper
        margin-top 45px
        width 100%
        .indexDetailPicture-container
            width 100%
            img
                width 100%
            .indexDetailPicture-page-volume
                float left
                margin-left 5px
                font-size 13px
                opacity 0.4
            .indexDetailPicture-page-pic_info
                margin-right 5px
                text-align right
                font-size 13px
                opacity 0.4
            .indexDetailPicture-page-date1
                margin-top 20px
                text-align center
                line-height 48px
                font-size 48px
                font-family Serif
            .indexDetailPicture-page-date2
                text-align center
                font-size 13px
                opacity 0.4
            .indexDetailPicture-page-hr
                margin-top 20px
                margin-bottom 20px
                width 30%
                height 1px
                background #eee
                margin-left auto
                margin-right auto
                opacity 0.4
            .indexDetailPicture-page-forward
                margin-top 20px
                margin-bottom 50px
                margin-left 20px
                margin-right 20px
                font-size 15px
                opacity 0.4
</style>
<script>
  export default{
    created () {
      this.getIndexDate()
    },
    data () {
      return {
        indexDate: {}
      }
    },
    methods: {
      getIndexDate: function () {
        var indexDate = this.$store.state.indexDate.date
        this.indexDate = indexDate
      }
    },
    props: {
      lists: {}
    }
  }
</script>
