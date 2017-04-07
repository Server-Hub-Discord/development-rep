exports.run = (bot, message, args) => {
		message.channel.sendMessage(args.join(" ")).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name : "say",
  description: "makes the bot say what you want it to",
  usage: "say [your message]"
};
