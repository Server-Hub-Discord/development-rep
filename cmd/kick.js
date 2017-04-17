exports.run = (bot, message) => {
    let userToKick = message.mentions.users.first();
    if (!userToKick) {
    message.channel.sendMessage(`name : "kick", \n
  description: "kicks the selected user", \n
  usage: "kick {user}"`);
        return;
    }
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
