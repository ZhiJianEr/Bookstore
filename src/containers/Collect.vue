<template>
  <div>
    <m-header title="收藏"></m-header>
    <!--{{collect.length}}-->
    <ul class="collect-list">
      <li v-for="col in collect">
        <img :src="col.bookCover" alt="">
        <a href="" @click.prevent="cancel(col.id)">取消收藏</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import MHeader from 'components/MHeader'
  import * as Types from '../store/mutation-types'

  export default {
    data(){
      return {}
    },
    computed: {
      ...mapState(['collect'])
    },
    components: {MHeader},
    methods: {
      ...mapMutations([Types.REMOVE_COLLECT]),

      cancel(id){
        this[Types.REMOVE_COLLECT](id);
        this.$router.push('/collect')

      }
    }
  }
</script>
<style scoped lang="less">
  .collect-list {
    li{
      img {
        width: 100px;
        height: 120px;
        margin: 20px 0;
      }
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

  }
</style>
