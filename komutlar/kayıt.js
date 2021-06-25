const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(message.channel.id != "810825207967252501") return message.channel.send("bu komutu bu kanalda kullanabılırsın <#810825207967252501>")

  const embed = new Discord.MessageEmbed()
    .setTitle('RetroV ROLEPLAY KAYIT')
    .setDescription('Yetkili ekibimiz sizinle en kısa sürede ilgilenecektir o sırada | 💾 | Kayıt Bekleme  | odasına girip bekleyiniz. ')
    .setImage('')
    .setColor("RANDOM")
    message.channel.send('||<@&781146966222045194> <@&780922841762627616>||',{embed});
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt",],
  permLevel: 0,
  kategori:"genel"
};

exports.help = {
  name: 'kayıt',
  description: 'Kayıt İçin Yetkililere Seslenme Komutu',
  usage: 'kayıt'
};


