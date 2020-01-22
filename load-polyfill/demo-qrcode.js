(function (callback) {
  function loadJs(src, callback) {
    var container = document.body;
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = src;
    container.appendChild(script);
    script.onload = function() {
      callback && callback()
    }
  }

  if (window.customElements) {
    callback()
  } else {
    loadJs(
      '//yumkuaizhan-1252921496.file.myqcloud.com/third/shadydom.min.js',
      function () {
        loadJs('//yumkuaizhan-1252921496.file.myqcloud.com/third/custom-elements.min.js', callback)
      }
    )
  }

})(function () {
  /* code here */
  !function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n){t.insertBefore(e,n||null)}function s(t){return document.createElement(t)}let a;function l(t){a=t}const u=[],f=[],d=[],h=[],p=Promise.resolve();let m=!1;function g(t){d.push(t)}function $(){const t=new Set;do{for(;u.length;){const t=u.shift();l(t),y(t.$$)}for(;f.length;)f.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];t.has(n)||(n(),t.add(n))}d.length=0}while(u.length);for(;h.length;)h.pop()();m=!1}function y(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(g)}}const v=new Set;function x(t,e){-1===t.$$.dirty[0]&&(u.push(t),m||(m=!0,p.then($)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function b(c,i,s,u,f,d,h=[-1]){const p=a;l(c);const m=i.props||{},y=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:h};let b=!1;var _,w;y.ctx=s?s(c,m,(t,e,...n)=>{const o=n.length?n[0]:e;return y.ctx&&f(y.ctx[t],y.ctx[t]=o)&&(y.bound[t]&&y.bound[t](o),b&&x(c,t)),e}):[],y.update(),b=!0,o(y.before_update),y.fragment=!!u&&u(y.ctx),i.target&&(i.hydrate?y.fragment&&y.fragment.l(function(t){return Array.from(t.childNodes)}(i.target)):y.fragment&&y.fragment.c(),i.intro&&((_=c.$$.fragment)&&_.i&&(v["delete"](_),_.i(w))),function(t,n,c){const{fragment:i,on_mount:s,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,c),g(()=>{const n=s.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(g)}(c,i.target,i.anchor),$()),l(p)}let _;function w(e){let n,o;return{c(){n=s("main"),o=s("div"),this.c=t},m(t,r){i(t,n,r),function(t,e){t.appendChild(e)}(n,o),e[10](o),e[11](n)},p:t,i:t,o:t,d(t){var o;t&&(o=n).parentNode.removeChild(o),e[10](null),e[11](null)}}}function q(t,e,n){let o,r,c,{value:i}=e,{size:s}=e,{color:a="#000000"}=e;function l(t){if(window.QRCode)return console.log("qrcode already load"),void setTimeout((function(){t()}),0);let e=document.createElement("script");e.src="//cdn.kuaizhan.com/pub/static/common/qrcode.min.js",r&&r.append(e),e.onload=function(){t()}}let u=!1;function d(t,e,n){console.log(u),u||(u=!0,l((function(){var i,s,a;r.querySelector("canvas")&&(r.querySelector("canvas").remove(),r.querySelector("img").remove(),c.querySelector("img").remove()),o=new QRCode(r,{text:t,width:e,height:e,colorDark:n,colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M}),i=c.getElementsByTagName("canvas")[0],(s=new Image).src=i.toDataURL("image/png"),s.style="width:100%",a=s,c.append(a),setTimeout((function(){u=!1}),0)})))}return console.log("i am qrcode"),t.$set=t=>{"value"in t&&n(2,i=t.value),"size"in t&&n(3,s=t.size),"color"in t&&n(4,a=t.color)},t.$$.update=()=>{28&t.$$.dirty&&i&&s&&a&&d(i,s,a)},[r,c,i,s,a,function(){return c.querySelector("img").src},o,u,l,d,function(t){f[t?"unshift":"push"](()=>{n(0,r=t)})},function(t){f[t?"unshift":"push"](()=>{n(1,c=t)})}]}"function"==typeof HTMLElement&&(_=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});customElements.define("xq-qrcode",class extends _{constructor(t){super(),this.shadowRoot.innerHTML="<style>main div{display:none}main{display:inline-block}</style>",b(this,{target:this.shadowRoot},q,w,c,{value:2,size:3,color:4,getQrcodeUrl:5}),t&&(t.target&&i(t.target,this,t.anchor),t.props&&(this.$set(t.props),$()))}static get observedAttributes(){return["value","size","color","getQrcodeUrl"]}get value(){return this.$$.ctx[2]}set value(t){this.$set({value:t}),$()}get size(){return this.$$.ctx[3]}set size(t){this.$set({size:t}),$()}get color(){return this.$$.ctx[4]}set color(t){this.$set({color:t}),$()}get getQrcodeUrl(){return this.$$.ctx[5]}})}();
})