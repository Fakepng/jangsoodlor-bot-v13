const Command = require('../Structures/Command.js');
const Discord = require('discord.js');
const axios = require('axios')

module.exports = new Command({
    name: 'meme',
    description: 'Meme!',

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        embed.setTitle('Findings...');
        embed.setColor('#FFFF01')

        const msg = await message.reply({ embeds: [embed] })
        axios.get('https://meme-api.herokuapp.com/gimme').then(function (response) {
            embed.setAuthor({ name: `${response.data.author}`, iconURL: `${response.data.url}`, url: `${response.data.postLink}` })
            embed.setTitle(`${response.data.title}`);
            embed.setImage(response.data.url);

            msg.edit({ embeds: [embed] })
        }).catch(function (error) {
            console.log(error);
        })
    }
});