<template>
  <div>
    <m-header title="列表"></m-header>

    <scroller :on-refresh="refresh" ref="scroller" class="top">
      <ul class="list">
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.content}}</p>
            <i class="iconfont icon-shoucang" @click="save(book)"></i>
            <p class="btn-list">
              <router-link :to="{path:'/update/'+ book.id}" tag="button">修改</router-link>
              <button @click="remove(book.id)">删除</button>
            </p>
          </div>
        </li>

      </ul>
    </scroller>

  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  import MHeader from 'components/MHeader'
  import {getBook, removeBook} from 'api'
  import * as Types from '../store/mutation-types'

  export default {
    data(){
      return {books: []}
    },
    created(){
      this.getList()
    },
    computed: {},
    components: {MHeader},
    methods: {
      ...mapMutations([Types.ADD_COLLECT]),
      save(book){
        this[Types.ADD_COLLECT](book);
        this.$router.push('/collect')
      },

      refresh(){
        this.getList()
      },
      getList(){
        getBook().then(res => {
          this.books = res.data;
          this.$refs.scroller.finishPullToRefresh()
        })
      },
      remove(id){
        removeBook(id).then(res => {
          this.books = this.books.filter(item => item.id != id)
        })
      }
    }
  }
</script>
<style scoped lang="less">

  .list {
    li {
      border-bottom: 1px dashed #ccc;
      display: flex;
      img {
        width: 100px;
        height: 120px;
      }
      div {
        margin-left: 10px;
        p{
          margin-top: 8px;
        }
        h4{
          color: #666;
          margin: 5px;
        }
        display: flex;
        flex-direction: column;
      }
    }
    img[lazy='lozded'] {
      animation: fadeIn 0.5s;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .top {
    margin-top: 40px;
  }

  .btn-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      width: 60px;
      border-radius: 3px;
    }
  }

  .icon-shoucang {
    font-size: 20px;
    color:#7e7e7e;
  }
</style>
