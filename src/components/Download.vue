<template>
    <div style="padding-top:30px">
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
    <h1>在线演示</h1>
  </el-main>
</el-container>
    </div>
</template>

<script>

// import $ from 'jquery'
export default {
    name:'Member'
}



</script>

<style scoped>
 li{
    padding-left: 30px
}
 .el-menu-item {
    text-align: left; 
}
.title{
    text-align: center;
    font-size: 25px;
    font-family: "PingFang SC";
}
.contect ul li{
    text-align: left;
    list-style-type:none;
    line-height: 40px;
    font-size: 20px;
    padding-top: 25px;
}

/*  */
</style>
