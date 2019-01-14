<template>
  <div class="member clearfix">
    <span class="bread">
      <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
      <a href="javascript:;"><cite>支付管理</cite></a>  /
      <router-link to="/ResIndexMemberList"><cite>账户管理</cite></router-link>
    </span>
    <div class="search_style">
      <ul class="search_content clearfix">
        <li><label class="l_f">会员名称</label><input type="text" class="text_add" placeholder="输入会员名称、电话、邮箱" style="width:400px"></li>
        <li>添加日期 <el-date-picker v-model="value1" size="small" type="date" placeholder="选择日期"></el-date-picker></li>
        <li style="width:90px;">
          <button type="button" class="btn_search"><img src="../../../../assets/img/res_1.jpg">查询</button>
        </li>
      </ul>
    </div>
    <div class="border clearfix">
      <span class="l_f">
          <a href="javascript:;" class="btn btn-warnings"><img src="../../../../assets/img/res_tianjia.png">添加用户</a>
          <a href="javascript:;" class="btn btn-danger"><img src="../../../../assets/img/res9.png">批量删除</a>
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
                    <input type="checkbox" class="input_check checkall">
                    <label></label>
                  </div>
                </th>
                <th>ID</th>
                <th>用户名</th>
                <th>性别</th>
                <th>手机</th>
                <th>邮箱</th>
                <th>地址</th>
                <th>加入时间</th>
                <th>等级</th>
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
                <td class="order_product_name"><a href="javascript:;">张三</a></td>
                <td>男</td>
                <td>13000000000</td>
                <td>admin@mail.com  </td>
                <td>北京市 海淀区</td>
                <td>2014-6-11 11:11:42</td>
                <td>普通用户</td>
                <td>
                  <span class="label-success">已启用</span>
                  <span class="label-success1">已停用</span>
                </td>
                <td class="tds">
                  <a href="javascript:;" class="btn btn-xs btn-success" title="退款">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-successh" title="退款">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-info" title="详细">
                    <img src="../../../../assets/img/res10.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-warning" title="删除">
                    <img src="../../../../assets/img/res9.png" alt="">
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
                <td class="order_product_name"><a href="javascript:;">张小泉</a></td>
                <td>男</td>
                <td>13000000000</td>
                <td>admin@mail.com  </td>
                <td>北京市 海淀区</td>
                <td>2014-6-11 11:11:42</td>
                <td>普通用户</td>
                <td>
                  <span class="label-success">已启用</span>
                  <span class="label-success1">已停用</span>
                </td>
                <td class="tds">
                  <a href="javascript:;" class="btn btn-xs btn-success" title="退款">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-successh" title="退款">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-info" title="详细">
                    <img src="../../../../assets/img/res10.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-warning" title="删除">
                    <img src="../../../../assets/img/res9.png" alt="">
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
                <td class="order_product_name"><a href="javascript:;">张小泉</a></td>
                <td>男</td>
                <td>13000000000</td>
                <td>admin@mail.com  </td>
                <td>北京市 海淀区</td>
                <td>2014-6-11 11:11:42</td>
                <td>银牌用户</td>
                <td>
                  <span class="label-success">已启用</span>
                  <span class="label-success1">已停用</span>
                </td>
                <td class="tds">
                  <a href="javascript:;" class="btn btn-xs btn-success" title="退款">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-successh" title="退款">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-info" title="详细">
                    <img src="../../../../assets/img/res10.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-warning" title="删除">
                    <img src="../../../../assets/img/res9.png" alt="">
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
                <td class="order_product_name"><a href="javascript:;">张小泉</a></td>
                <td>男</td>
                <td>13000000000</td>
                <td>admin@mail.com  </td>
                <td>北京市 海淀区</td>
                <td>2014-6-11 11:11:42</td>
                <td>银牌用户</td>
                <td>
                  <span class="label-success">已启用</span>
                  <span class="label-success1">已停用</span>
                </td>
                <td class="tds">
                  <a href="javascript:;" class="btn btn-xs btn-success" title="退款">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-successh" title="退款">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-info" title="详细">
                    <img src="../../../../assets/img/res10.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-warning" title="删除">
                    <img src="../../../../assets/img/res9.png" alt="">
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
                <td class="order_product_name"><a href="javascript:;">张小泉</a></td>
                <td>男</td>
                <td>13000000000</td>
                <td>admin@mail.com  </td>
                <td>北京市 海淀区</td>
                <td>2014-6-11 11:11:42</td>
                <td>银牌用户</td>
                <td>
                  <span class="label-success">已启用</span>
                  <span class="label-success1">已停用</span>
                </td>
                <td class="tds">
                  <a href="javascript:;" class="btn btn-xs btn-success" title="退款">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-successh" title="退款">
                    <img src="../../../../assets/img/res2.png" alt="">
                  </a>
                  <a href="javascript:;" class="btn btn-xs btn-info" title="详细">
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
    <!-- 张三信息 -->
    <div class="layui-layer-iframe drag" v-drag>
      <div class="layui-layer-title">张三</div>
      <span class="layui-layer-setwin">
          <a href="javascript:;" class="layui-layer-close sanclose"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-content">
        <div class="member_show" style="height:358px;">
          <div class="member_jbxx clearfix">
            <img src="../../../../assets/img/user.png" class="img">
            <dl class="right_xxln">
              <dt><span>张三</span><span>余额：40</span></dt>
              <dd>这家伙很懒，什么也没有留下</dd>
            </dl>
          </div>
          <div class="member_content">
            <ul class="uli">
              <li><label class="label_name">性别：</label><span class="name">男</span></li>
              <li><label class="label_name">手机：</label><span class="name">13456765555</span></li>
              <li><label class="label_name">固定电话：</label><span class="name">021-454443344</span></li>
              <li><label class="label_name">邮箱：</label><span class="name">admin@mail.com</span></li>
              <li><label class="label_name">地址：</label><span class="name">江苏南京市雨花台区创业路5号紫荆花园2懂4单元402</span></li>
              <li><label class="label_name">注册时间：</label><span class="name">2014.12.20</span></li>
              <li><label class="label_name">积分：</label><span class="name">2014.12.20</span></li>
              <li><label class="label_name">等级：</label><span class="name">普通用户</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 张小泉信息 -->
    <div class="layui-layer-iframes drag" v-drag>
      <div class="layui-layer-title">张小泉</div>
      <span class="layui-layer-setwin">
          <a href="javascript:;" class="layui-layer-close xiaoclose"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-content">
        <div class="member_show" style="height:358px;">
          <div class="member_jbxx clearfix">
            <img src="../../../../assets/img/user.png" class="img">
            <dl class="right_xxln">
              <dt><span>张小泉</span><span>余额：40</span></dt>
              <dd>这家伙很懒，什么也没有留下</dd>
            </dl>
          </div>
          <div class="member_content">
            <ul class="uli">
              <li><label class="label_name">性别：</label><span class="name">男</span></li>
              <li><label class="label_name">手机：</label><span class="name">13456765555</span></li>
              <li><label class="label_name">固定电话：</label><span class="name">021-454443344</span></li>
              <li><label class="label_name">邮箱：</label><span class="name">admin@mail.com</span></li>
              <li><label class="label_name">地址：</label><span class="name">江苏南京市雨花台区创业路5号紫荆花园2懂4单元402</span></li>
              <li><label class="label_name">注册时间：</label><span class="name">2014.12.20</span></li>
              <li><label class="label_name">积分：</label><span class="name">2014.12.20</span></li>
              <li><label class="label_name">等级：</label><span class="name">普通用户</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 确定要停用吗 -->
    <div class="layui-layer-dialogp layui-layer-dialogpfg drag" v-drag>
      <div class="layui-layer-titlep">信息</div>
      <span class="layui-layer-setwindp">
          <a href="javascript:;" class="layui-layer-closep tingclose"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-paddingp">确定要停用吗！</div>
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
    <div class="layui-layer-dialogp drag" v-drag>
      <div class="layui-layer-titlep">信息</div>
      <span class="layui-layer-setwindp">
          <a href="javascript:;" class="layui-layer-closep qiclose"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-paddingp">确定要启用吗！</div>
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
    <!-- 修改用户信息 -->
    <div class="layui-layer-page drag" v-drag>
      <div class="layui-layer-title">修改用户信息</div>
      <span class="layui-layer-setwin">
        <a href="javascript:;" class="layui-layer-min"><cite></cite></a>
        <a href="javascript:;" class="layui-layer-close1 closeclose"><img src="../../../../assets/img/res8.png" alt=""></a>
    </span>
      <div class="layui-layer-content">
        <div class="layui-layer-wrap">
          <ul class="page-content">
            <li>
              <label class="label_name">用&nbsp;&nbsp;户&nbsp;名：</label>
              <span class="add_name">
                  <input type="text" class="text_add " id="username">
              </span>
              <div class="prompt r_f"></div>
            </li>
            <li>
              <label class="label_name">真  实 姓 名：</label>
              <span class="add_name">
                <input type="text" class="text_add " id="truename">
            </span>
              <div class="prompt r_f"></div>
            </li>
            <li>
              <label class="label_name">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label>
              <div class="add_name">
                <span class="spans">
                  <input type="radio" class="Checkbox" id="myCheck" name="启用" checked="checked">
                  <label for="myCheck"></label>男
                </span>
                <span class="spans">
                  <input type="radio" class="Checkbox1" id="myCheck1" name="启用">
                    <label for="myCheck1"></label>女
                </span>&nbsp;
                <span class="spans">
                  <input type="radio" class="Checkbox2" id="myCheck2" name="启用">
                  <label for="myCheck2"></label>
                  保密
                </span>
              </div>
            </li>
            <li>
              <label class="label_name">固定电话：</label>
              <span class="add_name">
                  <input type="text" class="text_add " id="guphone">
              </span>
              <div class="prompt r_f"></div>
            </li>
            <li>
              <label class="label_name">移动电话：</label>
              <span class="add_name">
                  <input type="text" class="text_add " id="movephone">
              </span>
              <div class="prompt r_f"></div>
            </li>
            <li>
              <label class="label_name">电子邮箱：</label>
              <span class="add_name">
                  <input type="text" class="text_add " id="email">
              </span>
              <div class="prompt r_f"></div>
            </li>
            <li class="adderss">
              <label class="label_name">家庭住址：</label>
              <span class="add_name">
                  <input type="text" class="text_add " id="address" style="width:350px">
              </span>
              <div class="prompt r_f"></div>
            </li>
            <li>
              <label class="label_name">状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：</label>
              <div class="add_name">
                <span class="spans">
                  <input type="radio" class="Checkbox3" id="myCheck3" name="1" checked="checked">
                  <label for="myCheck3"></label>
                    开启
                  </span>
                <span class="spans">
                <input type="radio" class="Checkbox4" id="myCheck4" name="1">
                <label for="myCheck4"></label>关闭
              </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="layui-layer-btn">
        <a href="javascript:;" class="layui-layer-btn0 tijiao">提交</a>
        <a href="javascript:;" class="layui-layer-btn1 quxiao">取消</a>
      </div>
    </div>
    <!-- 遮罩层2 -->
    <div class="layui-layer-shadea"></div>
    <!-- 用户名不能为空 -->
    <div class="layui-layer-dialog">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
          <a href="javascript:;" class="layui-layer-close1 userclose"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-padding">
        <img src="../../../../assets/img/res_jing.png" alt="">用户名不能为空！
      </div>
      <div class="layui-layer-btna">
        <a href="javascript:;" class="layui-layer-btn3 userken">确定</a>
      </div>
    </div>
    <!-- 真实姓名不能为空 -->
    <div class="layui-layer-dialogx">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
          <a href="javascript:;" class="layui-layer-close1 trueclose"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-padding">
        <img src="../../../../assets/img/res_jing.png" alt="">真实姓名不能为空！
      </div>
      <div class="layui-layer-btna">
        <a href="javascript:;" class="layui-layer-btn3 trueken">确定</a>
      </div>
    </div>
    <!-- 固定电话不能为空 -->
    <div class="layui-layer-dialogphone">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
          <a href="javascript:;" class="layui-layer-close1 guclose"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-padding">
        <img src="../../../../assets/img/res_jing.png" alt="">固定电话不能为空！
      </div>
      <div class="layui-layer-btna">
        <a href="javascript:;" class="layui-layer-btn3 guken">确定</a>
      </div>
    </div>
    <!-- 移动电话不能为空 -->
    <div class="layui-layer-dialogphone2">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
          <a href="javascript:;" class="layui-layer-close1 yiclose"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-padding">
        <img src="../../../../assets/img/res_jing.png" alt="">移动电话不能为空！
      </div>
      <div class="layui-layer-btna">
        <a href="javascript:;" class="layui-layer-btn3 yiken">确定</a>
      </div>
    </div>
    <!-- 电子邮件不能为空 -->
    <div class="layui-layer-dialogemaile">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
          <a href="javascript:;" class="layui-layer-close1 dianclose"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-padding">
        <img src="../../../../assets/img/res_jing.png" alt="">
        电子邮件不能为空！
      </div>
      <div class="layui-layer-btna">
        <a href="javascript:;" class="layui-layer-btn3 dianken">确定</a>
      </div>
    </div>
    <!-- 家庭住址不能为空 -->
    <div class="layui-layer-dialoghome">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
        <a href="javascript:;" class="layui-layer-close1 jiaclose"><img src="../../../../assets/img/res8.png" alt=""></a>
    </span>
      <div class="layui-layer-padding">
        <img src="../../../../assets/img/res_jing.png" alt="">家庭住址不能为空！
      </div>
      <div class="layui-layer-btna">
        <a href="javascript:;" class="layui-layer-btn3 jiaken">确定</a>
      </div>
    </div>
    <!-- 添加成功 -->
    <div class="layui-layer-dialogcheng drag" v-drag>
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
          <a href="javascript:;" class="layui-layer-close1 successclose"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
      <div class="layui-layer-padding">
        <img src="../../../../assets/img/res_l.png" alt="">添加成功!
      </div>
      <div class="layui-layer-btna">
        <a href="javascript:;" class="layui-layer-btn3 successken">确定</a>
      </div>
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
    <!-- 缩小 -->
    <div class="layui-animl drag" v-drag>
      <div class="layui-layer-titlel">修改用户...</div>
      <span class="layui-layer-setwinl">
          <a href="javascript:;" class="bigbig"><img src="../../../../assets/img/res_big.png" alt=""></a>
          <a href="javascript:;" class="smallsmall"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "ResIndexMemberList",
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
      this.select();
      //添加用户
        $('.btn-warnings').click(function () {
          $('.layui-layer-page').show();
          $('.layui-layer-shade').show();
        });
      //添加用户 取消以及close
      $('.quxiao').click(function () {
        $('.layui-layer-page').hide();
        $('.layui-layer-shade').hide();
      });
      $('.closeclose').click(function () {
        $('.layui-layer-page').hide();
        $('.layui-layer-shade').hide();
      });
      //添加用户小化
      $('.layui-layer-min').click(function () {
        $('.layui-layer-page').hide();
        $('.layui-animl').show();
      });
      //添加用户小化  close
      $('.smallsmall').click(function () {
        $('.layui-animl').hide();
        $('.layui-layer-shade').hide();
      });
      //添加用户小化  放大
      $('.bigbig').click(function () {
        $('.layui-animl').hide();
        $('.layui-layer-page').show();
        $('.layui-layer-shade').show();
      })
      //添加用户  点击提交
      $('.tijiao').click(function () {
        var username=$('#username').val();
        var truename=$('#truename').val();
        var guphone=$('#guphone').val();
        var movephone=$('#movephone').val();
        var email=$('#email').val();
        var address=$('#address').val();
        //添加用户 判断用户名是否为空,真实姓名是否为空,固定电话是否为空,移动电话是否为空
        if(username == '' || username == undefined || username == null){
            $('.layui-layer-dialog').show();
            $('.layui-layer-shadea').show();
            $('.userken').click(function () {
              $('.layui-layer-dialog').hide();
              $('.layui-layer-shadea').hide();
            });
          $('.userclose').click(function () {
            $('.layui-layer-dialog').hide();
            $('.layui-layer-shadea').hide();
          })
        }else if(truename == '' || truename == undefined || truename == null){
          $('.layui-layer-dialogx').show();
          $('.layui-layer-shadea').show();
          $('.trueken').click(function () {
            $('.layui-layer-dialogx').hide();
            $('.layui-layer-shadea').hide();
          });
          $('.trueclose').click(function () {
            $('.layui-layer-dialogx').hide();
            $('.layui-layer-shadea').hide();
          })
        }else if(guphone == '' || guphone == undefined || guphone == null){
          $('.layui-layer-dialogphone').show();
          $('.layui-layer-shadea').show();
          $('.guken').click(function () {
            $('.layui-layer-dialogphone').hide();
            $('.layui-layer-shadea').hide();
          });
          $('.guclose').click(function () {
            $('.layui-layer-dialogphone').hide();
            $('.layui-layer-shadea').hide();
          })
        }else if(movephone == '' || guphone == undefined || guphone == null){
          $('.layui-layer-dialogphone2').show();
          $('.layui-layer-shadea').show();
          $('.yiken').click(function () {
            $('.layui-layer-dialogphone2').hide();
            $('.layui-layer-shadea').hide();
          });
          $('.yiclose').click(function () {
            $('.layui-layer-dialogphone2').hide();
            $('.layui-layer-shadea').hide();
          })
        }else if(email == '' || email == undefined || email == null){
          $('.layui-layer-dialogemaile').show();
          $('.layui-layer-shadea').show();
          $('.dianken').click(function () {
            $('.layui-layer-dialogemaile').hide();
            $('.layui-layer-shadea').hide();
          });
          $('.dianclose').click(function () {
            $('.layui-layer-dialogemaile').hide();
            $('.layui-layer-shadea').hide();
          })
        }else if(address == '' || address == undefined || address == null){
          $('.layui-layer-dialoghome').show();
          $('.layui-layer-shadea').show();
          $('.jiaken').click(function () {
            $('.layui-layer-dialoghome').hide();
            $('.layui-layer-shadea').hide();
          });
          $('.jiaclose').click(function () {
            $('.layui-layer-dialoghome').hide();
            $('.layui-layer-shadea').hide();
          })
        }else{
          //添加成功
          $('.layui-layer-dialogcheng').show();
          $('.layui-layer-page').hide();
          $('.successken').click(function () {
            $('.layui-layer-dialogcheng').hide();
            $('.layui-layer-shade').show();
          })
          $('.successclose').click(function () {
            $('.layui-layer-dialogcheng').hide();
            $('.layui-layer-shade').show();
            $('.layui-layer-shadea').show();
          })
        }
      })
      //获取用户,并弹出相应的信息
      $('.order_product_name').click(function () {
        if($(this).text()=='张小泉'){
             $('.layui-layer-iframes').show();
             $('.layui-layer-shade').show();
            //用户信息 close
            $('.xiaoclose').click(function () {
              $('.layui-layer-iframes').hide();
              $('.layui-layer-shade').hide();
            })
          }else if($(this).text()=='张三'){
            $('.layui-layer-iframe').show();
            $('.layui-layer-shade').show();
          $('.sanclose').click(function () {
            $('.layui-layer-iframe').hide();
            $('.layui-layer-shade').hide();
          })
         }
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
      $(".label-success1").each(function () {
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
          $(".label-success1").eq(index).show();
          $('.hen').show();
          setInterval(function () {
            $('.hen').hide();
          },2000);
        })
      })

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
      $(".label-success1").each(function () {
        $(this).attr({"indexss":counttt});
        counttt++;
      });
      $(".label-success").each(function () {
        $(this).attr({"indexss":counttt});
        counttt++;
      });

      $('.btn-successh').click(function(){
        indexss = $(this).attr("indexss");
        $('.layui-layer-dialogp').show();
        $('.layui-layer-shade').show();
        $('.qiclose').click(function(){
          $('.layui-layer-dialogp').hide();
          $('.layui-layer-shade').hide();
        });
        $('.qiqu').click(function(){
          $('.layui-layer-dialogp').hide();
          $('.layui-layer-shade').hide();
        });
        $('.qiken').click(function () {
          $('.layui-layer-dialogp').hide();
          $('.layui-layer-shade').hide();

          $(".btn-successh").eq(indexss).hide();
          $(".btn-success").eq(indexss).show();
          $(".label-success1").eq(indexss).hide();
          $(".label-success").eq(indexss).show();
          $('.happy').show();
          setInterval(function () {
            $('.happy').hide();
          },2000);
        })
      })
    }
  }
