<template>
    <div class="readDetail-wrapper">
        <div class="readDetail-container" v-if="readDetail">
            <p class="readDetail-page-title">{{readDetail.title}}</p>
            <hr class="readDetail-page-line">
            <p v-if="readDetail.author" class="readDetail-page-author">文 / {{readDetail.author.user_name}}</p>
            <div class="readDetail-page-article" v-html="readDetailArticle"></div>
            <p class="readDetail-page-editor">{{readDetailEditor}}</p>
            <p class="readDetail-page-from">{{readDetailFrom}}</p>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .readDetail-wrapper
        margin-top 45px
        width 100%
        .readDetail-container
            width 100%
            padding-top 30px
            .readDetail-page-title
                margin-left 20px
                margin-right 20px
                font-size 28px
                font-weight 500
                opacity 0.8
            .readDetail-page-line
                margin 15px 20px
                width 70px
                border 2px solid black
            .readDetail-page-author
                margin-left 20px
                margin-right 20px
                font-size 13px
                margin-top 14px
                opacity 0.5
            .readDetail-page-article
                margin-top 14px
                margin-left 20px
                margin-right 20px
                line-height 26px
                font-size: 16px
                color rgba(0,0,0,0.5)
                overflow hidden
            .readDetail-page-editor,.readDetail-page-from
                margin 20px
                font-size 12px
                color #a5a5a5
                font-style oblique
</style>
<script>
  export default{
    created () {
      if (this.$store.state.readDetailIndex) {
        var index = this.$store.state.readDetailIndex.index
        this.readDetail = this.reads[index]
        this.$http.get('http://v3.wufazhuce.com:8000/api/essay/' + this.readDetail.item_id + '?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((response) => {
          this.readDetailArticle = response.body.data.hp_content
          this.readDetailEditor = response.body.data.hp_author_introduce
          this.readDetailFrom = response.body.data.copyright
        }, (response) => {
          this.error = response.error_code
        })
      }
    },
    data () {
      return {
        readDetail: {},
        readDetailArticle: {},
        readDetailEditor: {},
        readDetailFrom: {}
      }
    },
    props: {
      reads: {}
    }
  }
</script>
