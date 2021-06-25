const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.delete();
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle('RetroV ROLEPLAY BAKIM')
  .setDescription('Sunucumuza bakım yapılacaktır lütfen giriş yapmayınız. Giriş yaptığınız taktirde oluşacak olan sorunlardan sorumlu değiliz.')
  .setImage('')

  message.channel.send('||@everyone|| ||@here||',{embed});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bakım",],
  permLevel: 2,
  kategori:"genel"
};

exports.help = {
  name: 'bakım',
  description: 'Sunucu bakım komutu',
  usage: '*bakım'
};