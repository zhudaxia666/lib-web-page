<template>
    <div>
    <!--breadcrumbs start-->
    <div class="breadcrumbs">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12" align="center">
                    <h1>实验室介绍</h1>
                </div>
            </div>
        </div>
    </div>
    <!--breadcrumbs end-->
       <!--container start-->
    <div>
        <el-container>
  <el-aside width="250px">
      <el-row class="tac">
                  <el-col >
                    <!-- <h5>研究方向</h5> -->
                    <el-menu 
                      class="el-menu-vertical-demo"
                      >
                      <h1 style="padding-left:20px ;text-align:left;line-height:50px"><strong>指导老师</strong></h1>
                      <div class="left" style="text-align:left;padding-left:40px">
                          <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><router-link to="/introduct/meb2017">韩东红</router-link></li>
                        <!-- <ul>
                            <li style="font-size:20px"><i class="el-icon-arrow-right"></i><a href="javascript:void(0);">韩东红</a></li>
                        </ul> -->
                       </div>
                    </el-menu>
                  </el-col>
      </el-row>
      <br>
      <el-row class="tac">
                  <el-col >
                    <!-- <h5>研究方向</h5> -->
                    <el-menu 
                      class="el-menu-vertical-demo"
                      >
                      <h1 style="padding-left:20px ;text-align:left;line-height:50px"><strong>实验室成员</strong></h1>
                      <div class="left" >
                        <ul>
                            <!-- <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><a href="javascript:void(0);">白霖</a></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><a href="javascript:void(0);">蔡从浩</a></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><a href="javascript:void(0);">贾云龙</a></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><a href="javascript:void(0);">林雪原</a></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><a href="javascript:void(0);">朱帅伟</a></li> -->
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><router-link to="/introduct/meb20171">白霖</router-link></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><router-link to="/introduct/meb20171">蔡从浩</router-link></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><router-link to="/introduct/meb20171">贾云龙</router-link></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><router-link to="/introduct/meb20171">林雪原</router-link></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><router-link to="/introduct/meb20171">朱帅伟</router-link></li>

                        </ul>
                       </div>
                    </el-menu>
                  </el-col>
      </el-row>
      <br>
      <el-row class="tac">
                  <el-col >
                    <!-- <h5>研究方向</h5> -->
                    <el-menu 
                      class="el-menu-vertical-demo"
                      >
                      <h1 style="padding-left:20px ;text-align:left;line-height:50px"><strong>历届毕业生</strong></h1>
                      <div class="left" >
                        <ul>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><router-link to="/introduct/meb2016">2016届</router-link></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><router-link to="/introduct/meb2015">2015届</router-link></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><router-link to="/introduct/meb2014">2014届</router-link></li>
                            <li style="font-size:20px;line-height:50px"><i class="el-icon-arrow-right"></i><router-link to="/introduct/meb2013">2013届</router-link></li>
                            
                        </ul>
                       </div>
                    </el-menu>
                  </el-col>
      </el-row>
  </el-aside>
  
  <el-main>
      <router-view></router-view>
  </el-main>
</el-container>
    </div>

      
<div class="member">
    <span></span>
    <span></span>
</div>
    </div>
</template>

<script>
export default {
    name:'Introduct',
}
</script>

<style scoped>
/* @import '../assets/css/introduct.css'; */
.el-menu-item {
    text-align: left;
    
}
.teacher em{
    line-height:10px
}
em{
    line-height:40px
}
.left ul li {
            line-height: 30px;
            overflow: hidden;
            text-align: left
        }
.breadcrumbs{
    padding:23px 0;
}
</style>
