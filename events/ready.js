const { ActivityType } = require('discord.js');
const client = require('..');
const db = require("orio.db")

client.on("ready", () => {
    var status = db.fetch(`bot_status`) 
    let activities = ["Hello my Anju+", "Hello world 👋", "Hi 💖"], i = 0;
   
    client.user.setStatus(status|| "idle")
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type : ActivityType.Competing , url : `https://www.twitch.tv/sanctusfurki` }), 22000);

	console.log(`Logged in as ${client.user.username}!`)
});