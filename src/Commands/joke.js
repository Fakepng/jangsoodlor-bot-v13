const Command = require('../Structures/Command.js');
const Discord = require('discord.js');
const axios = require('axios');

let type = 'any'

module.exports = new Command({
    name: 'joke',
    description: 'Joke!',

    async run(message, args, client) {
        const row1 = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('any')
                    .setLabel('Any')
                    .setStyle('PRIMARY')
            )
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('programming')
                    .setLabel('Programming')
                    .setStyle('PRIMARY')
            )
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('miscellaneous')
                    .setLabel('Miscellaneous')
                    .setStyle('PRIMARY')
            )
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('dark')
                    .setLabel('Dark')
                    .setStyle('PRIMARY')
            )

        const row2 = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('pun')
                    .setLabel('Pun')
                    .setStyle('PRIMARY')
            )
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('spooky')
                    .setLabel('Spooky')
                    .setStyle('PRIMARY')
            )
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('christmas')
                    .setLabel('Christmas')
                    .setStyle('PRIMARY')
            )

        await message.reply({ 
            content: 'Pick a category!', 
            components: [row1, row2] 
        });

        const filter = i => i.customId === 'any' || i.customId === 'programming' || i.customId === 'miscellaneous' || i.customId === 'dark' || i.customId === 'pun' || i.customId === 'spooky' || i.customId === 'christmas';

        const collector = message.channel.createMessageComponentCollector({
            filter,
            max: 1,
            time: 15000
        })

        collector.on('collect', async i => {
            if (i.customId === 'any') {
                type = 'any'
            }
            if (i.customId === 'programming') {
                type = 'programming'
            }
            if (i.customId === 'miscellaneous') {
                type = 'miscellaneous'
            }
            if (i.customId === 'dark') {
                type = 'dark'
            }
            if (i.customId === 'pun') {
                type = 'pun'
            }
            if (i.customId === 'spooky') {
                type = 'spooky'
            }
            if (i.customId === 'christmas') {
                type = 'christmas'
            }
            axios.get(`https://v2.jokeapi.dev/joke/${type}`).then(function (response) {
                if (response.data.type === "single") {
                    i.update({ content: `Category: ${response.data.category}\n${response.data.joke}`, components: []});
                } else {
                    i.update({ content: `Category: ${response.data.category}\n${response.data.setup} \n ${response.data.delivery}`, components: []});
                }
            }).catch(function (error) {
                console.log(error);
            })
        })
    }
});