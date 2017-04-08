exports.run = (bot, message, params)  => {
	let args = message.content.split(' ');
	args.shift();
	args.shift();
	let role = message.guild.roles.find("name", args.join(" "));
	// Let's pretend you mentioned the user you want to del a role from (!addrole @user Role Name):
	let member = message.guild.member(message.mentions.users.first());
	// or the person who made the command: let member = msg.member;
	// remove the role!
	if (!member) {
		message.author.removeRole(role.id).catch(console.error);
		message.channel.sendMessage("role " + args.join(" ") + " has been added  👍");
	}
	member.removeRole(role.id).catch(console.error);
	message.channel.sendMessage("role " + args.join(" ") + " has been deleted  👍");
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
