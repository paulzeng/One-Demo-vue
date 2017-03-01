<template>
    <div class="read-page-wapper">
        <router-link id="readDetail" to="readDetail">
            <div class="read-page-content" v-for="(read,index) in reads" @click="readDetailIndex(index)">
                <p class="read-page-index">- 阅 读 -</p>
                <p class="read-page-title">{{read.title}}</p>
                <p class="read-page-author">文/{{read.author.user_name}}</p>
                <img :src="read.img_url">
                <p class="read-page-main">{{readPageContentMain[index]}}...</p>
                <p class="read-page-date">{{readPageTimeMain[index]}}</p>
            </div>
        </router-link>
    </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .read-page-wapper
        margin-top 45px
        width 100%
        background #f6f6f6
        .read-page-content
            width 100%
            margin-bottom 10px
            background white
            box-shadow 0 0.0625em 0 0 rgba(230, 230, 230, 0.5)
            text-shadow 0 1px 0 #f3f3f3
            img
                display block
                width 90%
                margin 0 auto
                padding-top 10px
            p
                padding-left 5%
                padding-top 20px
                margin-right 20px
                margin-left 20px
                opacity 0.4
                color black
            .read-page-index
                padding-left 0
                padding-top 30px
                text-align center
                font-size 0.875em
            .read-page-title
                opacity 0.6
                font-size 1.375em
            .read-page-content
                font-size 1em
            .read-page-date
                font-size 0.825em
                padding-bottom 30px
</style>
<script>
  import readDetail from './readDetail.vue'
  export default{
    data () {
      return {}
    },
    computed: {
      readPageContentMain: function () {
        var readPageContentMain = {}
        for (var i = 0; i < this.reads.length; i++) {
          var j = this.reads[i].forward.slice(0, 30)
          readPageContentMain[i] = j
        }
        return readPageContentMain
      },
      readPageTimeMain: function () {
        var readPageTimeMain = {}
        for (var i = 0; i < this.reads.length; i++) {
          var j = this.reads[i].post_date.slice(0, 10)
          readPageTimeMain[i] = j
        }
        return readPageTimeMain
      }
    },
    methods: {
      readDetailIndex (index) {
        this.$store.commit('readDetailIndexChange', {index: index})
      }
    },
    props: {
      reads: {}
    },
    components: {
      readDetail
    }
  }
</script>
