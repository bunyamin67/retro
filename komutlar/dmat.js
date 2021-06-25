const Discord = require('discord.js');
let ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;
 

exports.run = function(client, msg) {
  
  
  let mesaj = msg.mentions.members.first();
let msgd = msg.content.substring(3);
if(!mesaj){
  msg.reply('* DM atmam için bir kullanıcı etiketlemelisin.! ['+prefix+'dm Mesaj @Kullanıcı]**');
}if(mesaj){
  if(!msg.member.hasPermission("ADMISTRATOR")){
    msg.reply('** Yetkiniz yetmiyor..**');
  }else{
    const Embed = new Discord.MessageEmbed()
    .setTitle('Bir mesaj')
    .setDescription('Sana bir mesaj geldi;\n**'+msgd+'**')
    if(msg.author.id === '434754958349565952'){ //sahip id
      mesaj.send(Embed);
      msg.reply('**Mesaj gönderildi! **');
    }if(msg.author.id === ''){ //sahip id
         mesaj.send(Embed);
      msg.reply('**Mesaj gönderildi!**');
    }
    else{
      msg.reply('**Bunu yapamazsınız....**');
      
    }
  }
}
};
 
exports.conf = {
  enabled: false, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['dm'], //farklı çağrılar ekledik
  permLevel: 4 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};
 
exports.help = {
  name:'dm', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirlediğiniz kişiye DMden mesaj atar.', //açıklaması
  usage: 'dm' //komutun kullanım şekli (mesela hava <bölge>)
};