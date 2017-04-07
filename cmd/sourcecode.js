exports.run = (bot, message) => {
    let noto = 'Main Repository https://github.com/Server-Hub-Discord/Staff-Mod-Bot \n\n  Dev repository (the bot is running on dev right now https://github.com/Server-Hub-Discord/development-rep/) ';
		message.channel.sendMessage("", {embed: {
		title: noto
	}}).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "sourcecode",
  description: "sends a link to the repositories",
  usage: "sourcecode"
};
