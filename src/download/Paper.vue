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
        <h1>论文下载</h1>
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
