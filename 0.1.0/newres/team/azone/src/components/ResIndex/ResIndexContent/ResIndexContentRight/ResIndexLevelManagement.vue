<template>
<div class="level">
  <span class="bread">
      <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
      <a href="javascript:;"><cite>支付管理</cite></a>  /
      <router-link to="/ResIndexLevelManagement"><cite>账户管理</cite></router-link>
    </span>
    <div class="page_right_style right_grading Widescreen">
      <div class="Statistics_style side_green">
        <div class="type_title">
          等级统计
          <span class="top_show_btn Statistic_btn xianshi">显示</span>
          <span class="Statistic_title Statistic_btn yingcang" style="height:30px;">
              <a href="javascript:;" class="top_close_btn" title="隐藏">隐藏</a>
          </span>
        </div>
        <div class="Statistics" id="histogramm" style="height: 400px;width: 1043px;"></div>
      </div>
      <!-- 列表样式 -->
      <div class="grading_list">
        <div class="type_title">全部会员等级列表</div>
        <div class="table_menu_list Widescreen">
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
                <th>ID</th>
                <th>用户名</th>
                <th>性别</th>
                <th>手机</th>
                <th>邮箱</th>
                <th>加入时间</th>
                <th>等级</th>
                <th>积分</th>
                <th>状态</th>
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
                <td>
                  <a href="javascript:;" class="text-primary">张三</a>
                </td>
                <td>男</td>
                <td>13000000000</td>
                <td>admin@mail.com</td>
                <td>2014-6-11 11:11:42</td>
                <td>普通用户</td>
                <td>345</td>
                <td class="td">
                  <span class="label label-success">已启用</span>
                  <span class="label label-successa">已停用</span>
                </td>
                <td class="tds">
                  <a href="javascript:;" title="停用" class="btn btn-xs btn-success">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" title="启用" class="btn btn-xs btn-successh">
                    <img src="../../../../assets/img/res_false.png" alt="">
                  </a>
                  <a href="javascript:;" title="删除" class="btn btn-xs btn-warning">
                    <img src="../../../../assets/img/res9.png">
                  </a>
                </td>
              </tr>
              <tr class="even">
                <td>
                  <div class="check">
                    <input type="checkbox" class="input_check subcheck">
                    <label></label>
                  </div>
                </td>
                <td>2</td>
                <td>
                  <a href="javascript:;" class="text-primary">张小泉</a>
                </td>
                <td>男</td>
                <td>13000000000</td>
                <td>admin@mail.com</td>
                <td>2014-6-11 11:11:42</td>
                <td>普通用户</td>
                <td>1345</td>
                <td class="td">
                  <span class="label label-success">已启用</span>
                  <span class="label label-successa">已停用</span>
                </td>
                <td class="tds">
                  <a href="javascript:;" title="停用" class="btn btn-xs btn-success">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" title="启用" class="btn btn-xs btn-successh">
                    <img src="../../../../assets/img/res_false.png" alt="">
                  </a>
                  <a href="javascript:;" title="删除" class="btn btn-xs btn-warning">
                    <img src="../../../../assets/img/res9.png">
                  </a>
                </td>
              </tr>
              <tr class="odd">
                <td>
                  <div class="check">
                    <input type="checkbox" class="input_check subcheck">
                    <label></label>
                  </div>
                </td>
                <td>3</td>
                <td>
                  <a href="javascript:;" class="text-primary">张小泉</a>
                </td>
                <td>男</td>
                <td>13000000000</td>
                <td>admin@mail.com</td>
                <td>2014-6-11 11:11:42</td>
                <td>银牌用户</td>
                <td>645</td>
                <td class="td">
                  <span class="label label-success">已启用</span>
                  <span class="label label-successa">已停用</span>
                </td>
                <td class="tds">
                  <a href="javascript:;" title="停用" class="btn btn-xs btn-success">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" title="启用" class="btn btn-xs btn-successh">
                    <img src="../../../../assets/img/res_false.png" alt="">
                  </a>
                  <a href="javascript:;" title="删除" class="btn btn-xs btn-warning">
                    <img src="../../../../assets/img/res9.png">
                  </a>
                </td>
              </tr>
              <tr class="even">
                <td>
                  <div class="check">
                    <input type="checkbox" class="input_check subcheck">
                    <label></label>
                  </div>
                </td>
                <td>4</td>
                <td>
                  <a href="javascript:;" class="text-primary">张小泉</a>
                </td>
                <td>男</td>
                <td>13000000000</td>
                <td>admin@mail.com</td>
                <td>2014-6-11 11:11:42</td>
                <td>银牌用户</td>
                <td>645</td>
                <td class="td">
                  <span class="label label-success">已启用</span>
                  <span class="label label-successa">已停用</span>
                </td>
                <td class="tds">
                  <a href="javascript:;" title="停用" class="btn btn-xs btn-success">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" title="启用" class="btn btn-xs btn-successh">
                    <img src="../../../../assets/img/res_false.png" alt="">
                  </a>
                  <a href="javascript:;" title="删除" class="btn btn-xs btn-warning">
                    <img src="../../../../assets/img/res9.png">
                  </a>
                </td>
              </tr>
              <tr class="odd">
                <td>
                  <div class="check">
                    <input type="checkbox" class="input_check subcheck">
                    <label></label>
                  </div>
                </td>
                <td>5</td>
                <td>
                  <a href="javascript:;" class="text-primary">张小泉</a>
                </td>
                <td>男</td>
                <td>13000000000</td>
                <td>admin@mail.com</td>
                <td>2014-6-11 11:11:42</td>
                <td>银牌用户</td>
                <td>345</td>
                <td class="td">
                  <span class="label label-success">已启用</span>
                  <span class="label label-successa">已停用</span>
                </td>
                <td class="tds">
                  <a href="javascript:;" title="停用" class="btn btn-xs btn-success">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" title="启用" class="btn btn-xs btn-successh">
                    <img src="../../../../assets/img/res_false.png" alt="">
                  </a>
                  <a href="javascript:;" title="删除" class="btn btn-xs btn-warning">
                    <img src="../../../../assets/img/res9.png">
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
    </div>
    <!-- 遮罩层 -->
    <div class="layui-layer-shade">
    </div>
    <!-- 确定要停用吗 -->
    <div class="layui-layer-dialogp layui-layer-dialogpfg drag" v-drag>
      <div class="layui-layer-titlep">信息</div>
      <span class="layui-layer-setwindp">
                <a href="javascript:;" class="layui-layer-closep tingclose"><img src="../../../../assets/img/res8.png" alt=""></a>
            </span>
      <div class="layui-layer-paddingp">
        确定要停用吗！
      </div>
      <div class="layui-layer-btnp">
        <a href="javascript:;" class="layui-layer-btn6 tingken">确定</a>
        <a href="javascript:;" class="layui-layer-btn7 tingqu">取消</a>
      </div>
    </div>
    <!-- 已停用 -->
    <div class="hen">
      <a href="#" class="hens">
        <img src="../../../../assets/img/res_hei.png" alt="">
        <span>停用!</span>
      </a>
    </div>
    <!-- 确定要启用吗 -->
    <div class="layui-layer-dialogp layui-layer-dialogpgh drag" v-drag>
      <div class="layui-layer-titlep">信息</div>
      <span class="layui-layer-setwindp">
            <a href="javascript:;" class="layui-layer-closep qiclose"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
      <div class="layui-layer-paddingp">
        确定要启用吗！
      </div>
      <div class="layui-layer-btnp">
        <a href="javascript:;" class="layui-layer-btn6 qiken">确定</a>
        <a href="javascript:;" class="layui-layer-btn7 qiqu">取消</a>
      </div>
    </div>
    <!-- 已启用 -->
    <div class="happy">
      <a href="#" class="happys">
        <img src="../../../../assets/img/res_happy.png" alt="">
        <span>已启用！</span>
      </a>
    </div>
  <!-- 确定要删除吗 -->
  <div class="layui-layer-dialogpp drag" v-drag>
    <div class="layui-layer-titlep">信息</div>
    <span class="layui-layer-setwindp">
            <a href="javascript:;" class="layui-layer-closep closepp"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
    <div class="layui-layer-paddingp">
      确定要删除吗?
    </div>
    <div class="layui-layer-btnp">
      <a href="javascript:;" class="layui-layer-btn6 deleteken">确定</a>
      <a href="javascript:;" class="layui-layer-btn7 shanqu">取消</a>
    </div>
  </div>
  <!-- 已删除 -->
  <div class="shanchu">
    <a href="#" class="shanchus">
      <img src="../../../../assets/img/res_l.png">
      <span>已删除！</span>
    </a>
  </div>
