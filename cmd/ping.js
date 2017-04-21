exports.run = (bot, message) => {
	message.channel.sendMessage("Ping...")
        .then(msg => msg.edit(`Pong! \`${msg.createdTimestamp - message.createdTimestamp}ms\``))
        .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uon'],
  permLevel: 0
};

exports.help = {
  name : "ping",
  description: "checks bot's reply speed",
  usage: "ping"
};
