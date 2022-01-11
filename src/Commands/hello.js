const Command = require('../Structures/Command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: 'hello',
    description: 'Hello!',

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        embed.setTitle('Hello!');
        embed.setColor('#FFFF01')
        message.reply({ embeds: [embed] })
    }
});