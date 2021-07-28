<template>
  <div class="layout">
    <div class="sideBar">
      这是一个侧边栏预留位置
    </div>
    <div class="content">
      <div class="contentHead">
        这是内容区脑瓜子预留位置
      </div>
      <div class="mainContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.layout{
  display: flex;
  width: 100vw;
  height: 100vh;
  .sideBar{
    width: 240px;
    background: skyblue;
  }
  .content{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .contentHead{
      height: 60px;
      background: skyblue;
    }
    .mainContent{
      min-height: calc(100vh - 92px);;
    }
  }
}
</style>
