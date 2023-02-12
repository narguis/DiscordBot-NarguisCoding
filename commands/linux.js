const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor("black")
	.setTitle('Comandos Básicos do Terminal Linux')
	.addFields(

		{ name: 'sudo (super-user do)', value: 'Realiza uma tarefa como super usuário', inline: true },
		{ name: 'ls (list)', value: 'Lista todos os diretórios da pasta atual', inline: true },
		{ name: 'apt-get (install/update/upgrade)', value: 'Instala/atualiza/verifica os pacotes do sistema ou de uma aplicação', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'cd (change directory)', value: 'Entra no diretório escolhido', inline: true },
		{ name: 'mkdir (make directory)', value: 'Cria um ou mais diretórios', inline: true },
		{ name: 'rmdir (remove directory)', value: 'Exclui o diretório escolhido se ele estiver vazio', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'pwd (print working directory)', value: 'Mostra o path do diretório atual', inline: true },
		{ name: 'rm (remove) ou rm -r (remove recursively)', value: 'Remove um arquivo, ou remove um diretório junto com o seu conteúdo (recursivamente)', inline: true },
		{ name: 'cp (copy)', value: 'Copia um arquivo de um diretório para outro especificado em seguida', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'mv (move)', value: 'Move um arquivo de um diretório para outro especificado em seguida', inline: true },
		{ name: 'touch', value: 'Cria um arquivo ou modifica sua data de acesso', inline: true },
		{ name: 'nano', value: 'Edita um arquivo de texto ou código diretamente pelo terminal', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
            .setName("linux")
            .setDescription("Comandos Básicos do Terminal Linux"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}