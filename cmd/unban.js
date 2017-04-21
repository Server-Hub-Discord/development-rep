exports.run = (bot, message) => {
    let args = message.content.split(" ").slice(1);
    if (!args) {
        message.channel.sendMessage(` name : "unban",
                                      description: "unbans the selected user",
                                      usage: "unban {user id}"`);
        return;
    }
    message.guild.unban(args[0]).catch(console.error);
    message.channel.sendMessage(`unbanned user ${args}`).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['letbackin'],
  permLevel: 2
};

exports.help = {
  name : "unban",
  description: "unbans the selected user",
  usage: "ban {user id}"
};