</div>
</template>

<script>
  import $ from 'jquery'
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图组件
  require('echarts/lib/chart/bar');
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require('echarts/lib/component/markPoint');
  require('echarts/lib/component/legend');
  require('echarts/lib/component/toolbox');

    export default {
        name: "ResIndexContentRightFourteen",
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
          drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('histogramm'))
            // 绘制图表
            myChart.setOption({
              title : {
                text: '用户等级统计',
                subtext: '实时更新最新等级',
                x:'center'
              },
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              toolbox:{
                show: true,
                feature: {
                  dataView: { //数据视图
                    show: true
                  },
                  restore: { //重置
                    show: true
                  },
                  saveAsImage: {//保存图片
                    show: true
                  }
                }
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                data: ['普通用户','铁牌用户','铜牌用户','银牌用户'
                  ,'金牌用户','钻石用户','蓝钻用户','红钻用户' ]
              },
              series : [
                {
                  name: '品牌数量',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                    {value:1200, name:'普通用户',},
                    {value:1100, name:'铁牌用户'},
                    {value:1300, name:'铜牌用户'},
                    {value:1000, name:'银牌用户'},
                    {value:980, name:'金牌用户'},
                    {value:850, name:'钻石用户'},
                    {value:550, name:'蓝钻用户'},
                    {value:220, name:'红钻用户'}
                  ],
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.1)'
                    }
                  }
                }
              ]
            });
          },
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
        mounted(){
          this.drawLine();
          this.select();
          //隐藏
          $('.yingcang').click(function () {
            $('#histogramm').hide();
            $('.yingcang').hide();
            $('.xianshi').show();
          })
          //显示
          $('.xianshi').click(function () {
            $('#histogramm').show();
            $('.xianshi').hide();
            $('.yingcang').show();
          })
          //停用
          let length = $(".btn-success").length;
          let count = 0;
          let index = "";
          $(".btn-success").each(function () {
            $(this).attr({"index":count});
            count++;
          });
          $(".btn-successh").each(function () {
            $(this).attr({"index":count});
            count++;
          });
          $(".label-success").each(function () {
            $(this).attr({"index":count});
            count++;
          });
          $(".label-successa").each(function () {
            $(this).attr({"index":count});
            count++;
          });

          $('.btn-success').click(function(){
            index = $(this).attr("index");
            $('.layui-layer-dialogpfg').show();
            $('.layui-layer-shade').show();
            $('.tingclose').click(function(){
              $('.layui-layer-dialogpfg').hide();
              $('.layui-layer-shade').hide();
            });
            $('.tingqu').click(function(){
              $('.layui-layer-dialogpfg').hide();
              $('.layui-layer-shade').hide();
            });
            $('.tingken').click(function () {
              $('.layui-layer-dialogpfg').hide();
              $('.layui-layer-shade').hide();

              $(".btn-success").eq(index).hide();
              $(".btn-successh").eq(index).show();
              $(".label-success").eq(index).hide();
              $(".label-successa").eq(index).show();
              $('.hen').show();
              setInterval(function () {
                $('.hen').hide();
              },2000);
            })
          });

          //启用
          let lengthhh = $(".btn-successh").length;
          let counttt = 0;
          let indexss = "";
          $(".btn-successh").each(function () {
            $(this).attr({"indexss":counttt});
            counttt++;
          });
          $(".btn-success").each(function () {
            $(this).attr({"indexss":counttt});
            counttt++;
          });
          $(".label-successa").each(function () {
            $(this).attr({"indexss":counttt});
            counttt++;
          });
          $(".label-success").each(function () {
            $(this).attr({"indexss":counttt});
            counttt++;
          });

          $('.btn-successh').click(function(){
            indexss = $(this).attr("indexss");
            $('.layui-layer-dialogpgh').show();
            $('.layui-layer-shade').show();
            $('.qiclose').click(function(){
              $('.layui-layer-dialogpgh').hide();
              $('.layui-layer-shade').hide();
            });
            $('.qiqu').click(function(){
              $('.layui-layer-dialogpgh').hide();
              $('.layui-layer-shade').hide();
            });
            $('.qiken').click(function () {
              $('.layui-layer-dialogpgh').hide();
              $('.layui-layer-shade').hide();

              $(".btn-successh").eq(indexss).hide();
              $(".btn-success").eq(indexss).show();
              $(".label-successa").eq(indexss).hide();
              $(".label-success").eq(indexss).show();
              $('.happy').show();
              setInterval(function () {
                $('.happy').hide();
              },2000);
            })
          })

          //删除用户
          let lengthh = $(".btn-warning").length;
          let countt = 0;
          let indexs = "";
          $(".btn-warning").each(function () {
            $(this).attr({"indexs":countt});
            countt++;
          });
          $('.table tbody tr').each(function () {
            $(this).attr({"indexs":countt});
            countt++;
          });

          $('.btn-warning').click(function () {
            indexs = $(this).attr("indexs");
            $('.layui-layer-dialogpp').show();
            $('.layui-layer-shade').show();
            $('.deleteken').click(function () {
              $('.layui-layer-dialogpp').hide();
              $('.layui-layer-shade').hide();
              $('.table tbody tr').eq(indexs).hide();
              $('.shanchu').show();
              setInterval(function () {
                $('.shanchu').hide();
              },2000);
            })
            $('.shanqu').click(function () {
              $('.layui-layer-dialogpp').hide();
              $('.layui-layer-shade').hide();
            })
            $('.closepp').click(function () {
              $('.layui-layer-dialogpp').hide();
              $('.layui-layer-shade').hide();
            })
          })
        }
    }
