const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349020619432";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_16_30_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMyxcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NixcbiAgICAgICAgNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImxKazJKdGYrWlk5NTdPRExVRzd2WTFJVDhtWGQ5RkMrVDVwRkdFUUdMN009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJMYlp2MUlTVGhTR2kxOTMzSFFnb1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2U0MDA2NjMtNDJkNS00NDdiLWE1ZTgtNzFiZjQ1YmFlZTliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDQ0LFxuICAgICAgNjksXG4gICAgICA3OCxcbiAgICAgIDExNCxcbiAgICAgIDE3MixcbiAgICAgIDIwNCxcbiAgICAgIDE2OCxcbiAgICAgIDY2LFxuICAgICAgMTE2LFxuICAgICAgMTg3LFxuICAgICAgNTUsXG4gICAgICA1MixcbiAgICAgIDc1LFxuICAgICAgNTIsXG4gICAgICA5MixcbiAgICAgIDEzNixcbiAgICAgIDEyNSxcbiAgICAgIDE3MCxcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAxMixcbiAgICAgIDE0MSxcbiAgICAgIDI0NixcbiAgICAgIDIzMixcbiAgICAgIDEwNSxcbiAgICAgIDg2LFxuICAgICAgNjIsXG4gICAgICAyNDcsXG4gICAgICA3NSxcbiAgICAgIDIwMSxcbiAgICAgIDEyNCxcbiAgICAgIDIxMSxcbiAgICAgIDI0OCxcbiAgICAgIDY3LFxuICAgICAgMTI0LFxuICAgICAgMTgsXG4gICAgICAxNTIsXG4gICAgICAxOSxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWTTFWUTMzMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMDYxOTQzMjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODQyMjUzMTU2Nzc5NzoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNTGxtWklCRUxLS3piWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlAyYWhPVHFSdVorR0JIQnY3bHRUUU1tUExtQXBBdlFFL3VyRUVDRVpPRGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZER6OVdXL0F0bkp3YVhCVlovZGdYc1ErUTdHeW8xb29KMytROElVYzNZcEQ4RTRLS0tlYjVEUFN6VlNtUWw3MVJVNThHaDRPQ0RxTXlreFFIU1IxQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSHpHeGUrc2I2VlhhRGlDZGFEdGdYd1FsRXZYSytvTFN1U2E5L1pIQktLa2VEbGhTNGk2Q3ovNjZ4NzU3NFlFYkRxSlE4ZGQ2dE9hNFJZeGVTSTdLaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMDYxOTQzMjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUxMjE4NDVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
