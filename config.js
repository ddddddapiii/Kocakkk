
/*─────────────────────────────────────────
  new   
  
  POWERED BY ZANSPIW
  https://www.youtube.com/@YTZansPiwOFFC
  UPDATE?👇
  https://whatsapp.com/
  channel/0029Vae7qieJJhzSDEBlkG2a
  
──────────────────────────────────────────*/

const fs = require('fs')

global.owner = ["6285850213046", "6283123405940", "6283899858313"]
global.linkch = "https://whatsapp.com/channel/0029Vae7qieJJhzSDEBlkG2a"

global.status = true
global.welcome = true
global.botname = "𝘋𝘖𝘕𝘎`𝘌𝘙 𝘔𝘜𝘓𝘛𝘐 𝘋𝘌𝘝𝘐𝘊𝘌"
global.mess = {
    owner: "no, this is for owners only",
    group: "this is for groups only",
    private: "this is specifically for private chat"
}
global.idch = '120363211868027307@newsletter'
global.packname = 'Zanspiw'
global.author = 'Hzanspiw woila'
global.pairing = "ZANSPIWW"
global.elevenlabs = "GET APIKEY elevenlabs.io"
// CPANEL SETTING

global.host = ""

global.application = {

  api_key: "",

  c_api_key: ""

}

global.eggs = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah by telegram 

global.location = '1' // id location by telegram 

global.serverCreate = {

  nestId: "5", //Nest Id panel lu

    eggId: "15", //Egg Id panel lu

  limits: {

    db: "1", //Mending ga usah diganti

    backups: "1", //Mending ga usah diganti

    allocation: "0" //Mending ga usah diganti

  },

  eggs: {

    environment: {

      "CMD_RUN": "npm start", //Sesuaiin sama eggs lu

      "GIT_ADDRESS": "",

      "BRANCH": "",

      "USERNAME": "",

      "ACCESS_TOKEN": ""

    }

  }

}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
