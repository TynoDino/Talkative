const discord = require("discord.js")
const client = new discord.Client()
const alexa = require('alexa-bot-api')
const chatbot = new alexa("i hate you")
const prefix = ";"

client.login("bot token goes here")

client.on('ready', () => {
    console.log(client.user.tag + "is online")
    client.user.setActivity("messages that start with semicolons", {type: "LISTENING"})
    client.guilds.cache.forEach((guild) => {console.log(guild.name)})
});

client.on('message', async message => {
    if(message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let content = prefix + message.content;
    chatbot.getReply(content).then (r => message.channel.send(r))
});

