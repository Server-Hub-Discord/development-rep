exports.run = (bot, message, params) => {
	let CHannel = message.mentions.channels.first() ? message.mentions.channels.first() : null;
	CHannel ? (const messageContent = message.content.split(" ").slice(2).join(" ");
  			CHannel.sendMessage(messageContent).catch(console.error);
			message.channel.sendMessage("Done :white_check_mark:");) : (
	message.channel.sendMessage(params););
	 

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
