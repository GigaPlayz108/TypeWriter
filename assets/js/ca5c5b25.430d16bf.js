"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82433],{36580:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=i(74848),d=i(28453),n=i(50494);i(6178),i(14783);const r={},c="Timed Activity",o={id:"adapters/EntityAdapter/entries/activity/timed_activity",title:"Timed Activity",description:"The TimedActivityEntry is an activity that allows child activities for a limited amount of time.",source:"@site/docs/adapters/EntityAdapter/entries/activity/timed_activity.mdx",sourceDirName:"adapters/EntityAdapter/entries/activity",slug:"/adapters/EntityAdapter/entries/activity/timed_activity",permalink:"/beta/adapters/EntityAdapter/entries/activity/timed_activity",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/adapters/EntityAdapter/entries/activity/timed_activity.mdx",tags:[],version:"current",lastUpdatedBy:"Marten-Mrfc",lastUpdatedAt:1729957782e3,frontMatter:{},sidebar:"adapters",previous:{title:"Target Location Activity",permalink:"/beta/adapters/EntityAdapter/entries/activity/target_location_activity"},next:{title:"Trigger Activity",permalink:"/beta/adapters/EntityAdapter/entries/activity/trigger_activity"}},s={},l=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,d.R)(),...t.components};return n||u("fields",!1),n.EntryField||u("fields.EntryField",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"timed-activity",children:"Timed Activity"})}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"TimedActivityEntry"})," is an activity that allows child activities for a limited amount of time."]}),"\n",(0,a.jsx)(e.p,{children:"When the duration is up, the activity will deactivate.\nThen the activity will be on cooldown for a set amount of time before it can be activated again."}),"\n",(0,a.jsx)(e.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,a.jsx)(e.p,{children:"This could be used to make an entity do something for a limited amount of time."}),"\n",(0,a.jsx)(e.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsx)(n.EntryField,{name:"Duration",required:!0,duration:!0,children:(0,a.jsx)(e.p,{children:"The duration child activities will be active for."})}),"\n",(0,a.jsx)(n.EntryField,{name:"Cooldown",required:!0,duration:!0,children:(0,a.jsx)(e.p,{children:"The cooldown time before the activity can be activated again."})}),"\n",(0,a.jsx)(n.EntryField,{name:"Active Activity",required:!0,children:(0,a.jsx)(e.p,{children:"The activity that will be used when the duration is active."})}),"\n",(0,a.jsx)(n.EntryField,{name:"Cooldown Activity",required:!0,children:(0,a.jsx)(e.p,{children:"The activity that will be used when it is on cooldown."})})]})}function y(t={}){const{wrapper:e}={...(0,d.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(h,{...t})}):h(t)}function u(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);