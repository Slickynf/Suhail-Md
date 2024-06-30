const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254750695999";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_34_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY5LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjExLFxuICAgICAgICA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcxLFxuICAgICAgICA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMTg0LFxuICAgICAgICA2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDk3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwN0JSZEZodGp2ZHhjY0orRVNaR1RvL21jNFpOVWwxK2VXbFdJemlwZ29vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzelJxZE1oNlR5Q011LVVnSG5XMG1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjllYzRjNjVhLTZlNmUtNDVjZi1hYTRjLTJmMjBhNDliZTFmM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDMyLFxuICAgICAgOTUsXG4gICAgICAyMjMsXG4gICAgICA2MSxcbiAgICAgIDEzMSxcbiAgICAgIDE3NCxcbiAgICAgIDE4NSxcbiAgICAgIDI1MyxcbiAgICAgIDIsXG4gICAgICAyNDQsXG4gICAgICAxODYsXG4gICAgICAxMjcsXG4gICAgICAyMTQsXG4gICAgICAxMDUsXG4gICAgICAyMDksXG4gICAgICAxMDUsXG4gICAgICAxNTQsXG4gICAgICAxMzEsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMTQyLFxuICAgICAgMTUyLFxuICAgICAgMTMsXG4gICAgICAyMjIsXG4gICAgICAyNyxcbiAgICAgIDE1NCxcbiAgICAgIDExMyxcbiAgICAgIDIxNCxcbiAgICAgIDIxMSxcbiAgICAgIDE3OSxcbiAgICAgIDYsXG4gICAgICAxMjYsXG4gICAgICA3MixcbiAgICAgIDE1NCxcbiAgICAgIDgxLFxuICAgICAgNDksXG4gICAgICAxMzEsXG4gICAgICA4MSxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKSERDQUYzNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzUwNjk1OTk5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkwOTcyMjczMjE1NzQ6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORGlzTHNDRU55aGhiUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5PWm1VMFQ2WitkN2VlV2Y3U3JHZUtlZFF6VzdCK2VRNXBVaEtNREtXd0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSE1RTVBiam5YSU5odTZKcDlUVHZFZWdlM0MzejV5bHhpUDNDek1lVHowRFlMdUVDS294NytQRkJwdHNXaUxRa2pnT0FvZTl2NUdKMjRsNEZGZTF4RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibW1NOUYxV3l4ajUzVHlBVGlXcFBjazNoaDRER0FkMU52enkzNE9SYkFhTzdtT21rMEpKTTVPV2VZV2xPbDhUZjVEMkpkSzR6eHBtRlR1ZTc4czc2RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzUwNjk1OTk5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NTA4NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHaEdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdoRy5qc29uIjogIntcImtleURhdGFcIjpcIklVK3JVNHdIUHNBc0pQd3IydzdhRk9LaVJpREV1VnUySlVxOTZQN3ArZDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjYxNDAxOTM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2MTExODgyMDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
