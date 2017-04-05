exports.run = (bot, message) => {
  let noto = message.content.split(" ").slice(1).join(" ");
  message.channel.sendMessage("", {embed: {
		description: noto
	}}).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name : "embed",
  description: "embeds your message",
  usage: "embed [your message]"
};
