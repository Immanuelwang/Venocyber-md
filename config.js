//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://wa.me/qr/O2VNE2KEHPJZB1";
global.website = process.env.GURL || "https://wa.me/qr/O2VNE2KEHPJZB1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "260970686001";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9VOTVodlJhUFhna0FzNmhpcWVBNWJpM3hZOWVPQnhCQ05PczdJOGxYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzB0eFVGRWNxR3RGUjQ0UVpic1BBVk81NTdabkRFQWNiV1RzcWNhdFFXWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTnFEU0dGOHc2SCtKOEcwV2dwYmRHYm9JZFJZWU5QUTNGcmJPKzlBWldrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbUtvQWtyNlYrRTNVbXJoL2drQVJjSTlxOTlJTU41SWJMSHorcmxxWkZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9CcVFXME9DOG9KSE9SMUI0bkFNK0Z1ZjVLQ1BlQ1BJb2UrMncyVTJwV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPV1VPNFVOeDgxRWFxc2l4Y1JGVzVrRHZSSWMzU0QxM0RGc3Q1Nk1JeHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEh4ejFZcGF5SUpoeHdwY0VMVzUwN0ZDUlA2cEF0M0tjNkQ5dit5N1gzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnNQd2ttS2tUZURxY3AwSlRLMGdNVTBweGNmVy9JaFdSbXNKbHhqczFHMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhSMGtsemdpMVl4cEFqbEZKYTNzY0VsOHRxYXJ1a2c4a2Z4MFRNLzlSa1N1WGIvNHdIU0FFU2VhNG5TcXNwRS9sSlhIS0M5YUdmL2F4SFlwRE1qb2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6InRmM3B2c0JhZUgwMCtrbVhKMmRoVnU0cWw4OVpTeDQwMVdUUXA1TnZibnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtVRmNIdTJLUWZPSnJmMkdEVHJDWlEiLCJwaG9uZUlkIjoiODRlMWVlNzQtYjU0Yy00ODdlLTgzYTUtMThlNmUwOTVmM2ZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUyMmE4OXVGcW83MFJRQmVqZmE5NXB4elBpRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaM1NIZzYxZ0Z5TDQ0cEFmQUpkM01OcXZLVXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVkQxVjlBWFgiLCJtZSI6eyJpZCI6IjI2MDk3MDY4NjAwMToxN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG4rOE1vSUVMQ3RyclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNGRTM1IzUUhHYTZIbjYySHltQXFsb0RScWFLa1FIUFA5VURuNHEwU0ExMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYnF3Q200NWg1VUJsYVp1RFZHNDR3RWxJR3V3VmUvRmJwMDBVRzZZclU0R1BKdVlab2dLcTVYcWdRYW1jSzF1VUJVRlQwa3hYRWhTZEpZc3RDYjBDaEE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJMZE5Cc1RpMGNFdmVFTnBlRGJEV2V1NWc3bUdEWHpXTkE2djFwekQ5UHZBd0JsVUNHSHczUHJLVllodVU4VXlyR0hrWFJEdXVaRlI5alFnMEkwVWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYwOTcwNjg2MDAxOjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVIVXQwZDBCeG11aDUrdGg4cGdLcGFBMGFtaXBFQnp6L1ZBNStLdEVnTmQifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDQyNDEyNH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is TRILLS 𝐌𝐃",
  author: process.env.PACK_AUTHER || "TRILLS",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TRILLS-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "TRILLS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
