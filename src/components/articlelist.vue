<!-- 文章列表 -->
<template>
    <div class="sharelistBox">

        <el-col :span="24" class="s-item tcommonBox" v-for="(item,index) in articleList" :key="'article'+index">
            <span class="s-round-date">
                <span class="month" v-html="showInitDate(item.createTime,'month')+'月'"></span>
                <span class="day" v-html="showInitDate(item.createTime,'date')"></span>
            </span>
            <header>
                <h1>
                    <a :href="'#/DetailArticle?aid='+item.id" target="_blank">
                        {{item.title}}
                    </a>
                </h1>
                <h2>
                    <i class="fa fa-fw fa-user"></i>发表于
                    <i class="fa fa-fw fa-clock-o"></i><span v-html="showInitDate(item.createTime,'all')">{{showInitDate(item.createTime,'all')}}</span> •
                    <i class="fa fa-fw fa-eye"></i>{{item.viewCount}} 次围观 •

                </h2>
                <div class="ui label">
                    <a :href="'#/Share?classId='+item.class_id">{{item.categoryName}}</a>
                </div>
            </header>
            <div class="article-content">
                <p style="text-indent:2em;">
                    {{item.summary}}
                </p>
                <p  style="max-height:300px;overflow:hidden;text-align:center;">
                    <img :src="item.thumbnail" alt="" class="maxW">
                </p>
            </div>
            <div class="viewdetail">
                <a class="tcolors-bg" :href="'#/DetailArticle?aid='+item.id" target="_blank">
                    阅读全文>>
                </a>
            </div>
            <div class="tags">
              <a v-for="(tag, tagIndex) in item.tagList" :key="'articleTagList' + tagIndex" @click="tagClick(tag.id, tag.name)"><span>{{tag.name}}</span></a>
            </div>
        </el-col>

    </div>
</template>

<script>
import {initDate} from '../utils/server.js'


export default {
        name:'articlelist',
        props:{
          articleList:{
            type: Array,
            required: true
          }
        },

        methods: { //事件处理器
            tagClick: function (tagId, tagName){
              this.$router.push({
                // path: "/Home?labelId=" + tagId
                path: "/Home?labelName=" + tagName
              });
              this.bus.$emit("queryArticleByTagId", tagId)
            },
            showInitDate: function(oldDate,full){
                return initDate(oldDate,full)
            },

        },
        components: { //定义组件

        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           // '$route':'routeChange',
           // '$store.state.keywords':'routeChange',
         },
        created() { //生命周期函数

        },
        mounted() {

        },


}
</script>

<style>
/*分享标题*/
.shareTitle{
    margin-bottom: 40px;
    position: relative;
    border-radius: 5px;
    background: #fff;
    padding:15px;
}
.shareclassTwo{
    width:100%;
}
.shareclassTwo li{
    display: inline-block;
}
.shareclassTwo li a{
    display: inline-block;
    padding:3px 7px;
    margin:5px 10px;
    color:#fff;
    border-radius: 4px;
    background: #64609E;
    border: 1px solid #64609E;
    transition: transform 0.2s linear;
    -webkit-transition: transform 0.2s linear;
}
.shareclassTwo li a:hover{
    transform: translate(0,-3px);
    -webkit-transform: translate(0,-3px);
}
.shareclassTwo li a.active{
    background: #fff;
    color:#64609E;

}
/*文章列表*/
    .sharelistBox{
        transition: all 0.5s ease-out;
        font-size: 15px;
    }


    /*.sharelistBox .viewmore a:hover,.s-item .viewdetail a:hover{
        background: #48456C;
    }*/
.sharelistBox .s-item.tcommonBox .tags {
  border-top: solid;
  border-top-width: 1px;
  border-top-color: lightgrey;
}
.sharelistBox .s-item.tcommonBox .tags a {
  margin: 7px 5px;
  text-align: center;
  display: inline-block;
  position: relative;
  color: rgba(0, 0, 0, 0.4);
  background: #97dffd;
  height: 20px;
  transition: all 0.3s ease-in-out;
}
.sharelistBox .s-item.tcommonBox .tags a:hover {
  background: #f4692c;
  cursor: pointer;
}
.sharelistBox .s-item.tcommonBox .tags a span {
  text-decoration: none;
  font-size: 16px;
  font-style: normal;
}
</style>
