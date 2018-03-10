const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
        client.setStreaming('Call of Duty: Black Ops 10', 'https://www.twitch.tv/lirik', 1);
        }
});

client.on('message', message => {
    if(message.content.startsWith("/ping")) {
         message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
        }
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
