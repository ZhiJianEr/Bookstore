<template>
  <div>
    <m-header title="修改页面"></m-header>
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
        <button @click="update">修改图书</button>
        <router-link to="/list" tag="button">返回</router-link>

      </div>
    </div>

  </div>
</template>
<script>
  import MHeader from 'components/MHeader';
  import {getOneBook,updateBook} from 'api'
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
    created(){
      getOneBook(this.$route.params.id).then(res=>{
          this.book=res.data;
      })
    },
    computed: {},
    components: {MHeader},
    methods: {
      update(){
        updateBook(this.$route.params.id,this.book).then(()=>{
            this.$router.push('/list')
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
        background: #666;
        height: 35px;
        color: #FFF;
      }
    }
  }
</style>
