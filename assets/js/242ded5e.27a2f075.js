"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29614],{1461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});let i=JSON.parse('{"id":"develop/extensions/entries/cinematic/index","title":"CinematicEntry","description":"The CinematicEntry does not have any decentends, but is very customizable. When a entry is needed in a cinematic page, it needs to inherit this.","source":"@site/docs/develop/02-extensions/04-entries/cinematic/index.mdx","sourceDirName":"develop/02-extensions/04-entries/cinematic","slug":"/develop/extensions/entries/cinematic/","permalink":"/beta/develop/extensions/entries/cinematic/","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/develop/02-extensions/04-entries/cinematic/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734339868000,"frontMatter":{},"sidebar":"develop","previous":{"title":"Create Entries","permalink":"/beta/develop/extensions/entries/"},"next":{"title":"AudienceEntry","permalink":"/beta/develop/extensions/entries/manifest/audience"}}');var r=t(74848),a=t(28453),s=t(26137);let l={},o="CinematicEntry",c={},m=[{value:"Usage",id:"usage",level:2},{value:"ExampleSegment",id:"examplesegment",level:3},{value:"ExampleCinematicAction",id:"examplecinematicaction",level:3},{value:"SimpleCinematicAction",id:"simplecinematicaction",level:3},{value:"Ticking",id:"ticking",level:2},{value:"Simulation &amp; Recording",id:"simulation--recording",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cinematicentry",children:"CinematicEntry"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"CinematicEntry"})," does not have any decentends, but is very customizable. When a entry is needed in a cinematic page, it needs to inherit this."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CinematicEntry"})," works by having at least 1 list of ",(0,r.jsx)(n.code,{children:"Segment"}),"'s. Segments are the parts of the cinematic and may have sub-properties defined. A segment needs to have at least a ",(0,r.jsx)(n.code,{children:"startFrame"})," and ",(0,r.jsx)(n.code,{children:"endFrame"})," which are the integers of the frames."]}),"\n",(0,r.jsxs)(n.p,{children:["Frames are the ticks in a second. So there are 20 frames in a second. A cinematic takes as long as the latest ",(0,r.jsx)(n.code,{children:"endFrame"})," of a segment from all it's entries."]}),"\n",(0,r.jsxs)(n.p,{children:["Segments are defined in the entry using the ",(0,r.jsx)(n.code,{children:"@Segments"})," annotation. And it needs to be a list of ",(0,r.jsx)(n.code,{children:"Segment"}),"'s."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"CinematicEntry"})," can have multiple different segment tracks.\nFor example, a cinematic entry may have a ",(0,r.jsx)(n.code,{children:"TextSegment"})," and a ",(0,r.jsx)(n.code,{children:"SoundSegment"}),"."]}),(0,r.jsxs)(n.p,{children:["Though this is supported in the plugin, it is not yet implemented in the cinematic editor.\nIf you need this, reach out to me on ",(0,r.jsx)(n.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["As entries are not allowed to have any state, we create a ",(0,r.jsx)(n.code,{children:"CinematicAction"})," everytime a entry is used in a cinematic for a player."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(s.A,{tag:"cinematic_entry",json:t(76590)}),"\n",(0,r.jsxs)(n.p,{children:["Segments sometimes need a minimum or maximum duration. This can be done using the ",(0,r.jsx)(n.code,{children:"@InnerMin"})," and ",(0,r.jsx)(n.code,{children:"@InnerMax"})," annotations."]}),"\n",(0,r.jsx)(s.A,{tag:"cinematic_segment_with_min_max",json:t(76590)}),"\n",(0,r.jsx)(n.p,{children:"This will make sure that the segment will be at least 10 frames long and at most 20 frames long."}),"\n",(0,r.jsx)(n.h3,{id:"examplesegment",children:"ExampleSegment"}),"\n",(0,r.jsx)(s.A,{tag:"cinematic_segment",json:t(76590)}),"\n",(0,r.jsx)(n.h3,{id:"examplecinematicaction",children:"ExampleCinematicAction"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"CinematicAction"})," is the action that is created when a cinematic is started. It is used to keep track of the current frame and to execute the segments.\nThere are a few different lifecycle methods that can be used."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"setup()"})," is called when the cinematic is created. This is the place to initialize any variables, spawn entities, etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tick(frame: Int)"})," is called every frame. This is the place to execute the segments. It is even executed when no segments are active."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"teardown()"})," is called when the cinematic is finished. This is the place to remove any entities, etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"canFinish(frame: Int)"})," the only method that needs to be implemented. It is used by the ",(0,r.jsx)(n.code,{children:"CinematicSequence"})," to determine if the cinematic is finished."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you need all the customization, you can can implement the ",(0,r.jsx)(n.code,{children:"CinematicAction"})," directly:"]}),"\n",(0,r.jsx)(s.A,{tag:"cinematic_action",json:t(76590)}),"\n",(0,r.jsx)(n.h3,{id:"simplecinematicaction",children:"SimpleCinematicAction"}),"\n",(0,r.jsxs)(n.p,{children:["Sometimes you don't need all the customization and flexiblity. If you only care about 1 segment track, and only need to do something when a segment starts or ends, you can use the ",(0,r.jsx)(n.code,{children:"SimpleCinematicAction"}),"."]}),"\n",(0,r.jsx)(s.A,{tag:"cinematic_simple_action",json:t(76590)}),"\n",(0,r.jsx)(n.h2,{id:"ticking",children:"Ticking"}),"\n",(0,r.jsxs)(n.p,{children:["One important detail is that the ",(0,r.jsx)(n.code,{children:"tick"})," methods are not necessarily called in order.\nIt is important that the tick method should show the state of the action at the given frame."]}),"\n",(0,r.jsx)(n.p,{children:"One place where this is definitely the case is when the player is viewing the cinematic in content mode.\nAs the player is able to scroll through the cinematic, it might be the case that multiple frames are skipped, or rewinded."}),"\n",(0,r.jsx)(n.h2,{id:"simulation--recording",children:"Simulation & Recording"}),"\n",(0,r.jsx)(n.p,{children:"Sometimes the cinematic should be different when it is being recorded or simulated.\nLike the blinding cinematic, where you don't want to be blinded during simulation/recording.\nOr you want to show a different thing during simulation/recording.\nLike the camera which displays the camera in the world, instead of setting the player's camera."}),"\n",(0,r.jsxs)(n.p,{children:["To do this, there are 2 additional methods that can be implemented on the ",(0,r.jsx)(n.code,{children:"CinematicEntry"})," that can return a different ",(0,r.jsx)(n.code,{children:"CinematicAction"})," for recording and simulation."]}),"\n",(0,r.jsx)(s.A,{tag:"cinematic_create_actions",json:t(76590)})]})}function p(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},26137:(e,n,t)=>{t.d(n,{A:()=>s});var i=t(74848);let r={initializer:{file:"src/main/kotlin/com/typewritermc/example/ExampleInitializer.kt",content:"import com.typewritermc.core.extension.Initializable\nimport com.typewritermc.core.extension.annotations.Initializer\n\n@Initializer\nobject ExampleInitializer : Initializable {\n    override suspend fun initialize() {\n        // Do something when the extension is initialized\n    }\n\n    override suspend fun shutdown() {\n        // Do something when the extension is shutdown\n    }\n}"},simple_placeholder_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/ExamplePlaceholderEntry.kt",content:'class SimpleExamplePlaceholderEntry(\n    override val id: String,\n    override val name: String,\n) : PlaceholderEntry {\n    override fun parser(): PlaceholderParser = placeholderParser {\n        supply { player ->\n            "Hello, ${player?.name ?: "World"}!"\n        }\n    }\n}'},literal_placeholder_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/ExamplePlaceholderEntry.kt",content:'    override fun parser(): PlaceholderParser = placeholderParser {\n        literal("greet") {\n            literal("enthusiastic") {\n                supply { player ->\n                    "HEY HOW IS YOUR DAY, ${player?.name ?: "World"}!"\n                }\n            }\n            supply { player ->\n                "Hello, ${player?.name ?: "World"}"\n            }\n        }\n        supply {\n            "Standard text"\n        }\n    }'},string_placeholder_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/ExamplePlaceholderEntry.kt",content:'    override fun parser(): PlaceholderParser = placeholderParser {\n        string("name") { name ->\n            supply {\n                "Hello, ${name()}!"\n            }\n        }\n    }'},cinematic_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:'@Entry("example_cinematic", "An example cinematic entry", Colors.BLUE, "material-symbols:cinematic-blur")\nclass ExampleCinematicEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    @Segments(Colors.BLUE, "material-symbols:cinematic-blur")\n    val segments: List<ExampleSegment> = emptyList(),\n) : CinematicEntry {\n    override fun create(player: Player): CinematicAction {\n        return ExampleCinematicAction(player, this)\n    }\n}'},cinematic_segment_with_min_max:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:'    @Segments(Colors.BLUE, "material-symbols:cinematic-blur")\n    @InnerMin(Min(10))\n    @InnerMax(Max(20))\n    val segments: List<ExampleSegment> = emptyList(),'},cinematic_create_actions:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"    // This will be used when the cinematic is normally displayed to the player.\n    override fun create(player: Player): CinematicAction {\n        return DefaultCinematicAction(player, this)\n    }\n\n    // This is used during content mode to display the cinematic to the player.\n    // It may be null to not show it during simulation.\n    override fun createSimulating(player: Player): CinematicAction? {\n        return SimulatedCinematicAction(player, this)\n    }\n\n    // This is used during content mode to record the cinematic.\n    // It may be null to not record it during simulation.\n    override fun createRecording(player: Player): CinematicAction? {\n        return RecordingCinematicAction(player, this)\n    }"},cinematic_segment:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"data class ExampleSegment(\n    override val startFrame: Int = 0,\n    override val endFrame: Int = 0,\n) : Segment"},cinematic_action:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"class ExampleCinematicAction(\n    val player: Player,\n    val entry: ExampleCinematicEntry,\n) : CinematicAction {\n    override suspend fun setup() {\n        // Initialize variables, spawn entities, etc.\n    }\n\n    override suspend fun tick(frame: Int) {\n        val segment = entry.segments activeSegmentAt frame\n        // Can be null if no segment is active\n\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\n\n        // Execute tick logic for the segment\n    }\n\n    override suspend fun teardown() {\n        // Remove entities, etc.\n    }\n\n    override fun canFinish(frame: Int): Boolean = entry.segments canFinishAt frame\n}"},cinematic_simple_action:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"class ExampleSimpleTemporalAction(\n    val player: Player,\n    entry: ExampleCinematicEntry,\n) : SimpleTemporalAction<ExampleSegment>() {\n    override val segments: List<ExampleSegment> = entry.segments\n\n    override suspend fun startSegment(segment: ExampleSegment) {\n        super.startSegment(segment) // Keep this\n        // Called when a segment starts\n    }\n\n    override suspend fun tickSegment(segment: ExampleSegment, frame: Int) {\n        super.tickSegment(segment, frame) // Keep this\n        // Called every tick while the segment is active\n        // Will always be called after startSegment and never after stopSegment\n\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\n    }\n\n    override suspend fun stopSegment(segment: ExampleSegment) {\n        super.stopSegment(segment) // Keep this\n        // Called when the segment ends\n        // Will also be called if the cinematic is stopped early\n    }\n}"},audience_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:'@Entry("example_audience", "An example audience entry.", Colors.GREEN, "material-symbols:chat-rounded")\nclass ExampleAudienceEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : AudienceEntry {\n    override fun display(): AudienceDisplay {\n        return ExampleAudienceDisplay()\n    }\n}'},audience_display:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"class ExampleAudienceDisplay : AudienceDisplay() {\n    override fun initialize() {\n        // This is called when the first player is added to the audience.\n        super.initialize()\n        // Do something when the audience is initialized\n    }\n\n    override fun onPlayerAdd(player: Player) {\n        // Do something when a player gets added to the audience\n    }\n\n    override fun onPlayerRemove(player: Player) {\n        // Do something when a player gets removed from the audience\n    }\n\n    override fun dispose() {\n        super.dispose()\n        // Do something when the audience is disposed\n        // It will always call onPlayerRemove for all players.\n        // So no player cleanup is needed here.\n    }\n}"},tickable_audience_display:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"// highlight-next-line\nclass TickableAudienceDisplay : AudienceDisplay(), TickableDisplay {\n    override fun onPlayerAdd(player: Player) {}\n    override fun onPlayerRemove(player: Player) {}\n\n    // highlight-start\n    override fun tick() {\n        // Do something when the audience is ticked\n        players.forEach { player ->\n            // Do something with the player\n        }\n\n        // This is running asynchronously\n        // If you need to do something on the main thread\n        ThreadType.SYNC.launch {\n            // Though this will run a tick later, to sync with the bukkit scheduler.\n        }\n    }\n    // highlight-end\n}"},audience_display_with_events:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"class AudienceDisplayWithEvents : AudienceDisplay() {\n    override fun onPlayerAdd(player: Player) {}\n    override fun onPlayerRemove(player: Player) {}\n\n    // highlight-start\n    @EventHandler\n    fun onSomeEvent(event: SomeBukkitEvent) {\n        // Do something when the event is triggered\n        // This will trigger for all players, not just the ones in the audience.\n        // So we need to check if the player is in the audience.\n        if (event.player in this) {\n            // Do something with the player\n        }\n    }\n    // highlight-end\n}"},artifact_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt",content:'@Entry("example_artifact", "An example artifact entry.", Colors.BLUE, "material-symbols:home-storage-rounded")\nclass ExampleArtifactEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val artifactId: String = "",\n) : ArtifactEntry'},artifact_access:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt",content:"suspend fun accessArtifactData(ref: Ref<out ArtifactEntry>) {\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\n    val entry = ref.get() ?: return\n    val content: String? = assetManager.fetchAsset(entry)\n    // Do something with the content\n}"},asset_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt",content:'@Entry("example_asset", "An example asset entry.", Colors.BLUE, "material-symbols:home-storage-rounded")\nclass ExampleAssetEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val path: String = "",\n) : AssetEntry'},asset_access:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt",content:"suspend fun accessAssetData(ref: Ref<out AssetEntry>) {\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\n    val entry = ref.get() ?: return\n    val content: String? = assetManager.fetchAsset(entry)\n    // Do something with the content\n}"},sound_id_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundIdEntry.kt",content:'@Entry("example_sound", "An example sound entry.", Colors.BLUE, "icon-park-solid:volume-up")\nclass ExampleSoundIdEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val soundId: String = "",\n) : SoundIdEntry'},sound_source_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundSourceEntry.kt",content:'@Entry("example_sound_source", "An example sound source entry.", Colors.BLUE, "ic:round-spatial-audio-off")\nclass ExampleSoundSourceEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : SoundSourceEntry {\n    override fun getEmitter(player: Player): SoundEmitter {\n        // Return the emitter that should be used for the sound.\n        // An entity should be provided.\n        return SoundEmitter(player.entityId)\n    }\n}'},speaker_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSpeakerEntry.kt",content:'@Entry("example_speaker", "An example speaker entry.", Colors.BLUE, "ic:round-spatial-audio-off")\nclass ExampleSpeakerEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val displayName: Var<String> = ConstVar(""),\n    override val sound: Sound = Sound.EMPTY,\n) : SpeakerEntry'},variable_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_variable", "An example variable entry.", Colors.GREEN, "mdi:code-tags")\nclass ExampleVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        val klass = context.klass\n\n        TODO("Do something with the player and the klass")\n    }\n}'},variable_entry_with_data:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_variable_with_data", "An example variable entry with data.", Colors.GREEN, "mdi:code-tags")\n// Register the variable data associated with this variable.\n@VariableData(ExampleVariableWithData::class)\nclass ExampleVariableWithDataEntry(\n    override val id: String = "",\n    override val name: String = "",\n    // This data will be the same for all uses of this variable.\n    val someString: String = "",\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        val klass = context.klass\n        this.someString\n        val data = context.getData<ExampleVariableWithData>() ?: throw IllegalStateException("Could not find data for ${context.klass}, data: ${context.data}")\n\n        TODO("Do something with the player, the klass, and the data")\n    }\n}\n\nclass ExampleVariableWithData(\n    // This data can change at the place where the variable is used.\n    val otherInfo: Int = 0,\n)'},generic_variable_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_generic_variable", "An example generic variable entry.", Colors.GREEN, "mdi:code-tags")\nclass ExampleGenericVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n    // We determine how to parse this during runtime.\n    val generic: Generic = Generic.Empty,\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        val klass = context.klass\n\n        // Parse the generic data to the correct type.\n        val data = generic.get(klass)\n\n        TODO("Do something with the player, the klass, and the generic")\n    }\n}\n\nclass ExampleGenericVariableData(\n    // Generic data will always be the same as the generic type in the variable.\n    val otherGeneric: Generic,\n)'},constraint_variable_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_constraint_variable", "An example constraint variable entry.", Colors.GREEN, "mdi:code-tags")\n@GenericConstraint(String::class)\n@GenericConstraint(Int::class)\nclass ExampleConstraintVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n    // We determine how to parse this during runtime.\n    val generic: Generic = Generic.Empty,\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        // This can only be a String or an Int.\n        val klass = context.klass\n\n        // Parse the generic data to the correct type.\n        val data = generic.get(klass)\n\n        TODO("Do something with the player, the klass, and the generic")\n    }\n}'},variable_usage:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_action_using_variable", "An example action that uses a variable.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleActionUsingVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    val someString: Var<String> = ConstVar(""),\n    val someInt: Var<Int> = ConstVar(0),\n) : ActionEntry {\n    override fun execute(player: Player) {\n        val someString = someString.get(player)\n        val someInt = someInt.get(player)\n\n        // Do something with the variables\n    }\n}'},action_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleActionEntry.kt",content:'@Entry("example_action", "An example action entry.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : ActionEntry {\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply all the modifiers.\n        // Do something with the player\n    }\n}'},custom_triggering_action_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleCustomTriggeringActionEntry.kt",content:'@Entry(\n    "example_custom_triggering_action",\n    "An example custom triggering entry.",\n    Colors.RED,\n    "material-symbols:touch-app-rounded"\n)\nclass ExampleCustomTriggeringActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    @SerializedName("triggers")\n    override val customTriggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : CustomTriggeringActionEntry {\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply the modifiers.\n        // Do something with the player\n        player.triggerCustomTriggers() // Can be called later to trigger the next entries.\n    }\n}'},dialogue_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt",content:'@Entry("example_dialogue", "An example dialogue entry.", Colors.BLUE, "material-symbols:chat-rounded")\nclass ExampleDialogueEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n    override val speaker: Ref<SpeakerEntry> = emptyRef(),\n    @MultiLine\n    @Placeholder\n    @Colored\n    @Help("The text to display to the player.")\n    val text: String = "",\n) : DialogueEntry'},dialogue_messenger:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt",content:'@Messenger(ExampleDialogueEntry::class)\nclass ExampleDialogueDialogueMessenger(player: Player, entry: ExampleDialogueEntry) :\n    DialogueMessenger<ExampleDialogueEntry>(player, entry) {\n\n    companion object : MessengerFilter {\n        override fun filter(player: Player, entry: DialogueEntry): Boolean = true\n    }\n\n    // Called every game tick (20 times per second).\n    // The cycle is a parameter that is incremented every tick, starting at 0.\n    override fun tick(context: TickContext) {\n        super.tick(context)\n        if (state != MessengerState.RUNNING) return\n\n        player.sendMessage("${entry.speakerDisplayName}: ${entry.text}".parsePlaceholders(player).asMini())\n\n        // When we want the dialogue to end, we can set the state to FINISHED.\n        state = MessengerState.FINISHED\n    }\n}'},event_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:'@Entry("example_event", "An example event entry.", Colors.YELLOW, "material-symbols:bigtop-updates")\nclass ExampleEventEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : EventEntry'},event_entry_listener:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:"// Must be scoped to be public\n@EntryListener(ExampleEventEntry::class)\nfun onEvent(event: SomeBukkitEvent, query: Query<ExampleEventEntry>) {\n    // Do something\n    val entries = query.find() // Find all the entries of this type, for more information see the Query section\n    // Do something with the entries, for example trigger them\n    entries triggerAllFor event.player\n}"}};var a=t(84996);function s(e){let n,{tag:t,json:s}=e;if(!s)throw Error("JSON not provided");if(null==(n=Object.keys(s).length>0?s[t]:r[t]))return(0,i.jsxs)("div",{className:"text-red-500 dark:text-red-400 text-xs",children:["Code snippet not found: ",t]});let{file:l,content:o}=n;if(null==l||null==o)return(0,i.jsxs)("div",{className:"text-red-500 dark:text-red-400 text-xs",children:["Code snippet not found: ",t," (",n,")"]});let c=l.split("/").pop();return(0,i.jsx)(a.A,{language:"kotlin",showLineNumbers:!0,title:c,children:o})}},76590:e=>{e.exports={}}}]);