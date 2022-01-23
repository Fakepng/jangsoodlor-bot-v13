const Command = require('../Structures/Command.js');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = new Command({
    name: 'date',
    description: 'what day is it?',
    aliases: 'day',

    async run(message, args, client) {
        const date = moment().format("dddd[,] Do MMMM YYYY");
        const time = moment().format("HH:mm:ss");
        const embed = new Discord.MessageEmbed();
        embed.setTitle(`Today is ${date}`);
        embed.setDescription(`At ${time}`);
        embed.setColor('#FFFF01')
        message.reply({ embeds: [embed] })
    }
});