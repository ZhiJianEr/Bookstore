<template>
  <div>
    <keep-alive>
      <transition name="trans">
        <router-view class="view"></router-view>
      </transition>
    </keep-alive>
    <tab></tab>
  </div>
</template>
<script>
  import Tab from 'components/Tab'
  export default {
    components: {
      Tab
    }
  }
</script>
<style scoped>
  .view {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 65px;
  }

  .trans-enter {
    transform: translate(100%);
  }

  .trans-enter-active {
    transition: 0.5s linear;
  }

  .trans-leave-active {
    transform: translate(-100%);
    transition: 0.5s linear;
  }

  .content {
    margin-bottom: 65px;
  }
</style>
