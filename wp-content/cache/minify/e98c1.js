/* Do not modify this file directly. It is compiled from other files. */
/* global FB, jpfbembed */
!function(e){var t=function(){var e,t,n,d;"undefined"!=typeof FB&&FB.XFBML?FB.XFBML.parse():((e=document.createElement("div")).id="fb-root",document.getElementsByTagName("body")[0].appendChild(e),t="//connect.facebook.net/"+jpfbembed.locale+"/sdk.js#xfbml=1",jpfbembed.appid&&(t+="&appId="+jpfbembed.appid),t+="&version=v2.3",(n=document.createElement("script")).setAttribute("src",t),(d=document.querySelector("script")).parentNode.insertBefore(n,d))};e.fbAsyncInit=function(){FB.init({appId:jpfbembed.appid,version:"v2.3"}),FB.XFBML.parse()},"undefined"!=typeof infiniteScroll&&document.body.addEventListener("post-load",t),t()}(this);
;!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){var n=function(){var t,e,n,o,r={rootMargin:"200px 0px",threshold:.01},i=0;c();var s=document.querySelector("body");function c(){if(t=document.querySelectorAll("img.jetpack-lazy-image:not(.jetpack-lazy-image--handled)"),i=t.length,e&&e.disconnect(),"IntersectionObserver"in window)for(e=new IntersectionObserver(a,r),o=0;o<t.length;o++)(n=t[o]).getAttribute("data-lazy-loaded")||e.observe(n);else!function(t){var e;for(e=0;e<t.length;e++){h(t[e])}}(t)}function a(t){var n;for(0===i&&e.disconnect(),n=0;n<t.length;n++){var o=t[n];o.intersectionRatio>0&&(i--,e.unobserve(o.target),h(o.target))}}function h(t){var e,n,o;if(!(!t instanceof HTMLImageElement)){e=t.getAttribute("data-lazy-srcset"),n=t.getAttribute("data-lazy-sizes"),t.removeAttribute("data-lazy-srcset"),t.removeAttribute("data-lazy-sizes"),t.removeAttribute("data-lazy-src"),t.classList.add("jetpack-lazy-image--handled"),t.setAttribute("data-lazy-loaded",1),n&&t.setAttribute("sizes",n),e?t.setAttribute("srcset",e):t.removeAttribute("srcset");try{o=new Event("jetpack-lazy-loaded-image",{bubbles:!0,cancelable:!0})}catch(t){(o=document.createEvent("Event")).initEvent("jetpack-lazy-loaded-image",!0,!0)}t.dispatchEvent(o)}}s&&(s.addEventListener("is.post-load",c),s.addEventListener("jetpack-lazy-images-load",c))};!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},r.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(t,"resize",this._checkForIntersections,!0),i(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),n=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(r){var i=r.element,s=c(i),a=this._rootContainsTarget(i),h=r.entry,u=e&&a&&this._computeTargetAndRootIntersection(i,n),l=r.entry=new o({time:t.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:n,intersectionRect:u});h?e&&a?this._hasCrossedThreshold(h,l)&&this._queuedEntries.push(l):h&&h.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(n,o){if("none"!=t.getComputedStyle(n).display){for(var r,i,s,a,u,l,d,p,f=c(n),g=h(n),v=!1;!v;){var m=null,b=1==g.nodeType?t.getComputedStyle(g):{};if("none"==b.display)return;if(g==this.root||g==e?(v=!0,m=o):g!=e.body&&g!=e.documentElement&&"visible"!=b.overflow&&(m=c(g)),m&&(r=m,i=f,s=void 0,a=void 0,u=void 0,l=void 0,d=void 0,p=void 0,s=Math.max(r.top,i.top),a=Math.min(r.bottom,i.bottom),u=Math.max(r.left,i.left),l=Math.min(r.right,i.right),p=a-s,!(f=(d=l-u)>=0&&p>=0&&{top:s,bottom:a,left:u,right:l,width:d,height:p})))break;g=h(g)}return f}},r.prototype._getRootRect=function(){var t;if(this.root)t=c(this.root);else{var n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},r.prototype._rootIsInDom=function(){return!this.root||a(e,this.root)},r.prototype._rootContainsTarget=function(t){return a(this.root||e,t)},r.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},r.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},t.IntersectionObserver=r,t.IntersectionObserverEntry=o}function o(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?r/n:this.isIntersecting?1:0}function r(t,e){var n,o,r,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){n(),r=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function i(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,e){for(var n=e;n;){if(n==t)return!0;n=h(n)}return!1}function h(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document),"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)}]);
;/*! This file is auto-generated */
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);
;/* Do not modify this file directly. It is compiled from other files. */
/**
 The MIT License

 Copyright (c) 2010 Daniel Park (http://metaweb.com, http://postmessage.freebaseapps.com)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 **/