</script>

<style scoped>
  .member{
    padding: 20px 15px 60px;
    width: 80%;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
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
  .btn-warnings{
    background-color: #ffb752;
    border: 5px solid #ffb752;
  }
  .btn-warnings:hover{
    background-color: #e59729;
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
    font-size: 15px;
  }
  .dataTables_wrapper .row:first-child {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .sample-table_wrapper{
    width: 1366px;
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
  .Checkbox {
    position: absolute;
    visibility: hidden;
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
  }
  .table thead tr th:nth-child(2) {
    width: 62px;
    cursor: pointer;
  }
  .table thead tr th:nth-child(3) {
    width: 82px;
    cursor: pointer;
  }
  .table thead tr th:nth-child(4) {
    width: 62px;
    cursor: pointer;
  }
  .table thead tr th:nth-child(5) {
    width: 102px;
    cursor: pointer;
  }
  .table thead tr th:nth-child(6) {
    width: 132px;
    background-image: -webkit-gradient(linear,left 0,left 100%,from(#eff3f8),to(#e3e7ed));
    color: #307ecc;
    cursor: pointer;
  }
  .table thead tr th:nth-child(7) {
    width: 179px;
    cursor: pointer;
  }
  .table thead tr th:nth-child(8) {
    width: 162px;
    cursor: pointer;
  }
  .table thead tr th:nth-child(9) {
    width: 82px;
    color: #307ecc;
  }
  .table thead tr th:nth-child(10) {
    width: 52px;
    color: #307ecc;
  }
  .table thead tr th:nth-child(11) {
    width: 232px;
  }
  .table thead tr th:nth-child(2):hover {
    color: #547ea8;
  }
  .table thead tr th:nth-child(3):hover {
    color: #547ea8;
  }
  .table thead tr th:nth-child(4):hover {
    color: #547ea8;
  }
  .table thead tr th:nth-child(5):hover {
    color: #547ea8;
  }
  .table thead tr th:nth-child(8):hover {
    color: #547ea8;
  }
  .table thead tr th:nth-child(11):hover {
    color: #547ea8;
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
  .input_check {
    opacity: 0;
    width: 18px;
    height: 18px;
    position: absolute;
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
    color: #428bca;
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
     display: block;
  }
  .label-success1{
    font-size: 12px;
    line-height: 1.15;
    height: 20px;
    background-color: #abbac3;
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
  .tds{
    display: flex;
    justify-content: center;
  }
  .tds .btn-success{
    background-color: #87b87f;
    border: 5px solid #87b87f;
  }
  .tds .btn-successh{
    background-color: #abbac3;
    border: 5px solid #abbac3;
    display: none;
  }
  .btn-successh:hover{
    background-color: #8b9aa3;
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
  /* 张三信息 */
  .layui-layer-iframe{
    z-index: 1223;
    width: 500px;
    position: absolute;
    top: 150px;
    left: 565px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    border-radius: 2px;
    display: none;
  }
  .layui-layer-setwin .layui-layer-close img {
    cursor: pointer;
    margin-bottom: 5px;
    margin-left: 5px;
  }
  .member_show .member_jbxx {
    background-color: #5bacb6;
    padding: 10px;
  }
  .member_show .member_jbxx .img {
    width: 64px;
    height: 64px;
    float: left;
  }
  .right_xxln {
    margin-left: 80px;
    color: #fff;
  }
  .right_xxln dt {
    margin-bottom: 10px;
    font-weight: bold;
    line-height: 1.428571429;
  }
  dt span{
    margin-left: 2px;
  }
  dd {
    line-height: 1.428571429;
  }
  .member_content {
    padding: 10px;
  }
  .member_content li {
    margin: 10px 0px;
    line-height: 30px;
    position: relative;
  }
  .uli li:after {
    display: block;
    content: ".";
    height: 0;
    visibility: hidden;
    clear: both;
    font-size: 0;
    line-height: 0;
  }
  .member_content li .label_name {
    width: 80px;
    text-align: right;
    float: left;
    line-height: 30px;
  }
  .member_content li .name {
    float: left;
    text-align: left;
  }
  /* 张小泉信息 */
  .layui-layer-iframes{
    z-index: 1224;
    width: 500px;
    position: absolute;
    top: 150px;
    left: 565px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    border-radius: 2px;
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
  /* 修改用户信息 */
  .layui-layer-page{
    z-index: 1223;
    width: 800px;
    position: fixed;
    top: 100px;
    left: 410px;
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
  .layui-layer-content{
    overflow: auto;
  }
  .page-content{
    background: #fff;
    margin: 0;
    padding: 0px 15px;
  }
  .page-content li {
    margin: 10px 0px;
    height: 40px;
    line-height: 40px;
    float: left;
    width: 50%;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .page-content li .label_name{
    width: 80px;
    text-align: right;
    float: left;
    line-height: 30px;
  }
  .page-content li .add_name {
    float: left;
    margin-left: 10px;
    line-height: 30px;
  }
  .spans{
    font-size: 14px;
    position: relative;
  }
  .page-content li.adderss {
    width: 100%;
  }
  .Checkbox {
    position: absolute;
    visibility: hidden;
  }
  #myCheck + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .Checkbox1 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck1 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck1 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck1:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .Checkbox2 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck2 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck2 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck2:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .Checkbox3 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck3 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck3 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck3:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .Checkbox4 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck4 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck4 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck4:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
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
  }
  .layui-layer-btn .layui-layer-btn0 {
    border-color: #4898d5;
    background-color: #2e8ded;
    color: #fff;
  }
  /* 遮罩层2*/
  .layui-layer-shadea{
    z-index: 9999999;
    background-color: #000;
    opacity: 0.5;
    top: 79px;
    right: 0;
    width: 80%;
    height: 100%;
    position: fixed;
    display: none;
  }
  /* 用户名不能为空 */
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
  /* 真实姓名不能为空 */
  .layui-layer-dialogx{
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
  /* 固定电话不能为空 */
  .layui-layer-dialogphone{
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
  /* 移动电话不能为空 */
  .layui-layer-dialogphone2{
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
  /* 电子邮件不能为空 */
  .layui-layer-dialogemaile{
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
  /* 家庭住址不能为空 */
  .layui-layer-dialoghome{
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
  .layui-layer-dialogcheng{
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
  .layui-layer-paddingpp{
    padding: 20px;
    line-height: 24px;
    word-break: break-all;
    font-size: 14px;
    overflow: auto;
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
