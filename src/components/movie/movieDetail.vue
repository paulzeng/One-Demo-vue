<template>
    <div class="movieDetail-page-wrapper">
        <div class="movieDetail-page-container">
            <div class="movieDetail-page-content">
                <div class="movieDetail-page-img-container">
                    <img v-if="getMovieDetailIndex" :src="getMovieDetailIndex.img_url">
                </div>
                <p class="movieDetail-page-title">{{movieDetail.title}}</p>
                <p class="movieDetail-page-author" v-if="getMovieDetailIndex">—— 关于《{{getMovieDetailIndex.subtitle}}》</p>
                <p class="movieDetail-page-userName" v-if="movieDetail.user">文 / {{movieDetail.user.user_name}}</p>
                <div class="movieDetail-page-article" v-html="movieDetail.content"></div>
                <p class="movieDetail-page-editor">{{movieDetail.charge_edt}} {{movieDetail.editor_email}}</p>
                <p class="movieDetail-page-from">{{movieDetail.copyright}}</p>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .movieDetail-page-wrapper
        margin-top 45px
        width 100%
        .movieDetail-page-container
            width 100%
            .movieDetail-page-content
                width 100%
                .movieDetail-page-img-container
                    width 100%
                    height 210px
                    margin-bottom 17px
                    overflow hidden
                    img
                        width 100%
                        height auto
                p
                    margin-right 20px
                    margin-left 20px
                .movieDetail-page-title
                    margin-top 30px
                    line-height 40px
                    font-size 26px
                    font-weight 500
                    opacity 0.8
                .movieDetail-page-author
                    margin-top 15px
                    font-size 18px
                    opacity 0.5
                .movieDetail-page-userName
                    margin-top 40px
                    margin-bottom 30px
                    text-align center
                    font-size 14px
                    opacity 0.5
                .movieDetail-page-article
                    margin-top 14px
                    margin-left 20px
                    margin-right 20px
                    line-height 30px
                    font-size 16px
                    font-weight 300
                    color rgba(0,0,0,0.5)
                    overflow hidden
                .movieDetail-page-editor, .movieDetail-page-from
                    margin 20px
                    color #a5a5a5
                    font-style oblique
                    font-size 12px
</style>
<script>
  export default{
    created () {
      if (this.$store.state.movieDetailIndex) {
        var index = this.$store.state.movieDetailIndex.index
        this.getMovieDetailIndex = this.movies[index]
        this.$http.get('http://v3.wufazhuce.com:8000/api/movie/' + this.getMovieDetailIndex.item_id + '/story/1/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android').then((response) => {
          this.movieDetail = response.body.data.data[0]
        }, (response) => {
          this.error = response.error_code
        })
      }
    },
    data () {
      return {
        getMovieDetailIndex: {},
        movieDetail: {}
      }
    },
    props: {
      movies: {}
    }
  }
</script>
