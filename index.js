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
    client.user.setActivity('mroyale.blusec.uk/db.json', {type: "WATCHING"});
});
function dbStuff(name) {
    let output = db.get('users').find({ name: name }).value();
    console.log(output);
    if(output === undefined) {
        db.get('users').push({name: name, wins: 1}).write();
    } else {
        db.get('users').assign({name: name, wins: ++output.wins}).write();
    };
};
client.on('message', message => {
    if (message.channel.id != "693316748296061019") return;
    if (message.embeds[0] != null) return;
    if (!message.embeds[0].description.includes("**#1**")) return;
    let text = embed.description.substring(2);
    text = text.substring(0, text.indexOf("**"));
    dbStuff(text);
});