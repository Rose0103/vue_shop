<template>
        <!-- 头部 -->
        <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>
                            <router-link class="login" to="/login">亲,请登录</router-link>
                            <router-link class="register" to="/register">免费注册</router-link>
                        </p>
                    </div>
                    <div class="typeList">
                        <a href="###">我的订单</a>
                        <a href="###">我的购物车</a>
                        <a href="###">联系客服</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link class="logo" to="/home">
                        <img src="@/assets/logo.png" alt="">
                    </router-link>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" v-model="keyWord" class="input-error input-xxlarge"/>
                        <button class="sui-btn btn-xlarge btn-danger" type="button" @click="searchBtn">搜索</button>
                    </form>
                </div>
            </div>
        </header>
</template>

<script>

  export default {
      data() {
          return {
              keyWord: ''
          }
      },
      methods: {
          searchBtn() {
              // 第一种写法
              this.$router.push("/search/" + this.keyWord + "?k=" + this.keyWord.toUpperCase())
              // 第二种写法
              this.$router.push({name: 'Search',params: {keyWord:this.keyWord},query:{k: this.keyWord.toUpperCase()}})
          }
      }
  }

</script>
<style lang='less' scoped>
 .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;
                        .login {
                            color: #f87d3a;
                        }
                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                            color: #666;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;
                        color: #666;
                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #f87d3a;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #f87d3a;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>