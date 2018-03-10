const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if(message.content.startsWith("/ping")) {
         message.channel.send(new Date().getTime() - message.createdTimestamp + " ms")
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

client.on('ready', () => {
  client.user.setPresence({game: {name: `with ${client.users.size} users | /help`, type: 0}});
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
