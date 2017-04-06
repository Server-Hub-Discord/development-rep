exports.run = (bot, message) => {
    let noto = 'https://github.com/Server-Hub-Discord/Staff-Mod-Bot/wiki/Progress';
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
  name : "wiki",
  description: "sends a link to the wiki",
  usage: "wiki"
};
