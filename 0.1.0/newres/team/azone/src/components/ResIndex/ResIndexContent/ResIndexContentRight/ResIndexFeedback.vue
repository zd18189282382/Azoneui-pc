<template>
<div class="feedback">
  <span class="bread">
      <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
      <a href="javascript:;"><cite>支付管理</cite></a>  /
      <router-link to="/ResFeedback"><cite>账户管理</cite></router-link>
    </span>
  <div class="search_style">
    <ul>
      <li>
        <p>留言</p>
        <input type="text" placeholder="输入留言信息">
      </li>
      <li>
        <el-date-picker v-model="value1" size="small" type="date" placeholder="选择日期"></el-date-picker>
      </li>
      <li>
        <button type="button" class="btn_search">查询</button>
      </li>
    </ul>
  </div>
  <div class="border_clearfix">
    <ul>
      <li><img src="../../../../assets/img/res_del.png"> 批量删除</li>
      <li><img src="../../../../assets/img/res_dui.png">已浏览</li>
      <li><img src="../../../../assets/img/res_cuo.png">未浏览</li>
      <li><img src="../../../../assets/img/res_wuxian.png">建议</li>
      <li><img src="../../../../assets/img/res_wuxian.png">投诉</li>
    </ul>
    <div class="count">
      共:<span>2334</span>条
    </div>
  </div>
  <div class="row">
    <div class="select">
      <label>每页显示条数: </label>
      <select>
        <option value="10">10</option>
        <option value="10">20</option>
        <option value="10">50</option>
        <option value="10">100</option>
      </select>
    </div>
    <div class="sousuo">
      <label>搜索：</label>
      <input type="text">
    </div>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th>
          <div class="check">
            <input type="checkbox" class="input_check checkall">
            <label></label>
          </div>
        </th>
        <th>ID</th>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th>留言内容</th>
        <th>时间</th>
        <th>状态</th>
        <th>类型</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr class="odd">
        <td>
          <div class="check">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>1</td>
        <td class="order_product_name">张小泉</td>
        <td>11111111111</td>
        <td>256564653@qq.com</td>
        <td class="liuyan">
          “第二届中国无锡水蜜桃开摘节”同时开幕，为期三个月的蜜桃季全面启动。值此京东“618品质狂欢节”之际，中国特产无锡馆限量上线618份8只装精品水蜜桃，61.8元全国包邮限时抢购。为了保证水蜜桃从枝头到达您的手中依旧鲜甜如初，京东采用递送升级服务，从下单到包装全程冷链运输。”</td>
        <td>2016-6-11 11:11:42</td>
        <td>
          <span class="label-success">已浏览</span>
        </td>
        <td>投诉</td>
        <td class="caozuo1">
          <span class="dell"><img src="../../../../assets/img/res_del.png"/></span>
        </td>
      </tr>
      <tr class="even">
        <td>
          <div class="check">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>1</td>
        <td class="order_product_name">张小泉</td>
        <td>11111111111</td>
        <td>56564653@qq.com</td>
        <td class="liuyan">
          “第二届中国无锡水蜜桃开摘节”同时开幕，为期三个月的蜜桃季全面启动。值此京东“618品质狂欢节”之际，中国特产无锡馆限量上线618份8只装精品水蜜桃，61.8元全国包邮限时抢购。为了保证水蜜桃从枝头到达您的手中依旧鲜甜如初，京东采用递送升级服务，从下单到包装全程冷链运输。”
        </td>
        <td>2016-6-11 11:11:42</td>
        <td>
          <span class="label-success">已浏览</span>
        </td>
        <td>投诉</td>
        <td class="caozuo1">
          <span class="dell"><img src="../../../../assets/img/res_del.png"/></span>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="NumberOfPages">
    <div class=numberpages>
      <div>第 1 到 3 条记录，共 3 条</div>
    </div>
    <div class="numberpages">
      <div class="pageright">
        <ul>
          <li><a href="javascript:;" class="prev">上一页</a></li>
          <li><a href="javascript:;" class="active">1</a></li>
          <li><a href="javascript:;" class="next">下一页</a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 反馈信息弹出框 -->
  <div class="liuyanCon">
    <div class="fankiuxinxi drag" v-drag>
      <div class="tit">
        <ul>
          <li>
            反馈信息
          </li>
          <li>
            <img src="../../../../assets/img/res6.png"/>
            <img src="../../../../assets/img/res8.png"/>
          </li>
        </ul>
      </div>
      <div class="liuyaninfo">
        <ul>
          <li>
            <span>留言用户</span>
            <span>胡海天堂</span>
          </li>
          <li>
            <span>联系电话</span>
            <span>13739550237</span>
          </li>
          <li>
            <span>联系邮箱</span>
            <span>344665@qq.com</span>
          </li>
          <li>
            <span>留言内容</span>
            <p class="wenzhang">三年同窗，一起沐浴了一片金色的阳光，一起度过了一千个日夜，我们共同谱写了多少友谊的篇章?愿逝去的那些闪亮的日子，都化作美好的记忆，永远留在心房。认识您，不论是生命中的一段插曲，还是永久的知已，我都会珍惜，当我疲倦或老去，不再拥有青春的时候，这段旋律会滋润我生命的每一刻。在此我只想说：有您真好!无论你身在何方，我的祝福永远在您身边!</p>
          </li>
        </ul>
      </div>
      <div class="queren">
        <span>确定</span>
        <span>取消</span>
      </div>
    </div>
    <!-- 反馈信息小化弹出框 -->
    <div class="layui-animl drag" v-drag>
      <div class="layui-layer-titlel">反馈信息</div>
      <span class="layui-layer-setwinl">
          <a href="javascript:;"><img src="../../../../assets/img/res_big.png" alt="" class="img1"></a>
          <a href="javascript:;"><img src="../../../../assets/img/res8.png" alt="" class="img2"></a>
      </span>
    </div>
  </div>
  <!-- 是否删除弹出框 -->
  <!-- 确定要删除吗 -->
  <div class="delBox ">
    <div class="layui-layer-dialogp drag" v-drag>
      <div class="layui-layer-titlep">信息</div>
      <span class="layui-layer-setwindp">
          <a href="javascript:;" class="layui-layer-closep"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-paddingp">
        确定要删除吗！
      </div>
      <div class="layui-layer-btnp">
        <a href="javascript:;" class="layui-layer-btn6">确定</a>
        <a href="javascript:;" class="layui-layer-btn7">取消</a>
      </div>
    </div>
  </div>
  <!-- 已删除 -->
  <div class="shanchu">
    <a href="#" class="shanchus">
      <img src="../../../../assets/img/res_l.png" alt="">
      <span>已删除！</span>
    </a>
  </div>
