<template>
<div class="TradingInformation">
   <span class="bread">
      <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
      <a href="javascript:;"><cite>支付管理</cite></a>  /
      <router-link to="/ResIndexTradingInformation"><cite>账户管理</cite></router-link>
    </span>
  <div class="tradingLis">
     <ul>
       <li>
         <span class="symbol red">¥</span>
         <span class="value">
           <h4>交易金额</h4>
           <p class="Quantity color_red">34565.68</p>
         </span>
       </li>
       <li>
         <span class="symbol blue"><img src="../../../../assets/img/res_shopping.png"></span>
         <span class="value">
           <h4>订单数量</h4>
           <p class="Quantity color_red ">5656</p>
         </span>
       </li>
       <li>
         <span class="symbol terques"><img src="../../../../assets/img/res_shopping.png"></span>
         <span class="value">
           <h4>交易成功</h4>
           <p class="Quantity  color_red">45665</p>
         </span>
       </li>
       <li>
         <span class="symbol yellow"><img src="../../../../assets/img/res_shopping.png"></span>
         <span class="value">
           <h4>交易失败</h4>
           <p class="Quantity  color_red">34</p>
         </span>
       </li>
       <li>
         <span class="symbol darkblue">¥</span>
         <span class="value">
           <h4>退款金额</h4>
           <p class="Quantity  color_red">3441.68</p>
         </span>
       </li>
     </ul>
  </div>
  <div id="histogram"></div>
</div>
</template>

<script>
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
        name: "ResIndexTradingInformation",
        methods:{
          drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('histogram'))
            // 绘制图表
            myChart.setOption({
              title : {
                text: '月购买订单交易记录',
                textStyle:{
                  fontWeight:'normal',
                  fontSize:16,
                  color:'#6ccac9'
                },
                subtext: '纯属虚构',
                subtextStyle:{
                  fontSize:12
                }
              },
              tooltip : {
                trigger: 'axis'
              },
              legend: {
                data:['所有订单','待付款','已付款','代发货']
              },
              toolbox: {
                show : true,
                feature : {
                  dataView : {show: true, readOnly: false},
                  saveAsImage : {show: true}
                }
              },
              calculable : true,
              xAxis : [
                {
                  type : 'category',
                  data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                  splitLine:{show: true}//去除网格线
                }
              ],
              yAxis : [
                {
                  type : 'value'
                }
              ],
              series : [
                {
                  name:'所有订单',
                  type:'bar',
                  data:[120, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 164, 133],
                  markPoint : {
                    data : [
                      {type : 'max', name: '最大值'},
                      {type : 'min', name: '最小值'}
                    ]
                  },
                  color: "#2ec7c9"
                },
                {
                  name:'待付款',
                  type:'bar',
                  data:[26, 59, 30, 84, 27, 77, 176, 1822, 487, 188, 60, 23],
                  markPoint : {
                    data : [
                      {type : 'max', name: '最大值'},
                      {type : 'min', name: '最小值'}
                    ]
                  },
                  color:"#b7a3df"
                },
                {
                  name:'已付款',
                  type:'bar',
                  data:[26, 59, 60, 264, 287, 77, 176, 122, 247, 148, 60, 23],
                  markPoint : {
                    data : [
                      {type : 'max', name: '最大值'},
                      {type : 'min', name: '最小值'}
                    ]
                  },
                  color:"#5ab1ef"
                },
                {
                  name:'代发货',
                  type:'bar',
                  data:[26, 59, 80, 24, 87, 70, 175, 1072, 48, 18, 69, 63],
                  markPoint : {
                    data : [
                      {type : 'max', name: '最大值'},
                      {type : 'min', name: '最小值'}
                    ]
                  },
                  color:"#ffb981"
                }
              ]
            });
          }
        },
        mounted(){
          this.drawLine();
        }
    }
</script>

<style scoped>
.TradingInformation{
  padding: 20px 15px 60px;
  width: 80%;
  overflow-y: auto;
}
.TradingInformation::-webkit-scrollbar{
  display: none;
}
.tradingLis{
  margin-top: 15px;
}
  .tradingLis li{
    width: 200px;
    float: left;
    margin: 10px 5px;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
.symbol{
  padding: 10px;
  display: inline-block;
  text-align: center;
  width: 40%;
  border-radius: 4px 0px 0px 4px;
  float: left;
  color: #fff;
  font-size: 36px;
}
.red {
  background: #ff6c60;
}
.value{
  padding-top: 15px;
  display: inline-block;
  text-align: center;
  float: right;
  width: 58%;
}
.value h4{
  line-height: 1.1;
  font-size: 18px;
  font-weight: normal;
  font-family: "Microsoft YaHei";
}
.Quantity{
  font-size: 18px;
  margin-top: 5px;
}
.color_red {
  color: #F33;
}
  .blue{
    background: #57c8f2;
  }
  .terques{
    background: #6ccac9;
  }
  .yellow{
    background:#f8d347 ;
  }
  .darkblue{
    background: #438eb9;
  }
  #histogram{
    width: 1050px;
    height: 450px;
    overflow: hidden;
    border: 1px solid #ddd;
    padding-top:10px;
    padding-left: 50px;
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
