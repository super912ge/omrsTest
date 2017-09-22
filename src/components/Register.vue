<template>

  <div id="register">
    <el-card>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <el-form label-position="right" label-width="120px" :model="newUser" ref="registerForm">
            <el-form-item label="Username">
              <el-input placeholder="Username" v-model="newUser.username"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="pass">
              <el-input placeholder="Password" v-model="newUser.password"></el-input>
            </el-form-item>
            <el-form-item label="Confirm Password" prop="checkPass">
              <el-input placeholder="Confirm Password" v-model="newUser.confirmPassword"></el-input>
            </el-form-item>
            <el-form-item label="First Name">
              <el-input placeholder="First Name" v-model="newUser.firstName"></el-input>
            </el-form-item>
            <el-form-item label="Last Name">
              <el-input placeholder="Last Name" v-model="newUser.lastName"></el-input>
            </el-form-item>
            <el-form-item label="Email">
              <el-input placeholder="Email" v-model="newUser.email"><template slot="append">@proship.com</template></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="register('newUser')">Register</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  /* eslint-disable brace-style */

  export default {
    name: 'Register',
    data () {
      var validateConfirmPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter password again!'))
        } else if (value !== this.newUser.confirmPassword) {
          callback(new Error('Passwords are different!'))
        } else {
          callback()
        }
      }

      var validatePass = (rule, value, callback) => {
        if (value === '') { callback(new Error('Please enter password!')) }
        else callback()
      }
      return {
        newUser: {
          username: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          email: ''

        },
        rule: {
          checkPass2: [
            {validator: validateConfirmPass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      register () {
        this.$refs['registerForm'].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      sub () { console.log('') }
    }
  }

</script>
