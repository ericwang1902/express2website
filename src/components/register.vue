<template>
    <div style="height:100%;align-items: center;display: flex">

        <el-row :gutter="20" style="width: 100%">
        <el-row :gutter="20" >
            <el-col :span="12" :offset="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">用户注册</span>
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
                    <el-row>
                        <el-col :span="6">密码确认</el-col>
                        <el-col :span="18">
                            <div class="grid-content bg-purple">
                                <el-input  placeholder="请再次输入密码" ></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" >
                        <el-col :span="12" :offset="6">
                            <el-button type="primary">注册</el-button>
                            <el-button type="text" native-type="button" @click.native="gotologin">登录</el-button>
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
      msg: '注册'
    }
  },
    methods:{
        gotologin:function () {
            this.$router.push('/')
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
