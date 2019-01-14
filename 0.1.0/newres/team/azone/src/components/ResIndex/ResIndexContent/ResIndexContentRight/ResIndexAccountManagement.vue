<template>
  <div class="account">
     <span class="bread">
        <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
        <a href="javascript:;"><cite>支付管理</cite></a>  /
        <router-link to="/ResIndexAccountManagement"><cite>账户管理</cite></router-link>
      </span>
    <div class="cover_style">
      <div class="search_style">
        <ul class="search_content">
          <li><label class="l_f">用户</label><input type="text" class="text_add" placeholder="用户名称" style="width:250px"></li>
          <li style="width:90px;"><button type="button" class="btn_search"><img src="../../../../assets/img/res_1.jpg">查询</button></li>
        </ul>
      </div>
      <!-- 操作 -->
      <div class="border">
        <span class="l_p"><a href="#" class="btnn"><img src="../../../../assets/img/res1.png" alt=""> 图表展示</a></span>
        <span class="l_o">共：<b>2334</b>个账户</span>
      </div>
      <!-- 账户管理 -->
      <div>
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
                    <input type="checkbox" class="input_check checkall"  >
                    <label></label>
                </div>
              </th>
              <th>
                ID
                <span class="spas"></span>
                <span class="spana"></span>
              </th>
              <th>用户名</th>
              <th>账户余额</th>
              <th>最新充值</th>
              <th>
                充值时间
                <span class="spa1"></span>
                <span class="spa2"></span>
              </th>
              <th>最新消费</th>
              <th>消费时间</th>
              <th>账户状态</th>
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
              <td>1</td>
              <td><a href="#">张奶奶</a></td>
              <td>345.2</td>
              <td>0.00</td>
              <td>无</td>
              <td>购买商品消费122元</td>
              <td>2016-7-21 12:45</td>
              <td>
                <span class="label-success hides">启用</span>
                <span class="label-successa shows" >停用</span>
              </td>
              <td>
                <a href="javascript:;" class="btn lefts hides"><img src="../../../../assets/img/res2.png"></a>
                <a href="javascript:;" class="lefta shows"><img src="../../../../assets/img/res_false.png"></a>
                <a href="javascript:;" class="btn rights"><img src="../../../../assets/img/res3.png"></a>
              </td>
            </tr>
            <tr>
              <td>
                <div class="checks">
                  <input type="checkbox" class="input_check subcheck">
                  <label></label>
                </div>
              </td>
              <td>12</td>
              <td><a href="#">张小泉</a></td>
              <td>345.2</td>
              <td>120.00</td>
              <td>2016-7-10 23:23</td>
              <td>购买商品消费122元</td>
              <td>2016-7-21 12:45</td>
              <td>
                <span class="label-successw hide">启用</span>
                <span class="label-successd show">停用</span>
              </td>
              <td>
                <a href="javascript:;" class="btn lefte hides"><img src="../../../../assets/img/res2.png"></a>
                <a href="javascript:;" class="leftr shows"><img src="../../../../assets/img/res_false.png"></a>
                <a href="javascript:;" class="btn rights"><img src="../../../../assets/img/res3.png"></a>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="layui-layer-shade"></div>
          <div class="layui-anim drag" v-drag>
            <div class="layui-layer-title">信息</div>
            <div class="layui-layer-content">确认要停用该账户吗？</div>
            <span class="layui-layer-setwin"><a href="javascript:;" class="layui-layer-ico ico"><img src="../../../../assets/img/res8.png" alt=""></a></span>
            <div class="layui-layer-btn">
              <a href="javascript:;" class="layui-layer-btn0 btn01">确定</a>
              <a href="javascript:;" class="layui-layer-btn1 btn11">取消</a>
            </div>
          </div>
          <div class="layui-anim01 drag" v-drag>
            <div class="layui-layer-title">信息</div>
            <div class="layui-layer-content">确认要停用该账户吗？</div>
            <span class="layui-layer-setwin"><a href="javascript:;" class="layui-layer-ico ico01"><img src="../../../../assets/img/res8.png" alt=""></a></span>
            <div class="layui-layer-btn">
              <a href="javascript:;" class="layui-layer-btn0 btn001">确定</a>
              <a href="javascript:;" class="layui-layer-btn1 btn011">取消</a>
            </div>
          </div>
          <div class="layui-anim2 drag" v-drag>
            <div class="layui-layer-title">信息</div>
            <div class="layui-layer-content">确认要启用该账户吗？</div>
            <span class="layui-layer-setwin"><a href="javascript:;" class="layui-layer-ico ico2"><img src="../../../../assets/img/res8.png" alt=""></a></span>
            <div class="layui-layer-btn">
              <a href="javascript:;" class="layui-layer-btn0 btn02">确定</a>
              <a href="javascript:;" class="layui-layer-btn1 btn12">取消</a>
            </div>
          </div>
          <div class="layui-anim02 drag" v-drag>
            <div class="layui-layer-title">信息</div>
            <div class="layui-layer-content">确认要启用该账户吗？</div>
            <span class="layui-layer-setwin"><a href="javascript:;" class="layui-layer-ico ico02"><img src="../../../../assets/img/res8.png" alt=""></a></span>
            <div class="layui-layer-btn">
              <a href="javascript:;" class="layui-layer-btn0 btn002">确定</a>
              <a href="javascript:;" class="layui-layer-btn1 btn012">取消</a>
            </div>
          </div>
          <div class="hen">
            <a href="#" class="hens">
              <img src="../../../../assets/img/res_hei.png">
              <span>停用!</span>
            </a>
          </div>
          <div class="happy">
            <a href="#" class="happys">
              <img src="../../../../assets/img/res_happy.png">
              <span>启用</span>
            </a>
          </div>
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
  </div>
