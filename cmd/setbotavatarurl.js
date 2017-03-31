const config = require('../../config.json');

module.exports = function (bot, message, args) {
  if (!config.creator.Jimmy.includes(message.author.id)) {
			return message.reply("pleb ur not the bot creator").catch(console.error);
		}
		let args = message.content.split(" ").slice(1);
		let text = args[0];
		bot.user.setAvatar(text);
		message.channel.sendMessage("my profile pic has been changed to " + text);
};
