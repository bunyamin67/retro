const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`alone | Bot Hostlandı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const Jimp = require("jimp")
const request = require('node-superfetch');
const ms = require('parse-ms')
const moment = require('moment');
require('./util/eventLoader')(client);
let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));
let kufurEngel = JSON.parse(fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8"));
let hereEngel = JSON.parse(fs.readFileSync("././jsonlar/hereEngelle.json", "utf8"));



var prefix = ayarlar.prefix;

//----------------------Bot'un Bağlandı Kısmı -----------------------------//

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("ready", () => {
  client.user.setActivity(`"RetroV ROLEPLAY"`, "https://servers.fivem.net/servers/detail/91.151.89.223");
        }, 
  console.log("Bağlandım!")
);

//----------------------Bot'un Bağlandı Kısmı SON-----------------------------//

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

/////////////////////////////////////////////////////
// DİSCORD BOT
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// yarra
/////////////////////////////////////////////////////



client.on("message", msg => {
  var dm = client.channels.cache.get("781140225224212516"); //mesajın geleceği kanal idsi//
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("BLUE")
      .setThumbnail(`${msg.author.avatarURL()}`)
      .addField(" Gönderen ", msg.author.tag)
      .addField("  Gönderen ID :", msg.author.id)
      .addField(" Gönderilen Mesaj", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});


//----------------------------------GİRİŞ ÇIKIŞ SON-----------------------------// 
client.on('guildCreate', async guild => {
  let devtr = '780922841616089119' //Botun girebilmesini istediğiniz sunucunun ID'sini giriniz.
  let log = '781140225224212518' //Log kanalının ID'sini giriniz.
  
  
  
  if(!devtr) return client.channels.cache.get(log).send(`Girebileceğim Sunucuyu Yazmamışsın`)
  if(guild.id === devtr) return; 
  client.channels.cache.get(log).send(`${guild.name} sunucusuna eklendim, fakat sunucudan ayrıldım.`) 
  guild.leave();
});