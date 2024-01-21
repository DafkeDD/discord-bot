const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('replies with pong')
		.setDMPermission(false),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};