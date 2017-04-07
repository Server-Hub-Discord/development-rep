exports.run = (bot, message) => {
    let args = message.content.split(" ").slice(1);
		message.channel.sendMessage("Their GitHub link is <https://github.com/" + args[0] + "/>")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['glm'],
  permLevel: 0
};

exports.help = {
  name : "githublinkmaker",
  description: "makes a github link",
  usage: "githublinkmaker [the part after https://github.com/]"
};
