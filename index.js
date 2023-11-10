const { GatewayIntentBits , Client , Collection, EmbedBuilder, ButtonBuilder, ActionRow, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, TextInputComponent, Events } = require("discord.js");
const IncludedIntents = Object.entries(GatewayIntentBits).reduce((t, [, V]) => t | V, 0);
const client = new Client({ intents: IncludedIntents });
const db = require("orio.db");
const ms = require("ms");
const {token} = require("./config")
const fs = require('fs');
client.slashCommands = new Collection();

module.exports = client;

process.on("unhandledRejection", (err) => {
    console.log(err);  
      });
  process.on("uncaughtException", (err) => {
  console.log(err)
  });
  

fs.readdirSync('./handlers').forEach((handler) => {
    require(`./handlers/${handler}`)(client)
  });


  client.setMaxListeners(0)

  client.login(token || "MTEwOTU3Mjg0Mzc4NTY4MzA0NA.GUYFXD.z6mHyPNLeYJZEuJ_cCzwRLn13Q7OFDzVk3ir88")