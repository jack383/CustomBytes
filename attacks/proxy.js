const https = require('https');
const fs = require('fs');
const Discord = require("discord.js");
const moment = require('moment');
const { MessageEmbed } = require("discord.js");


module.exports.run = async (bot, message, args) => {
    var url = "https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks4&timeout=10000&country=all"
    const file = fs.createWriteStream("socks_proxies.txt")
    fs.writeFileSync('socks_proxies.txt', ' ');
    const request = https.get(url, function(response) {
        response.pipe(file)
    });

const proxy  = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Custompayload >> Request accepted!')
.setDescription('Starting downloading...')
.addField('Information', "The proxies downloaded for 3 servers")


message.channel.send(proxy)
}


module.exports.help = {
    name: "update",
    aliases: ["upd"]
}
