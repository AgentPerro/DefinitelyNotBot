const Discord = require('discord.js');
const client = new Discord.Client();
const Game g = new Game(gameName, GameType.Default, "https://discordapp.com");

client.on('ready', () => {
  client.user.setGame('GAME HERE') {
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
