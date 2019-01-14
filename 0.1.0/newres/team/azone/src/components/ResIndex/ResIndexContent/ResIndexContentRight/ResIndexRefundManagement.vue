<template>
<div class="RefundManagement clearfix">
   <span class="bread">
      <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
      <a href="javascript:;"><cite>支付管理</cite></a>  /
      <router-link to="/ResIndexRefundManagement"><cite>账户管理</cite></router-link>
    </span>
    <div class="search_style">
      <ul class="search_content clearfix">
        <li><label class="l_f">订单编号</label><input type="text" class="text_add" placeholder="输入订单编号" style="width:250px"></li>
        <li>
          <el-date-picker v-model="value1" size="small" type="date" placeholder="选择日期"></el-date-picker>
        </li>
        <li style="width:90px;">
          <button type="button" class="btn_search">
            <img src="../../../../assets/img/res_1.jpg" alt="">
            查询
          </button>
        </li>
      </ul>
    </div>
    <div class="border clearfix">
      <span class="l_f">
          <a href="javascript:;" class="btn btn-success">
              <img src="../../../../assets/img/res_tuikuan.png" alt="">
              &nbsp;已退款订单
          </a>
          <a href="javascript:;" class="btn btn-warnings">
              <img src="../../../../assets/img/res_weitui.png" alt="">
              &nbsp;未退款订单
          </a>
          <a href="javascript:;" class="btn btn-danger">
              <img src="../../../../assets/img/res9.png" alt="">
              &nbsp;批量删除
          </a>
      </span>
      <span class="r_f">共：<b>2334</b>笔</span>
    </div>
    <div class="Orderform_list">
      <div class="sample-table_wrapper">
        <div class="dataTables_wrapper">
          <div class="row">
            <div class="col-sm-6">
              <div class="dataTables_length">
                <label>
                  每页显示条数:
                  <select>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="dataTables_filter">
                <label>搜索：<input type="search"></label>
              </div>
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
                <th>
                  订单编号
                  <span class="spas"></span>
                  <span class="spana"></span>
                </th>
                <th>产品名称</th>
                <th>交易金额</th>
                <th>交易时间</th>
                <th>退款金额</th>
                <th>退款数量</th>
                <th>
                  状态
                  <span class="spa1"></span>
                  <span class="spa2"></span>
                </th>
                <th>说明</th>
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
                <td>20160705445622</td>
                <td class="order_product_name">
                  <a href="javascript:;">华圣 高原红富士苹果 6枚 1.2KG 自营水果</a>
                </td>
                <td>456.5</td>
                <td>2016-7-5</td>
                <td>145</td>
                <td>1</td>
                <td>
                  <span class="label-success">待退款</span>
                  <span class="label-suc">已退款</span>
                </td>
                <td>重复购买商品需退款一件</td>
                <td>
                  <a href="javascript:;" class="btn btn-xs btn-success" title="退款">退款</a>
                  <a href="javascript:;" class="btn btn-xs btn-info" title="详细">详细</a>
                  <a href="javascript:;" class="btn btn-xs btn-warning" title="删除">删除</a>
                </td>
              </tr>
              <tr class="even">
                <td>
                  <div class="check">
                    <input type="checkbox" class="input_check subcheck">
                    <label></label>
                  </div>
                </td>
                <td>20160705445622</td>
                <td class="order_product_name">
                  <a href="javascript:;">华圣 高原红富士苹果 6枚 1.2KG 自营水果</a>
                </td>
                <td>456.5</td>
                <td>2016-7-5</td>
                <td>145</td>
                <td>1</td>
                <td><span class="label-successa">已退款</span></td>
                <td>重复购买商品需退款一件</td>
                <td>
                  <a href="javascript:;" class="btn btn-xs btn-info" title="详细">详细</a>
                  <a href="javascript:;" class="btn btn-xs btn-warning" title="删除">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="NumberOfPages">
            <div class=numberpages>
              <div>第 1 到 2 条记录，共 2 条</div>
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
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="layui-layer-shade"></div>
    <!-- 是否退款 -->
    <div class="layui-layer-dialogp drag" v-drag>
      <div class="layui-layer-titlep">信息</div>
      <span class="layui-layer-setwindp">
                <a href="javascript:;" class="layui-layer-closep"><img src="../../../../assets/img/res8.png" alt=""></a>
            </span>
      <div class="layui-layer-paddingp">
        是否退款当前商品价格！
      </div>
      <div class="layui-layer-btnp">
        <a href="javascript:;" class="layui-layer-btn6">确定</a>
        <a href="javascript:;" class="layui-layer-btn7">取消</a>
      </div>
    </div>
    <!-- 已退款 -->
    <div class="happy">
      <a href="#" class="happys">
        <img src="../../../../assets/img/res_happy.png">
        <span>已退款！</span>
      </a>
    </div>
