"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23466],{53726:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});let l=JSON.parse('{"id":"adapters/BasicAdapter/entries/fact/value_placeholder","title":"Value Placeholder Fact","description":"A fact that is computed from a placeholder.","source":"@site/docs/adapters/BasicAdapter/entries/fact/value_placeholder.mdx","sourceDirName":"adapters/BasicAdapter/entries/fact","slug":"/adapters/BasicAdapter/entries/fact/value_placeholder","permalink":"/beta/adapters/BasicAdapter/entries/fact/value_placeholder","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/adapters/BasicAdapter/entries/fact/value_placeholder.mdx","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1734272901000,"frontMatter":{},"sidebar":"adapters","previous":{"title":"Timed Fact","permalink":"/beta/adapters/BasicAdapter/entries/fact/timed_fact"},"next":{"title":"Global Group","permalink":"/beta/adapters/BasicAdapter/entries/group/global_group"}}');var d=t(74848),r=t(28453),n=t(29214);t(40497),t(96867);let s={},i="Value Placeholder Fact",c={},o=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function h(e){let a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return n||u("fields",!1),n.CommentField||u("fields.CommentField",!0),n.EntryField||u("fields.EntryField",!0),n.ReadonlyFactInfo||u("fields.ReadonlyFactInfo",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.header,{children:(0,d.jsx)(a.h1,{id:"value-placeholder-fact",children:"Value Placeholder Fact"})}),"\n",(0,d.jsxs)(a.p,{children:["A ",(0,d.jsx)(a.a,{href:"/docs/creating-stories/facts",children:"fact"})," that is computed from a placeholder.\nThis placeholder is evaluated when the fact is read and can return anything.\nThe value will be computed based on the ",(0,d.jsx)(a.code,{children:"values"})," specified."]}),"\n",(0,d.jsx)(n.ReadonlyFactInfo,{}),"\n",(0,d.jsx)(a.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,d.jsx)(a.p,{children:"If you only want to run certain actions if the player is in creative mode.\nOr depending on the weather, change the dialogue of the NPC."}),"\n",(0,d.jsx)(a.h2,{id:"fields",children:"Fields"}),"\n",(0,d.jsx)(n.CommentField,{}),"\n",(0,d.jsx)(n.EntryField,{name:"Group",required:!0}),"\n",(0,d.jsx)(n.EntryField,{name:"Placeholder",required:!0,placeholders:!0,children:(0,d.jsx)(a.p,{children:"Placeholder to parse (e.g. %player_gamemode%"})}),"\n",(0,d.jsxs)(n.EntryField,{name:"Values",required:!0,map:!0,regex:!0,children:[(0,d.jsx)(a.p,{children:"The values to match the placeholder with and their corresponding fact value."}),(0,d.jsx)(a.p,{children:"An example would be:"}),(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-yaml",children:"values:\nSURVIVAL: 0\nCREATIVE: 1\nADVENTURE: 2\nSPECTATOR: 3\n"})}),(0,d.jsxs)(a.p,{children:["If the placeholder returns ",(0,d.jsx)(a.code,{children:"CREATIVE"}),", the fact value will be ",(0,d.jsx)(a.code,{children:"1"}),".\nIf no value matches, the fact value will be ",(0,d.jsx)(a.code,{children:"0"}),"."]}),(0,d.jsx)(a.p,{children:"Values can have placeholders inside them."})]})]})}function p(e={}){let{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}function u(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);