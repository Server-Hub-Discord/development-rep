const Discord = require("discord.js");
const bot = new Discord.Client({ fetchAllMembers: true });
const config = require("./config.json");
const fs = require("fs");
const moment = require("moment");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir(`./cmd/`, (err, files) => {
  if(err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./cmd/${f}`);
    console.log(`Loading Command: ${props.help.name}. :ok_hand:`);
    bot.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});

bot.on("message", msg => {
  if (!msg.content.startsWith(config.prefix)) return;
  if (msg.channel.type === "dm") return;
  let command = msg.content.split(" ")[0].slice(config.prefix.length);
  let params = msg.content.split(" ").slice(1);
  let perms = bot.elevation(msg);
  let cmd;
  if (bot.commands.has(command)) {
    cmd = bot.commands.get(command);
  } else if (bot.aliases.has(command)) {
    cmd = bot.commands.get(bot.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(bot, msg, params, perms);
  }
});

bot.on('ready',() => {
	console.log(`---------------------------------------------`)
	console.log(`Connected! ${config.emojis.success}`);
	console.log(`Logged in as ${bot.user.username}`);
	console.log(`token = isa secret *shhhhh*`);
	console.log(`game = ${config.setgame}`);
	console.log(`prefix = ${config.prefix}`);
	console.log(`console emojis = ${config.emojis.warn} ${config.emojis.success} ${config.emojis.working}`)
	console.log(`---------------------------------------------`)
	bot.user.setGame(config.setgame);
});

bot.on("error", console.error);
bot.on("warn", console.warn);

bot.login(config.token);

bot.on("guildBanAdd", (guild, user) =>{
	bot.channels.get("288411971437461505").sendMessage("", {embed: {
		color: 0xFF0000,
		description: `:hammer: **User Banned:** ${user.username}#${user.discriminator} (${user.id})`
	}}).catch(console.error);
});

bot.on("guildBanRemove", (guild, user) =>{
	bot.channels.get("288411971437461505").sendMessage("", {embed: {
		color: 0x00FF00,
		description: `:hammer: **User Unbanned:** ${user.username}#${user.discriminator} (${user.id})`
	}}).catch(console.error);
});

bot.on("guildCreate", guild => {
	console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user} ${config.emojis.working}`).catch(console.error);
	if (!guild.id === '260882540238209024') {
		var noto = `Hey I'm ${bot.user.username}.\n Unfortunatley I'm a bot made for this server only https://discord.gg/tPksgxK.\n Feel free to join ;) but please dont use commands unless they're normal shitposting commands`;
		var embed = new Discord.RichEmbed();
			embed.setColor(randomcolor())
				.setDescription(noto)
		guild.defaultChannel.sendEmbed(
			embed, {
				disableEveryone: true
			}
		);
	}
}); // this code does so that when the bot joins a server it says to the hoster

bot.reload = function(command) {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      bot.commands.delete(command);
      bot.aliases.forEach((cmd, alias) => {
        if (cmd === command) bot.aliases.delete(alias);
      });

      bot.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        bot.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

bot.elevation = function(msg) {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let mod_role = msg.guild.roles.find("name", "Staff");
  if((mod_role && msg.member.roles.has(mod_role.id)) || config.creator.Jimmy.includes(msg.author.id) || msg.author.id === "223086685758554113") permlvl = 2;
  let admin_role = msg.guild.roles.find("name", "Owner");
  if((admin_role && msg.member.roles.has(admin_role.id)) || config.creator.Jimmy.includes(msg.author.id)) permlvl = 3;
  if(config.creator.Jimmy.includes(msg.author.id)) permlvl = 4;
  return permlvl;
};
