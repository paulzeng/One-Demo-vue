<template>
    <div class="musicDetail-page-wrapper">
        <div class="musicDetail-page-container">
            <div v-if="musicDetail" class="musicDetail-page-content">
                <div class="musicDetail-page-img-wrapper">
                    <div class="musicDetail-page-img-container">
                        <img :src="musicDetail.cover">
                    </div>
                </div>
                <p class="musicDetail-page-title">{{musicDetail.title}}</p>
                <p class="musicDetail-page-album">{{musicDetail.album}}</p>
                <p v-if="musicDetail.author" class="musicDetail-page-author">{{musicDetail.author.user_name}}</p>
                <p class="musicDetail-page-storyTitle">{{musicDetail.story_title}}</p>
                <p v-if="musicDetail.story_author" class="musicDetail-page-storyAuthor">文 / {{musicDetail.story_author.user_name}}</p>
                <div class="musicDetail-page-story" v-html="musicDetail.story"></div>
                <p class="musicDetail-page-editor">{{musicDetail.charge_edt}}</p>
                <p class="musicDetail-page-from">{{musicDetail.copyright}}</p>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .musicDetail-page-wrapper
        margin-top 45px
        width 100%
        .musicDetail-page-container
            width 100%
            .musicDetail-page-content
                width 100%
                .musicDetail-page-img-wrapper
                    position relative
                    display block
                    clear both
                    height 356px
                    .musicDetail-page-img-container
                        position absolute
                        left -186px
                        top -180px
                        width 490px
                        height 490px
                        border-radius 245px 245px 245px 0px
                        box-shadow 0 0 20px 5px rgba(230,230,230,0.6)
                        img
                            position absolute
                            left 10px
                            top 20px
                            width 454px
                            height 454px
                            border-radius 227px 227px 227px 226px
                            text-shadow 0 1px 0 #f3f3f3
            .musicDetail-page-title, .musicDetail-page-album, .musicDetail-page-author
                text-align center
                font-size 14px
                line-height 20px
                opacity 0.4
            .musicDetail-page-storyTitle
                margin-top 30px
                text-align center
                font-size 28px
                font-weight 500
                opacity 0.7
            .musicDetail-page-storyAuthor
                margin-top 40px
                text-align center
                font-size 14px
                line-height 20px
                opacity 0.4
            .musicDetail-page-story
                margin-top 20px
                margin-left 20px
                margin-right 20px
                font-size 16px
                font-weight 300
                line-height 30px
                color rgba(0,0,0,0.4)
                overflow hidden
            .musicDetail-page-editor, .musicDetail-page-from
                margin 20px
                font-size 12px
                color #a5a5a5
                font-style oblique
</style>
<script>
  export default{
    created () {
      if (this.$store.state.musicDetailIndex) {
        var index = this.$store.state.musicDetailIndex.index
        this.getMusicDetailIndex = this.musics[index]
        this.$http.get('http://v3.wufazhuce.com:8000/api/music/detail/' + this.getMusicDetailIndex.item_id + '?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((response) => {
          this.musicDetail = response.body.data
        }, (response) => {
          this.error = response.error_code
        })
      }
    },
    data () {
      return {
        getMusicDetailIndex: {},
        musicDetail: {}
      }
    },
    props: {
      musics: {}
    }
  }
</script>
