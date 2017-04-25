exports.run = (bot, message, params)  => {
	let args = message.content.split(' ');
	let member = message.guild.member(message.mentions.users.first());
	if (!member) {

		let author = message.member;
		args.shift();
		let role = message.guild.roles.find("name", args.join(" "));
		author.removeRole(role.id).catch(console.error);
		message.channel.sendMessage("role " + args.join(" ") + " has been added  👍");

	} else if (member) {

		args.shift();
		args.shift();
		let role = message.guild.roles.find("name", args.join(" ")).catch(console.error);
	// Add the role!
	member.removeRole(role.id).catch(console.error);
	message.channel.sendMessage("role " + args.join(" ") + " has been added  👍");
	return;

}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dr'],
  permLevel: 2
};

exports.help = {
  name : "delrole",
  description: "deletes role to a user",
  usage: "delrole {user} [role]"
};
