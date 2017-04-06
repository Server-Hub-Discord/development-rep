const moment = require('moment');
exports.run = (bot, message) => {
  let noto = message.content.split(" ").slice(1).join(" ");
	  bot.channels.get('260884357894373376').sendMessage("**:information_source: Announcement [" + moment().format("Do MMMM YYYY ") + "]**", {embed: {
			color: 0x00b7c6,
			description: noto,
			footer: {
				text: `${message.author.username}#${message.author.discriminator}`,
				icon_url: message.author.avatarURL
			}
		}}).catch(console.error);
    message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name : "announce",
  description: "announces your message in #announcements",
  usage: "announce [your message]"
};
