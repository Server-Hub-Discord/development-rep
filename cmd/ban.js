exports.run = (bot, message) => {
    let args = message.content.split(" ").slice(1);
    let userToKick = message.mentions.users.first() ? message.mentions.users.first() : args[0];
    if (!userToKick) {
        message.channel.sendMessage(` name : "ban",
                                      description: "bans the selected user",
                                      usage: "ban {user mention or user id}"`);
        return;
    }
    message.guild.ban(userToKick).catch(console.error);
    message.channel.sendMessage(`banned user ${userToKick}`).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['getridof'],
  permLevel: 2
};

exports.help = {
  name : "ban",
  description: "bans the selected user",
  usage: "ban {user mention or user id}"
};
