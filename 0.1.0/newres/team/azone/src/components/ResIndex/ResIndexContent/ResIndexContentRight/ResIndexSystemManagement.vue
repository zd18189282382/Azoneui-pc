<template>
    <div class="management">
      <span class="bread">
        <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
        <a href="javascript:;"><cite>支付管理</cite></a>  /
        <router-link to="/ResIndexSystemManagement"><cite>账户管理</cite></router-link>
      </span>
      <div class="select">
        <label>每页显示条数</label>
        <select>
          <option value="10">10</option>
          <option value="20">25</option>
          <option value="30">50</option>
          <option value="40">100</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>排序</th>
            <th>栏目名称</th>
            <th>等级</th>
            <th>说明</th>
            <th>添加时间</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>产品管理</td>
            <td>一级</td>
            <td>商城产品管理,包含产品列表,品牌列表,添加产品,添加品牌,分类管理</td>
            <td>2016-7-23</td>
            <td><span class="already">已启用</span></td>
            <td>
              <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../../../assets/img/dui.png"></a>
              <dialog-bar v-model="sendVal" type="danger" title="信息" content="确定要管理该项目吗" v-on:cancel="clickCancel()"></dialog-bar>
              <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../../../assets/img/resbian.png"></a>
              <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../../../assets/img/resshan.png"></a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>图片管理</td>
            <td>一级</td>
            <td>商城广告图片管理商城广告图片管理商城广告图片管理商城广告图片管理	</td>
            <td>2016-7-23</td>
            <td><span class="already">已启用</span></td>
            <td>
              <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../../../assets/img/dui.png"></a>
              <dialog-bar v-model="sendVal" type="danger" title="信息" content="确定要管理该项目吗" v-on:cancel="clickCancel()"></dialog-bar>
              <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../../../assets/img/resbian.png"></a>
              <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../../../assets/img/resshan.png"></a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>交易管理</td>
            <td>一级</td>
            <td>商城订单,交易信息,金额管理</td>
            <td>2016-7-23</td>
            <td><span class="already">已启用</span></td>
            <td>
              <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../../../assets/img/dui.png"></a>
              <dialog-bar v-model="sendVal" type="danger" title="信息" content="确定要管理该项目吗" v-on:cancel="clickCancel()"></dialog-bar>
              <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../../../assets/img/resbian.png"></a>
              <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../../../assets/img/resshan.png"></a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>4</td>
            <td>一级</td>
            <td>支付管理</td>
            <td>商城订单,交易信息,金额管理</td>
            <td>2016-7-23</td>
            <td><span class="already">已启用</span></td>
            <td>
              <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../../../assets/img/dui.png"></a>
              <dialog-bar v-model="sendVal" type="danger" title="信息" content="确定要管理该项目吗" v-on:cancel="clickCancel()"></dialog-bar>
              <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../../../assets/img/resbian.png"></a>
              <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../../../assets/img/resshan.png"></a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>5</td>
            <td>会员管理</td>
            <td>一级</td>
            <td>商城订单,交易信息,金额管理</td>
            <td>2016-7-23</td>
            <td><span class="already">已启用</span></td>
            <td>
              <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../../../assets/img/dui.png"></a>
              <dialog-bar v-model="sendVal" type="danger" title="信息" content="确定要管理该项目吗" v-on:cancel="clickCancel()"></dialog-bar>
              <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../../../assets/img/resbian.png"></a>
              <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../../../assets/img/resshan.png"></a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>6</td>
            <td>店铺管理</td>
            <td>一级</td>
            <td>商城订单,交易信息,金额管理</td>
            <td>2016-7-23</td>
            <td><span class="already">已启用</span></td>
            <td>
              <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../../../assets/img/dui.png"></a>
              <dialog-bar v-model="sendVal" type="danger" title="信息" content="确定要管理该项目吗" v-on:cancel="clickCancel()"></dialog-bar>
              <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../../../assets/img/resbian.png"></a>
              <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../../../assets/img/resshan.png"></a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>7</td>
            <td>消息管理</td>
            <td>一级</td>
            <td>商城订单,交易信息,金额管理</td>
            <td>2016-7-23</td>
            <td><span class="already">已启用</span></td>
            <td>
              <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../../../assets/img/dui.png"></a>
              <dialog-bar v-model="sendVal" type="danger" title="信息" content="确定要管理该项目吗" v-on:cancel="clickCancel()"></dialog-bar>
              <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../../../assets/img/resbian.png"></a>
              <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../../../assets/img/resshan.png"></a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="NumberOfPages">
        <div class=numberpages>
          <div>第 1 到 7 条记录，共 7 条</div>
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
</template>

