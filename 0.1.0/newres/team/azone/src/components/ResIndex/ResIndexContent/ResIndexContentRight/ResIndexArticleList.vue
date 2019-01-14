<template>
    <div class="articallist">
       <span class="bread">
      <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
      <a href="javascript:;"><cite>支付管理</cite></a>  /
      <router-link to="/ResIndexArticleList"><cite>账户管理</cite></router-link>
    </span>
      <div class="border clearfix">
          <span class="l_f">
              <router-link href="javascript:;" title="添加文章" class="btn btn-warning" to="/ResIndexAddArticle">
                  <img src="../../../../assets/img/res_tianjia.png" alt="">
                  添加文章
              </router-link>
              <a href="javascript:;" class="btn btn-danger">
                  <img src="../../../../assets/img/res9.png" alt="">
                  批量删除
              </a>
          </span>
        <span class="r_f">共：<b>45</b>条文章</span>
      </div>
      <div class="article_list">
        <table class="table">
          <thead>
          <tr>
            <th>
              <div class="check">
                <input type="checkbox" class="input_check">
                <label></label>
              </div>
            </th>
            <th>ID</th>
            <th>排序</th>
            <th>所属分类</th>
            <th>标题</th>
            <th>简介</th>
            <th>添加时间</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr class="odd">
            <td>
              <div class="check">
                <input type="checkbox" class="input_check">
                <label></label>
              </div>
            </td>
            <td>12</td>
            <td>2</td>
            <td>帮助中心</td>
            <td>订单已提交成功，如何付款？</td>
            <td>付款方式分为以下几种：（注：先款订单请您在订单提交后24小时内...</td>
            <td>2016-7-25 12:34</td>
            <td>显示</td>
            <td>
              <a href="javascript:;" class="btn btn-xs btn-info" title="编辑">
                <img src="../../../../assets/img/res10.png" alt="">
              </a>
              <a href="javascript:;" class="btn btn-xs btn-warnings" title="删除">
                <img src="../../../../assets/img/res9.png" alt="">
              </a>
            </td>
          </tr>
          <tr class="even">
            <td>
              <div class="check">
                <input type="checkbox" class="input_check">
                <label></label>
              </div>
            </td>
            <td>12</td>
            <td>2</td>
            <td>帮助中心</td>
            <td>订单已提交成功，如何付款？</td>
            <td>付款方式分为以下几种：（注：先款订单请您在订单提交后24小时内...</td>
            <td>2016-7-25 12:34</td>
            <td>显示</td>
            <td>
              <a href="javascript:;" class="btn btn-xs btn-info" title="编辑">
                <img src="../../../../assets/img/res10.png" alt="">
              </a>
              <a href="javascript:;" class="btn btn-xs btn-warnings" title="删除">
                <img src="../../../../assets/img/res9.png" alt="">
              </a>
            </td>
          </tr>
          <tr class="odd">
            <td>
              <div class="check">
                <input type="checkbox" class="input_check">
                <label></label>
              </div>
            </td>
            <td>12</td>
            <td>2</td>
            <td>帮助中心</td>
            <td>订单已提交成功，如何付款？</td>
            <td>付款方式分为以下几种：（注：先款订单请您在订单提交后24小时内...</td>
            <td>2016-7-25 12:34</td>
            <td>显示</td>
            <td>
              <a href="javascript:;" class="btn btn-xs btn-info" title="编辑">
                <img src="../../../../assets/img/res10.png" alt="">
              </a>
              <a href="javascript:;" class="btn btn-xs btn-warnings" title="删除">
                <img src="../../../../assets/img/res9.png" alt="">
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- 遮罩层 -->
      <div class="layui-layer-shade"></div>
      <!-- 确定要删除吗 -->
      <div class="layui-layer-dialog">
        <div class="layui-layer-titlea">信息</div>
        <span class="layui-layer-setwind">
            <a href="javascript:;" class="layui-layer-close1"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
        <div class="layui-layer-padding">
          <img src="../../../../assets/img/res_jing.png" alt="">
          确定要删除吗？
        </div>
        <div class="layui-layer-btna">
          <a href="javascript:;" class="layui-layer-btn3">确定</a>
          <a href="javascript:;" class="layui-layer-btn4">取消</a>
        </div>
      </div>
      <!-- 已删除 -->
      <div class="happy">
        <a href="#" class="happys">
          <img src="../../../../assets/img/res_l.png" alt="">
          <span>已删除！</span>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ResIndexArticleList"
    }
