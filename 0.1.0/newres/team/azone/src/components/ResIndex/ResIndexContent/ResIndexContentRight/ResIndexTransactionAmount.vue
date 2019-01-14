<template>
 <div class="Amount clearfix">
     <span class="bread">
      <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
      <a href="javascript:;"><cite>支付管理</cite></a>  /
      <router-link to="/ResIndexTransactionAmount"><cite>账户管理</cite></router-link>
    </span>
   <div class="amounts_style">
       <div class="transaction_Money clearfix">
         <div class="Money">
           <span>成交总额：1.2234.3456.00元</span>
           <p>最新统计时间:2016-8-2</p>
         </div>
         <div class="Money">
           <span><em>￥</em>3456.00元</span>
           <p>当天成交额</p>
         </div>
         <div class="Statistics_btn">
           <a href="javascript:;" class="btn btn-tongji">
             <img class="fa" src="../../../../assets/img/res_statistics.png">
             <h5 class="margin-top">当月统计</h5>
           </a>
         </div>
       </div>
       <div class="border clearfix">
          <span class="l_f">
              <a href="#" class="btn btn-info">全部订单</a>
              <a href="#" class="btn btn-danger">当天订单</a>
              <a href="#" class="btn btn-danger">当月订单</a>
          </span>
         <span class="r_f">
            共：<b>2334</b>笔
        </span>
       </div>
       <div class="Record_list">
         <div class="dataTables_wrapper">
           <div class="row">
             <div class="col-sm-6">
               <div class="dataTables_length">
                 <label>
                   每页显示条数：
                   <select>
                     <option value="10">10</option>
                     <option value="25">25</option>
                     <option value="50">50</option>
                     <option value="100">100</option>
                   </select>
                 </label>
               </div>
             </div>
             <div class="col-sm-6"></div>
           </div>
           <table class="table">
             <thead>
             <tr>
               <th style="width:126px;">序号</th>
               <th style="width:271px;">订单编号</th>
               <th style="width:242px;">成交时间</th>
               <th style="width:156px;">成交金额(元)</th>
               <th style="width:243px;">状态</th>
             </tr>
             </thead>
             <tbody>
             <tr class="odd">
               <td>34</td>
               <td>HD2016061200456787</td>
               <td>2016-6-12</td>
               <td>234</td>
               <td>成功</td>
             </tr>
             <tr class="even">
               <td>24</td>
               <td>HD2016061200456787</td>
               <td>2016-6-12</td>
               <td>234</td>
               <td>成功</td>
             </tr>
             <tr class="odd">
               <td>34</td>
               <td>HD2016061200456787</td>
               <td>2016-6-12</td>
               <td>234</td>
               <td>成功</td>
             </tr>
             <tr class="even">
               <td>14</td>
               <td>HD2016061200456787</td>
               <td>2016-6-12</td>
               <td>234</td>
               <td>成功</td>
             </tr>
             <tr class="odd">
               <td>44</td>
               <td>HD2016061200456787</td>
               <td>2016-6-12</td>
               <td>234</td>
               <td>成功</td>
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
   <div class="layui-layer-shade">
   </div>
   <!-- 当月销售统计 -->
   <div class="layui-layer-page drag" v-drag>
     <div class="layui-layer-title">当月销售统计</div>
     <span class="layui-layer-setwin">
            <a href="javascript:;" class="layui-layer-min">
                <cite></cite>
            </a>
            <a href="javascript:;" class="layui-layer-max layui-layer-max"><img src="../../../../assets/img/res8.png"></a>
        </span>
     <div class="layui-layer-content" style="height:400px;width: 1000px;" id="histograms"></div>
     <div class="layui-layer-btn">
       <a href="javascript:;" class="layui-layer-btn0">确定</a>
       <a href="javascript:;" class="layui-layer-btn1">取消</a>
     </div>
   </div>
   <!-- 缩小 -->
   <div class="layui-animl drag" v-drag>
     <div class="layui-layer-titlel">当月销售...</div>
     <span class="layui-layer-setwinl">
            <a href="javascript:;" class="bigbig"><img src="../../../../assets/img/res_big.png" alt=""></a>
            <a href="javascript:;" class="smallclose"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
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
      name: "ResIndexTransactionAmount",
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
          let myChart = echarts.init(document.getElementById('histograms'))
          // 绘制图表
          myChart.setOption({
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
            },
            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            legend: {
              data:['成功订单','失败订单','成交金额']
            },
            xAxis: [
              {
                type: 'category',
                data: ['1','2','3','4','5','6','7','8','9','10','11','12',
                  '13','14','15','16','17','18','19','20','21','22','23','24','25',
                  '26','27','28','29','30','31'],
                axisPointer: {
                  type: 'shadow'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '订单',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                  formatter: '{value} '
                }
              },
              {
                type: 'value',
                name: '金额',
                min: 0,
                max: 8000,
                interval: 2000,
                axisLabel: {
                  formatter: '{value} '
                }
              }
            ],
            series: [
              {
                name:'成功订单',
                type:'bar',
                data:[120,156,167,145,178,200,78,45,76,87,89,54,27,201,134,123,56,67,78,46,34,37,58,198,204,246,46,67,87,43,67]
                ,color:"#dd6b66"
              },
              {
                name:'失败订单',
                type:'bar',
                data:[12,23,14,23,14,16,15,34,26,24,34,34,15,35,37,28,27,32,17,34,65,15,45,77,12,45,34,26,28,57,14],
                color:"#759aa0"
              },
              {
                name:'成交金额',
                type:'line',
                yAxisIndex: 1,
                data:[1234,234,123,1432,4543,2324,2423,5654,2343,5461,1367,1321,5464,1243,5435,6754,2342,2352,5743,1214,1411,1414,1411,5435,2353,2423,5752,1312,141,2123,1421],
                color:"#e69d87"
              }
            ]
          });
        }
      },
      mounted(){
        this.drawLine();
        //弹出框出现
        $('.Statistics_btn').click(function () {
          $('.layui-layer-shade').show();
          $('.layui-layer-page').show();
        })
        //确定和取消
        $('.layui-layer-btn0').click(function () {
          $('.layui-layer-shade').hide();
          $('.layui-layer-page').hide();
        })
        $('.layui-layer-btn1').click(function () {
          $('.layui-layer-shade').hide();
          $('.layui-layer-page').hide();
        })
        //close
        $('.layui-layer-max').click(function () {
          $('.layui-layer-shade').hide();
          $('.layui-layer-page').hide();
        })
        //小化
        $('.layui-layer-min').click(function () {
          $('.layui-layer-page').hide();
          $('.layui-animl').show();
        })
        //恢复普通模式
        $('.bigbig').click(function () {
          $('.layui-layer-page').show();
          $('.layui-animl').hide();
        })
        //小化关闭
        $('.smallclose').click(function () {
          $('.layui-layer-shade').hide();
          $('.layui-animl').hide();
        })
      }
    }
