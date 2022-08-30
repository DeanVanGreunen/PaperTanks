(()=>{"use strict";const t=function(){function t(){}return t.prototype.init=function(){},t.prototype.update=function(t){},t.prototype.render=function(){},t}(),n=function(){function t(){this.onclick=function(){},this.isHover=!1,this.init=this.init.bind(this),this.update=this.update.bind(this),this.render=this.render.bind(this)}return t.prototype.init=function(){},t.prototype.update=function(t){var n=D.mouse_x,e=D.mouse_y;this.isHover=n>=this.x&&e>=this.y&&n<=this.x+this.w&&e<=this.y+this.h,this.isHover&&D.mouse_down&&(D.mouse_down=!1,this.onclick())},t.prototype.render=function(){var t=D.canvas.getContext("2d");t.strokeStyle=this.isHover?this.hover_border:this.border,t.lineWidth=.75,t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.x,this.y+this.h),t.lineTo(this.x+this.w,this.y+this.h),t.lineTo(this.x+this.w,this.y),t.lineTo(this.x,this.y),t.stroke(),t.beginPath(),t.textAlign="center",t.textBaseline="middle",t.font="normal ".concat(this.size," ").concat(this.font),t.fillStyle=this.isHover?this.hover_color:this.color,t.fillText(this.text,this.x+this.w/2,this.y+this.h/2)},t}(),e=function(){function t(){this.mustDelete=!1}return t.prototype.init=function(){},t.prototype.update=function(t,n){},t.prototype.render=function(t){},t.prototype.onCollision=function(t){},t}();var o,r=(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),i=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}))},a=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const s=function(t){function n(n,e,o,r,i){var a=t.call(this)||this;return a.damage=10,a.init=a.init.bind(a),a.update=a.update.bind(a),a.render=a.render.bind(a),a.x=n,a.y=e,a.r=o,a.vx=r,a.vy=i,a.w=o,a.h=o,a}return r(n,t),n.prototype.init=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){return[2]}))}))},n.prototype.update=function(t){return i(this,void 0,void 0,(function(){return a(this,(function(n){return this.x+=t*this.vx,this.y+=t*this.vy,[2]}))}))},n.prototype.render=function(t){var n=D.canvas.getContext("2d");n.beginPath(),n.arc(this.x,this.y,this.r,0,2*Math.PI,!1),n.lineWidth=.75,n.fillStyle="rgba(225, 0, 0, 1)",n.strokeStyle="rgba(225, 0, 0, 1)",n.stroke()},n}(e),c=function(){function t(t,n,e,o){this.d=0,this.health=0,this.score=0,this.x=t,this.y=n,this.w=e,this.h=o}return t.prototype.update=function(t,n){},t.prototype.render=function(t){},t}();var u=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const l=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.canFire=0,n}return u(n,t),n.prototype.update=function(t,n){if(D.keyboard.isLeftArrow?(n.agent.x-=10*t,n.agent.d=1):D.keyboard.isRightArrow?(n.agent.x+=10*t,n.agent.d=3):D.keyboard.isUpArrow?(n.agent.y-=10*t,n.agent.d=0):D.keyboard.isDownArrow&&(n.agent.y+=10*t,n.agent.d=2),D.keyboard.isSpace&&this.canFire<=0){this.health-=10*t,this.canFire=5;var e=0,o=0,r=n.agent.x+n.agent.w/2,i=n.agent.y+n.agent.h/2,a=100*t;switch(this.d){case 0:i-=38,e=0*a,o=-1*a;break;case 1:r-=38,e=-1*a,o=0*a;break;case 2:i+=38,e=0*a,o=1*a;break;case 3:r+=38,e=1*a,o=0*a}A.GameObjects.push(new s(r,i,4,e,o))}n.agent.x<8&&(n.agent.x=8),n.agent.y<8&&(n.agent.y=8),n.agent.x+n.agent.w>D.canvas.width-8&&(n.agent.x=D.canvas.width-(n.agent.w+8)),n.agent.y+n.agent.h>D.canvas.height-8&&(n.agent.y=D.canvas.height-(n.agent.h+8)),this.canFire-=t,n.x=n.agent.x,n.y=n.agent.y,n.w=n.agent.w,n.h=n.agent.h},n.prototype.render=function(t){var n=D.canvas.getContext("2d"),e=D.canvas.width;D.canvas.height,n.beginPath(),n.lineWidth=.75,n.strokeStyle="#cc0707",n.moveTo(8,8),n.lineTo(8,20),n.lineTo(104,20),n.lineTo(104,8),n.lineTo(8,8),n.stroke(),n.fillStyle="#cc0707";var o=t.health/100*96;n.beginPath(),n.moveTo(8,8),n.lineTo(8,20),n.lineTo(o+8,20),n.lineTo(o+8,8),n.lineTo(8,8),n.fill(),n.beginPath(),n.textAlign="center",n.textBaseline="middle",n.font="normal 12px PencilRegular",n.fillStyle="#cc0707",n.fillText(A.score.toString(),120,12),n.beginPath(),n.lineWidth=.75,n.strokeStyle="#4CBB17",n.moveTo(e-20,8),n.lineTo(e-20,20),n.lineTo(e-8,20),n.lineTo(e-8,8),n.lineTo(e-20,8),n.stroke(),this.canFire<=0&&(n.beginPath(),n.fillStyle="#4CBB17",n.moveTo(e-20,8),n.lineTo(e-20,20),n.lineTo(e-8,20),n.lineTo(e-8,8),n.lineTo(e-20,8),n.fill())},n}(c);var h=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const f=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n}return h(n,t),n.prototype.init=function(){var t=this;return Promise.all([new Promise((function(n,e){t.gameover=new Image,t.gameover.src="assets/images/gameover.png",t.gameover.onload=function(){n(!0)}}))])},n.prototype.update=function(t){return n=this,e=void 0,r=function(){var n;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){return this.counter-=10*t,this.counter<=0&&(this.counter=0,D.states.pop(),(n=new M).init(),D.states.push(n)),[2]}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,o,r},n.prototype.render=function(){var t=D.canvas.getContext("2d"),n=D.canvas.width/2-this.gameover.width/2,e=D.canvas.height/2-this.gameover.height/2;t.imageSmoothingEnabled=!1;for(var o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*o),t.lineTo(D.canvas.width,12*o),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,D.canvas.height),t.stroke(),t.drawImage(this.gameover,0,0,this.gameover.width,this.gameover.height,n,e,this.gameover.width,this.gameover.height),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,D.canvas.width,D.canvas.height),this.counter>0){for(o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*o),t.lineTo(D.canvas.width,12*o),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,D.canvas.height),t.stroke()}},n}(t);var p=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),y=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}))},d=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const v=function(t){function n(n,e,o){var r=t.call(this)||this;return r.health=100,r.health=o,r.agent=n,r.renderer=e,r.init=r.init.bind(r),r.update=r.update.bind(r),r.render=r.render.bind(r),r}return p(n,t),n.prototype.init=function(){return y(this,void 0,void 0,(function(){return d(this,(function(t){return[2]}))}))},n.prototype.update=function(t){var n;return y(this,void 0,void 0,(function(){return d(this,(function(e){return null===(n=this.agent)||void 0===n||n.update(t,this),[2]}))}))},n.prototype.render=function(t){var n,e;null===(n=this.renderer)||void 0===n||n.render(this),null===(e=this.agent)||void 0===e||e.render(this)},n.prototype.onCollision=function(t){var n=this.x<t.x+t.w&&this.x+this.w>t.x&&this.y<t.y+t.h&&this.y+this.h>t.y;if(t instanceof s&&n){if(t.mustDelete=!0,this.health-=t.damage,this.agent instanceof l==0)A.score+=10;else if(this.agent instanceof l&&this.health<=0){A.GameObjects=[],D.states.pop();var e=new f;e.init(),D.states.push(e)}this.health<=0&&(this.mustDelete=!0,this.health=0)}},n}(e),g=function(){function t(){}return t.prototype.init=function(){},t.prototype.render=function(t){},t}();var b=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const w=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return b(n,t),n.prototype.render=function(t){var n=D.canvas.getContext("2d"),e=t.agent.x,o=t.agent.y,r=t.agent.h,i=t.agent.w,a=t.agent.d,s=e+i/2,c=o+r/2;switch(n.beginPath(),n.lineWidth=.75,n.strokeStyle="#58aff3",n.moveTo(e,o),n.lineTo(e+i,o),n.lineTo(e+i,o+r),n.lineTo(e,o+r),n.lineTo(e,o),n.stroke(),n.closePath(),n.beginPath(),n.arc(s,c,i/4,0,2*Math.PI,!1),n.lineWidth=.75,n.strokeStyle="#58aff3",n.stroke(),a){case 0:n.beginPath(),n.lineWidth=.75,n.strokeStyle="#58aff3",n.moveTo(s-2,c),n.lineTo(s-2,c-32),n.lineTo(s+2,c-32),n.lineTo(s+2,c-0),n.lineTo(s+0,c-0),n.stroke();break;case 1:n.beginPath(),n.lineWidth=.75,n.strokeStyle="#58aff3",n.moveTo(s,c-2),n.lineTo(s-32,c-2),n.lineTo(s-32,c+2),n.lineTo(s,c+2),n.lineTo(s,c-2),n.stroke();break;case 2:n.beginPath(),n.lineWidth=.75,n.strokeStyle="#58aff3",n.moveTo(s-2,c),n.lineTo(s-2,c+32),n.lineTo(s+2,c+32),n.lineTo(s+2,c-0),n.lineTo(s+0,c-0),n.stroke();break;case 3:n.beginPath(),n.lineWidth=.75,n.strokeStyle="#58aff3",n.moveTo(s,c-2),n.lineTo(s+32,c-2),n.lineTo(s+32,c+2),n.lineTo(s,c+2),n.lineTo(s,c-2),n.stroke()}},n}(g),m=function(){function t(){}return t.lerp=function(t,n,e){return t+(n-t)*((e=e<0?0:e)>1?1:e)},t.clamp=function(t,n,e){return t<n?n:t>e?e:t},t.distance=function(t,n,e,o){var r=n-t,i=o-e,a=r*r+i*i;return Math.sqrt(a)},t}();var _=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const k=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return _(n,t),n.prototype.update=function(t,n){var e=A.getPlayer().agent,o=t*Math.random()/25,r=Math.round(e.x-n.x),i=Math.round(e.y-n.y),a=Math.atan2(r,i);a<0&&(a+=2*Math.PI);Math.round(180*a/Math.PI);var s=10*Math.random()*t,c=10*Math.random()*t;if(m.distance(e.x,n.x,e.y,n.y)>=64)if(Math.abs(r+s)>=Math.abs(i+c)){var u=m.lerp(n.agent.x,e.x,o);n.agent.d=n.agent.x>u?1:3,n.agent.x=u}else{var l=m.lerp(n.agent.y,e.y,o);n.agent.d=n.agent.y>l?0:2,n.agent.y=l}n.agent.x<8&&(n.agent.x=8),n.agent.y<8&&(n.agent.y=8),n.agent.x+n.agent.w>D.canvas.width-8&&(n.agent.x=D.canvas.width-(n.agent.w+8)),n.agent.y+n.agent.h>D.canvas.height-8&&(n.agent.y=D.canvas.height-(n.agent.h+8)),n.x=n.agent.x,n.y=n.agent.y,n.w=n.agent.w,n.h=n.agent.h},n.prototype.render=function(t){D.canvas.getContext("2d")},n}(c);var x=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),T=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}))},P=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const S=function(t){function n(n,e,o,r){var i=t.call(this)||this;return i.init=i.init.bind(i),i.update=i.update.bind(i),i.render=i.render.bind(i),i.x=n,i.y=e,i.w=o,i.h=r,i}return x(n,t),n.prototype.init=function(){return T(this,void 0,void 0,(function(){return P(this,(function(t){return[2]}))}))},n.prototype.update=function(t){return T(this,void 0,void 0,(function(){return P(this,(function(t){return[2]}))}))},n.prototype.render=function(t){var n=D.canvas.getContext("2d");n.beginPath(),n.fillStyle="#363636",n.moveTo(this.x,this.y),n.lineTo(this.x+this.w,this.y),n.lineTo(this.x+this.w,this.y+this.h),n.lineTo(this.x,this.y+this.h),n.lineTo(this.x,this.y),n.fill()},n.prototype.onCollision=function(t){var n=this.x<t.x+t.w&&this.x+this.w>t.x&&this.y<t.y+t.h&&this.y+this.h>t.y;t instanceof v||t instanceof s&&n&&(t.vx*=-1,t.vy*=-1)},n}(e);var O=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),j=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}))},B=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const A=function(t){function n(){var e=t.call(this)||this;return e.init=e.init.bind(e),e.update=e.update.bind(e),e.render=e.render.bind(e),n.GameObjects.push(new v(new l(0,0,32,32),new w,100)),n.GameObjects.push(new v(new k(D.canvas.width/2,D.canvas.height/2,32,32),new w,50)),n.GameObjects.push(new S(50,50,8,8)),n.GameObjects.push(new S(50,58,8,8)),n.GameObjects.push(new S(50,66,8,8)),n.GameObjects.push(new S(58,66,8,8)),e}return O(n,t),n.getPlayer=function(){return n.GameObjects.filter((function(t){return t instanceof v})).filter((function(t){return t.agent instanceof l}))[0]},n.prototype.init=function(){return j(this,void 0,void 0,(function(){var t;return B(this,(function(e){for(n.score=0,t=0;t<n.GameObjects.length;t++)n.GameObjects[t].init();return[2]}))}))},n.prototype.update=function(t){return j(this,void 0,void 0,(function(){var e,o,r;return B(this,(function(i){for(o=0;o<n.GameObjects.length;o++)for(e=0;e<n.GameObjects.length;e++)o!==e&&n.GameObjects[o].onCollision(n.GameObjects[e]);for(n.GameObjects=n.GameObjects.filter((function(t){return!t.mustDelete})),o=0;o<n.GameObjects.length;o++)n.GameObjects[o].update(t,this),r=n.GameObjects[o],n.GameObjects[o].mustDelete=r.x<=0||r.x+r.w>=D.canvas.width||r.y<=0||r.y+r.h>=D.canvas.height;return[2]}))}))},n.prototype.render=function(){for(var t=D.canvas.getContext("2d"),e=0;e<40;e++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*e),t.lineTo(D.canvas.width,12*e),t.stroke();for(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,D.canvas.height),t.stroke(),e=0;e<n.GameObjects.length;e++)n.GameObjects[e].render(this)},n.GameObjects=[],n.score=0,n}(t);var G=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const E=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n}return G(n,t),n.prototype.init=function(){var t=this;return Promise.all([new Promise((function(n,e){t.thankyou=new Image,t.thankyou.src="assets/images/thankyou.png",t.thankyou.onload=function(){n(!0)}}))])},n.prototype.update=function(t){return n=this,e=void 0,r=function(){return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(n){return this.counter-=10*t,this.counter<=0&&(this.counter=0),[2]}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,o,r},n.prototype.render=function(){var t=D.canvas.getContext("2d"),n=D.canvas.width/2-this.thankyou.width/2,e=D.canvas.height/2-this.thankyou.height/2;t.imageSmoothingEnabled=!1;for(var o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*o),t.lineTo(D.canvas.width,12*o),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,D.canvas.height),t.stroke(),t.drawImage(this.thankyou,0,0,this.thankyou.width,this.thankyou.height,n,e,this.thankyou.width,this.thankyou.height),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,D.canvas.width,D.canvas.height),this.counter>0){for(o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*o),t.lineTo(D.canvas.width,12*o),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,D.canvas.height),t.stroke()}},n}(t);var C=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),W=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}))},q=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const M=function(t){function e(){var n=t.call(this)||this;return n.counter=255,n.switch=!1,n.showMenu=!1,n.init=n.init.bind(n),n.update=n.update.bind(n),n.render=n.render.bind(n),n}return C(e,t),e.prototype.init=function(){var t=this;return this.startButton=new n,this.startButton.text="Start Game",this.startButton.color="#363636",this.startButton.hover_color="#cc0707",this.startButton.background="rgb(0,0,0,0)",this.startButton.hover_background="rgb(0,0,0,0)",this.startButton.border="#363636",this.startButton.hover_border="#cc0707",this.startButton.font="PencilRegular",this.startButton.size="32px",this.startButton.w=150,this.startButton.h=48,this.startButton.onclick=function(){return W(t,void 0,void 0,(function(){var t;return q(this,(function(n){switch(n.label){case 0:return D.states.pop(),[4,(t=new A).init()];case 1:return n.sent(),D.states.push(t),[2]}}))}))},this.startButton.x=D.canvas.width/2-this.startButton.w/2,this.startButton.y=D.canvas.height/2-this.startButton.h/2,this.quitButton=new n,this.quitButton.text="Quit Game",this.quitButton.color="#363636",this.quitButton.hover_color="#cc0707",this.quitButton.background="rgb(0,0,0,0)",this.quitButton.hover_background="rgb(0,0,0,0)",this.quitButton.border="#363636",this.quitButton.hover_border="#cc0707",this.quitButton.font="PencilRegular",this.quitButton.size="32px",this.quitButton.w=150,this.quitButton.h=48,this.quitButton.onclick=function(){return W(t,void 0,void 0,(function(){var t;return q(this,(function(n){switch(n.label){case 0:return D.states.pop(),[4,(t=new E).init()];case 1:return n.sent(),D.states.push(t),[2]}}))}))},this.quitButton.x=D.canvas.width/2-this.quitButton.w/2,this.quitButton.y=D.canvas.height/2-this.quitButton.h/2+this.startButton.h+8,new Promise((function(n,e){t.game_name_logo=new Image,t.game_name_logo.src="assets/images/game_name_logo.png",t.game_name_logo.onload=function(){n(!0)}}))},e.prototype.update=function(t){this.showMenu?(this.game_name_logo_x=310-this.game_name_logo.width/2,this.game_name_logo_y=12,this.counter-=20*t,this.counter<=0&&(this.counter=0),this.startButton.update(t),this.quitButton.update(t)):(this.game_name_logo_x=310-this.game_name_logo.width/2,this.game_name_logo_y=240-this.game_name_logo.height/2,this.switch?(this.counter+=20*t,this.counter>=255&&(this.showMenu=!0)):(this.counter-=20*t,this.counter<=0&&(this.switch=!0)))},e.prototype.render=function(){var t=D.canvas.getContext("2d");D.canvas.width,this.game_name_logo.width,D.canvas.height,this.game_name_logo.height,t.imageSmoothingEnabled=!1;for(var n=0;n<40;n++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*n),t.lineTo(D.canvas.width,12*n),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,D.canvas.height),t.stroke(),t.drawImage(this.game_name_logo,0,0,this.game_name_logo.width,this.game_name_logo.height,this.game_name_logo_x,this.game_name_logo_y,this.game_name_logo.width,this.game_name_logo.height),this.showMenu&&(this.startButton.render(),this.quitButton.render()),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,D.canvas.width,D.canvas.height),this.counter>0){for(n=0;n<40;n++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*n),t.lineTo(D.canvas.width,12*n),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,D.canvas.height),t.stroke()}},e}(t);var R=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const I=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n.switch=!1,n}return R(n,t),n.prototype.init=function(){var t=this;return Promise.all([new Promise((function(n,e){t.logo=new Image,t.logo.src="assets/images/logo.png",t.logo.onload=function(){n(!0)}}))])},n.prototype.update=function(t){return n=this,e=void 0,r=function(){var n;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return this.switch?[3,1]:(this.counter-=20*t,this.counter<=0&&(this.switch=!0),[3,3]);case 1:return this.counter+=20*t,this.counter>=255?[4,(n=new M).init()]:[3,3];case 2:e.sent(),D.states.pop(),D.states.push(n),e.label=3;case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,o,r},n.prototype.render=function(){var t=D.canvas.getContext("2d"),n=D.canvas.width/2-this.logo.width/2,e=D.canvas.height/2-this.logo.height/2;t.imageSmoothingEnabled=!1;for(var o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*o),t.lineTo(D.canvas.width,12*o),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,D.canvas.height),t.stroke(),t.drawImage(this.logo,0,0,this.logo.width,this.logo.height,n,e,this.logo.width,this.logo.height),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,D.canvas.width,D.canvas.height),this.counter>0){for(o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*o),t.lineTo(D.canvas.width,12*o),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,D.canvas.height),t.stroke()}},n}(t);const D=function(){function t(n){this.previousTime=0,t.canvas=n,this.init=this.init.bind(this),this.loop=this.loop.bind(this)}return t.prototype.init=function(){return n=this,e=void 0,r=function(){var n;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return document.addEventListener("mousemove",(function(n){var e=t.canvas.getBoundingClientRect();t.mouse_x=n.pageX-e.left,t.mouse_y=n.pageY-e.top})),document.addEventListener("mousedown",(function(n){t.mouse_down=0==n.button})),document.addEventListener("keydown",(function(n){switch(n.code){case"ArrowUp":t.keyboard.isUpArrow=!0;break;case"ArrowDown":t.keyboard.isDownArrow=!0;break;case"ArrowLeft":t.keyboard.isLeftArrow=!0;break;case"ArrowRight":t.keyboard.isRightArrow=!0;break;case"Space":t.keyboard.isSpace=!0}})),document.addEventListener("keyup",(function(n){switch(n.code){case"ArrowUp":t.keyboard.isUpArrow=!1;break;case"ArrowDown":t.keyboard.isDownArrow=!1;break;case"ArrowLeft":t.keyboard.isLeftArrow=!1;break;case"ArrowRight":t.keyboard.isRightArrow=!1;break;case"Space":t.keyboard.isSpace=!1}})),t.states=[],[4,(n=new I).init()];case 1:return e.sent(),t.states.push(n),[2]}}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,o,r},t.prototype.loop=function(n){var e=(n-this.previousTime)/100;this.previousTime=n;for(var o=0;o<t.states.length;o++)t.states[o].update(e);var r=t.canvas.getContext("2d");for(r.fillStyle="#E5E5E5",r.fillRect(0,0,t.canvas.width,t.canvas.height),o=0;o<t.states.length;o++)t.states[o].render();t.mouse_down=!1,window.requestAnimationFrame(this.loop)},t.mustQuit=!1,t.canvas=null,t.mouse_down=!1,t.keyboard={isLeftArrow:!1,isRightArrow:!1,isUpArrow:!1,isDownArrow:!1,isSpace:!1},t}();window.addEventListener("load",(function(){return t=void 0,n=void 0,o=function(){var t,n,e;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(o){switch(o.label){case 0:return[4,(t=new FontFace("PencilRegular","url(assets/fonts/Pencil-Regular.ttf)")).load()];case 1:return o.sent(),document.fonts.add(t),n=document.querySelector("canvas"),(e=new D(n)).init(),window.requestAnimationFrame((function(t){e.previousTime=t,window.requestAnimationFrame(e.loop)})),[2]}}))},new((e=void 0)||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}));var t,n,e,o}))})();