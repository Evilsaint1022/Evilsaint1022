// ping.js --------------------------------------------------------------------------------------------------------------------------------

const { SlashCommandBuilder } = require('discord.js');

// Exporting Ping Command -----------------------------------------------------------------------------------------------------------------

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        const start = Date.now();
        await interaction.reply('Pinging...');

        const latency = Date.now() - start;
        const pingEmbed = {
            color: 0x020202,
            title: '**Pong!**',
            description: `**Latency: ${latency}ms.**`,
        };

        if (interaction.guild?.iconURL()) {
            pingEmbed.thumbnail = { url: interaction.guild.iconURL({ dynamic: true, size: 128 }) };
        }

        await interaction.editReply({ embeds: [pingEmbed] });
    },
};

