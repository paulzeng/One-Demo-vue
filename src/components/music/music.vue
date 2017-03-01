<template>
    <div class="music-page-wrapper">
        <router-link id="musicDetail" to="musicDetail">
            <div class="music-page-content" v-for="(music,index) in musics" @click="musicDetailIndex(index)">
                <p class="music-page-index">- 音乐 -</p>
                <p class="music-page-title">{{music.title}}</p>
                <p class="music-page-author">文 / {{music.author.user_name}}</p>
                <div class="music-page-album-img-wrapper">
                    <div class="music-page-album-img-container">
                        <div class="music-page-album-content">
                            <img :src="music.share_list.wx.imgUrl">
                            <img :src="music.img_url">
                        </div>
                    </div>
                </div>
                <p class="music-page-album">{{music.music_name}} · {{music.audio_author}} | {{music.audio_album}}</p>
                <p class="music-page-content-main">{{music.forward}}</p>
                <p class="music-page-date">{{music.post_date}}</p>
            </div>
        </router-link>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .music-page-wrapper
        margin-top 45px
        width 100%
        background #f6f6f6
        .music-page-content
            width 100%
            margin-bottom 10px
            background white
            box-shadow 0 0.0625em 0 0 rgba(230, 230, 230, 0.5)
            text-shadow 0 1px 0 #f3f3f3
            color black
            .music-page-album-img-wrapper
                padding-top 0.5em
                height 18em
                .music-page-album-img-container
                    width 78%
                    height 100%
                    border-radius 0 49% 49% 0
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.06)
                    img:nth-child(1)
                        position absolute
                        margin-top 15em
                        margin-left 1.5em
                        width 1.75em
                        height 1.75em
                    img:nth-child(2)
                        float right
                        margin-top 1.25em
                        margin-right 0.5em
                        width 15em
                        height 15em
                        border-radius 7.5em
            p
                opacity 0.4
                padding-left 5%
                max-width 95%
                padding-top 0.5em
            .music-page-index
                padding-left 0
                padding-top 1em
                text-align center
                font-size 0.875em
                line-height 1.875em
            .music-page-title
                font-size 1.5em
                line-height 1.4em
                opacity 0.6
            .music-page-author
                font-size 1em
                line-height 1.875em
            .music-page-album
                font-size 0.65em
                line-height 1.4em
                margin-top 1em
            .music-page-content-main
                font-size 0.875em
                line-height 1.875em
                max-height 3.714em
                margin-top 0.7143em
            .music-page-date
                padding-top 30px
                padding-bottom 30px
                font-size 0.625em
                line-height 1.4em
</style>
<script>
  import musicDetail from './musicDetail.vue'
  export default{
    data () {
      return {}
    },
    methods: {
      musicDetailIndex (index) {
        this.$store.commit('musicDetailIndexChange', {index: index})
      }
    },
    props: {
      musics: {}
    },
    components: {
      musicDetail
    }
  }
</script>
