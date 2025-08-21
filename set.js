
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU27KiOBT9l7xqtVxFqTpVw8ULIirifWoeIgkYQYJJxEuX/z7FsU+ffpjpOfMWwq61115r7XwHBSUc+/gOzO+gZKSCAtdHcS8xMIF9SRLMQBMgKCAwwXo4VgcHbbDMiCZZU+Wckiqs1CUKcqm7Jzyw9LSFeT6Ul2/g2QTlZZ+T+DeA5XqDbiHq76QpRT1/00J5djjKvbNCzw/sTxa7feqjRdmL+Bt41oiQMFKkvfKAT5jB3Mf3GSTsa/R7Q2diJ9URjuPWUgqlljEIjX01cLpR5F6Xdy9sy8zxiqQXfI2+2pOGq5GrsM52jKVs0Rj2V9v0Bo1N0BitHkd1fVQM5uuHYfCiz0laYOQhXAgi7l/WPRx7TMG3neVaj4FT9debnsbSqRo3rnES7hvjW6X0o0z2VO1rxEW5Pm4ejMVXF8or43GWBuPgMNrpw3m2shfocu1Hyr5Sr9HyV+Iz9pGV7P/o3rG1tOHedUo9vHlofCspsVWlLaLSSHKui/7IWD6OfTFX06/RH3l0OozKRdRotZXkZrQXxZWdcmVM8/stlQvLnnqHkbXdHLNP+lBc2O9YpnGEOc2CIXb9dL5LBrZih7Okg2ioLq+2u8h7t9Lq3rWzH27umT65xW6HJ/lecsOFHztUlk4DNbfZLEXEbzyyri7s69v7RBm+ewiY8rMJGE4JFwwKQov6zpCaAKIqwjHD4l1d0IX4GNlpX205d21rIzjaXau0q+pcP2gS1bRRkevtWf+qeG+gCUpGY8w5RkPCBWX3AHMOU8yB+edfTVDgm3j5VndT5SZICONiWVzKnEL0YerHTxjH9FKI6F7ETn3ADJjS5zUWghQpr2W8FJDFB1Jh5wAFB2YCc45/DogZRsAU7IJ/Lq1DUa37QgpdZ9YZgCY4vftBEDCB3FG6bU3TpLZuyp0/+LdrjQrL8luBBWiC/FVlGLps6JrcVlRFqgvr++dPfjUcwgKSnAMTOCM/P7SzXm88nJzi5WBg8dRyUgt8zvORi5fw4iBrnbDhWAPdwId4rMeHzt1f8gZZu+pOkeD0ITpsOz3m1ts/gAAT9GdHVu67Vjwkp1u/mJMgq9rONCOqMp075/M83+3jzAjDVZdeUVliycjWIkGP/j4sNsF8XdquP188XL/Vnsd5n8anjhO+1d0QrkiMf22W+g0WBEY8tAwpM1peNJtOnPw0L3B2yu3AGrmn2I0CZXlsqOpkkjSMvFzZ2rLberApH/TUa4SUwNrxlHB6iWB3FkLXeiX2fWPyHy8VeQ9T7VT9mRD8vvgFrP37T+devOt8Sc/mLxA/XpJ/2UZ7v0V41pulqX3BKt04jY2XBCQfz2iedhUkBkduJL7iUj0Ez+dfTVDmUCSUnYAJYIEYJQg0AaOXOrBekdDfNHMsz3PD1+A55ML6XIIFOWEu4KkEpmzouqHqhtp5Vc0YLYeQH4AJlJVhnJfg+Td8NCDFUQcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "18296444065", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "🥵,😈,☠️,🥶,🤖", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "druzz", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "druzz", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "druzz", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "true",
GOODBYE: process.env.GOODBYE || "true",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
