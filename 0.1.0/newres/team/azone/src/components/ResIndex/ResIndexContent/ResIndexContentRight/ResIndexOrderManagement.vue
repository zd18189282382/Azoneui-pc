<template>
<div class="OrderManagement">
   <span class="bread">
      <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
      <a href="javascript:;"><cite>支付管理</cite></a>  /
      <router-link to="/ResIndexOrderManagement"><cite>账户管理</cite></router-link>
    </span>
  <div class="orderform">
     <div class="orderformhead">
       购物产品比例
       <div class="formbtn">
         <a href="javascript:;" @click="displayblock" class="blockbtn">显示</a>
         <a href="javascript:;" @click="displaynone" class="nonebtn">隐藏</a>
       </div>
     </div>
     <div class="ordercontent">
        <div class="proportion">
          <div class="percentage"><span >20</span>%</div>
          <span class="percent">食品类</span>
        </div>
       <div class="proportion">
         <div class="percentage"><span >55</span>%</div>
         <span class="percent">服装类</span>
       </div>
       <div class="proportion">
         <div class="percentage"><span >90</span>%</div>
         <span class="percent">数码配件</span>
       </div>
       <div class="proportion">
         <div class="percentage"><span >30</span>%</div>
         <span class="percent">手机</span>
       </div>
       <div class="proportion">
         <div class="percentage"><span >60</span>%</div>
         <span class="percent">电脑</span>
       </div>
       <div class="proportion">
         <div class="percentage"><span >40</span>%</div>
         <span class="percent">电子产品</span>
       </div>
       <div class="proportion">
         <div class="percentage"><span >46</span>%</div>
         <span class="percent">厨房用品</span>
       </div>
       <div class="proportion">
         <div class="percentage"><span >65</span>%</div>
         <span class="percent">家用电器</span>
       </div>
       <div class="proportion">
         <div class="percentage"><span >56</span>%</div>
         <span class="percent">卫浴</span>
       </div>
     </div>
  </div>
  <div class="tableform">
    <div class="form">
       <div class="list_right_style">
         <div class="search_style">
            <ul>
              <li>
                <label class="l_f">订单编号</label>
                <input type="text" placeholder="订单订单编号" class="orderinput">
              </li>
              <li>
                <el-date-picker v-model="value1" size="small" type="date" placeholder="选择日期"></el-date-picker>
              </li>
              <li style="width:90px;">
                <button type="button" class="btn_search"><img src="../../../../assets/img/res_1.jpg">查询</button>
              </li>
            </ul>
         </div>
       </div>
    </div>
  </div>
  <div class="dataTables_wrapper">
    <div class="row">
      <div class="col-sm-6">
        <div class="dataTables_length">
          <label>
            每页显示条数
            <select>
              <option value="10">10</option>
              <option value="25">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="dataTables_filter">
          <label>搜索:<input type="search" class="sample-table"></label>
        </div>
      </div>
    </div>
    <table class="tables">
      <thead>
      <tr>
        <th>
          <div class="check">
            <input type="checkbox" class="input_check checkall">
            <label></label>
          </div>
        </th>
        <th>订单编号</th>
        <th>产品名称</th>
        <th>总价</th>
        <th>优惠</th>
        <th>订单时间</th>
        <th>所属类型</th>
        <th>数量</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <div class="checks">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>20160705445622</td>
        <td class="productname">
          <a href="javascript:;"><img src="../../../../assets/img/resp_1.jpg" title="产品名称"></a>
          <span>+</span>
          <a href="javascript:;"><img src="../../../../assets/img/resp_2.jpg" title="产品名称"></a>
        </td>
        <td>456.5</td>
        <td>14</td>
        <td>2016-7-5</td>
        <td>食品</td>
        <td>2</td>
        <td><span class="label-success">代发货</span><span class="label-suc">已发货</span></td>
        <td>
          <a href="javascript:;" class="btn lefts"><img src="../../../../assets/img/res_product1.png"></a>
          <a href="javascript:;" class="btn centers"><img src="../../../../assets/img/res_product2.png"></a>
          <a href="javascript:;" class="btn rights"><img src="../../../../assets/img/res_product3.png"></a>
        </td>
      </tr>
      <tr>
        <td>
          <div class="checks">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>20160705445622</td>
        <td class="productname">
          <a href="javascript:;"><img src="../../../../assets/img/resp_1.jpg" title="产品名称"></a>
          <span>+</span>
          <a href="javascript:;"><img src="../../../../assets/img/resp_2.jpg" title="产品名称"></a>
        </td>
        <td>456.5</td>
        <td>14</td>
        <td>2016-7-5</td>
        <td>食品</td>
        <td>2</td>
        <td><span class="label-success">代发货</span><span class="label-suc">已发货</span></td>
        <td>
          <a href="javascript:;" class="btn lefts"><img src="../../../../assets/img/res_product1.png"></a>
          <a href="javascript:;" class="btn centers"><img src="../../../../assets/img/res_product2.png"></a>
          <a href="javascript:;" class="btn rights"><img src="../../../../assets/img/res_product3.png"></a>
        </td>
      </tr>
      <tr>
        <td>
          <div class="checks">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>20160705445622</td>
        <td class="productname">
          <a href="javascript:;"><img src="../../../../assets/img/resp_1.jpg" title="产品名称"></a>
          <span>+</span>
          <a href="javascript:;"><img src="../../../../assets/img/resp_2.jpg" title="产品名称"></a>
        </td>
        <td>456.5</td>
        <td>14</td>
        <td>2016-7-5</td>
        <td>食品</td>
        <td>2</td>
        <td><span class="label-success">代发货</span><span class="label-suc">已发货</span></td>
        <td>
          <a href="javascript:;" class="btn lefts"><img src="../../../../assets/img/res_product1.png"></a>
          <a href="javascript:;" class="btn centers"><img src="../../../../assets/img/res_product2.png"></a>
          <a href="javascript:;" class="btn rights"><img src="../../../../assets/img/res_product3.png"></a>
        </td>
      </tr>
      <tr>
        <td>
          <div class="checks">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>20160705445622</td>
        <td class="productname">
          <a href="javascript:;"><img src="../../../../assets/img/resp_1.jpg" title="产品名称"></a>
          <span>+</span>
          <a href="javascript:;"><img src="../../../../assets/img/resp_2.jpg" title="产品名称"></a>
        </td>
        <td>456.5</td>
        <td>14</td>
        <td>2016-7-5</td>
        <td>食品</td>
        <td>2</td>
        <td><span class="label-success">代发货</span><span class="label-suc">已发货</span></td>
        <td>
          <a href="javascript:;" class="btn lefts"><img src="../../../../assets/img/res_product1.png"></a>
          <a href="javascript:;" class="btn centers"><img src="../../../../assets/img/res_product2.png"></a>
          <a href="javascript:;" class="btn rights"><img src="../../../../assets/img/res_product3.png"></a>
        </td>
      </tr>
      <tr>
        <td>
          <div class="checks">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>20160705445622</td>
        <td class="productname">
          <a href="javascript:;"><img src="../../../../assets/img/resp_1.jpg" title="产品名称"></a>
          <span>+</span>
          <a href="javascript:;"><img src="../../../../assets/img/resp_2.jpg" title="产品名称"></a>
        </td>
        <td>456.5</td>
        <td>14</td>
        <td>2016-7-5</td>
        <td>食品</td>
        <td>2</td>
        <td><span class="label-success">代发货</span><span class="label-suc">已发货</span></td>
        <td>
          <a href="javascript:;" class="btn lefts"><img src="../../../../assets/img/res_product1.png"></a>
          <a href="javascript:;" class="btn centers"><img src="../../../../assets/img/res_product2.png"></a>
          <a href="javascript:;" class="btn rights"><img src="../../../../assets/img/res_product3.png"></a>
        </td>
      </tr>
      <tr>
        <td>
          <div class="checks">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>20160705445622</td>
        <td class="productname">
          <a href="javascript:;"><img src="../../../../assets/img/resp_1.jpg" title="产品名称"></a>
          <span>+</span>
          <a href="javascript:;"><img src="../../../../assets/img/resp_2.jpg" title="产品名称"></a>
        </td>
        <td>456.5</td>
        <td>14</td>
        <td>2016-7-5</td>
        <td>食品</td>
        <td>2</td>
        <td><span class="label-success">代发货</span><span class="label-suc">已发货</span></td>
        <td>
          <a href="javascript:;" class="btn lefts"><img src="../../../../assets/img/res_product1.png"></a>
          <a href="javascript:;" class="btn centers"><img src="../../../../assets/img/res_product2.png"></a>
          <a href="javascript:;" class="btn rights"><img src="../../../../assets/img/res_product3.png"></a>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="NumberOfPages">
      <div class=numberpages>
        <div>第 1 到 6 条记录，共 6 条</div>
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
  <!-- 发货 -->
  <div class="layui-layers drag" v-drag>
    <div class="layui-layer-titles">发货</div>
    <span class="layui-layer-setwins">
            <a href="javascript:;" class="layui-layer-mins"><cite></cite></a>
            <a href="javascript:;" class="closeclose"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
    <div class="layui-layer-contents">
      <div class="layui-layer-wrap">
        <div>
          <div class="content_style">
            <div class="form-group">
              <label class="col-sm-2 control-label no-padding-right">快递公司</label>
              <div class="col-sm-9">
                <select class="form-control">
                  <option value>--选择快递--</option>
                  <option value="1">天天快递</option>
                  <option value="2">圆通快递</option>
                  <option value="3">中通快递</option>
                  <option value="4">顺丰快递</option>
                  <option value="5">申通快递</option>
                  <option value="6">邮政EMS</option>
                  <option value="7">邮政小包</option>
                  <option value="8">韵达快递</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label no-padding-right">快递号</label>
              <div class="col-sm-9">
                <input type="text" class="col-xs-10 col-sm-5 " placeholder="快递号" id="Courier">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label no-padding-right">货到付款</label>
              <div class="col-sm-9">
                <div class="checks">
                  <input type="checkbox" class="input_check">
                  <label></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-layer-btns">
      <a href="javascript:;" class="layui-layer-btn2">确定</a>
      <a href="javascript:;" class="layui-layer-btn3 layderbtn">取消</a>
    </div>
  </div>
  <!-- 快递号不能为空 -->
  <div class="layui-layer-dialog">
    <div class="layui-layer-titlea">提示框</div>
    <span class="layui-layer-setwind">
            <a href="javascript:;" class="layui-layer-close1"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
    <div class="layui-layer-padding">
      <img src="../../../../assets/img/res_jing.png" alt="">
      快递号不能为空！
    </div>
    <div class="layui-layer-btna">
      <a href="javascript:;" class="layui-layer-btn3">确定</a>
    </div>
  </div>
  <!-- 提交成功 -->
  <div class="layui-layer-dialogx">
    <div class="layui-layer-titlex">信息</div>
    <span class="layui-layer-setwindx">
            <a href="javascript:;" class="layui-layer-closex"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
    <div class="layui-layer-paddingx">
      提交成功！
    </div>
    <div class="layui-layer-btnx">
      <a href="javascript:;" class="layui-layer-btn4">确定</a>
      <a href="javascript:;" class="layui-layer-btn5">取消</a>
    </div>
  </div>
  <!-- 已发货 -->
  <div class="happy">
    <a href="#" class="happys">
      <img src="../../../../assets/img/res_happy.png" alt="">
      <span>已发货！</span>
    </a>
  </div>
  <!-- 确定要删除吗 -->
  <div class="layui-layer-dialogp drag" v-drag>
    <div class="layui-layer-titlep">信息</div>
    <span class="layui-layer-setwindp">
            <a href="javascript:;" class="layui-layer-closep"><img src="../../../../assets/img/res8.png" alt=""></a>
        </span>
    <div class="layui-layer-paddingp">
      确定要删除吗?
    </div>
    <div class="layui-layer-btnp">
      <a href="javascript:;" class="layui-layer-btn6">确定</a>
      <a href="javascript:;" class="layui-layer-btn7">取消</a>
    </div>
  </div>
  <!-- 已删除 -->
  <div class="shanchu">
    <a href="#" class="shanchus">
      <img src="../../../../assets/img/res_l.png">
      <span>已删除！</span>
    </a>
  </div>
  <!--遮罩层-->
  <div class="layui-layer-shade"></div>
  <!-- 缩小 -->
  <div class="layui-animl drag" v-drag>
    <div class="layui-layer-titlel">发货</div>
    <span class="layui-layer-setwinl">
            <a href="javascript:;" class="bigbig"><img src="../../../../assets/img/res_big.png"></a>
            <a href="javascript:;" class="smallclose"><img src="../../../../assets/img/res8.png"></a>
        </span>
  </div>
