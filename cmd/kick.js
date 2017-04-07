exports.run = (bot, message) => {
    let userToKick = message.mentions.users.first();
    message.guild.member(userToKick).kick().catch(console.error);
    message.channel.sendMessage(`kicked.`).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name : "kick",
  description: "kicks the selected user",
  usage: "kick {user}"
};
