const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== ayarlar.sahip)  return message.channel.send("Geliştiricim Değilsin Bu Komutu kullanamazsın.!")
     
    message.channel.send(`Başarılı! Bot yeniden başlatılıyor...`)
      message.delete(60).then(msg => {

    console.log(`Bot yeniden başlatılıyor...`);

    process.exit(0);
  })
     
           
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 4
};

module.exports.help = {
  name: 'reboot',
  description: 'reboot',
  usage: 'reboot'
};