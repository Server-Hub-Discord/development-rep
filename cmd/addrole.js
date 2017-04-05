exports.run = (bot, maessage, params)  => {
	let args = message.content.split(' ');
	args.shift();
	args.shift();
	let role = message.guild.roles.find("name", args.join(" "));
	// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
	let member = message.guild.member(message.mentions.users.first());
	// or the person who made the command: let member = msg.member;
	// Add the role!
	member.addRole(role.id).catch(console.error);
	message.channel.sendMessage("role " + args.join(" ") + " has been added  👍");
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
