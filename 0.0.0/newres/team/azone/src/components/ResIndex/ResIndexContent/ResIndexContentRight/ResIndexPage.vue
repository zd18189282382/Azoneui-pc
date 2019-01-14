<template>
  <div class="page">
      <div class="welcome">
        <p>√ 欢 迎 使 用 Azone 后 台 管 理 系 统 (v1.0),你 本 次 登录 时 间 为 <span>{{nowTime}}</span></p>
      </div>
      <div class="modules">
        <div class="module">
          <img src="../../../../assets/img/resmodule1.jpg">
          <div class="moduleText">
            <p>34522</p>
            <p>商城用户</p>
          </div>
        </div>
        <div class="module">
          <img src="../../../../assets/img/resmodule2.jpg">
          <div class="moduleText">
            <p>140</p>
            <p>分销记录</p>
          </div>
        </div>
        <div class="module">
          <img src="../../../../assets/img/resmodule3.jpg">
          <div class="moduleText">
            <p>345</p>
            <p>商城订单</p>
          </div>
        </div>
        <div class="module">
          <img src="../../../../assets/img/resmodule4.jpg">
          <div class="moduleText">
            <p>34522</p>
            <p>商城用户</p>
          </div>
        </div>
      </div>
      <div class="tables">
        <table cellspacing="0" border="1" width="25%" >
          <div class="thead">
            <tr>
              <td>订单统计信息</td>
            </tr>
          </div>
          <div class="tbody">
            <tr>
              <td>未处理订单:</td>
              <td><span>0</span>个</td>
            </tr>
            <tr>
              <td>待发货订单:</td>
              <td><span>10</span>个</td>
            </tr>
            <tr>
              <td>待结算订单:</td>
              <td><span>13</span>个</td>
            </tr>
            <tr>
              <td>已成交订单数:</td>
              <td><span>26</span>个</td>
            </tr>
          </div>
        </table>
        <table cellspacing="0" border="1" width="25%" >
          <div class="thead">
            <tr>
              <td>商品统计信息</td>
            </tr>
          </div>
          <div class="tbody">
            <tr>
              <td>商品总数:</td>
              <td><span>346</span>个</td>
            </tr>
            <tr>
              <td>回收站总数:</td>
              <td><span>10</span>个</td>
            </tr>
            <tr>
              <td>上架商品:</td>
              <td><span>13</span>个</td>
            </tr>
            <tr>
              <td>下架商品:</td>
              <td><span>26</span>个</td>
            </tr>
          </div>
        </table>
        <table cellspacing="0" border="1" width="25%" >
          <div class="thead">
            <tr>
              <td>会员登录统计信息</td>
            </tr>
          </div>
          <div class="tbody">
            <tr>
              <td>注册会员登录:</td>
              <td><span>3240</span>次</td>
            </tr>
            <tr>
              <td>新浪会员登录:</td>
              <td><span>1130</span>个</td>
            </tr>
            <tr>
              <td>QQ会员登录:</td>
              <td><span>1130</span>个</td>
            </tr>
            <tr>
              <td>支付宝登录:</td>
              <td><span>1130</span>个</td>
            </tr>
          </div>
        </table>
        <table cellspacing="0" border="1" width="25%" class="lastTable">
          <div class="thead">
            <tr>
              <td>最新消息</td>
            </tr>
          </div>
          <div class="tbody">
            <tr>
              <td>
                 <span class="iconfont">&#xe610;</span>
                <a>后台系统开通了</a>
              </td>
            </tr>
            <tr>
              <td>
                <span class="iconfont">&#xe610;</span>
                <a>后台系统又开通了</a>
              </td>
            </tr>
            <tr>
              <td>
                <span class="iconfont">&#xe610;</span>
                <a>后台系统又又开通了</a>
              </td>
            </tr>
            <tr>
              <td>
                <span class="iconfont">&#xe610;</span>
                <a>后台系统又又又开通了</a>
              </td>
            </tr>
            <tr>
              <td>
                <span class="iconfont">&#xe610;</span>
                <a>后台系统又又又又开通了</a>
              </td>
            </tr>
          </div>
        </table>
      </div>
      <div class="divha">
        <div class="divp divp1">
          <img src="../../../../assets/img/icon-addp.png">
          <p>添加商品</p>
        </div>
        <div class="divp divp2">
          <img src="../../../../assets/img/icon-cpgl.png">
          <p>产品分类</p>
        </div>
        <div class="divp divp3">
          <img src="../../../../assets/img/icon-grxx.png">
          <p>个人信息</p>
        </div>
        <div class="divp divp4">
          <img src="../../../../assets/img/xtsz.png">
          <p>系统设置</p>
        </div>
        <div class="divp divp5">
          <img src="../../../../assets/img/icon-gwcc.png">
          <p>商品订单</p>
        </div>
        <div class="divp divp6">
          <img src="../../../../assets/img/icon-ad.png">
          <p>添加广告</p>
        </div>
        <div class="divp divp7">
          <img src="../../../../assets/img/icon-addwz.png">
          <p>添加文章</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ResIndexPage",
      data() {
        return {
          nowTime:''
        };
      },
      methods: {
        // 获取当前时间函数
        timeFormate(timeStamp) {
          let year = new Date(timeStamp).getFullYear();
          let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
          let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
          let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
          let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
          let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
          this.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+":"+ss;
          // console.log(this.nowTime);
        },
        // 定时器函数
        nowTimes(){
          this.timeFormate(new Date());
          setInterval(this.nowTimes,1000);
        }
      },
      mounted(){
        this.nowTimes();
      }
    }
