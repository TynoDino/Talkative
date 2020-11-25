const discord = require("discord.js")
const client = new discord.Client()
const alexa = require('alexa-bot-api')
const chatbot = new alexa("i hate you")
const prefix = ";"

client.login("NzUwNDgzNjcwMzcyMTg4MzM0.X07MYg.m0Wzb7D7Wc4DlenYnuZi1sefcp4")

client.on('ready', () => {
    console.log("talkative is online")
    client.user.setActivity("messages that start with semicolons", {type: "LISTENING"})
});

client.on('message', async message => {
    if(message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let content = prefix + message.content;
    chatbot.getReply(content).then (r => message.channel.send(r))
});

