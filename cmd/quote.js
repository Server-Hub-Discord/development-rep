exports.run = (bot, msg) => {
var quote = msg.content.split(" ").slice(1).join(" ");
msg.delete();
if (quote.length < 1) {
    return msg.channel.sendMessage("Please specify a message ID.");
}
msg.channel.fetchMessages({
    limit: 1,
    around: quote
}).then(msgs => {
    const fm = msgs.first();
    msg.channel.sendMessage("", {
        embed: {
            color: 0x3cb8c9,
            author: {
                name: `${fm.author.username} (${fm.author.id})`,
                icon_url: fm.author.avatarURL
            },
            description: fm.content
        }
    });
});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['q'],
  permLevel: 2
};

exports.help = {
  name : "quote",
  description: "quotes message in that channel",
  usage: "quote [msg id]"
};
