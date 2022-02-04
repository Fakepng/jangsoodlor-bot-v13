const Command = require('../Structures/Command.js');
const Discord = require('discord.js');

function checkId(id) {
    if (id.length != 13) return "Invalid ID";
        for (i = 0, sum = 0; i < 12; i++)
        sum += parseFloat(id.charAt(i)) * (13 - i);
    if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12)))
        return "Invalid ID";
    return "Valid ID";
}

module.exports = new Command({
    name: 'id',
    description: 'id checker',

    async run(message, args, client) {
        if (!args[1]) return message.reply('Please enter an ID');

        const embed = new Discord.MessageEmbed();
        embed.setTitle('ID checker');
        embed.setColor('#FFFF01');
        embed.addFields(
            { name: `${args[1]}`, value: `Is ${checkId(args[1])}` },
        );
        message.reply({ embeds: [embed] })
    }
});