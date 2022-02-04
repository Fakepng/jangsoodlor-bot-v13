const Command = require('../Structures/Command.js');
const Discord = require('discord.js');
const axios = require('axios');

let quotesId = 0;
let argsId = 0;

module.exports = new Command({
    name: 'salim',
    description: 'salim',

    async run(message, args, client) {
        if (args[1] == "latest") {
            axios.get('https://watasalim.vercel.app/api/quotes/latest').then(function (response) {
                const latestQuote = new Discord.MessageEmbed();
                latestQuote.setTitle('Latest quote');
                latestQuote.setDescription(response.data.quote.body);
                latestQuote.setFooter({ text: `Quote ID: ${response.data.quote.id}` });
                latestQuote.setColor('#FFFF01');

                message.reply({ embeds: [latestQuote] });
            }).catch(function (error) {
                console.log(error);
            })
        } else if (!args[1]) {
            axios.get('https://watasalim.vercel.app/api/quotes/random').then(function (response) {
                const randomQuote = new Discord.MessageEmbed();
                randomQuote.setTitle('Random quote');
                randomQuote.setDescription(response.data.quote.body);
                randomQuote.setFooter({ text: `Quote ID: ${response.data.quote.id}` });
                randomQuote.setColor('#FFFF01');

                message.reply({ embeds: [randomQuote] });
            }).catch(function (error) {
                console.log(error);
            })
        } else {
            argsId = parseInt(args[1], 10);
            axios.get('https://watasalim.vercel.app/api/quotes/latest').then(function (response) {
                quotesId = response.data.quote.id;
                if (argsId <= quotesId && argsId > 0) {
                    axios.get(`https://watasalim.vercel.app/api/quotes/${argsId}`).then(function (response) {
                        const quoteId = new Discord.MessageEmbed();
                        quoteId.setTitle(`Quote ID: ${argsId}`);
                        quoteId.setDescription(response.data.quote.body);
                        quoteId.setFooter({ text: `Quote ID: ${response.data.quote.id}` });
                        quoteId.setColor('#FFFF01');

                        message.reply({ embeds: [quoteId] });
                    }).catch(function (error) {
                        console.log(error);
                    }) 
                } else {
                    const tooMuchSalim = new Discord.MessageEmbed();
                    tooMuchSalim.setTitle('สลิ่มมากเกินไปนะครับ');
                    tooMuchSalim.setDescription(`ต้องอยู่ระหว่าง 1 ถึง ${quotesId} นะครับ`);
                    tooMuchSalim.setColor('#FFFF01');
                    
                    message.reply({ embeds: [tooMuchSalim] });
                }
            }).catch(function (error) {
                console.log(error);
            })
        }
    }
});