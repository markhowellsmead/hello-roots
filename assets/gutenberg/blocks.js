window.wp=window.wp||{},window.wp.i18n=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=window.wp.i18n},function(e,t,r){"use strict";r.r(t);var n=r(0);wp.blocks.registerBlockType("sht/test",{title:Object(n.__)("Test Block","sht"),description:Object(n.__)("Test Block description","sht"),icon:"lock",category:"sht/blocks",edit:function(){return React.createElement("p",{className:"b-test-block"},Object(n.__)("Translated String","sht"))},save:function(){return React.createElement("p",null,"Not translated String (because in save function)")}}),window.onload=function(){window.shtDisabledBlocks.forEach(function(e){wp.blocks.unregisterBlockType(e)})},wp.domReady(function(){var e=wp.element.createElement,t=wp.compose.createHigherOrderComponent(function(t){return function(r){var n=e(t,r);return"core/cover"===r.name&&void 0===r.insertBlocksAfter&&(n=e("div",{})),e(wp.element.Fragment,{},n)}},"allowColumnStyle");wp.hooks.addFilter("editor.BlockEdit","my/gutenberg",t),wp.blocks.registerBlockStyle("core/cover",{name:"aspect-21",label:"2:1"}),wp.blocks.registerBlockStyle("core/cover",{name:"aspect-31",label:"3:1"}),wp.blocks.registerBlockStyle("core/cover",{name:"aspect-41",label:"4:1"}),wp.blocks.registerBlockStyle("core/cover",{name:"aspect-169",label:"16:9"}),wp.blocks.registerBlockStyle("core/cover",{name:"full-height",label:"Full height"})})}]);