</div>
</template>

<script>
  import  $ from 'jquery'
    export default {
        name: "ResIndexFeedback",
        data(){
          return{
            value1: ''
          }
        },
        directives:{
          drag(el,bindings){
            el.onmousedown = function(e){
              var disx = e.pageX - el.offsetLeft;
              var disy = e.pageY - el.offsetTop;
              document.onmousemove = function (e){
                el.style.left = e.pageX - disx+'px';
                el.style.top = e.pageY - disy+'px';
              }
              document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
              }
            }
          }
        },
        methods:{
          select(){
            $(".checkall")[0].onclick=function () {
              var ischecked= $(".checkall")[0].checked;
              // console.log(ischecked)
              for( let i=0;i<$(".subcheck").length;i++){
                $(".subcheck")[i].checked=ischecked;
              }
            }
          }
        },
        mounted() {
          this.select();
          $(".liuyan").click(
            function () {
              $(".liuyanCon").show();
              $(".fankiuxinxi").show();
              $(".layui-animl").hide();
            }
          );

          $(".queren span").click(
            function () {
              $(".liuyanCon").hide();
            }
          );

          $(".tit li img:last-child").click(
            function () {
              $(".liuyanCon").hide();
            }
          );

          $(".tit li img:first-child").click(
            function () {
              $(".fankiuxinxi").hide();
              $(".layui-animl").show();

              $(".layui-animl a .img2").click(
                function () {
                  $(".liuyanCon").hide();
                }
              );

              $(".layui-animl a .img1").click(
                function () {
                  $(".fankiuxinxi").show();
                  $(".layui-animl").hide();
                }
              );
            }
          );


          let lengthh = $(".dell").length;
          let countt = 0;
          let indexs = "";
          $(".dell").each(function () {
            $(this).attr({
              "indexs": countt
            });
            countt++;
          });
          $('.table tbody tr').each(function () {
            $(this).attr({
              "indexs": countt
            });
            countt++;
          });

          $(".dell").click(function () {
            indexs = $(this).attr("indexs");
            $('.delBox').show();
            $('.layui-layer-btn6').click(function () {
              $('.table tbody tr').eq(indexs).hide();
              $('.delBox').hide();
              $('.shanchu').show();
              setInterval(function () {
                $('.shanchu').hide();
              }, 2000);
            })
            $('.layui-layer-btn7').click(
              function () {
                $('.delBox').hide();
              }
            )
          })

        }
    }
