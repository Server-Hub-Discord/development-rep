//modules
const moment = require('moment');
const randomcolor = require('randomcolor');
const Discord = require("discord.js");
const fs = require('fs');

//bot client
const bot = new Discord.Client();

//json(s)
const config = require("./config.json");

const commands = new Map();
fs.readdir(`./cmd/`, (err, files) => {
  if(err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.map(f=> {
    let props = require(`./cmd/${f}`);
    commands.set(props);
  });
});

bot.on('ready',() => {
	console.log(`---------------------------------------------`)
	console.log(`Connected! ${config.emojis.success}`);
	console.log(`Logged in as ${bot.user.username}`);
	console.log(`token = ${config.token}`);
	console.log(`game = ${config.setgame}`);
	console.log(`prefix = ${config.client.prefix}`);
	console.log(`console emojis = ${config.emojis}`)
	console.log(`---------------------------------------------`)
	bot.user.setGame(config.setgame);
});

bot.on('message', msg => {
  if(!msg.content.startsWith(config.prefix)) return;
  var command = msg.content.split(" ")[0].slice(config.prefix.length);
  var params = msg.content.split(" ").slice(1);
  if(commands.has(command)) {
    var cmd = commands.get(command);
    cmd(bot, msg, params, config);
  }
});