</script>

<style scoped>
.Amount{
  padding: 20px 15px 60px;
  width: 80%;
  overflow-y: auto;
}
.Amount::-webkit-scrollbar{
  display: none;
}
.amounts_style{
  margin-top: 20px;
}
.amounts_style .transaction_Money{
  border: 1px solid #dddddd;
  margin-bottom: 15px;
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
.amounts_style .transaction_Money .Money {
  min-width: 200px;
  position: relative;
  float: left;
  border-right: 1px solid #dddddd;
  text-align: center;
  font-size: 18px;
  color: #F33;
  line-height: 80px;
  height: 100px;
}
.amounts_style .transaction_Money .Money span {
  padding: 0px 10px;
}
.amounts_style .transaction_Money .Money p {
  font-size: 14px;
  color: #999;
  background-color: #ededed;
  border-top: 1px dashed #dddddd;
  position: absolute;
  bottom: 0px;
  height: 30px;
  line-height: 30px;
  width: 100%;
}
.amounts_style .transaction_Money .Money em {
  font-size: 12px;
}
em{
  font-style: normal;
}
.amounts_style .Statistics_btn {
  margin-left: 13px;
  float: left;
}
.amounts_style .Statistics_btn .btn-tongji {
  margin-top: 13px;
  background-color: #6fb3e0;
  border-width: 4px;
  font-size: 13px;
  padding: 4px 9px;
  line-height: 1.39;
  border: 5px solid #6fb3e0;
}
.amounts_style .Statistics_btn .btn-tongji:hover{
  background-color: #4f99c6;
}
.fa{
  display: inline-block;
  width: 36px;
  height: 32px;
}
h5{
  margin-top: 10px;
  font-size: 15px;
  font-weight: normal;
  font-family: "Microsoft YaHei",Helvetica,Arial,sans-serif;
}
.border{
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
.l_f {
  float: left;
}
.btn{
  box-shadow: none!important;
  cursor: pointer;
  vertical-align: middle;
  margin-right: 5px;
  border-radius: 3px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.428571429;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  padding: 3px 10px;
  display: inline-block;
  font-family: "Microsoft YaHei";
  color: #FFF!important;
  background-image: none!important;
}
.btn-info{
  background-color: #6fb3e0;
  border: 5px solid #6fb3e0;

}
.btn-info:hover{
  background-color: #4f99c6;
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
}
.dataTables_wrapper .row:first-child {
  padding-top: 12px;
  padding-bottom: 12px;
}
.dataTables_wrapper .row {
  margin: 0;
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
  position: relative;
  min-height: 1px;
  padding-right: 12px;
  padding-left: 12px;
}
.dataTables_wrapper label {
  display: inline-block;
  font-size: 13px;
  font-weight: normal;
}
label{
  vertical-align: middle;
}
.dataTables_wrapper select {
  margin-bottom: 0!important;
  margin: 0 4px;
  width: 70px;
  height: 25px;
  padding: 2px 3px;
  line-height: 30px;
  border-radius: 0;
  box-shadow: none!important;
  color: #858585;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  font-family: "Microsoft YaHei";
  outline: 0;
}
select option{
  padding: 3px 4px;
}
.dataTables_wrapper select:focus{
  border-color: #f59942;
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
  display: table;
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
.table thead tr th:first-child {
  border-left-color: #DDD;
}
.table thead:first-child tr:first-child th{
  border-top: 0;
}
.table.table-bordered thead tr th {
  vertical-align: middle;
  text-align: center;
}
.table th{
  cursor: inherit;
  color: #307ecc;
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
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.table.table-bordered tbody tr td {
  overflow-wrap: break-word;
  word-break: break-all;
  vertical-align: middle;
  font-family: 新宋体;
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
td{
  display: table-cell;
}
.table tbody .even:hover{
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
/* 当月销售统计 */
.layui-layer-page{
  z-index: 99999;
  width: 1000px;
  top: 100px;
  left: 310px;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 1px 1px 50px rgba(0,0,0,.3);
  border-radius: 2px;
  position: fixed;
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
  top: 12px;
  font-size: 0;
  line-height: initial;
}
.layui-layer-setwin a {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 10px;
  font-size: 12px;
  vertical-align: top;
}
.layui-layer-setwin .layui-layer-min cite {
  position: absolute;
  width: 14px;
  height: 2px;
  left: 11px;
  top: 54%;
  margin-top: -1px;
  background-color: #2E2D3C;
  cursor: pointer;
  font-style: normal;
}
.layui-layer-setwin .layui-layer-close1 {
  cursor: pointer;
}
.layui-layer-page .layui-layer-content {
  overflow: auto;
}
.layui-layer-page .layui-layer-btn {
  padding-top: 10px;
  text-align: center;
  padding: 0 10px 12px;
  pointer-events: auto;
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
  vertical-align: top;
}
.layui-layer-btn .layui-layer-btn0 {
  border-color: #4898d5;
  background-color: #2e8ded;
  color: #fff;
}
.layui-layer-btn .layui-layer-btn0:hover{
  background-color: #6fb3e0;
}
/* 缩小 */
.layui-animl{
  position: fixed;
  z-index: 9999999;
  width: 180px;
  height: 42px;
  left: 27%;
  top: 18%;
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
