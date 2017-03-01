<template>
    <div id="app">
        <div class="header-wrapper">
            <div class="header">
                <label @click="popLeft">
                    <icon name="bars" scale="1.5"></icon>
                </label>
                <router-link id="index" to="/index"><p @click="changeHeaderName(0)">{{headerName[headerNameIndex]}}</p>
                </router-link>
                <icon name="search" scale="1.5"></icon>
            </div>
        </div>
        <router-view :movies="movie" :musics="music" :answers="answer" :lists="list" :reads="read"></router-view>
        <mt-popup
                v-model="popVisible"
                modal=false
                position="left">
            <ul class="nav-left">
                <router-link id="read" to='/read'>
                    <li @click="popLeft(),changeHeaderName(1)">阅读</li>
                </router-link>
                <router-link id="music" to='/music'>
                    <li @click="popLeft(),changeHeaderName(2)">音乐</li>
                </router-link>
                <router-link id="movie" to='/movie'>
                    <li @click="popLeft(),changeHeaderName(3)">影视</li>
                </router-link>
                <router-link id="AppDownload" to='/AppDownload'>
                    <li @click="popLeft(),changeHeaderName(4)">App下载</li>
                </router-link>
                <router-link id="AppAbout" to='/AppAbout'>
                    <li @click="popLeft(),changeHeaderName(5)">关于</li>
                </router-link>
            </ul>
        </mt-popup>
    </div>
</template>

<script>
  import index from './components/index/index.vue'
  import read from './components/read/read.vue'
  import music from './components/music/music.vue'
  import movie from './components/movie/movie.vue'

  export default {
    name: 'app',
    data () {
      return {
        newListId: '',
        list: {},
        read: {},
        answer: {},
        music: {},
        movie: {},
        popVisible: false,
        headerName: ['一个', '一个阅读', '一个音乐', '一个影视', 'App下载', '关于'],
        headerNameIndex: 0
      }
    },
    created () {
      this.$http.get('http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((response) => {
        this.newListId = response.body.data[0]
        const listApi = 'http://v3.wufazhuce.com:8000/api/onelist/' + this.newListId + '/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
        this.$http.get(listApi).then((response) => {
          this.list = response.body.data.content_list
        }, (response) => {
          this.error = response.error_code
        })
        this.$http.get('http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((response) => {
          this.read = response.body.data
        }, (response) => {
          this.error = response.error_code
        })
        this.$http.get('http://v3.wufazhuce.com:8000/api/question/1593?channel=wdj&source=channel_reading&source_id=9254&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((response) => {
          this.answer = response.body.data
        }, (response) => {
          this.error = response.error_code
        })
        this.$http.get('http://v3.wufazhuce.com:8000/api/channel/music/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((response) => {
          this.music = response.body.data
        }, (response) => {
          this.error = response.error_code
        })
        this.$http.get('http://v3.wufazhuce.com:8000/api/channel/movie/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((response) => {
          this.movie = response.body.data
        }, (response) => {
          this.error = response.error_code
        })
      })
    },
    methods: {
      popLeft: function () {
        this.popVisible = !this.popVisible
      },
      changeHeaderName: function (index) {
        this.headerNameIndex = index
      }
    },
    components: {
      index,
      read,
      music,
      movie
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
        .header-wrapper
            display block
            position fixed
            top 0
            width 100%
            height 44px
            z-index 99
            background white
            box-shadow 0px 2px 10px rgba(0, 0, 0, 0.1)
            .header
                display flex
                width 100%
                height 100%
                justify-content space-between
                align-items center
                :nth-child(1)
                    color rgba(0, 0, 0, 0.3)
                    margin-left 5px
                p
                    color rgba(0, 0, 0, 0.3)
                    font-family "PingFang SC"
                    font-size 18px
                :nth-child(3)
                    margin-right 10px
        .mint-popup.mint-popup-left
            width 188px
            height 100%
            border-right 1px solid #eee
            box-shadow 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06)
            .nav-left
                li
                    margin-top 30px
                    height 28px
                    text-align center
                    vertical-align middle
                    line-height 28px
                    font-size 16px
                    font-family sans-serif
                    color rgba(0, 0, 0, 0.6)
        .v-modal
            opacity 0
</style>
