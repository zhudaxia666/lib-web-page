<template>
  <div id="app">
    <!-- <img class="bg" src="./assets/red-bg.jpg" alt="Logo"> -->
    <!-- 布局格式为左，上，中 -->
    <el-container>
        <el-header>
            <el-menu
                :default-active="$route.path" 
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#f8f9fa"
                text-color="#212529"
                active-text-color="#409eff" router>
                <!-- router-link默认渲染成<a>标签，可以使用tag属性生成别的标签例如：tag="li" -->
                <el-menu-item index="/"><router-link :to="{name:'Header'}">首页</router-link></el-menu-item>
                <el-menu-item index="/introduct/meb2017"><router-link :to="{name:'Meb2017'}">实验室介绍</router-link></el-menu-item>
                <el-menu-item index="/member" ><router-link :to="{name:'Member'}">学术报告</router-link></el-menu-item>
                <el-menu-item index="/show"><router-link :to="{name:'Show'}">科研项目</router-link></el-menu-item>
                <el-menu-item index="/download"><router-link :to="{name:'Download'}">在线演示</router-link></el-menu-item>
                <el-menu-item index="/contact"><router-link :to="{name:'Contact'}">多彩生活</router-link></el-menu-item>
            </el-menu>
        </el-header>
        
        
    </el-container>
    

    <!-- <img src="./assets/logo.png"> -->
    <!-- 用router-view渲染视图 -->
    


    <router-view></router-view>
    <footer class="footer">
            <div class="container">
                <div class="bottom">
                          <strong>东北大学情感分析实验室</strong>  <br/>
                          电话 : 111111111 &nbsp;&nbsp;
                          传真 : 222222222&nbsp;&nbsp; 
                          Email : 33333333333 <br/>
                          地址: 辽宁省沈阳市浑南新区东北大学浑南校区信息馆 &nbsp;&nbsp;
                          版权所有：东北大学 ICP备案号：55555555

                </div>
            </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>

.el-menu-vertical-demo{
  padding-left: 10px
   
}
/* .tac .el-menu{
  padding-left: 10px
}
.tac li{
    padding-left: 30px
}
.tac .el-menu-item {
    text-align: left;
    
} */
.el-menu{
  /* padding-left: 600px */
}
.el-menu-item{
  font-size: 20px;

}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* margin-top: 60px; */
}
#contain{
  border: 1px solid red;
  height: 110px;
}
/* .el-menu{
    padding-left: 900px;
} */
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
