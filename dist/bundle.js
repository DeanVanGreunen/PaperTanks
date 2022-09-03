(()=>{"use strict";const t=function(){function t(){}return t.prototype.init=function(){},t.prototype.update=function(t){},t.prototype.render=function(){},t}(),n=function(){function t(){this.onclick=function(){},this.isHover=!1,this.init=this.init.bind(this),this.update=this.update.bind(this),this.render=this.render.bind(this)}return t.prototype.init=function(){},t.prototype.update=function(t){var n=q.mouse_x,e=q.mouse_y;this.isHover=n>=this.x&&e>=this.y&&n<=this.x+this.w&&e<=this.y+this.h,this.isHover&&q.mouse_down&&(q.mouse_down=!1,this.onclick())},t.prototype.render=function(){var t=q.canvas.getContext("2d");t.strokeStyle=this.isHover?this.hover_border:this.border,t.lineWidth=.75,t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.x,this.y+this.h),t.lineTo(this.x+this.w,this.y+this.h),t.lineTo(this.x+this.w,this.y),t.lineTo(this.x,this.y),t.stroke(),t.beginPath(),t.textAlign="center",t.textBaseline="middle",t.font="normal ".concat(this.size," ").concat(this.font),t.fillStyle=this.isHover?this.hover_color:this.color,t.fillText(this.text,this.x+this.w/2,this.y+this.h/2)},t}(),e=function(){function t(){this.mustDelete=!1}return t.prototype.init=function(){},t.prototype.update=function(t,n){},t.prototype.render=function(t){},t.prototype.onCollision=function(t){},t}();var o,r=(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},o(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),i=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}))},a=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const s=function(t){function n(n,e,o,r,i){var a=t.call(this)||this;return a.damage=10,a.init=a.init.bind(a),a.update=a.update.bind(a),a.render=a.render.bind(a),a.x=n,a.y=e,a.r=o,a.vx=r,a.vy=i,a.w=o,a.h=o,a}return r(n,t),n.prototype.init=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){return[2]}))}))},n.prototype.update=function(t){return i(this,void 0,void 0,(function(){return a(this,(function(n){return this.x+=t*this.vx,this.y+=t*this.vy,[2]}))}))},n.prototype.render=function(t){var n=q.canvas.getContext("2d");n.beginPath(),n.arc(this.x,this.y,this.r,0,2*Math.PI,!1),n.lineWidth=.75,n.fillStyle="rgba(225, 0, 0, 1)",n.strokeStyle="rgba(225, 0, 0, 1)",n.stroke()},n}(e),c=function(){function t(t,n,e,o){this.d=0,this.health=0,this.score=0,this.x=t,this.y=n,this.w=e,this.h=o}return t.prototype.update=function(t,n){},t.prototype.render=function(t){},t}();var u=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const h=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.canFire=0,n}return u(n,t),n.prototype.update=function(t,n){if(q.keyboard.isLeftArrow?(n.agent.x-=10*t,n.agent.d=1):q.keyboard.isRightArrow?(n.agent.x+=10*t,n.agent.d=3):q.keyboard.isUpArrow?(n.agent.y-=10*t,n.agent.d=0):q.keyboard.isDownArrow&&(n.agent.y+=10*t,n.agent.d=2),q.keyboard.isSpace&&this.canFire<=0){this.health-=10*t,this.canFire=5;var e=0,o=0,r=n.agent.x+n.agent.w/2,i=n.agent.y+n.agent.h/2,a=100*t;switch(this.d){case 0:i-=38,e=0*a,o=-1*a;break;case 1:r-=38,e=-1*a,o=0*a;break;case 2:i+=38,e=0*a,o=1*a;break;case 3:r+=38,e=1*a,o=0*a}S.GameObjects.push(new s(r,i,4,e,o))}n.agent.x<8&&(n.agent.x=8),n.agent.y<8&&(n.agent.y=8),n.agent.x+n.agent.w>q.canvas.width-8&&(n.agent.x=q.canvas.width-(n.agent.w+8)),n.agent.y+n.agent.h>q.canvas.height-8&&(n.agent.y=q.canvas.height-(n.agent.h+8)),this.canFire-=t,n.x=n.agent.x,n.y=n.agent.y,n.w=n.agent.w,n.h=n.agent.h},n.prototype.render=function(t){var n=q.canvas.getContext("2d"),e=q.canvas.width;q.canvas.height,n.beginPath(),n.lineWidth=.75,n.strokeStyle="#cc0707",n.moveTo(8,8),n.lineTo(8,20),n.lineTo(104,20),n.lineTo(104,8),n.lineTo(8,8),n.stroke(),n.fillStyle="#cc0707";var o=t.health/100*96;n.beginPath(),n.moveTo(8,8),n.lineTo(8,20),n.lineTo(o+8,20),n.lineTo(o+8,8),n.lineTo(8,8),n.fill(),n.beginPath(),n.textAlign="center",n.textBaseline="middle",n.font="normal 12px PencilRegular",n.fillStyle="#cc0707",n.fillText(S.score.toString(),120,12),n.beginPath(),n.lineWidth=.75,n.strokeStyle="#4CBB17",n.moveTo(e-20,8),n.lineTo(e-20,20),n.lineTo(e-8,20),n.lineTo(e-8,8),n.lineTo(e-20,8),n.stroke(),this.canFire<=0&&(n.beginPath(),n.fillStyle="#4CBB17",n.moveTo(e-20,8),n.lineTo(e-20,20),n.lineTo(e-8,20),n.lineTo(e-8,8),n.lineTo(e-20,8),n.fill())},n}(c);var l=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const f=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n}return l(n,t),n.prototype.init=function(){var t=this;return Promise.all([new Promise((function(n,e){t.gameover=new Image,t.gameover.src="assets/images/gameover.png",t.gameover.onload=function(){n(!0)}}))])},n.prototype.update=function(t){return n=this,e=void 0,r=function(){var n;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){return this.counter-=10*t,this.counter<=0&&(this.counter=0,q.states.pop(),(n=new E).init(),q.states.push(n)),[2]}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,o,r},n.prototype.render=function(){var t=q.canvas.getContext("2d"),n=q.canvas.width/2-this.gameover.width/2,e=q.canvas.height/2-this.gameover.height/2;t.imageSmoothingEnabled=!1;for(var o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*o),t.lineTo(q.canvas.width,12*o),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,q.canvas.height),t.stroke(),t.drawImage(this.gameover,0,0,this.gameover.width,this.gameover.height,n,e,this.gameover.width,this.gameover.height),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,q.canvas.width,q.canvas.height),this.counter>0){for(o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*o),t.lineTo(q.canvas.width,12*o),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,q.canvas.height),t.stroke()}},n}(t);var p=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),y=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}))},d=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const v=function(t){function n(n,e,o,r){var i=t.call(this)||this;return i.init=i.init.bind(i),i.update=i.update.bind(i),i.render=i.render.bind(i),i.x=n,i.y=e,i.w=o,i.h=r,i}return p(n,t),n.prototype.init=function(){return y(this,void 0,void 0,(function(){return d(this,(function(t){return[2]}))}))},n.prototype.update=function(t){return y(this,void 0,void 0,(function(){return d(this,(function(t){return[2]}))}))},n.prototype.render=function(t){var n=q.canvas.getContext("2d");n.beginPath(),n.fillStyle="#363636",n.moveTo(this.x,this.y),n.lineTo(this.x+this.w,this.y),n.lineTo(this.x+this.w,this.y+this.h),n.lineTo(this.x,this.y+this.h),n.lineTo(this.x,this.y),n.fill()},n.prototype.onCollision=function(t){var n=this.x<t.x+t.w&&this.x+this.w>t.x&&this.y<t.y+t.h&&this.y+this.h>t.y;t instanceof s&&n&&(t.vx*=-1,t.vy*=-1)},n}(e);var b=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),w=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}))},g=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const m=function(t){function n(n,e,o){var r=t.call(this)||this;return r.health=100,r.health=o,r.agent=n,r.renderer=e,r.init=r.init.bind(r),r.update=r.update.bind(r),r.render=r.render.bind(r),r}return b(n,t),n.prototype.init=function(){return w(this,void 0,void 0,(function(){return g(this,(function(t){return[2]}))}))},n.prototype.update=function(t){var n;return w(this,void 0,void 0,(function(){return g(this,(function(e){return null===(n=this.agent)||void 0===n||n.update(t,this),[2]}))}))},n.prototype.render=function(t){var n,e;null===(n=this.renderer)||void 0===n||n.render(this),null===(e=this.agent)||void 0===e||e.render(this)},n.prototype.onCollision=function(t){var n=this.x<t.x+t.w&&this.x+this.w>t.x&&this.y<t.y+t.h&&this.y+this.h>t.y;if(t instanceof s){if(n){if(t.mustDelete=!0,this.health-=t.damage,this.agent instanceof h==0)S.score+=10;else if(this.agent instanceof h&&this.health<=0){S.GameObjects=[],q.states.pop();var e=new f;e.init(),q.states.push(e)}this.health<=0&&(this.mustDelete=!0,this.health=0)}}else if(t instanceof v&&n){var o=t.x+t.w/2,r=t.y+t.h/2,i=this.x+this.w>=t.x&&this.x+this.w<=o&&this.y+2>=t.y-this.h&&this.y-2<=t.y+t.h,a=this.x<=t.x+t.w&&this.x>=o&&this.y+2>=t.y-this.h&&this.y-2<=t.y+t.h,c=this.y<=t.y+t.h&&this.y<=r&&this.x+2>=t.x-this.w&&this.x-2<=t.x+t.w,u=this.y<=t.y+t.h&&this.y>=r&&this.x+2>=t.x-this.w&&this.x-2<=t.x+t.w;i?this.x=this.agent.x=t.x-this.w:a?this.x=this.agent.x=t.x+t.w:c?this.y=this.agent.y=t.y-this.h:u&&(this.y=this.agent.y=t.y+t.h)}},n.prototype.getDirectionNormal=function(){return 0==this.agent.d?{x:0,y:-1}:1==this.agent.d?{x:-1,y:0}:2==this.agent.d?{x:0,y:1}:3==this.agent.d?{x:1,y:0}:{x:0,y:0}},n}(e);const x=function(){function t(){}return t.load=function(n){return e=this,o=void 0,i=function(){var e;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(o){switch(o.label){case 0:return e="/assets/levels/".concat(n,".json"),[4,fetch(e).then((function(t){t.json()})).then((function(n){t.json_string=n}))];case 1:return[2,o.sent()]}}))},new((r=void 0)||(r=Promise))((function(t,n){function a(t){try{c(i.next(t))}catch(t){n(t)}}function s(t){try{c(i.throw(t))}catch(t){n(t)}}function c(n){var e;n.done?t(n.value):(e=n.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}c((i=i.apply(e,o||[])).next())}));var e,o,r,i},t.getFromJSON=function(){for(var n=[],e=0,o=JSON.parse(t.json_string);e<o.length;e++){var r=o[e];"Wall"===r.type&&n.push(new v(r.x,r.y,r.w,r.h))}return n},t}();var _=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),k=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}))},T=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const S=function(t){function n(){var e=t.call(this)||this;return e.init=e.init.bind(e),e.update=e.update.bind(e),e.render=e.render.bind(e),x.load("level_1"),n.GameObjects=x.getFromJSON(),e}return _(n,t),n.getPlayer=function(){return n.GameObjects.filter((function(t){return t instanceof m})).filter((function(t){return t.agent instanceof h}))[0]},n.prototype.init=function(){return k(this,void 0,void 0,(function(){var t;return T(this,(function(e){for(n.score=0,t=0;t<n.GameObjects.length;t++)n.GameObjects[t].init();return[2]}))}))},n.prototype.update=function(t){return k(this,void 0,void 0,(function(){var e,o,r;return T(this,(function(i){for(o=0;o<n.GameObjects.length;o++)for(e=0;e<n.GameObjects.length;e++)o!==e&&n.GameObjects[o].onCollision(n.GameObjects[e]);for(n.GameObjects=n.GameObjects.filter((function(t){return!t.mustDelete})),o=0;o<n.GameObjects.length;o++)n.GameObjects[o].update(t,this),r=n.GameObjects[o],n.GameObjects[o].mustDelete=r.x<=0||r.x+r.w>=q.canvas.width||r.y<=0||r.y+r.h>=q.canvas.height;return[2]}))}))},n.prototype.render=function(){for(var t=q.canvas.getContext("2d"),e=0;e<40;e++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*e),t.lineTo(q.canvas.width,12*e),t.stroke();for(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,q.canvas.height),t.stroke(),e=0;e<n.GameObjects.length;e++)n.GameObjects[e].render(this)},n.GameObjects=[],n.score=0,n}(t);var P=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const O=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n}return P(n,t),n.prototype.init=function(){var t=this;return Promise.all([new Promise((function(n,e){t.thankyou=new Image,t.thankyou.src="assets/images/thankyou.png",t.thankyou.onload=function(){n(!0)}}))])},n.prototype.update=function(t){return n=this,e=void 0,r=function(){return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(n){return this.counter-=10*t,this.counter<=0&&(this.counter=0),[2]}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,o,r},n.prototype.render=function(){var t=q.canvas.getContext("2d"),n=q.canvas.width/2-this.thankyou.width/2,e=q.canvas.height/2-this.thankyou.height/2;t.imageSmoothingEnabled=!1;for(var o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*o),t.lineTo(q.canvas.width,12*o),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,q.canvas.height),t.stroke(),t.drawImage(this.thankyou,0,0,this.thankyou.width,this.thankyou.height,n,e,this.thankyou.width,this.thankyou.height),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,q.canvas.width,q.canvas.height),this.counter>0){for(o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*o),t.lineTo(q.canvas.width,12*o),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,q.canvas.height),t.stroke()}},n}(t);var j=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),B=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}))},A=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const E=function(t){function e(){var n=t.call(this)||this;return n.counter=255,n.switch=!1,n.showMenu=!1,n.init=n.init.bind(n),n.update=n.update.bind(n),n.render=n.render.bind(n),n}return j(e,t),e.prototype.init=function(){var t=this;return this.startButton=new n,this.startButton.text="Start Game",this.startButton.color="#363636",this.startButton.hover_color="#cc0707",this.startButton.background="rgb(0,0,0,0)",this.startButton.hover_background="rgb(0,0,0,0)",this.startButton.border="#363636",this.startButton.hover_border="#cc0707",this.startButton.font="PencilRegular",this.startButton.size="32px",this.startButton.w=150,this.startButton.h=48,this.startButton.onclick=function(){return B(t,void 0,void 0,(function(){var t;return A(this,(function(n){switch(n.label){case 0:return q.states.pop(),[4,(t=new S).init()];case 1:return n.sent(),q.states.push(t),[2]}}))}))},this.startButton.x=q.canvas.width/2-this.startButton.w/2,this.startButton.y=q.canvas.height/2-this.startButton.h/2,this.quitButton=new n,this.quitButton.text="Quit Game",this.quitButton.color="#363636",this.quitButton.hover_color="#cc0707",this.quitButton.background="rgb(0,0,0,0)",this.quitButton.hover_background="rgb(0,0,0,0)",this.quitButton.border="#363636",this.quitButton.hover_border="#cc0707",this.quitButton.font="PencilRegular",this.quitButton.size="32px",this.quitButton.w=150,this.quitButton.h=48,this.quitButton.onclick=function(){return B(t,void 0,void 0,(function(){var t;return A(this,(function(n){switch(n.label){case 0:return q.states.pop(),[4,(t=new O).init()];case 1:return n.sent(),q.states.push(t),[2]}}))}))},this.quitButton.x=q.canvas.width/2-this.quitButton.w/2,this.quitButton.y=q.canvas.height/2-this.quitButton.h/2+this.startButton.h+8,new Promise((function(n,e){t.game_name_logo=new Image,t.game_name_logo.src="assets/images/game_name_logo.png",t.game_name_logo.onload=function(){n(!0)}}))},e.prototype.update=function(t){this.showMenu?(this.game_name_logo_x=310-this.game_name_logo.width/2,this.game_name_logo_y=12,this.counter-=20*t,this.counter<=0&&(this.counter=0),this.startButton.update(t),this.quitButton.update(t)):(this.game_name_logo_x=310-this.game_name_logo.width/2,this.game_name_logo_y=240-this.game_name_logo.height/2,this.switch?(this.counter+=20*t,this.counter>=255&&(this.showMenu=!0)):(this.counter-=20*t,this.counter<=0&&(this.switch=!0)))},e.prototype.render=function(){var t=q.canvas.getContext("2d");q.canvas.width,this.game_name_logo.width,q.canvas.height,this.game_name_logo.height,t.imageSmoothingEnabled=!1;for(var n=0;n<40;n++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*n),t.lineTo(q.canvas.width,12*n),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,q.canvas.height),t.stroke(),t.drawImage(this.game_name_logo,0,0,this.game_name_logo.width,this.game_name_logo.height,this.game_name_logo_x,this.game_name_logo_y,this.game_name_logo.width,this.game_name_logo.height),this.showMenu&&(this.startButton.render(),this.quitButton.render()),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,q.canvas.width,q.canvas.height),this.counter>0){for(n=0;n<40;n++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*n),t.lineTo(q.canvas.width,12*n),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,q.canvas.height),t.stroke()}},e}(t);var G=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const C=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n.switch=!1,n}return G(n,t),n.prototype.init=function(){var t=this;return Promise.all([new Promise((function(n,e){t.logo=new Image,t.logo.src="assets/images/logo.png",t.logo.onload=function(){n(!0)}}))])},n.prototype.update=function(t){return n=this,e=void 0,r=function(){var n;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return this.switch?[3,1]:(this.counter-=20*t,this.counter<=0&&(this.switch=!0),[3,3]);case 1:return this.counter+=20*t,this.counter>=255?[4,(n=new E).init()]:[3,3];case 2:e.sent(),q.states.pop(),q.states.push(n),e.label=3;case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,o,r},n.prototype.render=function(){var t=q.canvas.getContext("2d"),n=q.canvas.width/2-this.logo.width/2,e=q.canvas.height/2-this.logo.height/2;t.imageSmoothingEnabled=!1;for(var o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*o),t.lineTo(q.canvas.width,12*o),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,q.canvas.height),t.stroke(),t.drawImage(this.logo,0,0,this.logo.width,this.logo.height,n,e,this.logo.width,this.logo.height),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,q.canvas.width,q.canvas.height),this.counter>0){for(o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*o),t.lineTo(q.canvas.width,12*o),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,q.canvas.height),t.stroke()}},n}(t);const q=function(){function t(n){this.previousTime=0,t.canvas=n,this.init=this.init.bind(this),this.loop=this.loop.bind(this)}return t.prototype.init=function(){return n=this,e=void 0,r=function(){var n;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return document.addEventListener("mousemove",(function(n){var e=t.canvas.getBoundingClientRect();t.mouse_x=n.pageX-e.left,t.mouse_y=n.pageY-e.top})),document.addEventListener("mousedown",(function(n){t.mouse_down=0==n.button})),document.addEventListener("keydown",(function(n){switch(n.code){case"ArrowUp":t.keyboard.isUpArrow=!0;break;case"ArrowDown":t.keyboard.isDownArrow=!0;break;case"ArrowLeft":t.keyboard.isLeftArrow=!0;break;case"ArrowRight":t.keyboard.isRightArrow=!0;break;case"Space":t.keyboard.isSpace=!0}})),document.addEventListener("keyup",(function(n){switch(n.code){case"ArrowUp":t.keyboard.isUpArrow=!1;break;case"ArrowDown":t.keyboard.isDownArrow=!1;break;case"ArrowLeft":t.keyboard.isLeftArrow=!1;break;case"ArrowRight":t.keyboard.isRightArrow=!1;break;case"Space":t.keyboard.isSpace=!1}})),t.states=[],[4,(n=new C).init()];case 1:return e.sent(),t.states.push(n),[2]}}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,o,r},t.prototype.loop=function(n){var e=(n-this.previousTime)/100;this.previousTime=n;for(var o=0;o<t.states.length;o++)t.states[o].update(e);var r=t.canvas.getContext("2d");for(r.fillStyle="#E5E5E5",r.fillRect(0,0,t.canvas.width,t.canvas.height),o=0;o<t.states.length;o++)t.states[o].render();t.mouse_down=!1,window.requestAnimationFrame(this.loop)},t.mustQuit=!1,t.canvas=null,t.mouse_down=!1,t.keyboard={isLeftArrow:!1,isRightArrow:!1,isUpArrow:!1,isDownArrow:!1,isSpace:!1},t}();window.addEventListener("load",(function(){return t=void 0,n=void 0,o=function(){var t,n,e;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(o){switch(o.label){case 0:return[4,(t=new FontFace("PencilRegular","url(assets/fonts/Pencil-Regular.ttf)")).load()];case 1:return o.sent(),document.fonts.add(t),n=document.querySelector("canvas"),(e=new q(n)).init(),window.requestAnimationFrame((function(t){e.previousTime=t,window.requestAnimationFrame(e.loop)})),[2]}}))},new((e=void 0)||(e=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((o=o.apply(t,n||[])).next())}));var t,n,e,o}))})();