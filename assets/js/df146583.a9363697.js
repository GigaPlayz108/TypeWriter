"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6978],{8544:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var s=t(74848),d=t(28453);const i={},a="Adapters",n={id:"docs/adapters",title:"Adapters",description:"Adapters are additions that can be added to Typewriter to add more functionality and entries. Most are used as a way to interface with other plugins. Adapters are not required to use Typewriter, but they can be useful.",source:"@site/versioned_docs/version-0.4.1/docs/06-adapters.md",sourceDirName:"docs",slug:"/docs/adapters",permalink:"/TypeWriter/docs/adapters",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.1/docs/06-adapters.md",tags:[],version:"0.4.1",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Facts",permalink:"/TypeWriter/docs/facts"},next:{title:"Dependencies",permalink:"/TypeWriter/docs/dependencies"}},o={},c=[];function l(e){const r={a:"a",admonition:"admonition",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"adapters",children:"Adapters"}),"\n",(0,s.jsx)(r.p,{children:"Adapters are additions that can be added to Typewriter to add more functionality and entries. Most are used as a way to interface with other plugins. Adapters are not required to use Typewriter, but they can be useful."}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["You are most likely going to need the ",(0,s.jsx)(r.a,{href:"../adapters/BasicAdapter",children:"Basic Adapter"}),". It contains essential building blocks for using Typewriter."]})}),"\n",(0,s.jsx)(r.h1,{id:"pre-made-adapters",children:"Pre-made Adapters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Adapter Name"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Download Link"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../adapters/BasicAdapter",children:"Basic Adapter"})}),(0,s.jsx)(r.td,{children:"Contains essential building blocks for every server"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/gabber235/TypeWriter/releases",children:"Download"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../adapters/CitizensAdapter/",children:"Citizens Adapter"})}),(0,s.jsx)(r.td,{children:"Extends the Citizens API to allow you to create NPCs with Typewriter."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/gabber235/TypeWriter/releases",children:"Download"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../adapters/VaultAdapter/",children:"Vault Adapter"})}),(0,s.jsx)(r.td,{children:"Integrates with Vault to allow you to use the economy system in your Typewriter scripts."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/gabber235/TypeWriter/releases",children:"Download"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../adapters/MythicMobsAdapter/",children:"MythicMobs Adapter"})}),(0,s.jsx)(r.td,{children:"Allows you to use MythicMobs in your Typewriter scripts."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/gabber235/TypeWriter/releases",children:"Download"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../adapters/WorldGuardAdapter/",children:"WorldGuard Adapter"})}),(0,s.jsx)(r.td,{children:"Allows use of WorldGuard regions with Typewriter."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/gabber235/TypeWriter/releases",children:"Download"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../adapters/RPGRegionsAdapter/",children:"RPGRegions Adapter"})}),(0,s.jsx)(r.td,{children:"Allows you to use RPGRegions in your Typewriter scripts."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/gabber235/TypeWriter/releases",children:"Download"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../adapters/SuperiorSkyblockAdapter/",children:"Superior Skyblock Adapter"})}),(0,s.jsx)(r.td,{children:"Allows you to use Superior Skyblock islands in your Typewriter scripts."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/gabber235/TypeWriter/releases",children:"Download"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"../adapters/CombatLogXAdapter/",children:"CombatLogX Adapter"})}),(0,s.jsx)(r.td,{children:"Check if a player is in combat or not with the CombatLogX plugin."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/gabber235/TypeWriter/releases",children:"Download"})})]})]})]}),"\n",(0,s.jsx)(r.h1,{id:"creating-an-adapter",children:"Creating an Adapter"}),"\n",(0,s.jsxs)(r.p,{children:["Want to contribute to Typewriter? You can create your own adapter for any plugin you want, or just Minecraft itself. To start contributing, see the ",(0,s.jsx)(r.a,{href:"/TypeWriter/develop/index",children:"development guide"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);