</div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "ResIndexRefundManagement",
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
          //是否退款
          let length = $(".btn-success").length;
          console.log(length)
          let count = 0;
          let index = "";
          $(".btn-success").each(function () {
            $(this).attr({"index":count});
            count++;
          });

          $('.btn-success').click(function () {
            index = $(this).attr("index");
            $('.layui-layer-dialogp').show();
            $('.layui-layer-shade').show();
          });
          //取消以及close
          $('.layui-layer-btn7').click(function () {
            $('.layui-layer-dialogp').hide();
            $('.layui-layer-shade').hide();
          });
          $('.layui-layer-closep').click(function () {
            $('.layui-layer-dialogp').hide();
            $('.layui-layer-shade').hide();
          });
          //确定
          $('.layui-layer-btn6').click(function () {
            $('.layui-layer-dialogp').hide();
            $('.layui-layer-shade').hide();
            $('.happy').show();
            setInterval(function () {
              $('.happy').hide();
            },2000);
            $('.btn-success').eq(index).hide();
            $(".label-success").hide();
            $(".label-suc").show();
          });
        }
    }
</script>

<style scoped>
  .RefundManagement{
    padding: 20px 15px 60px;
    height: 100%;
    width: 80%;
    overflow-x: auto;
  }
  .search_style{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .clearfix:before{
    display: table;
    content: " ";
  }
  .clearfix:after {
    display: block;
    content: ".";
    height: 0;
    visibility: hidden;
    clear: both;
    font-size: 0;
    line-height: 0;
  }
  .search_style .search_content li {
    margin-right: 20px;
    float: left;
    line-height: 30px;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .l_f {
    float: left;
  }
  label {
    font-weight: normal;
    font-size: 14px;
    vertical-align: middle;
    display: inline-block;
    cursor: default;
  }
  input[type="text"]{
    border-radius: 0!important;
    color: #858585;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    padding: 5px 4px;
    margin-left: 10px;
    line-height: 1.2;
    font-size: 14px;
    font-family: inherit;
    outline: 0;
  }
  .text_add:focus{
    border-color:#f59942;
  }
  .search_style .search_content li .btn_search {
    height: 32px;
    background: #2a8bcc!important;
    background-image: linear-gradient(to bottom,#3b98d6 0,#197ec1 100%)!important;
    background-repeat: repeat-x!important;
    line-height: 32px;
    border: 0px;
    width: 60px;
    text-align: center;
    color: #FFF;
    border-radius: 3px;
    cursor: pointer;
  }
  .border {
    border: 1px solid #ddd;
    padding: 5px;
    height: 50px;
    line-height: 36px;
    margin-bottom: 20px;
  }
  .border span {
    display: block;
    height: 100%;
  }
  .btn-warnings{
    background-color: #ffb752;
    border: 5px solid #ffb752;
  }
  .btn-warnings:hover{
    background-color: #e59729;
  }
  .btn-danger{
    background-color: #d15b47;
    border: 5px solid #d15b47;
  }
  .btn-danger:hover{
    background-color: #b74635;
  }
  .r_f {
    float: right;
    font-size: 15px;
  }
  .dataTables_wrapper .row:first-child {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .sample-table_wrapper{
    width: 1366px;
  }
  .row:before{
    display: table;
    content: " ";
  }
  .row:after {
    clear: both;
    display: table;
    content: " ";
  }
  .col-sm-6 {
    width: 50%;
    float: left;
    min-height: 1px;
    padding-right: 12px;
    padding-left: 12px;
  }
  .dataTables_wrapper label {
    display: inline-block;
    font-size: 13px;
    font-weight: normal;
  }
  .dataTables_wrapper select {
    margin-bottom: 0!important;
    margin: 0 4px;
  }
  .dataTables_length select {
    width: 70px;
    height: 25px;
    padding: 2px 3px;
    line-height: 30px;
    box-shadow: none!important;
    color: #858585;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    outline: 0;
  }
  select:focus{
    border-color:#f59942;
  }
  select option{
    padding: 3px 4px;
  }
  .dataTables_filter {
    text-align: right;
  }
  input[type="search"]{
    color: #858585;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    padding: 5px 4px;
    margin-left: 10px;
    line-height: 1.2;
    font-size: 14px;
    font-family: inherit;
    outline: 0;
  }
  input[type="search"]:focus{
    border-color:#f59942;
  }
  .dataTables_wrapper .row:first-child+.table {
    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
    font-family: "新宋体";
  }
  .table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    max-width: 100%;
    background-color: transparent;
    font-family: "新宋体";
    margin-bottom: 0;
    text-align: center;
    border-radius: 0!important;
    border: 1px solid #ddd;
  }
  .table thead tr{
    width: 100%;
    height: 35px;
    color: #707070;
    font-weight: normal;
    background: #f2f2f2;
    background-repeat: repeat-x;
  }
  .table thead tr th{
    border: 1px solid #ddd;
    vertical-align: middle;
    text-align: center;
    color: #307ecc;
    font-size: 12px;
  }
  .table>thead>tr>th {
    border-bottom-width: 1px;
  }
  .table thead>tr>th{
    padding: 8px;
    line-height: 1.428571429;
  }
  .table thead tr th:first-child {
    border-left-color: #DDD;
    width: 23px;
    padding: 8px;
  }
  #myCheck + label{
    background-color: white;
    border: 1px solid #b9b9b9;
    width: 14px;
    height: 14px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
  }
  #myCheck:checked + label:after{
    content:"\2714";
    font-size: 12px;
    color: blue;
    position: absolute;
    top: -2px;
    left: 2px;
  }
  .table thead:first-child tr:first-child th{
    border-top: 0;
  }
  .table thead tr th:nth-child(2) {
    width: 112px;
    background-image: -webkit-gradient(linear,left 0,left 100%,from(#eff3f8),to(#e3e7ed));
    cursor: pointer;
    position: relative;
  }
  .spas{
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-top: 4px solid black;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    margin: 0;
    margin-left: 5px;
    position: absolute;
    top: 18px;
    left: 85px;
  }
  .spana{
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-bottom: 4px solid black;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    margin: 0;
    margin-left: 5px;
    position: absolute;
    top: 11px;
    left: 85px;
  }
  .table thead tr th:nth-child(3) {
    width: 254px;
  }
  .table thead tr th:nth-child(4) {
    width: 90px;
  }
  .table thead tr th:nth-child(5) {
    width: 90px;
  }
  .table thead tr th:nth-child(6) {
    width: 90px;
  }
  .table thead tr th:nth-child(8):hover {
    color: #307ecc;
  }
  .spa1{
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-top: 4px solid black;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    margin: 0;
    margin-left: 5px;
    position: absolute;
    top: 18px;
    left: 54px;
  }
  .spa2{
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-bottom: 4px solid black;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    margin: 0;
    margin-left: 5px;
    position: absolute;
    top: 11px;
    left: 54px;
  }
  .table thead tr th:nth-child(7) {
    width: 68px;
  }
  .table thead tr th:nth-child(8) {
    width: 58px;
    color: black;
    position: relative;
    cursor: pointer;
  }
  .table thead tr th:nth-child(9) {
    width: 200px;
  }
  .table thead tr th:nth-child(10) {
    width: 200px;
  }
  .check{
    width: 18px;
    margin-left: 3px;
  }
  .input_check {
    opacity: 0;
    width: 18px;
    height: 18px;
    position: absolute;
  }
  .check label{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(../../../../assets/img/res_wei.png) no-repeat;
    background-size: 18px 18px;
    margin-top: 2px;
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
  .table>tbody>tr:nth-child(odd)>td{
    background-color: #f9f9f9;
  }
  .table>tbody>tr>td{
    border: 1px solid #ddd;
  }
  .table tbody>tr>td{
    padding: 8px;
    line-height: 1.428571429;
  }
  .table tbody tr td a {
    color: #F60;
  }
  .order_product_name a:hover{
    text-decoration: underline;
  }
  .order_product_name img {
    border: 1px solid #dddddd;
    padding: 1px;
    width: 60px;
    height: 60px;
  }
  .order_product_name .imgs{
    display: inline-block;
    width:24px;
    height: 24px;
    border: 0;
  }
  .label-success{
    font-size: 12px;
    line-height: 1.15;
    height: 20px;
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
  .label-suc{
    font-size: 12px;
    line-height: 1.15;
    height: 20px;
    background-color: #abbac3;
    border-radius: 0;
    text-shadow: none;
    font-weight: normal;
    display: inline-block;
    padding: .2em .6em .3em;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    display: none;
  }
  .label-successa{
    font-size: 12px;
    line-height: 1.15;
    height: 20px;
    background-color: #abbac3;
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
  .btn-success{
    background-color: #87b87f;
    border: 5px solid #87b87f;
  }
  .btn-success:hover{
    background-color: #629b58;
  }
  .btn-xs {
    border-width: 3px;
  }
  .btn {
    padding: 3px 10px;
    display: inline-block;
    font-family: "Microsoft YaHei";
    color: #FFF!important;
    box-shadow: none!important;
    cursor: pointer;
    vertical-align: middle;
    margin-right: 5px;
    position: relative;
    border-radius: 3px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.428571429;
    text-align: center;
    white-space: nowrap;
  }
  .btn-info{
    background-color: #6fb3e0;
    border: 3px solid #6fb3e0;
  }
  .btn-info:hover{
    background-color: #307ecc;
  }
  .btn-warning{
    background-color: #ffb752;
    border: 3px solid #ffb752;
  }
  .btn-warning:hover{
    background-color: #e59729;
  }
  .even:hover{
    background-color: #f9f9f9;
  }
  .NumberOfPages{
    padding-top: 12px;
    padding-bottom: 12px;
    margin: 0;
  }
  .numberpages{
    width:50%;
    float: left;
    min-height: 1px;
    padding-right: 12px;
    padding-left: 12px;
  }
  .numberpages div{
    font-size: 14px;
  }
  .pageright{
    text-align: right;
  }
  .pageright ul{
    margin: 0 12px;
    display: inline-block;
    padding-left: 0;
    border-radius: 4px;
  }
  .pageright ul>li{
    display: inline;
  }
  .pageright ul li>a{
    background-color: #f9f9f9;
    margin-left: 0;
    color: #999;
    margin: 0 -1px 0 0;
    border-width: 1px;
    border-radius: 0!important;
    height: 32px;
    line-height: 32px;
    padding: 0px 10px;
    text-align: center;
    float: left;
    border: 1px solid #ddd;
  }
  .prev,.next{
    cursor: not-allowed;
  }
  .pageright ul li a.active{
    background-color: #6faed9;
    border-color: #6faed9;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
  }
  /* 遮罩层 */
  .layui-layer-shade{
    z-index: 1222;
    background-color: #000;
    opacity: 0.3;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    position: fixed;
    display: none;
  }
  /* 是否退款 */
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
    top: 150px;
    left: 50%;
    display: none;
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
  /* 已退款 */
  .happy{
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
  .happys{
    display: block;
    width: 100%;
    height: 30px;
    margin-top: 16px;
    font-size: 12px;
    color: #393939;
  }
  .happy .happys img{
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 15px;
    margin-right: 10px;
    float: left;
  }
  .happy .happys span{
    display: block;
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
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
