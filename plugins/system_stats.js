

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🙈 I AM FINE 😜'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ☠️𝘿𝘼𝙍𝙆 𝘽𝙊𝙏☠️ ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/91189e6a925683868095d.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption:` Hello ! \n\n I am - ☠️𝘿𝘼𝙍𝙆 𝘽𝙊𝙏☠️, \n\n\n 𝑵.𝑨 𝑺𝑼𝑷𝑼𝑳𝑺𝑨𝑹𝑨 \n 🧚‍♀️ assistantn \n\n *◈❤️Welcome To❤️◈ \n\n🔮🔮🔮\n\n\n\n ◈Owner :-₳ⁿuʝα Su̶p̶ul̶s̶a̶r̶a̶ ✰ \n\n\n 🔮. *Connect from WhatsApp \n *http://wa.me/94741299310* \n\n 🔮. Connect from Telegram \n *t.me/Anujasupulsara* \n\n\n\n ₳ⁿuʝα Su̶p̶ul̶s̶a̶r̶a̶ ✰ \n 🤏😎`})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🙈 I AM FINE 😜'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ☠️𝘿𝘼𝙍𝙆 𝘽𝙊𝙏☠️ ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*☠️𝘿𝘼𝙍𝙆 𝘽𝙊𝙏☠️*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⎝🛡️ ALPHA 🛡️⎠*\n\n` + 
                '```Installed version :```\n' +
                ' V 4.0.0 Public'+
                `\n\n🍁 Check github for bot: https://github.com/AchiyaCT/ALPHA-V4`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🙈 I AM FINE 😜'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ☠️𝘿𝘼𝙍𝙆 𝘽𝙊𝙏☠️ ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/91189e6a925683868095d.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: ` Hello ! \n\n I am - ☠️𝘿𝘼𝙍𝙆 𝘽𝙊𝙏☠️, \n\n\n 𝑵.𝑨 𝑺𝑼𝑷𝑼𝑳𝑺𝑨𝑹𝑨 \n 🧚‍♀️ assistantn \n\n *◈❤️Welcome To❤️◈ \n\n🔮🔮🔮\n\n\n\n ◈Owner :-₳ⁿuʝα Su̶p̶ul̶s̶a̶r̶a̶ ✰ \n\n\n 🔮. *Connect from WhatsApp \n *http://wa.me/94741299310* \n\n 🔮. Connect from Telegram \n *t.me/Anujasupulsara* \n\n\n\n ₳ⁿuʝα Su̶p̶ul̶s̶a̶r̶a̶ ✰ \n 🤏😎`})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🙈 I AM FINE 😜'}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ☠️𝘿𝘼𝙍𝙆 𝘽𝙊𝙏☠️ ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*☠️𝘿𝘼𝙍𝙆 𝘽𝙊𝙏☠️*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⎝🛡️ ALPHA 🛡️⎠*\n\n` + 
                '```Installed version :```\n' +
                ' V 4.0.0 - Public'+
                `\n\n🍁 Check github for bot:  https://github.com/AchiyaCT/ALPHA-V4`
           , MessageType.text);
            
        }));
}