var NO_JQUERY={};!function(e,t,a){if(!("console"in e)){var n=e.console={};n.log=n.warn=n.error=n.debug=function(){}}t===NO_JQUERY&&(t={fn:{},extend:function(){for(var e=arguments[0],t=1,a=arguments.length;t<a;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}}),t.fn.pm=function(){return console.log("usage: \nto send:    $.pm(options)\nto receive: $.pm.bind(type, fn, [origin])"),this},t.pm=e.pm=function(e){r.send(e)},t.pm.bind=e.pm.bind=function(e,t,a,n,s){r.bind(e,t,a,n,!0===s)},t.pm.unbind=e.pm.unbind=function(e,t){r.unbind(e,t)},t.pm.origin=e.pm.origin=null,t.pm.poll=e.pm.poll=200;var r={send:function(e){var a=t.extend({},r.defaults,e),n=a.target;if(a.target)if(a.type){var s={data:a.data,type:a.type};a.success&&(s.callback=r._callback(a.success)),a.error&&(s.errback=r._callback(a.error)),"postMessage"in n&&!a.hash?(r._bind(),n.postMessage(JSON.stringify(s),a.origin||"*")):(r.hash._bind(),r.hash.send(a,s))}else console.warn("postmessage type required");else console.warn("postmessage target window required")},bind:function(e,t,a,n,s){r._replyBind(e,t,a,n,s)},_replyBind:function(a,n,s,o,i){"postMessage"in e&&!o?r._bind():r.hash._bind();var u=r.data("listeners.postmessage");u||(u={},r.data("listeners.postmessage",u));var c=u[a];c||(c=[],u[a]=c),c.push({fn:n,callback:i,origin:s||t.pm.origin})},unbind:function(e,t){var a=r.data("listeners.postmessage");if(a)if(e)if(t){var n=a[e];if(n){for(var s=[],o=0,i=n.length;o<i;o++){var u=n[o];u.fn!==t&&s.push(u)}a[e]=s}}else delete a[e];else for(var o in a)delete a[o]},data:function(e,t){return void 0===t?r._data[e]:(r._data[e]=t,t)},_data:{},_CHARS:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),_random:function(){for(var e=[],t=0;t<32;t++)e[t]=r._CHARS[0|32*Math.random()];return e.join("")},_callback:function(e){var t=r.data("callbacks.postmessage");t||(t={},r.data("callbacks.postmessage",t));var a=r._random();return t[a]=e,a},_bind:function(){r.data("listening.postmessage")||(e.addEventListener?e.addEventListener("message",r._dispatch,!1):e.attachEvent&&e.attachEvent("onmessage",r._dispatch),r.data("listening.postmessage",1))},_dispatch:function(e){try{var t=JSON.parse(e.data)}catch(e){return}if(t.type){var a=(r.data("callbacks.postmessage")||{})[t.type];if(a)a(t.data);else for(var n=(r.data("listeners.postmessage")||{})[t.type]||[],s=0,o=n.length;s<o;s++){var i=n[s];if(i.origin&&"*"!==i.origin&&e.origin!==i.origin){if(console.warn("postmessage message origin mismatch",e.origin,i.origin),t.errback){var u={message:"postmessage origin mismatch",origin:[e.origin,i.origin]};r.send({target:e.source,data:u,type:t.errback})}}else try{i.callback?i.fn(t.data,c,e):c(i.fn(t.data,e))}catch(a){if(!t.errback)throw a;r.send({target:e.source,data:a,type:t.errback})}function c(a){t.callback&&r.send({target:e.source,data:a,type:t.callback})}}}}};r.hash={send:function(t,a){var n=t.target,s=t.url;if(s){s=r.hash._url(s);var o,i=r.hash._url(e.location.href);if(e==n.parent)o="parent";else try{for(var u=0,c=parent.frames.length;u<c;u++){if(parent.frames[u]==e){o=u;break}}}catch(t){o=e.name}if(null!=o){var l={"x-requested-with":"postmessage",source:{name:o,url:i},postmessage:a},f="#x-postmessage-id="+r._random();n.location=s+f+encodeURIComponent(JSON.stringify(l))}else console.warn("postmessage windows must be direct parent/child windows and the child must be available through the parent window.frames list")}else console.warn("postmessage target window url is required")},_regex:/^\#x\-postmessage\-id\=(\w{32})/,_regex_len:"#x-postmessage-id=".length+32,_bind:function(){r.data("polling.postmessage")||(setInterval(function(){var t=""+e.location.hash,a=r.hash._regex.exec(t);if(a){var n=a[1];r.hash._last!==n&&(r.hash._last=n,r.hash._dispatch(t.substring(r.hash._regex_len)))}},t.pm.poll||200),r.data("polling.postmessage",1))},_dispatch:function(t){if(t){try{if(!("postmessage"===(t=JSON.parse(decodeURIComponent(t)))["x-requested-with"]&&t.source&&null!=t.source.name&&t.source.url&&t.postmessage))return}catch(e){return}var a=t.postmessage,n=(r.data("callbacks.postmessage")||{})[a.type];if(n)n(a.data);else{var s;s="parent"===t.source.name?e.parent:e.frames[t.source.name];for(var o=(r.data("listeners.postmessage")||{})[a.type]||[],i=0,u=o.length;i<u;i++){var c=o[i];if(c.origin){var l=/https?\:\/\/[^\/]*/.exec(t.source.url)[0];if("*"!==c.origin&&l!==c.origin){if(console.warn("postmessage message origin mismatch",l,c.origin),a.errback){var f={message:"postmessage origin mismatch",origin:[l,c.origin]};r.send({target:s,data:f,type:a.errback,hash:!0,url:t.source.url})}continue}}function p(e){a.callback&&r.send({target:s,data:e,type:a.callback,hash:!0,url:t.source.url})}try{c.callback?c.fn(a.data,p):p(c.fn(a.data))}catch(e){if(!a.errback)throw e;r.send({target:s,data:e,type:a.errback,hash:!0,url:t.source.url})}}}}},_url:function(e){return(""+e).replace(/#.*$/,"")}},t.extend(r,{defaults:{target:null,url:null,type:null,data:null,success:null,error:null,origin:"*",hash:!1}})}(this,"undefined"==typeof jQuery?NO_JQUERY:jQuery),"JSON"in window&&window.JSON||(JSON={}),function(){function f(e){return e<10?"0"+e:e}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(e){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var a,n,r,s,o,i=gap,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(u)){for(s=u.length,a=0;a<s;a+=1)o[a]=str(a,u)||"null";return r=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+i+"]":"["+o.join(",")+"]",gap=i,r}if(rep&&"object"==typeof rep)for(s=rep.length,a=0;a<s;a+=1)"string"==typeof(n=rep[a])&&(r=str(n,u))&&o.push(quote(n)+(gap?": ":":")+r);else for(n in u)Object.hasOwnProperty.call(u,n)&&(r=str(n,u))&&o.push(quote(n)+(gap?": ":":")+r);return r=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+i+"}":"{"+o.join(",")+"}",gap=i,r}}"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,a){var n;if(gap="",indent="","number"==typeof a)for(n=0;n<a;n+=1)indent+=" ";else"string"==typeof a&&(indent=a);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(e,t){var a,n,r=e[t];if(r&&"object"==typeof r)for(a in r)Object.hasOwnProperty.call(r,a)&&(void 0!==(n=walk(r,a))?r[a]=n:delete r[a]);return reviver.call(e,t,r)}if(cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();
;/* Do not modify this file directly. It is compiled from other files. */
/* global Jetpack, JSON */
/**
 * Resizeable Iframes.
 *
 * Start listening to resize postMessage events for selected iframes:
 * $( selector ).Jetpack( 'resizeable' );
 * - OR -
 * Jetpack.resizeable( 'on', context );
 *
 * Resize selected iframes:
 * $( selector ).Jetpack( 'resizeable', 'resize', { width: 100, height: 200 } );
 * - OR -
 * Jetpack.resizeable( 'resize', { width: 100, height: 200 }, context );
 *
 * Stop listening to resize postMessage events for selected iframes:
 * $( selector ).Jetpack( 'resizeable', 'off' );
 * - OR -
 * Jetpack.resizeable( 'off', context );
 *
 * Stop listening to all resize postMessage events:
 * Jetpack.resizeable( 'off' );
 */
!function(e){var t,a,i,n,r=!1,o=[],s=!1;void 0===window.Jetpack&&(window.Jetpack={getTarget:function(t){return this instanceof jQuery?t?this.filter(t):this:t?e(t):t}}),void 0===e.fn.Jetpack&&(e.fn.Jetpack=function(t){if("function"==typeof Jetpack[t])return Jetpack[t].apply(this,Array.prototype.slice.call(arguments,1));e.error('Namespace "'+t+'" does not exist on jQuery.Jetpack')}),"function"==typeof window.postMessage?(t=function(e){return e.match(/^https?:\/\//)||(e=document.location.href),e.split("/").slice(0,3).join("/")},a=function(){r=!0,e(window).on("message.JetpackResizeableIframe",function(t){var a,i=t.originalEvent;if(-1!==e.inArray(i.origin,o)){if("object"==typeof i.data)a=i.data.data;else try{a=JSON.parse(i.data)}catch(e){a=!1}a.data&&void 0!==(a=a.data).action&&"resize"===a.action&&s.filter(function(){return void 0!==a.name?this.name===a.name:i.source===this.contentWindow}).first().Jetpack("resizeable","resize",a)}})},i=function(){r=!1,e(window).off("message.JetpackResizeableIframe"),o=[],e(".jetpack-resizeable").removeClass("jetpack-resizeable"),s=!1},n={on:function(i){var n=Jetpack.getTarget.call(this,i);return r||a(),n.each(function(){o.push(t(e(this).attr("src")))}).addClass("jetpack-resizeable"),s=e(".jetpack-resizeable"),n},off:function(a){var n=Jetpack.getTarget.call(this,a);return void 0===n?(i(),n):(n.each(function(){var a=t(e(this).attr("src")),i=e.inArray(a,o);-1!==i&&o.splice(i,1)}).removeClass("jetpack-resizeable"),s=e(".jetpack-resizeable"),n)},resize:function(t,a){var i=Jetpack.getTarget.call(this,a);return e.each(["width","height"],function(e,a){var n,r=0;void 0!==t[a]&&(r=parseInt(t[a],10)),0!==r&&(i[a](r),(n=i.parent()).hasClass("slim-likes-widget")&&n[a](r))}),i}},e.extend(window.Jetpack,{resizeable:function(t){return n[t]?n[t].apply(this,Array.prototype.slice.call(arguments,1)):t?void e.error("Method "+t+" does not exist on Jetpack.resizeable"):n.on.apply(this)}})):e.extend(window.Jetpack,{resizeable:function(){e.error("Browser does not support window.postMessage")}})}(jQuery);
;/* Do not modify this file directly. It is compiled from other files. */
/* global pm, wpcom_reblog, JSON */
var jetpackLikesWidgetBatch=[],jetpackLikesMasterReady=!1,jetpackLikesLookAhead=2e3,jetpackCommentLikesLoadedWidgets=[];function JetpackLikesPostMessage(e,t){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return}pm({target:t,type:"likesMessage",data:e,origin:"*"})}function JetpackLikesBatchHandler(){var e=[];jQuery("div.jetpack-likes-widget-unloaded").each(function(){if(!(jetpackLikesWidgetBatch.indexOf(this.id)>-1)&&jetpackIsScrolledIntoView(this)){jetpackLikesWidgetBatch.push(this.id);var t,i=/like-(post|comment)-wrapper-(\d+)-(\d+)-(\w+)/.exec(this.id);i&&5===i.length&&(t={blog_id:i[2],width:this.width},"post"===i[1]?t.post_id=i[3]:"comment"===i[1]&&(t.comment_id=i[3]),t.obj_id=i[4],e.push(t))}}),e.length>0&&JetpackLikesPostMessage({event:"initialBatch",requests:e},window.frames["likes-master"])}function JetpackLikesMessageListener(e,t){var i,a,s,d,o,r;if(void 0!==e.event&&("https://widgets.wp.com","https://widgets.wp.com"===t.origin))switch(e.event){case"masterReady":jQuery(document).ready(function(){jetpackLikesMasterReady=!0;var e={event:"injectStyles"},t=jQuery(".sd-text-color"),i=jQuery(".sd-link-color");jQuery("iframe.admin-bar-likes-widget").length>0&&(JetpackLikesPostMessage({event:"adminBarEnabled"},window.frames["likes-master"]),e.adminBarStyles={background:jQuery("#wpadminbar .quicklinks li#wp-admin-bar-wpl-like > a").css("background"),isRtl:"rtl"===jQuery("#wpadminbar").css("direction")}),window.addEventListener||jQuery("#wp-admin-bar-admin-bar-likes-widget").hide(),e.textStyles={color:t.css("color"),fontFamily:t.css("font-family"),fontSize:t.css("font-size"),direction:t.css("direction"),fontWeight:t.css("font-weight"),fontStyle:t.css("font-style"),textDecoration:t.css("text-decoration")},e.linkStyles={color:i.css("color"),fontFamily:i.css("font-family"),fontSize:i.css("font-size"),textDecoration:i.css("text-decoration"),fontWeight:i.css("font-weight"),fontStyle:i.css("font-style")},JetpackLikesPostMessage(e,window.frames["likes-master"]),JetpackLikesBatchHandler()});break;case"showLikeWidget":case"showCommentLikeWidget":jQuery("#"+e.id+" .likes-widget-placeholder").fadeOut("fast");break;case"killCommentLikes":jQuery(".jetpack-comment-likes-widget-wrapper").remove();break;case"clickReblogFlair":wpcom_reblog.toggle_reblog_box_flair(e.obj_id);break;case"showOtherGravatars":i=jQuery("#likes-other-gravatars"),a=i.find("ul"),i.hide(),a.html(""),i.find(".likes-text span").text(e.total),jQuery.each(e.likers,function(e,t){var i;"http"===t.profile_URL.substr(0,4)&&((i=jQuery("<li><a><img /></a></li>")).addClass(t.css_class),i.find("a").attr({href:t.profile_URL,rel:"nofollow",target:"_parent"}).addClass("wpl-liker"),i.find("img").attr({src:t.avatar_URL,alt:t.name}).css({width:"30px",height:"30px",paddingRight:"3px"}),a.append(i))}),s=jQuery("body").find("[name='"+e.parent+"']").offset(),i.css("left",s.left+e.position.left-10+"px"),i.css("top",s.top+e.position.top-33+"px"),d=Math.floor(e.width/37),(o=37*Math.ceil(e.likers.length/d)+13)>204&&(o=204),i.css("height",o+"px"),i.css("width",37*d-7+"px"),a.css("width",37*d+"px"),i.fadeIn("slow"),(r=a[0].offsetWidth-a[0].clientWidth)>0&&(i.width(i.width()+r),a.width(a.width()+r))}}function JetpackLikesWidgetQueueHandler(){var e;if(jetpackLikesMasterReady){jetpackUnloadScrolledOutWidgets();var t=jetpackGetUnloadedWidgetsInView();t.length>0&&JetpackLikesBatchHandler();for(var i=0,a=t.length;i<=a-1;i++)(e=t[i].id)&&jetpackLoadLikeWidgetIframe(e)}else setTimeout(JetpackLikesWidgetQueueHandler,500)}function jetpackLoadLikeWidgetIframe(e){var t;if(void 0!==e){(t=jQuery("#"+e)).find("iframe").remove();var i=t.find(".likes-widget-placeholder");if(i.hasClass("post-likes-widget-placeholder")){var a=document.createElement("iframe");a.class="post-likes-widget jetpack-likes-widget",a.name=t.data("name"),a.src=t.data("src"),a.height="18px",a.width="200px",a.frameBorder="0",a.scrolling="no",t.hasClass("slim-likes-widget")?(a.height="22px",a.width="68px",a.scrolling="no"):(a.height="55px",a.width="100%"),i.after(a)}if(i.hasClass("comment-likes-widget-placeholder")){var s=document.createElement("iframe");s.class="comment-likes-widget-frame jetpack-likes-widget-frame",s.name=t.data("name"),s.src=t.data("src"),s.height="18px",s.width="100%",s.frameBorder="0",s.scrolling="no",t.find(".comment-like-feedback").after(s),jetpackCommentLikesLoadedWidgets.push(s)}t.removeClass("jetpack-likes-widget-unloaded").addClass("jetpack-likes-widget-loading"),t.find("iframe").load(function(e){var i=jQuery(e.target);JetpackLikesPostMessage({event:"loadLikeWidget",name:i.attr("name"),width:i.width()},window.frames["likes-master"]),t.removeClass("jetpack-likes-widget-loading").addClass("jetpack-likes-widget-loaded"),t.hasClass("slim-likes-widget")&&t.find("iframe").Jetpack("resizeable")})}}function jetpackGetUnloadedWidgetsInView(){return jQuery("div.jetpack-likes-widget-unloaded").filter(function(){return jetpackIsScrolledIntoView(this)})}function jetpackIsScrolledIntoView(e){var t=e.getBoundingClientRect().top,i=e.getBoundingClientRect().bottom;return t+jetpackLikesLookAhead>=0&&i<=window.innerHeight+jetpackLikesLookAhead}function jetpackUnloadScrolledOutWidgets(){for(var e=jetpackCommentLikesLoadedWidgets.length-1;e>=0;e--){var t=jetpackCommentLikesLoadedWidgets[e];if(!jetpackIsScrolledIntoView(t)){var i=jQuery(t).parent().parent();i.removeClass("jetpack-likes-widget-loaded jetpack-likes-widget-loading").addClass("jetpack-likes-widget-unloaded"),i.children(".comment-likes-widget-placeholder").fadeIn(),jetpackCommentLikesLoadedWidgets.splice(e,1),jQuery(t).remove()}}}pm.bind("likesMessage",JetpackLikesMessageListener),jQuery(document).click(function(e){var t=jQuery("#likes-other-gravatars");0===t.has(e.target).length&&t.fadeOut("slow")});var jetpackWidgetsDelayedExec=function(e,t){var i;return function(){i&&clearTimeout(i),i=setTimeout(t,e)}},jetpackOnScrollStopped=jetpackWidgetsDelayedExec(250,JetpackLikesWidgetQueueHandler);JetpackLikesWidgetQueueHandler(),window.addEventListener("scroll",jetpackOnScrollStopped,!0);