(()=>{"use strict";const t=function(){function t(){}return t.prototype.init=function(){},t.prototype.update=function(t){},t.prototype.render=function(){},t}(),n=function(){function t(){this.onclick=function(){},this.isHover=!1,this.init=this.init.bind(this),this.update=this.update.bind(this),this.render=this.render.bind(this)}return t.prototype.init=function(){},t.prototype.update=function(t){var n=S.mouse_x,e=S.mouse_y;this.isHover=n>=this.x&&e>=this.y&&n<=this.x+this.w&&e<=this.y+this.h,this.isHover&&S.mouse_down&&(S.mouse_down=!1,this.onclick())},t.prototype.render=function(){var t=S.canvas.getContext("2d");t.strokeStyle=this.isHover?this.hover_border:this.border,t.lineWidth=.75,t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.x,this.y+this.h),t.lineTo(this.x+this.w,this.y+this.h),t.lineTo(this.x+this.w,this.y),t.lineTo(this.x,this.y),t.stroke(),t.beginPath(),t.textAlign="center",t.textBaseline="middle",t.font="normal ".concat(this.size," ").concat(this.font),t.fillStyle=this.isHover?this.hover_color:this.color,t.fillText(this.text,this.x+this.w/2,this.y+this.h/2)},t}();var e,o=function(){function t(){}return t.prototype.init=function(){},t.prototype.update=function(t,n){},t.prototype.render=function(t){},t}(),r=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),i=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function s(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}u((o=o.apply(t,n||[])).next())}))},a=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const s=function(t){function n(n,e){var o=t.call(this)||this;return o.agent=n,o.renderer=e,o.init=o.init.bind(o),o.update=o.update.bind(o),o.render=o.render.bind(o),o}return r(n,t),n.prototype.init=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){return[2]}))}))},n.prototype.update=function(t){return i(this,void 0,void 0,(function(){return a(this,(function(n){return this.agent.update(t,this),[2]}))}))},n.prototype.render=function(t){this.renderer.render(this)},n}(o),u=function(){function t(t,n,e,o){this.d=0,this.x=t,this.y=n,this.w=e,this.h=o}return t.prototype.update=function(t,n){},t}();var c=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return c(n,t),n.prototype.update=function(t,n){S.keyboard.isLeftArrow?(n.agent.x-=10*t,n.agent.d=1):S.keyboard.isRightArrow?(n.agent.x+=10*t,n.agent.d=3):S.keyboard.isUpArrow?(n.agent.y-=10*t,n.agent.d=0):S.keyboard.isDownArrow&&(n.agent.y+=10*t,n.agent.d=2),n.agent.x<8&&(n.agent.x=8),n.agent.y<8&&(n.agent.y=8),n.agent.x+n.agent.w>S.canvas.width-8&&(n.agent.x=S.canvas.width-(n.agent.w+8)),n.agent.y+n.agent.h>S.canvas.height-8&&(n.agent.y=S.canvas.height-(n.agent.h+8))},n}(u),h=function(){function t(){}return t.prototype.init=function(){},t.prototype.render=function(t){},t}();var f=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return f(n,t),n.prototype.render=function(t){var n=S.canvas.getContext("2d"),e=t.agent.x,o=t.agent.y,r=t.agent.h,i=t.agent.w,a=t.agent.d,s=e+i/2,u=o+r/2;switch(n.beginPath(),n.lineWidth=.75,n.strokeStyle="#58aff3",n.moveTo(e,o),n.lineTo(e+i,o),n.lineTo(e+i,o+r),n.lineTo(e,o+r),n.lineTo(e,o),n.stroke(),n.closePath(),n.beginPath(),n.arc(s,u,i/4,0,2*Math.PI,!1),n.lineWidth=.75,n.strokeStyle="#58aff3",n.stroke(),a){case 0:n.beginPath(),n.lineWidth=.75,n.strokeStyle="#58aff3",n.moveTo(s-2,u),n.lineTo(s-2,u-32),n.lineTo(s+2,u-32),n.lineTo(s+2,u-0),n.lineTo(s+0,u-0),n.stroke();break;case 1:n.beginPath(),n.lineWidth=.75,n.strokeStyle="#58aff3",n.moveTo(s,u-2),n.lineTo(s-32,u-2),n.lineTo(s-32,u+2),n.lineTo(s,u+2),n.lineTo(s,u-2),n.stroke();break;case 2:n.beginPath(),n.lineWidth=.75,n.strokeStyle="#58aff3",n.moveTo(s-2,u),n.lineTo(s-2,u+32),n.lineTo(s+2,u+32),n.lineTo(s+2,u-0),n.lineTo(s+0,u-0),n.stroke();break;case 3:n.beginPath(),n.lineWidth=.75,n.strokeStyle="#58aff3",n.moveTo(s,u-2),n.lineTo(s+32,u-2),n.lineTo(s+32,u+2),n.lineTo(s,u+2),n.lineTo(s,u-2),n.stroke()}},n}(h);var y=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),d=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function s(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}u((o=o.apply(t,n||[])).next())}))},g=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const v=function(t){function n(){var n=t.call(this)||this;return n.gameobjects=[],n.init=n.init.bind(n),n.update=n.update.bind(n),n.render=n.render.bind(n),n.gameobjects.push(new s(new l(0,0,32,32),new p)),n}return y(n,t),n.prototype.init=function(){return d(this,void 0,void 0,(function(){var t;return g(this,(function(n){for(t=0;t<this.gameobjects.length;t++)this.gameobjects[t].init();return[2]}))}))},n.prototype.update=function(t){return d(this,void 0,void 0,(function(){var n;return g(this,(function(e){for(n=0;n<this.gameobjects.length;n++)this.gameobjects[n].update(t,this);return[2]}))}))},n.prototype.render=function(){for(var t=S.canvas.getContext("2d"),n=0;n<40;n++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*n),t.lineTo(S.canvas.width,12*n),t.stroke();for(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,S.canvas.height),t.stroke(),n=0;n<this.gameobjects.length;n++)this.gameobjects[n].render(this)},n}(t);var b=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const w=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n}return b(n,t),n.prototype.init=function(){var t=this;return Promise.all([new Promise((function(n,e){t.thankyou=new Image,t.thankyou.src="assets/images/thankyou.png",t.thankyou.onload=function(){n(!0)}}))])},n.prototype.update=function(t){return n=this,e=void 0,r=function(){return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(n){return this.counter-=10*t,this.counter<=0&&(this.counter=0),[2]}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}u((r=r.apply(n,e||[])).next())}));var n,e,o,r},n.prototype.render=function(){var t=S.canvas.getContext("2d"),n=S.canvas.width/2-this.thankyou.width/2,e=S.canvas.height/2-this.thankyou.height/2;t.imageSmoothingEnabled=!1;for(var o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*o),t.lineTo(S.canvas.width,12*o),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,S.canvas.height),t.stroke(),t.drawImage(this.thankyou,0,0,this.thankyou.width,this.thankyou.height,n,e,this.thankyou.width,this.thankyou.height),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,S.canvas.width,S.canvas.height),this.counter>0){for(o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*o),t.lineTo(S.canvas.width,12*o),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,S.canvas.height),t.stroke()}},n}(t);var m=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),_=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function s(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}u((o=o.apply(t,n||[])).next())}))},k=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const x=function(t){function e(){var n=t.call(this)||this;return n.counter=255,n.switch=!1,n.showMenu=!1,n.init=n.init.bind(n),n.update=n.update.bind(n),n.render=n.render.bind(n),n}return m(e,t),e.prototype.init=function(){var t=this;return this.startButton=new n,this.startButton.text="Start Game",this.startButton.color="#363636",this.startButton.hover_color="#cc0707",this.startButton.background="rgb(0,0,0,0)",this.startButton.hover_background="rgb(0,0,0,0)",this.startButton.border="#363636",this.startButton.hover_border="#cc0707",this.startButton.font="PencilRegular",this.startButton.size="32px",this.startButton.w=150,this.startButton.h=48,this.startButton.onclick=function(){return _(t,void 0,void 0,(function(){var t;return k(this,(function(n){switch(n.label){case 0:return S.states.pop(),[4,(t=new v).init()];case 1:return n.sent(),S.states.push(t),[2]}}))}))},this.startButton.x=S.canvas.width/2-this.startButton.w/2,this.startButton.y=S.canvas.height/2-this.startButton.h/2,this.quitButton=new n,this.quitButton.text="Quit Game",this.quitButton.color="#363636",this.quitButton.hover_color="#cc0707",this.quitButton.background="rgb(0,0,0,0)",this.quitButton.hover_background="rgb(0,0,0,0)",this.quitButton.border="#363636",this.quitButton.hover_border="#cc0707",this.quitButton.font="PencilRegular",this.quitButton.size="32px",this.quitButton.w=150,this.quitButton.h=48,this.quitButton.onclick=function(){return _(t,void 0,void 0,(function(){var t;return k(this,(function(n){switch(n.label){case 0:return S.states.pop(),[4,(t=new w).init()];case 1:return n.sent(),S.states.push(t),[2]}}))}))},this.quitButton.x=S.canvas.width/2-this.quitButton.w/2,this.quitButton.y=S.canvas.height/2-this.quitButton.h/2+this.startButton.h+8,new Promise((function(n,e){t.game_name_logo=new Image,t.game_name_logo.src="assets/images/game_name_logo.png",t.game_name_logo.onload=function(){n(!0)}}))},e.prototype.update=function(t){this.showMenu?(this.game_name_logo_x=310-this.game_name_logo.width/2,this.game_name_logo_y=12,this.counter-=10*t,this.counter<=0&&(this.counter=0),this.startButton.update(t),this.quitButton.update(t)):(this.game_name_logo_x=310-this.game_name_logo.width/2,this.game_name_logo_y=240-this.game_name_logo.height/2,this.switch?(this.counter+=10*t,this.counter>=255&&(this.showMenu=!0)):(this.counter-=10*t,this.counter<=0&&(this.switch=!0)))},e.prototype.render=function(){var t=S.canvas.getContext("2d");S.canvas.width,this.game_name_logo.width,S.canvas.height,this.game_name_logo.height,t.imageSmoothingEnabled=!1;for(var n=0;n<40;n++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*n),t.lineTo(S.canvas.width,12*n),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,S.canvas.height),t.stroke(),t.drawImage(this.game_name_logo,0,0,this.game_name_logo.width,this.game_name_logo.height,this.game_name_logo_x,this.game_name_logo_y,this.game_name_logo.width,this.game_name_logo.height),this.showMenu&&(this.startButton.render(),this.quitButton.render()),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,S.canvas.width,S.canvas.height),this.counter>0){for(n=0;n<40;n++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*n),t.lineTo(S.canvas.width,12*n),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,S.canvas.height),t.stroke()}},e}(t);var T=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const P=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n.switch=!1,n}return T(n,t),n.prototype.init=function(){var t=this;return Promise.all([new Promise((function(n,e){t.logo=new Image,t.logo.src="assets/images/logo.png",t.logo.onload=function(){n(!0)}}))])},n.prototype.update=function(t){return n=this,e=void 0,r=function(){var n;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return this.switch?[3,1]:(this.counter-=10*t,this.counter<=0&&(this.switch=!0),[3,3]);case 1:return this.counter+=10*t,this.counter>=255?[4,(n=new x).init()]:[3,3];case 2:e.sent(),S.states.pop(),S.states.push(n),e.label=3;case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}u((r=r.apply(n,e||[])).next())}));var n,e,o,r},n.prototype.render=function(){var t=S.canvas.getContext("2d"),n=S.canvas.width/2-this.logo.width/2,e=S.canvas.height/2-this.logo.height/2;t.imageSmoothingEnabled=!1;for(var o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="#58aff3",t.moveTo(0,12*o),t.lineTo(S.canvas.width,12*o),t.stroke();if(t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, 1)",t.moveTo(24,0),t.lineTo(24,S.canvas.height),t.stroke(),t.drawImage(this.logo,0,0,this.logo.width,this.logo.height,n,e,this.logo.width,this.logo.height),t.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),t.fillRect(0,0,S.canvas.width,S.canvas.height),this.counter>0){for(o=0;o<40;o++)t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),t.moveTo(0,12*o),t.lineTo(S.canvas.width,12*o),t.stroke();t.beginPath(),t.lineWidth=.25,t.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),t.moveTo(24,0),t.lineTo(24,S.canvas.height),t.stroke()}},n}(t);const S=function(){function t(n){t.canvas=n,this.init=this.init.bind(this),this.loop=this.loop.bind(this)}return t.prototype.init=function(){return n=this,e=void 0,r=function(){var n;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return document.addEventListener("mousemove",(function(n){var e=t.canvas.getBoundingClientRect();t.mouse_x=n.pageX-e.left,t.mouse_y=n.pageY-e.top})),document.addEventListener("mousedown",(function(n){t.mouse_down=0==n.button})),document.addEventListener("keydown",(function(n){switch(n.code){case"ArrowUp":t.keyboard.isUpArrow=!0;break;case"ArrowDown":t.keyboard.isDownArrow=!0;break;case"ArrowLeft":t.keyboard.isLeftArrow=!0;break;case"ArrowRight":t.keyboard.isRightArrow=!0}})),document.addEventListener("keyup",(function(n){switch(n.code){case"ArrowUp":t.keyboard.isUpArrow=!1;break;case"ArrowDown":t.keyboard.isDownArrow=!1;break;case"ArrowLeft":t.keyboard.isLeftArrow=!1;break;case"ArrowRight":t.keyboard.isRightArrow=!1}})),t.states=[],[4,(n=new P).init()];case 1:return e.sent(),t.states.push(n),this.interval=setInterval(this.loop,15),[2]}}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}u((r=r.apply(n,e||[])).next())}));var n,e,o,r},t.prototype.loop=function(){t.mustQuit&&clearInterval(this.interval);for(var n=0;n<t.states.length;n++)t.states[n].update(.33);var e=t.canvas.getContext("2d");for(e.fillStyle="#E5E5E5",e.fillRect(0,0,t.canvas.width,t.canvas.height),n=0;n<t.states.length;n++)t.states[n].render();t.mouse_down=!1},t.mustQuit=!1,t.canvas=null,t.mouse_down=!1,t.keyboard={isLeftArrow:!1,isRightArrow:!1,isUpArrow:!1,isDownArrow:!1},t}();window.addEventListener("load",(function(){return t=void 0,n=void 0,o=function(){var t,n;return function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return[4,(t=new FontFace("PencilRegular","url(assets/fonts/Pencil-Regular.ttf)")).load()];case 1:return e.sent(),document.fonts.add(t),n=document.querySelector("canvas"),new S(n).init(),[2]}}))},new((e=void 0)||(e=Promise))((function(r,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function s(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}u((o=o.apply(t,n||[])).next())}));var t,n,e,o}))})();