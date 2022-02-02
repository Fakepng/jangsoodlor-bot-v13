const Command = require('../Structures/Command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: 'embed',
    description: 'Show an embed',
    
    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        embed.setTitle('This is a test embed title');
        embed.setDescription('This is a test embed description');
        embed.setColor('#FFFF01');

        message.reply({ embeds: [embed] });
    }
});