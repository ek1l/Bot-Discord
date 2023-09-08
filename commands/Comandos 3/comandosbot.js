const { client, Discord } = require('discord.js');
module.exports = {
  name: 'comandos', // Coloque o nome do seu comando
  aliases: [''], // Coloque sinônimos do nome do comando
 
  run: async (client, message, args) => {
    message.channel.send(
      '``` 🤖Olá, meus comandos por enquanto são: \n \n 📊!!rank \n 🗑️!!apagar ( PARA ADMINS)``` \n ',
    );
  },
};
