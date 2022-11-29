"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[950],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>s});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=o.createContext({}),p=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=p(t.components);return o.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=p(n),s=r,f=d["".concat(u,".").concat(s)]||d[s]||m[s]||i;return n?o.createElement(f,a(a({ref:e},l),{},{components:n})):o.createElement(f,a({ref:e},l))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},635:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={slug:"convert-emoji-character-to-unicode-number-in-javascript",title:"JavaScript\u8f6c\u6362emoji\u5b57\u7b26\u4e3aUnicode\u7f16\u7801",tags:["emoji"]},a="JavaScript\u8f6c\u6362emoji\u5b57\u7b26\u4e3aUnicode\u7f16\u7801",c={permalink:"/zh-CN/blog/convert-emoji-character-to-unicode-number-in-javascript",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2019-05-28-convert-emoji-character.mdx",title:"JavaScript\u8f6c\u6362emoji\u5b57\u7b26\u4e3aUnicode\u7f16\u7801",description:"String.prototype.codePointAt",date:"2019-05-28T00:00:00.000Z",formattedDate:"2019\u5e745\u670828\u65e5",tags:[{label:"emoji",permalink:"/zh-CN/blog/tags/emoji"}],readingTime:.795,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"convert-emoji-character-to-unicode-number-in-javascript",title:"JavaScript\u8f6c\u6362emoji\u5b57\u7b26\u4e3aUnicode\u7f16\u7801",tags:["emoji"]}},u={authorsImageUrls:[]},p=[{value:"String.prototype.codePointAt",id:"stringprototypecodepointat",level:2},{value:"String.fromCodePoint",id:"stringfromcodepoint",level:2},{value:"\u8f6c\u6362\u591a\u4e2aemoji",id:"\u8f6c\u6362\u591a\u4e2aemoji",level:2}],l={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"stringprototypecodepointat"},"String.prototype.codePointAt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\'\u2603\u2605\u2672\'.codePointAt(0);\n// output: "9731"\n\'\u2603\u2605\u2672\'.codePointAt(1);\n// output: "9733"\n\'\u2603\u2605\u2672\'.codePointAt(2);\n// output: "9842"\n\n"\ud83d\ude00".codePointAt(0);\n// output: "128512"\n"\ud83d\ude00".codePointAt(1);\n// output: "56832"\n"\ud83d\ude00".codePointAt(0).toString(16);\n// output: "1f600"\n\'\ud83d\ude00\'.length\n// output: "2"\n\n"\ud83c\uddfa\ud83c\uddf8".codePointAt(0);\n// output: "127482"\n"\ud83c\uddfa\ud83c\uddf8".codePointAt(1);\n// output: "56826"\n"\ud83c\uddfa\ud83c\uddf8".codePointAt(2);\n// output: "127480"\n"\ud83c\uddfa\ud83c\uddf8".codePointAt(3);\n// output: "56824"\n\'\ud83c\uddfa\ud83c\uddf8\'.length\n// output: "4"\n')),(0,r.kt)("h2",{id:"stringfromcodepoint"},"String.fromCodePoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'String.fromCodePoint(9731, 9733, 9842, 0x2F804);\n// output: "\u2603\u2605\u2672\u4f60"\n\nString.fromCodePoint(128512, 56832)\n// output: "\ud83d\ude00\\uDE00"\n\nString.fromCodePoint(128512)\n// output: "\ud83d\ude00"\n\nString.fromCodePoint("0x"+"1f600");\n// output: "\ud83d\ude00"\n\nString.fromCodePoint(127482,127480)\n// output: "\ud83c\uddfa\ud83c\uddf8"\n')),(0,r.kt)("h2",{id:"\u8f6c\u6362\u591a\u4e2aemoji"},"\u8f6c\u6362\u591a\u4e2aemoji"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[...'\u2603\u2605\u2672\u4f60\ud83d\ude00\ud83c\uddfa\ud83c\uddf8'].map((el)=>{return el.codePointAt(0);})\n// output: [9731, 9733, 9842, 20320, 128512, 127482, 127480]\n\nString.fromCodePoint(...[9731, 9733, 9842, 20320, 128512, 127482, 127480])\n// output: \"'\u2603\u2605\u2672\u4f60\ud83d\ude00\ud83c\uddfa\ud83c\uddf8'\"\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[...'\u2603\u2605\u2672\u4f60\ud83d\ude00\ud83c\uddfa\ud83c\uddf8'].map((el)=>{return `0x${el.codePointAt(0).toString(16)}`;})\n// output: ['0x2603', '0x2605', '0x2672', '0x4f60', '0x1f600', '0x1f1fa', '0x1f1f8']\n\nString.fromCodePoint(...['0x2603', '0x2605', '0x2672', '0x4f60', '0x1f600', '0x1f1fa', '0x1f1f8'])\n// output: '\u2603\u2605\u2672\u4f60\ud83d\ude00\ud83c\uddfa\ud83c\uddf8'\n")),(0,r.kt)("a",{href:"https://gadgets.gotomorrow.dev/zh-CN/unicode"},"\u5728\u7ebf-Unicode\u7f16\u7801/Unicode\u89e3\u7801/Emoji\u7f16\u7801/Emoji\u89e3\u7801"))}m.isMDXComponent=!0}}]);