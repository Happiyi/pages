(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"0deb":function(t,e,a){t.exports=a.p+"img/qq_logo.png"},"28e3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"projects"},t._l(t.projectsData,(function(t,e){return a("ProjectsCard",{key:e,attrs:{name:t.name,"image-src":t.imageSrc,about:t.about,"git-hub":t.gitHub,"active-site":t.activeSite}})})),1)},r=[],o=a("c34c"),c=a.n(o),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projectsCard"},[a("h3",[t._v(t._s(t.name))]),a("img",{attrs:{src:t.getImageURL(t.imageSrc),alt:t.name+" Image"}}),a("p",{staticClass:"about"},[t._v(t._s(t.about))]),a("div",{staticClass:"code"},[a("a",{attrs:{href:t.activeSite,target:"_blank"}},[t._v("qq.com")])])])},s=[],u={name:"ProjectsCard",props:{name:{type:String,default:""},imageSrc:{type:String,default:""},about:{type:String,default:""},gitHub:{type:String,default:""},activeSite:{type:String,default:""}},methods:{getImageURL:function(t){if(t)return a("7584")("./".concat(t))}}},l=u,p=a("2877"),m=Object(p["a"])(l,i,s,!1,null,null,null),g=m.exports,f={name:"Projects",components:{ProjectsCard:g},data:function(){return{projectsData:c.a}},mounted:function(){}},d=f,v=Object(p["a"])(d,n,r,!1,null,null,null);e["default"]=v.exports},7584:function(t,e,a){var n={"./qq_logo.png":"0deb"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="7584"},c34c:function(t,e){t.exports=[{name:"fast vue",imageSrc:"qq_logo.png",about:"a demo",activeSite:"https://www.qq.com/"}]}}]);
//# sourceMappingURL=projects.js.map