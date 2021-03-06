

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
  {buttonId: 'MENU', buttonText: {displayText: 'ð I AM FINE ð'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'ð¥º I  AM SAD ð¥'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "â¥ï¸ð« HOW ARE YOU ðâ¥ï¸",
    footerText: 'BY â ï¸ð¿ð¼ðð ð½ððâ ï¸ â·',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/91189e6a925683868095d.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption:' Hello ! \n\n I am - â ï¸ð¿ð¼ðð ð½ððâ ï¸, \n\n\n ðµ.ð¨ ðºð¼ð·ð¼ð³ðºð¨ð¹ð¨ \n ð§ââï¸ assistantn \n\n *ââ¤ï¸Welcome Toâ¤ï¸â \n\nð®ð®ð®\n\n\n\n âOwner :-â³â¿uÊÎ± SuÌ¶pÌ¶ulÌ¶sÌ¶aÌ¶rÌ¶aÌ¶ â° \n\n\n ð®. *Connect from WhatsApp \n *http://wa.me/94741299310* \n\n ð®. Connect from Telegram \n *t.me/Anujasupulsara* \n\n\n\n â³â¿uÊÎ± SuÌ¶pÌ¶ulÌ¶sÌ¶aÌ¶rÌ¶aÌ¶ â° \n ð¤ð'})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'ð I AM FINE ð'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'ð¥º I  AM SAD ð¥'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "â¥ï¸ð« HOW ARE YOU ðâ¥ï¸",
    footerText: 'BY â ï¸ð¿ð¼ðð ð½ððâ ï¸ â·',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*â ï¸ð¿ð¼ðð ð½ððâ ï¸*' })
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
                `*âð¡ï¸ ALPHA ð¡ï¸â *\n\n` + 
                '```Installed version :```\n' +
                ' V 4.0.0 Public'+
                `\n\nð Check github for bot: https://github.com/AchiyaCT/ALPHA-V4`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'ð I AM FINE ð'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'ð¥º I  AM SAD ð¥'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "â¥ï¸ð« HOW ARE YOU ðâ¥ï¸",
    footerText: 'BY â ï¸ð¿ð¼ðð ð½ððâ ï¸ â·',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/91189e6a925683868095d.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: ' Hello ! \n\n I am - â ï¸ð¿ð¼ðð ð½ððâ ï¸, \n\n\n ðµ.ð¨ ðºð¼ð·ð¼ð³ðºð¨ð¹ð¨ \n ð§ââï¸ assistantn \n\n *ââ¤ï¸Welcome Toâ¤ï¸â \n\nð®ð®ð®\n\n\n\n âOwner :-â³â¿uÊÎ± SuÌ¶pÌ¶ulÌ¶sÌ¶aÌ¶rÌ¶aÌ¶ â° \n\n\n ð®. *Connect from WhatsApp \n *http://wa.me/94741299310* \n\n ð®. Connect from Telegram \n *t.me/Anujasupulsara* \n\n\n\n â³â¿uÊÎ± SuÌ¶pÌ¶ulÌ¶sÌ¶aÌ¶rÌ¶aÌ¶ â° \n ð¤ð'})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'ð I AM FINE ð'}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: 'ð¥º I  AM SAD ð¥'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "â¥ï¸ð« HOW ARE YOU ðâ¥ï¸",
    footerText: 'BY â ï¸ð¿ð¼ðð ð½ððâ ï¸ â·',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*â ï¸ð¿ð¼ðð ð½ððâ ï¸*' })
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
                `*âð¡ï¸ ALPHA ð¡ï¸â *\n\n` + 
                '```Installed version :```\n' +
                ' V 4.0.0 - Public'+
                `\n\nð Check github for bot:  https://github.com/AchiyaCT/ALPHA-V4`
           , MessageType.text);
            
        }));
}
