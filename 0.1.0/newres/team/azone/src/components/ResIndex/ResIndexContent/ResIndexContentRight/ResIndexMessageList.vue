<template>
  <div class="messagelist">
    <span class="bread">
      <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
      <a href="javascript:;"><cite>支付管理</cite></a>  /
      <router-link to="/ResIndexMessageList"><cite>账户管理</cite></router-link>
    </span>
    <div class="search_style">
      <ul class="search_content clearfix">
        <li><label class="l_f">留言</label><input type="text" class="text_add" placeholder="输入留言信息" style="width:250px"></li>
        <li><el-date-picker v-model="value1" size="small" type="date" placeholder="选择日期"></el-date-picker></li>
        <li style="width:90px;">
          <button type="button" class="btn_search">
            <img src="../../../../assets/img/res_1.jpg">
            查询
          </button>
        </li>
      </ul>
    </div>
    <div class="border clearfix">
            <span class="l_f">
                <a href="javascript:;" class="btn btn-danger">
                    <img src="img/res9.png" alt="">
                    &nbsp;批量删除
                </a>
                <a href="javascript:;" class="btn btn-successa">
                    <img src="img/res2.png" alt="">
                    &nbsp;已浏览
                </a>
                <a href="javascript:;" class="btn btn-yellow">
                    <img src="img/res_zong.png" alt="">
                    &nbsp;未浏览
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
                  <input type="checkbox" class="input_check">
                  <label></label>
                </div>
              </th>
              <th>ID</th>
              <th>用户名</th>
              <th>留言内容</th>
              <th>时间</th>
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
              <td>1</td>
              <td class="order_product_name">
                <a href="javascript:;" class="text-primary">
                  张小泉
                </a>
              </td>
              <td>
                <a href="javascript:;">
                  “第二届中国无锡水蜜桃开摘节”同时开幕，为期三个月的蜜桃季全面启动。值此京东“618品质狂欢节”之际，中国特产无锡馆限量上线618份8只装精品水蜜桃，61.8元全国包邮限时抢购。为了保证水蜜桃从枝头到达您的手中依旧鲜甜如初，京东采用递送升级服务，从下单到包装全程冷链运输。
                </a>
              </td>
              <td>2016-6-11 11:11:42</td>
              <td>
                <span class="label-success">已浏览</span>

              </td>
              <td class="tds">
                <a href="javascript:;" class="btn btn-xs btn-success" title="已浏览">
                  <img src="../../../../assets/img/res2.png" alt="">
                </a>
                <a href="javascript:;" class="btn btn-xs btn-info" title="回复">
                  <img src="../../../../assets/img/res10.png" alt="">
                </a>
                <a href="javascript:;" class="btn btn-xs btn-warning" title="删除">
                  <img src="../../../../assets/img/res9.png" alt="">
                </a>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="NumberOfPages">
            <div class=numberpages>
              <div>第 1 到 5 条记录，共 5 条</div>
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
    <!-- 留言信息 -->
    <div class="layui-layer-page">
      <div class="layui-layer-title">留言信息</div>
      <span class="layui-layer-setwin">
            <a href="javascript:;" class="layui-layer-min"><cite></cite></a>
            <a href="javascript:;" class="layui-layer-close1"><img src="../../../../assets/img/res8.png"></a>
        </span>
      <div class="layui-layer-content">
        <div class="layui-layer-wrap">
          <div class="content_style">
            <div class="form-group">
              <label class="col-sm-2 control-label no-padding-right">留言用户</label>
              <div class="col-sm-9">胡海天堂</div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label no-padding-right"> 留言内容 </label>
              <div class="col-sm-9">三年同窗，一起沐浴了一片金色的阳光，一起度过了一千个日夜，我们共同谱写了多少友谊的篇章?愿逝去的那些闪亮的日子，都化作美好的记忆，永远留在心房。认识您，不论是生命中的一段插曲，还是永久的知已，我都会珍惜，当我疲倦或老去，不再拥有青春的时候，这段旋律会滋润我生命的每一刻。在此我只想说：有您真好!无论你身在何方，我的祝福永远在您身边!</div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label no-padding-right">是否回复 </label>
              <div class="col-sm-9">
                <div class="check">
                  <input type="checkbox" class="input_check">
                  <label></label>
                </div>
                <span class="spanh">回复</span>
                <div class="Reply_style">
                  <textarea name="权限描述" class="form-control"></textarea>
                  <span class="wordage">
                    剩余字数：
                    <span style="color:red;">200</span>
                    字
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-layer-btn">
        <a href="javascript:;" class="layui-layer-btn0">确定</a>
        <a href="javascript:;" class="layui-layer-btn1">取消</a>
      </div>
    </div>
    <!-- 回复内容不能为空 -->
    <div class="layui-layer-dialog">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
            <a href="javascript:;" class="layui-layer-close1"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
      <div class="layui-layer-padding">
        <img src="../../../../assets/img/res_jing.png" alt="">
        回复内容不能为空！
      </div>
      <div class="layui-layer-btna">
        <a href="javascript:;" class="layui-layer-btn3">确定</a>
      </div>
    </div>
    <!-- 确定回复该内容 -->
    <div class="layui-layer-dialol">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
                <a href="javascript:;" class="layui-layer-close1"><img src="../../../../assets/img/res8.png" alt=""></a>
            </span>
      <div class="layui-layer-padding">
        <img src="../../../../assets/img/res_jing.png" alt="">
        确定回复该内容?
      </div>
      <div class="layui-layer-btna">
        <a href="javascript:;" class="layui-layer-btn3">确定</a>
        <a href="javascript:;" class="layui-layer-btn5">取消</a>

      </div>
    </div>
    <!-- 您输入的字数超过限制！ -->
    <div class="layui-layer-dialogl">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
                <a href="javascript:;" class="layui-layer-close1"><img src="../../../../assets/img/res8.png" alt=""></a>
            </span>
      <div class="layui-layer-padding">
        <img src="../../../../assets/img/res_cuo.png" alt="">
        您输入的字数超过限制！
      </div>
      <div class="layui-layer-btna">
        <a href="javascript:;" class="layui-layer-btn3">确定</a>
      </div>
    </div>
    <!-- 确定要删除吗 -->
    <div class="layui-layer-dialogp">
      <div class="layui-layer-titlep">信息</div>
      <span class="layui-layer-setwindp">
            <a href="javascript:;" class="layui-layer-closep"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
      <div class="layui-layer-paddingp">
        确定要删除吗？
      </div>
      <div class="layui-layer-btnp">
        <a href="javascript:;" class="layui-layer-btn6">确定</a>
        <a href="javascript:;" class="layui-layer-btn7">取消</a>
      </div>
    </div>
    <!-- 已删除 -->
    <div class="happy">
      <a href="#" class="happys">
        <img src="../../../../assets/img/res_happy.png" alt="">
        <span>已删除！</span>
      </a>
    </div>
    <!-- 缩小 -->
    <div class="layui-animl">
      <div class="layui-layer-titlel">留言信息</div>
      <span class="layui-layer-setwinl">
            <a href="javascript:;"><img src="../../../../assets/img/res_big.png" alt=""></a>
            <a href="javascript:;"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
    </div>
  </div>