</div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "ResIndexOrderManagement",
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
          displayblock() {
            $(".ordercontent").show();
            $(".blockbtn").hide();
            $(".nonebtn").show();
          },
          displaynone(){
            $(".ordercontent").hide();
            $(".blockbtn").show();
            $(".nonebtn").hide();
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
        mounted() {
          this.select();
          //删除
          let lengthh = $(".rights").length;
          // console.log(lengthh);
          let countt = 0;
          //删除按钮
          let indexs = "";
          $(".rights").each(function () {
            $(this).attr({"indexs":countt});
            countt++;
          });
          $('.tables tbody tr').each(function () {
            $(this).attr({"indexs":countt});
            countt++;
          });
          $('.rights').click(function () {
            indexs = $(this).attr("indexs");
            $('.layui-layer-dialogp').show();
            $('.layui-layer-shade').show();
          });
          //确定删除
          $('.layui-layer-btn6').click(function () {
            $('.layui-layer-dialogp').hide();
            $('.layui-layer-shade').hide();
            $('.shanchu').show();
            //删除商品
            $('.tables tbody tr').eq(indexs).hide();
            setInterval(function () {
              $('.shanchu').hide();
            },2000)
          });
          //小化
          $('.layui-layer-mins').click(function () {
            $('.layui-layers').hide();
            $('.layui-animl').show();
          });
          //小化close
          $('.smallclose').click(function () {
            $('.layui-animl').hide();
            $('.layui-layer-shade').hide();
          })
          //放大
          $('.bigbig').click(function () {
            $('.layui-layers').show();
            $('.layui-animl').hide();
          })
          //取消
          $('.layui-layer-btn7').click(function () {
            $('.layui-layer-dialogp').hide();
            $('.layui-layer-shade').hide();
          });
          //close
          $('.layui-layer-closep').click(function () {
            $('.layui-layer-dialogp').hide();
            $('.layui-layer-shade').hide();
          });

          //发货
          let length = $(".lefts").length;
          // console.log(length);
          let count = 0;
          $(".lefts").each(function () {
            $(this).attr({"index":count});
            count++;
          });
          $(".label-success").each(function () {
            $(this).attr({"index":count});
            count++;
          });
          $(".label-suc").each(function () {
            $(this).attr({"index":count});
            count++;
          });

          //点击按钮
          let index = "";
          $('.lefts').click(function () {
            index = $(this).attr("index");

            $('.layui-layers').show();
            $('.layui-layer-shade').show();
          })
          //确定时不能为空 以及提交成功
          $('.layui-layer-btn2').click(function () {
            var Courier=$('#Courier').val();
            if(Courier == '' || Courier == undefined || Courier == null){
              $('.layui-layer-dialog').show();
              $(".layui-layer-btn3").click(function () {
                $('.layui-layer-dialog').hide();
              })
              $('.layui-layer-close1').click(function () {
                $('.layui-layer-dialog').hide();
              })
            }else{
              $('.layui-layer-dialogx').show();
              $('.layui-layer-btn4').click(function () {
                $('.layui-layer-dialogx').hide();
                $('.layui-layers').hide();
                $('.layui-layer-shade').hide();
                //有值
                $('.lefts').eq(index).hide();
                $(".label-success").eq(index).hide();
                $(".label-suc").eq(index).show();

                $('.happy').show();
                setInterval(function () {
                  $('.happy').hide();
                },2000);
                $('.layui-layers').hide();
                $('.layui-layer-shade').hide();
              });
              $('.layui-layer-btn5').click(function () {
                $('.layui-layer-dialogx').hide();
              })
              $('.layui-layer-closex').click(function () {
                $('.layui-layer-dialogx').hide();
              });
            }
          });
          $('.layderbtn').click(function () {
            $('.layui-layers').hide();
            $('.layui-layer-shade').hide();

          });
          $('.closeclose').click(function (){
            $('.layui-layers').hide();
            $('.layui-layer-shade').hide();
          })
        }
    }
