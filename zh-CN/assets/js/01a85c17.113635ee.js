"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13],{8665:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(7294),n=a(6010),r=a(2773),s=a(9960);const c="sidebar_a9qW",i="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",o="sidebarItem_CF0Q",g="sidebarItemLink_miNk",u="sidebarItemLinkActive_RRTD";var d=a(5999);function b(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))))))}function E(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},i&&l.createElement("aside",{className:"col col--3"},l.createElement(b,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(7294),n=a(8665),r=a(7774),s=a(650);const c="tag_Shcx";function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(r.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,s.PZ)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))}function o(e){const{tags:t,sidebar:a}=e,r=(0,s.MA)();return l.createElement(n.Z,{title:r,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},l.createElement("h1",null,r),l.createElement(m,{tags:Object.values(t)}))}},7774:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),n=a(6010),r=a(9960);const s="tag_hD8n",c="tagRegular_D6E_",i="tagWithCount_i0QQ";function m(e){const{permalink:t,name:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,{[c]:!m,[i]:m})},a,m&&l.createElement("span",null,m))}}}]);