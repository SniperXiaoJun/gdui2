(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{193:function(n,o,i){var t=i(3);t(t.S,"Date",{now:function(){return(new Date).getTime()}})},351:function(n,o,i){"use strict";i.r(o);i(193);var t={data:function(){return{}},methods:{onClick:function(){var n=this;this.$loading.show("2s后关闭"+Date.now()),setTimeout((function(){n.$loading.hide()}),2e3)},onClickNoMask:function(){var n=this;this.$loading.show({loadingText:"3s后关闭"+Date.now(),withMask:!1}),setTimeout((function(){n.$loading.hide()}),3e3)},onClick2:function(){var n=this;this.$loading.show(),setTimeout((function(){n.$loading.hide()}),3e3)}}},e=i(1),a=Object(e.a)(t,(function(){var n=this,o=n.$createElement,i=n._self._c||o;return i("div",[i("gd-button",{on:{click:n.onClick}},[n._v("显示loading(有mask)")]),n._v(" "),i("gd-button",{on:{click:n.onClickNoMask}},[n._v("显示loading(无mask)")]),n._v(" "),i("gd-button",{on:{click:n.onClick2}},[n._v("显示loading")])],1)}),[],!1,null,null,null);o.default=a.exports}}]);