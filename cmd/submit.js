exports.run = (bot, message, params) => {
	let CHannel = message.mentions.channels.first() || null;
	if (!(CHannel === null)) {
		let messageContent = message.content.split(" ").slice(2).join(" ");
  			CHannel.sendMessage(messageContent).catch(console.error);
			message.channel.sendMessage("Done :white_check_mark:");
			return;

	} else if (!(CHannel) && (params)){
	message.channel.sendMessage(params);
	return;
} else if (!(CHannel) && !(params)){
	message.channel.sendMessage(`name : "submit", \n
  description: "makes the bot send a message in the channel specified", \n
  usage: "submit [the submitted form]"`);
}


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name : "submit",
  description: "makes the bot send a message in the channel specified",
  usage: "submit [the submitted form]"
};
