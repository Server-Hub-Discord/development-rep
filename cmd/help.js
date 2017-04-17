const config = {
"creator": {
    "Jimmy": ["226003765889597440", "168794245178720256", "225216075439013888"]
 },
 "client": {
    "prefix": "s!"
 }
};

exports.run = (bot, message, params) => {
    if (!params[0]) {
      message.channel.sendMessage("check your dms :rocket:").catch(console.error);
      let modRole = message.guild.roles.find("name", "Staff");
      let adminRole = message.guild.roles.find("name", "Owner");
      var cmds = ``;
      cmds += `**Warning this is the dev rep so not all commands are fully functional** \n\n **My Normal Commands are:** \n
                ${config.client.prefix}membercount \n
                ${config.client.prefix}serverinfo \n 
                ${config.client.prefix}botservers \n 
                ${config.client.prefix}date \n 
                ${config.client.prefix}sourcecode \n 
                ${config.client.prefix}avatar \n 
                ${config.client.prefix}ping \n 
                ${config.client.prefix}help \n 
                ${config.client.prefix}stats \n 
                ${config.client.prefix}userinfo \n 
                ${config.client.prefix}uptime \n
                ${config.client.prefix}wiki \n
                ${config.client.prefix}google \n
                ${config.client.prefix}userinfo \n
                ${config.client.prefix}githublinkmaker
                `;
      if (message.member.roles.has(modRole.id) || config.creator.Jimmy.includes(message.author.id)) {
          cmds += `\n\n **My Staff commands are** \n 
                ${config.client.prefix}embed [what you want to embed] \n 
                ${config.client.prefix}addrole {user} [role] \n 
                ${config.client.prefix}delrole {user} [role] \n 
                ${config.client.prefix}announce [what you want to announce in #announcements] \n 
                ${config.client.prefix}say [what you want the bot to say] \n 
                ${config.client.prefix}kick {user} \n 

                \n more details on how to use these commands coming soon`;
      }
      if (message.member.roles.has(adminRole.id) || config.creator.Jimmy.includes(message.author.id)) {
          cmds += `\n\n **My Owner/Creator Commands are:** \n 
                ${config.client.prefix}setbotavatarurl (only Jimmy) \n 
                ${config.client.prefix}setstatus (only Jimmy) \n
                ${config.client.prefix}setgame (only Jimmy) \n 
                ${config.client.prefix}shutdown \n 
                ${config.client.prefix}restart`;
      }
      message.author.sendMessage(" ", {
          embed: {
              color: 0x00b7c6,
          title: "Command List",
          description: cmds,
    }}).catch(console.error);
  } else {
    let command = params[0];
    if(bot.commands.has(command)) {
      command = bot.commands.get(command);
         message.channel.sendMessage(" ", {
          embed: {
              color: 0x00b7c6,
          title: `${command.help.name} = \n ${command.help.description}. \n \n usage: ${command.help.usage}`
    }}).catch(console.error);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "help",
  description: "Returns page details from root's awesome bot guide.",
  usage: "help [command]"
};
