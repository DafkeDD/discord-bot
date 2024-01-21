const { SlashCommandBuilder } = require('discord.js');
const { OpenAI } = require('openai')

const openai = new OpenAI({apiKey: process.env.OPENAI_KEY});

//add character limit to questions 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ask')
		.setDescription('Ask a question')
        .addStringOption(option =>
            option.setName("question")
                .setDescription("Replies with an answer")
                .setRequired(true)
            )
		.setDMPermission(false),
	async execute(interaction) {

        const question = interaction.options.getString('question') 
        console.log(question)

        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: question }],
            model: "gpt-3.5-turbo",
          });
        
          console.log(completion.choices[0]);

		await interaction.reply(completion.choices[0].message.content);
	},
};