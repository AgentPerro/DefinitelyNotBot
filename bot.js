const Discord = require('discord.js');
const client = new Discord.Client();
bot.user.setPresence({ status: 'online', game: { name: 'OMFG WORKS' } });

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
