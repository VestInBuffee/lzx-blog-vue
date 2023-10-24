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
  name: "Share",
  data() { //选项 / 数据
    return {
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        lastPageMaxArticleId: 0,
        categoryId: 0,
      },
      articleList:[],
      hasMore:true,
    }
  },
  components:{
    "lzx-articlelist":articlelist
  },
  methods:{
    getList(){
      articleList(this.queryParams).then((response)=>{
        this.articleList = this.articleList.concat(response.rows)
        const idArr = response.rows.map(el => {return el.id})
        this.queryParams.lastPageMaxArticleId = Math.max.apply(null, idArr)
        if(response.total<=this.articleList.length){
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
      this.queryParams.pageNum = 1
      this.queryParams.lastPageMaxArticleId = 0
      this.queryParams.categoryId = 0
    },
  },
  watch:{
    '$route'(){
      if(this.$route.name === 'Share'){
        this.resetQueryParams()
        this.queryParams.categoryId = this.$route.params.classId;
        this.showSearchShowList(true)
      }
    }
  },
  created() {
    this.queryParams.categoryId = this.$route.params.classId;
    this.getList()
  },
  mounted() {
    // var that = this;
    // that.bus.$on("queryArticleByCategoryId", categoryId => {
    //   that.resetQueryParams()
    //   that.queryParams.categoryId = categoryId
    //   that.showSearchShowList(true)
    // })
  }
}
</script>

<style scoped>

</style>
