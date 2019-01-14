<template>
<div class="log">
   <span class="bread">
        <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
        <a href="javascript:;"><cite>支付管理</cite></a>  /
        <router-link to="/ResIndexSystemLog"><cite>账户管理</cite></router-link>
      </span>
  <div class="logSearch">
    <ul>
      <li class="l_f">
        <label>名称</label><input type="text">
      </li>
      <li class="l_fs">
        <el-date-picker v-model="value1" size="small" type="date" placeholder="选择日期"></el-date-picker>
      </li>
      <li width="90px">
        <input type="button" value="查询" class="sea_btn">
      </li>
    </ul>
  </div>
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
      <th>登陆用户</th>
      <th>角色</th>
      <th>操作内容</th>
      <th>操作时间</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1233</td>
      <td>admin</td>
      <td>超级管理员</td>
      <td class="long">添加商品名称</td>
      <td>2016-7-26 12:34</td>
    </tr>
    <tr>
      <td>3434</td>
      <td>admin</td>
      <td>超级管理员</td>
      <td class="long">添加商品名称</td>
      <td>2016-7-26 11:23</td>
    </tr>
    <tr>
      <td>2433</td>
      <td>admin</td>
      <td>超级管理员</td>
      <td class="long">添加商品名称</td>
      <td>2016-7-26 13:34</td>
    </tr>
    <tr>
      <td>555</td>
      <td>admin</td>
      <td>超级管理员</td>
      <td class="long">添加商品名称</td>
      <td>2016-7-16</td>
    </tr>
    <tr>
      <td>1233</td>
      <td>admin</td>
      <td>超级管理员</td>
      <td class="long">添加商品名称</td>
      <td>2016-6-26</td>
    </tr>
    <tr>
      <td>5345</td>
      <td>admin</td>
      <td>超级管理员</td>
      <td class="long">添加商品名称</td>
      <td>2016-4-26</td>
    </tr>
    <tr>
      <td>1233</td>
      <td>admin</td>
      <td>超级管理员</td>
      <td class="long">添加商品名称</td>
      <td>2016-5-26</td>
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
    export default {
      name: "ResIndexSystemLog",
      data(){
        return {
          value1: ''
        }
      }
    }
</script>

<style scoped>
.log{
  padding: 20px 15px 60px;
  width: 80%;
  overflow-y: auto;
}
.log::-webkit-scrollbar{
  display: none;
}
.logSearch{
  margin-bottom: 50px;
  margin-top: 20px;
}
  .logSearch ul li{
    margin-right: 20px;
    float: left;
    line-height: 30px;display: list-item;
    text-align: -webkit-match-parent;
  }
.logSearch ul .l_f label{
  float: left;
  vertical-align: middle;
  font-weight: normal;
  font-size: 14px;
}
.logSearch ul .l_f input{
  width: 250px;
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
.logSearch ul .l_f input:focus{
  border: 1px solid #f59942;
}
  .sea_btn{
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
    outline: 0;
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
  .long{
    width: 400px;
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
