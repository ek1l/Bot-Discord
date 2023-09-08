const { client, Discord } = require('discord.js');

module.exports = {
  name: 'rank', // Coloque o nome do seu comando
  aliases: [''], // Coloque sinônimos do nome do comando

  run: async (client, message, args) => {
    // Envia uma mensagem de texto simples
    message.channel.send(
      `Olá ${message.author}, estamos carregando o rank dos jogadores...`,
    );
    setTimeout(() => {
      message.channel.send(
        '```' +
          '+---------+-----------------------+--------------+--------------+--------------+---------------+--------------+--------------+\n' +
          '|   ID    |          Nome          |    Score     |    Kills     |    Deaths    |    D.Kills   |      K/D     |      DMG     |\n' +
          '+---------+-----------------------+--------------+--------------+--------------+---------------+--------------+--------------+\n' +
          '|    1    |       John Doe         |     🏆 250   |     💥 35    |     💀 10    |      🔪 25    |     📊 3.5    |     💥 5000   |\n' +
          '|    2    |    Andrea Smith        |     🏆 180   |     💥 22    |     💀 15    |      🔪 7     |     📊 1.47   |     💥 3200   |\n' +
          '|    3    |     Robert Johnson     |     🏆 320   |     💥 45    |     💀 8     |      🔪 37    |     📊 5.63   |     💥 7500   |\n' +
          '|    4    |      Sarah Brown       |     🏆 210   |     💥 32    |     💀 12    |      🔪 20    |     📊 2.67   |     💥 4800   |\n' +
          '|    5    |    Michael Davis       |     🏆 280   |     💥 40    |     💀 9     |      🔪 31    |     📊 4.44   |     💥 5900   |\n' +
          '|    6    |       Emily Lee        |     🏆 195   |     💥 25    |     💀 14    |      🔪 11    |     📊 1.79   |     💥 3800   |\n' +
          '|    7    |    Daniel Wilson       |     🏆 310   |     💥 48    |     💀 7     |      🔪 41    |     📊 6.86   |     💥 7200   |\n' +
          '|    8    |      Olivia Brown      |     🏆 240   |     💥 36    |     💀 11    |      🔪 25    |     📊 3.27   |     💥 5500   |\n' +
          '|    9    |     Sophia Miller      |     🏆 200   |     💥 30    |     💀 13    |      🔪 17    |     📊 2.31   |     💥 4200   |\n' +
          '|   10    |    William Smith       |     🏆 265   |     💥 38    |     💀 10    |      🔪 28    |     📊 3.8    |     💥 5200   |\n' +
          '+---------+-----------------------+--------------+--------------+--------------+---------------+--------------+--------------+```',
      );
    }, 3000);
  },
};
