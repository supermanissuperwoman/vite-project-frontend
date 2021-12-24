<template>
  <div class="loginRootWrap">
    <el-form :data="formData" label-width="100px">
      <el-form-item label="账户">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码"
        ><el-input v-model="formData.password"></el-input
      ></el-form-item>
      <el-form-item>
        <el-button @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { login } from "../../server/index";
import { reactive, toRefs } from "vue";
import router from "../../router";

// 组件数据对象
const data = reactive({
  formData: {
    username: "",
    password: "",
  },
});
const { formData } = toRefs(data);

// 登录
const handleLogin = async () => {
  console.log(1);

  if (data.formData.username && data.formData.password) {
    console.log(2);
    const res = await login(data.formData.username, data.formData.password);
    console.log(res);
    if (res.status == 200 && res.data.message == "success") {
      router.push("/index");
    }
  }
};
</script>

<style lang="scss" scoped>
.loginRootWrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 40%;
    border: 1px solid red;
    background-color: skyblue;
    padding: 30px;
  }
}
</style>
