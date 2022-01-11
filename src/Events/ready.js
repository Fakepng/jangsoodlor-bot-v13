const Event = require('../Structures/Event.js');
const config = require('../Data/config.json');

module.exports = new Event('ready', client => {
    console.log(`${client.user.username} ready!`)
    client.user.setActivity(`${config.PREFIX}help and ${config.PREFIX}play`, { type: "LISTENING" });
})