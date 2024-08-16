//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFtL2pmNWozVlR1WkpEYVcvYTFQK24vVWg5Tm0ySFFmbDgzSnl6dHcwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEx5MzZjVjBLclNXWFZkbnJTbEh6V2IrZXdIczdUV1hWOGJpSmM2ZENDaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTldrZVJRSzE1WG1yeTFYN2hjd2RWUW5KSlhwbkdVTWRoeUtJWWZybzJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqQ0ovTXVwVzYzQyswWTdZMG9JdDdGMFoyWU5DQVdKbEJYM0dHUEZkT1ZrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOaU9HOUROSVExRFRKaUYwSGdycUJEbDFtZWJ0Q290ZEdEb3BhR0FVM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlEWUllM0pRbUJidm9SMGhvc0RmQnp2VFFkQTJXekVXQnlSK2cwQ1kzSEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJWYjY1MUhkWGdnbDBiTDRmUDJ1Ri95Tml4NGhuZnVXcWczTGFuVEIzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtDdHd6MUJ3Sml2eC85V1pxMm9KaCtKVE5MV2Rjd05oejFkMmRobmJ6UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncyZUQ4b0tDOHNMaTcvenNtcFc2RTdlMitJbzh3aEt0OVZvdFRjRTZvek5lcXQ0UERaK2Z4UnE2MEpNeGxhVy9iWkxyOGJzMjRnWGt1RDZaVWNlNERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6InFaQXBUUjZqelcvWXVMOWxwdjUwR0FTd0l5blc2M01XcVpZM3hSM2pzUk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InUtOHNhRmlMVHBLNVJwRGp6aEFteXciLCJwaG9uZUlkIjoiZjI2MGU4MTgtYmZmMi00ZjA3LWE0ZmQtNjNmZDhlYTYzZGQ0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp0Q1g1QWRucGo2cUNEdDRQa0dlMGdTdnVLcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRWV6TVlPU3g1TXVoT1hzVUNzM0FZMmVvNW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWVdER01EREUiLCJtZSI6eyJpZCI6Ijk0NzEzNjMxNzU0OjE1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJTFUvK0FPRU9QaityVUdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBUDBTbVcwdGQvSWJzdXRRNXhidFMyellRYzRoWDA4VUdwbWZlNFZTZ3hvPSIsImFjY291bnRTaWduYXR1cmUiOiJtaEVpb2dodzBwSFFSL2V6ckNlYWtDZ0Z5RmxFTEtEMEd5T1lYNjhvWnhVdkovQTBnU0VQSnhDVGY1N0Q0bWVZeitaTlEySlg0WEs4RllKTFl1ZjVDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicThVelBQQ1lPQWE1cU5DdXVyWHFhVldnUHQ2elQwSFAzVnBUZW1tbXpsbnE4eENDOE5HcUFmSkdzYjZIZE9DMlUwa0JWbFY3Umw4UnNRbWF6c2VtQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMzYzMTc1NDoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRRDlFcGx0TFhmeUc3THJVT2NXN1V0czJFSE9JVjlQRkJxWm4zdUZVb01hIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM3NzM0MjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0FIIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`🎖️Eꪜ̶͜ílꪇнͥ͢σѕͣтͫ|ᥫ᭡`",
  author: process.env.PACK_AUTHER || "🎖️Eꪜ̶͜ílꪇнͥ͢σѕͣтͫ|ᥫ᭡",
  packname: process.env.PACK_NAME || "T H E J A N",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