</script>

<style scoped>
  .feedback{
    padding: 20px 15px 60px;
    height: 100%;
    width: 80%;
    overflow-y: auto;
  }
  .feedback::-webkit-scrollbar {
    display: none;
  }
  /* .search_style */
  .search_style {
    width: 90%;
    margin: 20px auto;
  }
  .search_style ul {
    display: flex;
  }
  .search_style ul li {
    display: flex;
    margin-right: 20px;
    font-size: 14px;
  }
  .search_style ul li input {
    width: 248px;
    height: 26px;
    border: 1px solid #d5d5d5;
    display: block;
    margin-left: 10px;
    padding: 4px 5px;
    box-sizing: border-box;
    color: #858585;
    font-size: 13px;
    margin-top: 4px;
  }
  .search_style ul li p {
    padding-top: 7px;
  }
  .search_style ul li .btn_search {
    height: 32px;
    background: #2a8bcc !important;
    background-image: linear-gradient(to bottom, #3b98d6 0, #197ec1 100%) !important;
    background-repeat: repeat-x !important;
    line-height: 32px;
    border: 0px;
    width: 60px;
    text-align: center;
    color: #FFF;
    border-radius: 3px;
  }
  /* border_clearfix */
  .border_clearfix {
    width: 90%;
    margin: 20px auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    padding: 8px;
  }
  .border_clearfix ul {
    display: flex;
  }
  .border_clearfix ul li {
    padding: 3px 10px;
    border: 5px solid;
    border-radius: 4px;
    margin-right: 9px;
    background-color: #d15b47 !important;
    border-color: #d15b47;
    color: white;
    font-size: 14px;
    display: flex;
    cursor: pointer;
    transition: background-color .5s;
  }
  .border_clearfix ul li img {
    width: 11px;
    height: 14px;
    padding-top: 2px;
    padding-right: 4px;
  }
  .border_clearfix ul li:nth-child(3) img {
    width: 10px;
    height: 10px;
    padding-top: 6px;
  }
  .border_clearfix ul li:nth-child(1):hover {
    background-color: #b74635 !important;
  }
  .border_clearfix ul li:nth-child(2) {
    background-color: #428bca !important;
    border-color: #428bca;
  }
  .border_clearfix ul li:nth-child(2):hover {
    background-color: #357ebd !important;
  }
  .border_clearfix ul li:nth-child(3) {
    background-color: #fee188 !important;
    border-color: #fee188;
  }
  .border_clearfix ul li:nth-child(3):hover {
    background-color: #f7d05b !important;
  }
  .border_clearfix ul li:nth-child(4) {
    background-color: #87b87f !important;
    border-color: #87b87f;
  }
  .border_clearfix ul li:nth-child(5) {
    background-color: #87b87f !important;
    border-color: #87b87f;
  }
  .border_clearfix ul li:nth-child(4):hover,
  .border_clearfix ul li:nth-child(5):hover {
    background-color: #4cae4c !important;
  }
  .count {
    padding-top: 8px;
    color: #999;
    font-size: 14px;
  }
  .count span {
    color: #333;
    font-size: 16px;
    padding-left: 5px;
  }
  /* row */
  .row {
    width: 90%;
    margin: 12px auto;
    display: flex;
    justify-content: space-between;
  }
  .row select {
    border: 1px solid #d5d5d5;
    width: 70px;
    height: 25px;
    padding: 2px 3px;
    line-height: 30px;
    color: #858585;
    font-size: 14px;
  }
  .row .sousuo input {
    color: #858585;
    border: 1px solid #d5d5d5;
    padding: 5px 4px;
    line-height: 1.2;
    font-size: 14px;
    font-family: inherit;
    box-sizing: border-box;
    margin-right: 10px;
  }
  /* table */
  .table {
    width: 90%;
    border-collapse: collapse;
    border-spacing: 0;
    max-width: 100%;
    background-color: transparent;
    font-family: "新宋体";
    margin-bottom: 0;
    text-align: center;
    border-radius: 0 !important;
    border: 1px solid #ddd;
    margin: 0 auto;
  }
  .table thead tr {
    width: 100%;
    height: 35px;
    color: #707070;
    font-weight: normal;
    background: #f2f2f2;
    background-repeat: repeat-x;
  }
  .table thead tr th {
    border: 1px solid #ddd;
    vertical-align: middle;
    text-align: center;
    color: #307ecc;
    font-size: 12px;
  }
  .table>thead>tr>th {
    border-bottom-width: 1px;
  }
  .table thead>tr>th {
    padding: 8px;
    line-height: 1.428571429;
  }
  .table thead tr th:first-child {
    border-left-color: #DDD;
    width: 20px;
    padding: 8px;
  }
  #myCheck+label {
    background-color: white;
    border: 1px solid #b9b9b9;
    width: 14px;
    height: 14px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
  }
  #myCheck:checked+label:after {
    content: "\2714";
    font-size: 12px;
    color: blue;
    position: absolute;
    top: -2px;
    left: 2px;
  }
  .table thead:first-child tr:first-child th {
    border-top: 0;
  }
  .table thead tr th:nth-child(2) {
    width: 33px;
    background-image: -webkit-gradient(linear, left 0, left 100%, from(#eff3f8), to(#e3e7ed));
    cursor: pointer;
    position: relative;
  }
  .table thead tr th:nth-child(3) {
    width: 43px;
  }
  .table thead tr th:nth-child(4) {
    width: 77px;
  }
  .table thead tr th:nth-child(5) {
    width: 114px;
  }
  .table thead tr th:nth-child(6) {
    width: 98px;
  }
  .table thead tr th:nth-child(7) {
    width: 132px;
  }
  .table thead tr th:nth-child(8) {
    width: 52px;
    position: relative;
    cursor: pointer;
  }
  .table thead tr th:nth-child(9) {
    width: 53px;
  }
  .table thead tr th:nth-child(10) {
    width: 121px;
  }
  .check {
    width: 18px;
    position: relative;
    margin-left: -3px;
  }
  .input_check {
    opacity: 0;
    width: 18px;
    height: 18px;
    position: absolute;
  }
  .check label {
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(../../../../assets/img/res_wei.png) no-repeat;
    background-size: 18px 18px;
    margin-top: 2px;
    margin-left: 5px;
  }
  .check .input_check:checked+label {
    background: url(../../../../assets/img/res_xuan.png)no-repeat;
    background-size: 18px 18px;
  }
  .input_check {
    opacity: 0;
    width: 18px;
    height: 18px;
    position: absolute;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .table tbody tr td {
    word-wrap: break-word;
    word-break: break-all;
    vertical-align: middle;
    font-family: "新宋体";
    text-align: center;
  }
  .table>tbody>tr:nth-child(odd)>td {
    background-color: #f9f9f9;
  }
  .table>tbody>tr>td {
    border: 1px solid #ddd;
  }
  .table tbody>tr>td {
    padding: 8px;
    line-height: 1.428571429;
  }
  .table tbody tr td a {
    color: #F60;
  }
  .order_product_name img {
    border: 1px solid #dddddd;
    padding: 1px;
    width: 60px;
    height: 60px;
  }
  .label-success {
    font-size: 12px;
    line-height: 1.15;
    height: 12px;
    background-color: #82af6f;
    border-radius: 0;
    text-shadow: none;
    font-weight: normal;
    display: inline-block;
    padding: .2em .6em .3em;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
  }
  .even:hover {
    background-color: #f9f9f9;
  }
  .NumberOfPages {
    width:90%;
    padding-top: 12px;
    padding-bottom: 12px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
  }
  .numberpages {
    min-height: 1px;
    padding-right: 12px;
    padding-left: 12px;
  }
  .numberpages div {
    font-size: 14px;
  }
  .pageright {
    text-align: right;
  }
  .pageright ul {
    margin: 0 12px;
    display: inline-block;
    padding-left: 0;
    border-radius: 4px;
  }
  .pageright ul>li {
    display: inline;
  }
  .pageright ul li>a {
    background-color: #f9f9f9;
    margin-left: 0;
    color: #999;
    margin: 0 -1px 0 0;
    border-width: 1px;
    border-radius: 0 !important;
    height: 32px;
    line-height: 32px;
    padding: 0px 10px;
    text-align: center;
    float: left;
    border: 1px solid #ddd;
  }
  .prev, .next {
    cursor: not-allowed;
  }
  .pageright ul li a.active {
    background-color: #6faed9;
    border-color: #6faed9;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  .liuyan {
    color: #f60;
    font-size: 12px;
    cursor: pointer;
  }
  .liuyan:hover{
    text-decoration: underline;
  }
  .caozuo1 span {
    padding: 6px 10px;
    border: 3px;
    float: left;
    border-radius: 4px;
    cursor: pointer;
    margin-left:50px;
    background: #ffb752;
  }
  .caozuo1 span img {
    height: 12px;
  }
  .caozuo1 span:hover {
    background-color: #f7d05b;
  }
  /* 留言内容弹出框 */
  .liuyanCon{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    background:rgba(0, 0, 0, .5);
    display:none;
  }
  .fankiuxinxi{
    width:600px;
    position:fixed;
    left:50%;
    top:50%;
    margin-left:-300px;
    margin-top:-192px;
    background:white;
    border-radius:4px;
  }
  .fankiuxinxi .tit{
    width:100%;
    height:42px;
    border-bottom:1px solid #eee;
    background-color: #F8F8F8;
    border-radius:4px;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .fankiuxinxi .tit ul{
    width:100%;
    display:flex;
    justify-content: space-between;
  }
  .fankiuxinxi .tit ul li{
    line-height:42px;
    display:flex;
  }
  .fankiuxinxi .tit ul li:last-child img:last-child{
    width:12px;
    height:12px;
    padding-top:14px;
    cursor: pointer;
  }
  .fankiuxinxi .tit ul li:last-child img:first-child{
    width:14px;
    height:2px;
    padding-right:10px;
    padding-top:18px;
    cursor: pointer;
  }
  .liuyaninfo{
    padding:0 50px;
  }
  .liuyaninfo ul li{
    display:flex;
  }
  .liuyaninfo ul li span{
    padding-right:10px;
    line-height:50px;
    white-space: nowrap;
  }
  .liuyaninfo ul li .wenzhang{
    padding-top:15px;
    font-size:14px;
  }
  .queren{
    width:136px;
    margin:30px auto 10px;
    display:flex;
  }
  .queren span{
    background-color: #2e8ded;
    color: #fff;
    height: 36px;
    line-height: 36px;
    margin: 0 6px;
    padding: 0 15px;
    border: 1px solid #dedede;
    border-radius: 4px;
    font-weight: 400;
    cursor: pointer;
    font-size: 12px;
  }
  .queren span:last-child{
    background-color: #f1f1f1;
    color:#333;
  }
  /* 缩小 */
  .layui-animl{
    position: fixed;
    z-index: 9999999;
    width: 180px;
    height: 42px;
    left: 24%;
    top: 25%;
    background-color: #fff;
    display: none;
  }
  .layui-layer-titlel{
    padding: 0 80px 0 20px;
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    background-color: #F8F8F8;
    border-radius: 2px 2px 0 0;
  }
  .layui-layer-setwinl{
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 0;
    line-height: initial;
    display:flex;
  }
  .layui-layer-setwinl a {
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
  }
  .layui-layer-setwinl a img{
    margin-bottom: 8px;
  }
  /* 是否删除弹出框 */
  /* 确定要删除吗 */
  .layui-layer-dialogp{
    width: 260px;
    height: 154px;
    z-index: 9999999;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    border-radius: 2px;
    position: fixed;
    top: 210px;
    left: 55%;
  }
  .layui-layer-titlep{
    cursor: move;
    padding: 0 80px 0 20px;
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: #F8F8F8;
    border-radius: 2px 2px 0 0;
  }
  .layui-layer-setwindp{
    position: absolute;
    right: 15px;
    top: 13px;
    line-height: initial;
  }
  .layui-layer-closep{
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
  }
  .layui-layer-paddingp{
    padding: 20px;
    line-height: 24px;
    word-break: break-all;
    font-size: 14px;
    overflow: auto;
  }
  .layui-layer-dialogp .layui-layer-btnp{
    padding-top: 10px;
    text-align: center;
    padding: 0 10px 12px;
    pointer-events: auto;
  }
  .layui-layer-btnp .layui-layer-btn6 {
    border-color: #4898d5;
    background-color: #2e8ded;
    color: #fff;
  }
  .layui-layer-btnp a {
    display: inline-block;
    height: 36px;
    line-height: 36px;
    margin: 0 6px;
    padding: 0 15px;
    border: 1px solid #dedede;
    background-color: #f1f1f1;
    color: #333;
    border-radius: 2px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    vertical-align: top;
  }
  /* 已删除 */
  .shanchu{
    position: fixed;
    z-index: 9999999;
    width: 178px;
    height: 64px;
    left: 53%;
    top: 46%;
    background-color: #fff;
    pointer-events: auto;
    border: 1px solid #d3d4d3;
    border-radius: 2px;
    line-height: 64px;
    display: none;
  }
  .shanchus{
    display: block;
    width: 100%;
    height: 30px;
    margin-top: 16px;
    font-size: 12px;
    color: #393939;
  }
  .shanchu .shanchus img{
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 15px;
    margin-right: 10px;
    float: left;
  }
  .shanchu .shanchus span{
    display: block;
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
  }
  .delBox{
    z-index: 1222;
    background-color: #000;
    opacity: 0.3;
    top: 79px;
    right: 0;
    width: 80%;
    height: 100%;
    position: fixed;
    display: none;
  }
  /*面包屑*/
  .bread{
    color: #333333;
  }
  .bread>*:hover{
    text-decoration: underline;
    color: blue;
  }
  .bread a {
    color: #333333;
  }
</style>
