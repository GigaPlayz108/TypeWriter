"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80698],{65391:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=t(74848),a=t(28453),s=t(58362);const r={},c="Cinematics",o={id:"docs/creating-stories/cinematics/index",title:"Cinematics",description:"This guide assumes that you have already installed the Basic Adapter.\\",source:"@site/docs/docs/03-creating-stories/02-cinematics/index.mdx",sourceDirName:"docs/03-creating-stories/02-cinematics",slug:"/docs/creating-stories/cinematics/",permalink:"/TypeWriter/beta/docs/creating-stories/cinematics/",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/docs/03-creating-stories/02-cinematics/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Giving items",permalink:"/TypeWriter/beta/docs/creating-stories/interactions/items"},next:{title:"Adding dialogues",permalink:"/TypeWriter/beta/docs/creating-stories/cinematics/dialogue"}},d={},l=[{value:"What are cinematics?",id:"what-are-cinematics",level:2},{value:"Creating a cinematic",id:"creating-a-cinematic",level:2},{value:"Adding a camera cinematic",id:"adding-a-camera-cinematic",level:3},{value:"Creating a segment",id:"creating-a-segment",level:3},{value:"Modifying the camera segment",id:"modifying-the-camera-segment",level:3},{value:"Using the content mode",id:"using-the-content-mode",level:4},{value:"Configuring it yourself",id:"configuring-it-yourself",level:4},{value:"result",id:"result",level:2}];function h(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"cinematics",children:"Cinematics"}),"\n",(0,n.jsx)(i.admonition,{title:"Before starting",type:"info",children:(0,n.jsxs)(i.p,{children:["This guide assumes that you have already installed the ",(0,n.jsx)(i.a,{href:"/TypeWriter/beta/docs/getting-started/installation#basic-adapter",children:"Basic Adapter"}),".",(0,n.jsx)(i.br,{}),"\n","Also, make sure you have read the ",(0,n.jsx)(i.a,{href:"/TypeWriter/beta/docs/getting-started/layout",children:"layout"})," documentation and created a ",(0,n.jsx)(i.strong,{children:"cinematic"})," page."]})}),"\n",(0,n.jsx)(i.p,{children:"In this tutorial, you will learn how to create and view cinematics in your interactions!"}),"\n",(0,n.jsx)(i.h2,{id:"what-are-cinematics",children:"What are cinematics?"}),"\n",(0,n.jsx)(i.p,{children:"Cinematics are timed sequences of actions that can be played in your interactions. They are used to create cutscenes or other timed events."}),"\n",(0,n.jsx)(i.h2,{id:"creating-a-cinematic",children:"Creating a cinematic"}),"\n",(0,n.jsx)(i.p,{children:"Let's get started by creating a simple camera cinematic."}),"\n",(0,n.jsx)(i.h3,{id:"adding-a-camera-cinematic",children:"Adding a camera cinematic"}),"\n",(0,n.jsxs)(i.p,{children:["Firstly click on the + icon in the top right corner of the panel and search for ",(0,n.jsx)(i.code,{children:"Add Camera Cinematic"}),". Add it to your page by clicking on the + icon."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Add-camera-cinematic",src:t(29909).A+"",width:"571",height:"241"})}),"\n",(0,n.jsx)(i.h3,{id:"creating-a-segment",children:"Creating a segment"}),"\n",(0,n.jsxs)(i.p,{children:["Now we need to add a segment to our track. You can do this by clicking on the ",(0,n.jsx)(i.code,{children:"New Camera Cinematic"})," entry in your page and by operations clicking on ",(0,n.jsx)(i.code,{children:"Add Segment"}),"(1)."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Segments",src:t(41016).A+"",width:"597",height:"252"})}),"\n",(0,n.jsx)(i.p,{children:"After you create the segment, you can click on it (2). This opens the inspector of the segment."}),"\n",(0,n.jsx)(i.h3,{id:"modifying-the-camera-segment",children:"Modifying the camera segment"}),"\n",(0,n.jsxs)(i.p,{children:["In a camera cinematic segment, you have a path. Each path contains a list of locations in a world of your server. When multiple locations are specified on a path, the player will move between them. If only one is specified, the player will stay stationary.\nTo create a path, click on the + icon in the inspector at ",(0,n.jsx)(i.code,{children:"path(0)"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"To set a location in a path, you have 2 options: using the content mode or configuring it yourself."}),"\n",(0,n.jsx)(i.h4,{id:"using-the-content-mode",children:"Using the content mode"}),"\n",(0,n.jsx)(i.p,{children:"The content mode allows you to get the player's current location and fill in the fields for you."}),"\n",(0,n.jsx)(s.A,{url:t(53639).A}),"\n",(0,n.jsx)(i.h4,{id:"configuring-it-yourself",children:"Configuring it yourself"}),"\n",(0,n.jsxs)(i.p,{children:["You can also configure the paths yourself. This can be done by opening the ",(0,n.jsx)(i.code,{children:"Path #1"})," field. In there, you can configure the location of the path. These are:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"World"}),": The world where the cinematic happens."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"X"}),": The x coordinate of the location."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Y"}),": The y coordinate of the location."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Z"}),": The z coordinate of the location."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Pitch"}),": The pitch of the camera."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Yaw"}),": The yaw of the camera."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Duration"}),": The duration of the location to the next location in ticks. If not specified, the duration will be calculated based on the left-over duration.",(0,n.jsx)(i.br,{}),"\n","For example, if you have a segment of ",(0,n.jsx)(i.em,{children:"300"})," frames with 3 locations, and the 2nd location has a ",(0,n.jsx)(i.strong,{children:"duration"})," of ",(0,n.jsx)(i.em,{children:"200"})," frames, the duration from the 1st to the 2nd location will be ",(0,n.jsx)(i.em,{children:"100"})," ticks, and from the 2nd to the 3rd location, ",(0,n.jsx)(i.em,{children:"200"})," ticks."]}),"\n",(0,n.jsx)(i.p,{children:"Repeat this process to make more locations in the path."}),"\n",(0,n.jsx)(i.h2,{id:"result",children:"result"}),"\n",(0,n.jsxs)(i.p,{children:["For the result we are going to use the example for the duration. You can easily view your cinematic by running the command:",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"/tw cinematic start (page name)"})," or adding an ",(0,n.jsx)(i.code,{children:"Add cinematic"})," to a sequence page."]}),"\n",(0,n.jsx)(s.A,{url:t(19120).A})]})}function m(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},58362:(e,i,t)=>{t.d(i,{A:()=>o});var n=t(96540),a=t(13554),s=t.n(a);const r={player:"player_DXFF",bar:"bar_YnB5",progress:"progress_ekEV"};var c=t(74848);function o(e){let{url:i}=e,[t,a]=(0,n.useState)(0);return(0,c.jsxs)("div",{className:r.player,children:[(0,c.jsx)(d,{progress:t}),(0,c.jsx)(s(),{url:i,playing:!0,loop:!0,muted:!0,width:"100%",height:"100%",progressInterval:100,onProgress:e=>a(100*e.played),className:r.player})]})}function d(e){let{progress:i}=e;return(0,c.jsx)("div",{className:r.bar,children:(0,c.jsx)("div",{className:r.progress,style:{width:`${i}%`}})})}},53639:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/medias/content-mode-70d872af894ca7a02f3f3a6a07860654.webm"},19120:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/medias/final-camera-cinematic-3a2ba65b48b283752ce69ff62b0ed382.webm"},29909:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/add-camera-cinematic-9a7995f6d6d909477b68aa1b1d24ef63.png"},41016:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/segments-2609153772498bbde77126208ab389ba.png"}}]);