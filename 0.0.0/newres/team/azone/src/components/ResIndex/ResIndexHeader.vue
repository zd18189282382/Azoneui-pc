<template>
  <div class="header">
    <header>
      <div class="logotext">
        <span>Azone后台管理系统</span>
      </div>
      <div class="headright">
        <ul>
          <li class="headli1"><span class="iconfont">&#xe62d</span></li>
          <li>个人中心</li>
          <li>修改密码</li>
          <li>退出</li>
        </ul>
      </div>
    </header>
  </div>

</template>

<script>
    export default {
        name: "ResIndexHeader"
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 32px;
  }
 header{
   height: 32px;
   width: 100%;
   background:#2b7ac0;
   position:fixed;
 }
  .logotext{
    width: 30%;
    height: 32px;
    float: left;
    padding-left: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
 .logotext span{
   font-size: 16px;
   font-weight: 600;
   color: #fff;
   line-height: 32px;
   font-family:Microsoft JhengHei;
 }
  .headright{
    width: 70%;
    float: right;
    height: 32px;
    line-height: 32px;
  }
 .headright ul{
   float: right;
   margin-right: 3%;
   height: 32px;
   width: 25%;
 }
 .headright ul>*{
   float: left;
 }
 .headright ul li{
   color: #fff;
   margin-right: 10%;
   cursor: pointer;
 }
 .headli1 span{
   font-size: 18px;
 }
</style>
