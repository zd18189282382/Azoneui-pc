<template>
    <div class="addartical">
      <div class="article_style">
        <div class="add_content">
          <ul>
            <li class="clearfix Mandatory">
              <label class="label_name">
                <i>*</i>
                文章标题
              </label>
              <span class="formControls col-10">
                  <input type="text" name="文章标题" class="col-xs-10 col-sm-5">
              </span>
            </li>
            <li class="clearfix Mandatory">
              <label class="label_name">
                <i>*</i>
                文章简介
              </label>
              <span class="formControls col-10">
                  <input type="text" name="文章简介" class="col-xs-10 col-sm-6">
              </span>
            </li>
            <li class="clearfix">
              <label class="label_name">排序</label>
              <span class="formControls col-10">
                  <input type="text" class="col-xs-10 col-sm-1">
              </span>
            </li>
            <li class="clearfix">
              <label class="label_name">
                <i>*</i>
                所属分类
              </label>
              <span class="formControls col-4">
                  <select class="form-control">
                      <option value>--选择所属分类--</option>
                      <option value="1">帮助中心</option>
                      <option value="2">购物指南</option>
                      <option value="3">售后服务</option>
                  </select>
              </span>
            </li>
            <li></li>
            <li></li>
          </ul>
          <div class="Button_operation">
            <button class="btn btn-primary radius" type="submit">保存并提交</button>
            <button class="btn btn-secondary btn-warning" type="button">保存草稿</button>
            <button class="btn btn-default radius" type="button">&nbsp;&nbsp;取消&nbsp;&nbsp;</button>
          </div>
        </div>
      </div>
      <!-- 遮罩层 -->
      <div class="layui-layer-shade"></div>
      <!-- 文章标题不能为空 -->
      <div class="layui-layer-dialog">
        <div class="layui-layer-titlea">提示框</div>
        <span class="layui-layer-setwind">
                <a href="javascript:;" class="layui-layer-close1"><img src="../../../../assets/img/res8.png" alt=""></a>
            </span>
        <div class="layui-layer-padding">
          <img src="../../../../assets/img/res_jing.png" alt="">
          文章标题不能为空！
        </div>
        <div class="layui-layer-btna">
          <a href="javascript:;" class="layui-layer-btn3">确定</a>
        </div>
      </div>
      <!-- 文章简介不能为空 -->
      <div class="layui-layer-dialogi">
        <div class="layui-layer-titlea">提示框</div>
        <span class="layui-layer-setwind">
                <a href="javascript:;" class="layui-layer-close1"><img src="../../../../assets/img/res8.png" alt=""></a>
            </span>
        <div class="layui-layer-padding">
          <img src="../../../../assets/img/res_jing.png" alt="">
          文章简介不能为空！
        </div>
        <div class="layui-layer-btna">
          <a href="javascript:;" class="layui-layer-btn3">确定</a>
        </div>
      </div>
      <!-- 添加成功 -->
      <div class="layui-layer-dialogm">
        <div class="layui-layer-titlea">提示框</div>
        <span class="layui-layer-setwind">
                <a href="javascript:;" class="layui-layer-close1"><img src="../../../../assets/img/res8.png" alt=""></a>
            </span>
        <div class="layui-layer-padding">
          <img src="../../../../assets/img/res_l.png" alt="">
          添加成功！
        </div>
        <div class="layui-layer-btna">
          <a href="javascript:;" class="layui-layer-btn3">确定</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ResIndexAddArticle"
    }
</script>

<style scoped>
.addartical{
  padding: 20px 15px 60px;
  height: 100%;
  width: 80%;
  overflow-y: auto;
}
.addartical::-webkit-scrollbar {
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
.add_content{
  padding: 20px 0px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.article_style .add_content li {
  margin-bottom: 10px;
  line-height: 32px;
}
.article_style .add_content li .label_name {
  width: 80px;
  float: left;
  text-align: right;
}
label{
  vertical-align: middle;
  font-weight: normal;
  font-size: 14px;
}
.article_style .add_content li i {
  color: #F33;
}
i{
  font-style: normal;
}
.add_content .formControls.col-10 {
  width: 90%;
  margin-left: 10px;
}
.add_content .formControls{
  top: 0px;
  float: left;
  width: auto;
  margin-left: 20px;
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
  transition-duration: .1s;
  outline: 0;
}
input[type="text"]:focus{
  border-color:#f59942;
}
.col-sm-5{
  width: 41.6666%;
  float: left;
}
.col-sm-6 {
  width: 50%;
  float: left;
}
.col-sm-1 {
  width: 8.33333%;
  float: left;
}
select.form-control {
  padding: 4px 6px;
  height: 32px;
}
select:focus{
  outline: 0;
  border-color:#f59942;
}
.form-control, select {
  border-radius: 0;
  box-shadow: none!important;
  color: #858585;
  background-color: #fff;
  border: 1px solid #d5d5d5;
}
.form-control{
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 1.428571429;
}
select option, select.form-control option {
  padding: 3px 4px;
}
.Button_operation {
  width: 360px;
  margin-left: auto;
  margin-right: auto;
}
.btn {
  padding: 3px 10px;
  display: inline-block;
  font-family: "Microsoft YaHei";
  color: #FFF!important;
  text-shadow: 0 -1px 0 rgba(0,0,0,0.25)!important;
  background-image: none!important;
  border: 5px solid #FFF;
  border-radius: 0;
  box-shadow: none!important;
  -webkit-transition: all ease .15s;
  transition: all ease .15s;
  cursor: pointer;
  vertical-align: middle;
  margin-right: 5px;
  border-radius: 3px;
}
.btn-primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
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
  font-size: 14px;
  font-weight: normal;
  line-height: 1.428571429;
  text-align: center;
  white-space: nowrap;
  user-select: none;
}
.btn-primary{
  background-color: #428bca;
  border: 5px solid #428bca;
}
.btn-primary:hover{
  background-color: #307ecc;
}
.btn-warning{
  background-color: #ffb752;
  border: 5px solid #ffb752;
}
.btn-warning:hover{
  background-color: #e59729;
}
.btn-default{
  background-color: #abbac3;
  border: 5px solid #abbac3;
}
.btn-default:hover{
  background-color: #8b9aa3;
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
/* 文章标题不能为空 */
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
/* 文章简介不能为空 */
.layui-layer-dialogi{
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
/* 添加成功 */
.layui-layer-dialogm{
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
</style>
