(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1557a9b6"],{9406:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("el-main",[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{span:12}},[i("el-card",[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("短链接域名")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2===t.role,expression:"role === 2"}],staticStyle:{float:"right"}},[i("el-button",{attrs:{icon:"el-icon-refresh",size:"mini",circle:""},on:{click:function(n){return t.getConfig("landingHostsForm")}}}),t._v(" "),i("el-button",{attrs:{icon:"el-icon-plus",size:"mini",circle:""},on:{click:function(n){return t.addLandingHost()}}}),t._v(" "),i("el-button",{attrs:{icon:"el-icon-check",size:"mini",circle:""},on:{click:function(n){return t.updateLadingHosts()}}})],1)]),t._v(" "),i("el-form",{ref:"landingHostsForm",attrs:{model:t.landingHostsForm,"label-position":"left","label-width":"0px",size:"mini"}},t._l(t.landingHostsForm.hosts,(function(n,e){return i("el-form-item",{key:n.key,attrs:{prop:"hosts."+e+".value",rules:t.landingHostRules}},[i("el-input",{staticStyle:{width:"90%"},attrs:{readonly:2!==t.role},model:{value:n.value,callback:function(i){t.$set(n,"value",i)},expression:"host.value"}}),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.landingHostsForm.hosts.length>1&&2===t.role,expression:"landingHostsForm.hosts.length > 1 && role === 2"}],staticStyle:{padding:"1px"},attrs:{icon:"el-icon-minus",size:"mini",type:"danger",circle:""},on:{click:function(n){return t.removeLandingHost(e)}}})],1)})),1)],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-card",[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("随机 ID 长度设置\n            "),i("el-popover",{attrs:{placement:"top-start",width:"300",trigger:"hover"}},[i("p",[t._v("默认长度即随机生成 ID 的长度，"),i("br"),t._v("最小长度 <= 默认长度 <= 最大长度")]),t._v(" "),i("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2===t.role,expression:"role === 2"}],staticStyle:{float:"right"}},[i("el-button",{attrs:{icon:"el-icon-refresh",size:"mini",circle:""},on:{click:function(n){return t.getConfig("idConfigForm")}}}),t._v(" "),i("el-button",{attrs:{icon:"el-icon-check",size:"mini",circle:""},on:{click:function(n){return t.updateIdLengthConfig()}}})],1)]),t._v(" "),i("el-form",{ref:"idConfigForm",attrs:{model:t.idConfigForm,size:"mini","label-position":"top",inline:!0}},[i("el-form-item",{attrs:{prop:"idMinimumLength",label:"最小长度"}},[i("el-input-number",{attrs:{size:"mini",readonly:2!==t.role},model:{value:t.idConfigForm.idMinimumLength,callback:function(n){t.$set(t.idConfigForm,"idMinimumLength",n)},expression:"idConfigForm.idMinimumLength"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"idLength",label:"默认长度"}},[i("el-input-number",{attrs:{size:"mini",readonly:2!==t.role},model:{value:t.idConfigForm.idLength,callback:function(n){t.$set(t.idConfigForm,"idLength",n)},expression:"idConfigForm.idLength"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"idMaximumLength",label:"最大长度"}},[i("el-input-number",{attrs:{size:"mini",readonly:2!==t.role},model:{value:t.idConfigForm.idMaximumLength,callback:function(n){t.$set(t.idConfigForm,"idMaximumLength",n)},expression:"idConfigForm.idMaximumLength"}})],1)],1)],1)],1)],1)],1)},o=[],r=(i("ac6a"),i("db72")),s=i("da71"),a=i("61f7"),l=i("2f62"),c={name:"Dashboard",data:function(){var t=function(t,n,i){if(""===n)i(new Error("请输入域名/IP地址"));else{if(!Object(a["b"])(n))return void i(new Error("这不是一个合法的域名/IP地址"));i()}};return{landingHostsForm:{hosts:[]},landingHostRules:{validator:t,trigger:"blur"},idConfigForm:{idMinimumLength:0,idLength:0,idMaximumLength:0}}},computed:Object(r["a"])({},Object(l["b"])(["role"])),created:function(){this.getConfig("all")},methods:{getConfig:function(t){var n=this;Object(s["a"])().then((function(i){"landingHostsForm"!==t&&"all"!==t||(n.landingHostsForm.hosts=[],i.data.config.landingHosts.forEach((function(t,i){n.landingHostsForm.hosts.push({value:t,key:Date.now()+i})})),0===i.data.config.landingHosts.length&&n.addLandingHost()),"idConfigForm"!==t&&"all"!==t||(n.idConfigForm.idMinimumLength=i.data.config.idConfig.idMinimumLength,n.idConfigForm.idLength=i.data.config.idConfig.idLength,n.idConfigForm.idMaximumLength=i.data.config.idConfig.idMaximumLength)}))},addLandingHost:function(){this.landingHostsForm.hosts.push({value:"",key:Date.now()})},removeLandingHost:function(t){this.landingHostsForm.hosts.splice(t,1)},updateLadingHosts:function(){var t=this;this.$refs["landingHostsForm"].validate((function(n){if(!n)return!1;var i=[];t.landingHostsForm.hosts.forEach((function(t){i.push(t.value)})),Object(s["c"])({hosts:i}).then((function(n){t.$notify({title:"更新成功",message:"成功更新短链接域名",type:"success"})}))}))},updateIdLengthConfig:function(){var t=this;Object(s["b"])(this.idConfigForm).then((function(n){t.$notify({title:"更新成功",message:"成功更新随机 ID 长度",type:"success"})}))}}},d=c,u=(i("f8a7"),i("2877")),m=Object(u["a"])(d,e,o,!1,null,null,null);n["default"]=m.exports},acf4:function(t,n,i){},da71:function(t,n,i){"use strict";i.d(n,"a",(function(){return o})),i.d(n,"c",(function(){return r})),i.d(n,"b",(function(){return s}));var e=i("b775");function o(){return Object(e["a"])({url:"/v1/config",method:"get"})}function r(t){return Object(e["a"])({url:"/v1/config/landing-hosts",method:"patch",data:t})}function s(t){return Object(e["a"])({url:"/v1/config/id-length",method:"patch",data:t})}},f8a7:function(t,n,i){"use strict";var e=i("acf4"),o=i.n(e);o.a}}]);