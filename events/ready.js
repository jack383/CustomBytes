const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

var prefix = ".";

module.exports = client => {

    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Active, Commands loaded!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} Logged in with the name!`);
  client.user.setStatus("online");
};
