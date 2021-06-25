
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 
var prefix = ayarlar.prefix;
 
exports.run = async(client, message, args) => {
 
        const alone= new Discord.MessageEmbed()
 
             .setColor('#fff000')
             .setAuthor(`Kategoriler`, client.user.avatarURL())
             .setThumbnail(client.user.avatarURL())
             .addField(`Kategoriler`, `${prefix}aktif  \n ${prefix}bakım \n ${prefix}res \n ${prefix}kayıt \n ${prefix}ip `) 
             .addField(`Linkler ->`, `[Sunucumuz](https://discord.gg/jTkju7uxCv)`) 
             .setFooter(`Menüyü ${message.author.username} istedi.(coded alone)`, message.author.avatarURL())
           
        return message.channel.send(alone);
}
 
exports.conf = {
        enabled : true,
        guildOnly : false,
        aliases : ['help'],
        permLevel : 0
}

exports.help = {
        name : 'yardım',
        description : 'Komut kategorilerini atar',
        usage : '!yardım'
}