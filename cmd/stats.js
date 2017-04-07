const randomcolor = require('randomcolor');
const Discord = require('discord.js');

exports.run = (bot, message) => {
    var embed = new Discord.RichEmbed();
		embed.setColor(randomcolor())
			.setFooter(' ', ' ')
			.setThumbnail(`${bot.user.avatarURL}`)
			.setTimestamp()
			.addField('Servers', `${bot.guilds.size}`, true)
			.addField('Users', `${bot.users.size}`, false)
			.addField('Discord Version', `${Discord.version}`, false)
			.addField('Uptime', (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(bot.uptime / 1000) % 60) + " seconds")
		message.channel.sendEmbed(
			embed, {
				disableEveryone: true
			}
		);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "stats",
  description: "sends the bots stats",
  usage: "stats"
};
