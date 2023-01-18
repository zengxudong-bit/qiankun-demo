<template>
  <div class="home-content">
    <h1>This is home page</h1>
    <input type="text" v-model="token" >
    <button @click="changeToken">修改全局Token</button>
  </div>
</template>

<script>
import actions from '../qiankun/qiankun-actions';
import { onMounted, ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const token = ref('');

    // actions.onGlobalStateChange((state,prev)=>{
    //   // console.log(state,prev,'Vue -- Home页监听数据');
    //   token.value = state.globalToken;
    // });
    
    const changeToken = () => {
      actions.setGlobalState({globalToken:'我是vue修改的新token'+token.value});
    }

    return {
      token,
      changeToken
    };
  }
};
</script>

<style>
.home-content {
  color: red;
}
</style>
