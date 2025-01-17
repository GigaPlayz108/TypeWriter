repositories {
    maven("https://jitpack.io")
}
dependencies {
    compileOnly("com.github.MilkBowl:VaultAPI:1.7.1")
}

typewriter {
    namespace = "typewritermc"

    extension {
        name = "Vault"
        shortDescription = "Integrate Vault with Typewriter."
        description = """
            |The Vault Extension is an extension that makes it easy to use Vault's economy system in your dialogue.
        """.trimMargin()
        engineVersion = file("../../version.txt").readText().trim().substringBefore("-beta")
        channel = com.typewritermc.moduleplugin.ReleaseChannel.NONE


        paper {
            dependency("Vault")
        }
    }
}