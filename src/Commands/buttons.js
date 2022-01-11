const Command = require('../Structures/Command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: 'buttons',
    description: 'buttons',

    async run(message, args, client) {
        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('primary')
                    .setLabel('PRIMARY')
                    .setStyle('PRIMARY')
            )
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('secondary')
                    .setLabel('SECONDARY')
                    .setStyle('SECONDARY')
            )
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('success')
                    .setLabel('SUCCESS')
                    .setStyle('SUCCESS')
            )
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('danger')
                    .setLabel('DANGER')
                    .setStyle('DANGER')
            )
        await message.reply({ 
            content: 'Try clicking on the buttons below!', 
            components: [row] 
        });

        const filter = i => i.customId === 'primary' || i.customId === 'secondary' || i.customId === 'success' || i.customId === 'danger';

        const collector = message.channel.createMessageComponentCollector({
            filter,
            max: 1,
            time: 15000
        })

        collector.on('collect', async i => {
            if (i.customId === 'primary') {
                await i.update({ content: 'You have successfully clicked the primary button!', components: []});
            }
            if (i.customId === 'secondary') {
                await i.update({ content: 'You have successfully clicked the secondary button!', components: []});
            }
            if (i.customId === 'success') {
                await i.update({ content: 'You have successfully clicked the success button!', components: []});
            }
            if (i.customId === 'danger') {
                await i.update({ content: 'You have successfully clicked the danger button!', components: []});
            }
        })
    }
});