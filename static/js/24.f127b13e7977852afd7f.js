webpackJsonp([24],{"6yQ7":function(e,t){},PP1R:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"historyalarm",data:function(){return{id:"",name:"",type:"",valueTime:["",""],currentPage:1,pagesize:30,total:0,tableData:[],optionstype:[{id:"MT61GP-2P",name:"MT61GP-2P"},{id:"MT61GP-4P",name:"MT61GP-4P"},{id:"OTHER",name:"OTHER"}],deviceId:""}},methods:{handleCurrentChange:function(e){this.currentPage=e,this.getList()},btnSelect:function(){this.currentPage=1,this.getList()},getList:function(){var e=this;null==e.valueTime&&(e.valueTime=["",""]),e.ajax(e.HOST+"/v1/alarm/findAlarms",{alarmSign:!0,startTime:e.valueTime[0],endTime:e.valueTime[1],userId:$.cookie("userId"),currentPage:e.currentPage,rows:e.pagesize,deviceName:e.name,deviceId:e.deviceId,deviceType:e.type},function(t){0==t.data.errCode&&(e.tableData=t.data.data,e.total=t.data.totalPage)},function(e){})},getString:function(e){var t=e.split(":");return"cn"==localStorage.lang?(this.lang="zh_cn",t[0]):(this.lang="en",t[1])}},mounted:function(){var e=new Date;this.valueTime=[e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" 00:00:00",e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" 23:59:59"],this.getList()}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{staticStyle:{"padding-top":"15px","padding-bottom":"15px",background:"#E4E7ED"}},[a("div",{staticStyle:{"margin-left":"10px"}},[a("span",{staticClass:"search"},[e._v(e._s(e.$t("message.devicecontrol-12"))+":")]),e._v(" "),a("div",{staticStyle:{display:"inline-block",width:"15%"}},[a("el-input",{staticClass:"sel",attrs:{placeholder:e.$t("message.device-11")},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("span",{staticClass:"search"},[e._v(e._s(e.$t("message.devicecontrol-13"))+":")]),e._v(" "),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":e.$t("message.deviceinformation-17"),"start-placeholder":e.$t("message.deviceinformation-15"),"end-placeholder":e.$t("message.deviceinformation-16"),"value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.valueTime,callback:function(t){e.valueTime=t},expression:"valueTime"}}),e._v(" "),a("br"),a("br"),e._v(" "),a("span",{staticClass:"search"},[e._v(e._s(e.$t("message.devicecontrol-14"))+":")]),e._v(" "),a("div",{staticStyle:{display:"inline-block",width:"15%"}},[a("el-select",{staticClass:"sel",attrs:{placeholder:e.$t("message.historyalarm-0")},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.optionstype,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("span",{staticClass:"search"},[e._v(e._s(e.$t("message.devicecontrol-15"))+":")]),e._v(" "),a("div",{staticStyle:{display:"inline-block",width:"20%"}},[a("el-input",{staticClass:"sel",attrs:{placeholder:e.$t("message.device-11")},model:{value:e.deviceId,callback:function(t){e.deviceId=t},expression:"deviceId"}})],1),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:e.btnSelect}},[e._v(e._s(e.$t("message.device-8")))])],1)])],1),e._v(" "),a("el-row",[a("el-col",{staticStyle:{"margin-top":"10px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:e.$t("message.device-24"),width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.$index+1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"deviceName",label:e.$t("message.devicetype-1"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"deviceId",label:e.$t("message.devicecontrol-10"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"deviceType",label:e.$t("message.device-2"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"alarmTime",label:e.$t("message.historyalarm-1"),align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("message.historyalarm-2"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.getString(t.row.alarm)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:e.$t("message.historyalarm-3"),align:"center"}})],1),e._v(" "),a("div",{staticStyle:{"text-align":"right","margin-right":"20px","margin-top":"20px"}},[a("el-pagination",{attrs:{layout:"prev, pager, next","page-count":e.total,"pager-count":11,"current-page":e.currentPage},on:{"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(l,n,!1,function(e){a("6yQ7")},"data-v-415d1592",null);t.default=i.exports}});