</script>

<style scoped>
  .page{
    padding: 20px 15px 60px;
    width: 80%;
    overflow-y: auto;
  }
  .page::-webkit-scrollbar{
    display: none;
  }
  .welcome{
    padding:15px 250px;
    padding-right: 200px;
    background:#dff0d8 ;
    border: 1px solid #d6e9c6;
  }
  .welcome p {
    font-size: 14px;
    color: #8faa46;
  }
  .modules{
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 20px;
    overflow: hidden;
  }
  .module{
    border: 1px solid #dddddd;
    overflow: hidden;
    width:49%;
    float:left;
    margin-bottom: 15px;
  }
  .module:nth-child(1){
    margin-right: 20px;
  }
  .module:nth-child(3){
    margin-right: 20px;
  }
  .module img{
    float: left;
  }
  .moduleText{
    float: left;
    padding-top:27px;
    padding-left:108px;
    color: #666;
  }
  .moduleText p:nth-child(1){
    font-size:30px;
    line-height: 1;
    margin-bottom: 10px;
    font-weight: 400;
  }
  .moduleText p:nth-child(2){
    font-size:14px;
    line-height: 1;
  }
  .tables{
    overflow: hidden;
  }
  table{
    color: #393939;
    border-color: #ddd;
    float: left;
    margin-right: 15px;
    margin-bottom: 20px;
  }
  .thead{
    font-size:16px ;
    line-height: 2;
    background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%);
  }
  .tbody{
    font-size: 14px;
    line-height: 2;
  }
  .thead td{
    width: 280px;
    padding-left: 15px;
  }
  .tbody td:nth-child(1){
    width:120px;
    padding-left: 15px;
  }
  .tbody td:nth-child(2){
    width:150px;
    padding-left: 60px;
  }
  td{
    height: 34px;
  }
  td span{
    color: red;
  }
  .lastTable .tbody td{
    width: 280px;
  }
  .divha{
    border: 1px solid #dddddd;
    padding: 10px;
    margin: 15px 0px;
    overflow:hidden;
  }
  .divp{
    font-size: 13px;
    padding: 4px 9px;
    line-height: 1.39;
    text-align: center;
    color: #fff;
    float: left;
    margin-right:5px;
    cursor: pointer;
  }
  .divp1{
    background:#6fb3e0 ;
    border:4px solid #6fb3e0;
  }
  .divp1:hover{
    background-color: #4f99c6;
    border-color: #6fb3e0;
  }
  .divp2{
    background:#1b6aaa ;
    border:4px solid #1b6aaa;
  }
  .divp2:hover{
    background-color: #1b6aaa;
    border-color: #428bca;
  }
  .divp3{
    background:#629b58 ;
    border:4px solid #629b58;
  }
  .divp3:hover{
    background-color: #629b58;
    border-color: #87b87f;
  }
  .divp4{
    background:#4f99c6 ;
    border:4px solid #4f99c6;
  }
  .divp4:hover{
    background-color: #4f99c6;
    border-color: #6fb3e0;
  }
  .divp5{
    background:#7461aa ;
    border:4px solid #7461aa;
  }
  .divp5:hover{
    background-color: #7461aa;
    border-color: #9585bf;
  }
  .divp6{
    background:#b73766 ;
    border:4px solid #b73766;
  }
  .divp6:hover{
    background-color: #b73766;
    border-color: #d6487e;
  }
  .divp7{
    background:#4f99c6 ;
    border:4px solid #4f99c6;
  }
  .divp7:hover{
    background-color: #4f99c6;
    border-color: #6fb3e0;
  }
  .divp p{
    font-size: 15px;
    font-weight: normal;
    font-family: "Microsoft YaHei",Helvetica,Arial,sans-serif;
  }
</style>
