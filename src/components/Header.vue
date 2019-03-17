<template>
<div>

    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 3" :key="item">
        <h3 v-if="item===3"><img src="../assets/img/banner/ban2.png"></h3>
        <h3 v-if="item===1"><img src="../assets/img/banner/red-bg.jpg"></h3>
        <h3 v-if="item===2"><img src="../assets/img/banner/banner_bg.jpg"></h3>
        </el-carousel-item>
    </el-carousel>
<el-container>
  <el-aside width="250px">
      <el-row class="tac">
                  <el-col >
                    <!-- <h5>研究方向</h5> -->
                    <el-menu 
                      default-active="  "
                      class="el-menu-vertical-demo"
                      >
                      <h1>研究方向</h1>
                      <el-menu-item index="/direction1">
                      <router-link :to="{name:'Direct1'}">
                        <i class="el-icon-menu"></i>
                        自然语言处理
                      </router-link>
                      </el-menu-item>
                      <el-menu-item index="/direction2">
                      <router-link :to="{name:'Direct2'}">
                        <i class="el-icon-menu"></i>
                        文本挖掘与机器学习
                      </router-link>
                      </el-menu-item>
                      <el-menu-item index="/direction3">
                      <router-link :to="{name:'Direct3'}">
                        <i class="el-icon-menu"></i>
                        情感分析与观点挖掘
                      </router-link>
                      </el-menu-item>
                      <el-menu-item index="/direction4">
                      <router-link :to="{name:'Direct4'}">
                        <i class="el-icon-menu"></i>
                        大数据与深度学习
                      </router-link>
                      </el-menu-item>
                    <!-- </el-menu> -->
                  <!-- </el-col> -->
      <!-- </el-row> -->
      <br>
      <!-- <el-row class="tac"> -->
                  <!-- <el-col > -->
                    <!-- <h5>研究方向</h5> -->
                    <!-- <el-menu 
                      default-active=""
                      class="el-menu-vertical-demo"
                      > -->
                      <h1>资源下载</h1>
                      <el-menu-item index="/data">
                      <router-link :to="{name:'Data'}">
                        <i class="el-icon-document"></i>
                        数据集下载
                      </router-link>
                      </el-menu-item>
                      <el-menu-item index="/datum">
                      <router-link :to="{name:'Datum'}">
                        <i class="el-icon-document"></i>
                        学习资料下载
                      </router-link>
                      </el-menu-item>
                      <el-menu-item index="/paper">
                      <router-link :to="{name:'Paper'}">
                        <i class="el-icon-document"></i>
                        学术论文下载
                      </router-link>
                      </el-menu-item>
                      <el-menu-item index="/other">
                      <router-link :to="{name:'Other'}">
                        <i class="el-icon-document"></i>
                        其他下载
                      </router-link>
                      </el-menu-item>
                    </el-menu>
                  </el-col>
      </el-row>
  </el-aside>
  
  <el-main>
    <div>
        <div class="container">
            <div class="row">
                <!-- <div class="col-lg-5">
                    <img src="../assets/img/about_3.jpg" style="width:100%;">
                </div> -->
                <div class="col-lg-12 about">
                    <h1><strong>欢迎来到东北大学情感分析实验室</strong></h1>
                    <p style="font-size: large;text-align:left;font-family:MicrosoftJhengHei;color:black">&nbsp;&nbsp;&nbsp;&nbsp;东北大学情感分析实验室是中国首家融合大数据分析与“互联网+政企”技术的高科技实验室，致力于以帮助政府和企业实现数据驱动决策。多睿科技以大数据应用技术为依托，以大数据融合为核心、以政府公共服务平台为载体、以“互联网+”模式为驱动，以政务服务和公共服务为着力点，以数据开放为培育点，以协助客户实现“数据驱动决策”为目标。</p>
                    <p style="font-size: large;text-align:left;font-family:MicrosoftJhengHei;color:black">&nbsp;&nbsp;&nbsp;&nbsp;东北大学情感分析实验室信息检索实验室主要从事信息检索、搜索引擎、文本挖掘、自然语言处理、机器学习、生物信息学方向研究。主要研究课题：查询理解与重构、排序学习、计算广告、跨语言检索、情感分析、观点挖掘、汉语情感语义资源建设、舆情分析、博客和微博的倾向性分析、地理搜索、移动搜索、音乐检索、社区发现、趋势分析、信息推荐、信息抽取、生物医学的文本挖掘。欢迎企业界和学术界的各位同仁光临指导</p>
                    <p style="font-size: large;text-align:left;font-family:MicrosoftJhengHei;color:black">&nbsp;&nbsp;&nbsp;&nbsp;东北大学情感分析实验室是中国首家融合大数据分析与“互联网+政企”技术的高科技实验室，致力于以帮助政府和企业实现数据驱动决策。多睿科技以大数据应用技术为依托，以大数据融合为核心、以政府公共服务平台为载体、以“互联网+”模式为驱动，以政务服务和公共服务为着力点，以数据开放为培育点，以协助客户实现“数据驱动决策”为目标。</p>
                    <p style="font-size: large;text-align:left;font-family:MicrosoftJhengHei;color:black">&nbsp;&nbsp;&nbsp;&nbsp;东北大学情感分析实验室信息检索实验室主要从事信息检索、搜索引擎、文本挖掘、自然语言处理、机器学习、生物信息学方向研究。主要研究课题：查询理解与重构、排序学习、计算广告、跨语言检索、情感分析、观点挖掘、汉语情感语义资源建设、舆情分析、博客和微博的倾向性分析、地理搜索、移动搜索、音乐检索、社区发现、趋势分析、信息推荐、信息抽取、生物医学的文本挖掘。欢迎企业界和学术界的各位同仁光临指导</p>
                    <p style="font-size: large;text-align:left;font-family:MicrosoftJhengHei;color:black">&nbsp;&nbsp;&nbsp;&nbsp;东北大学情感分析实验室是中国首家融合大数据分析与“互联网+政企”技术的高科技实验室，致力于以帮助政府和企业实现数据驱动决策。多睿科技以大数据应用技术为依托，以大数据融合为核心、以政府公共服务平台为载体、以“互联网+”模式为驱动，以政务服务和公共服务为着力点，以数据开放为培育点，以协助客户实现“数据驱动决策”为目标。</p>
                    <p style="font-size: large;text-align:left;font-family:MicrosoftJhengHei;color:black">&nbsp;&nbsp;&nbsp;&nbsp;东北大学情感分析实验室信息检索实验室主要从事信息检索、搜索引擎、文本挖掘、自然语言处理、机器学习、生物信息学方向研究。主要研究课题：查询理解与重构、排序学习、计算广告、跨语言检索、情感分析、观点挖掘、汉语情感语义资源建设、舆情分析、博客和微博的倾向性分析、地理搜索、移动搜索、音乐检索、社区发现、趋势分析、信息推荐、信息抽取、生物医学的文本挖掘。欢迎企业界和学术界的各位同仁光临指导</p>
                </div>
            </div>  
        </div>
    </div>
  </el-main>
</el-container>
            
</div>

</template>

<script>

export default {
    name: 'Header',
    
}
</script>

<style scoped>
li{
    padding-left: 30px
}
.el-menu-item {
    text-align: left;
    
}
/* span{
    align: left
} */
.el-carousel__item:nth-child(2n) {
    background-color:azure;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color:azure;
  }
</style>
