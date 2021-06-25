const Discord = require('discord.js');

module.exports.run = async (Octopus, message, args) => {
  let msg = await message.channel.send("Sunucu IP :ip girecez");
  let msg1 = await message.channel.send("TS IP :ip gircez");
  let testembed = new Discord.MessageEmbed()
  .setColor("0xe2ff00")
  .setDescription("Sunucu Aktifdir RetroV roleplay İyi Roller Dileriz.")
  message.channel.send(testembed);
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['t'], 
  permLevel: 4,
  kategori:"yapımcı"
};

exports.help = {
  name: 'ip', 
  description: 'taslak', 
  usage: 'ip'
};