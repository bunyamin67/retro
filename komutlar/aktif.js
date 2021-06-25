const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.delete();
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle('RetroV ROLEPLAY AKTİF')
  .setDescription('Sunucumuz şu anda aktiftir. Giriş Yapabilirsiniz herhangi bir sorunla karşılaşırsanız eğer desteğe gelip yönetim ekibimiz ile iletişime geçebilirsiniz')
  .addField(`Sunucu Ip Adresimiz`,`ıp`, true)
  .addField(`TeamSpeak 3 Adresimiz`,`ıp` , true)
  .addField(`» Linkler`, `[Launcher]()`)
  .setImage('https://media1.tenor.com/images/45ab13838ecb1a0ce88ac8179b3c10cf/tenor.gif?itemid=19363342')
  message.channel.send('||@everyone|| ||@here||',{embed});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["online",],
  permLevel: 2,
  kategori:"genel"
};

exports.help = {
  name: 'aktif',
  description: 'Sunucu Aktifse Atılacak Komut',
  usage: 'aktif'
};