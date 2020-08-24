const Database = require('better-sqlite3');
const path = require('path');
const Discord = require('discord.js');

const queries = require('../src/db-queries');

const db = new Database(path.resolve('data/poker.db'));
const client = new Discord.Client();

module.exports = {
  name: '',
  description: '',
  execute(message, args) {
    let players = queries.listPlayers(db, PROFILES);

    for (let i = 0; i < players.length; i++) {
      msg.channel.send(i + 1 + '. ' + players[i]);
    }
  },
};
