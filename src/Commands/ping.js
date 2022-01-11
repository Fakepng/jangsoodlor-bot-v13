const Command = require('../Structures/Command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: 'ping',
    description: 'Show the ping of the bot',
    
    async run(message, args, client) {
        const beforeEmbed = new Discord.MessageEmbed();
        beforeEmbed.setTitle('Pinging...');
        beforeEmbed.setColor('#FFFF01');

        const afterEmbed = new Discord.MessageEmbed();
        afterEmbed.setTitle('Pong!');
        afterEmbed.setColor('#FFFF01');
        afterEmbed.addField('Latency', `${message.createdTimestamp - Date.now()} ms.`, true)
        afterEmbed.addField('API', `${Math.round(client.ws.ping)} ms`, true)


        const msg = await message.reply({ embeds: [beforeEmbed] })
        msg.edit({ embeds: [afterEmbed] })
    }
});