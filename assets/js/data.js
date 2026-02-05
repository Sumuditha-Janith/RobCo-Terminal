const ContentData = {
    bootText: [
        "\b",
        "> BIOS CHECK... OK",
        "> LOADING HOLOTAPES... OK",
        "> ESTABLISHING LINK TO VAULT-TEC SERVERS...",
        "> CONNECTION ESTABLISHED.",
        "> RETRIEVING MESSAGE:",
        "\n"
    ],

    mainText: "⚠ URGENT VAULT-TEC CIVIL DEFENSE ALERT ⚠\n" +
        "RESTRICTED ACCESS: CLEARANCE LEVEL 4 REQUIRED\n" +
        "\n" +
        "CITIZEN ADVISORY: OCTOBER 23, 2077\n" +
        "The clock has struck midnight on human history. We always suspected the silence of the morning would eventually be shattered by the sound of a thousand suns. As J. Robert Oppenheimer once reflected on the birth of the atomic age:\n" +
        "\n" +
        "\"We knew the world would not be the same. Few people laughed, few people cried, most people were silent. I remembered the line from the Hindu scripture, the Bhagavad-Gita. Vishnu is trying to persuade the Prince that he should do his duty and to impress him takes on his multi-armed form and says, 'Now I am become Death, the destroyer of worlds.' I suppose we all thought that, one way or another.\"\n" +
        "\n" +
        "Today, that \"Death\" has arrived at our doorstep. The Great War is no longer a shadow on the horizon—it is the sky itself.\n" +
        "\n" +
        "IMMEDIATE INSTRUCTIONS\n" +
        "DO NOT LOOK AT THE FLASH: Radiant heat will cause permanent retinal scarring. If you see a bright light, drop to the ground and cover your head immediately.\n" +
        "\n" +
        "SEEK SHELTER: Report to your assigned Vault-Tec Underground Facility at once. Do not stop to collect personal belongings. Your life is the only asset worth saving.\n" +
        "\n" +
        "IGNORE THE SILENCE: Most people are silent now, just as they were at Los Alamos. Do not let that silence lull you into a false sense of security. The \"Destroyer of Worlds\" does not negotiate.\n" +
        "\n" +
        "TRUST IN ROBCO: Ensure your Pip-Boy is fastened and calibrated. Monitor your Geiger counter. If the needle moves, you are already out of time.\n" +
        "\n" +
        "A BRIGHTER FUTURE... UNDERGROUND\n" +
        "The world above is ending, but the world below is just beginning. We have prepared for this \"duty\" just as the Prince was persuaded by Vishnu. Vault-Tec has built the cradle for the remnants of humanity.\n" +
        "\n" +
        "PREPARE FOR TOTAL ATOMIC ANNIHILATION.\n" +
        "\n" +
        "Vault-Tec: Revolutionizing safety for a world that no longer exists.",

    getBootSequence: function() {
        return this.bootText.join("\n");
    }
};