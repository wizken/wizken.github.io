webpackJsonp([19],{"/D9c":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("BO1k"),i=a.n(s);a("8+FI");function n(e,t){for(var a={},s=0;s<e.length;s++){var n=e[s].parentId;a[n]?a[n].push(e[s]):(a[n]=[],a[n].push(e[s]))}return function e(t,a){var s=[];if(!t[a])return s;var n=!0;var d=!1;var l=void 0;try{for(var o,r=i()(t[a]);!(n=(o=r.next()).done);n=!0){var u=o.value;u.children=e(t,u.id),s.push(u)}}catch(e){d=!0,l=e}finally{try{!n&&r.return&&r.return()}finally{if(d)throw l}}return s}(a,t)}var d={name:"menu",data:function(){return{isedit:!1,data:"",istop:!0,dialogTableVisible:!1,isdisabled:!1,data5:[],menuname:"",menupath:"",menuimage:"",defaultProps:{children:"children",label:"name"}}},methods:{addchildnode:function(e,t){this.data=t,this.node=e,this.dialogTableVisible=!0,this.istop=!1,this.isedit=!1},btncheck:function(e,t){this.isedit=!0,this.isdisabled=!0,this.data=t,this.dialogTableVisible=!0,this.id=t.id,this.menuname=t.menuname,this.menupath=t.menupath},btndel:function(e,t){var a=this,s=e.parent,i=s.childNodes||s.data,n=i.findIndex(function(e){return e.data.id===t.id});a.$confirm(a.$t("message.devicetype-6"),a.$t("message.devicetype-7"),{confirmButtonText:a.$t("message.devicetype-8"),cancelButtonText:a.$t("message.devicetype-9"),type:"warning"}).then(function(){a.ajax(a.HOST+"/v1/sys/menu/delete",{id:t.id},function(e){0==e.data.errCode?(i.splice(n,1),a.$message({type:"success",message:a.$t("message.devicetype-10")})):a.$message.error(a.$t("message.devicetype-16"))},function(e){})}).catch(function(){a.$message({type:"info",message:a.$t("message.devicetype-11")})})},addmenu:function(){this.dialogTableVisible=!0,this.istop=!0,this.isedit=!1},btnconfirm:function(){var e=this;if(0==e.menuname||0==e.menupath)return this.$message.error(e.$t("message.devicemanage-5")),!1;if(this.istop)this.ajax(e.HOST+"/v1/sys/menu/addOrUpdate",{menuCode:(new Date).getTime(),name:e.menuname,parentId:null,url:e.menupath,image:e.menuimage},function(t){0==t.data.errCode?(e.$message({message:e.$t("message.devicetype-12"),type:"success"}),e.getlist()):e.$message.error(e.$t("message.devicetype-15"))},function(e){});else{(new Date).getTime(),e.menuname,e.menupath;e.ajax(e.HOST+"/v1/sys/menu/addOrUpdate",{menuCode:(new Date).getTime(),name:e.menuname,parentId:e.node.data.id,url:e.menupath,image:e.menuimage},function(t){0==t.data.errCode?(e.$message({message:e.$t("message.devicetype-12"),type:"success"}),e.getlist()):e.$message.error(e.$t("message.devicetype-15"))},function(e){})}this.dialogTableVisible=!1},close:function(){this.id="",this.menuname="",this.menupath="",this.menuimage=""},getlist:function(){var e=this;e.ajax(e.HOST+"/v1/sys/menu/findAll",{userId:$.cookie("userId")},function(t){if(0==t.data.errCode){var a=n(t.data.data,"#");e.data5=a}},function(e){})}},mounted:function(){this.data5.length||this.getlist()}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu"},[a("el-row",[a("el-col",{staticStyle:{"padding-top":"15px","padding-bottom":"15px",background:"#E4E7ED"}},[a("div",{staticStyle:{"margin-left":"10px"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addmenu}},[e._v(e._s(e.$t("message.menu-20")))])],1)])],1),e._v(" "),a("el-row",[a("el-col",{staticClass:"col",staticStyle:{"padding-left":"10px","padding-top":"10px"}},[a("div",{staticClass:"headerBox"},[a("span",{staticStyle:{width:"100px"}},[e._v("  "+e._s(e.$t("message.menu-28")))]),e._v(" "),a("span",{staticStyle:{flex:"1"}}),e._v(" "),a("span",{staticStyle:{width:"200px","border-left":"1px solid rgba(0,0,0,.117647)","border-right":"1px solid rgba(0,0,0,.117647)"}},[e._v("  "+e._s(e.$t("message.menu-21")))]),e._v(" "),a("span",{staticStyle:{width:"200px","border-right":"1px solid rgba(0,0,0,.117647)"}},[e._v("  "+e._s(e.$t("message.menu-22")))]),e._v(" "),a("span",{staticStyle:{width:"300px"}},[e._v("  "+e._s(e.$t("message.device-20")))])]),e._v(" "),a("div",[a("el-tree",{attrs:{data:e.data5,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,"empty-text":"",props:e.defaultProps},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node,i=t.data;return a("span",{staticClass:"custom-tree-node",staticStyle:{display:"-webkit-flex",width:"100%"}},[a("span",{staticStyle:{width:"100px"}},[e._v("  "+e._s(i.menuCode))]),e._v(" "),a("span",{staticStyle:{flex:"1"}}),e._v(" "),a("span",{staticStyle:{width:"200px","border-left":"1px solid rgba(0,0,0,.117647)","border-right":"1px solid rgba(0,0,0,.117647)"}},[e._v("   "+e._s(i.name))]),e._v(" "),a("span",{staticStyle:{width:"200px","border-right":"1px solid rgba(0,0,0,.117647)"}},[e._v("   "+e._s(i.url))]),e._v(" "),a("span",{staticStyle:{width:"300px"}},[e._v("  \n\t\t\t\t          "),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini",plain:""},on:{click:function(t){e.btndel(s,i)}}},[e._v("\n\t\t\t\t            "+e._s(e.$t("message.devicetype-3"))+"\n\t\t\t\t          ")]),e._v(" "),3!=s.level?a("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(t){e.addchildnode(s,i)}}},[e._v("\n\t\t\t\t           \t"+e._s(e.$t("message.menu-25"))+"\n\t\t\t\t          ")]):e._e()],1)])}}])})],1)])],1),e._v(" "),a("el-dialog",{attrs:{title:e.$t("message.menu-29"),visible:e.dialogTableVisible,width:"30%"},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.close}},[a("div",{staticClass:"input-demo-suffix"},[a("p",[e._v(e._s(e.$t("message.menu-21")))]),e._v(" "),a("el-input",{staticClass:"elinput",attrs:{placeholder:e.$t("message.device-11")},model:{value:e.menuname,callback:function(t){e.menuname=t},expression:"menuname"}})],1),e._v(" "),a("div",{staticClass:"input-demo-suffix"},[a("p",[e._v(e._s(e.$t("message.menu-22")))]),e._v(" "),a("el-input",{staticClass:"elinput",attrs:{placeholder:e.$t("message.device-11")},model:{value:e.menupath,callback:function(t){e.menupath=t},expression:"menupath"}})],1),e._v(" "),e.istop?a("div",{staticClass:"input-demo-suffix"},[a("p",[e._v(e._s(e.$t("message.menu-23")))]),e._v(" "),a("el-input",{staticClass:"elinput",attrs:{placeholder:e.$t("message.device-11")},model:{value:e.menuimage,callback:function(t){e.menuimage=t},expression:"menuimage"}})],1):e._e(),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogTableVisible=!1}}},[e._v(e._s(e.$t("message.devicetype-4")))]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:e.btnconfirm}},[e._v(e._s(e.$t("message.devicetype-8")))])],1)])],1)},staticRenderFns:[]};var o=a("VU/8")(d,l,!1,function(e){a("miy6")},null,null);t.default=o.exports},miy6:function(e,t){}});