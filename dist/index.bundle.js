"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[826],{424:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"body {\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.main-panel {\r\n  min-width: 40%;\r\n  max-width: 75%;\r\n  margin: auto;\r\n  display: grid;\r\n  box-shadow: 0 0 10px #888;\r\n}\r\n\r\n.list-title {\r\n  font-size: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.add-input {\r\n  border: 1px solid black;\r\n  font-style: italic;\r\n}\r\n\r\n.add-input,\r\n.clear-btn {\r\n  border: none;\r\n}\r\n\r\n.list-title,\r\n.add-input,\r\nli,\r\n.clear-btn {\r\n  padding: 15px;\r\n  border-bottom: 1px solid #b5b5b5;\r\n}\r\n\r\n.clear-btn {\r\n  color: gray;\r\n  font-size: 14px;\r\n  border: none;\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},57:(n,e,r)=>{var t=r(379),o=r.n(t),a=r(795),i=r.n(a),s=r(569),c=r.n(s),l=r(565),d=r.n(l),u=r(216),p=r.n(u),f=r(589),m=r.n(f),h=r(424),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const y=[{index:1,description:"structure todo list",completed:!1},{index:2,description:"add task todo list",completed:!1},{index:3,description:"remove todo list",completed:!1}];!function(){const n=document.getElementById("todo-list");y.forEach((e=>{const r=document.createElement("li");r.innerHTML=`\n      <input class="checkbox" type="checkbox" name="" value="">\n      <span>${e.description}</span>\n      `,n.appendChild(r)}))}()}},n=>{n(n.s=57)}]);