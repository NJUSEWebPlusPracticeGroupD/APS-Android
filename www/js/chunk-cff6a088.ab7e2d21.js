(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cff6a088","xlsx"],{1:function(t,e){},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},2:function(t,e){},"21a6":function(t,e,i){(function(i){var o,a,r;(function(i,n){a=[],o=n,r="function"===typeof o?o.apply(e,a):o,void 0===r||(t.exports=r)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,i){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){l(o.response,e,i)},o.onerror=function(){console.error("could not download file")},o.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i&&i.global===i?i:void 0,l=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,i){var l=n.URL||n.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?r(c):a(c.href)?o(t,e,i):r(c,c.target="_blank")):(c.href=l.createObjectURL(t),setTimeout((function(){l.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,i,n){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,n),i);else if(a(t))o(t,i,n);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout((function(){r(l)}))}}:function(t,e,i,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,i);var r="application/octet-stream"===t.type,l=/constructor/i.test(n.HTMLElement)||n.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||r&&l)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},s.readAsDataURL(t)}else{var m=n.URL||n.webkitURL,u=m.createObjectURL(t);a?a.location=u:location.href=u,a=null,setTimeout((function(){m.revokeObjectURL(u)}),4e4)}});n.saveAs=l.saveAs=l,t.exports=l}))}).call(this,i("c8ba"))},"25ba":function(t,e,i){},"27fc":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user_skills"},[i("el-table",{staticClass:"orderProductionTable",staticStyle:{width:"750px"},attrs:{data:t.data.filter((function(e){return!t.search||e.resource.toString().toLowerCase().includes(t.search.toLowerCase())}))}},[i("el-table-column",{attrs:{prop:"resource",label:"资源",width:"150",fixed:""}}),i("el-table-column",{attrs:{prop:"time1",label:"7点~8点",width:"150"}}),i("el-table-column",{attrs:{prop:"time2",label:"8点~9点",width:"150"}}),i("el-table-column",{attrs:{prop:"time3",label:"9点~10点",width:"150"}}),i("el-table-column",{attrs:{prop:"time4",label:"10点~11点",width:"150"}}),i("el-table-column",{attrs:{prop:"time5",label:"11点~12点",width:"150"}}),i("el-table-column",{attrs:{prop:"time6",label:"12点~13点",width:"150"}}),i("el-table-column",{attrs:{prop:"time7",label:"13点~14点",width:"150"}}),i("el-table-column",{attrs:{prop:"time8",label:"14点~15点",width:"150"}}),i("el-table-column",{attrs:{prop:"time9",label:"15点~16点",width:"150"}}),i("el-table-column",{attrs:{prop:"time10",label:"16点~17点",width:"150"}}),i("el-table-column",{attrs:{prop:"time11",label:"17点~18点",width:"150"}}),i("el-table-column",{attrs:{prop:"time12",label:"18点~19点",width:"150"}}),i("el-table-column",{attrs:{prop:"time13",label:"19点~20点",width:"150"}}),i("el-table-column",{attrs:{prop:"time14",label:"20点~21点",width:"150"}}),i("el-table-column",{attrs:{prop:"time15",label:"21点~22点",width:"150"}}),i("el-table-column",{attrs:{prop:"time16",label:"22点~23点",width:"150"}}),i("el-table-column",{attrs:{prop:"time17",label:"23点~24点",width:"150"}}),i("el-table-column",{attrs:{prop:"time18",label:"24点~1点",width:"150"}}),i("el-table-column",{attrs:{prop:"time19",label:"1点~2点",width:"150"}}),i("el-table-column",{attrs:{prop:"time20",label:"2点~3点",width:"150"}}),i("el-table-column",{attrs:{prop:"time21",label:"3点~4点",width:"150"}}),i("el-table-column",{attrs:{prop:"time22",label:"4点~5点",width:"150"}}),i("el-table-column",{attrs:{prop:"time23",label:"5点~6点",width:"150"}}),i("el-table-column",{attrs:{prop:"time24",label:"6点~7点",width:"150"}})],1)],1)},a=[],r={name:"GantTable",props:{search:{type:String},orderProductionData:{default:function(){return[{resource:"资源01",time1:"",time2:"订单1",time3:"订单1",time4:"",time5:"订单1",time6:"",time7:"订单1",time8:"订单1",time9:"",time10:"",time11:"订单1",time12:"订单1",time13:"",time14:"",time15:"",time16:"订单1",time17:"订单1",time18:"订单1",time19:"",time20:"订单1",time21:"订单1",time22:"",time23:"",time24:"订单1"},{resource:"资源02",time1:"",time2:"",time3:"",time4:"",time5:"订单1",time6:"",time7:"订单1",time8:"",time9:"",time10:"",time11:"订单1",time12:"订单1",time13:"",time14:"",time15:"",time16:"订单1",time17:"订单1",time18:"订单1",time19:"",time20:"订单1",time21:"订单1",time22:"",time23:"",time24:"订单1"}]}}},data:function(){return{data:[]}},watch:{orderProductionData:{handler:function(){this.data=this.orderProductionData}}}},n=r,l=(i("51d1"),i("2877")),c=Object(l["a"])(n,o,a,!1,null,"74992540",null);e["a"]=c.exports},3:function(t,e){},"51d1":function(t,e,i){"use strict";var o=i("25ba"),a=i.n(o);a.a},"614f":function(t,e,i){"use strict";var o=i("d9ae"),a=i.n(o);a.a},"841c":function(t,e,i){"use strict";var o=i("d784"),a=i("825a"),r=i("1d80"),n=i("129f"),l=i("14c3");o("search",1,(function(t,e,i){return[function(e){var i=r(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i):new RegExp(e)[t](String(i))},function(t){var o=i(e,t,this);if(o.done)return o.value;var r=a(t),c=String(this),s=r.lastIndex;n(s,0)||(r.lastIndex=0);var m=l(r,c);return n(r.lastIndex,s)||(r.lastIndex=s),null===m?-1:m.index}]}))},c935:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-main",{staticClass:"main",staticStyle:{"background-color":"rgba(255,255,255,0.8)"}},[t.showPlanTable?i("div",{staticStyle:{overflow:"hidden","margin-bottom":"20px"}},[i("el-input",{staticClass:"search",staticStyle:{float:"left"},attrs:{placeholder:"输入关键字搜索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("el-button",{staticClass:"button",staticStyle:{float:"left"},attrs:{type:"primary",plain:"",icon:"el-icon-download"},on:{click:t.exportPlanExcel}},[t._v(" 导出表单 ")])],1):t._e(),t.showPlanTable?t._e():i("el-page-header",{attrs:{content:"生产单详情"},on:{back:t.backToPlanTable}}),t.showPlanTable?t._e():i("div",{staticClass:"time",on:{click:function(e){t.timeDialog=!0}}},[t._v(" "+t._s(t.time)+" ")]),i("div",{staticClass:"allPage"},[t.showPlanTable?t._e():i("div",{staticStyle:{display:"inline",float:"left","padding-left":"20px",width:"100%"}},[i("div",{staticStyle:{overflow:"hidden",margin:"20px 0"}},[i("el-input",{staticClass:"search",staticStyle:{float:"left"},attrs:{placeholder:"输入关键字搜索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("el-button",{staticClass:"button",staticStyle:{float:"left"},attrs:{type:"primary",plain:"",icon:"el-icon-download"},on:{click:t.exportOrderProductionExcel}},[t._v(" 导出表单 ")])],1),i("GanttTable",{attrs:{"order-production-data":t.orderProductionData,search:t.search}})],1),t.showPlanTable?i("div",[i("div",{staticClass:"planTable"},[i("el-table",{staticClass:"table",attrs:{data:t.tableData.filter((function(e){return!t.search||e.orderNumber.toString().toLowerCase().includes(t.search.toLowerCase())})),height:"500","row-key":"orderNumber"}},[i("el-table-column",{attrs:{prop:"orderNumber",label:"订单编号",width:"150"}}),i("el-table-column",{attrs:{prop:"isSplit",label:"是否拆分",width:"150"}}),i("el-table-column",{attrs:{prop:"startTime",label:"开始时间",width:"150"}}),i("el-table-column",{attrs:{prop:"endTime",label:"结束时间",width:"150"}}),i("el-table-column",{attrs:{label:"生产单",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.turnToOrderProductionTable?i("i",{staticClass:"el-icon-right",staticStyle:{cursor:"pointer"},on:{click:function(i){return t.turnToOrderProductionTable(e.row)}}}):t._e()]}}],null,!1,3016137166)})],1)],1)]):t._e()]),i("el-dialog",{staticClass:"select",attrs:{title:"查找时间",visible:t.timeDialog,"modal-append-to-body":!1},on:{"update:visible":function(e){t.timeDialog=e}}},[i("el-date-picker",{staticClass:"date-picker",attrs:{placeholder:t.time,"default-value":t.time,type:"date","picker-options":t.pickerOptions},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.timeDialog=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.getOrderProductionDataByTime}},[t._v("确 定")])],1)],1)],1)},a=[],r=(i("d3b7"),i("ac1f"),i("25f0"),i("841c"),i("21a6")),n=i.n(r),l=i("1146"),c=i.n(l),s=i("27fc"),m=i("f9b2"),u={name:"PlanTable",components:{GanttTable:s["a"]},data:function(){var t=this;return{timeDialog:!1,search:"",showPlanTable:!0,time:this.$store.getters.getTime,value:"",beginTime:"",lastTime:"",pickerOptions:{disabledDate:function(e){return e.getTime()>new Date(t.lastTime).getTime()||e.getTime()<new Date(t.beginTime).getTime()}},tableData:[{orderNumber:1,isSplit:"否",startTime:"2020-01-29",endTime:"2020-01-31",turnToOrderProductionTable:!0},{orderNumber:2,isSplit:"是",startTime:"2020-01-29",endTime:"2020-01-29",turnToOrderProductionTable:!0,children:[{orderNumber:21,startTime:"2020-01-29",endTime:"2020-01-29",turnToOrderProductionTable:!1},{orderNumber:21,startTime:"2020-01-29",endTime:"2020-01-29",turnToOrderProductionTable:!1},{orderNumber:23,startTime:"2020-01-29",endTime:"2020-01-29",turnToOrderProductionTable:!1}]},{isSplit:"是",startTime:"2020-01-29",endTime:"2020-01-29",orderNumber:3,turnToOrderProductionTable:!0,children:[{orderNumber:31,startTime:"2020-01-29",endTime:"2020-01-29",turnToOrderProductionTable:!1},{orderNumber:32,startTime:"2020-01-29",endTime:"2020-01-29",turnToOrderProductionTable:!1}]},{orderNumber:4,startTime:"2020-01-29",endTime:"2020-01-29",isSplit:"否",turnToOrderProductionTable:!0}],orderNumber:3,orderProductionData:[{resource:"资源01",time1:"",time2:"订单1",time3:"订单1",time4:"",time5:"订单1",time6:"",time7:"订单1",time8:"订单1",time9:"",time10:"",time11:"订单1",time12:"订单1",time13:"",time14:"",time15:"",time16:"订单1",time17:"订单1",time18:"订单1",time19:"",time20:"订单1",time21:"订单1",time22:"",time23:"",time24:"订单1"},{resource:"资源02",time1:"",time2:"",time3:"",time4:"",time5:"订单1",time6:"",time7:"订单1",time8:"",time9:"",time10:"",time11:"订单1",time12:"订单1",time13:"",time14:"",time15:"",time16:"订单1",time17:"订单1",time18:"订单1",time19:"",time20:"订单1",time21:"订单1",time22:"",time23:"",time24:"订单1"}]}},beforeMount:function(){this.getOrderData()},methods:{timeFormate:function(t){var e=new Date(t).getFullYear(),i=new Date(t).getMonth()+1<10?"0"+(new Date(t).getMonth()+1):new Date(t).getMonth()+1,o=new Date(t).getDate()<10?"0"+new Date(t).getDate():new Date(t).getDate();return e+"-"+i+"-"+o},exportExcel:function(t,e){var i,o=document.querySelector(".el-table__fixed"),a={raw:!0};o?(i=c.a.utils.table_to_book(document.querySelector(t).removeChild(o),a),document.querySelector(t).appendChild(o)):i=c.a.utils.table_to_book(document.querySelector(t),a);var r=c.a.write(i,{bookType:"xlsx",bookSST:!0,type:"array"});try{n.a.saveAs(new Blob([r],{type:"application/octet--stream"}),e+".xlsx")}catch(l){"undefined"!==typeof console&&console.log(l,r)}return r},exportOrderProductionExcel:function(){this.exportExcel(".orderProductionTable","订单-生产单关系表")},exportPlanExcel:function(){this.exportExcel(".table","订单表")},backToPlanTable:function(){this.showPlanTable=!0,this.search=""},turnToOrderProductionTable:function(t){this.showPlanTable=!1,this.beginTime=t.startTime,this.time=this.beginTime,this.lastTime=t.endTime,this.search="",this.orderNumber=t.orderNumber;var e=t.startTime;this.getOrderProductionData(this.orderNumber,e)},getOrderProductionDataByTime:function(){this.value&&(this.time=this.timeFormate(this.value)),this.timeDialog=!1,this.getOrderProductionData(this.orderNumber,this.time)},getOrderProductionData:function(t,e){var i=this;console.log(t),Object(m["d"])(e,t.toString()).then((function(t){console.log(t),i.orderProductionData=[];for(var e=0;e<t.content.length;e++){for(var o={resource:t.content[e].resource},a=1;a<=24;a++){var r="time"+a.toString();o[r]=t.content[e].orderFor24Hours[a-1]}i.orderProductionData.push(o),console.log(i.orderProductionData)}})).finally((function(t){console.log("getProduceForm done!")}))},getOrderData:function(){var t=this;Object(m["b"])().then((function(e){console.log(e),t.tableData=e.content}))}}},d=u,b=(i("614f"),i("2877")),p=Object(b["a"])(d,o,a,!1,null,null,null);e["default"]=p.exports},d9ae:function(t,e,i){}}]);