const Command = require('../Structures/Command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: 'ping',
    description: 'Show the ping of the bot',
    
    async run(message, args, client) {
        const beforeEmbed = new Discord.MessageEmbed();
        beforeEmbed.setTitle('Pinging...');
        beforeEmbed.setColor('#FFFF01');

        const msg = await message.reply({ embeds: [beforeEmbed] })

        beforeEmbed.setTitle('Pinging.');
        await new Promise(resolve => setTimeout(resolve, 125));
        msg.edit({ embeds: [beforeEmbed] })
        beforeEmbed.setTitle('Pinging..');
        await new Promise(resolve => setTimeout(resolve, 125));
        msg.edit({ embeds: [beforeEmbed] })
        beforeEmbed.setTitle('Pinging...');
        await new Promise(resolve => setTimeout(resolve, 125));
        msg.edit({ embeds: [beforeEmbed] })
        beforeEmbed.setTitle(`Pong! ${Math.round(client.ws.ping)} ms`);
        await new Promise(resolve => setTimeout(resolve, 125));
        msg.edit({ embeds: [beforeEmbed] })
    }
});