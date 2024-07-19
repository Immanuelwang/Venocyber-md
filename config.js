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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxqNzFXb0tXWHZQaS9COUlIcVdzTFNKYXcxejJock1MdkNNeEVJR3JXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNZQlF4dzM3Y1F4cGpWZ1ZjZmoxUjZMY2N0dXJqSlBxZUpnOGxSRHZpcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTW00QTVvazk1dUx6d3NDTDBPTFBGN05aeGYzZUJoQW5BTTRobTgyRjA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDeHcyQ3NjNFI4Rml1dW5pS1lrVzNjZVRSVDRjYW83ZTNoQ3B4NHpEbjM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVERVVEUUg2cnJxZDdFZFp2b1JMeUljSmFuYnJuNnVNTEhQRDA2OGdEV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNQ08wWWhUWW1jU0JNVmlvVytvL2QzcDU0cDVXMzRudkgxUE1jcWZBaWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUw5Mng4M0NxajZaTmtXMHhqZ1hCZ2t5Vi9nWGRTMWdYZkhudnY4TDdVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1Q4MVQyM040NDY5Y1U3SWFTY0ljekpGclZIR1FBSkZDVE0ybjBQendVdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik84eUVqMFJCTGFHZG1NaHdMM09sQjJTV1BIUmJxSFp4aHVJSHZwUGYxVFVBWXAxM3AxSXV6V0krL0s5Umt0U1Z1NTJ1bEdBZ0gvK3hHV2lMWEtlWGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IjBwejJUaW9peXY4UVRGUG5aVFJ0Z1NvZDNHaWhxR1NHd1gycnQyNGhGN1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikh0RkQ4bEZCUU0tTjA3UDI2M0RjN1EiLCJwaG9uZUlkIjoiMjU4YTY2ZDktZDFjMC00MDI0LWEwODktNzU0OWQ1YjI4ZWQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9tNjUyMy9qSE1LaXo5a3FJS3I5MEdOS0FyOD0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWxGQmRiTSt3aVJ4QU84YW5qc1NZR0R0Z21jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXUxNDc4REVQV1g2YlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicWg3N20rN0d3ckRUckc3ZWFsNm1FOGNKZ3h0RzJGMVZteEdsUktSSHZqRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWnNRWVRuTVVyMmcySGp0V0o0NXJJODNURCs2UFhKbk42WmYwck9JQjhpejlsM1U0eExqeHZ0RS9OVlFHa2dTU0xCMW96WUx2ZmxORlFiMXQ4STZkQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InFNSkN0bTErcUxoeHdSUmVOTkY4R3o5eFhYVGFvUTRxWEpYZ1Y5aUw1cldwajJkUWtGdEJSMXZmRWpmeStleWFoTng2bUlQdEdpMk9NZWtWRWxRc2dRPT0ifSwibWUiOnsiaWQiOiIyNjA5NzMyMzY2MjE6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUaGV2b2ljZe+jvyJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjA5NzMyMzY2MjE6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhb2UrNXZ1eHNLdzA2eHUzbXBlcGhQSENZTWJSdGhkVlpzUnBVU2tSNzR4In19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzg4MDIyfQ=="
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
