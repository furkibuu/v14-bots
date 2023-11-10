const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType, StringSelectMenuBuilder } = require('discord.js');



module.exports = {
name:`eval`,
description:"Comands Eval (Owner Command)",
type: ApplicationCommandType.ChatInput,
options : [

{

name:"text",
type: 3,
required: true
}

]
,
run: async(client, intreaction) => {

intreaction.reply("test")



}}