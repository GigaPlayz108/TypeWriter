"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57305],{72662:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(74848),s=t(28453),r=t(58362);const o={},c="Giving items",l={id:"docs/creating-stories/interactions/items",title:"Giving items",description:"It's best to first read First Interaction before starting this tutorial.",source:"@site/docs/docs/03-creating-stories/01-interactions/02-items.mdx",sourceDirName:"docs/03-creating-stories/01-interactions",slug:"/docs/creating-stories/interactions/items",permalink:"/TypeWriter/beta/docs/creating-stories/interactions/items",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/docs/03-creating-stories/01-interactions/02-items.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Adding Options",permalink:"/TypeWriter/beta/docs/creating-stories/interactions/options"},next:{title:"Cinematics",permalink:"/TypeWriter/beta/docs/creating-stories/cinematics/"}},a={},d=[{value:"Adding the give item",id:"adding-the-give-item",level:2},{value:"Configuring the give item",id:"configuring-the-give-item",level:2},{value:"Using the item capture",id:"using-the-item-capture",level:3},{value:"Configuring it yourself",id:"configuring-it-yourself",level:3},{value:"Result",id:"result",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"giving-items",children:"Giving items"}),"\n",(0,n.jsx)(i.admonition,{title:"Before starting",type:"info",children:(0,n.jsxs)(i.p,{children:["It's best to first read ",(0,n.jsx)(i.a,{href:"/TypeWriter/beta/docs/creating-stories/interactions/",children:"First Interaction"})," before starting this tutorial."]})}),"\n",(0,n.jsx)(i.admonition,{title:"1.20.5+",type:"warning",children:(0,n.jsx)(i.p,{children:"In Minecraft version 1.20.5+, the item system will change, and this system will be deprecated until updated."})}),"\n",(0,n.jsx)(i.p,{children:"In this tutorial, you will learn how to give items in your interactions."}),"\n",(0,n.jsx)(i.h2,{id:"adding-the-give-item",children:"Adding the give item"}),"\n",(0,n.jsx)(i.p,{children:"To add a give item entry, follow these steps:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Right-click on your entry and select ",(0,n.jsx)(i.code,{children:"+ Link with ..."}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Search for ",(0,n.jsx)(i.code,{children:"Add give item"})," and click on the + icon to add it to your sequence."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Add-give-item",src:t(1534).A+"",width:"504",height:"215"})}),"\n",(0,n.jsx)(i.h2,{id:"configuring-the-give-item",children:"Configuring the give item"}),"\n",(0,n.jsx)(i.p,{children:"The giving item entry has two types of setting the item, by using the item capture or configuring it yourself."}),"\n",(0,n.jsx)(i.h3,{id:"using-the-item-capture",children:"Using the item capture"}),"\n",(0,n.jsxs)(i.p,{children:["The easy way is to use the item capture because it just copies the item that you are currently holding in-game to the panel. To do this, just click on the blue-white camera icon next to the ",(0,n.jsx)(i.code,{children:"item"})," field."]}),"\n",(0,n.jsx)(r.A,{url:t(94175).A}),"\n",(0,n.jsx)(i.h3,{id:"configuring-it-yourself",children:"Configuring it yourself"}),"\n",(0,n.jsxs)(i.p,{children:["You can also configure the item yourself using the item editor. This can be done by opening the ",(0,n.jsx)(i.code,{children:"item"})," field. You have six different things that you can configure:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Material"}),": This is the item that the player will get."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Amount"}),": The amount of items given to the player."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Name"}),": This is the name of the item."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Lore"}),": The lore of the item."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Flags"}),": Specific options for the item."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"NBT"}),": Special data for the item."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"result",children:"Result"}),"\n",(0,n.jsx)(i.p,{children:"After you configured your item, you can test your interaction by clicking the publish button, and then it should look something like this:"}),"\n",(0,n.jsx)(r.A,{url:t(36273).A})]})}function g(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},58362:(e,i,t)=>{t.d(i,{A:()=>l});var n=t(96540),s=t(13554),r=t.n(s);const o={player:"player_DXFF",bar:"bar_YnB5",progress:"progress_ekEV"};var c=t(74848);function l(e){let{url:i}=e,[t,s]=(0,n.useState)(0);return(0,c.jsxs)("div",{className:o.player,children:[(0,c.jsx)(a,{progress:t}),(0,c.jsx)(r(),{url:i,playing:!0,loop:!0,muted:!0,width:"100%",height:"100%",progressInterval:100,onProgress:e=>s(100*e.played),className:o.player})]})}function a(e){let{progress:i}=e;return(0,c.jsx)("div",{className:o.bar,children:(0,c.jsx)("div",{className:o.progress,style:{width:`${i}%`}})})}},36273:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/medias/final-result-give-item-d8921b7db77cb3697bf667204e975267.webm"},94175:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/medias/item-capturer-eb20e63efcd487eee9ecbcee482579d6.webm"},1534:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/add-give-item-e77252f972c87fe115d2ad2c1844ef4b.png"}}]);