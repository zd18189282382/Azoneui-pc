<template>
<div class="ClassificationManagement">
  <span class="bread">
    <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
    <a href="javascript:;"><cite>产品管理</cite></a>  /
    <router-link to="/ResIndexPage"><cite>分类管理</cite></router-link>
  </span>
  <div class="type_title">产品类型信息</div>
  <div class="type_content">
    <div class="Operate_btn">
      <a href="javascript:;" class="btn  btn-warning"><img src="../../../../assets/img/res10.png"> 新增子类型</a>
      <a href="javascript:;" class="btn  btn-success"><img src="../../../../assets/img/res2.png"> 禁用该类型</a>
      <a href="javascript:;" class="btn  btn-danger"><img src="../../../../assets/img/res9.png"> 删除该类型</a>
    </div>
    <form class="form form-horizontal">
      <div class="Operate_cont clearfix">
        <label class="form-label">
          <span>*</span>
          分类名称：
        </label>
        <div class="formControls">
          <input type="text" class="input-text">
        </div>
      </div>
      <div class="Operate_cont clearfix">
        <label class="form-label">
          <span>*</span>
          排序：
        </label>
        <div class="formControls">
          <input type="text" class="input-text">
        </div>
      </div>
      <div class="Operate_cont clearfix">
        <label class="form-label">
          备注：
        </label>
        <div class="formControls">
          <textarea class="textarea" placeholder="说点什么...最少输入10个字符"></textarea>
          <p class="textarea-numberbar">0/100</p>
        </div>
      </div>
      <div style=" text-align:center">
        <input type="submit" class="btn btn-primary radius" value="提交">
      </div>
    </form>
  </div>
</div>
</template>

<script>
    export default {
        name: "ResIndexClassificationManagement",
        methods:{

        },
        mounted() {

        }
    }
</script>

<style scoped>
.ClassificationManagement{
  padding: 20px 15px 60px;
  width: 80%;
  overflow-y: auto;
}
.ClassificationManagement::-webkit-scrollbar{
  display: none;
}
.type_title{
  padding-left: 20px;
  font-size: 18px;
  border-bottom: 1px solid #dddddd;
  background: #2a8bcc;
  background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%)!important;
  background-repeat: repeat-x!important;
  height: 40px;
  line-height: 40px;
  color: #333333;
  width: 100%;
}
.type_content {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
.type_content .Operate_btn {
  border: 1px solid #dddddd;
  padding: 10px 0px;
  text-align: center;
}
.btn {
  padding: 3px 10px;
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
  border-radius: 3px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.428571429;
  text-align: center;
  white-space: nowrap;
  user-select: none;
}
.btn-warning{
  background-color: #fcbf6a;
  border: 5px solid #fcbf6a;
}
.btn-warning:hover{
  background-color: #e59729;
}
.btn-success{
  background-color: #87b87f;
  border: 5px solid #87b87f;
}
.btn-success:hover{
  background-color: #629b58;
}
.btn-danger{
  background-color: #d15b47;
  border: 5px solid #d15b47;
}
.btn-danger:hover{
  background-color: #b74635;
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
.Operate_cont {
  padding: 10px;
}
label {
  font-weight: normal;
  font-size: 14px;
  vertical-align: middle;
}
.form-label {
  float: left;
  width: 81px;
  text-align: right;
}
.formControls {
  float: left;
  width: 250px;
  margin-left: 10px;
}
input[type="text"],textarea{
  border-radius: 0!important;
  color: #858585;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  padding: 5px 4px;
  margin-left: 10px;
  line-height: 1.2;
  font-size: 14px;
  font-family: inherit;
  box-shadow: none!important;
  transition-duration: .1s;
  outline: 0;
}
input[type="text"]:focus,textarea:focus{
  border-color:#f59942;
}
.formControls>* {
  vertical-align: middle;
}
.formControls textarea {
  width: 390px;
  height: 100px;
  resize: none;
}
input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
}
.btn-primary{
  background-color: #4398ed;
  border: 5px solid #4398ed;
}
.btn-primary:hover{
  background-color:#428bca;
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
