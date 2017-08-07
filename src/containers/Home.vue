<template>
  <div>
    <m-header title="书城"></m-header>
    <!--轮播图插件-->
    <div v-if="sliders.length">
      <slider :data="sliders"></slider>
    </div>
    <h3>最新上架</h3>
    <ul class="hot">
      <li v-for="hot in hots">
        <img :src="hot.bookCover" alt="">
        <span>{{hot.bookName}}</span>
      </li>
    </ul>
    <loading v-if="isLoading"></loading>
  </div>
</template>
<script>
  import {getSliders, getHot} from 'api';
  import Slider from 'components/Slider';
  import Loading from 'components/Loading';
  import MHeader from 'components/MHeader';

  export default {
    data(){
      return {
        sliders: [],
        hots: [],
        isLoading: true
      }
    },
    created(){
      getSliders().then(res => {
        this.sliders = res.data;
//              console.log(res.data);
      });
      getHot().then(res => {
        this.hots = res.data;
        this.isLoading = false;
//            console.log(res.data);
      })
    },
    computed: {},
    components: {Slider, Loading, MHeader},
    methods: {}
  }
</script>
<style scoped lang="less">
  h3 {
    color: #666;
    padding-left: 2%;
    margin: 10px 0;
    font-weight: normal;
  }

  .hot {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: column;
      width: 33.33%;
      img {
        width: 75%;
        margin-left:12.5%;
      }
      span{
        text-align: center;
      }
    }
  }
</style>
