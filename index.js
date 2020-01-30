require('dotenv').config();
const Discord = require('discord.js');
const logger = require('./utils/logger');

const client = new Discord.Client();

client.on('ready', () => {
  logger.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

try {
  client.login(process.env.DISCORD_BOT_TOKEN);
} catch (err) {
  logger.error(err, { service: 'discord-login' });
}
