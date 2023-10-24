<template>
  <div>
    <lzx-navbar></lzx-navbar>
    <div class="container">
      <el-row  :gutter="30">
        <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
          <div class="app-main">
            <keep-alive :include="['Home', 'Reward', 'FriendsLink']">
              <router-view></router-view>
            </keep-alive>
          </div>
        </el-col>
        <el-col :sm="24"  :md="8" >
          <lzx-rightlist></lzx-rightlist>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import header from "../components/header.vue";
import rightlist from "../components/rightlist.vue";

export default {
  name: "index",
  components: { //定义组件
    'lzx-navbar':header,
    'lzx-rightlist':rightlist,
  },
}
</script>

<style scoped>

</style>
