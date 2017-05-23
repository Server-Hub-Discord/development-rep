exports.run = (bot, message, params) => {
	let CHannel = message.mentions.channels.first() || null;
	if (!CHannel) {return message.reply("please mention a channel when using this command");}
		let noto = message.content.split(" ").slice(2).join(" ");
	  CHannel.sendMessage("", {embed: {
			description: noto
		}}).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['esubmit'],
  permLevel: 2
};

exports.help = {
  name : "embedsubmit",
  description: "makes the bot send a message in the channel specified through an embed",
  usage: "embedsubmit [the submitted form]"
};
