exports.help = {
	name: "s!botservers a list of servers"
};

module.exports = function (bot, message, args, config) {
    message.channel.sendMessage(bot.guilds.map(g => `${g.name} | ${g.memberCount}`));
};
