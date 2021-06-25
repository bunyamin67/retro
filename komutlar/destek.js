const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.channel.id != "836766946589933568") return message.channel.send("bu komutu bu kanalda kullanabılırsın <#836766946589933568>") 
  
  const embed = new Discord.MessageEmbed()
    .setTitle('RetroV ROLEPLAY DESTEK')
    .setDescription('Destek ekibi en kısa zamanda cevap verecektir ')
    .setImage('')
    .setColor("RANDOM")
    message.channel.send('||<@&781146966222045194> <@&780922841762627616>||',{embed});
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["destek",],
  permLevel: 0,
  kategori:"genel"
};

exports.help = {
  name: 'destek',
  description: 'Kayıt İçin Yetkililere Seslenme Komutu',
  usage: 'destek'
};


