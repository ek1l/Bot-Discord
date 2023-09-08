const { client, Discord } = require('discord.js');

module.exports = {
  name: 'apagar',
  aliases: [''],
  run: async (client, message, args) => {
    if (message.content) {
      const messages = await message.channel.messages.fetch({ limit: 100 });
      const messagesToDelete = messages;

      if (messagesToDelete.size > 0) {
        try {
          await message.channel.bulkDelete(messagesToDelete);
          message.channel.send(
            `${message.author} apagou  ${messagesToDelete.size} mensagens deste canal.`,
          );
        } catch (error) {
          console.error('Ocorreu um erro ao apagar mensagens:', error);
        }
      }
    }
  },
};
