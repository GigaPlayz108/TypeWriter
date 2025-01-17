package com.typewritermc.basic.entries.dialogue.messengers.option

import com.typewritermc.basic.entries.dialogue.Option
import com.typewritermc.basic.entries.dialogue.OptionDialogueEntry
import com.typewritermc.core.interaction.InteractionContext
import com.typewritermc.engine.paper.entry.Modifier
import com.typewritermc.engine.paper.entry.dialogue.DialogueMessenger
import com.typewritermc.engine.paper.entry.dialogue.MessengerState
import com.typewritermc.engine.paper.entry.entries.EventTrigger
import com.typewritermc.engine.paper.entry.matches
import com.typewritermc.engine.paper.extensions.placeholderapi.parsePlaceholders
import com.typewritermc.engine.paper.utils.legacy
import org.bukkit.entity.Player

class BedrockOptionDialogueDialogueMessenger(player: Player, context: InteractionContext, entry: OptionDialogueEntry) :
    DialogueMessenger<OptionDialogueEntry>(player, context, entry) {

    private var selectedIndex = 0
    private val selected get() = usableOptions[selectedIndex]

    private var usableOptions: List<Option> = emptyList()

    override val eventTriggers: List<EventTrigger>
        get() = entry.eventTriggers + selected.eventTriggers

    override val modifiers: List<Modifier>
        get() = entry.modifiers + selected.modifiers


    override fun init() {
        super.init()
        usableOptions = entry.options.filter { it.criteria.matches(player, context) }
        org.geysermc.floodgate.api.FloodgateApi.getInstance().sendForm(
            player.uniqueId,
            org.geysermc.cumulus.form.CustomForm.builder()
                .title("<bold>${entry.speakerDisplayName.get(player).parsePlaceholders(player)}</bold>".legacy())
                .label("${entry.text.get(player).parsePlaceholders(player).legacy()}\n\n\n")
                .dropdown(
                    "Select Response",
                    usableOptions.map { it.text.get(player).parsePlaceholders(player).legacy() })
                .label("\n\n\n\n")
                .closedOrInvalidResultHandler { _, _ ->
                    state = MessengerState.CANCELLED
                }
                .validResultHandler { responds ->
                    val dropdown = responds.asDropdown()
                    selectedIndex = dropdown
                    state = MessengerState.FINISHED
                }
        )
    }

    override fun end() {
        // Do nothing as we don't need to resend the messages.
    }
}