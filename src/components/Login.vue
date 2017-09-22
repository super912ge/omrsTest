

<template>

  <div id="login">
    <div style="margin-top: 15%"></div>
    <el-card>

      <el-row type="flex; width:100%" justify="center" >

        <el-col :span="20">
          <el-form :labelPosition="labelPosition" :labelWidth="labelWidth" :model="formLogin" :ref="formLogin">
            <el-form-item label="Username">
              <el-input placeholder="Username" v-model="formLogin.username"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input placeholder="Password" v-model="formLogin.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login">Login</el-button>
              <router-link to="/register"><el-button type="text">New User
                <i class="el-icon-arrow-right el-icon--right"></i></el-button></router-link>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>

  </div>
</template>
<script>
  import Element from 'element-ui'
  import Vue from 'vue'
  import {getAccessToken} from '@/utils/api'
  Vue.use(Element)
  var vueAuthenticate = require('vue-authenticate')

export default {
    name: 'Login',
    data () {
      return {
        labelPosition: 'left',
        labelWidth: '80px',
        formLogin: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        getAccessToken(this.formLogin.username, this.formLogin.password)
      }
    }

  }

//  const getAccessToken = (username, password) => {
//    console.log(username, password)
//  }
  console.log(vueAuthenticate)

</script>