</script>

<style scoped>
  .OrderManagement{
    padding: 20px 15px 60px;
    width: 80%;
    overflow-y: auto;
  }
  .OrderManagement::-webkit-scrollbar{
    display: none;
  }
  .orderform{
    border: 1px solid #dddddd;
    margin-bottom: 15px;
    margin-top: 20px;
  }
  .orderformhead{
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
  .formbtn{
    float: right;
    width: 80px;
    margin-right: 60px;
    font-size: 14px;
  }
.formbtn a{
  border: 1px solid #dddddd;
  width: 60px;
  height: 30px;
  margin-top: 5px;
  line-height: 30px;
  text-align: center;
  background-color: #FFF;
  border-radius: 3px;
  font-size: 14px;
  float: right;
  margin-right: 100px;
  padding: 0 10px;
  cursor: pointer;
  color: #333;
}
.formbtn a:hover{
  color: #F90;
  text-decoration: underline;
}
  .ordercontent{
    height: 298px;
  }
  .proportion{
    float: left;
    margin: 10px 20px;
    text-align: center;
  }
.percentage {
  width: 103px;
  height: 103px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  vertical-align: top;
}
  .percent{
    display: block;
    margin-top: 5px;
    font-size: 14px;
  }
  .blockbtn{
    display: none;
  }
  .tableform{
    margin-top: 15px;
  }
  .form{
    left: 0;
  }
.show_btn span{
  background: url(../../../../assets/img/reshead_sprite.png) -46px -30px no-repeat;
  width: 25px;
  height: 100px;
  overflow: hidden;
  float: left;
  cursor: pointer;
  position: absolute;
  left: 0px;
}
  .side_title span{
    background: url(../../../../assets/img/reshead_sprite.png) -14px -30px no-repeat;
    width: 25px;
    height: 40px;
    overflow: hidden;
    float: left;
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: 50%;
    z-index: 111;
  }
  .widget-body ul li{
    line-height: 34px;
    margin-left: 10px;
    display: list-item;
    text-align: -webkit-match-parent;
  }
  a{
    color: #333;
  }
.widget-body ul li img{
  float: left;
  margin-top: 12px;
  margin-right: 8px;
}
.widget-body ul li a:hover{
  color: #F90;
  text-decoration: underline;
}
.list_right_style{
  padding: 0px 10px;
  overflow: hidden;
}
.search_style{
  width: 1366px;
  margin-bottom: 20px;
  margin-top: 20px;
}
  .search_style ul li{
    margin-right: 20px;
    float: left;
    line-height: 30px;display: list-item;
    text-align: -webkit-match-parent;
  }
.l_f{
  float: left;
  vertical-align: middle;
  font-size: 14px;
  font-weight: normal;
  display: inline-block;
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
  .orderinput{
    width: 250px;
  }
.orderinput:hover{
  border-color: #b5b5b5;
}
.orderinput:focus{
  border-color: #f59942;
}
.btn_search{
  height: 32px;
  background: #2a8bcc;
  background-image: linear-gradient(to bottom,#3b98d6 0,#197ec1 100%);
  background-repeat: repeat-x;
  line-height: 32px;
  border: 0px;
  width: 60px;
  text-align: center;
  color: #FFF;
  border-radius: 3px;
  text-transform: none;
  vertical-align: middle;
}
.btn_search img{
  margin-right: 4px;
}
.dataTables_wrapper{
  float: right;
  width: 100%;
  overflow-x:auto ;
}
.row{
  width: 100%;
  height: 52px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0;
}
.col-sm-6{
  width: 50%;
  float: left;
  min-height: 1px;
  padding-right: 12px;
  padding-left: 12px;
}
.dataTables_length label{
  display: inline-block;
  font-size: 13px;
  vertical-align: middle;
}
.dataTables_length select{
  margin: 0 4px;
  width: 70px;
  height: 25px;
  padding: 2px 3px;
  outline: 0;
}
.dataTables_length select option{
  padding: 3px 4px;
}
select:focus{
  border: 1px solid #f59942;
}
.dataTables_filter{
  text-align: right;
}
.sample-table{
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
.tables{
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
  margin-right: 13px;
}
.check .input_check:checked+label {
  background: url(../../../../assets/img/res_xuan.png)no-repeat;
  background-size: 18px 18px;
}
.checks{
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
.checks label{
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(../../../../assets/img/res_wei.png) no-repeat;
  background-size: 18px 18px;
  margin-top: 2px;
  margin-right: 13px;
}
.checks .input_check:checked+label {
  background: url(../../../../assets/img/res_xuan.png)no-repeat;
  background-size: 18px 18px;
}
.tables thead tr{
  width: 100%;
  height: 35px;
  color: #707070;
  font-weight: normal;
  background: #f2f2f2;
  background-repeat: repeat-x;
}
.tables thead tr th{
  border: 1px solid #ddd;
  vertical-align: middle;
  text-align: center;
  color: #307ecc;
  font-size: 12px;
}
.tables thead tr th:first-child {
  border-left-color: #DDD;
  width: 44px;
  padding: 8px;
}
.tables thead:first-child tr:first-child th{
  border-top: 0;
}
.tables thead tr th:nth-child(2) {
  width: 55px;
  background-image: -webkit-gradient(linear,left 0,left 100%,from(#eff3f8),to(#e3e7ed));
  cursor: pointer;
}
.tables thead tr th:nth-child(3) {
  width: 75px;
}
.tables thead tr th:nth-child(4) {
  width: 98px;
}
.tables thead tr th:nth-child(5) {
  width: 98px;
}
.tables thead tr th:nth-child(6) {
  width: 170px;
  cursor: pointer;
}
.tables thead tr th:nth-child(6):hover {
  color: #307ecc;
}
.tables thead tr th:nth-child(7) {
  width: 192px;
}
.tables thead tr th:nth-child(8) {
  width: 171px;
}
.tables thead tr th:nth-child(9) {
  width: 98px;
}
.tables thead tr th:nth-child(10) {
  width: 209px;
}
.tables tbody tr td {
  word-wrap: break-word;
  word-break: break-all;
  vertical-align: middle;
  font-family: "新宋体";
  text-align: center;
  white-space:nowrap;
  padding: 8px;
  line-height: 1.428571429;
}
.tables tbody tr{
  width: 100%;
  height: 35px;
  font-weight: normal;
  background-repeat: repeat-x;
  color: black;
}
.tables tbody tr:nth-child(2n+1){
  background: #F9F9F9;
}
.tables tbody tr:hover{
  background: #f5f5f5;
}
.tables tbody tr td{
  border: 1px solid #ddd;
  vertical-align: middle;
  text-align: center;
  font-size: 12px;
}
.label-success{
  font-size: 12px;
  line-height: 1.15;
  height: 20px;
  background-color: #82af6f!important;
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
  background-color:#82af6f !important;
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
td a{
  text-decoration: underline;
  color:#307ecc;
}
.btn {
  padding: 0px 8px;
  display: inline-block;
  font-family: "Microsoft YaHei";
  color: #FFF;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25) !important;
  background-image: none !important;
  border: 5px solid #FFF;
  box-shadow: none !important;
  transition: all ease .15s;
  cursor: pointer;
  vertical-align: middle;
  margin-right: 3px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  font-weight: normal;
  float: left;
}
.lefts{
  background-color: #87b87f;
  border-color: #87b87f ;
}
.lefts:hover{
  background-color: #629b58;
  border-color: #87b87f;
}
.lefts img{
  width: 15px;
  height: 15px;
  margin-top: -4px;
}
.centers{
  background-color: #6fb3e0;
  border-color: #6fb3e0;
}
.centers:hover{
  background-color: #4f99c6;
  border-color: #6fb3e0;
}
.centers img{
  width: 15px;
  height: 15px;
  margin-top: -4px;
}
.rights{
  background-color: #ffb752;
  border-color: #ffb752;
}
.rights:hover{
  background-color: #e59729;
  border-color: #ffb752;
}
.rights img{
  width: 15px;
  height: 15px;
  margin-top: -4px;
}
.NumberOfPages{
  padding-top: 12px;
  padding-bottom: 40px;
  margin-bottom: 30px;
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
.productname a img{
  border: 1px solid #dddddd;
  padding: 1px;
  width: 60px;
  height: 60px;
}
.productname span{
  font-size: 14px;
  font-weight: 600;
}
  /* 发货 */
  .layui-layers{
    z-index: 999999;
    width: 500px;
    height: 233px;
    position: fixed;
    top: 200px;
    left: 540px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    border-radius: 2px;
    display: none;
  }
  .layui-layer-titles{
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
  .layui-layer-setwins{
    position: absolute;
    right: 15px;
    top: 11px;
    line-height: initial;
  }
  .layui-layer-setwins a{
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
    vertical-align: top;
  }
  .layui-layer-setwins .layui-layer-mins cite{
    position: absolute;
    width: 14px;
    height: 2px;
    left: 10px;
    top: 60%;
    margin-top: -1px;
    background-color: #2E2D3C;
    cursor: pointer;
    font-style: normal;
  }
  .layui-layers .layui-layer-contents {
    height: 133px;
    overflow: auto;
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
  .col-sm-2{
    float: left;
    width: 16.6666%;
    min-height: 1px;
    padding-left: 12px;
  }
  label {
    font-weight: normal;
    font-size: 14px;
    vertical-align: middle;
    display: inline-block;
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
  }
  .col-sm-9 {
    width: 75%;
    float: left;
    min-height: 1px;
    padding-right: 12px;
    padding-left: 12px;
  }
  .form-group select{
    background: #FFF;
  }
  select.form-control {
    padding: 4px 6px;
    height: 32px;
  }
  .form-control, select {
    border-radius: 0;
    box-shadow: none!important;
    color: #858585;
    border: 1px solid #d5d5d5;
    outline: 0;
  }
  .form-control{
    display: block;
    width: 100%;
    font-size: 14px;
    line-height: 1.428571429;
    vertical-align: middle;
  }
  select option[value=""], select.form-control option[value=""] {
    padding: 0;
  }
  select option, select.form-control option {
    padding: 3px 4px;
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
  select:focus{
    border-color: #f59942;
  }
  .form-group input[type="text"]{
    background: #FFF;
  }
  input[type="text"]{
    color: #858585;
    border: 1px solid #d5d5d5;
    padding: 5px 4px;
    line-height: 1.2;
    font-size: 14px;
    font-family: inherit;
  }
  .col-sm-5 {
    width: 41.6666%;
    float: left;
    min-height: 1px;
  }
  .checks{
    width: 18px;
  }
  .input_check {
    opacity: 0;
    width: 18px;
    height: 18px;
    position: absolute;
  }
  .checks label{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(../../../../assets/img/res_wei.png) no-repeat;
    background-size: 18px 18px;
    margin-top: 2px;
    margin-right: 13px;
  }
  .checks .input_check:checked+label {
    background: url(../../../../assets/img/res_xuan.png)no-repeat;
    background-size: 18px 18px;
  }
  .layui-layers .layui-layer-btns{
    padding-top: 10px;
  }
  .layui-layer-btns {
    text-align: center;
    padding: 0 10px 12px;
    pointer-events: auto;
  }
  .layui-layer-btns .layui-layer-btn2 {
    border-color: #4898d5;
    background-color: #2e8ded;
    color: #fff;
  }
  .layui-layer-btns a {
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
  /* 快递号不能为空 */
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
  /* 提交成功 */
  .layui-layer-dialogx{
    width: 260px;
    height: 164px;
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
  .layui-layer-titlex{
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
  .layui-layer-setwindx{
    position: absolute;
    right: 15px;
    top: 13px;
    line-height: initial;
  }
  .layui-layer-closex{
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
  }
  .layui-layer-paddingx{
    padding: 20px;
    line-height: 24px;
    word-break: break-all;
    font-size: 14px;
    overflow: auto;
  }
  .layui-layer-dialogx .layui-layer-btnx{
    padding-top: 10px;
  }
  .layui-layer-btnx {
    text-align: center;
    padding: 0 10px 12px;
    pointer-events: auto;
  }
  .layui-layer-btnx .layui-layer-btn4 {
    border-color: #4898d5;
    background-color: #2e8ded;
    color: #fff;
  }
  .layui-layer-btnx a {
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
  /* 已发货 */
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
  /*遮罩层*/
  .layui-layer-shade{
    z-index: 1222;
    background-color: #000;
    opacity: 0.3;
    top: 78px;
    right: 0;
    width: 80%;
    height: 100%;
    position: fixed;
    display: none;
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

