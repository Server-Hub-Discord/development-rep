exports.run = (bot, message) => {
    const toHHMMSS = seconds => {
     	     let secNum = parseInt(seconds, 10);
     	     let hours = Math.floor(secNum / 3600);
     	     let minutes = Math.floor((secNum - (hours * 3600)) / 60);
     	     seconds = secNum - (hours * 3600) - (minutes * 60);
     	     if (hours < 10) hours = "0" + hours;
     	     if (minutes < 10) minutes = "0" + minutes;
     	     if (seconds < 10) seconds = "0" + seconds;
     	     return hours + ":" + minutes + ":" + seconds;
     	 };
       message.channel.sendMessage("", {embed: {
		        title: "**Uptime: " + toHHMMSS(process.uptime()) + " **"
	    }}).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "uptime",
  description: "sends the bots uptime",
  usage: "uptime"
};
