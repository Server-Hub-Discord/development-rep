exports.run = (bot, message) => {
    message.channel.sendMessage(bot.guilds.map(g => `${g.name} | ${g.memberCount}`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bservers'],
  permLevel: 0
};

exports.help = {
  name : "botservers",
  description: "Returns all servers the bot is in and their amount of members",
  usage: "help [command]"
};
