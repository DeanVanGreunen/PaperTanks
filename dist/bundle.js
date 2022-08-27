(()=>{"use strict";const t=function(){function t(){}return t.prototype.init=function(){},t.prototype.update=function(t){},t.prototype.render=function(t){},t}(),n=function(){function t(){this.onclick=function(){},this.isHover=!1,this.init=this.init.bind(this),this.update=this.update.bind(this),this.render=this.render.bind(this)}return t.prototype.init=function(){},t.prototype.update=function(t){var n=l.mouse_x,e=l.mouse_y;this.isHover=n>=this.x&&e>=this.y&&n<=this.x+this.w&&e<=this.y+this.h,this.isHover&&l.mouse_down&&(l.mouse_down=!1,this.onclick())},t.prototype.render=function(t){var n=t.getContext("2d");n.strokeStyle=this.isHover?this.hover_border:this.border,n.lineWidth=.75,n.beginPath(),n.moveTo(this.x,this.y),n.lineTo(this.x,this.y+this.h),n.lineTo(this.x+this.w,this.y+this.h),n.lineTo(this.x+this.w,this.y),n.lineTo(this.x,this.y),n.stroke(),n.beginPath(),n.textAlign="center",n.textBaseline="middle",n.font="normal ".concat(this.size," ").concat(this.font),n.fillStyle=this.isHover?this.hover_color:this.color,n.fillText(this.text,this.x+this.w/2,this.y+this.h/2)},t}();var e,o=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)});const i=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n}return o(n,t),n.prototype.init=function(){var t=this;return Promise.all([new Promise((function(n,e){t.thankyou=new Image,t.thankyou.src="assets/images/thankyou.png",t.thankyou.onload=function(){n(!0)}}))])},n.prototype.update=function(t){return n=this,e=void 0,i=function(){return function(t,n){var e,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(t,a)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(n){return this.counter-=10*t,this.counter<=0&&(this.counter=0),[2]}))},new((o=void 0)||(o=Promise))((function(t,r){function a(t){try{u(i.next(t))}catch(t){r(t)}}function s(t){try{u(i.throw(t))}catch(t){r(t)}}function u(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}u((i=i.apply(n,e||[])).next())}));var n,e,o,i},n.prototype.render=function(t){var n=t.getContext("2d"),e=t.width/2-this.thankyou.width/2,o=t.height/2-this.thankyou.height/2;n.imageSmoothingEnabled=!1;for(var i=0;i<40;i++)n.beginPath(),n.lineWidth=.25,n.strokeStyle="#58aff3",n.moveTo(0,12*i),n.lineTo(t.width,12*i),n.stroke();if(n.beginPath(),n.lineWidth=.25,n.strokeStyle="rgba(225, 0, 0, 1)",n.moveTo(24,0),n.lineTo(24,t.height),n.stroke(),n.drawImage(this.thankyou,0,0,this.thankyou.width,this.thankyou.height,e,o,this.thankyou.width,this.thankyou.height),n.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),n.fillRect(0,0,t.width,t.height),this.counter>0){for(i=0;i<40;i++)n.beginPath(),n.lineWidth=.25,n.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),n.moveTo(0,12*i),n.lineTo(t.width,12*i),n.stroke();n.beginPath(),n.lineWidth=.25,n.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),n.moveTo(24,0),n.lineTo(24,t.height),n.stroke()}},n}(t);var r=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),a=function(t,n,e,o){return new(e||(e=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function s(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}u((o=o.apply(t,n||[])).next())}))},s=function(t,n){var e,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(t,a)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};const u=function(t){function e(){var n=t.call(this)||this;return n.counter=255,n.switch=!1,n.showMenu=!1,n.init=n.init.bind(n),n.update=n.update.bind(n),n.render=n.render.bind(n),n}return r(e,t),e.prototype.init=function(){var t=this;return this.startButton=new n,this.startButton.text="Start Game",this.startButton.color="#363636",this.startButton.hover_color="#cc0707",this.startButton.background="rgb(0,0,0,0)",this.startButton.hover_background="rgb(0,0,0,0)",this.startButton.border="#363636",this.startButton.hover_border="#cc0707",this.startButton.font="PencilRegular",this.startButton.size="32px",this.startButton.w=150,this.startButton.h=48,this.startButton.onclick=function(){return a(t,void 0,void 0,(function(){return s(this,(function(t){return[2]}))}))},this.startButton.x=l.canvas.width/2-this.startButton.w/2,this.startButton.y=l.canvas.height/2-this.startButton.h/2,this.quitButton=new n,this.quitButton.text="Quit Game",this.quitButton.color="#363636",this.quitButton.hover_color="#cc0707",this.quitButton.background="rgb(0,0,0,0)",this.quitButton.hover_background="rgb(0,0,0,0)",this.quitButton.border="#363636",this.quitButton.hover_border="#cc0707",this.quitButton.font="PencilRegular",this.quitButton.size="32px",this.quitButton.w=150,this.quitButton.h=48,this.quitButton.onclick=function(){return a(t,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:return l.states.pop(),[4,(t=new i).init()];case 1:return n.sent(),l.states.push(t),[2]}}))}))},this.quitButton.x=l.canvas.width/2-this.quitButton.w/2,this.quitButton.y=l.canvas.height/2-this.quitButton.h/2+this.startButton.h+8,new Promise((function(n,e){t.game_name_logo=new Image,t.game_name_logo.src="assets/images/game_name_logo.png",t.game_name_logo.onload=function(){n(!0)}}))},e.prototype.update=function(t){this.showMenu?(this.game_name_logo_x=310-this.game_name_logo.width/2,this.game_name_logo_y=12,this.counter-=10*t,this.counter<=0&&(this.counter=0),this.startButton.update(t),this.quitButton.update(t)):(this.game_name_logo_x=310-this.game_name_logo.width/2,this.game_name_logo_y=240-this.game_name_logo.height/2,this.switch?(this.counter+=10*t,this.counter>=255&&(this.showMenu=!0)):(this.counter-=10*t,this.counter<=0&&(this.switch=!0)))},e.prototype.render=function(t){var n=t.getContext("2d");t.width,this.game_name_logo.width,t.height,this.game_name_logo.height,n.imageSmoothingEnabled=!1;for(var e=0;e<40;e++)n.beginPath(),n.lineWidth=.25,n.strokeStyle="#58aff3",n.moveTo(0,12*e),n.lineTo(t.width,12*e),n.stroke();if(n.beginPath(),n.lineWidth=.25,n.strokeStyle="rgba(225, 0, 0, 1)",n.moveTo(24,0),n.lineTo(24,t.height),n.stroke(),n.drawImage(this.game_name_logo,0,0,this.game_name_logo.width,this.game_name_logo.height,this.game_name_logo_x,this.game_name_logo_y,this.game_name_logo.width,this.game_name_logo.height),this.showMenu&&(this.startButton.render(t),this.quitButton.render(t)),n.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),n.fillRect(0,0,t.width,t.height),this.counter>0){for(e=0;e<40;e++)n.beginPath(),n.lineWidth=.25,n.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),n.moveTo(0,12*e),n.lineTo(t.width,12*e),n.stroke();n.beginPath(),n.lineWidth=.25,n.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),n.moveTo(24,0),n.lineTo(24,t.height),n.stroke()}},e}(t);var h=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const c=function(t){function n(){var n=t.call(this)||this;return n.counter=255,n.switch=!1,n}return h(n,t),n.prototype.init=function(){var t=this;return Promise.all([new Promise((function(n,e){t.logo=new Image,t.logo.src="assets/images/logo.png",t.logo.onload=function(){n(!0)}}))])},n.prototype.update=function(t){return n=this,e=void 0,i=function(){var n;return function(t,n){var e,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(t,a)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(e){switch(e.label){case 0:return this.switch?[3,1]:(this.counter-=10*t,this.counter<=0&&(this.switch=!0),[3,3]);case 1:return this.counter+=10*t,this.counter>=255?[4,(n=new u).init()]:[3,3];case 2:e.sent(),l.states.pop(),l.states.push(n),e.label=3;case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(t,r){function a(t){try{u(i.next(t))}catch(t){r(t)}}function s(t){try{u(i.throw(t))}catch(t){r(t)}}function u(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}u((i=i.apply(n,e||[])).next())}));var n,e,o,i},n.prototype.render=function(t){var n=t.getContext("2d"),e=t.width/2-this.logo.width/2,o=t.height/2-this.logo.height/2;n.imageSmoothingEnabled=!1;for(var i=0;i<40;i++)n.beginPath(),n.lineWidth=.25,n.strokeStyle="#58aff3",n.moveTo(0,12*i),n.lineTo(t.width,12*i),n.stroke();if(n.beginPath(),n.lineWidth=.25,n.strokeStyle="rgba(225, 0, 0, 1)",n.moveTo(24,0),n.lineTo(24,t.height),n.stroke(),n.drawImage(this.logo,0,0,this.logo.width,this.logo.height,e,o,this.logo.width,this.logo.height),n.fillStyle="rgba(229,229,229, ".concat(this.counter/225,")"),n.fillRect(0,0,t.width,t.height),this.counter>0){for(i=0;i<40;i++)n.beginPath(),n.lineWidth=.25,n.strokeStyle="rgba(88, 175, 243, ".concat(this.counter/225,")"),n.moveTo(0,12*i),n.lineTo(t.width,12*i),n.stroke();n.beginPath(),n.lineWidth=.25,n.strokeStyle="rgba(225, 0, 0, ".concat(this.counter/225,")"),n.moveTo(24,0),n.lineTo(24,t.height),n.stroke()}},n}(t);const l=function(){function t(n){t.canvas=n,this.init=this.init.bind(this),this.loop=this.loop.bind(this)}return t.prototype.init=function(){return n=this,e=void 0,i=function(){var n;return function(t,n){var e,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(t,a)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(e){switch(e.label){case 0:return document.addEventListener("mousemove",(function(n){var e=t.canvas.getBoundingClientRect();t.mouse_x=n.pageX-e.left,t.mouse_y=n.pageY-e.top})),document.addEventListener("mousedown",(function(n){t.mouse_down=0==n.button})),t.states=[],[4,(n=new c).init()];case 1:return e.sent(),t.states.push(n),this.interval=setInterval(this.loop,33),[2]}}))},new((o=void 0)||(o=Promise))((function(t,r){function a(t){try{u(i.next(t))}catch(t){r(t)}}function s(t){try{u(i.throw(t))}catch(t){r(t)}}function u(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}u((i=i.apply(n,e||[])).next())}));var n,e,o,i},t.prototype.loop=function(){t.mustQuit&&clearInterval(this.interval);for(var n=0;n<t.states.length;n++)t.states[n].update(.33);var e=t.canvas.getContext("2d");for(e.fillStyle="#E5E5E5",e.fillRect(0,0,t.canvas.width,t.canvas.height),n=0;n<t.states.length;n++)t.states[n].render(t.canvas);t.mouse_down=!1},t.mustQuit=!1,t.canvas=null,t.mouse_down=!1,t}();window.addEventListener("load",(function(){return t=void 0,n=void 0,o=function(){var t,n;return function(t,n){var e,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(t,a)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,(function(e){switch(e.label){case 0:return[4,(t=new FontFace("PencilRegular","url(assets/fonts/Pencil-Regular.ttf)")).load()];case 1:return e.sent(),document.fonts.add(t),n=document.querySelector("canvas"),new l(n).init(),[2]}}))},new((e=void 0)||(e=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function s(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}u((o=o.apply(t,n||[])).next())}));var t,n,e,o}))})();