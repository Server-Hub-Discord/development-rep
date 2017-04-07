exports.run = (bot, message) => {
    message.channel.sendMessage("no hanky panky while I'm gone ok :wave:")
		bot.destroy()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name : "shutdown",
  description: "shuts down the bot",
  usage: "shutdown"
};
