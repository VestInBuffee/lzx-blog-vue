<!-- 文章详情 -->
<template>
  <div id="detail">
    <lzx-articleDetail></lzx-articleDetail>
    <lzx-message></lzx-message>
  </div>
</template>

<script>
import articleDetail from '@/components/articleDetail.vue'
import message from '@/components/message.vue'
export default {
  name:'DetailShare',
  data() { //选项 / 数据
    return {

    }
  },
  methods: { //事件处理器

  },
  components: { //定义组件
    'lzx-articleDetail':articleDetail,
    'lzx-message':message,
  },
  created() { //生命周期函数

  },
  mounted(){
    var anchor = document.querySelector("#detail");
    // console.log(anchor,anchor.offsetTop);
    var top = anchor.offsetTop-60;
    document.body.scrollTop = top;
    // Firefox
    document.documentElement.scrollTop = top;
    // Safari
    window.pageYOffset = top;
  }
}
</script>

<style>
</style>
