const dotenv = require('dotenv');
const { Client, Events, GatewayIntentBits } = require('discord.js');


dotenv.config();

const token = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Logged in as ${readyClient.user.tag}`);
});

client.login(token);
