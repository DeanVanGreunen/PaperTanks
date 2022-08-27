(()=>{"use strict";var t,n=function(){function t(){}return t.prototype.init=function(){},t.prototype.update=function(t,n){},t.prototype.render=function(t){},t}(),e=(t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});const o=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n.switch=!1,n}return e(n,t),n.prototype.init=function(){var t=this;return new Promise((function(n,e){t.logo=new Image,t.logo.src="assets/logo.png",t.logo.onload=function(){n(!0)}}))},n.prototype.update=function(t,n){this.switch?(this.counter+=10*t,this.counter>=255&&n.states.pop()):(this.counter-=10*t,this.counter<=0&&(this.switch=!0))},n.prototype.render=function(t){var n=t.getContext("2d"),e=t.width/2-this.logo.width/2,o=t.height/2-this.logo.height/2;n.imageSmoothingEnabled=!1,n.drawImage(this.logo,0,0,this.logo.width,this.logo.height,e,o,this.logo.width,this.logo.height),n.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),n.fillRect(0,0,t.width,t.height)},n}(n);const i=function(){function t(t){this.canvas=null,this.canvas=t,this.init=this.init.bind(this),this.loop=this.loop.bind(this)}return t.prototype.init=function(){return t=this,n=void 0,i=function(){var t;return function(t,n){var e,o,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=n.call(t,s)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}(this,(function(n){switch(n.label){case 0:return this.states=[],[4,(t=new o).init()];case 1:return n.sent(),this.states.push(t),this.interval=setInterval(this.loop,33),[2]}}))},new((e=void 0)||(e=Promise))((function(o,r){function s(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,a)}c((i=i.apply(t,n||[])).next())}));var t,n,e,i},t.prototype.loop=function(){t.mustQuit&&clearInterval(this.interval);for(var n=0;n<this.states.length;n++)this.states[n].update(.33,this);var e=this.canvas.getContext("2d");for(e.fillStyle="#E5E5E5",e.fillRect(0,0,this.canvas.width,this.canvas.height),n=0;n<this.states.length;n++)this.states[n].render(this.canvas)},t.mustQuit=!1,t}();window.addEventListener("load",(function(){var t=document.querySelector("canvas");new i(t).init()}))})();