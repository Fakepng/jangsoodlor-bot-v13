const Command = require('../Structures/Command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: 'say',
    description: 'say something',

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        embed.setTitle(`${args.slice(1).join(' ')}`);
        embed.setColor('#FFFF01')
        message.reply({ embeds: [embed] })
    }
});