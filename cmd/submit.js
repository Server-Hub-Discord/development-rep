exports.run = (bot, message) => {
      let CHannel = message.mentions.channels.first();
			if (CHannel !== null) {
  			const messageContent = message.content.split(" ").slice(3).join(" ");
  			CHannel.sendMessage(messageContent).catch(console.error);
					message.channel.sendMessage("Done :white_check_mark:")
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
  usage: "submit"
};
