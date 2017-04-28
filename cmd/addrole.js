exports.run = (bot, message, params)  => {
	let args = message.content.split(' ');
	let member = message.guild.member(message.mentions.users.first());
	if (!member) {

		let author = message.member;
		args.shift();
		let role = message.guild.roles.find("name", args.join(" "));
		author.addRole(role.id).catch(console.error);
		message.channel.sendMessage("role " + args.join(" ") + " has been added  👍");

	} else if (member) {

		args.shift();
		args.shift();
		let role = message.guild.roles.find("name", args.join(" "));
	// Add the role!
	member.addRole(role.id).catch(console.error);
	message.channel.sendMessage("role " + args.join(" ") + " has been added  👍");
	return;

}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ar'],
  permLevel: 2
};

exports.help = {
  name : "addrole",
  description: "adds role to a user",
  usage: "addrole {user} [role]"
};
