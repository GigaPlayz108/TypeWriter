"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7507],{43548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(74848),a=n(28453),s=n(58362);const r={},o="First Cinematic",d={id:"docs/first-story/cinematics",title:"First Cinematic",description:"This guide will lead you through making your first cinematic.",source:"@site/docs/docs/03-first-story/02-cinematics.mdx",sourceDirName:"docs/03-first-story",slug:"/docs/first-story/cinematics",permalink:"/TypeWriter/beta/docs/first-story/cinematics",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/docs/03-first-story/02-cinematics.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"First Interaction",permalink:"/TypeWriter/beta/docs/first-story/interactions"},next:{title:"Chapters",permalink:"/TypeWriter/beta/docs/expanding-stories/chapters"}},c={},l=[{value:"What are Cinematics?",id:"what-are-cinematics",level:2},{value:"Creating a Cinematic",id:"creating-a-cinematic",level:2},{value:"Creating the Page",id:"creating-the-page",level:3},{value:"Adding a Camera Entry",id:"adding-a-camera-entry",level:3},{value:"Track Duration (1)",id:"track-duration-1",level:4},{value:"Segments (2)",id:"segments-2",level:4},{value:"Segments Track (3)",id:"segments-track-3",level:4},{value:"Triggering the Cinematic",id:"triggering-the-cinematic",level:2},{value:"Adding dialogue",id:"adding-dialogue",level:2},{value:"Actionbar Dialogue Cinematic",id:"actionbar-dialogue-cinematic",level:4},{value:"Subtitle Dialogue Cinematic",id:"subtitle-dialogue-cinematic",level:4},{value:"Spoken Dialogue Cinematic",id:"spoken-dialogue-cinematic",level:4},{value:"Adding Particles",id:"adding-particles",level:2},{value:"Adding a Self NPC",id:"adding-a-self-npc",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"first-cinematic",children:"First Cinematic"}),"\n",(0,i.jsx)(t.p,{children:"This guide will lead you through making your first cinematic."}),"\n",(0,i.jsx)(t.admonition,{title:"Outdated",type:"danger",children:(0,i.jsx)(t.p,{children:"This section currently is outdated and maybe contains images/videos that are not in the latest release"})}),"\n",(0,i.jsx)(t.admonition,{title:"Basic Adapter required",type:"info",children:(0,i.jsxs)(t.p,{children:["This guide uses the ",(0,i.jsx)(t.a,{href:"/TypeWriter/beta/adapters/BasicAdapter/",children:"Basic Adapter"}),", hence it must be installed before following this guide."]})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This guide builds upon the ",(0,i.jsx)(t.a,{href:"/TypeWriter/beta/docs/first-story/interactions",children:"Interactions"})," guide.\nWe strongly recommend reading through it before following this guide."]})}),"\n",(0,i.jsx)(t.h2,{id:"what-are-cinematics",children:"What are Cinematics?"}),"\n",(0,i.jsx)(t.p,{children:"Cinematics are a way to have different actions happen in a precise order over time. This includes having the player's camera move around\nfrom location to location, having particles show up at different locations at different times, having NPCs move around,\nand much more!"}),"\n",(0,i.jsx)(t.p,{children:"This makes cinematics useful in a wide variety of scenarios, with some examples being:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A cutscene in a quest"}),"\n",(0,i.jsx)(t.li,{children:"As part of a tutorial"}),"\n",(0,i.jsx)(t.li,{children:"Fast travel"}),"\n",(0,i.jsx)(t.li,{children:"Random encounters"}),"\n",(0,i.jsx)(t.li,{children:"And a lot more"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"creating-a-cinematic",children:"Creating a Cinematic"}),"\n",(0,i.jsxs)(t.p,{children:["We'll start off by making a simple cinematic with a cinematic camera entry, with the cinematic being triggered through\na command. Later in the guide we'll continue the ",(0,i.jsx)(t.a,{href:"/TypeWriter/beta/docs/first-story/interactions",children:"Interactions"})," guide to trigger the cinematic\nfrom a flower."]}),"\n",(0,i.jsx)(t.h3,{id:"creating-the-page",children:"Creating the Page"}),"\n",(0,i.jsxs)(t.p,{children:["Start off by clicking add page. Here, choose the ",(0,i.jsx)(t.strong,{children:"Cinematic"})," type in the dropdown menu, and name the page ",(0,i.jsx)(t.code,{children:"flower_cinematic"}),"."]}),"\n",(0,i.jsx)(s.A,{url:n(69077).A}),"\n",(0,i.jsx)(t.h3,{id:"adding-a-camera-entry",children:"Adding a Camera Entry"}),"\n",(0,i.jsxs)(t.p,{children:["Let's now add an entry to the newly created page. Click the ",(0,i.jsx)(t.code,{children:"Add Entry"})," button or the ",(0,i.jsx)(t.code,{children:"+"})," in the top right corner,\nthen search for ",(0,i.jsx)(t.code,{children:"add: camera"}),", and add the ",(0,i.jsx)(t.code,{children:"Add Camera Cinematic"})," entry. You should now see the entry on your screen.\nLet's rename the entry to ",(0,i.jsx)(t.code,{children:"camera_view"}),". Then, click ",(0,i.jsx)(t.code,{children:"Add Segment"})," to add a new segment to the entry."]}),"\n",(0,i.jsx)(t.p,{children:"You'll now see a lot of new fields that aren't in the other pages. Let's go through those."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Cinematics Layout",src:n(13052).A+"",width:"1621",height:"491"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.h4,{id:"track-duration-1",children:"Track Duration (1)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The track duration field is where you decide the duration of the entire cinematic.\nIt's important to note that the duration is in amount of frames, and not in seconds.\nYou can however easily convert from seconds to frames, as 20 frames is equal to 1 second."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.h4,{id:"segments-2",children:"Segments (2)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A segment is what the entry does in that specific time frame. Entries can have multiple segments, but an entry can't\nhave overlapping segments. For that, create another entry."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.h4,{id:"segments-track-3",children:"Segments Track (3)"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This is where the segments of entries are displayed to you. Here you can change when a segment starts and when it ends.\nKeep in mind you can also do this on each segment's sidebar by modifying the ",(0,i.jsx)(t.code,{children:"Start Frame"})," & ",(0,i.jsx)(t.code,{children:"End Frame"})," fields."]}),"\n",(0,i.jsxs)(t.p,{children:["Now that that's explained, we need to add a segment to the camera_view entry.\nMake sure you have the camera view entry selected, and then click ",(0,i.jsx)(t.code,{children:"Add Segment"})," on the entry sidebar.\nThis creates a new segment that spans the entire track."]}),"\n",(0,i.jsxs)(t.p,{children:["We now want to make this segment do something, and to do that, we need to add paths.\nFor the camera entry, this will be the locations it moves the player's POV between.\nLet's start with making two paths. To do that, click the ",(0,i.jsx)(t.code,{children:"+"})," symbol next to Path on the sidebar twice.\nExpanding ",(0,i.jsx)(t.code,{children:"Path #1"}),", you'll see a new area called ",(0,i.jsx)(t.code,{children:"Location"})," with several fields to specify the location of this path.\nWe now need to decide on two locations. To more easily continue the guide later on, I recommend picking two locations\naround a red tulip. We then fill in ",(0,i.jsx)(t.code,{children:"Path #1"}),"'s location, and expand ",(0,i.jsx)(t.code,{children:"Path #2"})," and add the location of that path.\nRemember to add two different locations. You can see example paths in the screenshot below."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example Camera Paths",src:n(26413).A+"",width:"419",height:"637"})}),"\n",(0,i.jsxs)(t.p,{children:["You should now have a functioning cinematic!\nLet's ",(0,i.jsx)(t.code,{children:"Publish"})," and check it out. Type ",(0,i.jsx)(t.code,{children:"/tw cinematic start flower_cinematic"})," in chat, and\nthe cinematic should start playing!"]}),"\n",(0,i.jsx)(s.A,{url:n(25933).A}),"\n",(0,i.jsxs)(t.p,{children:["As you see in the beginning of the camera path, the camera weirdly turns around.\nThis is because when starting the cinematic, Minecraft needs a few frames to set everything up.\nTo make it not noticeable, we can start the cinematic a few frames later.\nThe recommended amount is ",(0,i.jsx)(t.code,{children:"20 frames"}),", which is 1 second. To do this, we can either change the ",(0,i.jsx)(t.code,{children:"Start Frame"})," field\non the segment, or drag the segment on the track to our desired starting point."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["To make it really feel cinematic, you can add a black screen at the beginning of the cinematic.\nUsing the ",(0,i.jsx)(t.a,{href:"/TypeWriter/beta/adapters/BasicAdapter/entries/cinematic/blinding_cinematic",children:"Blinding Cinematic"})," entry, you can make the screen\ngo black for the first ",(0,i.jsx)(t.code,{children:"20 frames"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"Currently we only have one segment, which means the cinematic will end after the segment is done.\nWe can add more segments to create different camera paths."}),"\n",(0,i.jsx)(t.p,{children:"Try adding a new segment, and then adding mutliple paths to that segment.\nIf you have done everything correctly, you should now have a cinematic that looks something like this:"}),"\n",(0,i.jsx)(s.A,{url:n(94944).A}),"\n",(0,i.jsx)(t.h2,{id:"triggering-the-cinematic",children:"Triggering the Cinematic"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"I strongly recommend picking a specific red tulip and changing the cinematic paths to be around it if you havn't done so already."})}),"\n",(0,i.jsxs)(t.p,{children:["Now, you probably want the cinematic to be triggered when a player does something, and not through a command.\nLet's do that by modifying the flower example from ",(0,i.jsx)(t.a,{href:"/TypeWriter/beta/docs/first-story/interactions",children:"Interactions"})," so that one of the\noptions causes the cinematic to play."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's head over to the Flower page by clicking on it in the Pages sidebar. We then simply want to add a new entry.\nSearch for ",(0,i.jsx)(t.code,{children:"add: cinematic"})," when adding a new entry, and select ",(0,i.jsx)(t.code,{children:"Add Cinematic"})," entry. We'll then rename this entry to\n",(0,i.jsx)(t.code,{children:"play_flower_cinematic"}),", and in the entry sidebar, click on the ",(0,i.jsx)(t.code,{children:"Page"})," field. Here you should see the ",(0,i.jsx)(t.code,{children:"Flower Cinematic"})," page\nthat we made earlier. Select that page, and then select the ",(0,i.jsx)(t.code,{children:"Inspect Flower"})," entry. Here we want to add a new option.\nLet's call it ",(0,i.jsx)(t.code,{children:"Look at flower"}),". In the new option, add a new Trigger, and select ",(0,i.jsx)(t.code,{children:"Play Flower Cinematic"})," option in the search box."]}),"\n",(0,i.jsx)(s.A,{url:n(93090).A}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Strongly recommended to pick a specific red tulip and changing the cinematic paths to be around it."})}),"\n",(0,i.jsxs)(t.p,{children:["You should now be able to select the option ",(0,i.jsx)(t.code,{children:"Smell the flower"})," when clicking a red tulip, and it'll play the cinematic."]}),"\n",(0,i.jsx)(t.h2,{id:"adding-dialogue",children:"Adding dialogue"}),"\n",(0,i.jsxs)(t.p,{children:["Let's make the cinematic have dialogue when it's playing. To do this, head back to the ",(0,i.jsx)(t.code,{children:"Flower Cinematic"})," page.\nHere, add a new entry and search for ",(0,i.jsx)(t.code,{children:"add: actionbar"}),", and select the ",(0,i.jsx)(t.code,{children:"Add Actionbar Dialogue Cinematic"})," entry.\nWe'll then rename this entry to ",(0,i.jsx)(t.code,{children:"flower_dialogue"}),". Now, let's first add a speaker to the entry. Let's use the Flower Speaker.\nAfter that, click ",(0,i.jsx)(t.code,{children:"Add Segment"})," to add a segment to the dialogue entry, and select it."]}),"\n",(0,i.jsx)(t.p,{children:"Let's change the time frame of the dialogue to start after 1 second. To do this, we can either change the Start Frame field, or drag the segment on the track\nto our desired starting point. We also have to remember that duration is in frames, not seconds, and remembering from earlier, 1 second equals 20 frames, change the Start Frame to 20."}),"\n",(0,i.jsxs)(t.p,{children:["We then have to add the text to be displayed. Insert ",(0,i.jsx)(t.code,{children:"That flower looks <red><bold>stunning"})," to the Text field."]}),"\n",(0,i.jsx)(t.p,{children:"And we're done! Dialogue should now appear 1 second into the cinematic.\nThere are a few different dialogue entries as well. Here's a quick overview:"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.h4,{id:"actionbar-dialogue-cinematic",children:"Actionbar Dialogue Cinematic"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Will send the speaker & the message in the actionbar."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.h4,{id:"subtitle-dialogue-cinematic",children:"Subtitle Dialogue Cinematic"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Will send the speaker in the actionbar, and sends the message as a subtitle (middle of screen)."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.h4,{id:"spoken-dialogue-cinematic",children:"Spoken Dialogue Cinematic"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Will send the speaker & message in chat."}),"\n",(0,i.jsx)(s.A,{url:n(66191).A}),"\n",(0,i.jsx)(t.h2,{id:"adding-particles",children:"Adding Particles"}),"\n",(0,i.jsxs)(t.p,{children:["You can also add particles to be displayed during the cinematic. Let's do so hearts appear around the red tulip.\nTo do this, add a new entry and search ",(0,i.jsx)(t.code,{children:"add: particle"}),", and add the ",(0,i.jsx)(t.code,{children:"Add Particle Cinematic"})," entry, and rename it to\n",(0,i.jsx)(t.code,{children:"flower_particle"}),"\nFor this entry, we modify the particle effect on the entry itself and not on the segments.\nLet's start by selecting the particle type. Click the ",(0,i.jsx)(t.code,{children:"Particle"})," field in the entry sidebar, and scroll down until\nyou find the ",(0,i.jsx)(t.code,{children:"HEART"})," particle and then select it. Then, enter the location of your Red Tulip in the location field above."]}),"\n",(0,i.jsxs)(t.p,{children:["We will then define the particle offsets, speed & spawnCountPerTick. Think of the offset fields as a box around the location\nyou've specified, and particles can spawn anywhere inside the box.\nWe will set offsetX and offsetZ to ",(0,i.jsx)(t.code,{children:"1"}),", and leave offsetY at ",(0,i.jsx)(t.code,{children:"0.5"}),". We'll then set the speed to ",(0,i.jsx)(t.code,{children:"0.1"})," as to not get a lot of\nhearts spawning at the same time, and we will set spawnCountPerTick to 1, meaning that 1 heart will spawn every tick."]}),"\n",(0,i.jsx)(t.p,{children:"Now, we will add a segment to the particle entry, and we're finished! If you now play your cinematic, heart particles\nshould spawn around the red tulip."}),"\n",(0,i.jsx)(s.A,{url:n(10610).A}),"\n",(0,i.jsx)(t.h2,{id:"adding-a-self-npc",children:"Adding a Self NPC"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["For this step, you have to type ",(0,i.jsx)(t.code,{children:"/tw connect"})," from in game as a player, otherwise you won't be able to record the NPC movement."]})}),"\n",(0,i.jsxs)(t.p,{children:['Want players to be able to see "themselves" while in a cinematic? Well, you can! Let\'s add a self NPC that walks over and looks at the flower\nduring the cinematic. To do this, add a new entry and search ',(0,i.jsx)(t.code,{children:"add: self npc"}),", add the ",(0,i.jsx)(t.code,{children:"Add Self Npc Cinematic"})," entry, and rename it\nto ",(0,i.jsx)(t.code,{children:"player_walk"}),". We then want to click ",(0,i.jsx)(t.code,{children:"Add RecordedSegmeent"}),", and select the new segment that has been made. Now, you'll first need\nto create an artifact by clicking the Artifact field. There, select ",(0,i.jsx)(t.code,{children:"Add Npc Movement Artifact"}),", and select ",(0,i.jsx)(t.code,{children:"Flower Static"})," as the static page\nto store the artifact in. Then, rename the artifact to ",(0,i.jsx)(t.code,{children:"player_look_at_flower"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["We then first want to ",(0,i.jsx)(t.code,{children:"Publish"}),", before heading back to the cinematic page, select the player walk segment again,\nand now we want to click on the camera button to the right of ",(0,i.jsx)(t.code,{children:"Artifact"}),", and open our Minecraft. Here you'll see a bossbar telling you\nto press ",(0,i.jsx)(t.code,{children:"F"})," to start recording. Pressing ",(0,i.jsx)(t.code,{children:"F"})," will cause the cinematic to start playing without the Camera Entry, and all your movements during the\ncinematic will be saved and be used for the NPC movement. You'll want to move to where you want to start the NPC movement, and hit ",(0,i.jsx)(t.code,{children:"F"}),", before\nfollowing the cinematic to add movement to it."]}),"\n",(0,i.jsx)(t.p,{children:"If you now play the cinematic again, an NPC with the skin of the player watching the cinematic should appear, with all the movement you did."}),"\n",(0,i.jsx)(s.A,{url:n(5809).A}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsx)(t.p,{children:"You should now know how to make simple cinematics, but remember, cinematics have a lot more to offer!\nTry messing about with the other options like NPCs that walk around, playing sounds, blinding cinematic & more!"})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},58362:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(96540),a=n(13554),s=n.n(a);const r={player:"player_DXFF",bar:"bar_YnB5",progress:"progress_ekEV"};var o=n(74848);function d(e){let{url:t}=e,[n,a]=(0,i.useState)(0);return(0,o.jsxs)("div",{className:r.player,children:[(0,o.jsx)(c,{progress:n}),(0,o.jsx)(s(),{url:t,playing:!0,loop:!0,muted:!0,width:"100%",height:"100%",progressInterval:100,onProgress:e=>a(100*e.played),className:r.player})]})}function c(e){let{progress:t}=e;return(0,o.jsx)("div",{className:r.bar,children:(0,o.jsx)("div",{className:r.progress,style:{width:`${t}%`}})})}},25933:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/cinematic-1-5b55a6f5685f40c8ca434b4b914f78ae.webm"},94944:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/cinematic-2-2f7acba03bda847d1b6569ab9935b312.webm"},66191:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/cinematic-3-f5df516150bb3f079b94723b64d6858b.webm"},10610:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/cinematic-4-6234ff3b39882804c10a9d1b74476372.webm"},5809:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/cinematic-5-24df74db0aa65e25c985d37d370bdc8b.webm"},93090:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/cinematic-trigger-1d972979e950f19ccaa8e0f439051331.webm"},69077:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/medias/page-creation-a0bee4b28600df8d03e484e8b1f63852.webm"},26413:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/camera-paths-example-85e66a3d2047463f8b66670468311b3b.png"},13052:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cinematic-layout-c53671cf1f38a05081a54c616fef04c4.png"}}]);