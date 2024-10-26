"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68517],{80928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453);const s={},a="EventEntry",o={id:"develop/adapters/entries/trigger/event",title:"EventEntry",description:"The EventEntry is used as a starting point for any sequence. It can have external event listeners listening to events and trigger based on that.",source:"@site/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/trigger/event.mdx",sourceDirName:"develop/02-adapters/03-entries/trigger",slug:"/develop/adapters/entries/trigger/event",permalink:"/0.4.2/develop/adapters/entries/trigger/event",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/trigger/event.mdx",tags:[],version:"0.4.2",lastUpdatedBy:"Marten-Mrfc",lastUpdatedAt:1729957782e3,frontMatter:{},sidebar:"develop",previous:{title:"DialogueEntry",permalink:"/0.4.2/develop/adapters/entries/trigger/dialogue"},next:{title:"Query Entries",permalink:"/0.4.2/develop/adapters/querying"}},d={},l=[{value:"Usage",id:"usage",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"evententry",children:"EventEntry"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"EventEntry"})," is used as a starting point for any sequence. It can have external event listeners listening to events and trigger based on that."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'@Entry("example_event", "An example event entry.", Colors.YELLOW, Icons.CIRCLE)\nclass ExampleEventEntry(\n    override val id: String,\n    override val name: String,\n    override val triggers: List<String> = emptyList(),\n): EventEntry\n\n// Must be scoped to be public\n@EntryListener(ExampleEventEntry::class)\nfun onEvent(event: SomeBukkitEvent, query: Query<ExampleEventEntry>) {\n    // Do something\n    val entries = query.find() // Find all the entries of this type, for more information see the Query section\n    // Do something with the entries, for example trigger them\n    entries triggerAllFor event.player\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If the function is not scoped to be public, it will not be registered as a listener.\nThe function will automatically be registered as a listener for the event by Typewriter and be called when the Bukkit event is trigger. An optional ",(0,r.jsx)(t.code,{children:"Query"})," parameter can be added to easily fetch all the different event entries."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);