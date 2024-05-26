const { Client, Intents, MessageEmbed } = require('discord.js-selfbot-v13');
const AutoFarm = require("auto-farm")
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const client2 = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const { joinVoiceChannel } = require('@discordjs/voice');


client.on("message",async message=>{
  if(message.content.includes("@everyone") || message.content.includes("@here") || message.content.includes(`<@!${client.user.id}>`) || message.content.includes(`بدون شروط`)||message.content.includes(`بلا شرط`)){
    if(!message.content.includes("انفايت")&&!message.content.includes("بشرط")&&!message.content.includes("فرند")){
    const allMessages = await message.channel.messages.fetch({ 
            limit: 100
          })
    allMessages.forEach(async id=>{
      let messager = await message.channel.messages.fetch(id.id);
      if(messager.reactions){
        if(messager.reactions.cache){
          let reactions = messager.reactions.cache;
          if(reactions.size > 0){
            reactions.forEach(reaction=>{
              if(reaction.emoji.id){
                messager.react(reaction.emoji.id);
                              
              }else{
                messager.react(reaction.emoji.name);
              }

            })
          }
        }
      }

    })
    }
  }
})
AutoFarm({
Client: client, // Type Client
ChannelID: "1203351187642916896", // ID Text Channel
Pass: "@#&£!;?+-£/0><|0l", // To Get Pass Contact With Owner Package
Time: 15,
})

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
