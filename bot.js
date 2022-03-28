const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment')
require('./util/eventLoader')(client);

var colors = require('colors');
var prefix = ".";

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./attacks/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) {
    process.exit(1);
    return;
  }

  jsfile.forEach((f) =>{
    let props = require(`./attacks/${f}`);
    console.log(`Loaded ${f}.`);
    client.commands.set(props.help.name, props);
  });
})

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./attacks/${command}`)];
      let cmd = require(`./attacks/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./attacks/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./attacks/${command}`)];
      let cmd = require(`./attacks/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ".") permlvl = 4;
  return permlvl;
};

client.login("ODc3NTE1MDYxOTIzNTY5NzE1.YRzvlg.pFVS3hd9uyHdu4QZcmnL1h4BJqs");

