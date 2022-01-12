const Event = require('../Structures/Event.js');
const config = require('../Data/config.json');

module.exports = new Event('messageCreate', (client, message) => {
    if (!message.content.startsWith(config.PREFIX) || message.author.bot) return;
    const args = message.content.substring(config.PREFIX.length).split(/ +/);
    const command = client.commands.find(cmd => cmd.name == args[0]) || client.aliases.find(cmd => cmd.aliases == (args[0]));
    if (!command) return message.reply(`${args[0]} is not a valid command!`);
    command.run(message, args, client);
}); 