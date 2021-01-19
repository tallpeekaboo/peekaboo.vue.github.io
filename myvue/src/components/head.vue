<template>
  <div>
    <div
      class="ud-app-loader ud-component--header-v6--header udlite-header"
      data-module-id="common/udlite/desktop"
      data-module-args='{"isInstructorSignupEnabled":false,"isLoggedIn":false,"tryUFBPlacements":{"bar":"ufb_header","profile":"account-menu","mobile":"ufb_header"},"mobileAppLink":{"url":"/mobile/"},"searchPhrase":null}'
      data-module-priority="-10"
    >
      <div data-unique-id="339" style="display: none"></div>

      <div
        class="udlite-text-sm header--header--3sK1h header--flex-middle--2Xqjv"
        data-purpose="header"
      >
        <div class="skip-to-content-button--skip-to-content--1MoIi">
          <button
            type="button"
            class="udlite-btn udlite-btn-large udlite-btn-primary udlite-heading-md skip-to-content-button--skip-to-content-btn--3Uakj"
          >
            <span
              aria-hidden="true"
              class="skip-to-content-button--skip-to-content-shadow--eBW6V"
            ></span
            ><span style="margin: 0">跳转至目录</span>
          </button>
        </div>
        <a href="/" class="header--flex-middle--2Xqjv header--logo--bdAod"
          ><img
            src="../assets/static/picture/logo-coral.svg"
            alt="Udemy"
            width="110"
            height="32"
        /></a>
        <nav
          class="header--gap-button--3bIww popper--popper--19faV popper--popper-hover--4YJ5J"
        >
          <span class="udlite-text-sm header--dropdown-button-text--2jtIM"
            >类别</span
          >
        </nav>

        <div
          class="udlite-search-form-autocomplete header--search-bar--1_mS0 udlite-form-group"
        >
          <label
            class="udlite-sr-only udlite-form-label udlite-heading-sm"
            for="u339-search-form-autocomplete--3"
            >搜索任何内容</label
          >

          <input
            placeholder="搜索任何内容"
            name="q"
            autoComplete="off"
            value=""
            id="u339-search-form-autocomplete--3"
            class="udlite-text-input udlite-text-input-small udlite-text-sm udlite-search-form-autocomplete-input js-header-search-field"
          />
        </div>
        <div style="flex: 1"></div>
        <div v-if="username">欢迎"<b><span @click="junp">{{username}}</span></b>"来到首页&emsp;&emsp;<b v-for="item in user" :key="item.id"><van-image round width="3rem" height="3rem" :src="'http://127.0.0.1:8000/' + item.img"/></b></div>
        <div v-else>
          <router-link to="mylogin"><van-button type="primary" size="mini">登&emsp;录</van-button></router-link>&emsp;&emsp;
          <router-link to="myregister"><van-button type="primary" size="mini">注&emsp;册</van-button></router-link>&emsp;&emsp;
        </div>
        &emsp;&emsp;<van-button type="primary" size="mini" v-show="username!=null" @click="out">注&emsp;销</van-button>
      </div>
    </div>

    <div
      class="ud-app-loader ud-component--ui-feedback--ui-feedback"
      data-module-id="common/udlite/desktop"
      data-module-args='{"uiMessages":[]}'
      data-module-priority="-10"
    ></div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username:localStorage.getItem('username'),
      token:localStorage.getItem('token'),
      user:[],
      access:[],
    };
  },
  methods: {
    //注销用户
    out(){
      localStorage.removeItem('username')
      localStorage.removeItem('token')
      this.$router.push('mylogin')
    },
    
    
    junp(){
      this.$router.push('myhome')
    },
  },
  created() {
      if(this.token){
          axios({
            url:'http://127.0.0.1:8000/user/',
            method:'get',
            params:{
                token:this.token
                }
          }).then(resp=>{
              console.log(resp.data)
              this.user = resp.data
          })
      }else{
        return false
      }
  },
};
</script>

<style scoped>
</style>
