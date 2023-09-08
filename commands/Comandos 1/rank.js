const { client, Discord } = require('discord.js');
const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
// GERAR IMG

// Registre uma fonte personalizada, se necessário
registerFont('./NewBurger.ttf', { family: 'NewBurger' });

// Crie um novo canvas com largura e altura especificadas
const canvas = createCanvas(1920, 1100);
const ctx = canvas.getContext('2d');

// Função para desenhar uma célula na tabela
function drawCell(x, y, width, height, text) {
  ctx.fillStyle = '#23272a';
  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);
  ctx.fillStyle = 'white';
  ctx.fillText(text, x + width / 2, y + height / 2);
}

// Defina os cabeçalhos da tabela
const headers = [
  'ID',
  'Nome',
  'Score',
  'Kills',
  'Deaths',
  'D.Kills',
  'K/D',
  'DMG',
];

// Defina os dados da tabela
const data = [
  [1, 'John Doe', '🏆 250', '💥 35', '💀 10', '🔪 25', '📊 3.5', '💥 5000'],
  [2, 'Andrea Smith', '🏆 180', '💥 22', '💀 15', '🔪 7', '📊 1.47', '💥 3200'],
  [
    3,
    'Robert Johnson',
    '🏆 320',
    '💥 45',
    '💀 8',
    '🔪 37',
    '📊 5.63',
    '💥 7500',
  ],
  [4, 'Sarah Brown', '🏆 210', '💥 32', '💀 12', '🔪 20', '📊 2.67', '💥 4800'],
  [
    5,
    'Michael Davis',
    '🏆 280',
    '💥 40',
    '💀 9',
    '🔪 31',
    '📊 4.44',
    '💥 5900',
  ],
  [6, 'Emily Lee', '🏆 195', '💥 25', '💀 14', '🔪 11', '📊 1.79', '💥 3800'],
  [
    7,
    'Daniel Wilson',
    '🏆 310',
    '💥 48',
    '💀 7',
    '🔪 41',
    '📊 6.86',
    '💥 7200',
  ],
  [
    8,
    'Olivia Brown',
    '🏆 240',
    '💥 36',
    '💀 11',
    '🔪 25',
    '📊 3.27',
    '💥 5500',
  ],
  [
    9,
    'Sophia Miller',
    '🏆 200',
    '💥 30',
    '💀 13',
    '🔪 17',
    '📊 2.31',
    '💥 4200',
  ],
  [
    10,
    'William Smith',
    '🏆 265',
    '💥 38',
    '💀 10',
    '🔪 28',
    '📊 3.8',
    '💥 5200',
  ],
];

// Defina as dimensões das células e a largura total da tabela
const cellHeight = 100;

// Calcule a largura da célula com base no tamanho da tela
const cellWidth = canvas.width / headers.length;

// Configure a fonte e o tamanho do texto
ctx.font = '30px NewBurguer'; // Substitua 'SuaFonte' pela sua fonte personalizada
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Desenhe os cabeçalhos da tabela
for (let i = 0; i < headers.length; i++) {
  drawCell(i * cellWidth, 0, cellWidth, cellHeight, headers[i]);
}

// Desenhe os dados da tabela
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < headers.length; j++) {
    const name = data[i][j].toString();
    const maxTextWidth = cellWidth - 10; // Largura máxima do texto dentro da célula

    // Quebra o nome em várias linhas se for muito longo
    const lines = [];
    let currentLine = '';
    for (let word of name.split(' ')) {
      if (ctx.measureText(currentLine + ' ' + word).width < maxTextWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);

    // Desenha as linhas de texto na célula
    for (let k = 0; k < lines.length; k++) {
      const line = lines[k];
      const yOffset = (i + 1) * cellHeight + k * 40; // Ajuste o valor da fonte (40) conforme necessário
      drawCell(j * cellWidth, yOffset, cellWidth, cellHeight, line.trim());
    }
  }
}

// RANK
module.exports = {
  name: 'rank', // Coloque o nome do seu comando
  aliases: [''], // Coloque sinônimos do nome do comando

  run: async (client, message, args) => {
    // Salve o canvas como uma imagem e gera
    const outputStream = fs.createWriteStream('tabela_gerada.png');
    const stream = canvas.createPNGStream();
    stream.pipe(outputStream);
    outputStream.on('finish', () => {
      console.log('Tabela gerada e salva com sucesso.');
    });

    // Envia uma mensagem de texto simples
    message.channel.send(
      `${message.author}` +
        '```ᴇsᴛᴀᴍᴏs ᴄᴀʀʀᴇɢᴀɴᴅᴏ ᴏ ʀᴀɴᴋ ᴅᴏs ᴊᴏɢᴀᴅᴏʀᴇs...⏳```',
    );

    setTimeout(() => {
      // Envia o arquivo da imagem que está na raiz do projeto
      message.channel.send({
        files: [
          {
            attachment: 'tabela_gerada.png',
            name: 'tabela_gerada.png',
          },
        ],
      });
    }, 3000);
  },
};
