exports.run = (bot, message) => {
  message.channel.sendMessage(`${message.guild.memberCount}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mcount'],
  permLevel: 0
};

exports.help = {
  name : "membercount",
  description: "Returns the member count of the server",
  usage: "membercount"
};
