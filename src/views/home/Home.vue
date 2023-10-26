<template>
  <div>
    <el-row>
      <lzx-articlelist :articleList="articleList"></lzx-articlelist>
      <el-col class="viewmore">
        <a v-show="hasMore" class="tcolors-bg" href="javascript:void(0);" @click="addMoreFun">点击加载更多</a>
        <a v-show="!hasMore" class="tcolors-bg" href="javascript:void(0);">暂无更多数据</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import articlelist from '@/components/articlelist.vue'
import {articleList} from "@/api/article";

export default {
  name: "Home",
  data() { //选项 / 数据
    return {
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        lastPageMaxArticleId: 0,
        tagId: 0,
        queryContent: ""
      },
      articleList:[],
      hasMore:true,
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     if (from.name === 'Home') {
  //       vm.resetQueryParams()
  //       vm.showSearchShowList(true)
  //     }
  //   })
  // },
  methods:{
    getList(){
      articleList(this.queryParams).then((response)=>{
        this.articleList = this.articleList.concat(response.rows)
        const idArr = response.rows.map(el => {return el.id})
        this.queryParams.lastPageMaxArticleId = Math.max.apply(null, idArr)
        if(response.total<this.queryParams.pageSize){
          this.hasMore=false
        }else{
          this.hasMore=true
          this.queryParams.pageNum++
        }
      })
    },
    showSearchShowList:function(initData){//展示数据
      if(initData){
        this.articleList = []
      }
      this.getList()
    },
    addMoreFun:function(){//查看更多
      this.showSearchShowList(false);
    },
    resetQueryParams: function (){
      this.queryParams.queryContent = ""
      this.queryParams.pageNum = 1
      this.queryParams.lastPageMaxArticleId = 0
      this.queryParams.tagId = 0
    },
  },
  components:{
    "lzx-articlelist":articlelist
  },
  created() {
    this.getList()
  },
  mounted() {
    var that = this;
    that.bus.$on("queryArticleByTagId", tagId => {
      that.resetQueryParams()
      that.queryParams.tagId = tagId
      that.showSearchShowList(true)
    });
    that.bus.$on("queryArticleByContent", queryContent => {
      that.resetQueryParams()
      that.queryParams.queryContent = queryContent
      that.showSearchShowList(true)
    });

  }

}
</script>

<style scoped>

</style>