</template>

<script>
  import $ from 'jquery'
    export default {
      name: "ResIndexAccountManagement",
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
        //第一个启用禁用按钮
        $(".lefts").click(function () {
          $(".layui-layer-shade").show();
          $(".layui-anim").show();
        });
        $('.btn01').click(function () {
          $(".layui-layer-shade").hide()
          $(".layui-anim").hide();
          $(".hen").show();
          setTimeout(function () {
            $(".hen").hide();
            $(".label-success").hide();
            $(".lefts").hide();
            $(".label-successa").show();
            $(".lefta").show();
          }, 1000);
        })
        $(".lefta").click(function () {
          $(".layui-layer-shade").show();
          $(".layui-anim2").show();
        });
        $('.btn02').click(function () {
          $(".layui-layer-shade").hide()
          $(".layui-anim2").hide();
          $(".happy").show();
          setTimeout(function () {
            $(".happy").hide();
            $(".label-successa").hide();
            $(".lefta").hide();
            $(".label-success").show();
            $(".lefts").show();
          }, 1000);
        })
        $(".btn11").click(function () {
          $(".layui-layer-shade").hide();
          $(".layui-anim").hide();
        });
        $(".ico").click(function () {
          $(".layui-layer-shade").hide();
          $(".layui-anim").hide();
        });
        $(".btn12").click(function () {
          $(".layui-layer-shade").hide();
          $(".layui-anim2").hide();
        });
        $(".ico2").click(function () {
          $(".layui-layer-shade").hide();
          $(".layui-anim2").hide();
        });
        //第二个启用禁用按钮
        $(".lefte").click(function () {
          $(".layui-layer-shade").show();
          $(".layui-anim01").show();
        });
        $('.btn001').click(function () {
          $(".layui-layer-shade").hide()
          $(".layui-anim01").hide();
          $(".hen").show();
          setTimeout(function () {
            $(".hen").hide();
            $(".label-successw").hide();
            $(".lefte").hide();
            $(".label-successd").show();
            $(".leftr").show();
          }, 1000);
        });
        $(".leftr").click(function () {
          $(".layui-layer-shade").show();
          $(".layui-anim02").show();
        });
        $('.btn002').click(function () {
          $(".layui-layer-shade").hide();
          $(".layui-anim02").hide();
          $(".happy").show();
          setTimeout(function () {
            $(".happy").hide();
            $(".label-successd").hide();
            $(".leftr").hide();
            $(".label-successw").show();
            $(".lefte").show();
          }, 1000);
        })
        $(".btn011").click(function () {
          $(".layui-layer-shade").hide();
          $(".layui-anim01").hide();
        });
        $(".ico01").click(function () {
          $(".layui-layer-shade").hide();
          $(".layui-anim01").hide();
        });
        $(".btn012").click(function () {
          $(".layui-layer-shade").hide();
          $(".layui-anim02").hide();
        });
        $(".ico02").click(function () {
          $(".layui-layer-shade").hide();
          $(".layui-anim02").hide();
        });
      }
    }
