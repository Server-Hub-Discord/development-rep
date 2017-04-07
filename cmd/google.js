const google = require('google');

google.resultsPerPage = 3;
var nextCounter = 0;



exports.run = (bot, message, params) => {
  google(params, function (err, res){
  if (err) console.error(err);

  for (var i = 0; i < res.links.length; ++i) {
    var link = res.links[i];
    message.channel.sendMessage(link.title + ' - ' + link.href);
    message.channel.sendMessage(link.description + "\n");
  }

  if (nextCounter < 4) {
    nextCounter += 1;
    if (res.next) res.next();
  }
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "google",
  description: "searches google",
  usage: "google [what you want to search]"
};
