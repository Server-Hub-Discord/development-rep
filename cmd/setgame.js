exports.run = (bot, message, params) => {
  bot.user.setGame(params);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name : "setgame",
  description: "sets the bot's game",
  usage: "setgame [the game]"
};