<script>
  import dialogBar from './../../../dialog.vue'
    export default {
        name: "ResIndexSystemManagement",
        components:{
          'dialog-bar': dialogBar
        },
      data(){
        return{
          sendVal: false,
        }
      },
      methods:{
        openMask(index){
          this.sendVal = true;
        },
        clickCancel(){

        },
        clickDanger(){

        },
        clickConfirm(){

        },
        closeMask(){
          this.showMask = false;
        }
      }
    }
</script>

<style scoped>
  .management{
    padding: 20px 15px 60px;
    width: 80%;
    overflow-y: auto;
  }
  .management::-webkit-scrollbar{
    display: none;
  }
.select{
  color: #696969;
  font-size: 14px;
  padding-top: 12px;
  padding-bottom: 12px;
}
  select{
    height: 25px;
    padding: 2px 3px;
    margin: 0 4px;
    width: 70px;
    outline:none;
    color: #696969;
  }
select:focus{
  border: 1px solid #f59942;
}
  table{
    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
    font-family: "新宋体";
    margin-bottom: 0;
    text-align: center;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: transparent;
  }
  table thead tr{
    color: #707070;
    font-weight: normal;
    background: #f2f2f2;
    background-repeat: repeat-x;
  }
table thead tr th{
  width: 62px;
  vertical-align: middle;
  text-align: center;
  border-top: 0;
  color: #307ecc;
  border-color: #DDD;
  font-weight: bold;
  border-bottom-width: 1px;
  padding: 8px;
  line-height: 1.428571429;
  margin: 0px;
  outline: 0px;
}
th:first-child {
  border-left:1px solid #ddd;
  border-right: 1px solid #ddd;
}
th:nth-child(3){
  border-left:1px solid #ddd;
  border-right: 1px solid #ddd;
}
th:nth-child(5){
  border-left:1px solid #ddd;
  border-right: 1px solid #ddd;
}
th:nth-child(7){
  border-left:1px solid #ddd;
  border-right: 1px solid #ddd;
}
th:nth-child(8){
  border-right: 1px solid #ddd;
}
th:hover{
  color: #547ea8;
}
table tbody tr td{
  word-wrap: break-word;
  word-break: break-all;
  vertical-align: middle;
  font-family: "新宋体";
  text-align: center;
  border: 1px solid #ddd;
  padding: 8px;
  line-height: 1.428571429;
  margin: 0px;
  outline: 0px;
}
table tbody tr:nth-child(2n+1){
  background: #f9f9f9;
}
table tbody tr:hover{
  background: #f2f2f2;
}
  .already{
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
.btn-success, .btn-success:focus {
  background-color: #87b87f;
  border-color: #87b87f !important;
}
.btn-success:hover{
  background-color: #629b58;
  border-color: #87b87f;
}
.btn-xs {
  border-width: 3px;
  font-size: 12px;
  line-height: 1.5;
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
.btn-info, .btn-info:focus {
  background-color: #6fb3e0;
  border-color: #6fb3e0;
}
.btn-info:hover{
  background-color: #4f99c6;
  border-color: #6fb3e0;
}
.btn-warning, .btn-warning:focus {
  background-color: #ffb752;
  border-color: #ffb752;
}
.btn-warning:hover{
  background-color: #e59729;
  border-color: #ffb752;
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
