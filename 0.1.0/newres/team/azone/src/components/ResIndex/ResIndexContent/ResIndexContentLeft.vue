<template>
  <div class="centerleft">
      <div class="contentleft">
        <ul class="ulone">
          <li>
            <div class="clickdiv">
              <span>系统管理</span>
              <span class="iconfont">&#xe731;</span>
            </div>
            <div class="displaynone">
              <ul>
                <router-link  tag="li" to="/ResIndexSeystemSttings">系统设置</router-link>
                <router-link  tag="li" to="/ResIndexSystemManagement">系统栏目管理</router-link>
                <router-link  tag="li" to="/ResIndexSystemLog">系统日志</router-link>
              </ul>
            </div>
          </li>
          <li>
            <div class="clickdiv">
              <span>支付管理</span>
              <span class="iconfont">&#xe731;</span>
            </div>
            <div class="displaynone">
              <ul>
                <router-link tag="li" to="/ResIndexAccountManagement">账户管理</router-link>
                <router-link tag="li" to="/ResIndexPayment">支付方式</router-link>
                <router-link tag="li" to="/ResIndexConfiguration">支付配置</router-link>
              </ul>
            </div>
          </li>
          <li>
            <div class="clickdiv">
              <span>交易管理</span>
              <span class="iconfont">&#xe731;</span>
            </div>
            <div class="displaynone">
              <ul>
                <router-link  tag="li" to="/ResIndexTradingInformation">交易信息</router-link>
                <router-link  tag="li" to="/ResIndexTradingFigure">交易信息(图)</router-link>
                <router-link  tag="li" to="/ResIndexOrderManagement">订单管理</router-link>
                <router-link  tag="li" to="/ResIndexTransactionAmount">交易金额</router-link>
                <router-link  tag="li" to="/ResIndexOrderProcessing">订单处理</router-link>
                <router-link  tag="li" to="/ResIndexRefundManagement">退款管理</router-link>
              </ul>
            </div>
          </li>
          <li>
            <div class="clickdiv">
              <span>会员管理</span>
              <span class="iconfont">&#xe731;</span>
            </div>
            <div class="displaynone">
              <ul>
                <router-link  tag="li" to="/ResIndexMemberList">会员列表</router-link>
                <router-link  tag="li" to="/ResIndexLevelManagement">等级管理</router-link>
                <router-link  tag="li" to="/ResIndexMemberRecordManagement">会员记录管理</router-link>
              </ul>
            </div>
          </li>
          <li>
            <div class="clickdiv">
              <span>产品管理</span>
              <span class="iconfont">&#xe731;</span>
            </div>
            <div class="displaynone">
              <ul>
                <router-link  tag="li" to="/ResIndexBrandManagement">品牌管理</router-link >
                <router-link  tag="li" to="/ResIndexClassificationManagement">分类管理</router-link >
              </ul>
            </div>
          </li>
          <li>
            <div class="clickdiv">
              <span>消息管理</span>
              <span class="iconfont">&#xe731;</span>
            </div>
            <div class="displaynone">
              <ul>
                <router-link tag="li" to="/ResIndexMessageList">留言列表</router-link>
                <router-link tag="li" to="/ResIndexArticleList">文章列表</router-link>
                <router-link tag="li" to="/ResIndexFeedback">意见反馈</router-link>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import $ from "jquery"
  export default {
    name: "ResIndexContentLeft",
    mounted(){
      $(".clickdiv").each(function(i){
        $(this).click(function() {
          $(this).next().slideToggle();
        })
      })
    }
  }
</script>

<style scoped>
  .centerleft{
    width: 100%;
    display: flex;
    flex: 1;
    height: 578px;
    overflow: hidden;
  }
  .contentleft{
    width: 20%;
    padding-top: 8px;
    background: #374760;
    padding-bottom: 310px;
    color: #fff;
    overflow: hidden;
    height: 100%;
    overflow-y: auto;
  }
  .contentleft::-webkit-scrollbar{
    display: none;
  }
  .contentleft .ulone{
    background: #2a3950;
    width: 100%;
    border-top: 1px solid #36527a;
    border-bottom: 1px solid #36527a;
  }
  .clickdiv{
    padding-left: 47px;
    padding-bottom: 12px;
    padding-top: 12px;
  }
  .contentleft .ulone li{
    font-size:14px;
    cursor: pointer;
  }
  .active{
    border-left: 2px solid #fd876b;
    color: #fd876b;
  }
  .iconfont{
    line-height: 1.2;
    margin-left: 10px;
  }
  /*箭头旋转90度*/
  /*.selected{*/
  /*transform:rotate(-90deg);*/
  /*}*/
  .displaynone{
    display: none;
  }
  .displaynone ul li{
    padding-left: 80px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .displaynone ul li:hover{
    background: #374760;
  }
</style>
