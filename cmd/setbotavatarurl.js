exports.run = (bot, message) => {
 		let args = message.content.split(" ").slice(1);
		let text = args[0];
		bot.user.setAvatar(text);
		message.channel.sendMessage("my profile pic has been changed to " + text);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sbau'],
  permLevel: 4
};

exports.help = {
  name : "setbotavatarurl",
  description: "changes the bots avatar",
  usage: "setbotavatarurl [url]"
};
