exports.run = (bot, message) => {
  var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day  = date.getDate();
		message.channel.sendMessage("it's the **`" + day + "/" + month + "/" + year + "`** where my hoster lives");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "date",
  description: "shows tthe date in belgium",
  usage: "date"
};