</template>
<script>
    export default {
        name: "ResIndexMessageList",
        data(){
            return{
              value1:""
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
        }
    }
</script>

<style scoped>
  .messagelist{
    padding: 20px 15px 60px;
    height: 100%;
    width: 80%;
    overflow-y: auto;
  }
  .messagelist::-webkit-scrollbar{
    display: none;
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
  .inline {
    display: inline-block!important;
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
  .btn-successa{
    background-color: #428bca;
    border: 5px solid #428bca;
  }
  .btn-successa:hover{
    background-color: #197ec1;
  }
  .btn-danger{
    background-color: #d15b47;
    border: 5px solid #d15b47;
  }
  .btn-danger:hover{
    background-color: #b74635;
  }
  .btn-yellow{
    background-color: #fee188;
    border: 5px solid #fee188;
  }
  .btn-yellow:hover{
    background-color: #f7d05b;
  }
  .r_f {
    float: right;
    font-size: 15px;
  }
  .dataTables_wrapper .row:first-child {
    padding-top: 12px;
    padding-bottom: 12px;
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
    font-weight: normal;
    background: #f2f2f2;
    background-repeat: repeat-x;
  }
  .table thead tr th{
    border: 1px solid #ddd;
    vertical-align: middle;
    text-align: center;
    color: #707070;
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
    width: 20px;
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
    color: #307ecc;
  }
  .table thead tr th:nth-child(2) {
    width: 62px;
    background-image: -webkit-gradient(linear,left 0,left 100%,from(#eff3f8),to(#e3e7ed));

    cursor: pointer;
  }
  .table thead tr th:nth-child(3) {
    width: 132px;
  }
  .table thead tr th:nth-child(4) {
    width: 322px;
  }
  .table thead tr th:nth-child(5) {
    width: 182px;
    cursor: pointer;
    color: #707070!important;
  }
  .table thead tr th:nth-child(6) {
    width: 52px;
  }
  .table thead tr th:nth-child(7) {
    width: 232px;
  }
  .table thead tr th:hover {
    color: #547ea8!important;
  }
  .table.table-bordered tbody tr td a {
    color: rgb(255, 102, 0);
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
  .text-primary {
    color: #428bca!important;
    text-decoration: underline;
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
    color: #F60;;
  }
  .table tbody tr td a:hover{
    text-decoration: underline;
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
  .btn-success{
    background-color: #87b87f;
    border: 5px solid #87b87f;
  }
  .btn-success:hover{
    background-color: #629b58;
  }
  .btn-xs {
    border-width: 3px;
    width: 42px;
    height:26px;
  }
  .btn-xs img{
    margin-bottom: 8px;
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
    top: 79px;
    right: 0;
    width: 80%;
    height: 100%;
    position: fixed;
    display: none;
  }
  /* 留言信息 */
  .layui-layer-page{
    z-index: 1223;
    width: 600px;
    position: fixed;
    top: 200px;
    left: 500px;
    height: 256px;
    overflow: visible;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    border-radius: 2px;
    display: none;
  }
  .layui-layer-title{
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
  .layui-layer-setwin{
    position: absolute;
    right: 15px;
    top: 11px;
    line-height: initial;
  }
  .layui-layer-setwin a {
    width: 16px;
    height: 16px;
    font-size: 12px;
    display: inline-block;
  }
  .layui-layer-setwin .layui-layer-min cite {
    position: absolute;
    width: 14px;
    height: 2px;
    left: 0;
    top: 50%;
    margin-top: -1px;
    background-color: #2E2D3C;
    cursor: pointer;
    font-style: normal;
  }
  .layui-layer-setwin .layui-layer-close1 img{
    cursor: pointer;
    margin-bottom: 5px;
    margin-left: 5px;
  }
  .layui-layer-page .layui-layer-content {
    overflow: auto;
    height: 156px;
  }
  .content_style {
    padding: 10px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .no-padding-right {
    padding-right: 0!important;
    text-align: right;
    line-height: 30px;
  }
  .col-sm-2 {
    width: 16.6666%;
    float: left;
    min-height: 1px;
    padding-left: 12px;
  }
  .col-sm-9 {
    width: 75%;
    float: left;
    min-height: 1px;
    padding-right: 12px;
    padding-left: 12px;
    position: relative;
  }
  .form-group:after {
    display: block;
    content: ".";
    height: 0;
    visibility: hidden;
    clear: both;
    font-size: 0;
    line-height: 0;
  }
  .col-sm-9 .check{
    width: 18px;
    margin-left: 3px;
  }
  .col-sm-9 .input_check {
    opacity: 0;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 1px;
    left: 15px;
  }
  .col-sm-9 .check label{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(../../../../assets/img/res_wei.png) no-repeat;
    background-size: 18px 18px;
    margin-top: 2px;
  }
  .col-sm-9 .check .input_check:checked+label {
    background: url(../../../../assets/img/res_xuan.png)no-repeat;
    background-size: 18px 18px;
  }
  .spanh{
    position: absolute;
    top: 0;
    left: 38px;
    font-size: 14px;
  }
  .content_style .Reply_style {
    margin-top: 10px;
    display: none;
  }
  .content_style textarea.form-control {
    width: 400px;
    height: 100px;
    resize: none;
    margin: 0px;
    padding: 5px 9px;
    box-shadow: none!important;
    color: #858585;
    border: 1px solid #d5d5d5;
  }
  .form-group textarea{
    background: #FFF;
    outline: 0;
  }
  .form-group textarea:focus{
    border-color:#f59942;
  }
  .layui-layer-page .layui-layer-btn {
    padding-top: 10px;
  }
  .layui-layer-btn {
    text-align: center;
    padding: 0 10px 12px;
    pointer-events: auto;
  }
  .layui-layer-btn .layui-layer-btn0 {
    border-color: #4898d5;
    background-color: #2e8ded;
    color: #fff;
  }
  .layui-layer-btn a {
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
    display: inline-block;
  }
  /* 回复内容不能为空 */
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
    top: 250px;
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
  /* 确定回复该内容 */
  .layui-layer-dialol{
    width: 260px;
    height: 154px;
    z-index: 9999999;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    border-radius: 2px;
    position: fixed;
    top: 250px;
    left: 50%;
    display: none;
  }
  .layui-layer-btn5{
    border: 1px solid #dedede;
    background-color: #f1f1f1;
    color: #333;
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
  /* 您输入的字数超过限制！ */
  .layui-layer-dialogl{
    width: 260px;
    height: 154px;
    z-index: 9999999;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    border-radius: 2px;
    position: fixed;
    top: 250px;
    left: 50%;
    display: none;
  }
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
    top: 250px;
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
  /* 缩小 */
  .layui-animl{
    position: fixed;
    z-index: 9999999;
    width: 180px;
    height: 42px;
    left: 36%;
    top: 30%;
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
