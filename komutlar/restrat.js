const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.delete();
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle('RetroV ROLEPLAY RESTART')
  .setDescription('restart: Sunucumuza restart atılıyor. Lütfen aktif vermeden giriş yapmayınız.')
  .setImage('https://j.gifs.com/y4Qwdj.gif')
  message.channel.send('||@everyone|| ||@here||',{embed});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["res",],
  permLevel: 2,
  kategori:"genel"
};

exports.help = {
  name: 'res',
  description: 'Sunucu Restart Atılacak Komut',
  usage: 'res'
};