</script>

<style scoped>
.account{
  padding: 20px 15px 60px;
  width: 80%;
  overflow-y: auto;
}
.account::-webkit-scrollbar{
  display: none;
}
.cover_style{
  width: 100%;
}
.search_style{
  width: 100%;
  height: 32px;
  margin: 20px 0;
}
.search_content{
  width: 100%;
  height: 32px;
}
.search_content li{
  margin-right: 20px;
  float: left;
  line-height: 30px;
}
.l_f{
  float: left;
  vertical-align: middle;
  font-size: 14px;
  font-weight: normal;
}
.text_add{
  border-radius: 0;
  color: #858585;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  padding: 5px 4px;
  margin-left: 10px;
  line-height: 1.2;
  font-size: 14px;
  font-family: inherit;
  box-shadow: none;
  font-style: inherit;
  font-weight: inherit;
  background-image: none;
  outline: 0;
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
   /*display: none;*/
}
.label-successa{
  font-size: 12px;
  line-height: 1.15;
  height: 20px;
  background-color: #abbac3!important;
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
.label-successw{
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
.label-successd{
  font-size: 12px;
  line-height: 1.15;
  height: 20px;
  background-color: #abbac3!important;
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
input:focus{
  border:1px solid #f59942;
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
.border{
  border: 1px solid #ddd;
  padding: 5px;
  height: 50px;
  line-height: 36px;
  margin-bottom: 20px;
}
.l_p{
  display: block;
  height: 100%;
  float: left;
}
.btnn{
  background-color: #d15b47;
  padding: 3px 10px;
  display: inline-block;
  color: #FFF;
  background-image: none;
  border: 5px solid #d15b47;
  box-shadow: none;
  cursor: pointer;
  vertical-align: middle;
  margin-right: 5px;
  border-radius: 3px;
  font-size: 14px;
  line-height: 1.428571429;
}
.lefta,.leftr{
  background-color: #abbac3!important;
  border-color: #abbac3;
  border-width: 3px;
  padding: 6px 14px;
  float: left;
  margin-left: 17px;
  display: inline-block;
  font-family: "Microsoft YaHei";
  color: #FFF!important;
  text-shadow: 0 -1px 0 rgba(0,0,0,0.25)!important;
  background-image: none!important;
  box-shadow: none!important;
  transition: all ease .15s;
  cursor: pointer;
  vertical-align: middle;
  margin-right: 5px;
  position: relative;
  border-radius: 3px;
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  user-select: none;
  display: none;
}
.l_p .btnn:hover{
  background-color: #b74635;
}
.l_o{
  display: block;
  height: 100%;
  float: right;
  font-size: 14px;
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
.layui-anim{
  position: fixed;
  z-index: 9999999;
  width: 260px;
  left: 50%;
  top: 30%;
  background-color: #fff;
  pointer-events: auto;
  display: none;
}
.layui-anim2{
  position: fixed;
  z-index: 9999999;
  width: 260px;
  left: 50%;
  top: 30%;
  background-color: #fff;
  pointer-events: auto;
  display: none;
}
.layui-anim01{
  position: fixed;
  z-index: 9999999;
  width: 260px;
  left: 50%;
  top: 30%;
  background-color: #fff;
  pointer-events: auto;
  display: none;
}
.layui-anim02{
  position: fixed;
  z-index: 9999999;
  width: 260px;
  left: 50%;
  top: 30%;
  background-color: #fff;
  pointer-events: auto;
  display: none;
}
.layui-layer-title{
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: rgb(248, 248, 248);
  padding: 0px 80px 0px 20px;
  border-bottom: 1px solid rgb(238, 238, 238);
  overflow: hidden;
  border-radius: 2px 2px 0px 0px;
  cursor: move;
}
.layui-layer-ico{
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 16px;
  margin-left: 10px;
  font-size: 12px;
}
.layui-layer-ico img{
  display: block;
  width: 16px;
  height: 16px;
}
.layui-layer-content{
  line-height: 24px;
  word-break: break-all;
  font-size: 14px;
  padding: 20px;
  overflow: auto;
}
.layui-layer-btn{
  text-align: center;
  pointer-events: auto;
  padding: 0px 10px 12px;
}
.layui-layer-btn .layui-layer-btn0 {
  background-color: rgb(46, 141, 237);
  color: rgb(255, 255, 255);
  border-color: rgb(72, 152, 213);
}
.layui-layer-btn .layui-layer-btn0:hover{
  background-color: #4398ed;
}
.layui-layer-btn a {
  height: 36px;
  line-height: 36px;
  background-color: rgb(241, 241, 241);
  color: rgb(51, 51, 51);
  font-weight: 400;
  cursor: pointer;
  margin: 0px 6px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 222, 222);
  border-image: initial;
  border-radius: 2px;
  text-decoration: none;
  display: inline-block;
  vertical-align: top;
}
.dataTables_length select{
  margin: 0 4px;
  width: 70px;
  height: 25px;
  padding: 2px 3px;
  outline: 0;
}
.layui-layer-setwin{
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 0px;
  line-height: initial;
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
.tables thead tr{
  width: 100%;
  height: 35px;
  color: #707070;
  font-weight: normal;
  background: #f2f2f2;
  background-repeat: repeat-x;
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
  margin-right: 13px;
}
.check .input_check:checked+label {
  background: url(../../../../assets/img/res_xuan.png)no-repeat;
  background-size: 18px 18px;
}
.checks{
  width: 18px;
  margin-left: 4px;
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
  left: 33px;
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
  left: 33px;
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
  color: black;
  position: relative;
  cursor: pointer;
}
.tables thead tr th:nth-child(6):hover {
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
  left: 133px;
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
  left: 133px;
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
  width: 154px;
}
.tables tbody tr td {
  word-wrap: break-word;
  word-break: break-all;
  vertical-align: middle;
  font-family: "新宋体";
  text-align: center;
  padding: 8px;
}
.tables tbody tr{
  width: 100%;
  height: 35px;
  font-weight: normal;
  background-repeat: repeat-x;
  color: black;
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
  margin-left: 18px;
 }
.lefts,.lefte{
  background-color: #87b87f;
  border-color: #87b87f;
}
.lefts:hover,.lefte:hover{
  background-color: #629b58;
  border-color: #87b87f;
}
.rights{
  background-color: #ffb752;
  border-color: #ffb752;
}
.rights:hover{
  background-color: #e59729;
  border-color: #ffb752;
}
.hen{
  position: fixed;
  z-index: 9999999;
  width: 178px;
  height: 64px;
  left: 53%;
  top: 50%;
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
  font-size: 12px;
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
.happy{
  position: fixed;
  z-index: 9999999;
  width: 178px;
  height: 64px;
  left: 53%;
  top: 50%;
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
/*面包屑*/
.bread{
  color: #333333;
}
.bread>*:hover{
  text-decoration: underline;
  color: blue;
}
.bread a{
  color: #333333;
}
</style>
