<template>
  <div class="conterheader">
    <div class="contentheader">
      <div class="chleft">
        <img src="../../../assets/img/resindexlogo.png">
        <span>为你所想 为你所乐</span>
      </div>
      <div class="chright">
        <ul>
          <router-link tag="li" to="/ResIndexPage" >
            <span class="iconfont">&#xe63e;</span>
            <p>首页</p>
          </router-link>
          <router-link tag="li" to="/ResIndexContentRightOne" >
            <span class="iconfont">&#xe62c;</span>
            <p>基本设置</p>
          </router-link>
          <router-link tag="li" to="/ResIndexContentRightOne" >
            <span class="iconfont">&#xe6db;</span>
            <p>订单管理</p>
          </router-link>
          <router-link tag="li" to="/ResIndexContentRightOne" >
            <span class="iconfont">&#xe6e2;</span>
            <p>商品管理</p>
          </router-link>
          <router-link tag="li" to="/ResIndexContentRightOne" >
            <span class="iconfont">&#xe63e;</span>
            <p>代言人管理</p>
          </router-link>
          <router-link tag="li" to="/ResIndexContentRightOne" >
            <span class="iconfont">&#xe7f6;</span>
            <p>员工管理</p>
          </router-link>
          <router-link tag="li" to="/ResIndexContentRightOne" >
            <span class="iconfont">&#xe608;</span>
            <p>资金管理</p>
          </router-link>
          <router-link tag="li" to="/ResIndexContentRightOne" >
            <span class="iconfont">&#xe626;</span>
            <p>销售统计</p>
          </router-link>
          <router-link tag="li" to="/ResIndexContentRightOne" >
            <span class="iconfont">&#xe7d1;</span>
            <p>营销管理</p>
          </router-link>
          <router-link tag="li" to="/ResIndexContentRightOne" >
            <span class="iconfont">&#xe683;</span>
            <p>系统管理</p>
          </router-link>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "ResIndexContentHeader"
    }
</script>

<style scoped>
  .conterheader{
    height: 47px;
    width: 100%;
  }
  .contentheader{
    height:47px ;
    background: #2a3950;
    width: 100%;
    position: fixed;
  }
  .chleft{
    padding-left: 20px;
    float: left;
    width: 20%;
    height: 47px;
 }
  .chleft img{
    width: 30px;
    height: 30px;
    margin-right: 20px;
    margin-top: -7px;
  }
  .chleft span{
    font-size:18px ;
    color: #fff;
    line-height: 47px;
  }
  .chright{
    float: right;
    width: 80%;
    background: #374760;
    height: 47px;
    color: #fff;
  }
  .chright ul{
    overflow: hidden;
  }
  .chright ul>* {
    float: left;
  }
  .chright ul li{
    line-height: 1;
    width: 8%;
    text-align: center;
    border-left: 1px solid #27374e;
    height: 47px;
    padding-top: 8px;
    cursor: pointer;
  }
  .chright ul li p{
    margin-top: 3px;
  }
  .active{
    border-bottom: 2px solid #fd876b;
    color: #fd876b;
  }
</style>
