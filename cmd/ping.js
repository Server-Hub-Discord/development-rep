exports.run = (bot, message) => {
	message.channel.sendMessage("Ping...")
        .then(msg => msg.edit(`Pong! \`${msg.createdTimestamp - message.createdTimestamp}ms\``))
        .catch(console.error);
};
