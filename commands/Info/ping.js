const { ApplicationCommandType , EmbedBuilder} = require('discord.js');

module.exports = {
	name: 'ping',
	description: "Check bot's ms(ping).",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {

        let start = Date.now();
        let ping = new EmbedBuilder()
.setAuthor({name : `My Ping`, iconURL : client.user.avatarURL()})
.setColor("Random")
.setDescription(
    `
    :ping_pong: **Bot ping:** \`${Math.round(client.ws.ping)}ms\`
    :ping_pong: **Bot message ping:** \`${Date.now() - start}ms\` `)
.setTimestamp()
.setFooter({text : `${interaction.user.username} Requested by`, iconURL : interaction.user.avatarURL()})

		interaction.reply({embeds : [ping] })
	}
};