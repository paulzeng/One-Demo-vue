<template>
    <div class="index" v-if="reads[0]">
        <div class="sentence-bg"></div>
        <div class="sentence-wrapper">
            <router-link id="indexDetailPicture" to="/indexDetailPicture">
                <div class="sentence-content">
                    <img v-if="lists[0]" :src="lists[0].img_url">
                    <div class="sentence-content-date">
                        <p>{{date[0]}}</p>
                        <p v-if="lists[0]">{{lists[0].volume}}</p>
                        <p>{{date[1]}}.{{date[2]}}</p>
                        <p>{{listsForwardMain}}...</p>
                        </span>
                    </div>
                    <span @click="indexScrollDown"><icon class="indexPage-down-icon" name="chevron-down" scale="2"></icon></span>
                </div>
            </router-link>
        </div>
        <div class="index-bottom-wrapper">
            <div class="index-read-wrapper">
                <p>阅 读 |</p>
                <p v-if="lists[3]">{{lists[3].title}}</p>
                <p v-if="lists[3]">作者 / {{lists[3].author.user_name}}</p>
                <p>{{reads[0].forward}}</p>
                <p>阅读全文</p>
            </div>
            <div class="index-answer-wrapper">
                <p>问 答 |</p>
                <p v-if="lists[5]">{{lists[5].title}}</p>
                <p>{{answerMain}}</p>
                <p>阅读全文</p>
            </div>
        </div>
        <div class="index-more-wrapper">
            <mt-button type="primary">更多内容 ></mt-button>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .index
        width 100%
        .sentence-bg
            position absolute
            top 44px
            height 690px
            width 100%
            background rgba(0, 0, 0, 0.4)
        .sentence-wrapper
            margin-top 45px
            .sentence-content
                display: flex
                justify-content center
                align-items center
                overflow hidden
                width 100%
                height 690px
                img
                    height 100%
                    width 200%
                .sentence-content-date
                    position absolute
                    bottom 0px
                    left 5%
                    height 200px
                    width 90%
                    p
                        color white
                        font-family Serif
                    p:nth-child(1)
                        font-size 48px
                    p:nth-child(2)
                        display inline-block
                        padding-right 7px
                        font-size 19px
                        border-right 2px solid white
                    p:nth-child(3)
                        padding-top 10px
                        display inline-block
                        font-size 19px
                    p:nth-child(4)
                        padding-top 10px
                        font-size 15px
                span
                    position absolute
                    bottom 10px
                    color white
        .index-bottom-wrapper
            width 100%
            font-family Arial
            text-shadow 0 1px 0 #f3f3f3
            .index-read-wrapper
                width 90%
                margin 0 auto
                p:nth-child(1)
                    padding-top 15px
                    color #38c
                    font-size 13px
                p:nth-child(2)
                    padding-top 13px
                    color black
                    font-size 28px
                    font-weight bold
                p:nth-child(3)
                    padding-top 14px
                    font-size 13px
                    opacity 0.4
                p:nth-child(4)
                    padding-top 14px
                    font-size 13px
                    opacity 0.4
                p:nth-child(5)
                    padding-top 14px
                    font-size 15px
                    color #059
                    opacity 0.4
            .index-answer-wrapper
                width 90%
                margin 0 auto
                p:nth-child(1)
                    padding-top 50px
                    color #38c
                    font-size 13px
                p:nth-child(2)
                    padding-top 13px
                    color black
                    font-size 28px
                    font-weight bold
                p:nth-child(3)
                    overflow hidden
                    padding-top 14px
                    font-size 13px
                    opacity 0.4
                p:nth-child(4)
                    padding-top 14px
                    font-size 15px
                    color #059
                    opacity 0.4
        .index-more-wrapper
            margin 0 auto
            padding-top 50px
            padding-bottom 200px
            text-align center
</style>
<script>
  export default{
    data () {
      return {
        date: [],
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      }
    },
    created () {
      this.getDate()
    },
    methods: {
      getDate: function () {
        var mydate = new Date()
        this.date.push(mydate.getDate())
        this.date.push(this.month[mydate.getMonth()])
        this.date.push(mydate.getFullYear())
        this.$store.commit('indexDateChange', {date: this.date})
      },
      indexScrollDown: function () {
        console.log('1')
        window.scroll(0, 700)
      }
    },
    computed: {
      answerMain: function () {
        var reg = /(\s+)?<br(\s+)?\/?>(\s+)?/gi
        if (this.lists[5]) {
          return this.lists[5].share_info.content.replace(reg, '').slice(0, 80) + '......'
        }
      },
      listsForwardMain: function () {
        if (this.lists[0]) {
          return this.lists[0].forward.slice(0, 45)
        }
      }
    },
    props: {
      lists: {},
      reads: {},
      answers: {}
    }
  }
</script>
