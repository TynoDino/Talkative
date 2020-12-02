const discord = require("discord.js")
const client = new discord.Client()
const alexa = require('alexa-bot-api')
const chatbot = new alexa("i hate you")
const prefix = ";"
const noReply = [";help", ";vote", ";donate"]

client.login("bot token goes here")

client.on('ready', () => {
    console.log(client.user.tag + "is online")
    client.user.setActivity(";donate ;vote ;help", {type: 'PLAYING'})
    client.guilds.cache.forEach((guild) => {console.log(guild.name)})
});

var donateray = [
    "thanks for considering a donation, heres the links",
    "if you donate, i'll be alive for longer. please, theres the links",
    "help to support me by paying a part of my web hosting fees at",
    ]
    
    var voteray = [
        "if you could vote for me on discord bot list and top.gg, it would be greatly appreciated",
        "please vote for me on discord bot list and top.gg, it only takes like 2 clicks and lets me talk to more people!",
    ]
    
    var helpray = [
        "if you are consfused, all you gotta do is start a conversation with me using the semicolon(;) as a prefix. e.g: ;hello, how are you today? Also, dont forget to donate and vote for me with ;donate and ;vote",
        "i'm pretty lonely, but i love to talk. so please initiate a conversation with me but with a semicolon(;) as a prefix. e.g: ;hello, how are you today? Also, dont forget to donate and vote for me with ;donate and ;vote",
    ]
    
    client.on('message', async (message) => {
        if(message.author.bot) return;
        if(message.content == '?donate')
            message.channel.send(donateray[Math.floor(Math.random() * donateray.length)] + " https://www.patreon.com/tynodino or https://paypal.me/tinosolomon?locale.x=en_US%22")
        if(message.content == '?vote')
            message.channel.send(voteray[Math.floor(Math.random() * voteray.length)] + " https://top.gg/bot/750483670372188334 and https://discordbotlist.com/bots/talkativev2%22")
        if(message.content == '?help')
            message.channel.send(helpray[Math.floor(Math.random() * helpray.length)])
    });

client.on('message', async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    let content = message.content;
    if(message.content = noReply) return;
    chatbot.getReply(content).then (r => message.channel.send(r))
});