</script>

<style scoped>
  .level{
    padding: 20px 15px 60px;
    width: 80%;
    overflow-y: auto;
  }
  .level::-webkit-scrollbar{
    display: none;
  }
  .page_right_style .type_title{
    padding-left: 20px;
    font-size: 18px;
    border-bottom: 1px solid #dddddd;
    background: #2a8bcc!important;
    background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%)!important;
    background-repeat: repeat-x!important;
    height: 40px;
    line-height: 40px;
    color: #333333;
    width: 100%;
  }
  .Statistics_style .top_show_btn{
    display: none;
  }
  .Statistics_style .Statistic_btn{
    border: 1px solid #dddddd;
    font-size: 14px;
    text-align: center;
    border-radius: 3px;
    float: right;
    margin-right: 100px;
    height: 30px;
    margin-top: 5px;
    line-height: 26px;
    padding: 0px 10px;
    width: 80px;
    cursor: pointer;
  }
  .Statistics_style .Statistic_btn{
    border: 1px solid #dddddd;
    font-size: 14px;
    text-align: center;
    -webkit-border-radius: 3px;
    float: right;
    margin-right: 100px;
    margin-top: 5px;
    line-height: 26px;
    padding: 0px 10px;
    width: 80px;
    cursor: pointer;
  }
  .Statistics_style .Statistic_btn a{
    display: block;
    color: #333333;
  }
  .Statistics_style .Statistic_btn a:hover{
    text-decoration: underline;
    color: #F60;
  }
  .xianshi:hover{
    text-decoration: underline;
    color: #F60;
  }
  .Statistics{
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: default;
    display: block;
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }
  .grading_list .table_menu_list{
    padding: 10px;
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
    display: table;
    content: " ";
    clear: both;
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
  .dataTables_wrapper .row:first-child + .table {
    font-family: 新宋体;
    border-top: 1px solid rgb(221, 221, 221);
    border-bottom: 1px solid rgb(221, 221, 221);
  }
  .table{
    margin-bottom: 0;
    text-align: center;
    border: 1px solid #ddd;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    max-width: 100%;
    background-color: transparent;
  }
  thead{
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .table thead tr {
    color: #707070;
    font-weight: normal;
    background: #f2f2f2;
    background-repeat: repeat-x;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  .table thead tr th:first-child {
    border-left-color: #DDD;
    width:20px;
  }
  .table thead tr th:nth-child(2) {
    width:41px;
    background-image: linear-gradient(rgb(239, 243, 248) 0px, rgb(227, 231, 237) 100%);
    background-repeat: repeat-x;
    cursor: pointer;
  }
  .table thead tr th:nth-child(3) {
    width:54px;
  }
  .table thead tr th:nth-child(4) {
    width:43px;
  }
  .table thead tr th:nth-child(5) {
    width:66px;
  }
  .table thead tr th:nth-child(6) {
    width:83px;
  }
  .table thead tr th:nth-child(7) {
    width:100px;
  }
  .table thead tr th:nth-child(8) {
    width:55px;
  }
  .table thead tr th:nth-child(9) {
    width:55px;
    cursor: pointer;
    color: rgb(112, 112, 112);
  }
  .table thead tr th:nth-child(10) {
    width:52px;
  }
  .table thead tr th:nth-child(11) {
    width:151px;
    cursor: pointer;
    color: rgb(112, 112, 112);
  }
  .table thead tr th {
    vertical-align: middle;
    text-align: center;
    border-color: #DDD;
    font-weight: bold;
    color: rgb(48, 126, 204);
    font-size: 16px;
  }
  .table thead tr th:hover{
    color: #547ea8;
  }
  .table>thead>tr>th {
    border-bottom-width: 1px;
  }
  .table>thead>tr>th{
    border: 1px solid #ddd;
  }
  .table thead>tr>th{
    padding: 8px;
    line-height: 1.428571429;
  }
  .check{
    width: 18px;
    margin-left: 3px;
    padding-left: 8px;
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
  .table td {
    font-size: 12px;
  }
  .table tbody tr td {
    word-wrap: break-word;
    word-break: break-all;
    vertical-align: middle;
    font-family: "新宋体";
    text-align: center;
  }
  .table-striped>tbody>tr:nth-child(odd)>td{
    background-color: #f9f9f9;
  }
  .table>tbody>tr>td{
    border: 1px solid #ddd;
  }
  .table tbody>tr>td{
    padding: 8px;
    line-height: 1.428571429;
  }
  td{
    display: table-cell;
  }
  .text-primary {
    color: #428bca;
    cursor: pointer;
    text-decoration: underline;
  }
  .label-success{
    background-color: #82af6f;
  }
  .td .label-successa{
    background-color: #abbac3;
    display: none;
  }
  .label{
    font-size: 12px;
    line-height: 1.15;
    height: 20px;
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
  .btn-xs {
    border-width: 3px;
    width: 42px;
    height:26px;
  }
  .btn-xs img{
    margin-bottom: 8px;
  }
  .btn-success{
    background-color: #87b87f;
    border: 5px solid #87b87f;
  }
  .btn-success:hover{
    background-color: #629b58;
  }
  .tds{
    display: flex;
    justify-content: center;
  }
  .tds .btn-successh{
    background-color: #abbac3;
    border: 5px solid #abbac3;
     display: none;
  }
  .btn-successh:hover{
    background-color: #8b9aa3;
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
  /* 确定要停用吗 */
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
  /* 已停用 */
  .hen{
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
  .hens{
    display: block;
    width: 100%;
    height: 30px;
    margin-top: 16px;
    font-size: 14px;
    color: #393939;
  }
  .hen .hens img{
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 15px;
    margin-right: 10px;
    float: left;
  }
  .hen .hens span{
    display: block;
    float: left;
    height: 30px;
    line-height: 30px;
  }
  /* 已启用 */
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
  /* 确定要删除吗 */
  .layui-layer-dialogpp{
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
  .layui-layer-dialogpp .layui-layer-btnp{
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
