exports.run = (bot, message) => {
  let args = message.content.split(' ');
		args.shift();
		args.shift();
		let member = message.guild.member(message.mentions.users.first());
    if (!member) {
      message.channel.sendMessage(message.author.avatarURL);
      return;
    }
		return message.reply(member.user.avatarURL)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name : "avatar",
  description: "sends your avatar or the user you mentions avatar",
  usage: "avatar {user you can mention if you want to}"
};
