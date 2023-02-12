const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
            .setName("playlist")
            .setDescription("ouvir a playlist lo-fi"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/1ZjA2DVPbeqdWUjRaz9h5F?si=2c1d9df7cfed41d7")
    }
}