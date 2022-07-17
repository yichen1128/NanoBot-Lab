const uc = require('../pluginForEvents/updateChannel');
const fetch = require('node-fetch');
const controller = new AbortController();
const { signal } = controller;
const activities_list = [
  { type: 'PLAYING',  message: 'n/help'  },
  { type: 'WATCHING', message: 'RPG系統編寫進度' },
  { type: 'WATCHING', message: '香香的圖片' },
  { type: 'WATCHING', message: '偷懶的小風' },
  { type: 'PLAYING', message: '自己的指令(?' },
  { type: 'WATCHING', message: 'Never gonna give you up' }
];

module.exports = async (Discord,bot) => {
  console.log(`${bot.user.tag} is online`);
  await bot.user.setActivity({type:"PLAYING","name":"n/help"})
  setInterval(()=>{
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

    bot.user.setActivity(activities_list[index].message, { type: activities_list[index].type });
  },10000)

  
//   const guild = bot.guilds.cache.get('926089413933539359')
//   setInterval(()=>{
    
//   },120000)
}