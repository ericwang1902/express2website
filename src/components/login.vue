<template>
    <div style="height:100%">
       
     <el-row :gutter="20" style="margin-top: 150px;">
        <el-col :span="12" :offset="6">
            <el-card class="box-card">
                  <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">用户登录</span>
                    </div>
                    <el-row>
                        <el-col :span="6">用户名</el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <el-input  placeholder="请输入用户名" ></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">密码</el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <el-input  placeholder="请输入手机号" ></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" >
                         <el-col :span="12" :offset="6">
                            <el-button type="primary">登录</el-button>
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

      }
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
.el-row{
    margin-bottom:20px;
}
</style>
