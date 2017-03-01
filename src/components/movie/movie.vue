<template>
    <div class="movie-wrapper">
        <div class="movie-container">
            <router-link id="movieDetail" to="movieDetail">
                <div class="movie-content" v-for="(movie,index) in movies" @click="movieDetailIndex(index)">
                    <p class="movie-page-index">- 视频 -</p>
                    <p class="movie-page-title">{{movie.title}}</p>
                    <p class="movie-page-author">文 / {{movie.author.user_name}}</p>
                    <div class="movie-page-imgWrapper">
                        <div class="movie-page-imgContainer">
                            <img :src="movie.img_url">
                        </div>
                    </div>
                    <p class="movie-page-forward">{{movie.forward}}</p>
                    <p class="movie-page-subtitle">—— 《{{movie.subtitle}}》</p>
                    <p class="movie-page-date">{{moviePageTimeMain[index]}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .movie-wrapper
        margin-top 45px
        width 100%
        background-color: #f6f6f6
        .movie-container
            width 100%
            .movie-content
                margin-bottom 10px
                width 100%
                background white
                line-height 1.3em
                box-shadow 0 0.0625em 0 0 rgba(230, 230, 230, 0.5)
                text-shadow 0 1px 0 #f3f3f3
                .movie-page-imgWrapper
                    display flex
                    justify-content center
                    align-items center
                    height 18.5em
                    width 100%
                    background-image url("./movie-list-background.png")
                    background-size 100% 100%
                    .movie-page-imgContainer
                        width 24em
                        text-shadow 0 1px 0 #f3f3f3
                        img
                            width 100%
                            height auto
                            border-radius 8px
                p
                    padding-left 5%
                    padding-top 20px
                    opacity 0.4
                    color black
                .movie-page-index
                    text-align center
                    line-height 1.85em
                    font-size 0.875em
                .movie-page-title
                    opacity 0.55
                    line-height 1.4em
                    font-size 1.375em
                .movie-page-author
                    padding-bottom 10px
                    line-height 1.3em
                    font-size 1em
                .movie-page-forward, .movie-page-subtitle
                    line-height 1em
                    font-size 0.875 emem
                .movie-page-subtitle
                    margin-right 33px
                    text-align right
                .movie-page-date
                    padding-bottom 20px
                    line-height 1.4em
                    font-size 0.625em
</style>
<script>
  import movieDetail from './movieDetail.vue'
  export default{
    data () {
      return {}
    },
    computed: {
      moviePageTimeMain: function () {
        var moviePageTimeMain = {}
        for (var i = 0; i < this.movies.length; i++) {
          var j = this.movies[i].post_date.slice(0, 10)
          moviePageTimeMain[i] = j
        }
        return moviePageTimeMain
      }
    },
    methods: {
      movieDetailIndex (index) {
        this.$store.commit('movieDetailIndexChange', {index: index})
      }
    },
    props: {
      movies: {}
    },
    components: {
      movieDetail
    }
  }
</script>
