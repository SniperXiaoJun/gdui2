(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{293:function(o,n,e){"use strict";e.r(n);var s={data:function(){return{sync:!1,uploadId:(new Date).getTime()}},methods:{onChangeHandler:function(o){console.log("====> onChangeHandler",o)},onProgress:function(o,n){console.log("====> onProgress",o,n)},onSuccess:function(o,n,e){return console.log("====> onSuccess",o,n,e),new Promise((function(o,e){setTimeout((function(){console.log("onSuccess promise done"),o(n)}),1e3)}))},onError:function(o,n,e){console.log("====> onError",o,n,e)},onRemove:function(o,n){return console.log("====> onRemove",o,n),new Promise((function(n,e){setTimeout((function(){console.log("onRemove promise done"),n(o)}),1e3)}))}}},t=e(1),c=Object(t.a)(s,(function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",[e("gd-upload",{key:o.uploadId,attrs:{action:"https://jsonplaceholder.typicode.com/posts","on-progress":o.onProgress,"on-success":o.onSuccess,"on-error":o.onError,"on-remove":o.onRemove},on:{"on-change-handler":o.onChangeHandler}},[e("span",{attrs:{slot:"tip"},slot:"tip"},[o._v("支持png、jpg、jpeg、pdf、word、excel、txt、zip、gif、音频、视频等，最大上传30M")])]),o._v(" "),e("gd-checkbox",{staticStyle:{"margin-top":"10px"},attrs:{size:"small"},model:{value:o.sync,callback:function(n){o.sync=n},expression:"sync"}},[o._v("上传资料同步到用户资料库\n  ")])],1)}),[],!1,null,null,null);n.default=c.exports}}]);