module.exports = member => {
    let username = member.user.username;
    member.send('HoşGeldin ');
    member.guild.defaultChannel.send('hoşGeldin '+username+'');
};