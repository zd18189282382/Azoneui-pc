<template>
<div class="Configuration">
    <span class="bread">
      <router-link to="/ResIndexPage"><cite>首页</cite></router-link>  /
      <a href="javascript:;"><cite>支付管理</cite></a>  /
      <router-link to="/ResIndexConfiguration"><cite>账户管理</cite></router-link>
    </span>
    <div class="Configure_style">
      <div class="manner">
        <div class="title_name">商城用户支付配置</div>
        <div class="info">
          <table class="table">
            <thead>
              <tr>
                <th width="150px">支付名称</th>
                <th width="150px">状态</th>
                <th>描述</th>
                <th width="100px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>在线支付（银联）</td>
                <td>
                  <span class="spans">
                      <input type="radio" class="Checkbox" id="myCheck" name="启用" checked="checked">
                      <label for="myCheck"></label>
                      启用
                  </span>
                  &nbsp;&nbsp;
                  <span class="spans">
                      <input type="radio" class="Checkbox1" id="myCheck1" name="启用">
                      <label for="myCheck1"></label>
                      关闭
                  </span>
                </td>
                <td>在线支付是指卖方与买方通过因特网上的电子商务网站进行交易时，银行为其提供网上资金结算服务的一种业务。它为企业和个人提供了一个安全、快捷、方便的电... </td>
                <td><a href="javascript:;">配置</a></td>
              </tr>
              <tr>
                <td>在线支付（预存）</td>
                <td>
                  <span class="spans">
                      <input type="radio" class="Checkbox2" id="myCheck2" name="1" checked="checked">
                      <label for="myCheck2"></label>
                      启用
                  </span>
                  &nbsp;&nbsp;
                  <span class="spans">
                      <input type="radio" class="Checkbox3" id="myCheck3" name="1">
                      <label for="myCheck3"></label>
                      关闭
                  </span>
                </td>
                <td>在线支付是指卖方与买方通过因特网上的电子商务网站进行交易时，银行为其提供网上资金结算服务的一种业务。它为企业和个人提供了一个安全、快捷、方便的电...</td>
                <td><a href="javascript:;">配置</a></td>
              </tr>
              <tr>
                <td>货到付款</td>
                <td>
                  <span class="spans">
                      <input type="radio" class="Checkbox4" id="myCheck4" name="2" checked="checked">
                      <label for="myCheck4"></label>
                      启用
                  </span>
                  &nbsp;&nbsp;
                  <span class="spans">
                      <input type="radio" class="Checkbox5" id="myCheck5" name="2">
                      <label for="myCheck5"></label>
                      关闭
                  </span>
                </td>
                <td>在线支付是指卖方与买方通过因特网上的电子商务网站进行交易时，银行为其提供网上资金结算服务的一种业务。它为企业和个人提供了一个安全、快捷、方便的电... </td>
                <td><a href="javascript:;">配置</a></td>
              </tr>
              <tr>
                <td>第三方在线支付</td>
                <td>
                  <span class="spans">
                      <input type="radio" class="Checkbox6" id="myCheck6" name="3" checked="checked">
                      <label for="myCheck6"></label>
                      启用
                  </span>
                  &nbsp;&nbsp;
                  <span class="spans">
                      <input type="radio" class="Checkbox7" id="myCheck7" name="3">
                      <label for="myCheck7"></label>
                      关闭
                  </span>
                </td>
                <td>所谓第三方支付，就是一些和产品所在国家以及国内外各大银行签约、并具备一定实力和信誉保障的第三方独立机构提供的交易支持平台。在通过第三方支付平台的...</td>
                <td><a href="javascript:;">配置</a></td>
              </tr>
              <tr>
                <td>线下支付</td>
                <td>
                  <span class="spans">
                      <input type="radio" class="Checkbox8" id="myCheck8" name="4" checked="checked">
                      <label for="myCheck8"></label>
                      启用
                  </span>
                  &nbsp;&nbsp;
                  <span class="spans">
                      <input type="radio" class="Checkbox9" id="myCheck9" name="4">
                      <label for="myCheck9"></label>
                      关闭
                  </span>
                </td>
                <td>所谓第三方支付，就是一些和产品所在国家以及国内外各大银行签约、并具备一定实力和信誉保障的第三方独立机构提供的交易支持平台。在通过第三方支付平台的...</td>
                <td><a href="javascript:;">配置</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="Other_style">
          <div class="title_names">其他配置信息</div>
          <div style="margin: 5px;">
            <ul class="uls">
              <li class="name">发票</li>
              <li class="operating">
                <span class="spans">
                    <input type="radio" class="Checkbox10" id="myCheck10" name="5">
                    <label for="myCheck10"></label>
                    启用
                </span>
                &nbsp;&nbsp;
                <span class="spans">
                    <input type="radio" class="Checkbox11" id="myCheck11" name="5">
                    <label for="myCheck11"></label>
                    关闭
                </span>
                <div class="Reply_style">
                  <p class="titles">选择发票类型</p>
                  <span>
                      <div class="checks">
                          <input type="checkbox" class="input_check">
                          <label></label>
                      </div>
                      普通纸质发票
                  </span>
                  <span>
                      <div class="checks">
                          <input type="checkbox" class="input_check">
                          <label></label>
                      </div>
                      增值税发票
                  </span>
                  <span>
                      <div class="checks">
                          <input type="checkbox" class="input_check">
                          <label></label>
                      </div>
                      电子发票
                  </span>
                </div>
              </li>
              <li class="infos">发票是指一切单位和个人在购销商品、提供或接受服务以及从事其他经营活动中，所开具和收取的业务凭证，是会计核算的原始依据，也是审计机关、税务机关执法</li>
            </ul>
            <ul class="uls">
              <li class="name">优惠劵</li>
              <li class="operating">
                <span class="spans">
                    <input type="radio" class="Checkbox12" id="myCheck12" name="6">
                    <label for="myCheck12"></label>
                    启用
                </span>
                &nbsp;&nbsp;
                <span class="spans">
                    <input type="radio" class="Checkbox13" id="myCheck13" name="6">
                    <label for="myCheck13"></label>
                    关闭
                </span>
              </li>
              <li class="infos">发票是指一切单位和个人在购销商品、提供或接受服务以及从事其他经营活动中，所开具和收取的业务凭证，是会计核算的原始依据，也是审计机关、税务机关执法</li>
            </ul>
            <ul class="uls">
              <li class="name">代收人</li>
              <li class="operating">
                <span class="spans">
                    <input type="radio" class="Checkbox14" id="myCheck14" name="7">
                    <label for="myCheck14"></label>
                    启用
                </span>
                &nbsp;&nbsp;
                <span class="spans">
                    <input type="radio" class="Checkbox15" id="myCheck15" name="7">
                    <label for="myCheck15"></label>
                    关闭
                </span>
              </li>
              <li class="infos">是否启用代收人操作，一次只能填写一次。如不在家可填写代收人的地址作为收货地址</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "ResIndexConfiguration",
        mounted() {
          $('#myCheck10').click(function () {
            $('.Reply_style').show();
          })
          $('#myCheck11').click(function () {
            $('.Reply_style').hide();
          })
        }
    }
