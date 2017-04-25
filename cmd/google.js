const google = require('google');

google.resultsPerPage = 3;

exports.run = (bot, message, params) => {
  google(params, function (err, res){
  if (err) console.error(err);

    message.channel.sendMessage(" ", {embed: {
      title: `Search: ${params}`,
      fields: [
    {
      name: `Result:`,
      value: `[${res.links[0].title}](${res.links[0].href}) \n ${res.links[0].description}`
    }
  ]
    }});
    if (res.links[2]) {
    message.channel.sendMessage(`See also \n ${res.links[1].href} \n ${res.links[2].href}`);
  }
  else if (res.links[1]) {
    message.channel.sendMessage(`See also \n ${res.links[1].href}`);
  }
  else if (res.links[0]) {
    return;
  }
  }
)};

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
