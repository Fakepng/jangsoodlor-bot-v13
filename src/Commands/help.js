const Command = require('../Structures/Command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: 'help',
    description: 'You need help?',
    aliases: '?',

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        embed.setTitle(`${message.client.user.username} Help (Places holder)`);
        embed.setColor('#FFFF01')
        // embed.addFields(
        //     { name: 'Orginal', value: '```help(?), invite, ping, uptime```' },
        //     { name: 'Information', value: '```avatar, axolotl, bored, cat, covid, dict, dog, duck, fact, food, forza, fox, gif, http, iss, joke, member, meme, number, pic, quote, random(ran), salim, waifu```' },
        //     { name: 'Response', value: '```abottleofwater(abow), hello, joker, lanna, rules, say```' },
        //     { name: 'Game', value: '```flip, tictactoe(ttt)```' },
        //     { name: 'Economy', value: '```balance(bal), dailyreward(dr), deposit(dep), pay, void, withdraw(wd)```' },
        //     { name: 'Casino', value: '```lotto, slots```' },
        //     { name: 'Need help', value: 'Type [command] help' },
        //   );
        message.reply({ embeds: [embed] })
    }
});