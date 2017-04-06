exports.run = (bot, msg, params) => {
  bot.user.setStatus(params);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setstat'],
  permLevel: 4
};

exports.help = {
  name : "setstatus",
  description: "changes the bots status",
  usage: "setstatus [online || invisible || idle || dnd]"
};
