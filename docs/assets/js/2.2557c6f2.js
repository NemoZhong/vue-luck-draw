(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{299:function(t,i,e){"use strict";var n=e(165),r=e(164),a=e(5),s=e(23),o=e(97),u=e(166),c=e(12),h=e(167),l=e(66),f=e(1),d=[].push,g=Math.min,p=!f((function(){return!RegExp(4294967295,"y")}));n("split",2,(function(t,i,e){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n=String(s(this)),a=void 0===e?4294967295:e>>>0;if(0===a)return[];if(void 0===t)return[n];if(!r(t))return i.call(n,t,a);for(var o,u,c,h=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,p=new RegExp(t.source,f+"g");(o=l.call(p,n))&&!((u=p.lastIndex)>g&&(h.push(n.slice(g,o.index)),o.length>1&&o.index<n.length&&d.apply(h,o.slice(1)),c=o[0].length,g=u,h.length>=a));)p.lastIndex===o.index&&p.lastIndex++;return g===n.length?!c&&p.test("")||h.push(""):h.push(n.slice(g)),h.length>a?h.slice(0,a):h}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,e){var r=s(this),a=null==i?void 0:i[t];return void 0!==a?a.call(i,r,e):n.call(String(r),i,e)},function(t,r){var s=e(n,t,this,r,n!==i);if(s.done)return s.value;var l=a(t),f=String(this),d=o(l,RegExp),m=l.unicode,v=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(p?"y":"g"),b=new d(p?l:"^(?:"+l.source+")",v),w=void 0===r?4294967295:r>>>0;if(0===w)return[];if(0===f.length)return null===h(b,f)?[f]:[];for(var y=0,z=0,O=[];z<f.length;){b.lastIndex=p?z:0;var x,R=h(b,p?f:f.slice(z));if(null===R||(x=g(c(b.lastIndex+(p?0:z)),f.length))===y)z=u(f,z,m);else{if(O.push(f.slice(y,z)),O.length===w)return O;for(var j=1;j<=R.length-1;j++)if(O.push(R[j]),O.length===w)return O;z=y=x}}return O.push(f.slice(y)),O}]}),!p)},300:function(t,i){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},301:function(t,i,e){"use strict";var n=e(0),r=e(302).trim;n({target:"String",proto:!0,forced:e(303)("trim")},{trim:function(){return r(this)}})},302:function(t,i,e){var n=e(23),r="["+e(300)+"]",a=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),o=function(t){return function(i){var e=String(n(i));return 1&t&&(e=e.replace(a,"")),2&t&&(e=e.replace(s,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},303:function(t,i,e){var n=e(1),r=e(300);t.exports=function(t){return n((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},304:function(t,i,e){"use strict";var n=e(0),r=e(28).find,a=e(94),s=e(17),o=!0,u=s("find");"find"in[]&&Array(1).find((function(){o=!1})),n({target:"Array",proto:!0,forced:o||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},305:function(t,i,e){var n=e(0),r=e(325),a=e(94);n({target:"Array",proto:!0},{fill:r}),a("fill")},325:function(t,i,e){"use strict";var n=e(10),r=e(98),a=e(12);t.exports=function(t){for(var i=n(this),e=a(i.length),s=arguments.length,o=r(s>1?arguments[1]:void 0,e),u=s>2?arguments[2]:void 0,c=void 0===u?e:r(u,e);c>o;)i[o++]=t;return i}},326:function(t,i,e){var n=e(0),r=e(1),a=e(13),s=e(25).f,o=e(7),u=r((function(){s(1)}));n({target:"Object",stat:!0,forced:!o||u,sham:!o},{getOwnPropertyDescriptor:function(t,i){return s(a(t),i)}})},327:function(t,i,e){"use strict";e.d(i,"e",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"b",(function(){return s})),e.d(i,"a",(function(){return o})),e.d(i,"f",(function(){return u})),e.d(i,"d",(function(){return c}));e(305),e(161),e(64),e(163),e(42),e(160),e(9),e(41),e(96),e(162),e(65),e(299),e(301);var n=e(29),r=function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),n=1;n<i;n++)e[n-1]=arguments[n];return e.some((function(i){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()===i}))},a=function(t){return r(t,"number")?t:r(t,"string")?t.includes("%")?t.slice(0,-1)/100:~~t.replace(/px/g,""):0},s=function(t){return Math.PI/180*t},o=function(t){var i=t.padding.replace(/px/g,"").split(" ").map((function(t){return~~t}))||[0],e=0,n=0,a=0,s=0;switch(i.length){case 1:e=n=a=s=i[0];break;case 2:e=n=i[0],a=s=i[1];break;case 3:e=i[0],a=s=i[1],n=i[2];break;default:e=i[0],n=i[1],a=i[2],s=i[3]}var o={paddingTop:e,paddingBottom:n,paddingLeft:a,paddingRight:s};for(var u in o)o[u]=t.hasOwnProperty(u)&&r(t[u],"string","number")?~~String(t[u]).replace(/px/g,""):o[u];return[e,n,a,s]},u=function(t,i,e,n,r,a,s){var o=Math.min(n,r);a>o/2&&(a=o/2),t.beginPath(),t.fillStyle=s,t.moveTo(i+a,e),t.lineTo(i+a,e),t.lineTo(i+n-a,e),t.arcTo(i+n,e,i+n,e+a,a),t.lineTo(i+n,e+r-a),t.arcTo(i+n,e+r,i+n-a,e+r,a),t.lineTo(i+a,e+r),t.arcTo(i,e+r,i,e+r-a,a),t.lineTo(i,e+a),t.arcTo(i,e,i+a,e,a),t.closePath(),t.fill()},c=function(t,i,e,r,a,s){var o,u=/linear-gradient\((.+)\)/.exec(s)[1].split(",").map((function(t){return t.trim()})),c=u.shift();if(c.includes("deg")){var h=function(t){return Math.tan(t/180*Math.PI)};(c=c.slice(0,-3)%360)>=0&&c<45?o=[i,e+a,i+r,e+a-r*h(c-0)]:c>=45&&c<90?o=[i,e+a,i+r-a*h(c-45),e]:c>=90&&c<135?o=[i+r,e+a,i+r-a*h(c-90),e]:c>=135&&c<180?o=[i+r,e+a,i,e+r*h(c-135)]:c>=180&&c<225?o=[i+r,e,i,e+r*h(c-180)]:c>=225&&c<270?o=[i+r,e,i+a*h(c-225),e+a]:c>=270&&c<315?o=[i,e,i+a*h(c-270),e+a]:c>=315&&c<360&&(o=[i,e,i+r,e+a-r*h(c-315)])}else c.includes("top")?o=[i,e+a,i,e]:c.includes("bottom")?o=[i,e,i,e+a]:c.includes("left")?o=[i+r,e,i,e]:c.includes("right")&&(o=[i,e,i+r,e]);var l=t.createLinearGradient.apply(t,Object(n.a)(o.map((function(t){return t>>0}))));return u.reduce((function(t,i,e){var r=i.split(" ");return 1===r.length?t.addColorStop(e,r[0]):2===r.length&&t.addColorStop.apply(t,Object(n.a)(r)),t}),l)}},338:function(t,i,e){"use strict";e.d(i,"a",(function(){return a}));e(43),e(24),e(92),e(326),e(171),e(95),e(93);function n(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function r(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?r(Object(e),!0).forEach((function(i){n(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}},343:function(t,i,e){"use strict";e(168),e(305),e(304),e(92),e(161),e(64),e(163),e(42),e(41),e(162),e(65),e(299),e(93);var n=e(338),r=e(29),a=e(327),s={props:{blocks:{type:Array,default:function(){return[]}},prizes:{type:Array,default:function(){return[]}},buttons:{type:Array,default:function(){return[]}},defaultStyle:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null,canPlay:!0,speed:0,prizeFlag:void 0,animationId:null,Radius:0,prizeDeg:360,prizeRadian:0,prizeRadius:0,maxBtnRadius:0,rotateDeg:0,prizeImgs:[],btnImgs:[]}},computed:{_defaultStyle:function(){var t={fontSize:"18px",fontColor:"#000",fontStyle:"sans-serif, STHeiti, SimHei",background:"#fff",prizeGutter:"0px"};for(var i in this.defaultStyle)t[i]=this.defaultStyle[i];return t.lineHeight||(t.lineHeight=t.fontSize),t}},watch:{prizes:{handler:function(t,i){var e=this,n=[];return i?t&&t.forEach((function(t,r){var a=[],s=i[r];s?t.imgs&&t.imgs.forEach((function(t,i){var n=s.imgs[i];n&&e.prizeImgs[r][i]?t.src!==n.src&&(a[i]=t):a[i]=t})):a=t.imgs,n[r]=a})):n=t.map((function(t){return t.imgs})),this.init(n)},deep:!0},buttons:{handler:function(t,i){var e=this,n=[];return i?t&&t.forEach((function(t,r){var a=[],s=i[r];s&&s.imgs?t.imgs&&t.imgs.forEach((function(t,i){var n=s.imgs[i];n&&e.btnImgs[r][i]?t.src!==n.src&&(a[i]=t):a[i]=t})):a=t.imgs,n[r]=a})):n=t.map((function(t){return t.imgs})),this.init([].concat(Object(r.a)(new Array(this.prizes.length).fill()),Object(r.a)(n)))},deep:!0}},mounted:function(){var t;this.dpr=window.devicePixelRatio||2;var i=[];this.prizes&&(i=this.prizes.map((function(t){return t.imgs}))),this.buttons&&(t=i).push.apply(t,Object(r.a)(this.buttons.map((function(t){return t.imgs})))),this.init(i),window.addEventListener("resize",this.init.bind(this))},methods:{init:function(t){var i=this,e=this.dpr,n=this.$refs.luckDraw;if(!n)return!1;var r=this.$refs.luckDraw.childNodes[0];this.ctx=r.getContext("2d");var s=this.ctx;r.width=r.height=n.offsetWidth*e,this.Radius=r.width/2;var o=function(t){return(t*e-t)/(t*e)*(e/2)*100};r.style="transform: scale(".concat(1/e,") translate(\n        ").concat(-o(this.Radius),"%,\n        ").concat(-o(this.Radius),"%\n      )"),s.translate(this.Radius,this.Radius);var u=function(){i.draw(),r.addEventListener("click",(function(t){if(s.beginPath(),s.arc(0,0,i.maxBtnRadius,0,2*Math.PI,!1),!s.isPointInPath(t.offsetX,t.offsetY))return!1;i.$emit("start",t)}))},c=0,h=0;Object(a.e)(t,"array")&&(this.draw(),t.forEach((function(t,e){if(!t)return!1;t.forEach((function(t,n){h++,i.loadAndCacheImg(e,n,(function(){c++,h===c&&u.call(i)}))}))}))),h||u.call(this)},loadAndCacheImg:function(t,i,e){var n=this,r=t<this.prizes.length,a=r?"prizes":"buttons",s=r?"prizeImgs":"btnImgs";t=r?t:t-this.prizes.length;var o=this[a][t];if(!o)return!1;var u=o.imgs[i];if(!u)return!1;var c=new Image;this[s][t]||(this[s][t]=[]),this[s][t][i]={img:c},c.src=u.src,c.onload=function(){var a=n[s][t][i];if(!a)return!1;var h=r?n.prizeRadian*n.prizeRadius:2*n.getHeight(o.radius),l=r?n.prizeRadius-n.maxBtnRadius:2*n.getHeight(o.radius);u.width&&u.height?(a.trueWidth=n.getWidth(u.width,h),a.trueHeight=n.getHeight(u.height,l)):u.width&&!u.height?(a.trueWidth=n.getWidth(u.width,h),a.trueHeight=c.height*(a.trueWidth/c.width)):!u.width&&u.height?(a.trueHeight=n.getHeight(u.height,l),a.trueWidth=c.width*(a.trueHeight/c.height)):(a.trueWidth=c.width,a.trueHeight=c.height),e.call(n)}},draw:function(){var t=this,i=this.ctx,e=this.dpr,n=this._defaultStyle;i.clearRect(2*-this.Radius,2*-this.Radius,2*this.Radius,2*this.Radius),this.prizeRadius=this.blocks.reduce((function(t,n){return i.beginPath(),i.fillStyle=n.background,i.arc(0,0,t,0,2*Math.PI,!1),i.fill(),t-Object(a.c)(n.padding.split(" ")[0])*e}),this.Radius),this.prizeDeg=360/this.prizes.length,this.prizeRadian=Object(a.b)(this.prizeDeg);var r=Object(a.b)(-90+this.rotateDeg);this.prizes.forEach((function(e,s){var o=r+s*t.prizeRadian;i.beginPath(),i.fillStyle=e.background||n.background,i.moveTo(0,0),i.arc(0,0,t.prizeRadius,o-t.prizeRadian/2,o+t.prizeRadian/2,!1),i.fill();var u=Math.cos(o)*t.prizeRadius,c=Math.sin(o)*t.prizeRadius;i.translate(u,c),i.rotate(o+Object(a.b)(90)),e.imgs&&e.imgs.forEach((function(e,n){if(!t.prizeImgs[s])return!1;var r=t.prizeImgs[s][n];r&&i.drawImage(r.img,t.getOffsetX(r.trueWidth),t.getHeight(e.top),r.trueWidth,r.trueHeight)})),t.drawFont(e.fonts),i.rotate(Object(a.b)(360)-o-Object(a.b)(90)),i.translate(-u,-c)})),this.buttons.forEach((function(e,n){var r=t.getHeight(e.radius);t.maxBtnRadius=Math.max(t.maxBtnRadius,r),i.beginPath(),i.fillStyle=e.background,i.arc(0,0,r,0,2*Math.PI,!1),i.fill(),e.pointer&&(i.beginPath(),i.fillStyle=e.background,i.moveTo(-r,0),i.lineTo(r,0),i.lineTo(0,2*-r),i.closePath(),i.fill()),e.imgs&&e.imgs.forEach((function(e,r){if(!t.btnImgs[n])return!1;var a=t.btnImgs[n][r];a&&i.drawImage(a.img,t.getOffsetX(a.trueWidth),t.getHeight(e.top),a.trueWidth,a.trueHeight)})),t.drawFont(e.fonts)}))},drawFont:function(t){var i=this;if(!t)return!1;var e=this.ctx,n=this.dpr,r=this._defaultStyle;t.forEach((function(t){String(t.text).split("\n").forEach((function(s,o){e.fillStyle=t.fontColor||r.fontColor,e.font="".concat(Object(a.c)(t.fontSize||r.fontSize)*n,"px ").concat(t.fontStyle||r.fontStyle),e.fillText(s,i.getOffsetX(e.measureText(s).width),i.getHeight(t.top)+(o+1)*Object(a.c)(t.lineHeight||r.lineHeight)*n)}))}))},play:function(){if(!this.canPlay)return!1;cancelAnimationFrame(this.animationId),this.prizeFlag=void 0,this.canPlay=!1,this.speed=0,this.run()},run:function(){if(void 0!==this.prizeFlag&&this.rotateDeg%360>this.prizeFlag*this.prizeDeg&&this.rotateDeg%360<this.prizeFlag*this.prizeDeg+this.prizeDeg)return this.slowDown();this.speed<20&&(this.speed+=.1),this.rotateDeg+=this.speed,this.draw(),this.animationId=window.requestAnimationFrame(this.run)},stop:function(t){this.prizeFlag=t},slowDown:function(){var t=this;if(this.speed<1){var i=360-this.prizeFlag*this.prizeDeg;if(Math.abs(this.rotateDeg%360-i)<=1)return cancelAnimationFrame(this.animationId),this.speed=0,this.canPlay=!0,this.$emit("end",Object(n.a)({},this.prizes.find((function(i,e){return e===t.prizeFlag})))),!1}else this.speed<2?this.speed-=.02:this.speed-=.05;this.rotateDeg+=this.speed,this.draw(),this.animationId=window.requestAnimationFrame(this.slowDown)},getWidth:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.prizeRadian*this.prizeRadius;return Object(a.e)(t,"number")?t*this.dpr:Object(a.e)(t,"string")?t.includes("%")?t.slice(0,-1)/100*i:t.replace(/px/g,"")*this.dpr:0},getHeight:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.prizeRadius;return Object(a.e)(t,"number")?t*this.dpr:Object(a.e)(t,"string")?t.includes("%")?t.slice(0,-1)/100*i:t.replace(/px/g,"")*this.dpr:0},getOffsetX:function(t){return-t/2}}},o=e(40),u=Object(o.a)(s,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{ref:"luckDraw",staticStyle:{overflow:"hidden"}},[i("canvas")])}),[],!1,null,null,null);i.a=u.exports}}]);