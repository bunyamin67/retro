const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Sunucuya Optimize Edildim !'
  
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.send(girismesaj)
	client.user.setActivity(prefix + 'yardım | ' + client.guilds.cache.size + ' sunucu | ' + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})