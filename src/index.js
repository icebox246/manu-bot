const dotenv = require('dotenv');
const Discord = require('discord.js');
const { handleMessage } = require('./message');

dotenv.config();
const client = new Discord.Client();

client.once('ready', () => {
  console.log("Hello, I'm ready!");
})

client.on('message', handleMessage);

client.login(process.env.TOKEN);