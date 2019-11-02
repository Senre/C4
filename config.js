require('dotenv-flow').config();

module.exports = {
  token: process.env.TOKEN,
  owner: process.env.OWNER,
  prefix: process.env.PREFIX,
  botVersion: process.env.BOTVERSION,
  gameServer: '622349094290980884',
  gameRoom: ['622393663091376172', '622801138692915212'],
  column: {
    1: [29, 6],
    2: [79, 56],
    3: [128, 105],
    4: [177, 155],
    5: [226, 204],
    6: [276, 254],
    7: [326, 304],
  },
  row: {
    6: [25, 2],
    5: [70, 47],
    4: [114, 91],
    3: [157, 134],
    2: [201, 178],
    1: [246, 223],
  },
  reaction_: {
    1: '621304998428672010',
    2: '621304999938359306',
    3: '621304999883833347',
    4: '621304999057817601',
    5: '621304999171063809',
    6: '621304999451951105',
    7: '621304998919274506',
  },
  dumpChannel: '617407223395647520',
  gameInit: 'Initializing <a:loading:617628744512700447>',
};