</script>

<style scoped>
.articallist{
  padding: 20px 15px 60px;
  height: 100%;
  width: 80%;
  overflow-y: auto;
}
.articallist::-webkit-scrollbar {
  display: none;
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
.border {
  border: 1px solid #ddd;
  padding: 5px;
  height: 50px;
  line-height: 36px;
  margin-bottom: 20px;
  margin-top: 20px;
}
.border span {
  display: block;
  height: 100%;
}
.l_f {
  float: left;
}
.btn{
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
.btn-warning{
  background-color: #ffb752;
  border: 5px solid #ffb752;
}
.btn-warning:hover{
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
  font-size: 14px;
}
.table {
  border: 1px solid #ddd;
  margin-bottom: 20px;
  border-collapse: collapse;
  border-spacing: 0;
  max-width: 100%;
  background-color: transparent;
}
thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.table thead tr {
  color: #707070;
  font-weight: normal;
  background: #f2f2f2;
  background-repeat: repeat-x;
}
.table thead tr th {
  vertical-align: middle;
  text-align: center;
  border-color: #DDD;
  font-weight: bold;
}
.table>thead>tr>th {
  border-bottom-width: 1px;
  border: 1px solid #ddd;
}
.table thead>tr>th{
  padding: 8px;
  line-height: 1.428571429;
}
.table thead tr th:first-child {
  width: 20px;
  border-left-color: #DDD;
}
.table thead tr th:nth-child(2){
  width: 80px;
}
.table thead tr th:nth-child(3){
  width: 80px;
}
.table thead tr th:nth-child(4){
  width: 100px;
}
.table thead tr th:nth-child(5){
  width: 220px;
}
.table thead tr th:nth-child(6){
  width: 467px;
}
.table thead tr th:nth-child(7){
  width: 150px;
}
.table thead tr th:nth-child(8){
  width: 80px;
}
.table thead tr th:nth-child(9){
  width: 150px;
}
.table thead tr th:nth-child(2){
  width: 80px;
}
.table thead tr th:nth-child(2){
  width: 80px;
}
.check{
  width: 18px;
  margin-left: 3px;
  position: relative;
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
.btn-xs {
  border-width: 3px;
  width: 42px;
  height:26px;
}
.btn-xs img{
  margin-bottom: 8px;
}
.btn-info{
  background-color: #6fb3e0;
  border: 3px solid #6fb3e0;
}
.btn-info:hover{
  background-color: #307ecc;
}
.btn-warnings{
  background-color: #d15b47;
  border: 3px solid #d15b47;
}
.btn-warnings:hover{
  background-color: #b74635;
}
.even:hover{
  background-color: #f9f9f9;
}
/* 遮罩层 */
.layui-layer-shade{
  z-index: 1222;
  background-color: #000;
  opacity: 0.3;
  top: 79px;
  right: 0;
  width: 90%;
  height: 100%;
  position: fixed;
  display: none;
}
/* 确定要删除吗 */
.layui-layer-dialog{
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
.layui-layer-titlea{
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
.layui-layer-setwind{
  position: absolute;
  right: 15px;
  top: 13px;
  line-height: initial;
}
.layui-layer-close1{
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 16px;
  margin-left: 10px;
  font-size: 12px;
}
.layui-layer-padding{
  padding: 20px 20px 20px 55px;
  text-align: left;
  line-height: 24px;
  word-break: break-all;
  font-size: 14px;
  overflow: auto;
}
.layui-layer-padding img{
  position: absolute;
  top: 60px;
  left: 15px;
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
}
.layui-layer-btna{
  text-align: center;
  padding: 0 10px 12px;
  pointer-events: auto;
}
.layui-layer-btn3{
  border-color: #4898d5;
  background-color: #2e8ded;
  color: #fff;
  height: 36px;
  line-height: 36px;
  margin: 0 6px;
  padding: 0 15px;
  border: 1px solid #dedede;
  border-radius: 3px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  vertical-align: top;
}
.layui-layer-btn4{
  border: 1px solid #dedede;
  background-color: #f1f1f1;
  color: black;
  height: 36px;
  line-height: 36px;
  margin: 0 6px;
  padding: 0 15px;
  border: 1px solid #dedede;
  border-radius: 3px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  vertical-align: top;
}
/* 已删除 */
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
