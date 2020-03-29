const Discord = require('discord.js');
const {} = Discord;
const client = new Discord.Client();
const {token} = require('./config.json');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
client.login(token);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('for wins', {type: "WATCHING"});
});
function checkForUser(name) {
    if (db.has({name: name}).value()) {
        console.log(db.find({name: name}));
    };
};
checkForUser('Mario');