</script>

<style scoped>
.Configuration{
  padding: 20px 15px 60px;
  width: 80%;
  overflow-y: auto;
}
.Configuration::-webkit-scrollbar{
  display: none;
}
.manner{
  margin-top: 20px;
}
.title_name{
  height: 40px;
  padding: 0px 20px;
  line-height: 40px;
  font-size: 16px;
  color: #ffffff;
  background-color: #438eb9;
}
.info:before, .clearfix:after {
  display: table;
  content: " ";
}
.info:after {
  display: block;
  content: ".";
  height: 0;
  visibility: hidden;
  clear: both;
  font-size: 0;
  line-height: 0;
}
.table{
  border: 1px solid #ddd;
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  border-spacing: 0;
  max-width: 100%;
  background-color: transparent;
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
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
/* thead */
.table thead tr {
  color: #707070;
  font-weight: normal;
  background: #f2f2f2;
  background-repeat: repeat-x;
}
.table thead tr th:first-child {
  border-left-color: #DDD;
}
.table thead tr th{
  vertical-align: middle;
  text-align: center;
  font-family: "Microsoft YaHei";
  border-color: #DDD;
  font-weight: bold;
}
.table>thead>tr>th{
  border: 1px solid #ddd;
}
.table thead>tr>th{
  padding: 8px;
  line-height: 1.428571429;
}

/* tbody */
.Configure_style .table tbody tr td {
  font-family: "Microsoft YaHei";
  overflow-wrap: break-word;
  word-break: break-all;
  vertical-align: middle;
  text-align: center;
}
.table>tbody>tr>td{
  border: 1px solid #ddd;
}
.table tbody>tr>td{
  padding: 8px;
  line-height: 1.428571429;
}
.spans{
  font-size: 14px;
  position: relative;
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
.Checkbox5 {
  position: absolute;
  visibility: hidden;
}
#myCheck5 + label{
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
#myCheck5 + label:hover{
  border: 1px solid #f59942;
}
#myCheck5:checked + label:after{
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


.Checkbox6 {
  position: absolute;
  visibility: hidden;
}
#myCheck6 + label{
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
#myCheck6 + label:hover{
  border: 1px solid #f59942;
}
#myCheck6:checked + label:after{
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
.Checkbox7 {
  position: absolute;
  visibility: hidden;
}
#myCheck7 + label{
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
#myCheck7 + label:hover{
  border: 1px solid #f59942;
}
#myCheck7:checked + label:after{
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

