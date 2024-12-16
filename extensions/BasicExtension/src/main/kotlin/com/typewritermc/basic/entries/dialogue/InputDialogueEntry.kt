package com.typewritermc.basic.entries.dialogue

import com.typewritermc.basic.entries.dialogue.messengers.input.BedrockInputDialogueDialogueMessenger
import com.typewritermc.basic.entries.dialogue.messengers.input.JavaInputDialogueDialogueMessenger
import com.typewritermc.core.books.pages.Colors
import com.typewritermc.core.entries.Ref
import com.typewritermc.core.entries.emptyRef
import com.typewritermc.core.extension.annotations.*
import com.typewritermc.core.interaction.EntryContextKey
import com.typewritermc.core.interaction.InteractionContext
import com.typewritermc.core.utils.failure
import com.typewritermc.core.utils.ok
import com.typewritermc.core.utils.replaceAll
import com.typewritermc.engine.paper.entry.Criteria
import com.typewritermc.engine.paper.entry.Modifier
import com.typewritermc.engine.paper.entry.TriggerableEntry
import com.typewritermc.engine.paper.entry.dialogue.DialogueMessenger
import com.typewritermc.engine.paper.entry.entries.ConstVar
import com.typewritermc.engine.paper.entry.entries.DialogueEntry
import com.typewritermc.engine.paper.entry.entries.SpeakerEntry
import com.typewritermc.engine.paper.entry.entries.Var
import com.typewritermc.engine.paper.snippets.snippet
import com.typewritermc.engine.paper.utils.isFloodgate
import org.bukkit.entity.Player
import java.time.Duration
import java.util.*
import kotlin.reflect.KClass

interface InputDialogueEntry : DialogueEntry {
    @MultiLine
    @Placeholder
    @Colored
    val text: Var<String>
    val duration: Var<Duration>
}

@Entry("text_input_dialogue", "An input dialogue which excepts any text", Colors.CYAN, "fa6-solid:keyboard")
@ContextKeys(TextInputContextKeys::class)
class TextInputDialogueEntry(
    override val id: String = "",
    override val name: String = "",
    override val criteria: List<Criteria> = emptyList(),
    override val modifiers: List<Modifier> = emptyList(),
    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),
    override val speaker: Ref<SpeakerEntry> = emptyRef(),
    override val text: Var<String> = ConstVar(""),
    override val duration: Var<Duration> = ConstVar(Duration.ZERO),
) : InputDialogueEntry {
    override fun messenger(player: Player, context: InteractionContext): DialogueMessenger<*> {
        return messenger(player, context, this, TextInputContextKeys.TEXT) { ok(it) }
    }
}

enum class TextInputContextKeys(override val klass: KClass<*>) : EntryContextKey {
    @KeyType(String::class)
    TEXT(String::class),
}

val integerInputNotAIntegerMessage: String by snippet(
    "dialogue.input.error.integer.not_a_integer",
    "<red>Input must be an integer"
)
val numberInputOutOfRangeMessage: String by snippet(
    "dialogue.input.error.number.out_of_range",
    "<red>Input must be between <min> and <max>"
)

@Entry("integer_input_dialogue", "An input dialogue which excepts an integer", Colors.CYAN, "fa6-solid:keyboard")
@ContextKeys(IntegerInputContextKeys::class)
class IntegerInputDialogueEntry(
    override val id: String = "",
    override val name: String = "",
    override val criteria: List<Criteria> = emptyList(),
    override val modifiers: List<Modifier> = emptyList(),
    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),
    override val speaker: Ref<SpeakerEntry> = emptyRef(),
    override val text: Var<String> = ConstVar(""),
    override val duration: Var<Duration> = ConstVar(Duration.ZERO),
    val range: Optional<ClosedRange<Int>> = Optional.empty(),
) : InputDialogueEntry {
    override fun messenger(player: Player, context: InteractionContext): DialogueMessenger<*> {
        return messenger(player, context, this, IntegerInputContextKeys.NUMBER) parser@{
            val number = it.toIntOrNull() ?: return@parser failure(integerInputNotAIntegerMessage)
            if (range.isPresent && number !in range.get()) {
                return@parser failure(
                    numberInputOutOfRangeMessage
                        .replaceAll(
                            "<min>" to range.get().start.toString(),
                            "<max>" to range.get().endInclusive.toString()
                        )
                )
            }

            ok(number)
        }
    }
}

enum class IntegerInputContextKeys(override val klass: KClass<*>) : EntryContextKey {
    @KeyType(Int::class)
    NUMBER(Int::class),
}

val doubleInputNotADoubleMessage: String by snippet(
    "dialogue.input.error.double.not_a_double",
    "<red>Input must be a double"
)

@Entry("double_input_dialogue", "An input dialogue which excepts a double", Colors.CYAN, "fa6-solid:keyboard")
@ContextKeys(DoubleInputContextKeys::class)
class DoubleInputDialogueEntry(
    override val id: String = "",
    override val name: String = "",
    override val criteria: List<Criteria> = emptyList(),
    override val modifiers: List<Modifier> = emptyList(),
    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),
    override val speaker: Ref<SpeakerEntry> = emptyRef(),
    override val text: Var<String> = ConstVar(""),
    override val duration: Var<Duration> = ConstVar(Duration.ZERO),
    val range: Optional<ClosedRange<Double>> = Optional.empty(),
) : InputDialogueEntry {
    override fun messenger(player: Player, context: InteractionContext): DialogueMessenger<*> {
        return messenger(player, context, this, DoubleInputContextKeys.NUMBER) parser@{
            val number = it.toDoubleOrNull() ?: return@parser failure(doubleInputNotADoubleMessage)
            if (range.isPresent && number !in range.get()) {
                return@parser failure(
                    numberInputOutOfRangeMessage.replaceAll(
                        "<min>" to range.get().start.toString(),
                        "<max>" to range.get().endInclusive.toString()
                    )
                )
            }

            ok(number)
        }
    }
}

enum class DoubleInputContextKeys(override val klass: KClass<*>) : EntryContextKey {
    @KeyType(Double::class)
    NUMBER(Double::class),
}

private fun <T : Any> messenger(
    player: Player,
    context: InteractionContext,
    entry: InputDialogueEntry,
    key: EntryContextKey,
    parser: (String) -> Result<T>,
): DialogueMessenger<InputDialogueEntry> {
    return if (player.isFloodgate) {
        BedrockInputDialogueDialogueMessenger(player, context, entry, key, parser)
    } else {
        JavaInputDialogueDialogueMessenger(player, context, entry, key, parser)
    }
}