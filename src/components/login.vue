<template>
    <div style="height:100%;align-items: center;display: flex">
       
     <el-row :gutter="20" style="width: 100%;">
        <el-col :span="12" :offset="6">
            <el-card class="box-card">
                  <div slot="header" class="clearfix" >
                        <span style="line-height: 36px;">用户登录</span>
                    </div>
                    <el-row style="display: flex;align-items: center">
                        <el-col :span="6">手机号</el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <el-input  placeholder="请输入手机号" ></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row style="display: flex;align-items: center">
                        <el-col :span="6">密码</el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <el-input  placeholder="请输入密码" ></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" >
                         <el-col :span="12" :offset="6">
                            <el-button type="primary" native-type="button" @click.native="login">登录</el-button>
                             <el-button type="text" native-type="button" @click.native="gotoregister">注册</el-button>
                         </el-col>
                    </el-row>
            </el-card>
        </el-col>
    </el-row>
 </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue 4.0!'
    }
  },
    methods:{
      gotoregister:function () {
        this.$router.push('/register')
      },
        login:function () {
            this.$router.push('/console')
        }
      
    }
}
</script>

<style>
body {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.el-row{
    margin-bottom:20px;
}
</style>
