module.exports = member => {
    let guild = member.guild;
    member.send('Görüşürüz');
    guild.defaultChannel.send(`${member.user.username} gitti.`);
  };