.Checkbox8 {
  position: absolute;
  visibility: hidden;
}
#myCheck8 + label{
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
#myCheck8 + label:hover{
  border: 1px solid #f59942;
}
#myCheck8:checked + label:after{
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
.Checkbox9 {
  position: absolute;
  visibility: hidden;
}
#myCheck9 + label{
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
#myCheck9 + label:hover{
  border: 1px solid #f59942;
}
#myCheck9:checked + label:after{
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
.table tbody tr td a {
  color: #F60;
}
.table tbody tr td a:hover{
  text-decoration: underline;
}

/* 其他配置信息 */
.Configure_style .Other_style .title_names{
  height: 40px;
  border: 1px solid #dddddd;
  line-height: 40px;
  font-size: 16px;
  padding: 0px 20px;
  background: #2a8bcc!important;
  background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%)!important;
  background-repeat: repeat-x!important;
}
.Configure_style .Other_style .uls{
  width: 260px;
  border: 1px solid #dddddd;
  margin: 5px;
  float: left;
  text-align: center;
}
.Configure_style .Other_style .uls .name{
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #dddddd;
  background: #2a8bcc!important;
  background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%)!important;
  background-repeat: repeat-x!important;
}
.Configure_style .Other_style .uls .operating{
  padding: 10px;
  border-bottom: 1px solid #dddddd;
}

.Checkbox10 {
  position: absolute;
  visibility: hidden;
}
#myCheck10 + label{
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
#myCheck10 + label:hover{
  border: 1px solid #f59942;
}
#myCheck10:checked + label:after{
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
.Checkbox11 {
  position: absolute;
  visibility: hidden;
}
#myCheck11 + label{
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
#myCheck11 + label:hover{
  border: 1px solid #f59942;
}
#myCheck11:checked + label:after{
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
.Configure_style .Other_style .uls .Reply_style{
  display: none;
  border: 1px solid #dddddd;
  margin-top: 10px;
  text-align: left;
}
.Configure_style .Other_style .uls .Reply_style .titles{
  border-bottom: 1px solid #dddddd;
  display: block;
  height: 30px;
  background-color: #dddddd;
  line-height: 30px;
  text-align: center;
}
.Configure_style .Other_style .uls .Reply_style span{
  padding: 5px 10px;
  display: inline-block;
  height: 30px;
  width: 236px;
  font-size: 14px;
}
.checks{
  width: 18px;
  margin-left: 11px;
  float: left;
  margin-right: 4px;
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
.Configure_style .Other_style .uls .infos {
  color: #999;
  padding: 10px;
  font-size: 13px;
}
.Checkbox12 {
  position: absolute;
  visibility: hidden;
}
#myCheck12 + label{
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
#myCheck12 + label:hover{
  border: 1px solid #f59942;
}
#myCheck12:checked + label:after{
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
.Checkbox13 {
  position: absolute;
  visibility: hidden;
}
#myCheck13 + label{
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
#myCheck13 + label:hover{
  border: 1px solid #f59942;
}
#myCheck13:checked + label:after{
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

.Checkbox14 {
  position: absolute;
  visibility: hidden;
}
#myCheck14 + label{
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
#myCheck14 + label:hover{
  border: 1px solid #f59942;
}
#myCheck14:checked + label:after{
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
.Checkbox15 {
  position: absolute;
  visibility: hidden;
}
#myCheck15 + label{
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
#myCheck15 + label:hover{
  border: 1px solid #f59942;
}
#myCheck15:checked + label:after{
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
