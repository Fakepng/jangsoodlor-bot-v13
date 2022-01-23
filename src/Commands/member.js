const Command = require('../Structures/Command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: 'member',
    description: 'Member!',

    async run(message, args, client) {
        var server = message.guild;
        var memberCount = server.members.cache.filter(member => !member.user.bot).size;
        const embed = new Discord.MessageEmbed();
        embed.setTitle(`${server.name} members`);
        embed.setColor('#FFFF01')
        embed.addFields(
            { name: 'Total', value: `${server.memberCount.toLocaleString()}` },
            { name: 'Member', value: `${memberCount.toLocaleString()}` },
            // { name: 'Bot', value: `${member.user.bot.size}` },
          );
        message.reply({ embeds: [embed] })
    }
});