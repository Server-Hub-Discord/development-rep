module.exports = function (bot, message, args) {
    message.channel.sendMessage(bot.guilds.map(g => `${g.name} | ${g.memberCount}`));
};
