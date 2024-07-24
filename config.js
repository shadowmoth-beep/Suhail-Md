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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_28_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAzNixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc4LFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgMTc1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDc1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDcsXG4gICAgICAgIDIxLFxuICAgICAgICA0NixcbiAgICAgICAgMjA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM2LFxuICAgICAgICA5MixcbiAgICAgICAgMjQwLFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZFB4bDNpQ3luY0hqZXZ5TW02cy9HeFVXOGRQMDF4SWI0TkxLYzBKVGg0Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamlkckJBVE5RV3VoTXB0ZjZsdUVvUVwiLFxuICBcInBob25lSWRcIjogXCJmYmUwM2U4Ni1iZDdkLTQzNTQtOTcwNS02NjhiNWVlYTMzNjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAxMTUsXG4gICAgICAxNjEsXG4gICAgICAxMzUsXG4gICAgICAyMzgsXG4gICAgICAxMDMsXG4gICAgICA0MixcbiAgICAgIDU2LFxuICAgICAgNTUsXG4gICAgICAxMTgsXG4gICAgICAxMDgsXG4gICAgICAxMDMsXG4gICAgICAyMTUsXG4gICAgICAxMjAsXG4gICAgICAyMTQsXG4gICAgICAxMjksXG4gICAgICAxODYsXG4gICAgICAyMzQsXG4gICAgICA0OSxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICA1NSxcbiAgICAgIDE4NCxcbiAgICAgIDI0MCxcbiAgICAgIDUyLFxuICAgICAgMTE5LFxuICAgICAgMzEsXG4gICAgICAxNDUsXG4gICAgICAxMjQsXG4gICAgICA1NSxcbiAgICAgIDE5MixcbiAgICAgIDQ4LFxuICAgICAgMTcxLFxuICAgICAgMjIyLFxuICAgICAgOTMsXG4gICAgICAyMCxcbiAgICAgIDE0MCxcbiAgICAgIDUsXG4gICAgICAyMjYsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOMjFGNDRCS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDgxNjkyNDI2OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2hhZG93IE1vdGhcIixcbiAgICBcImxpZFwiOiBcIjg0MjYzMTQ3OTU4NTI0OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01YVzI2c0NFTEtTZzdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUlFWamZmQ2NyUXcxMk1sYlFaZDhsZUczOXNNQzNYT1d3VlpFSXNldWpFOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjSWI3OUdYbkNpamczOC8yVXI2bTZ0eGtPNklTTkhtcTFyQkw4QWxyUTVPTlZRNzZJak5JdkttcGVoY254S2MvVjJQc1c3WE5Jc1I3dDhMVmZDRXpDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuZEw2UlZ3ajlYenJMYjZ6d0xyYUFDRVpqaFk3WEhic3VjTGVZWFF6eEdUM1gxRnJHNk1YaktKclF6Nk5ZZ0ZLOHhEZGE5OUhrYVhmRWkrZ0RBd0pDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwODE2OTI0MjY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODEzMzAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
