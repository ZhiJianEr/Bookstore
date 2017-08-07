<template>
  <div>
    <m-header title="添加页面"></m-header>
    <div class="add">
      <div class="group">
        <label for="bookName">书名</label>
        <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
      </div>
      <div class="group">
        <label for="bookCover">书地址</label>
        <input type="text" id="bookCover" placeholder="请输入封面" v-model="book.bookCover">
      </div>
      <div class="group">
        <label for="content">内容</label>
        <input type="text" id="content" placeholder="请输入详情内容" v-model="book.content">
      </div>
      <div class="group">
        <button @click="add">添加图书</button>
      </div>
    </div>

  </div>
</template>
<script>
  import MHeader from 'components/MHeader';
  import {addBook} from 'api'
  export default {
    data(){
      return {
          book:{
              bookName:"",
              bookCover:"",
              content:""
          }
      }
    },
    computed: {},
    components: {MHeader},
    methods: {
        add(){
            addBook(this.book).then(res=>{
              this.$router.push('/list');
            })
        }
    }
  }
</script>
<style scoped lang="less">
  .add{
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    .group{
      display: flex;
      flex-direction: column;
      margin: 10px;
      label{
        font-size: 16px;
        line-height: 25px;
        padding: 0 2px;
      }
      input{
        border: 1px solid #ccc;
        height: 30px;
      }
      button{
        border-radius: 6px;
        background: #00b3ee;
        height: 35px;
        color: #FFF;
      }
    }
  }
</style>
