const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
        var opts = {
                name: 'Call of Duty: Black Ops 10',
                url: 'https://www.twitch.tv/lirik',
                type: 1
        };

        client.setStatus(null, opts);
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
