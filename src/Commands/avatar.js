const Command = require('../Structures/Command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: 'avatar',
    description: 'Show an avatar',
    
    async run(message, args, client) {
        if (!message.mentions.users.size) {
            const embed = new Discord.MessageEmbed();
            embed.setTitle('Here your avatar');
            embed.setColor('#FFFF01');
            embed.setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true }));
            message.reply({ embeds: [embed] })
        }else if (message.mentions.users.size) {
            const avatarList = message.mentions.users.map(user => {
                const embed = new Discord.MessageEmbed();
                embed.setTitle(`Here ${user.username}'s avatar`);
                embed.setColor('#FFFF01');
                embed.setImage(user.displayAvatarURL({ format: 'png', dynamic: true }));
                message.reply({ embeds: [embed] })
            });
        }
    }
});