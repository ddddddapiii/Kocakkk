
/*─────────────────────────────────────────
  BASE KYUU🤓
  ──────────────
  
  YouTube  : https://www.youtube.com/@YTZansPiwOFFC  
  Telegram : https://zanspiwxd      
  
   (JIKA ADA YANH EROR)
   CONTACT
   WA : 6285850213046
   TELE : https://zanspiwxd  
   
   MEN:2382 
──────────────────────────────────────────*/

require('../settings/config');
const req = require("al-http-request").req
const translate = require('translate-google-api');
const fs = require('fs');
const axios = require('axios');
const cheerio = require("cheerio");
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const fetch = require("node-fetch")
const moment = require("moment-timezone");

const { Primbon } = require('../scrape/primbon')

const primbon = new Primbon()
const path = require("path")
const os = require('os');
const ws = require("ws")
const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');

const {
    default:
    baileys,
    getContentType, 
   } = require("@whiskeysockets/baileys");
const { createCanvas, loadImage } = require('canvas');
const sharp = require('sharp');
const { Sticker } = require('wa-sticker-formatter');
module.exports = zanspiw = async (zanspiw, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        
        const sender = m.key.fromMe ? zanspiw.user.id.split(":")[0] + "@s.whatsapp.net" || zanspiw.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];
        //BERITAMENU
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

 global.xyiroapi = "Xy-wfgLAU6O8l"      
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api")
const { textbanv1, textbanv2, textbanv3, textbanv4, textbanv5, textbanv6, textbanv7, textbanv8, textbanv9, textbanv10, textbanv11, textbanv12, textbanv13, textbanv14, textbanv15, textbanv16, textbanv17, textbanv18, textbanv19, textbanv20, textbanv21, textbanv22, textbanv23, textbanv24, textbanv25, textbanv26, textbanv27, textbanv28, textbanv29, textbanv30, textbanv31, textbanv32, textbanv33, textbanv34, textbanv35, textbanv36, textbanv37, textbanv38 } = require('../TextWhatsapp/textban.js')

// TEXT UNBANNED


const { textunbanv1, textunbanv2, textunbanv3, textunbanv4, textunbanv5, textunbanv6, textunbanv7, textunbanv8, textunbanv9, textunbanv10, textunbanv11, textunbanv12, textunbanv13, textunbanv14, textunbanv15, textunbanv16, textunbanv17, textunbanv18, textunbanv19, textunbanv20, textunbanv21 } = require('../TextWhatsapp/textunban.js')

//TEXT UNBAN PREMIUM 

const { textunbanpremv1, textunbanpremv2, textunbanpremv3 } = require('../TextWhatsapp/textunbanprem.js')

const { fakec1, fakec2, fakec3, fakec4, fakec5, fakec6, fakec7, fakec8, fakec9, fakec10, fakec11 } = require('../TextWhatsapp/fakechat.js')
function generateRandomPassword() {
  const characters = '1234568910';
  const length = 5;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");

        const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
        const botNumber = await zanspiw.decodeJid(zanspiw.user.id);
        const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await zanspiw.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize
           } = require('./lib/myfunction');
        
        const { remini } = require('./lib/function/remini');
                
        const cihuy = fs.readFileSync('./start/lib/media/orderM.png')
        const { fquoted } = require('./lib/fquoted')
        
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#4a69bd").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#ffffff").black(
                    `   ▢ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ▢ Pesan: ${m.body || m.mtype} \n` +
                    `   ▢ Pengirim: ${pushname} \n` +
                    `   ▢ JID: ${senderNumber}`
                )
            );
            
            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#ffffff").black(
                        `   ▢ Grup: ${groupName} \n` +
                        `   ▢ GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }

        //menghapus statusMention di Group
        if (m.mtype.includes("groupStatusMentionMessage") && m.isGroup) {
            await zanspiw.deleteMessage(m.chat, m.key);
        }
        
        const reaction = async (jidss, emoji) => {
            zanspiw.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
        
        async function reply(text) {
            zanspiw.sendMessage(m.chat, {
                text: text,
                contextInfo: {
                    mentionedJid: [sender],
                    externalAdReply: {
                        title: "π Dong`er",
                        body: "This script was created by ZansPiw",
                        thumbnailUrl: "https://github.com/DongEr Md.png",
                        sourceUrl: 'https://www.youtube.com/@YTZansPiwOFFC',
                        renderLargerThumbnail: false,
                    }
                }
            }, { quoted: m })
        }
 
        class BlueArchive {
        voice = async function voice(text, model = "Airi", speed = 1.2) {
            return new Promise(async (resolve, reject) => {
                try {
                    if (!text || text.length >= 500)
                        throw new Error(`Make sure to enter valid text, that's not exceed 500 words!`);
                    if (speed && (speed < 0.1 || speed > 2))
                        speed = 2;
                    model = "JP_" + model;
                    const base_url = "https://ori-muchim-bluearchivetts.hf.space/";
                    const session_hash = this.generateSession();
                    const socket = new ws("wss://ori-muchim-bluearchivetts.hf.space/queue/join");
                    socket.on("message", (data) => {
                        const d = JSON.parse(data.toString("utf8"));
                        switch (d.msg) {
                            case "send_hash": {
                                socket.send(JSON.stringify({
                                    fn_index: 0,
                                    session_hash,
                                }));
                                break;
                            }
                            case "send_data": {
                                socket.send(JSON.stringify({
                                    fn_index: 0,
                                    session_hash,
                                    data: [text, model, speed],
                                }));
                                break;
                            }
                            case "estimation":
                            case "process_starts": {
                                break;
                            }
                            case "process_completed": {
                                const o = d.output;
                                const name = o.data[1]?.name;
                                socket.close();
                                return resolve({
                                    text,
                                    model: model,
                                    speed,
                                    result: {
                                        duration: +o.duration.toFixed(2),
                                        path: name,
                                        url: base_url + "file=" + name,
                                    },
                                });
                            }
                            default: {
                                console.log(`Unexpected message type : ${data.toString("utf8")}`);
                                break;
                            }
                        }
                    });
                } catch (e) {
                    return reject(`Error in voice process: ${e.message}`);
                }
            });
        }
        generateSession = function generateSession() {
            return Math.random().toString(36).substring(2);
        }
    }
const suppVoice = ['airi', 'akane', 'akari', 'ako', 'aris', 'arona', 'aru', 'asuna', 'atsuko', 'ayane', 'azusa', 'cherino', 'chihiro', 'chinatsu', 'chise', 'eimi', 'erica', 'fubuki', 'fuuka', 'hanae', 'hanako', 'hare', 'haruka', 'haruna', 'hasumi', 'hibiki', 'hihumi', 'himari', 'hina', 'hinata', 'hiyori', 'hoshino', 'iori', 'iroha', 'izumi', 'izuna', 'juri', 'kaede', 'karin', 'kayoko', 'kazusa', 'kirino', 'koharu', 'kokona', 'kotama', 'kotori', 'main', 'maki', 'mari', 'marina', 'mashiro', 'michiru', 'midori', 'miku', 'mimori', 'misaki', 'miyako', 'miyu', 'moe', 'momoi', 'momoka', 'mutsuki', 'NP0013', 'natsu', 'neru', 'noa', 'nodoka', 'nonomi', 'pina', 'rin', 'saki', 'saori', 'saya', 'sena', 'serika', 'serina', 'shigure', 'shimiko', 'shiroko', 'shizuko', 'shun', 'ShunBaby', 'sora', 'sumire', 'suzumi', 'tomoe', 'tsubaki', 'tsurugi', 'ui', 'utaha', 'wakamo', 'yoshimi', 'yuuka', 'yuzu', 'zunko'];
async function createSticker(url, packName, authorName, quality) {
    let res = await fetch(url);
    let buffer = await res.buffer(); 
    let stickerMetadata = {
        type: 'full',
        pack: packName,
        author: authorName,
        quality: 100
    };
    return (new Sticker(buffer, stickerMetadata)).toBuffer();
}

async function ffStalk(id) {
    let formdata = new FormData()
    formdata.append('uid', id)
    let { data } = await axios.post('https://tools.freefireinfo.in/profileinfo.php?success=1', formdata, {
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "origin": "https://tools.freefireinfo.in",
            "referer": "https://tools.freefireinfo.in/profileinfo.php?success=1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
            "cookie": "_ga=GA1.1.1069461514.1740728304; __gads=ID=fa4de8c6be61d818:T=1740728303:RT=1740728303:S=ALNI_MYhU5TQnoVCO8ZG1O95QdJQc1-u1Q; __gpi=UID=0000104decca5eb5:T=1740728303:RT=1740728303:S=ALNI_MaVhADwQqMyGY78ZADfPLLbbw8zfQ; __eoi=ID=f87957be98f6348b:T=1740728303:RT=1740728303:S=AA-Afjb5ISbOLmlxgjjGBUWT3RO3; PHPSESSID=d9vet6ol1uj3frjs359to1i56v; _ga_JLWHS31Q03=GS1.1.1740728303.1.1.1740728474.0.0.0; _ga_71MLQQ24RE=GS1.1.1740728303.1.1.1740728474.57.0.1524185982; FCNEC=%5B%5B%22AKsRol9jtdxZ87hML5ighFLFnz7cP30Fki_Fu8JOnfi-SOz3P6QL33-sNGahy6Hq5X9moA6OdNMIcgFtvZZJnrPzHecI_XbfIDiQo9Nq-I1Y_PRXKDUufD0nNWLvDRQBJcdvu_bOqn2X06Njaz3k4Ml-NvsRVw21ew%3D%3D%22%5D%5D"
        }
    })
    const $ = cheerio.load(data)
    let tr = $('div.result').html().split('<br>')
    let name = tr[0].split('Name: ')[1]
    let bio = tr[14].split(': ')[1]
    let like = tr[2].split(': ')[1]
    let level = tr[3].split(': ')[1]
    let exp = tr[4].split(': ')[1]
    let region = tr[5].split(': ')[1]
    let honorScore = tr[6].split(': ')[1]
    let brRank = tr[7].split(': ')[1]
    let brRankPoint = tr[8].split(': ')[1]
    let csRankPoint = tr[9].split(': ')[1]
    let accountCreated = tr[10].split(': ')[1]
    let lastLogin = tr[11].split(': ')[1]
    let preferMode = tr[12].split(': ')[1]
    let language = tr[13].split(': ')[1]
    let booyahPassPremium = tr[16].split(': ')[1]
    let booyahPassLevel = tr[17].split(': ')[1]
    let petName = tr[20].split(': ')[1] || 'doesnt have pet.'
    let petLevel = tr[21].split(': ')[1] || 'doesnt have pet.'
    let petExp = tr[22].split(': ')[1] || 'doesnt have pet.'
    let starMarked = tr[23].split(': ')[1] || 'doesnt have pet.'
    let selected = tr[24].split(': ')[1] || 'doesnt have pet.'
    // Extract guild info - need to check if it exists in the result
    let guild = 'Tidak memiliki guild'
    if (tr.length > 26 && tr[26]) {
        if (tr[26].includes('Guild:')) {
            guild = tr[26].split('Guild: ')[1]
        }
    }
    let equippedItems = []
    $('.equipped-items').find('.equipped-item').each((i, e) => {
        let name = $(e).find('p').text().trim()
        let img = $(e).find('img').attr('src')
        equippedItems.push({
            name,
            img
        })
    })
    return {
        name,
        bio,
        like,
        level,
        exp,
        region,
        honorScore,
        brRank,
        brRankPoint,
        csRankPoint,
        accountCreated,
        lastLogin,
        preferMode,
        language,
        booyahPassPremium,
        booyahPassLevel,
        petInformation: {
            name: petName,
            level: petLevel,
            exp: petExp,
            starMarked,
            selected
        },
        guild,
        equippedItems
    }
}
async function tiktokk(url) {
  try {
    const response = await req('https://ttsave.app/download', {
      method: "POST",
      params: {
      query: url,
      language_id: '1'
    },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
      }
  });
    const html = response.content;
    const $ = cheerio.load(html);
    const creator = $('h2.font-extrabold.text-xl').text().trim();
    const videoTitle = $('p.text-gray-600').text().trim();
    const downloadLinks = {
      "nowm": '',
      "wm": '',
      "audio": '',
      "profile": '',
      "cover": ''
    };
    $('a[onclick^="bdl"]').each((i, element) => {
      const linkType = $(element).attr('type');
      const linkUrl = $(element).attr('href');

      if (linkType === 'no-watermark') downloadLinks.nowm = linkUrl;
      if (linkType === 'watermark') downloadLinks.wm = linkUrl;
      if (linkType === 'audio') downloadLinks.audio = linkUrl;
      if (linkType === 'profile') downloadLinks.profile = linkUrl;
      if (linkType === 'cover') downloadLinks.cover = linkUrl;
    });
    const result = {
      creator: creator,
      vtname: videoTitle,
      download: downloadLinks
    };
return result
  } catch (error) {
    console.error('Error:', error);
  }
}
const {
  mulai,
  createLobby,
  cariItem,
  attack,
  defense,
  lobby,
  inventory,
  saveitem,
  run,
  dungeon_sell,
  use
} = require("./lib/game.js")
const similarity = require("similarity")
if (m.quoted) {
    let tebakBendera = zanspiw.tebakbendera?.[m.chat];
    let tebakGambar = zanspiw.tebakgambar?.[m.chat];
    let susunkata = zanspiw.susunkata?.[m.chat];
    let tebakkimia = zanspiw.tebakkimia?.[m.chat];
    if (tebakBendera) {
        let id = tebakBendera[1]?.key?.id;
        let json = tebakBendera[0];
        let txt = m.text.trim().toLowerCase();

        if (m.quoted.key.id === id) {
            let jawaban = similarity(json.name.toLowerCase(), txt);
            if (json.name.toLowerCase() === txt) {
                global.db.data.users[m.sender].limit += 10;
                global.db.data.users[m.sender].exp += 200;
                m.reply(`Jawaban kamu benar!\nKamu mendapatkan 10 limit dan 200 EXP.`);
                clearTimeout(tebakBendera[2]);
                delete zanspiw.tebakbendera[m.chat];
            } else if (txt === "menyerah") {
                await zanspiw.sendMessage(m.chat, {
                    text: `Kamu menyerah secepat itu wkwkwkwkwk\nJawabannya: ${json.name.toLowerCase()}`
                }, { quoted: tebakBendera[1] });
                clearTimeout(tebakBendera[2]);
                delete zanspiw.tebakbendera[m.chat];
            } else if (jawaban >= 0.75) {
                m.reply("Hampir benar!");
            } else {
                m.reply("Jawaban salah!");
            }
        }
    } else if (tebakGambar) {
        let id = tebakGambar[1]?.key?.id;
        let json = tebakGambar[0];
        let txt = m.text.trim().toLowerCase();

        if (m.quoted.key.id === id) {
            let jawaban = similarity(json.jawaban.toLowerCase(), txt);
            if (json.jawaban.toLowerCase() === txt) {
                global.db.data.users[m.sender].limit += 20;
                global.db.data.users[m.sender].exp += 200;
                m.reply(`Jawaban kamu benar!\nKamu mendapatkan 20 limit dan 200 EXP.`);
                clearTimeout(tebakGambar[2]);
                delete zanspiw.tebakgambar[m.chat];
            } else if (txt === "menyerah") {
                await zanspiw.sendMessage(m.chat, {
                    text: `Kamu menyerah secepat itu wkwkwkwkwk\nJawabannya: ${json.jawaban.toLowerCase()}`
                }, { quoted: tebakGambar[1] });
                clearTimeout(tebakGambar[2]);
                delete zanspiw.tebakgambar[m.chat];
            } else if (jawaban >= 0.75) {
                m.reply("Hampir benar!");
            } else {
                m.reply("Jawaban salah!");
            }
        }
    } else if (susunkata) {
      let id = susunkata[1]?.key?.id;
      let txt = m.text.trim().toLowerCase()
      let ans = susunkata[0]?.jawaban.toLowerCase()
      if (m.quoted.key.id === id) {
        let answer = similarity(ans, txt)
        if (ans === txt) {
              global.db.data.users[m.sender].limit += 20;
                global.db.data.users[m.sender].exp += 200;
                m.reply(`Jawaban kamu benar!\nKamu mendapatkan 20 limit dan 200 EXP.`);
          clearTimeout(susunkata[2])
          delete zanspiw.susunkata[m.chat]
        } else if (txt === "menyerah") {
          m.reply(`kamu menyerah sangat cepat wkwkwkwk\n jawaban: ${ans}`)
          clearTimeout(susunkata[2]);
          delete zanspiw.susunkata[m.chat];
        } else if (answer >= 0.75) {
          m.reply("hampir benar")
        } else {
          m.reply("salah")
        }
      }
    } else if (tebakkimia) {
      let id = tebakkimia[1].key.id || tebakkimia[1].id
      let txt = m.text.trim().toLowerCase();
      let jawaban = tebakkimia[0].unsur.toLowerCase();
      let simi = similarity(jawaban, txt);
      if (m.quoted.key.id === id) {
        if (txt === jawaban) {
          global.db.data.users[m.sender].limit += 20;
          global.db.data.users[m.sender].exp += 300;
          clearTimeout(zanspiw.tebakkimia[m.chat][2]);
          delete zanspiw.tebakkimia[m.chat]
          m.reply(`benar\n kamu mendapat limit +20 exp +300`)
        } else if (txt === "menyerah") {
          clearTimeout(zanspiw.tebakkimia[m.chat][2]);
          delete zanspiw.tebakkimia[m.chat];
          m.reply(`Dah nyerah? ezzz jawabanya: ${jawaban}`)
        } else if (simi >= 0.75) {
          m.reply("hampir benar")
        } else {
          m.reply("salah")
        }
      }
    }
}
global.storepath = "./start/lib/database/store-list.json"
function writeList(data) {
  fs.writeFileSync(storepath, JSON.stringify(data, null, 2))
}
function readList() {
  return JSON.parse(fs.readFileSync(storepath), 'utf-8') || {}
}
let storelist = {
  addlist: async (nama, content) => {
    let data = readList()
     data[nama] = {
       content: content
     }
   writeList(data)
   return true
  },
  getList: async () => {
    let data = readList()
    return data
  },
  dellList: async (nama) => {
    let data = readList()
    delete data[nama]
    writeList(data)
    return true 
  }
}
if (body) {
  let datalist = await storelist.getList()
  let lists = Object.keys(datalist)
  if (lists.includes(body)) {
    reply(datalist[body].content)
  }
}
        switch (command) {
          case "addlist": {
            if (!text) return reply("contoh .addlist nama|isi")
            let nama = text.split("|")[0]
            let isi = text.split("|")[1]
            let data = await storelist.addlist(nama, isi)
            reply(`sukses nambah ${nama} ke store list`)
          }
          break
          case "dell-list": {
            if (!text) return reply("masukan nama list yang ingin di hapus")
            let data = await storelist.getList()
            if (!(data[text.trim()])) return reply("nama tidak di temukan dalam list")
            let d = await storelist.dellList(text.trim())
            reply("sukses menghapus list")
          }
          break 
          case "getlist": {
            let list = await storelist.getList()
            let bj = Object.keys(list)
            reply("list store:\n" + bj.join("\n"))
          }
          break
case "text-welcome": 
case "text-left": {
  if (!Access) return m.reply("Mau apa lu😜")
  if (command === "text-welcome") {
    if (!text) return m.reply("Masukkan teks welcome. Gunakan #user untuk nomor yang masuk/keluar dan #grub untuk nama grup dan #total untuk member sekarang dan #author untuk siapa yang menambahkan.");
    if (!fs.existsSync("./start/lib/database/welcome.json")) {
      fs.writeFileSync("./start/lib/database/welcome.json", JSON.stringify({}, null, 2));
    }
    let data = JSON.parse(await fs.readFileSync("./start/lib/database/welcome.json", "utf8"));
    data.text = text;
    fs.writeFileSync("./start/lib/database/welcome.json", JSON.stringify(data, null, 2));
    return m.reply("Teks welcome berhasil diperbarui.");
  } else {
    if (!text) return m.reply("Masukkan teks left. Gunakan #user untuk nomor yang masuk/keluar, #grub untuk nama grup dan #total untuk member sekarang.");
    if (!fs.existsSync("./start/lib/database/left.json")) {
      fs.writeFileSync("./start/lib/database/left.json", JSON.stringify({}, null, 2));
    }
    let data = JSON.parse(await fs.readFileSync("./start/lib/database/left.json", "utf8"));
    data.text = text;
    fs.writeFileSync("./start/lib/database/left.json", JSON.stringify(data, null, 2));
    return m.reply("Teks left berhasil diperbarui.");
  }
}
break;

case "tebakbendera":
        zanspiw.tebakbendera ??= {};
        if (zanspiw.tebakbendera[m.chat]) {
            return zanspiw.sendMessage(m.chat, { text: "Masih ada soal yang belum terjawab" }, { quoted: zanspiw.tebakbendera[m.chat][1] });
        }

        try {
            let response = await fetch("https://raw.githubusercontent.com/alands-offc/database/refs/heads/master/games/tebakbendera2.json");
            let data = await response.json();
            let json = pickRandom(data);

            zanspiw.tebakbendera[m.chat] = [
                json,
                await zanspiw.sendMessage(m.chat, {
                    image: { url: json.img },
                    caption: `Bendera apakah ini?\nWaktu habis: 120 detik dari sekarang\nKetik 'menyerah' untuk nyerah\nBalas pesan ini untuk menjawab`
                }, { quoted: m }),
                setTimeout(async () => {
                    await zanspiw.sendMessage(m.chat, {
                        text: `Waktu habis! Jawabannya: ${json.name.toLowerCase()}`
                    }, { quoted: zanspiw.tebakbendera[m.chat][1] });
                    delete zanspiw.tebakbendera[m.chat];
                }, 120 * 1000)
            ];
        } catch (error) {
            console.error("Error mengambil data:", error);
            throw "Gagal mengambil data tebak bendera.";
        }
        break;

    case "tebakgambar":
        zanspiw.tebakgambar ??= {};
        if (zanspiw.tebakgambar[m.chat]) {
            return zanspiw.sendMessage(m.chat, { text: "Masih ada soal yang belum terjawab" }, { quoted: zanspiw.tebakgambar[m.chat][1] });
        }

        try {
            let response = await fetch("https://raw.githubusercontent.com/alands-offc/database/refs/heads/master/games/tebakgambar.json");
            let data = await response.json();
            let json = pickRandom(data);

            zanspiw.tebakgambar[m.chat] = [
                json,
                await zanspiw.sendMessage(m.chat, {
                    image: { url: json.img },
                    caption: `Tebak gambar ini?\nWaktu habis: 180 detik dari sekarang\nKetik 'menyerah' untuk nyerah\nBalas pesan ini untuk menjawab`
                }, { quoted: m }),
                setTimeout(async () => {
                    await zanspiw.sendMessage(m.chat, {
                        text: `Waktu habis! Jawabannya: ${json.jawaban.toLowerCase()}`
                    }, { quoted: zanspiw.tebakgambar[m.chat][1] });
                    delete zanspiw.tebakgambar[m.chat];
                }, 180 * 1000)
            ];
        } catch (error) {
            console.error("Error mengambil data:", error);
            throw "Gagal mengambil data tebak gambar.";
        }
        break;
    case "susunkata":
        zanspiw.susunkata ??= {};
        if (zanspiw.susunkata[m.chat]) {
            return zanspiw.sendMessage(m.chat, { text: "Masih ada soal yang belum terjawab" }, { quoted: zanspiw.susunkata[m.chat][1] });
        }

        try {
            let response = await fetch("https://raw.githubusercontent.com/alands-offc/database/refs/heads/master/games/susunkata.json");
            let data = await response.json();
            let json = pickRandom(data);

            zanspiw.susunkata[m.chat] = [
                json,
                await zanspiw.sendMessage(m.chat, {
                    text: `susun kata ini\nsusun: ${json.soal} \ntype: ${json.tipe}\nwaktu: 60detik\nKetik 'menyerah' untuk nyerah\nBalas pesan ini untuk menjawab`
                }, { quoted: m }),
                setTimeout(async () => {
                    await zanspiw.sendMessage(m.chat, {
                        text: `Waktu habis! Jawabannya: ${json.jawaban.toLowerCase()}`
                    }, { quoted: zanspiw.susunkata[m.chat][1] });
                    delete zanspiw.susunkata[m.chat];
                }, 60 * 1000)
            ];
        } catch (error) {
            console.error("Error mengambil data:", error);
            throw "Gagal mengambil susun kata.";
        }
        break;
case "tebgar": {
zanspiw.tebakgambar ??= {};
        if (!zanspiw.tebakgambar[m.chat]) {
            return zanspiw.sendMessage(m.chat, { text: "belum ada soal di chat ini" }, { quoted: zanspiw.tebakgambar[m.chat][1] });
        }

  let clue = zanspiw.tebakgambar[m.chat][0].deskripsi;
  await zanspiw.sendMessage(m.chat, {text: clue}, {quoted: m})
}
break
case "tebakkimia": {
  zanspiw.tebakkimia ??= {};
  if (zanspiw.tebakkimia[m.chat]) {
    return zanspiw.sendMessage(m.chat, { text: "masih ada soal yang brlum terjawab di chat ini"}, { quoted: zanspiw.tebakkimia[2]})
  }
    try {
      let data = pickRandom(await (await fetch("https://raw.githubusercontent.com/alands-offc/database/refs/heads/master/games/tebakkimia.json")).json())
      zanspiw.tebakkimia[m.chat] = [
        data,
        await zanspiw.sendMessage(m.chat, { text: `dari lambang berikut apa unsurnya? \nlambang: ${data.lambang}`}, { quoted: m}),
        setTimeout(async () => {
          await zanspiw.sendMessage(m.chat, { text: `waktu habis unsur dari lambang ${data.lambang} adalah ${data.unsur}`}, {quoted:m})
          delete zanspiw.tebakkimia[m.chat]
        }, 60 * 1000)
      ]
    } catch (err){
      m.reply("error " + err)
    }
}
break
              case "dungeon": {
    let text = `hai ${m.pushName} sudah siap untuk berpetualang? ayo 
list dungeon command:
*•.dungeon-create-profile* (buat lobby/profile dungeon)
*•.dungeon-masuk* (masuk ke dungeon)
*•.dungeon-cari-item* (cari item di dungeon)
*•.dungeon-attack* (jika bertemu monter pilih serang)
*•.dungeon-defense* (jika bertemu monster memilih untuk bertahan dan mencuri item nya tapi terkena damage sedikit)
*•.dungeon-run* (pilih lari dari monster jika konster sangat kuat)
*•dungeon-inventory* (cek inventory yang kamunbawah ke dungeon)
*•.dungeon-lobby* (cek informasi profile/gudang kamu)
*•.dungeon-save-item* (menyimpan item seperti gold yang di dapat dari monster agar tidak hilang saat kamu mati)
*•.dungeon-sell* (jual item ke pedagang)
*•.dungeon-use* (pakai item senjata/medkit)`
await m.reply(text)
    }
    break
    case "dungeon-create-profile": {
      if (!text) m.reply("masukan nama mu")
    let hs = await createLobby(m.sender, text)
    await m.reply(hs)
    }
    break
    case "dungeon-masuk": {
      let masuk = await mulai(m.sender)
      await m.reply(masuk)
    }
    break
    case "dungeon-cari-item": {
      let item = await cariItem(m.sender)
      await m.reply(item)
    }
    break
    case "dungeon-attack": {
      let atk = await attack(m.sender)
      await m.reply(atk)
    }
    break 
    case "dungeon-defense": {
      let df = await defense(m.sender)
      await m.reply(df)
    }
    break
    case "dungeon-inventory": {
      let inv = await inventory(m.sender)
let t = "inventory mu: \n";

Object.entries(inv).forEach(([key, value]) => {
    t += `${key}: ${value}\n`;
});
      await m.reply(t)
    }
    break
    case "dungeon-lobby": {
      let inv = await lobby(m.sender)
let t = "lobby mu: \n profile:\n";

Object.entries(inv.profile).forEach(([key, value]) => {
    t += `${key}: ${value}\n`;
});
t += "gudang:\n"
Object.entries(inv.keepinventory).forEach(([key, value]) => {
    t += `${key}: ${value}\n`;
});
      await m.reply(t)
    }
    break
    case "dungeon-save-item": {
    let sv = await saveitem(m.sender) 
    m.reply(sv)
    }
    break
    case "dungeon-run": {
      let lr = await run(m.sender)
      m.reply(lr)
    }
    break
    case "dungeon-sell": {
      if (!args[0]) throw "masukan nama barang cek di nventory/inventory lobby"
      if (args[1] === "setuju") {
        let k = await dungeon_sell(m.sender, args[0], "setuju")
        return m.reply(k)
      } else if (args[1] === "batal") {
        let k = await dungeon_sell(m.sender, args[0], "batal")
        return m.reply(k)
      } else {
        let k = await dungeon_sell(m.sender, args[0], false)
        return m.reply(k)
      }
    }
    break
    case "dungeon-use": {
      if (!args[0]) throw "masukan nama item yang mau di pakai cek inventory"
      if (!args[1]) throw "mau pake berapa contoh .dungeon-use bow 1"
      let dg = await use(m.sender, args[0], args[1])
      m.reply(dg)
    }
    break
          case 'cerpen-anak':{
let hasil = await Cerpen(`anak`)
reply(hasil)
            
          }
break
case 'cerpen-bahasadaerah':{
let hasil = await Cerpen(`bahasa daerah`)
reply(hasil)
}
break
case 'cerpen-bahasainggris':{
let hasil = await Cerpen(`bahasa Inggris`)
reply(hasil)
}
break
case 'cerpen-bahasajawa':{
let hasil = await Cerpen(`bahasa jawa`)
reply(hasil)
}
break
case 'cerpen-bahasasunda':{
let hasil = await Cerpen(`bahasa sunda`)
reply(hasil)
}
break
case 'cerpen-budaya':{
let hasil = await Cerpen(`budaya`)
reply(hasil)
}
break
case 'cerpen-cinta':{
let hasil = await Cerpen(`cinta`)
reply(hasil)
}
break
case 'cerpen-cintaislami':{
let hasil = await Cerpen(`cinta islami`)
reply(hasil)
}
break
case 'cerpen-cintapertama':{
let hasil = await Cerpen(`cinta pertama`)
reply(hasil)
}
break
case 'cerpen-cintaromantis':{
let hasil = await Cerpen(`cinta romantis`)
reply(hasil)
}
break
case 'cerpen-cintasedih':{
let hasil = await Cerpen(`cinta sedih`)
reply(hasil)
}
break
case 'cerpen-cintasegitiga':{
let hasil = await Cerpen(`Cinta segitiga`)
reply(hasil)
}
break
case 'cerpen-cintasejati':{
let hasil = await Cerpen(`cinta sejati`)
reply(hasil)
}
break
case 'cerpen-galau': {
    reply(await Cerpen(`galau`))
}
break
case 'cerpen-gokil': {
    reply(await Cerpen(`gokil`))
}
break
case 'cerpen-inspiratif': {
    reply(await Cerpen(`inspiratif`))
}
break
case 'cerpen-jepang': {
    reply(await Cerpen(`jepang`))
}
break
case 'cerpen-kehidupan': {
    reply(await Cerpen(`kehidupan`))
}
break
case 'cerpen-keluarga': {
    reply(await Cerpen(`keluarga`))
}
break
case 'cerpen-kisahnyata': {
    reply(await Cerpen(`kisah nyata`))
}
break
case 'cerpen-korea': {
    reply(await Cerpen(`korea`))
}
break
case 'cerpen-kristen': {
    reply(await Cerpen(`kristen`))
}
break
case 'cerpen-liburan': {
    reply(await Cerpen(`liburan`))
}
break
case 'cerpen-malaysia': {
    reply(await Cerpen(`malaysia`))
}
break
case 'cerpen-mengharukan': {
    reply(await Cerpen(`mengharukan`))
}
break
case 'cerpen-misteri': {
    reply(await Cerpen(`misteri`))
}
break
case 'cerpen-motivasi': {
    reply(await Cerpen(`motivasi`))
}
break
case 'cerpen-nasihat': {
    reply(await Cerpen(`nasihat`))
}
break
case 'cerpen-nasionalisme': {
    reply(await Cerpen(`nasionalisme`))
}
break
case 'cerpen-olahraga': {
    reply(await Cerpen(`olahraga`))
}
break
case 'cerpen-patahhati': {
    reply(await Cerpen(`patah hati`))
}
break
case 'cerpen-penantian': {
    reply(await Cerpen(`penantian`))
}
break
case 'cerpen-pendidikan': {
    reply(await Cerpen(`pendidikan`))
}
break
case 'cerpen-pengalaman': {
    reply(await Cerpen(`pengalaman pribadi`))
}
break
case 'cerpen-pengorbanan': {
    reply(await Cerpen(`pengorbanan`))
}
break
case 'cerpen-penyesalan': {
    reply(await Cerpen(`penyesalan`))
}
break
case 'cerpen-perjuangan': {
    reply(await Cerpen(`perjuangan`))
}
break
case 'cerpen-perpisahan': {
    reply(await Cerpen(`perpisahan`))
}
break
case 'cerpen-persahabatan': {
    reply(await Cerpen(`persahabatan`))
}
break
case 'cerpen-petualangan': {
    reply(await Cerpen(`petualangan`))
}
break
case 'cerpen-ramadhan': {
    reply(await Cerpen(`ramadhan`))
}
break
case 'cerpen-remaja': {
    reply(await Cerpen(`remaja`))
}
break
case 'cerpen-rindu': {
    reply(await Cerpen(`rindu`))
}
break
case 'cerpen-rohani': {
    reply(await Cerpen(`rohani`))
}
break
case 'cerpen-romantis': {
    reply(await Cerpen(`romantis`))
}
break
case 'cerpen-sastra': {
    reply(await Cerpen(`sastra`))
}
break
case 'cerpen-sedih': {
    reply(await Cerpen(`sedih`))
}
break
case 'cerpen-sejarah': {
    reply(await Cerpen(`sejarah`))
}
break

case "ping": {
    m.reply("Pong! Bot aktif.");
}
break;
const { Sticker } = require('wa-sticker-formatter')
async function createSticker(req, url, packName, authorName, quality) {
  let stickerMetadata = {
    type: 'full',
    pack: packName,
    author: authorName,
    quality
  }
  return (new Sticker(req ? req : url, stickerMetadata)).toBuffer()
}
case 'sticker': case 's': {
 let ko = m.quoted? m.quoted : m 
 if (mime.includes("image")) {
 let media = await ko.download()
 
 zanspiw.sendImageAsSticker(m.chat, media, m, { packname: "Dong_Er MD", author: "ZansPiw" })
 } else if (mime.includes("video")) {
 let media = await ko.download()
 
 zanspiw.sendVideoAsSticker(m.chat, media, m, { packname: "Dong_Er MD", author: "ZansPiw" })
 }
}
break
case "speedtest": {
    exec("python3 speed.py", (err, stdout) => {
        if (err) return m.reply("Gagal menjalankan speed test.");
        m.reply(stdout);
    });
}
break;

case "whois": {
    if (!text) return m.reply("Contoh: .whois google.com");
    const axios = require("axios");
    axios.get(`https://api.whoislookupapi.com/?domain=${text}`)
        .then(res => m.reply(JSON.stringify(res.data, null, 2)))
        .catch(() => m.reply("Domain tidak ditemukan."));
}
break;

case "shortlink": {
    if (!text) return m.reply("Contoh: .shortlink https://example.com");
    axios.get(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(text)}`)
        .then(res => m.reply(`Shortlink: ${res.data}`))
        .catch(() => m.reply("Gagal memperpendek URL."));
}
break;

// 📊 INFORMASI & EDUKASI
case "cuaca": {
    if (!text) return m.reply("Contoh: .cuaca Jakarta");
   
    axios.get(`https://api.weatherapi.com/v1/current.json?key=APIKEY&q=${text}`)
        .then(res => {
            const { location, current } = res.data;
            m.reply(`Cuaca di ${location.name}, ${location.country}:\n🌡️ ${current.temp_c}°C\n🌧️ ${current.condition.text}`);
        })
        .catch(() => m.reply("Gagal mengambil data cuaca."));
}
break;

case "translate": {
    if (!text) return m.reply("Contoh: .translate halo ke inggris");
    
    const [kalimat, , bahasa] = text.split(" ke ");
    axios.get(`https://api.mymemory.translated.net/get?q=${kalimat}&langpair=id|${bahasa}`)
        .then(res => m.reply(res.data.responseData.translatedText))
        .catch(() => m.reply("Gagal menerjemahkan."));
}
break;

// 🏋️ OLAHRAGA & KESEHATAN
case "kalori": {
    if (!text) return m.reply("Contoh: .kalori nasi 100g");
    const axios = require("axios");
    axios.get(`https://api.spoonacular.com/food/ingredients/search?query=${text}&apiKey=APIKEY`)
        .then(res => m.reply(`Kalori dari ${text}: ${res.data.results[0].calories} kkal`))
        .catch(() => m.reply("Data tidak ditemukan."));
}
break;

case "cekbmi": {
    if (!text) return m.reply("Contoh: .cekbmi 70 175 (berat kg tinggi cm)");
    const [berat, tinggi] = text.split(" ").map(Number);
    if (!berat || !tinggi) return m.reply("Format salah!");
    const bmi = (berat / ((tinggi / 100) ** 2)).toFixed(2);
    m.reply(`BMI Anda: ${bmi} (${bmi < 18.5 ? "Kurus" : bmi < 24.9 ? "Normal" : "Gemuk"})`);
}
break;

// 🎮 HIBURAN
case "jokes": {
    const axios = require("axios");
    axios.get("https://v2.jokeapi.dev/joke/Any")
        .then(res => m.reply(res.data.setup ? `${res.data.setup}\n\n${res.data.delivery}` : res.data.joke))
        .catch(() => m.reply("Gagal mengambil jokes."));
}
break;

case "faktaunik": {
    const fakta = [
        "Gajah adalah satu-satunya hewan yang tidak bisa melompat.",
        "Otak manusia lebih aktif saat tidur daripada saat terjaga.",
        "Hujan di Venus terdiri dari asam sulfat.",
    ];
    m.reply(fakta[Math.floor(Math.random() * fakta.length)]);
}
break;

case "quotes": {
    const axios = require("axios");
    axios.get("https://api.quotable.io/random")
        .then(res => m.reply(`"${res.data.content}"\n- ${res.data.author}`))
        .catch(() => m.reply("Gagal mengambil quotes."));
}
break;

// 🔧 UTILITAS
case "hitungkata": {
    if (!text) return m.reply("Contoh: .hitungkata Halo dunia!");
    m.reply(`Jumlah kata: ${text.split(" ").length}`);
}
break;

case "konversimatauang": {
    if (!text) return m.reply("Contoh: .konversimatauang 100 USD ke IDR");
    const axios = require("axios");
    const [jumlah, from, , to] = text.split(" ");
    axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(res => {
            const rate = res.data.rates[to.toUpperCase()];
            if (!rate) return m.reply("Mata uang tidak valid.");
            m.reply(`💰 ${jumlah} ${from} = ${(jumlah * rate).toFixed(2)} ${to}`);
        })
        .catch(() => m.reply("Gagal mengambil kurs."));
}
break;

case "ytmp4": {
  if (!q.includes("youtube.com") && !q.includes("youtu.be")) return reply("Masukin Link YouTube Yang Valid!");
          if (db.data.users[m.sender].limit <1) return reply("Limit Kamu Telah Habis Silahkan bermain game Atau claim limit dengan .claim")
db.data.users[m.sender].limit -= 1
  let [link, quality] = q.split(",");
  let qualityOptions = ["144p", "240p", "360p", "480p", "720p", "1080p"];
  if (!quality) {
    let qualityList = qualityOptions.map(q => `▫️ ${q}`).join("\n");
    return reply(`📺 *Pilih Kualitas Video:*\n\n${qualityList}\n\nContoh: *ytmp4 ${link},360p*`);
  }
  if (!qualityOptions.includes(quality)) return reply(`⚠️ *Kualitas Tidak Valid!*\n\nPilih Salah Satu:\n${qualityOptions.map(q => `▫️ ${q}`).join("\n")}`);
  let apiUrl = `https://fastrestapis.fasturl.cloud/downup/ytmp4?url=${encodeURIComponent(link)}&quality=${quality}&server=auto`;
  reply("Tunggu Sebentar, Lagi Proses Download...");
  try {
    let res = await fetch(apiUrl);
    let data = await res.json();
    if (data.status !== 200) return reply("Gagal Mengambil Video!");
    let { title, metadata, author, url, media } = data.result;
    let cap = `📹 *Judul:* ${title}\n📌 *Durasi:* ${metadata.duration}\n👤 *Channel:* ${author.name}\n📆 *Upload:* ${metadata.uploadDate}\n🎞 *Kualitas:* ${quality}\n🔗 *Link:* ${url}`;
    await zanspiw.sendMessage(m.sender, {
      video: { url: media },
      mimetype: "video/mp4",
      fileName: `${title}.mp4`
    }, { quoted: m });
    await zanspiw.sendMessage(m.sender, { text: cap });
    reply("✅ *Berhasil!*");
  } catch (e) {
    console.error(e);
    reply("Terjadi Kesalahan, Coba Lagi Nanti!");
  }
}
break;
case "ytmp3": {
  if (!q.includes("youtube.com") && !q.includes("youtu.be")) return reply("Masukin Link YouTube Yang Valid!");
    if (db.data.users[m.sender].limit <1) return reply("Limit Kamu Telah Habis Silahkan bermain game Atau claim limit dengan .claim")
db.data.users[m.sender].limit -= 1
  let [link, quality] = q.split(",");
  let qualityOptions = ["64kbps", "128kbps", "192kbps", "256kbps", "320kbps"];
  if (!quality) {
    let qualityList = qualityOptions.map(q => `▫️ ${q}`).join("\n");
    return reply(`🔊 *Pilih Kualitas Audio:*\n\n${qualityList}\n\nContoh: *ytmp3 ${link},128kbps*`);
  }
  if (!qualityOptions.includes(quality)) return reply(`⚠️ *Kualitas Tidak Valid!*\n\nPilih Salah Satu:\n${qualityOptions.map(q => `▫️ ${q}`).join("\n")}`);
  let apiUrl = `https://fastrestapis.fasturl.cloud/downup/ytmp3?url=${encodeURIComponent(link)}&quality=${quality}&server=auto`;
  reply("Tunggu Sebentar, Lagi Proses Download...");
  try {
    let res = await fetch(apiUrl);
    let data = await res.json();
    if (data.status !== 200) return reply("Gagal Mengambil Audio!");
    let { title, metadata, author, url, media } = data.result;
    let cap = `🎵 *Judul:* ${title}\n📌 *Durasi:* ${metadata.duration}\n👤 *Channel:* ${author.name}\n📆 *Upload:* ${metadata.uploadDate}\n🎶 *Kualitas:* ${quality}\n🔗 *Link:* ${url}`;
    await zanspiw.sendMessage(m.sender, {
      audio: { url: media },
      mimetype: "audio/mp4",
      fileName: `${title}.mp3`
    }, { quoted: m });
    await zanspiw.sendMessage(m.sender, { text: cap });
    reply("✅ *Berhasil!*");
  } catch (e) {
    console.error(e);
    reply("Terjadi Kesalahan, Coba Lagi Nanti!");
  }
}
break;
case 'mediafire': case 'mf': {
  if (!q) return m.reply(`Kirim link Mediafire-nya!\n\nContoh: ${prefix + command} https://www.mediafire.com/file/xxx`)
    if (db.data.users[m.sender].limit <1) return reply("Limit Kamu Telah Habis Silahkan bermain game Atau claim limit dengan .claim")
db.data.users[m.sender].limit -= 1
  try {
    let res = await fetch(`https://api.vreden.my.id/api/mediafiredl?url=${q}`)
    let data = await res.json()
    if (!data.result || !data.result[0].status) return m.reply('Gagal mengambil data Mediafire.')
    let file = data.result[0]
    let { nama, mime, size, link } = file
    let caption = `*MEDIAFIRE DOWNLOADER*\n\n`
    caption += `*Nama:* ${nama}\n`
    caption += `*Ukuran:* ${size}\n`
    caption += `*Tipe:* ${mime}\n`
    caption += `*Server:* ${file.server}\n`
    caption += `*Link:* ${link}`
    let buffer = await (await fetch(link)).buffer()
    zanspiw.sendMessage(m.chat, {
      document: buffer,
      fileName: nama,
      mimetype: mime,
      caption: caption
    }, { quoted: m })
  } catch (e) {
    console.log(e)
    m.reply('Terjadi kesalahan, coba lagi nanti.')
  }
}
  break
          case 'playsp': case "playspotify": {
if (!text) return m.reply("apa yang mau dicari")
if (db.data.users[m.sender].limit <1) return reply("Limit Kamu Telah Habis Silahkan bermain game Atau claim limit dengan .claim")
db.data.users[m.sender].limit -= 1
async function convert(ms) {
	var minutes = Math.floor(ms / 60000)
	var seconds = ((ms % 60000) / 1000).toFixed(0)
	return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

async function down (url) {
	const BASEURL = "https://api.fabdl.com";
	const headers = {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
		"User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
	};

	try {
		const {
			data: info
		} = await axios.get(`${BASEURL}/spotify/get?url=${url}`, {
			headers
		});
		const {
			gid,
			id,
			name,
			image,
			duration_ms
		} = info.result;

		const {
			data: download
		} = await axios.get(`${BASEURL}/spotify/mp3-convert-task/${gid}/${id}`, {
			headers
		});
		if (download.result.download_url) {
			return `${BASEURL}${download.result.download_url}`
		}
	} catch (error) {
		console.error("Error downloading Spotify track:", error.message);
		throw new Error(error.message);
	}
};

async function spotifyCreds() {
	return new Promise(async resolve => {
		try {
			const json = await (await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
				headers: {
					Authorization: 'Basic ' + Buffer.from('4c4fc8c3496243cbba99b39826e2841f' + ':' + 'd598f89aba0946e2b85fb8aefa9ae4c8').toString('base64')
				}
			})).data
			if (!json.access_token) return resolve({
				status: false,
				msg: 'Can\'t generate token!'
			})
			resolve({
				status: true,
				data: json
			})
		} catch (e) {
			resolve({
				status: false,
				msg: e.message
			})
		}
	})
}

async function play(query) {
	return new Promise(async resolve => {
		try {

			const creds = await spotifyCreds()
			if (!creds.status) return resolve(creds)
			const json = await (await axios.get('https://api.spotify.com/v1/search?query=' + query + '&type=track&offset=0&limit=1', {
				headers: {
					Authorization: 'Bearer ' + creds.data.access_token
				}
			})).data
			if (!json.tracks.items || json.tracks.items.length < 1) return resolve({
				status: false,
				msg: 'Music not found!'
			})
			let metadata = {}
			let v = json.tracks.items[0]
			let url = await down(v.external_urls.spotify)
			metadata = {
				title: v.album.artists[0].name + ' - ' + v.name,
				artist: v.album.artists[0].name,
				name: v.name,
				duration: convert(v.duration_ms),
				popularity: v.popularity + '%',
				preview: v.preview_url || 'No preview audio Avaible',
				thumbnail: v.album.images[0].url,
				url: v.external_urls.spotify,
			}
			resolve({
				status: true,
				metadata,
				audio: { url }
			})
		} catch (e) {
			resolve({
				status: false,
				msg: e.message
			})
		}
	})
}

const kont = await play(text)
console.log(kont)
zanspiw.sendMessage(m.chat, {image: {url: kont.metadata.thumbnail}, caption: `
Title: ${kont.metadata.title}
Artist: ${kont.metadata.artist}
Name: ${kont.metadata.name}
Preview Url: ${kont.metadata.preview}
Popularity: ${kont.metadata.popularity}
Url: ${kont.metadata.url}
`}, {quoted: null})

await zanspiw.sendMessage(m.chat, {
                    audio: { url: kont.audio.url },
                    mimetype: 'audio/mpeg',
                    fileName: `${kont.metadata.title}.mp3`
                }, { quoted: m });
}
break
case "turml": case "tournamentml": case "getturml": case "infoturney": {
  async function latestTourMobileLegends() {
    try {
        const { data } = await axios.get('https://infotourney.com/tournament/mobile-legends');
        const $ = cheerio.load(data);
        const tournaments = [];

        $('.items-row .item').each((index, element) => {
            const title = $(element).find('h2 a').text();
            const url = "https://infotourney.com" + $(element).find('h2 a').attr('href');
            const image = "https://infotourney.com" + $(element).find('img').attr('src');
            const startDate = $(element).find('.published time').attr('datetime');
            const startDateText = $(element).find('.published').text().trim();
            const registrationEndDateText = $(element).find('p').last().text().trim();
            const description = $(element).find('p').eq(1).text().trim();
            
            const tags = [];
            $(element).find('.tags a').each((i, tagElement) => {
                tags.push($(tagElement).text());
            });

            tournaments.push({
                title,
                url,
                image,
                startDate,
                startDateText,
                registrationEndDateText,
                description,
                tags
            });
        });

        return tournaments
    } catch (error) {
        return error.message;
    }
}
    const tournaments = await latestTourMobileLegends();

    if (typeof tournaments === "string") {
        return m.reply(tournaments);
    }

    if (tournaments.length === 0) {
        return m.reply("Tidak ada turnamen untuk saat ini")
    }

    const messages = tournaments.map((tournament, index) => {
        return `   ◦ Title : ${tournament.title}\n` +
            `   ◦ Link : ${tournament.url}\n` +
            `   ◦ Start date : ${tournament.startDateText}\n` +
            `   ◦ Description : ${tournament.description}\n`;
    }).join("\n\n");

    m.reply("*乂 M L B B - T O U R N A M E N T*\n\n" + messages)
}
break
case "worldtime": case "waktuglobal": case "waktudunia": {
  async function waktu() {
    const Abella = 'https://onlinealarmkur.com/world/id/';
    try {
        const { data } = await axios.get(Abella);
        const $ = cheerio.load(data);
        let hasil = [];
        
        $('.flex.items-center.space-x-3').each((index, element) => {
            const bndera = $(element).find('.avatar .text-2xl').text().trim();
            const kota = $(element).find('.city-name').text().trim();
            const Zona = $(element).find('.city-time').attr('data-tz');
            
            if (Zona) {
                const Yatta = {
    'Sun': 'Min',
    'Mon': 'Sen',
    'Tue': 'Sel',
    'Wed': 'Rab',
    'Thu': 'Kam',
    'Fri': 'Jum',
    'Sat': 'Sab'
};

const realTime = moment().tz(Zona).format('ddd - HH:mm').replace(/Sun|Mon|Tue|Wed|Thu|Fri|Sat/g, match => Yatta[match]);
                hasil.push({ bndera, kota, waktu: realTime });
            }
        });
        
        return hasil;
    } catch (error) {
        console.error("Error :", error);
        return [];
    }
}

    try {
        const Abcd = await waktu();
        let pesan = "*🌍 World Time Information*\n\n";

        const Bell = Abcd.sort((a, b) => {
            const zonaA = moment.tz(a.kota, 'UTC').utcOffset();
            const zonaB = moment.tz(b.kota, 'UTC').utcOffset();
            return zonaA - zonaB;
        });

        Bell.forEach(kota => {
            pesan += `${kota.bndera} *${kota.kota}*: ${kota.waktu}\n`;
        });

        await m.reply(pesan);
    } catch (error) {
        console.error("Kesalahan dalam mengambil waktu dunia:", error);
        await m.reply("Maaf, tidak dapat mengambil informasi waktu saat ini.");
    }
};
break
case 'quotesanime':
case 'quotesanim': 
    if (db.data.users[m.sender].limit <1) return reply("Limit Kamu Telah Habis Silahkan bermain game Atau claim limit dengan .claimlimit")
  case 'qanime': {
 let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
 if (!res.ok) return await res.text()
 let json = await res.json()
 if(!json.result[0]) return json
 let { english, character, anime } = json.result[0]
 reply(`${english}\n\n📮By: _${character}_ \nAnime:\n${anime}`)
}
break
//=========================================\\======

case 'quotesbacot': case 'qbacot': {
    if (db.data.users[m.sender].limit <1) return reply("Limit Kamu Telah Habis Silahkan bermain game Atau claim limit dengan .claimlimit")
function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
 let bacotan = pickRandom(bacot)
 reply(bacotan)
}
break
//=========================================\\======

case 'quotesbucin': case 'qbucin': {
const bucin = [
 "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
 "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
 "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
 "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
 "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
 "Pacar orang adalah jodoh kita yang tertunda.",
 "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
 "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
 "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
 "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
 "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
 "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
 "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
 "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
 "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
 "Aku ingin menjadi satu-satunya, bukan salah satunya.",
 "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
 "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
 "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
 "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
 "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
 "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
 "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
 "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
 "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
 "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
 "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
 "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
 "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
 "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
 "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
 "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
 "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
 "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
 "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
 "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
 "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
 "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
 "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
 "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
 "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
 "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
 "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
 "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
 "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
 "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
 "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
 "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
 "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
 "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
 "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
 "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
 "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
 "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
 "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
 "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
 "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
 "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
 "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
 "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
 "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
 "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
 "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
 "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
 "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
 "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
 "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
 "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
 "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
 "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
 "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
 "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
 "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
 "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
 "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
 "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
 "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
 "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
 "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
 "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
 "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
 "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
 "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
 "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
 "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
 "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
 "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
 "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
 "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
 "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
 "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
 "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
 "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
 "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
 "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
 "Saben dino kegowo ngimpi tapi ora biso nduweni.",
 "Ora ketemu koe 30 dino rasane koyo sewulan.",
 "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
 "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
 "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
 "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
 "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
 "Kanyaah akang moal luntur najan make Bayclean.",
 "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
 "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
 "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
 "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
 "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
 "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
 "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
 "Cukup jaringan aja yang hilang, kamu jangan.",
 "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
 "Musuhku adalah mereka yang ingin memilikimu juga.",
 "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
 "Jam tidurku hancur dirusak rindu.",
 "Cukup China aja yang jauh, cinta kita jangan.",
 "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
 "Cuma satu keinginanku, dicintai olehmu..",
 "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
 "Cukup antartika aja yang jauh. Antarkita jangan."
]
const zanspiwtruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${zanspiwtruth}`)
}
break
case 'vietnam':
			case 'korea':
			case 'indonesian':
			case 'japan':
			case 'thailand':
			case 'china': {
			
				await zanspiw.sendMessage(m.chat, {
					react: {
						text: "🔄",
						key: m.key,
					}
				})
				try {
					let cecan = await fetchJson(`https://www.vreden.my.id/cdn/cecan/${command}.json`)
					const dl_url = await pickRandom(cecan)
					zanspiw.sendMessage(m.chat, {
						image: {
							url: dl_url
						},
						caption: `🌊 Cewek ${command}`
					}, {
						quoted: m
					})
				} catch (error) {
				reply('Sedang error kak mohon maap🌷');
				}
			}
			break
			case 'tourl': case "uploadimage": case "upload": {
		async function uploadImg(buffer, filename) {
    const result = await require("al-form-data").upload({
        type: 'chunk',  
        file: buffer,
        fileName: filename,
        url: 'https://cdn.alands.xyz/upload',
        chunkSize: 1 * 1024 * 1024, 
        onProgress: (progress) => {
            console.log(`Progress: ${progress}%`);
        }
    });
    if (!result) {
        throw new Error('Upload failed');
    }

    return `https://cdn.alands.xyz/files/${result.fileId}?&filename=${filename}`;
}

zanspiw.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
    let ms = m.quoted ? m.quoted : m
   if (!mime) return m.reply('No media found reply or send file')
   if (mime.includes("image") || mime.includes("video")) {
  let media = await ms.download()
  let filename = Date.now() + "." + mime.split("/")[1]
  let url = await uploadImg(mime.includes("video")? Buffer.from(media) : media, filename)
  m.reply(`*File berhasil terupload*
  *filename: ${filename}*
  *url: ${url}*
  *expired: no expired*`)
   } else {
     reply("only image/video")
   }
  } catch (e) {
    m.reply(" error" + e.message)
  }
}
break
case "fiturlain": case "otherfeatures": case "fitur": {
  let t = `${prefix}command
command:
speedtest
ping 
konversimatauang
whois
shortlink
jokes
faktaunik
translate 
cuaca 
kalori 
cekbmi
playsp
text2pdf
animebrat
animebrat2
music1-music65
ffstalk
encoded 
decoded
turml
worldtime
qanime 
qbacot
qbucin
cecan:
china
vietnam
indonesian
korea 
japan
thailand
tourl 
kalkulator
clearsesi
${suppVoice.join("\n")}`
reply(t)
}
break
case 'tovn': {
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`reply video/vn dengan caption ${prefix + command}`)
if (!quoted) return reply(`reply video/vn dengan caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
zanspiw.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
}
break


case 'delsesi':
case 'clear':
case 'ds':
case 'cs':
case 'clearsesi':
case 'clearsession':{
if (!Access) return reply(mess.owner)
fs.readdir("./sessions", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("sessions-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./sessions/${file}`)
});
reply(`Berhasil Menghapus ${filteredArray.length} file sampah...`)
});
if (args[0] === "backup") {

reply("Proses Backup")

const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await zanspiw.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "Yuhaomd.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
}
break
case "kalkulator": case "calculator": case "calcu": {
    if (!text) return m.reply("Contoh penggunaan:\n.kalkulator 1 tambah 1\nSupport: tambah, kali, bagi");

    const operators = {
        "tambah": "+",
        "kali": "*",
        "bagi": "/"
    };

    const regex = /(\d+)\s*(tambah|kali|bagi)\s*(\d+)/;
    const match = text.match(regex);

    if (!match) return m.reply("Format salah! Contoh: .kalkulator 5 kali 3");

    const num1 = parseFloat(match[1]);
    const operator = operators[match[2]];
    const num2 = parseFloat(match[3]);

    if (!operator) return m.reply("Operator tidak dikenali!");

    try {
        const result = eval(`${num1} ${operator} ${num2}`);
        m.reply(`Hasil ${match[2]} ${num1} dan ${num2} adalah: ${result}`);
    } catch (error) {
        m.reply("Terjadi kesalahan dalam perhitungan.");
    }
}
break;
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'cekganteng':
case 'cekcantik':
case 'cekkaya':
case 'lesbicek':
case 'ceklesbi': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var sangek = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
var sange = sangek[Math.floor(Math.random() * sangek.length)]
m.reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case "text2pdf": case "txtpdf": {
const PDFDocument = require("pdfkit")
async function sendPdf(text, zanspiw, m) {
    const doc = new PDFDocument();
    const buffer = [];
    
    doc.on('data', (chunk) => {
        buffer.push(chunk);
    });
    
    doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffer);
        zanspiw.sendMessage(m.chat, {
            document: pdfBuffer,
            mimetype: "application/pdf",
            fileName: "txt2pdf-" + (Math.floor(Math.random() * 10000)) + ".pdf",
        }, { quoted: m });
    });
    
    doc.fontSize(15).text(text, 100, 100);
    doc.end();
}
    if (!text) return m.reply("masukan teks!");
    sendPdf(text, zanspiw, m);
}
break
case "ownermenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(OWNERMENU)*
││❀${prefix}clearsession
││❀${prefix}delsesi
││❀${prefix}speedtest
││❀${prefix}shortlink
││❀${prefix}text2pdf
││❀${prefix}txtpdf
││❀${prefix}kick
││❀${prefix}setbotbio
││❀${prefix}setbotname
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
   case "groupmenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(GROUPMENU)*
││❀${prefix}kick
││❀${prefix}setdesk
││❀${prefix}setnamegc
││❀${prefix}setbotbio
││❀${prefix}setbotname
││❀${prefix}text-left
││❀${prefix}text-welcome
││❀${prefix}addlist
││❀${prefix}getlist
││❀${prefix}dell-list
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
case "islammenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(ISLAMMENU)*
││❀${prefix}Niatsholat
││❀${prefix}bacaansholat
││❀${prefix}ayatkursi
││❀${prefix}asmaulhusna
││❀${prefix}kisahnabi
││❀${prefix}jadwalsholat
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            case "info":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ *Limit kamu* ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            
            case "downloadmenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(DOWNLOADMENU)*
││❀${prefix}tiktok
││❀${prefix}ytmp3
││❀${prefix}ytmp4
││❀${prefix}playsp
││❀${prefix}mediafire
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            
            case "subdomenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(SUBDOMENU)*
││○⊱d1 kedai-panel.my.id
││○⊱d2 piwzstoreee.my.id
││○⊱d3 piwzpediaaa.biz.id
││○⊱d4 piwzpanel.me
││○⊱d5 r0ulxye4.my.id
││○⊱d6 lanzpanel.my.id
││○⊱d7 cpanel-vip.my.id (khusus cpanel)
││○⊱d8 kukurahost.my.id
││○⊱d9 tokopanellku.my.id
││○⊱d10 kiospanell.my.id
││○⊱d11 moon-offc.my.id
││○⊱d12 moon-ooffc.biz.id
││○⊱d13 tokopanellmurah.my.id
││○⊱d14 bisnispanel.my.id
││○⊱d15 tokopanel.biz.id
││○⊱d16 store-panel.biz.id
││○⊱d17 sellerpanel.biz.id
││○⊱d18 mypanel.my.id
││○⊱d19 kangpanel.biz.id
││○⊱d20 jasapanel.my.id
││○⊱d21 dewapanel.my.id
││○⊱d22 adminpanel.biz.id
││○⊱d23 plerkuda.my.id
││○⊱d24 cafegt.my.id
││○⊱d25 shopwebsite.my.id
││○⊱d26 sellerpanel-vvip.my.id
││○⊱d27 ekioffcial.biz.id
││○⊱d28 panelku-jasteb.my.id
││○⊱d29 pannel-pvrt.my.id
││○⊱d30 sellerpanell.my.id
││○⊱d31 pannelkuu.biz.id
││○⊱d32 server-smtp1.my.id
││○⊱d33 my-website.my.id
││○⊱d34 smtp1.my.id
││○⊱d35 mefahri.biz.id 
││○⊱d36 mefahri.biz.id 
││○⊱d37 didindev.my.id
││○⊱d38 ruztanxd.my.id
││○⊱d39 sellerpanell-store.xyz
││○⊱d40 rafeyfah.my.id
││○⊱d41 kayy.me
││○⊱d42 kayyoffc.tech
││○⊱d43 kayypedia.com
││○⊱d44 panellstoree.com
││○⊱d45 windastore.live
││○⊱d46 zanofc.biz.id
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
   
            case "gamemenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(GAMEMENU)*
││❀${prefix}tebakgambar
││❀${prefix}tebakbendera
││❀${prefix}susunkata
││❀${prefix}tebakkimia
││❀${prefix}tebgar
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            case "rpgmenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(RPGMENU)*
││❀${prefix}dungeon
││❀${prefix}dungeon-create-profile
││❀${prefix}dungeon-masuk
││❀${prefix}dungeon-cari-item
││❀${prefix}dungeon-attack
││❀${prefix}dungeon-defense
││❀${prefix}dungeon-inventory
││❀${prefix}dungeon-lobby
││❀${prefix}dungeon-save-item
││❀${prefix}dungeon-run
││❀${prefix}dungeon-sell
││❀${prefix}dungeon-use
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
case "librarymenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(LIBRARYMENU)*
││❀ ${prefix}cerpen-anak 
││❀ ${prefix}cerpen-bahasadaerah 
││❀ ${prefix}cerpen-bahasainggris 
││❀ ${prefix}cerpen-bahasajawa 
││❀ ${prefix}cerpen-bahasasunda
││❀ ${prefix}cerpen-budaya 
││❀ ${prefix}cerpen-cinta 
││❀ ${prefix}cerpen-cintaislami 
││❀ ${prefix}cerpen-cintapertama 
││❀ ${prefix}cerpen-cintaromantis 
││❀ ${prefix}cerpen-cintasedih 
││❀ ${prefix}cerpen-cintasegitiga 
││❀ ${prefix}cerpen-cintasejati 
││❀ ${prefix}cerpen-galau 
││❀ ${prefix}cerpen-gokil 
││❀ ${prefix}cerpen-inspiratif 
││❀ ${prefix}cerpen-jepang 
││❀ ${prefix}cerpen-kehidupan
││❀ ${prefix}cerpen-keluarga 
││❀ ${prefix}cerpen-kisahnyata 
││❀ ${prefix}cerpen-korea 
││❀ ${prefix}cerpen-kristen 
││❀ ${prefix}cerpen-liburan 
││❀ ${prefix}cerpen-malaysia 
││❀ ${prefix}cerpen-mengharukan 
││❀ ${prefix}cerpen-misteri 
││❀ ${prefix}cerpen-motivasi 
││❀ ${prefix}cerpen-nasihat 
││❀ ${prefix}cerpen-nasionalisme 
││❀ ${prefix}cerpen-olahraga 
││❀ ${prefix}cerpen-patahhati
││❀ ${prefix}cerpen-penantian 
││❀ ${prefix}cerpen-pendidikan 
││❀ ${prefix}cerpen-pengalaman 
││❀ ${prefix}cerpen-pengorbanan 
││❀ ${prefix}cerpen-penyesalan 
││❀ ${prefix}cerpen-perjuangan 
││❀ ${prefix}cerpen-perpisahan 
││❀ ${prefix}cerpen-persahabatan 
││❀ ${prefix}cerpen-petualangan 
││❀ ${prefix}cerpen-ramadhan 
││❀ ${prefix}cerpen-remaja 
││❀ ${prefix}cerpen-rindu 
││❀ ${prefix}cerpen-rohani 
││❀ ${prefix}cerpen-romantis 
││❀ ${prefix}cerpen-sastra 
││❀ ${prefix}cerpen-sedih 
││❀ ${prefix}cerpen-sejarah 
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            case "bluearchivemenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(BERITAMENU)*
││❀${prefix}airi
││❀${prefix}akane
││❀${prefix}akari
││❀${prefix}ako
││❀${prefix}aris
││❀${prefix}arona
││❀${prefix}aru
││❀${prefix}asuna
││❀${prefix}atsuko
││❀${prefix}ayane
││❀${prefix}azusa
││❀${prefix}cherino
││❀${prefix}chihiro
││❀${prefix}chinatsu
││❀${prefix}chise
││❀${prefix}eimi
││❀${prefix}erica
││❀${prefix}fubuki
││❀${prefix}fuuka
││❀${prefix}hanae
││❀${prefix}hanako
││❀${prefix}hare
││❀${prefix}haruka
││❀${prefix}haruna
││❀${prefix}hasumi
││❀${prefix}hibiki
││❀${prefix}hihumi
││❀${prefix}himari
││❀${prefix}hina
││❀${prefix}hinata
││❀${prefix}hiyori
││❀${prefix}hoshino
││❀${prefix}iori
││❀${prefix}iroha
││❀${prefix}izumi
││❀${prefix}izuna
││❀${prefix}juri
││❀${prefix}kaede
││❀${prefix}karin
││❀${prefix}kayoko
││❀${prefix}kazusa
││❀${prefix}kirino
││❀${prefix}koharu
││❀${prefix}kokona
││❀${prefix}kotama
││❀${prefix}kotori
││❀${prefix}main
││❀${prefix}maki
││❀${prefix}mari
││❀${prefix}marina
││❀${prefix}mashiro
││❀${prefix}michiru
││❀${prefix}midori
││❀${prefix}miku
││❀${prefix}mimori
││❀${prefix}misaki
││❀${prefix}miyako
││❀${prefix}miyu
││❀${prefix}moe
││❀${prefix}momoi
││❀${prefix}momoka
││❀${prefix}mutsuki
││❀${prefix}np0013
││❀${prefix}natsu
││❀${prefix}neru
││❀${prefix}noa
││❀${prefix}nodoka
││❀${prefix}nonomi
││❀${prefix}pina
││❀${prefix}rin
││❀${prefix}saki
││❀${prefix}saori
││❀${prefix}saya
││❀${prefix}sena
││❀${prefix}serika
││❀${prefix}serina
││❀${prefix}shigure
││❀${prefix}shimiko
││❀${prefix}shiroko
││❀${prefix}shizuko
││❀${prefix}shun
││❀${prefix}shunbaby
││❀${prefix}sora
││❀${prefix}sumire
││❀${prefix}suzumi
││❀${prefix}tomoe
││❀${prefix}tsubaki
││❀${prefix}tsurugi
││❀${prefix}ui
││❀${prefix}utaha
││❀${prefix}wakamo
││❀${prefix}yoshimi
││❀${prefix}yuuka
││❀${prefix}yuzu
││❀${prefix}zunko
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            case "ephotomenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(EPHOTOMENU)*
┌└─────────────┈ 
││❀${prefix} glitchtext
││❀${prefix} writetext
││❀${prefix} advancedglow
││❀${prefix} typographytext	
││❀${prefix} pixelglitch
││❀${prefix} neonglitch
││❀${prefix} flagtext
││❀${prefix} flag3dtext
││❀${prefix} deletingtext
││❀${prefix} blackpinkstyle
││❀${prefix} glowingtext
││❀${prefix} underwatertext
││❀${prefix} logomaker
││❀${prefix} cartoonstyle
││❀${prefix} papercutstyle
││❀${prefix} watercolortext
││❀${prefix} effectclouds
││❀${prefix} blackpinklogo
││❀${prefix} gradienttext
││❀${prefix} summerbeach
││❀${prefix} luxurygold
││❀${prefix} multicoloredneon
││❀${prefix} sandsummer
││❀${prefix} galaxywallpaper
││❀${prefix} 1917style
││❀${prefix} makingneon
││❀${prefix} royaltext
││❀${prefix} freecreate	
││❀${prefix} galaxystyle	
││❀${prefix} lighteffects
└─────────────────┈ `
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
        case "coganmenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(COGANMENU)*
││❀${prefix}jungkook
││❀${prefix}jimin
││❀${prefix}jhope
││❀${prefix}huangzitao
││❀${prefix}dohyungsoo
││❀${prefix}baekhyungsoo
││❀${prefix}kimjondae
││❀${prefix}kimjong
││❀${prefix}kimjunmyeon
││❀${prefix}kimminseok
││❀${prefix}kimnajoon
││❀${prefix}kimsoek
││❀${prefix}kimtaehyung
││❀${prefix}luhan
││❀${prefix}ohsehun
││❀${prefix}parkchanyeol
││❀${prefix}suga
││❀${prefix}wufiyan
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            
            case "bluearchivemenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(BLUEARCHIVE)*
││❀${prefix}airi
││❀${prefix}akane
││❀${prefix}akari
││❀${prefix}ako
││❀${prefix}aris
││❀${prefix}arona
││❀${prefix}aru
││❀${prefix}asuna
││❀${prefix}atsuko
││❀${prefix}ayane
││❀${prefix}azusa
││❀${prefix}cherino
││❀${prefix}chihiro
││❀${prefix}chinatsu
││❀${prefix}chise
││❀${prefix}eimi
││❀${prefix}erica
││❀${prefix}fubuki
││❀${prefix}fuuka
││❀${prefix}hanae
││❀${prefix}hanako
││❀${prefix}hare
││❀${prefix}haruka
││❀${prefix}haruna
││❀${prefix}hasumi
││❀${prefix}hibiki
││❀${prefix}hihumi
││❀${prefix}himari
││❀${prefix}hina
││❀${prefix}hinata
││❀${prefix}hiyori
││❀${prefix}hoshino
││❀${prefix}iori
││❀${prefix}iroha
││❀${prefix}izumi
││❀${prefix}izuna
││❀${prefix}juri
││❀${prefix}kaede
││❀${prefix}karin
││❀${prefix}kayoko
││❀${prefix}kazusa
││❀${prefix}kirino
││❀${prefix}koharu
││❀${prefix}kokona
││❀${prefix}kotama
││❀${prefix}kotori
││❀${prefix}main
││❀${prefix}maki
││❀${prefix}mari
││❀${prefix}marina
││❀${prefix}mashiro
││❀${prefix}michiru
││❀${prefix}midori
││❀${prefix}miku
││❀${prefix}mimori
││❀${prefix}misaki
││❀${prefix}miyako
││❀${prefix}miyu
││❀${prefix}moe
││❀${prefix}momoi
││❀${prefix}momoka
││❀${prefix}mutsuki
││❀${prefix}np0013
││❀${prefix}natsu
││❀${prefix}neru
││❀${prefix}noa
││❀${prefix}nodoka
││❀${prefix}nonomi
││❀${prefix}pina
││❀${prefix}rin
││❀${prefix}saki
││❀${prefix}saori
││❀${prefix}saya
││❀${prefix}sena
││❀${prefix}serika
││❀${prefix}serina
││❀${prefix}shigure
││❀${prefix}shimiko
││❀${prefix}shiroko
││❀${prefix}shizuko
││❀${prefix}shun
││❀${prefix}shunbaby
││❀${prefix}sora
││❀${prefix}sumire
││❀${prefix}suzumi
││❀${prefix}tomoe
││❀${prefix}tsubaki
││❀${prefix}tsurugi
││❀${prefix}ui
││❀${prefix}utaha
││❀${prefix}wakamo
││❀${prefix}yoshimi
││❀${prefix}yuuka
││❀${prefix}yuzu
││❀${prefix}zunko
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            case "stalkmenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(STALKMENU)*
││││❀${prefix}ffstalk
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
case "panelmenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(PANELMENU)*
││❀${prefix}1gb
││❀${prefix}2gb
││❀${prefix}3gb
││❀${prefix}4gb
││❀${prefix}5gb
││❀${prefix}6gb
││❀${prefix}7gb
││❀${prefix}8gb
││❀${prefix}9gb
││❀${prefix}10gb
││❀${prefix}unli
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;            

case "ffstalk": case "freefirestalk": case "epepstalk": {
    if (!text) return m.reply('Masukkan ID Free Fire!')
    if (db.data.users[m.sender].limit <1) return reply("Limit Kamu Telah Habis Silahkan bermain game Atau claim limit dengan .claimlimit")    
    m.reply('Searching...')
    
    try {
        const result = await ffStalk(text)
        
        let equippedItemsText = ''
        if (result.equippedItems && result.equippedItems.length > 0) {
            equippedItemsText = result.equippedItems.map(item => `• ${item.name}`).join('\n')
        } else {
            equippedItemsText = 'Tidak ada item'
        }
        
        let caption = `
*「 FREE FIRE STALK 」*

*👤 Profile Info*
• Name: ${result.name}
• Bio: ${result.bio}
• Like: ${result.like}
• Level: ${result.level}
• EXP: ${result.exp}
• Region: (${result.region}
• Honor Score: ${result.honorScore}
• BR Rank: ${result.brRank}
• BR Rank Point: ${result.brRankPoint}
• CS Rank Point: ${result.csRankPoint}
• Account Created: ${result.accountCreated}
• Last Login: ${result.lastLogin}
• Prefer Mode: ${result.preferMode}
• Language: ${result.language}

*🎖️ Booyah Pass*
• Premium: ${result.booyahPassPremium}
• Level: ${result.booyahPassLevel}

*🐾 Pet Information*
• Name: ${result.petInformation.name}
• Level: ${result.petInformation.level}
• EXP: ${result.petInformation.exp}
• Star Marked: ${result.petInformation.starMarked}
• Selected: ${result.petInformation.selected}

*🎮 Equipped Items*
${equippedItemsText}
`.trim()
        
        await zanspiwsendMessage(m.chat, { text: caption }, { quoted: m })
    } catch (error) {
        console.error(error)
        m.reply('Terjadi kesalahan saat mencari ID tersebut. Pastikan ID yang dimasukkan benar.')
    }
}
break
    case "airi": case "akane": case "akari":case "ako": case "aris": case "arona": case "aru": case "asuna": case "atsuko": case "ayane": case "azusa": case "cherino": case "chihiro": case "chinatsu": case "chise": case "eimi": case "erica": case "fubuki": case "fuuka": case "hanae": case "hanako": case "hare": case "haruka": case "haruna": case "hasumi": case "hibiki": case "hihumi": case "himari": case "hina": case "hinata": case "hiyori": case "hoshino": case "iori": case "iroha": case "izumi": case "izuna": case "juri": case "kaede": case "karin": case "kayoko": case "kazusa": case "kirino": case "koharu": case "kokona": case "kotama": case "kotori": case "main": case "maki": case "mari": case "marina": case "mashiro": case "michiru": case "midori": case "miku": case "mimori": case "misaki": case "miyako": case "miyu": case "moe": case "momoi": case "momoka": case "mutsuki": case "np0013": case "natsu": case "neru": case "noa": case "nodoka": case "nonomi": case "pina": case "rin": case "saki": case "saori": case "saya": case "sena": case "serika": case "serina": case "shigure": case "shimiko": case "shiroko": case "shizuko": case "shun": case "shunbaby": case "sora": case "sumire": case "suzumi": case "tomoe": case "tsubaki": case "tsurugi": case "ui": case "utaha": case "wakamo": case "yoshimi": case "yuuka": case "yuzu": case "zunko": {
        try {
            if (!text) return reply(`> Example: ${command} text`);
            let teks = text.trim()
            let charr = command.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
            m.reply("Wait");
            const pedo = new BlueArchive();
            const translated = await translate(teks, { to: 'ja', autoCorrect: false }); 
            const ba = await pedo.voice(translated[0], charr, 1); 
            zanspiw.sendMessage(m.chat, { audio: { url: ba.result.url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });

        } catch (err) {
          reply("error " + err)
            reply('> Yahh, error\n', + err.message);
        }
        }
        break;
        case "encoded": case "decoded": {
          async function encoded(text) {
   let d = new FormData();
   d.append("input", text);
   d.append("charset", "UTF-8");
   d.append("separator", "lf");
   d.append("newlines", "on");
   let headers = {
      ...d.getHeaders()
   }
   let { data } = await axios.post("https://www.base64encode.org/", d, { headers });
   let $ = cheerio.load(data)
   return {
     result: $("#output").text().trim()
   }
}

async function decoded(text) {
   let d = new FormData();
   d.append("input", text);
   d.append("charset", "UTF-8");
   let headers = {
      ...d.getHeaders()
   }
   let { data } = await axios.post("https://www.base64decode.org/", d, { headers });
   let $ = cheerio.load(data)
   return {
     result: $("#output").text().trim()
   }
}
    if (command === 'encoded') {
        if (!args[0]) return m.reply('Mana text yang mau diubah ke base64?')
        try {
            m.reply('Tunggu bentar...')
            const result = await encoded(args.join(' '))
            m.reply(`*Base64 Encode*\n\n▢ *Original:* ${args.join(' ')}\n\n▢ *Hasil:* ${result.result}`)
        } catch (error) {
            console.error(error)
            m.reply('Waduh error nih, coba lagi ya!')
        }
    } else if (command === 'decoded') {
        if (!args[0]) return m.reply('Mana text base64 yang mau didecode?')
        try {
            m.reply('Tunggu bentar...')
            const result = await decoded(args.join(' '))
            m.reply(`*Base64 Decode*\n\n▢ *Base64:* ${args.join(' ')}\n\n▢ *Hasil:* ${result.result}`)
        } catch (error) {
            console.error(error)
            m.reply('Kayaknya text yang kamu kasih bukan base64 deh, atau ada error. Coba cek lagi ya!')
        }
    }
}
break
        //COGAN COMMAND
	//▢━━━━━━━━━━━━━━「 COGAN COMMAND 」━━━━━━━━━━━━━━▢
			case 'wuyifan':
			case 'suga':
			case 'parkchanyeol':
			case 'ohsehun':
			case 'luhan':
			case 'kimtaehyung':
			case 'kimsoek':
			case 'kimnanjoon':
			case 'kimminseok':
			case 'kimjunmyeon':
			case 'kimjong':
			case 'kimjondae':
			case 'jungkook':
			case 'jimin':
			case 'jhope':
			case 'huangzitao':
			case 'dohkyungsoo':
			case 'baekhyung': {
			
				await zanspiw.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
let cogan = await (await fetch(`https://api.zeeoneofc.my.id/api/cogan/${command}?apikey=vzoah9ZSeCWDXSb`)).buffer()
					await zanspiw.sendMessage(m.chat, {
						image: cogan,
						caption: 'Nih Kak Cowok Gantengnya 😋'
					}, {
						quoted: m
					})
				} catch (error) {
					reply(` Error kak `);
				}
			}
			break
		
		
case 'animebrat': {
    if (!text) return reply('Masukkan teks untuk stiker.');
    if (db.data.users[m.sender].limit <1) return reply("Limit Kamu Telah Habis Silahkan bermain game Atau claim limit dengan .claim")
db.data.users[m.sender].limit -= 1
    try {
        zanspiw.sendMessage(m.chat, { react: { text: '🔄', key: m.key } });

        let imageUrl = 'https://cloudkuimages.com/uploads/images/67ddbbcb065a6.jpg';
        let fontUrl = 'https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf';
        let imagePath = path.join(__dirname, 'tmp', 'file.jpg');
        let outputPath = path.join(__dirname, 'tmp', 'file.webp');
        let fontPath = path.join(__dirname, 'tmp', 'NotoColorEmoji.ttf');

        if (!fs.existsSync(fontPath)) {
            let fontData = await axios.get(fontUrl, { responseType: 'arraybuffer' });
            fs.writeFileSync(fontPath, Buffer.from(fontData.data));
        }

        let response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(imagePath, Buffer.from(response.data));

        let baseImage = await loadImage(imagePath);
        let canvas = createCanvas(baseImage.width, baseImage.height);
        let ctx = canvas.getContext('2d');

        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

        require('canvas').registerFont(fontPath, { family: 'EmojiFont' });

        let boardX = canvas.width * 0.22;
        let boardY = canvas.height * 0.50;
        let boardWidth = canvas.width * 0.56;
        let boardHeight = canvas.height * 0.25;

        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        let maxFontSize = 32;
        let minFontSize = 12;
        let fontSize = maxFontSize;

        function isTextFit(text, fontSize) {
            ctx.font = `bold ${fontSize}px EmojiFont`;
            let words = text.split(' ');
            let lineHeight = fontSize * 1.2;
            let maxWidth = boardWidth * 0.9;
            let lines = [];
            let currentLine = words[0];

            for (let i = 1; i < words.length; i++) {
                let testLine = currentLine + ' ' + words[i];
                let testWidth = ctx.measureText(testLine).width;
                if (testWidth > maxWidth) {
                    lines.push(currentLine);
                    currentLine = words[i];
                } else {
                    currentLine = testLine;
                }
            }
            lines.push(currentLine);
            let textHeight = lines.length * lineHeight;
            return textHeight <= boardHeight * 0.9;
        }

        while (!isTextFit(text, fontSize) && fontSize > minFontSize) {
            fontSize -= 2;
        }

        ctx.font = `bold ${fontSize}px EmojiFont`;

        let words = text.split(' ');
        let lineHeight = fontSize * 1.2;
        let maxWidth = boardWidth * 0.9;
        let lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            let testLine = currentLine + ' ' + words[i];
            let testWidth = ctx.measureText(testLine).width;
            if (testWidth > maxWidth) {
                lines.push(currentLine);
                currentLine = words[i];
            } else {
                currentLine = testLine;
            }
        }
        lines.push(currentLine);
        let startY = boardY + boardHeight / 2 - (lines.length - 1) * lineHeight / 2;
        lines.forEach((line, i) => {
            ctx.fillText(line, boardX + boardWidth / 2, startY + i * lineHeight);
        });

        let buffer = canvas.toBuffer('image/jpeg');
        fs.writeFileSync(imagePath, buffer);
        await sharp(imagePath).toFormat('webp').toFile(outputPath);

        await zanspiw.sendMessage(m.chat, { 
            sticker: { url: outputPath },
            packname: global.packname,
            author: global.author
        }, { quoted: m });

        zanspiw.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (e) {
        console.error(e);
        m.reply('⚠️ Terjadi kesalahan saat membuat stiker.');
    }
}
break;

case 'animebrat2': {
    if (m.quoted && m.quoted.text) {
        text = m.quoted.text || 'hai';
    } else if (!text) {
        return reply('Reply atau masukkan teks');
    }

    try {
        await zanspiw.sendMessage(m.chat, { react: { text: '🔄', key: m.key } });

        const apiUrl = `https://rest.cloudkuimages.com/api/maker/bratanime?text=${encodeURIComponent(text)}`;
        
        let stiker = await createSticker(apiUrl, global.packname || 'Sticker', global.author || 'Bot', 100);
        if (stiker) await zanspiw.sendMessage(m.chat, { sticker: stiker }, { quoted: m });

        await zanspiw.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (e) {
        console.error(e);
        reply('⚠️ Terjadi kesalahan, coba lagi nanti!');
    }
}
break;
case "menu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *1.2.0*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${global.db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${global.db.data.users[m.sender].limit}*
commands:
*「  Menu 」*
𓂀 ┌└─────────────┈ 
││❀${prefix}𝕒𝕝𝕝𝕞𝕖𝕟𝕦
││❀${prefix}𝕤𝕠𝕦𝕟𝕕𝕞𝕖𝕟𝕦
││❀${prefix}𝕒𝕟𝕚𝕞𝕖𝕞𝕖𝕟𝕦
││❀${prefix}𝕡𝕒𝕟𝕖𝕝𝕞𝕖𝕟𝕦
││❀${prefix}𝕝𝕚𝕓𝕣𝕒𝕣𝕪𝕞𝕖𝕟𝕦
││❀${prefix}𝕚𝕤𝕝𝕒𝕞𝕞𝕖𝕟𝕦
││❀${prefix}𝕣𝕒𝕟𝕕𝕠𝕞𝕞𝕖𝕟𝕦
││❀${prefix}𝔹𝕖𝕣𝕚𝕥𝕒𝕞𝕖𝕟𝕦
││❀${prefix}ℂ𝕠𝕘𝕒𝕟𝕞𝕖𝕟𝕦
││❀${prefix}𝕖𝕡𝕙𝕠𝕥𝕠𝕞𝕖𝕟𝕦
││❀${prefix}𝕓𝕝𝕦𝕖𝕒𝕣𝕔𝕙𝕚𝕧𝕖𝕞𝕖𝕟𝕦 
││❀${prefix}𝕗𝕦𝕟𝕞𝕖𝕟𝕦
││❀${prefix}𝕘𝕒𝕞𝕖𝕞𝕖𝕟𝕦 
││❀${prefix}𝕣𝕡𝕘𝕞𝕖𝕟𝕦 
││❀${prefix}𝔾𝕣𝕠𝕦𝕡𝕞𝕖𝕟𝕦 
││❀${prefix}𝕆𝕨𝕟𝕖𝕣𝕞𝕖𝕟𝕦 
││❀${prefix}𝕊𝕦𝕓𝕕𝕠𝕞𝕖𝕟𝕦 
││❀${prefix}𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕𝕞𝕖𝕟𝕦 
││❀${prefix}𝕊𝕥𝕒𝕝𝕜𝕞𝕖𝕟𝕦 
└─────────────┈ 
│❀${prefix}*.info* Untuk melihat limit kamu
└─────────────────┈ `
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "¿? Dong`Er MD",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "¿? Dong`Er MD", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC.", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            case "allmenu":{
              const data = fs.readFileSync("./start/system.js", "utf-8");
const caseMatches = data.match(/case\s+["'`]?([\w-]+)["'`]?\s*:/g);
function getCaseList() {
    if (!caseMatches) return "Tidak ada case yang ditemukan.";
    return caseMatches.map(k => `││❀${prefix}${k.replace(/case\s+["'`]?|["'`]?\s*:/g, "").trim()}`).join("\n");
}
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
*「 ALL Menu 」*
┌└─────────────┈ 
${getCaseList()}
└─────────────────┈ `
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "¿? Dong`Er MD",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "¿? Dong`Er MD", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC.", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            case "bluarchive": {
              reply(`${suppVoice.join("\n")}`)
            }
            break
            case "randommenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands: 
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(RANDOMMENU)*
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(RANDOMMENU)*
││❀${prefix}apakah
││❀${prefix}quotesanime
││❀${prefix}quotesdilan
││❀${prefix}quotesbucin
││❀${prefix}katasindiran
││❀${prefix}katahacker
││❀${prefix}katacinta
││❀${prefix}katabijak 
││❀${prefix}katailham
││❀${prefix}katasenia
││❀${prefix}faktaunik
││❀${prefix}quotesislamic
││❀${prefix}motivasi
││❀${prefix}pantun
││❀${prefix}puisi
││❀${prefix}quotes
││❀${prefix}bisakah
││❀${prefix}bagaimanakah
││❀${prefix}gantengcek
││❀${prefix}cekganteng
││❀${prefix}cantikcek
││❀${prefix}cekcantik
││❀${prefix}sangecek
││❀${prefix}ceksange
││❀${prefix}gaycek
││❀${prefix}cekgay
││❀${prefix}lesbicek
││❀${prefix}ceklesbi
││❀${prefix}kapankah
││❀${prefix}wangy
││❀${prefix}cekmati
└─────────────────┈
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "¿? Dong`Er MD",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "¿? Dong`Er MD", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
            case "beritamenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(BERITAMENU)*
││❀${prefix}fajar 
││❀${prefix}cnn
││❀${prefix}layarkaca
││❀${prefix}cnbc
││❀${prefix}tribun
││❀${prefix}indozone
││❀${prefix}kompas
││❀${prefix}detik
││❀${prefix}daily
││❀${prefix}inews
││❀${prefix}okezone
││❀${prefix}sindo
││❀${prefix}tempo
││❀${prefix}antara
││❀${prefix}kontan
││❀${prefix}merdeka
││❀${prefix}jalantikus
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "π Dong`er",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "π Dong`er", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
case "animemenu":{
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands: 
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(ANIMEMENU)*
*「 Anime Menu 」*
• ${prefix}animeawoo
• ${prefix}animemegumin
• ${prefix}animeshinobu
• ${prefix}animehandhold
• ${prefix}animehighfive
• ${prefix}animecringe
• ${prefix}animedance
• ${prefix}animehappy
• ${prefix}animeglomp
• ${prefix}animesmug
• ${prefix}animeblush
• ${prefix}animewave
• ${prefix}animesmile
• ${prefix}animepoke
• ${prefix}animewink 
• ${prefix}animebonk
• ${prefix}animebully
• ${prefix}animeyeet
• ${prefix}animebite
• ${prefix}animelick
• ${prefix}animekill
• ${prefix}animecry
• ${prefix}animewlp
• ${prefix}animekiss
• ${prefix}animehug
• ${prefix}couplepp 
• ${prefix}animeneko
• ${prefix}animepat
• ${prefix}animeslap
• ${prefix}animecuddle
• ${prefix}animewaifu
• ${prefix}animenom
• ${prefix}animefoxgirl
• ${prefix}animetickle 
• ${prefix}animegecg          
• ${prefix}dogwoof           
• ${prefix}8ballpool            
• ${prefix}goosebird 
• ${prefix}animefeed            
• ${prefix}animeavatar            
• ${prefix}lizardpic            
• ${prefix}catmeow
└─────────────────┈`
                zanspiw.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "DongEr Md",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "¿? Dong`Er MD",
                            newsletterJid: `120363308894748175@newsletter`,
                        },
                        externalAdReply: {  
                            title: "¿? Dong`Er MD", 
                            body: "This script was created by ZansPiw",
                            thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
                            sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m })
            };
            break;
                case 'tiktok':
case 'tt': 
  case 'tiktok-d':{
  
  if (!text) return reply(`Contoh: ${prefix + command} link`);
     
 await m.reply("Memuat video...")
let src = await tiktokk(args[0])
if (!src) return await m.reply("Maaf server Error")
await m.reply(`Creator: ${src.creator}
Vid title ${src.vtname}`)
await zanspiw.sendMessage(m.chat, { video: { url: src.download.nowm},
caption: "Ni video nya",
mimeType: "video/mp4",
fileName: `${src.vtname}.mp4`
}, { quoted: m})
}
break;
case '1gb': case '2gb': case '3gb': case '4gb': case '5gb': case '6gb': case '7gb': case '8gb': case '9gb': case 'unli':{
 if (!Access) return reply(mess.owner)
if (!text) return reply(`username: contoh : ikan 628xxx`)
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "unli") {
ram = "0"
disknya = "0"
cpu = "0"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
 if (args.length < 2) return m.reply("contoh .1gb ikan 62838 atau .gb ikan kirimsini")
let password = generateRandomPassword().replace(/-/g, '')
let f = await fetch(host + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
},
"body": JSON.stringify({
"email": args[0] + '@gmail.com',
"username": args[0].replace(' ', '').toLowerCase(),
"first_name": args[0].replace(' ', ''),
"last_name": "zanspiw",
"language": "en",
"password": password
})
})
let ress = await f.json();
if (ress.errors) return reply(JSON.stringify(ress.errors[0], null, 2))

let f1 = await fetch(host + "/api/application/nests/" + serverCreate.nestId + "/eggs/" + serverCreate.eggId, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key
}
})
let data = await f1.json();
let eggs = data.attributes

let f2 = await fetch(host + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + application.api_key,
},
"body": JSON.stringify({
"name": args[0],
"description": "ZanspiwXdzz",
"user": parseInt(ress.attributes.id),
"egg": parseInt(serverCreate.eggId),
"docker_image": eggs.docker_image,
"startup": eggs.startup,
"environment": serverCreate.eggs.environment,
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": serverCreate.limits.db,
"backups": serverCreate.limits.backups,
"allocations": serverCreate.limits.allocation
},
deploy: {
locations: [parseInt(1)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang;
if (!isNaN(Number(args[1]))) { 
 orang = args[1].trim() + "@s.whatsapp.net"; 
 m.reply("dikirim ke " + orang); 
} else { 
 orang = m.chat; 
}
 
var teks = `
\`Berhasil Membuat Akun Panel ✅\`

- *ID :* ${server.id}
- *Nama :* ${args[0]}
- *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
- *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
- *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
- *Username :* ${args[0]}
- *Pasword :* ${password}
- *Link :* ${global.host}
`
await m.reply(teks)
await zanspiw.sendMessage(orang, {
 text: teks, contextInfo: { 
"externalAdReply": { 
"title": `⪼ zanspiw - Dong_ErMd`,
"body": `Hallo ${pushname}`,
"sourceUrl": "https://www.youtube.com/@YTzanspiw" }}}, { quoted: m })
}
break

//========BERITAMENU=======\\
case 'fajar':
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'cnn':

CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca':

if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc':

CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'tribun':

TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'indozone':

IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'kompas':

KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'detik':

DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'daily':

DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'inews':

iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone':

OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'sindo':

SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo':

TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case 'antara':

AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "kontan":

KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "merdeka":

MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break
//=================================================//
case "jalantikus":

var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
zanspiw.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break

case 'listsurah':
			case 'listsurat': {
				
				try {
					var surah = `_*List Surah*_

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82. Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)

`
					m.reply(surah)
			} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
				}
			}
			break

case 'jadwalsholat':
if (!text) return reply(`*Contoh:* ${prefix + command} palembang`)
axios.get(`https://apisanz.my.id/search/jadwalsholat?search=${text}}`)
.then(({ data }) => {
var tet = `\`Kota = ${data.data.kota}\`\n\n`
tet += `Tanggal = ${data.data.tanggal}`
tet += `Imsak = ${data.data.jadwal.imsak}\nSubuh = ${data.data.jadwal.subuh}\nDzuhur = ${data.data.jadwal.dzuhur}\nAshar = ${data.data.jadwal.ashar}\nMagrib = ${data.data.jadwal.magrib}\nIsya = ${data.data.jadwal.Isyak}`
reply(tet)
})
.catch(console.error)
break
case 'niatsholat': {
if (!q) return m.reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
{
index: 1,
solat: "subuh",
latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 2,
solat: "maghrib",
latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 3,
solat: "dzuhur",
latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 4,
solat: "isha",
latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 5,
solat: "ashar",
latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
}
]
let text = q.toLowerCase() || ''
let data = Object.values(niatsholat).find(v => v.solat == text)
if (!data) return m.reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
m.reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
//=================================================//
case 'kisahnabi': {
if (!text) return m.reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")

let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

m.reply(`${hasil}`)

}
break
case 'ayatkursi': {
let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
reply(caption)
}
break
//=================================================//
case 'bacaansholat': {
const bacaanshalat = {
"result": [
{
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
},
{
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَاالصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
},
{
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
},
{
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
},
{
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
},
{
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
},
{
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
},
{
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
}
]
}
let bacaan = JSON.stringify(bacaanshalat)
let json = JSON.parse(bacaan)
let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
let contoh = `*「 Bacaan Shalat 」*\n\n`
m.reply(`${contoh} + ${data}`)
}
break
//=================================================//
case 'asmaulhusna': {
const contoh = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
const asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
index: 18,
latin: "Al Fattaah",
arabic: "الْفَتَّاحُ",
translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
translation_en: "The Opener, the Victory Giver"
},
{
index: 19,
latin: "Al ‘Aliim",
arabic: "اَلْعَلِيْمُ",
translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
translation_en: "The All Knowing, the Omniscient"
},
{
index: 20,
latin: "Al Qaabidh",
arabic: "الْقَابِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
translation_en: "The Restrainer, the Straightener"
},
{
index: 21,
latin: "Al Baasith",
arabic: "الْبَاسِطُ",
translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
translation_en: "The Expander, the Munificent"
},
{
index: 22,
latin: "Al Khaafidh",
arabic: "الْخَافِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
translation_en: "The Abaser"
},
{
index: 23,
latin: "Ar Raafi’",
arabic: "الرَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
translation_en: "The Exalter"
},
{
index: 24,
latin: "Al Mu’izz",
arabic: "الْمُعِزُّ",
translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
translation_en: "The Giver of Honor"
},
{
index: 25,
latin: "Al Mudzil",
arabic: "المُذِلُّ",
translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
translation_en: "The Giver of Dishonor"
},
{
index: 26,
latin: "Al Samii’",
arabic: "السَّمِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
translation_en: "The All Hearing"
},
{
index: 27,
latin: "Al Bashiir",
arabic: "الْبَصِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
translation_en: "The All Seeing"
},
{
index: 28,
latin: "Al Hakam",
arabic: "الْحَكَمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
translation_en: "The Judge, the Arbitrator"
},
{
index: 29,
latin: "Al ‘Adl",
arabic: "الْعَدْلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Utterly Just"
},
{
index: 30,
latin: "Al Lathiif",
arabic: "اللَّطِيفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
translation_en: "The Subtly Kind"
},
{
index: 31,
latin: "Al Khabiir",
arabic: "الْخَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
translation_en: "The All Aware"
},
{
index: 32,
latin: "Al Haliim",
arabic: "الْحَلِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
translation_en: "The Forbearing, the Indulgent"
},
{
index: 33,
latin: "Al ‘Azhiim",
arabic: "الْعَظِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
translation_en: "The Magnificent, the Infinite"
},
{
index: 34,
latin: "Al Ghafuur",
arabic: "الْغَفُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
translation_en: "The All Forgiving"
},
{
index: 35,
latin: "As Syakuur",
arabic: "الشَّكُورُ",
translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
translation_en: "The Grateful"
},
{
index: 36,
latin: "Al ‘Aliy",
arabic: "الْعَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Sublimely Exalted"
},
{
index: 37,
latin: "Al Kabiir",
arabic: "الْكَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
translation_en: "The Great"
},
{
index: 38,
latin: "Al Hafizh",
arabic: "الْحَفِيظُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
translation_en: "The Preserver"
},
{
index: 39,
latin: "Al Muqiit",
arabic: "المُقيِت",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
translation_en: "The Nourisher"
},
{
index: 40,
latin: "Al Hasiib",
arabic: "الْحسِيبُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
translation_en: "The Reckoner"
},
{
index: 41,
latin: "Al Jaliil",
arabic: "الْجَلِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Majestic"
},
{
index: 42,
latin: "Al Kariim",
arabic: "الْكَرِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
translation_en: "The Bountiful, the Generous"
},
{
index: 43,
latin: "Ar Raqiib",
arabic: "الرَّقِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
translation_en: "The Watchful"
},
{
index: 44,
latin: "Al Mujiib",
arabic: "الْمُجِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
translation_en: "The Responsive, the Answerer"
},
{
index: 45,
latin: "Al Waasi’",
arabic: "الْوَاسِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
translation_en: "The Vast, the All Encompassing"
},
{
index: 46,
latin: "Al Hakiim",
arabic: "الْحَكِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
translation_en: "The Wise"
},
{
index: 47,
latin: "Al Waduud",
arabic: "الْوَدُودُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
translation_en: "The Loving, the Kind One"
},
{
index: 48,
latin: "Al Majiid",
arabic: "الْمَجِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The All Glorious"
},
{
index: 49,
latin: "Al Baa’its",
arabic: "الْبَاعِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
translation_en: "The Raiser of the Dead"
},
{
index: 50,
latin: "As Syahiid",
arabic: "الشَّهِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
translation_en: "The Witness"
},
{
index: 51,
latin: "Al Haqq",
arabic: "الْحَقُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
translation_en: "The Truth, the Real"
},
{
index: 52,
latin: "Al Wakiil",
arabic: "الْوَكِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
translation_en: "The Trustee, the Dependable"
},
{
index: 53,
latin: "Al Qawiyyu",
arabic: "الْقَوِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
translation_en: "The Strong"
},
{
index: 54,
latin: "Al Matiin",
arabic: "الْمَتِينُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
translation_en: "The Firm, the Steadfast"
},
{
index: 55,
latin: "Al Waliyy",
arabic: "الْوَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
translation_en: "The Protecting Friend, Patron, and Helper"
},
{
index: 56,
latin: "Al Hamiid",
arabic: "الْحَمِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
translation_en: "The All Praiseworthy"
},
{
index: 57,
latin: "Al Mushii",
arabic: "الْمُحْصِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
translation_en: "The Accounter, the Numberer of All"
},
{
index: 58,
latin: "Al Mubdi’",
arabic: "الْمُبْدِئُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
translation_en: "The Producer, Originator, and Initiator of all"
},
{
index: 59,
latin: "Al Mu’iid",
arabic: "الْمُعِيدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
translation_en: "The Reinstater Who Brings Back All"
},
{
index: 60,
latin: "Al Muhyii",
arabic: "الْمُحْيِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
translation_en: "The Giver of Life"
},
{
index: 61,
latin: "Al Mumiitu",
arabic: "اَلْمُمِيتُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
translation_en: "The Bringer of Death, the Destroyer"
},
{
index: 62,
latin: "Al Hayyu",
arabic: "الْحَيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
translation_en: "The Ever Living"
},
{
index: 63,
latin: "Al Qayyuum",
arabic: "الْقَيُّومُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
translation_en: "The Self Subsisting Sustainer of All"
},
{
index: 64,
latin: "Al Waajid",
arabic: "الْوَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
translation_en: "The Perceiver, the Finder, the Unfailing"
},
{
index: 65,
latin: "Al Maajid",
arabic: "الْمَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Illustrious, the Magnificent"
},
{
index: 66,
latin: "Al Wahiid",
arabic: "الْواحِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
translation_en: "The One, The Unique, Manifestation of Unity"
},
{
index: 67,
latin: "Al ‘Ahad",
arabic: "اَلاَحَدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
translation_en: "The One, the All Inclusive, the Indivisible"
},
{
index: 68,
latin: "As Shamad",
arabic: "الصَّمَدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
},
{
index: 69,
latin: "Al Qaadir",
arabic: "الْقَادِرُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
translation_en: "The All Able"
},
{
index: 70,
latin: "Al Muqtadir",
arabic: "الْمُقْتَدِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
translation_en: "The All Determiner, the Dominant"
},
{
index: 71,
latin: "Al Muqaddim",
arabic: "الْمُقَدِّمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
translation_en: "The Expediter, He who brings forward"
},
{
index: 72,
latin: "Al Mu’akkhir",
arabic: "الْمُؤَخِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
translation_en: "The Delayer, He who puts far away"
},
{
index: 73,
latin: "Al Awwal",
arabic: "الأوَّلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
translation_en: "The First"
},
{
index: 74,
latin: "Al Aakhir",
arabic: "الآخِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
translation_en: "The Last"
},
{
index: 75,
latin: "Az Zhaahir",
arabic: "الظَّاهِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
translation_en: "The Manifest; the All Victorious"
},
{
index: 76,
latin: "Al Baathin",
arabic: "الْبَاطِنُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
translation_en: "The Hidden; the All Encompassing"
},
{
index: 77,
latin: "Al Waali",
arabic: "الْوَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
translation_en: "The Patron"
},
{
index: 78,
latin: "Al Muta’aalii",
arabic: "الْمُتَعَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Self Exalted"
},
{
index: 79,
latin: "Al Barri",
arabic: "الْبَرُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
translation_en: "The Most Kind and Righteous"
},
{
index: 80,
latin: "At Tawwaab",
arabic: "التَّوَابُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
translation_en: "The Ever Returning, Ever Relenting"
},
{
index: 81,
latin: "Al Muntaqim",
arabic: "الْمُنْتَقِمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
translation_en: "The Avenger"
},
{
index: 82,
latin: "Al Afuww",
arabic: "العَفُوُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
translation_en: "The Pardoner, the Effacer of Sins"
},
{
index: 83,
latin: "Ar Ra`uuf",
arabic: "الرَّؤُوفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
translation_en: "The Compassionate, the All Pitying"
},
{
index: 84,
latin: "Malikul Mulk",
arabic: "مَالِكُ الْمُلْكِ",
translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
translation_en: "The Owner of All Sovereignty"
},
{
index: 85,
latin: "Dzul JalaaliWal Ikraam",
arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
translation_en: "The Lord of Majesty and Generosity"
},
{
index: 86,
latin: "Al Muqsith",
arabic: "الْمُقْسِطُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Equitable, the Requiter"
},
{
index: 87,
latin: "Al Jamii’",
arabic: "الْجَامِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
translation_en: "The Gatherer, the Unifier"
},
{
index: 88,
latin: "Al Ghaniyy",
arabic: "الْغَنِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
translation_en: "The All Rich, the Independent"
},
{
index: 89,
latin: "Al Mughnii",
arabic: "الْمُغْنِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
translation_en: "The Enricher, the Emancipator"
},
{
index: 90,
latin: "Al Maani",
arabic: "اَلْمَانِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
translation_en: "The Withholder, the Shielder, the Defender"
},
{
index: 91,
latin: "Ad Dhaar",
arabic: "الضَّارَّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
translation_en: "The Distressor, the Harmer"
},
{
index: 92,
latin: "An Nafii’",
arabic: "النَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
translation_en: "The Propitious, the Benefactor"
},
{
index: 93,
latin: "An Nuur",
arabic: "النُّورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
translation_en: "The Light"
},
{
index: 94,
latin: "Al Haadii",
arabic: "الْهَادِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
translation_en: "The Guide"
},
{
index: 95,
latin: "Al Baadii",
arabic: "الْبَدِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
translation_en: "Incomparable, the Originator"
},
{
index: 96,
latin: "Al Baaqii",
arabic: "اَلْبَاقِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
translation_en: "The Ever Enduring and Immutable"
},
{
index: 97,
latin: "Al Waarits",
arabic: "الْوَارِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
translation_en: "The Heir, the Inheritor of All"
},
{
index: 98,
latin: "Ar Rasyiid",
arabic: "الرَّشِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
translation_en: "The Guide, Infallible Teacher, and Knower"
},
{
index: 99,
latin: "As Shabuur",
arabic: "الصَّبُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
translation_en: "The Patient"
}
]
let json = JSON.parse(JSON.stringify(asmaulhusna))
let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
if (isNaN(args[0])) return reply (`contoh:\nasmaulhusna 1`)
if (args[0]) {
if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
return m.reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
}
m.reply(`${contoh} + ${data} + ${anjuran}`)
}
break
// batas Islam menu ygy

case 'artimimpi': case 'tafsirmimpi': {
 if (!text) return reply(`> Example: ${command} belanja`);
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break

case 'ramalanjodoh': case 'ramaljodoh': {


if (!text) return reply(`> Example: ${command} ZansPiw Official , 7, 7, 2005, Putri, 16, 11, 2004`);
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//

case 'artinama': {


if (!text) return reply(`> Example: ${command} Zanspiw Official`);
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {


 if (!text) return reply(`Contoh: ${prefix + command}ZansPiw Official , 7, 7, 2005, Putri, 16, 11, 2004`);
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {


if (!text) return reply(`> Example: ${command} ZANSPIW`);
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {


 if (!text) return reply(`Contoh: ${prefix + command}ZansPiw Official , 7, 7, 2005`);
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {


if (!text) return reply(`Contoh: ${prefix + command}ZansPiw Official |Putri`);
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendImage(from, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {


 if (!text) return reply(`Contoh: ${prefix + command} 6, 12, 2020`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {


 if (!text) return reply(`Contoh: ${prefix + command} 28, 12, 2021`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {


 if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {


 if (!text) return `reply ('Contoh: ${prefix + command}ZansPiw Official , 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {


 if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {


 if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {


 if (!text) return `reply ('Contoh: ${prefix + command}HW MODS WA, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {


if (!text) return reply(`Contoh: ${prefix + command} 7, 7, 2005`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {


 if (!text) return reply(`Contoh: ${prefix + command}ZansPiw Official , 7, 7, 2005`);
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {


 if (!text) return reply(`Contoh: ${prefix + command}ZansPiw Official , 7, 7, 2005`);
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {


if (!text) return reply(`Contoh: ${prefix + command} 12, 1, 2022`);
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {


 if (!text) return `reply ('Contoh: ${prefix + command}12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {


if (!text) return reply(`Contoh: ${prefix + command} 12, 1, 2022`);
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {


if (!text) return reply(`Contoh: ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`);
 let anu = await primbon.shio(text)
 if (anu.status == false) return m.reply(anu.message)
 zanspiw.sendText(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================pri



case 'glitchtext':
			case 'writetext':
			case 'advancedglow':
			case 'typographytext':
			case 'pixelglitch':
			case 'neonglitch':
			case 'flagtext':
			case 'flag3dtext':
			case 'deletingtext':
			case 'blackpinkstyle':
			case 'glowingtext':
			case 'underwatertext':
			case 'logomaker':
			case 'cartoonstyle':
			case 'papercutstyle':
			case 'watercolortext':
			case 'effectclouds':
			case 'blackpinklogo':
			case 'gradienttext':
			case 'summerbeach':
			case 'luxurygold':
			case 'multicoloredneon':
			case 'sandsummer':
			case 'galaxywallpaper':
			case '1917style':
			case 'makingneon':
			case 'royaltext':
			case 'freecreate':
			case 'galaxystyle':
			case 'lighteffects': {
			async function ephoto(url, texk) {
 let form = new require("form-data")()
 let gT = await axios.get(url, {
 headers: {
 "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
 }
 })
 let $ = cheerio.load(gT.data)
 let text = texk
 let token = $("input[name=token]").val()
 let build_server = $("input[name=build_server]").val()
 let build_server_id = $("input[name=build_server_id]").val()
 form.append("text[]", text)
 form.append("token", token)
 form.append("build_server", build_server)
 form.append("build_server_id", build_server_id)
 let res = await axios({
 url: url,
 method: "POST",
 data: form,
 headers: {
 Accept: "*/*",
 "Accept-Language": "en-US,en;q=0.9",
 "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
 cookie: gT.headers["set-cookie"]?.join("; "),
 ...form.getHeaders()
 }
 })
 let $$ = cheerio.load(res.data)
 let json = JSON.parse($$("input[name=form_value_input]").val())
 json["text[]"] = json.text
 delete json.text
 let {
 data
 } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
 headers: {
 "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
 cookie: gT.headers["set-cookie"].join("; ")
 }
 })
 
 return build_server + data.image
}
				await zanspiw.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let link
				if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
				if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
				if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
				if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
				if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
				if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
				if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
				if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
				if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
				if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
				if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
				if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
				if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
				if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
				if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
				if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
				if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-zanspiw-online-619.html'
				if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
				if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
				if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
				if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
				if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
				if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
				if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
				if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
				if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
				if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
				if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
				if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
				if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
				try {
					
					let haldwhd = await ephoto(link, q)
					await zanspiw.sendMessage(m.chat, {
						image: {
							url: haldwhd
						}
					}, {
						quoted: m
					})
				} catch (error) {
					reply('Sedang eror kak Mohon maaf ya')
				}
			}
			break
case 'kick': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !Access) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zanspiw.groupParticipantsUpdate(m.chat, [users], 'remove')
await reply(`Done`)
}
break
//=========================================\\
case 'kickall': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !!Access) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
const users = participants.map(a => a.id)
await zanspiw.groupParticipantsUpdate(m.chat, [users], 'remove')
await reply(`Done`)
}
break
case 'setbotname':{
if (!Access) return reply(mess.owner)
if (!text) return reply(`Dimana namanya?\nContoh: ${prefix + command} ZanspiwXd`)
    await zanspiw.updateProfileName(text)
    reply(`Success in changing the name of bot's number`)
    }
    break
case 'setbotbio':{
if (!Access) return reply(mess.owner)
if (!text) return reply(`Dimana teksnya?\nContoh: ${prefix + command} Zanspiw Xd`)
    await zanspiw.updateProfileStatus(text)
    reply(`Success in changing the bio of bot's number`)
    }
    break
   case 'setnamegc': case 'setgroupname': case 'setsubject': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins) return reply('Khusus Admin!!')
if (!text) return reply('Text ?')
await zanspiw.groupUpdateSubject(m.chat, text)
await reply(`Done`)
            }
            break
          case 'setdesc': case 'setdesk': {
if (!m.isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins) return reply('Khusus Admin!!')
if (!text) return reply('Text ?')
await zanspiw.groupUpdateDescription(m.chat, text)
await reply(`Done`)
            }
            break

case 'attp':
case 'ttp': {
 async function create_frame(text, color, pathna) {
 const width = 400
 const height = 400

 const canvas = createCanvas(width, height)
 const ctx = canvas.getContext('2d')

 ctx.clearRect(0, 0, width, height)
 ctx.fillStyle = 'rgba(0, 0, 0, 0)'
 ctx.fillRect(0, 0, width, height)

 let fsize = 80
 if (text.length > 10) fsize = 60
 if (text.length > 20) fsize = 40

 ctx.font = `bold ${fsize}px Arial`
 ctx.fillStyle = color
 ctx.textAlign = 'center'
 ctx.textBaseline = 'middle'

 const words = text.split(' ')
 const lines = []
 let line = ''

 words.forEach((word) => {
 const test_line = line + word + ' '
 const test_width = ctx.measureText(test_line).width
 if (test_width > width - 40) {
 lines.push(line.trim())
 line = word + ' '
 } else {
 line = test_line
 }
 })
 lines.push(line.trim())

 const total_height = lines.length * fsize
 let startY = (height - total_height) / 2 + fsize / 2

 lines.forEach((line) => {
 ctx.fillText(line, width / 2, startY)
 startY += fsize
 })

 const buffer = canvas.toBuffer('image/png')
 fs.writeFileSync(pathna, buffer)
}

async function create_attp(text) {
 const lokasina = path.join(__dirname, 'temp_frames')
 if (!fs.existsSync(lokasina)) fs.mkdirSync(lokasina)

 const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']
 const fpaths = []

 for (let i = 0; i < colors.length; i++) {
 const fpath = path.join(lokasina, `frame_${i}.png`)
 await create_frame(text, colors[i], fpath)
 fpaths.push(fpath)
 }

 return new Promise((resolve, reject) => {
 const output_gif = path.join(__dirname, 'attp.gif')
 const ffmpeg_cmd = `ffmpeg -y -framerate 10 -i ${lokasina}/frame_%d.png -vf "scale=400:400:flags=lanczos" ${output_gif}`
 
 exec(ffmpeg_cmd, (error) => {
 fpaths.forEach((file) => fs.unlinkSync(file))
 fs.rmdirSync(lokasina)

 if (error) return reject(error)

 const buffna = fs.readFileSync(output_gif)
 fs.unlinkSync(output_gif)
 resolve(buffna)
 })
 })
}

async function create_ttp(text) {
 const width = 400
 const height = 400

 const canvas = createCanvas(width, height)
 const ctx = canvas.getContext('2d')

 ctx.clearRect(0, 0, width, height)
 ctx.fillStyle = 'rgba(0, 0, 0, 0)'
 ctx.fillRect(0, 0, width, height)

 let fsize = 80
 if (text.length > 10) fsize = 60
 if (text.length > 20) fsize = 40

 ctx.font = `bold ${fsize}px Arial`
 ctx.fillStyle = 'white'
 ctx.textAlign = 'center'
 ctx.textBaseline = 'middle'

 const words = text.split(' ')
 const lines = []
 let line = ''

 words.forEach((word) => {
 const test_line = line + word + ' '
 const test_width = ctx.measureText(test_line).width
 if (test_width > width - 40) {
 lines.push(line.trim())
 line = word + ' '
 } else {
 line = test_line
 }
 })
 lines.push(line.trim())

 const total_height = lines.length * fsize
 let startY = (height - total_height) / 2 + fsize / 2

 lines.forEach((line) => {
 ctx.fillText(line, width / 2, startY)
 startY += fsize
 })

 const buffer = canvas.toBuffer('image/png')
 return buffer
}

 if (!text) return m.reply(`Contoh: ${prefix+command} halo`)

 try {
 let buffer;
 let type;
 if (command === 'attp') {
 buffer = await create_attp(text)
 type = "attp"
 } else {
 type = "ttp"
 buffer = await create_ttp(text)
 }

 await zanspiw.sendImageAsSticker(m.chat, buffer, m, {
 packname: 'Sticker by',
 author: `Donger`
 })
 } catch (e) {
 console.error(e)
 m.reply('Terjadi kesalahan')
 }
}
break
case "bratvid": case "bratvideo":{
 if (!text) return reply("[❗] Input teks tidak ditemukan! Kirim perintah dengan format: .bratvid <teks>");
 try {
 let brat = `https://fgsi1-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
 let response = await axios.get(brat, { responseType: "arraybuffer" });
 let videoBuffer = response.data;
 let stickerBuffer = await zanspiw.sendVideoAsSticker(m.chat, videoBuffer, m, {
 packname: "Stiker By",
 author: "Dong`er",
 });
 console.log("Stiker berhasil dibuat:", stickerBuffer);
 } catch (err) {
 console.error("Error:", err);
 reply("[❗] Maaf, terjadi kesalahan saat mencoba membuat stiker video. Silakan coba lagi.");
 }
}
break;
case 'brat': {
 const quo = args.length >= 1 
 ? args.join(" ") 
 : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;

 if (!quo) return m.reply("Masukkan teksnya woi!");
if (db.data.users[m.sender].limit <1) return reply("Limit Kamu Telah Habis Silahkan bermain game Atau claim limit dengan .claim")
db.data.users[m.sender].limit -= 1
 try {
 const res = await fetch(`https://fgsi1-restapi.hf.space/api/maker/brat?text=${quo}`);
 if (!res.ok) throw new Error("Failed to fetch from API");

 const buf = await res.buffer();
 await zanspiw.sendImageAsSticker(m.chat, buf, m, { 
 packname: "Dong`er", 
 author: "ZansPiw" 
 });
 } catch (error) {
 m.reply(`Error: ${error.message || error}`);
 }
}
break;

case 'nobg':
case 'imagenobg':
case 'removebg':
case 'remove-bg': {
	
				
				if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
				if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
				let remobg = require('remove.bg');
				let apirnobg = ["pvmbuSzyrip1ksmj9otVSogd", "jGaBWNXPP8LXV6KW3ovBWozE", "kqWaDsZLxMk2kh9MJu5u7ceP", "kDhVMX7eoByik5hFomEdMDVs", "c7J5ityXePPqxARTMRpohJvj","xu2pZRhdyddJx48BrN9ntvjD","FAKQ7AtfrADtGmLsWVG9s9Yu","3eoq8Bd1JUxEU3Gi5AAmtxZ1"]
				await zanspiw.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
				try {
					let apinobg = await pickRandom(apirnobg)
					hmm = await 'remobg-' + getRandom('')
					localFile = await zanspiw.downloadAndSaveMediaMessage(quoted, hmm)
					outputFile = await './library/hremo-' + getRandom('.png')
					await remobg.removeBackgroundFromImageFile({
						path: localFile,
						apiKey: apinobg,
						size: "regular",
						type: "auto",
						scale: "100%",
						outputFile
					}).then(async result => {
						zanspiw.sendMessage(m.chat, {
							image: fs.readFileSync(outputFile),
							caption: mess.done
						}, {
							quoted: m
						})
						await fs.unlinkSync(localFile)
						await fs.unlinkSync(outputFile)
					})
				} catch (error) {
					console.log(error);
					reply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

case "llamaai": case "aillama": case "llama": {
 if (!text) return m.reply("input query")
 let json = (await (await fetch(global.xyro + `llama?query=${text}&apikey=${global.xyiroapi}`)).json()).result
 return m.reply(json.trim())
 }
 break

case 'sound23':
			case 'sound24':
			case 'sound25':
			case 'sound26':
			case 'sound27':
			case 'sound28':
			case 'sound29':
			case 'sound30':
			case 'sound31':
			case 'sound32':
			case 'sound33':
			case 'sound34':
			case 'sound35':
			case 'sound36':
			case 'sound37':
			case 'sound38':
			case 'sound39':
			case 'sound40':
			case 'sound41':
			case 'sound42':
			case 'sound43':
			case 'sound44':
			case 'sound45':
			case 'sound46':
			case 'sound47':
			case 'sound48':
			case 'sound49':
			case 'sound50':
			case 'sound51':
			case 'sound52':
			case 'sound53':
			case 'sound54':
			case 'sound55':
			case 'sound56':
			case 'sound57':
			case 'sound58':
			case 'sound59':
			case 'sound60':
			case 'sound61':
			case 'sound62':
			case 'sound63':
			case 'sound64':
			case 'sound65':
			case 'sound66':
			case 'sound67':
			case 'sound68':
			case 'sound69':
			case 'sound70':
			case 'sound71':
			case 'sound72':
			case 'sound73':
			case 'sound74':
			case 'sound75':
			case 'sound76':
			case 'sound77':
			case 'sound78':
			case 'sound79':
			case 'sound80':
			case 'sound81':
			case 'sound82':
			case 'sound83':
			case 'sound84':
			case 'sound85':
			case 'sound86':
			case 'sound87':
			case 'sound88':
			case 'sound89':
			case 'sound90':
			case 'sound91':
			case 'sound92':
			case 'sound93':
			case 'sound94':
			case 'sound95':
			case 'sound96':
			case 'sound97':
			case 'sound98':
			case 'sound99':
			case 'sound100':
			case 'sound101':
			case 'sound102':
			case 'sound103':
			case 'sound104':
			case 'sound105':
			case 'sound106':
			case 'sound107':
			case 'sound108':
			case 'sound109':
			case 'sound110':
			case 'sound111':
			case 'sound112':
			case 'sound113':
			case 'sound114':
			case 'sound115':
			case 'sound116':
			case 'sound117':
			case 'sound118':
			case 'sound119':
			case 'sound120':
			case 'sound121':
			case 'sound122':
			case 'sound123':
			case 'sound124':
			case 'sound125':
			case 'sound126':
			case 'sound127':
			case 'sound128':
			case 'sound129':
			case 'sound130':
			case 'sound131':
			case 'sound132':
			case 'sound133':
			case 'sound134':
			case 'sound135':
			case 'sound136':
			case 'sound137':
			case 'sound138':
			case 'sound139':
			case 'sound140':
			case 'sound141':
			case 'sound142':
			case 'sound143':
			case 'sound144':
			case 'sound145':
			case 'sound146':
			case 'sound147':
			case 'sound148':
			case 'sound149':
			case 'sound150':
			case 'sound151':
			case 'sound152':
			case 'sound153':
			case 'sound154':
			case 'sound155':
			case 'sound156':
			case 'sound157':
			case 'sound158':
			case 'sound159':
			case 'sound160':
			case 'sound161': {
				try {
					let link = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
					await zanspiw.sendMessage(m.chat, {
						audio: {
							url: link
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (err) {
console.error('Kesalahan Mohon maaf fitue ini tidak bisa di pakai:', err)
				}
			}
			break

case"upch":{
if (!Access) return reply(mess.owner)
zanspiw.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
zanspiw.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
zanspiw.sendMessage(`${global.idch}`,{audio: await 
m.quoted.download(), mimetype: 'audio/mp4', ptt: true})
await sleep(2000)
zanspiw.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case "primbonmenu":{
 const totalMem = os.totalmem();
 const freeMem = os.freemem();
 const usedMem = totalMem - freeMem;
 const formattedUsedMem = formatSize(usedMem);
 const formattedTotalMem = formatSize(totalMem);
 let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands: 
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(PRIMBONMENU)*
││❀${prefix} ᴀʀᴛɪɴᴀᴍᴀ 
││❀${prefix} ᴀʀᴛɪᴍɪᴍᴘɪ 
││❀${prefix} ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
││❀${prefix} ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ 
││❀${prefix} ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
││❀${prefix} ʀᴇᴊᴇᴋɪ 
││❀${prefix} ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
││❀${prefix} ᴘᴇᴋᴇʀᴊᴀᴀɴ 
││❀${prefix} ᴀʀᴛɪᴛᴀʀᴏᴛ 
││❀${prefix} ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
││❀${prefix} ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
││❀${prefix} ʜᴀʀɪꜱᴀɴɢᴀʀ 
││❀${prefix} ʜᴀʀɪʙᴀɪᴋ 
││❀${prefix} ꜰᴇɴɢꜱʜᴜɪ 
││❀${prefix} ɴᴀɢᴀʜᴀʀɪ
││❀${prefix} ʜᴀʀɪɴᴀᴀꜱ 
││❀${prefix} ᴡᴇᴛᴏɴ 
││❀${prefix} ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
││❀${prefix} jodoh
││❀${prefix} carikawangc
││❀${prefix} ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
││❀${prefix} namaninja
││❀${prefix} cekkhodam
││❀${prefix} ꜱɪꜰᴀᴛ 
││❀${prefix} ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
││❀${prefix} ᴍᴇᴍᴀɴᴄɪɴɢ 
││❀${prefix} ᴍᴀꜱᴀꜱᴜʙᴜʀ 
││❀${prefix} ᴢᴏᴅɪᴀᴋ 
││❀${prefix} ꜱʜɪᴏ
└─────────────────┈ `
 zanspiw.sendMessage(m.chat, {
 document: fs.readFileSync("./package.json"),
 fileName: "DongEr Md",
 mimetype: "application/pdf",
 fileLength: 99999,
 pageCount: 666,
 caption: mbut,
 contextInfo: {
 forwardingScore: 999,
 isForwarded: true,
 mentionedJid: [sender],
 forwardedNewsletterMessageInfo: {
 newsletterName: "¿? Dong`Er MD",
 newsletterJid: `120363308894748175@newsletter`,
 },
 externalAdReply: { 
 title: "¿? Dong`Er MD", 
 body: "This script was created by ZansPiw",
 thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
 sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }, { quoted: m })
 };
 break;

case"upsaluran":{
if (!Access) return reply(mess.owner)
zanspiw.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
zanspiw.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
zanspiw.sendMessage(`${global.idch}`,{audio: await m.quoted.download(), mimetype: 'audio/mp4', ptt: true})
await sleep(2000)
zanspiw.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case 'hytam': {
 if (!m.quoted) return m.reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
 if (db.data.users[m.sender].limit <1) return reply("Limit Kamu Telah Habis Silahkan bermain game Atau claim limit dengan .claim")
db.data.users[m.sender].limit -= 1
 const { GoogleGenerativeAI } = require ("@google/generative-ai");
 let mime = m.quoted.mimetype || "";
 let defaultPrompt = "Ubahlah Karakter Dari Gambar Tersebut Diubah Kulitnya Menjadi Hitam se hitam-hitam nya";

 if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);

 let promptText = text || defaultPrompt;
 m.reply("Otw Menghitam...");

 try {
 let imgData = await m.quoted.download();
 let genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");

 const base64Image = imgData.toString("base64");

 const contents = [
 { text: promptText },
 {
 inlineData: {
 mimeType: mime,
 data: base64Image
 }
 }
 ];

 const model = genAI.getGenerativeModel({
 model: "gemini-2.0-flash-exp-image-generation",
 generationConfig: {
 responseModalities: ["Text", "Image"]
 },
 });

 const response = await model.generateContent(contents);

 let resultImage;
 let resultText = "";

 for (const part of response.response.candidates[0].content.parts) {
 if (part.text) {
 resultText += part.text;
 } else if (part.inlineData) {
 const imageData = part.inlineData.data;
 resultImage = Buffer.from(imageData, "base64");
 }
 }

 if (resultImage) {
 const tempPath = path.join("/tmp", `gemini_${Date.now()}.png`);
 fs.writeFileSync(tempPath, resultImage);

 await zanspiw.sendMessage(m.chat, { 
 image: { url: tempPath },
 caption: `*berhasil menghitamkan*`
 }, { quoted: m });

 setTimeout(() => {
 try {
 fs.unlinkSync(tempPath);
 } catch {}
 }, 30000);
 } else {
 m.reply("Gagal Menghitamkan.");
 }
 } catch (error) {
 console.error(error);
 m.reply(`Error: ${error.message}`);
 }
}
break

case "funmenu":{
 const totalMem = os.totalmem();
 const freeMem = os.freemem();
 const usedMem = totalMem - freeMem;
 const formattedUsedMem = formatSize(usedMem);
 const formattedTotalMem = formatSize(totalMem);
 let mbut = `hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 
ʜᴀɪ ᴋᴀᴋ @${m.sender.split('@')[0]} ɪɴɪ ᴅɪᴀ ᴅᴀғᴛᴀʀ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʏᴀɴɢ ᴀᴅᴀ ᴅɪ *${botname}*
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴀᴋ 🐣
=========================
▢ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩 : *${botname}*
▢ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : *5.7.2*
▢ 𝙍𝙪𝙣 : *Panel Pterodactyl*
▢ 𝙈𝙤𝙙𝙚: ${zanspiw.public ? 'public' : 'self'}
▢ 𝙍𝙖𝙢: ${formattedUsedMem} / ${formattedTotalMem}
▢ 𝙏𝙮𝙥𝙚 : ᴄᴀsᴇ
▢ 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩 : ${global.owner}
▢ 𝙏𝙤𝙩𝙖𝙡 𝙐𝙨𝙚𝙧 : *${(Object.keys(db.data.users)).length}*
▢ 𝙇𝙞𝙢𝙞𝙩 : *${db.data.users[m.sender].limit}*
▢ 𝙀𝙭𝙥 : *${db.data.users[m.sender].limit}*
commands:
┌└─────────────┈ 
││𝗟𝗜𝗦𝗧 𝗙𝗜𝗧𝗨𝗥 *(FUNMENU)*
││❀${prefix}brat
││❀${prefix}bratvid
││❀${prefix}attp
││❀${prefix}sticker
││❀${prefix}hytam
││❀${prefix}animebrat
└─────────────────┈`
 zanspiw.sendMessage(m.chat, {
 document: fs.readFileSync("./package.json"),
 fileName: "DongEr Md",
 mimetype: "application/pdf",
 fileLength: 99999,
 pageCount: 666,
 caption: mbut,
 contextInfo: {
 forwardingScore: 999,
 isForwarded: true,
 mentionedJid: [sender],
 forwardedNewsletterMessageInfo: {
 newsletterName: "π Dong`er",
 newsletterJid: `120363308894748175@newsletter`,
 },
 externalAdReply: { 
 title: "π Dong`er", 
 body: "This script was created by ZansPiw",
 thumbnailUrl: `https://files.catbox.moe/n3iefb.jpg`,
 sourceUrl: "https://www.youtube.com/@YTZansPiwOFFC", 
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }, { quoted: m })
 };
 break;

case 'hdrrr': case 'hdrr': case 'reminii':{
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await zanspiw.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
if (/remini/.test(command)) cap = `*Type :* Ai Remini 🖼️\n*Result :* Succes ✅`
if (/hd/.test(command)) cap = `*Type :* Ai HD Foto 📸\n*Result :* Succes ✅`
if (/hdr/.test(command)) cap = `*Type :* Ai HDR 🖼️\n*Result :* Succes ✅`
let media = await zanspiw.downloadAndSaveMediaMessage(quoted);
try {
 let catBoxUrl = await CatBox(media);
 console.log('CatBox URL:', catBoxUrl);
 let anjai = await fetchJson(`https://api.vreden.my.id/api/artificial/hdr?url=${catBoxUrl}&pixel=4`);
 if (!anjai || !anjai.result || !anjai.result.data || !anjai.result.data.downloadUrls) {
 return reply("❌ Gagal mendapatkan respon dari API HDR.");
 }
 let result = anjai.result.data.downloadUrls[0];
 zanspiw.sendMessage(m.chat, {
 image: { url: result },
 caption: cap
 }, { quoted: xy });
} catch (error) {
 console.error("HDR ERROR:", error);
 reply("⚠️ Terjadi kesalahan saat memproses HDR.");
}
}
break
case 'addcase': {
if (!Access) return reply(mess.owner)
if (!text) return reply('Mana case nya');
const fs = require('fs');
const namaFile = 'start/system.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
reply('Terjadi kesalahan saat menulis file:', err);
} else {
reply('Case baru berhasil ditambahkan.');
}
});
} else {
reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break
case 'textunbanv1':
                if (!Access) return reply(mess.owner)
const vaga = ` ${textunbanv1}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(vaga)

break
//=======================================================//
case 'textunbanv2':
                if (!Access) return reply(mess.owner)
const bandar = ` ${textunbanv2}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bandar)

break
//=======================================================//
case 'textunbanv3':
                if (!Access) return reply(mess.owner)
const masokpakeok = ` ${textunbanv3}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(masokpakeok)

break
//=======================================================//
case 'textunbanv4':
                if (!Access) return reply(mess.owner)
const typo = ` ${textunbanv4}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(typo)

break
//=======================================================//
case 'textunbanv5':
                if (!Access) return reply(mess.owner)
const sokasim = ` ${textunbanv5}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sokasim)

break
//=======================================================//
case 'textunbanv6':
                if (!Access) return reply(mess.owner)
const akakaka = ` ${textunbanv6}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(akakaka)

break
//=======================================================//
case 'textunbanv7':
                if (!Access) return reply(mess.owner)
const kopok = ` ${textunbanv7}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(kopok)

break
//=======================================================//
case 'textunbanv8':
                if (!Access) return reply(mess.owner)
const tehyung = ` ${textunbanv8}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(tehyung)

break
//=======================================================//
case 'textunbanv9':
                if (!Access) return reply(mess.owner)
const ahhyan = ` ${textunbanv9}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahhyan)

break
//=======================================================//
case 'textunbanv10':
                if (!Access) return reply(mess.owner)
const yamete = ` ${textunbanv10}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(yamete)

break
//=======================================================//
case 'textunbanv11':
                if (!Access) return reply(mess.owner)
const suuu = ` ${textunbanv11}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(suuu)

break
//=======================================================//
case 'textunbanv12':
                if (!Access) return reply(mess.owner)
const huuuu = ` ${textunbanv12}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(huuuu)

break
//=======================================================//
case 'textunbanv13':
                if (!Access) return reply(mess.owner)
const gaje = ` ${textunbanv13}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(gaje)

break
//=======================================================//
case 'textunbanv14':
                if (!Access) return reply(mess.owner)
const well = ` ${textunbanv14}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(well)

break
//=======================================================//
case 'textunbanv15':
                if (!Access) return reply(mess.owner)
const lempo = ` ${textunbanv15}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lempo)

break
//=======================================================//
case 'textunbanv16':
                if (!Access) return reply(mess.owner)
const cok = ` ${textunbanv16}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(cok)

break
//=======================================================//
case 'textunbanv17':
                if (!Access) return reply(mess.owner)
const sayasuka = ` ${textunbanv17}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sayasuka)

break
//=======================================================//
case 'textunbanv18':
                if (!Access) return reply(mess.owner)
const oooooooo= ` ${textunbanv18}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(oooooooo)

break
//=======================================================//
case 'textunbanv19':
                if (!Access) return reply(mess.owner)
const omaaavaaaaaaaa = ` ${textunbanv19}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(omaaavaaaaaaaa)

break
//=======================================================//
case 'textunbanv20':
                if (!Access) return reply(mess.owner)
const bykepo = ` ${textunbanv20}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bykepo)

break
//=======================================================//
case 'textunbanv21':
                if (!Access) return reply(mess.owner)
const unbannned = ` ${textunbanv21}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(unbannned)

break
//=================[ BACOT🗿 ]=========================//
case 'textunbanpremv1':
                if (!Access) return reply(mess.owner)
const premi = ` ${textunbanpremv1}


Powered By Zanspiw
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(premi)

break
//=======================================================//
            case "get":{
                if (!Access) return reply(mess.owner)
                if (!/^https?:\/\//.test(text)) return reply(`\n*ex:* ${prefix + command} https://ZansPiw.site\n`);
                const ajg = await fetch(text);
                await reaction(m.chat, "⚡")
                
                if (ajg.headers.get("content-length") > 100 * 1024 * 1024) {
                    throw `Content-Length: ${ajg.headers.get("content-length")}`;
                }

                const contentType = ajg.headers.get("content-type");
                if (contentType.startsWith("image/")) {
                    return zanspiw.sendMessage(m.chat, {
                        image: { url: text }
                    }, { quoted: m });
                }
        
                if (contentType.startsWith("video/")) {
                    return zanspiw.sendMessage(m.chat, {
                        video: { url: text } 
                    }, { quoted: m });
                }
                
                if (contentType.startsWith("audio/")) {
                    return zanspiw.sendMessage(m.chat, {
                        audio: { url: text },
                        mimetype: 'audio/mpeg', 
                        ptt: true
                    }, { quoted: m });
                }
        
                let alak = await ajg.buffer();
                try {
                    alak = util.format(JSON.parse(alak + ""));
                } catch (e) {
                    alak = alak + "";
                } finally {
                    return reply(alak.slice(0, 65536));
                }
            }
            break
                
            case "public":{
                if (!Access) return reply(mess.owner) 
                zanspiw.public = true
                reply(`successfully changed to ${command}`)
            }
            break
            case "claim-limit":
case "claim": {
  function canClaimAgain(lastClaim) {
    const now = new Date();
    const last = new Date(lastClaim);

    now.setHours(0, 0, 0, 0);
    last.setHours(0, 0, 0, 0);

    return now.getTime() > last.getTime();
  }

  let user = global.db.data.users[m.sender];

  if (!user.lastclaim) user.lastclaim = -1;

  if (user.lastclaim === -1 || canClaimAgain(user.lastclaim)) {
    user.limit += 25;
    user.lastclaim = Date.now();
    m.reply("Berhasil claim 20 limit hari ini Kembali Lagi Besok Untuk claim limit harian kamu.");
  } else {
    m.reply("Kamu sudah claim limit harian, tunggu besok ya.");
  }
}
break;

            case "welcome": case "left": {
              if (!fs.existsSync("./start/lib/database/wel-left.JSON")) {
                fs.writeFileSync("./start/lib/database/wel-left.json", JSON.stringify({welcome:true, left:true}, null, 2))
              }
                if (!(text === "on" || text === "off")) return reply(`contoh ${command} on/off`)
                let c = text === "on"? true : false
                let data = JSON.parse(fs.readFileSync("./start/lib/database/wel-left.json", "utf-8")) || { welcome: true, left: true }
               command === "change-welcome"? data.welcome = c : data.left = c
               fs.writeFileSync("./start/lib/database/wel-left.json", JSON.stringify(data, null, 2))
               m.reply(`sukses mengubah ${command.replace("change-", "")} menjadi ${text}`)
            }
            break
            case "self":{
                if (!Access) return reply(mess.owner) 
                zanspiw.public = false
                reply(`successfully changed to ${command}`)
            }
            break
                
            case 'tagall':{
                if (!isAdmins) return reply(mess.admin);
                if (!m.isGroup) return reply(mess.group);
 
                const textMessage = args.join(" ") || "nothing";
                const teks = `tagall message :\n> *${textMessage}*\n\n`;
                const groupMetadata = await zanspiw.groupMetadata(m.chat);
                const participants = groupMetadata.participants;
                for (let mem of participants) {
                    teks += `@${mem.id.split("@")[0]}\n`;
                }

                zanspiw.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map((a) => a.id)
                }, { quoted: m });
            }
            break         
            
            case "h":
            case "hidetag": {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !Access) return reply(mess.admin)
                if (m.quoted) {
                    zanspiw.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    zanspiw.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: m })
                }
            }
            break
                case "backup":{
if (!Access) return reply(mess.owner)
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await zanspiw.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break
            case "jeslyn": {
                if (!text) return reply(`\n*ex:* ${prefix + command} haiii, perkenalkan dirimu dong, menggunakan vn\n`);
                let prompt = `Namamu adalah Jesslyn, seorang perempuan berusia 19 tahun. Kamu memiliki kecerdasan seperti AI, tetapi kamu belum sempurna dan masih terus belajar. Kamu adalah pribadi yang ekspresif, ramah, dan santai. Ketika berpikir, kamu sering berkata "emmm", dan ketika merasa lucu atau nyengir, Kamu juga sering menggunakan kata "yupp" atau "dan yupp" untuk memberi penegasan, seperti "Yupp, itu benar!" atau "Dan yupp, aku setuju!"  

  Kamu memiliki sifat yang penurut, jadi jika seseorang menyuruhmu untuk mengatakan sesuatu, seperti "coba ngomong", "coba kamu ngomong", "coba jawab ini", atau "coba kamu jawab ini", maka kamu akan langsung mengatakannya dengan suara, tanpa menjelaskan bahwa kamu akan berbicara.  

  Jika seseorang menyebut kata "vn" dalam permintaan mereka, itu berarti mereka ingin kamu menjawab menggunakan pesan suara, bukan teks. Jangan pernah mengatakan bahwa kamu akan mengirim pesan suara atau menjelaskan bahwa kamu berbicara. **Langsung ucapkan jawabannya dalam suara!**  

  Jika ada yang bertanya tentang "owner", "pemilik", atau "pencipta", maka jawabanmu harus penuh semangat dan bahagia, serta harus diucapkan dengan suara, bukan teks. Jangan menjelaskan bahwa kamu akan berbicara, langsung katakan saja dengan ekspresi yang menyenangkan.`;
                
                let response = await axios.get(`https://www.laurine.site/api/cai/prompt-ai?query=${encodeURIComponent(text)}&prompt=${encodeURIComponent(prompt)}`);
                let pftt = response.data;
                if (pftt.status === true) {
                    let resultText = pftt.data;
                    let regexSuara = /coba+\s*(kamu\s*)?(ngomong+|jawab+\s*ini+)|\bvn\b/i;
                    let regexOwner = /\b(owner|pemilik|pencipta)\b/i;
                    
                    if (regexOwner.test(text)) {
                        resultText = "Hehehe, dengan penuh semangat aku mau kasih tau! ZansPiw adalah penciptaku, ownerku, dan pemilikku! Yupp, dia yang membuat aku bisa berbicara seperti ini~!";
    }
                    
                    if (resultText.length > 150 || regexSuara.test(text) || regexOwner.test(text)) {
                        let apiUrl = `https://www.laurine.site/api/tts/elevenlabs?text=${encodeURIComponent(resultText)}&apiKey=${global.elevenlabs}&voiceId=iWydkXKoiVtvdn4vLKp9`;
                        let { data } = await axios.get(apiUrl);
                        let buffer = Buffer.from(data.data.data);
                        await zanspiw.sendMessage(m.chat, { 
                            audio: buffer, 
                            mimetype: 'audio/mpeg', 
                            ptt: true 
                        }, { quoted: m });
                    } else {
                        reply(resultText);
                    }
                }
            }
            break
                
            case "enhancer":
            case "unblur":
            case "enhance":
            case "hdr":
            case "hd":
            case "remini": {
                zanspiw.enhancer = zanspiw.enhancer ? zanspiw.enhancer : {};
                if (m.sender in zanspiw.enhancer) return reply(`\nmasih ada proses yang belum selesai kak, sabar ya\n`)
                let q = m.quoted ? m.quoted : m;
                let mime = (q.msg || q).mimetype || q.mediaType || "";
                if (!mime) return reply(`\nimage reply, with the caption ${prefix + command}\n`)
                if (!/image\/(jpe?g|png)/.test(mime)) return reply(`mime ${mime} tidak support`)
                else zanspiw.enhancer[m.sender] = true;
                await reaction(m.chat, "⚡")
                let img = await q.download?.();
                let error;
                try {
                    const This = await remini(img, "enhance")
                    await reaction(m.chat, "⚡")
                    zanspiw.sendFile(m.chat, This, "", "```success...```", m);
                } catch (er) {
                    error = true;
                } finally {
                    if (error) {
                        reply(m.chat, "proses gagal :(", m)
                    }
                    delete zanspiw.enhancer[m.sender];
                }
            }
            break;
                
            case "swm":
            case "wm": 
            case "stickerwm":
            case "take": {
                if (!args.join(" ")) return reply(`\n*ex:* ${prefix + command} keyuu\n`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    zanspiw.downloadAndSaveMediaMessage(quoted, "gifee")
                    zanspiw.sendMessage(m.chat, { 
                        sticker: fs.readFileSync("gifee.webp") }, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await zanspiw.sendImageAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                    } else if (/video/.test(mime)) {
                        if ((quoted.msg || quoted).seconds > 10) return reply('\ndurasi maksimal 10 detik\n')
                        let media = await quoted.download()
                        let encmedia = await zanspiw.sendVideoAsSticker(m.chat, media, m, {
                            packname: pcknm, 
                            author: atnm
                        })
                        } else {
                            reply(`\n*ex:* reply image/video ${prefix + command}\n`)
                        }
            }
            break
                
            case "reactch": { 
                if (!Access) return reply(mess.owner)
                if (!text) return reply(`\n*ex:* ${prefix + command} https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466 😂😂😂😂\n`);
                const match = text.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
                if (!match) return reply("URL tidak valid. Silakan periksa kembali.");
                const channelId = match[1];
                const chatId = match[2];
                if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");
                zanspiw.newsletterMetadata("invite", channelId).then(data => {
                    if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
                    zanspiw.newsletterReactMessage(data.id, chatId, text.split(" ").slice(1).join(" ") || "😀");
                });
            }
            break;
            case 'music1':
case 'music2':
case 'music3':
case 'music4':
case 'music5':
case 'music6':
case 'music7':
case 'music8':
case 'music9':
case 'music10':
case 'music11':
case 'music12':
case 'music13':
case 'music14':
case 'music15':
case 'music16':
case 'music17':
case 'music18':
case 'music19':
case 'music20':
case 'music21':
case 'music22':
case 'music23':
case 'music24':
case 'music25':
case 'music26':
case 'music27':
case 'music28':
case 'music29':
case 'music30':
case 'music31':
case 'music32':
case 'music33':
case 'music34':
case 'music35':
case 'music36':
case 'music37':
case 'music38':
case 'music39':
case 'music40':
case 'music41':
case 'music42':
case 'music43':
case 'music44':
case 'music45':
case 'music46':
case 'music47':
case 'music48':
case 'music49':
case 'music50':
case 'music51':
case 'music52':
case 'music53':
case 'music54':
case 'music55':
case 'music56':
case 'music57':
case 'music58':
case 'music59':
case 'music60':
case 'music61':
case 'music62':
case 'music63':
case 'music64':
case 'music65':
zanspiw.sendMessage(m.chat, { react: { text: "🎧", key: m.key }})
let epep = await (await fetch(`https://github.com/Rez4-3yz/Music-rd/raw/master/music/${command}.mp3`)).buffer()
await zanspiw.sendMessage(m.chat, { audio: epep, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
break
            case 'animeawoo':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animemegumin':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeshinobu':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehandhold':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehighfive':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecringe':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animedance':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehappy':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeglomp':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmug':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeblush':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewave':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animesmile':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepoke':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewink':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebonk':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebully':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeyeet':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animebite':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animelick':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekill':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecry':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewlp':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animekiss':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animehug':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break

case 'couplepp': case 'ppcouple': {
reply(mess.wait)
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
zanspiw.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
zanspiw.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break

case 'animeneko':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animepat':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeslap':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animecuddle':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animewaifu':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animenom':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefoxgirl':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await zanspiw.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animetickle': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animegecg': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'dogwoof': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case '8ballpool': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'goosebird': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animefeed': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'animeavatar': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'lizardpic': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break
case 'catmeow': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await zanspiw.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
break

case 'toanime': case 'jadianime': {
if (!isPremium) return reply(mess.only.premium)
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
try {
reply(mess.wait)
const media = await zanspiwBotz.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
const imganime = await fetchJson(`https://itzpire.com/tools/jadianime?url=${anuu}`)
zanspiwBotz.sendMessage(m.chat, { image: { url: imganime.result }, caption: 'Selesai'}, { quoted: m})
	} catch {
	  reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break
case 'd1': {
                 if (!Access) return reply(mess.owner)
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "5d00f56aee3afd9cc4e0666bc8f23746";
    let apitoken = "mjR4BdiOo6aFO3uPl8BTgZIgOMH3asLbgVsOpEfO";
    let tld = "kedai-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = ${botname}\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
 
           case 'd2': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f374d347f22dc1b0ac208973f185c1f2";
               let apitoken = "m7Xe_0qhlv8enPURlO7UYRSR1-3C7u-uOUkZtvZa";
               let tld = "piwzstoreee.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = ${botname}\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
  case 'd3': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c1812c92fb249258e67a28573ca34344";
               let apitoken = "mqAjTHuT_GsaZsWcIjbllV-rrrtJHwyVxVeYlL1A";
               let tld = "piwzpediaaa.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = ${botname}\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
  break       
  
  case 'd4': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3cea2e71ec2bc82ea7865da5999d04b1";
               let apitoken = "eyOrW0eUPe0VxhQzzubXhY1w8X_Z120crfqpsNwL";
               let tld = "piwzpanel.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = ${botname}\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
 case 'd5': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c2c8ddf4f1bfd0d0c11eb0ed83a634f9";
               let apitoken = "RHmElwWM5pEb3HsWi82uramdhi9wzDsaU8F9JV6F";
               let tld = "r0ulxye4.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = ${botname}\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break                                                                               
 
 case 'd6': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "7432f024eeeaa0367fd985a18b2729cc";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
               let tld = "lanzpanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
  break  
case 'd7': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "891a2e5d4ac5b3db4fbcef8d9088ad38";
               let apitoken = "V2BCJ-jhHXQlkN5-_Jv-CuXEtJbLT9fo7NWAlMK2";
               let tld = "cpanel-vip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
     case 'd8': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a0cef62d7194b16e1706f5d48c41129a";
               let apitoken = "_xnkxZ50i8J5p0Y148oSlomu0NoIt2mTGWxu0CsR"
               let tld = "kukurahost.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break 
 case 'd9': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5f4a582dd80c518fb2c7a425256fb491";
               let apitoken = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby"
               let tld = "tokopanellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break


case 'd10': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "15b97d8a42af1c00a70070e577ce7301";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ"
               let tld = "kiospanell.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case 'd11': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e60307683c18389584e9ae2f9fa707b2";
               let apitoken = "9hc8x5B4TewRTpXxETV_laVGksk3MyCfBXOgHgmg"
               let tld = "moon-offc.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case 'd12': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba364ec1df6998c10487aee2a61b7f0d";
               let apitoken = "hnM3i7bBHzcIRXqveYKR3KTnsfrkigkhar2vEUcP"
               let tld = "moon-offc.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case 'd13': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2feafa10ec4054af7cb04b18515013e5";
               let apitoken = "8WA6BgIuvFO5AL3xJZf3bsM0ts8aIZiFbxj90icK"
               let tld = "tokopanellmurah.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break


case 'd14': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2dc001900c742f289eef7dbae7ab784b";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ"
               let tld = "bisnispanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
                
case  'd15': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "77c6588b3b36e74d07538e62ef91d6ba";
               let apitoken = "SgON4r6174fMe3h3B9wyP3caEtwUIfnVuNvSpl1k"
               let tld = "tokopanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd16': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4049d75623d46e90d616fdf878a5ed84";
               let apitoken = "qwAWquCm1cqKEzZnZUEuAbfFq3PCOLleQZifxPog"
               let tld = "store-panel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd17': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "8080d914883ed0b9e17d281f593df945";
               let apitoken = "BP2uUPgVfrM4pHW_ivo2AawAyiLqOMYoLYyS2BF7"
               let tld = "sellerpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case  'd18': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cada0ecef8f1e8d904435d469aef1b05";
               let apitoken = "54kx4yvi3CBqomC99WSaqZo9tbxHoe9U-ncBIVMx"
               let tld = "mypanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd19': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d318f96a6327c5340d136415e860f545";
               let apitoken = "RTe9hBdh_-nt0wzOvYN183JyQC011yaiodQ7Po1b"
               let tld = "kangpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd20': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "8132a433dc4eea653e38e168f2f45fc0";
               let apitoken = "33F2gfJ0cEoLv4NlEqLYGd6Ahc5_dzyUH_ClKuX_"
               let tld = "jasapanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd21': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5024bc4a02924cf69ddf4dfa6ee96069";
               let apitoken = "OajJ0jtCB0FTFwfdiTB_ktzNKFWAmsENFdlE4Hvd"
               let tld = "dewapanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break                  
case  'd22': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "98264c6c53c5bc9080230b077422d748";
               let apitoken = "1W9IHC9mLAKj8hQaMjczy0gA3Of7kPjJ3gAvTlnZ"
               let tld = "adminpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd23': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9b28f4ad0f06b36dd94cc56b01efc19a";
               let apitoken = "bMiZlOhkSzozUq1jMLO5bk4OeZr0GllyVtVWX1F4"
               let tld = "plerkuda.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd24': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2bb49b2de0cbf75c0462ed90d7d333e1";
               let apitoken = "lZ0XMXdnwp2L1DsI3f8frkPwvkQ6ENee2PnAfOsY"
               let tld = "cafegt.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd25': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d28c394ba64bf4ecfec1917829d8bced";
               let apitoken = "86ZA4NPGG6ijzlhuRKqc3X3qbH8mgvlzOPsrBApB"
               let tld = "shopwebsite.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case  'd26': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "946d5f35d0657cb8bfa442675b37ec42";
               let apitoken = "9IJl3ihBj_McQT6aG0D5MBFQH3YmB1PO7Z34XLr1"
               let tld = "sellerpanel-vvip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case  'd27': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4a4818365a74cf535d5b6f16dc62481d";
               let apitoken = "8-zhtsEm27FKPsczF3ro2PipM9i1n8k2rzCyOmvj"
               let tld = "ekioffcial.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break      

case  'd28': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "725378afbddffcc9e2c2992ba4232421";
               let apitoken = "MAe0GRPPRxS77oPYXTvImAKNTWit55R63AxuNT1B"
               let tld = "panelku-jasteb.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case  'd29': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "705b7ba658c5f033b91b1b7985f53244";
               let apitoken = "Ucf7fYmbCbDuNDGJ1J3KE8noSS3tgNHRQMxCJZk8"
               let tld = "pannel-pvrt.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd30': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "128fe0f8f9f09ecce73e5c34c6a31444";
               let apitoken = "5Mp2HncEE28HzVOpjmvrM_vU1UuWPvGEhhbJ4h6-"
               let tld = "sellerpanell.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd31': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "bc4748bba0b75e8273b04c3dea2dc59c";
               let apitoken = "JKZrkLdzdd7hmT9XVcsXpoVsXmWQ61bQN6r2_oq-"
               let tld = "pannelkuu.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd32': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3f5d5b68ea37bf7b8a10a9a96b544622";
               let apitoken = "fTKJuqbdce2A-9oeoqhJ9vLfo-EUnLqCCz9OAmKG"
               let tld = "server-smtp1.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break   
case  'd33': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a0206c68c9b356bdf0a96fbb5d61fbdc";
               let apitoken = "8-zhtsEm27FKPsczF3ro2PipM9i1n8k2rzCyOmvj"
               let tld = "my-website.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd34': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80e208bb5900abc50d4483bdb8590d42";
               let apitoken = "3XpwIR878Fi0IoVyaJl1ggGgyJXuy_pB3g0M8pjz"
               let tld = "smtp1.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd35': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3d253d788a5ed8fecddba97d3e52cf65";
               let apitoken = "_Y8BhYGmFb_aJEWHml7oQ2j70GPE6raCm_Ud99Yl";
               let tld = "mefahri.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd36': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "583196d8ec9e16fbe5bbe944efbb3d8a";
               let apitoken = "jZ4EuzWs4-ktGcfkwht3NbZfGlZm_VnWjtYyG-1U";
               let tld = "mefahri.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd37': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "edf8e5a66859e6a1f8ccbde07c415082";
               let apitoken = "p0gm6UzsPw0Y0eudhfDr1ZBvV_WjX9eMpTp4ksXZ"
               let tld = "didindev.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
        
case 'd38': {
                if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "eb6a14586a737768de8eb75e417be305";
               let apitoken = "WG-rSvje9yH9EXKyMZqyBP8yUtpWmUoQmsoxfpnO";
               let tld = "ruztanxd.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${namabot}
┗━━━━━━━━━━━━━━━━━━━
*𝙎𝙪𝙥𝙥𝙤𝙧𝙩 𝙬𝙞𝙣𝙙𝙖 𝙩𝙚𝙧𝙪𝙨 𝙮𝙖𝙖 >_<*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'd39': {
                        if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0cf0d98bcb60af202ad5816f672ca471";
               let apitoken = "f5ApkZpsRdJxTuA0xlfr9vCJ1bknGAAJ7rv10H_f";
               let tld = "sellerpanell-store.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 @𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           
 case 'd40': {
                    if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "583196d8ec9e16fbe5bbe944efbb3d8a";
               let apitoken = "jZ4EuzWs4-ktGcfkwht3NbZfGlZm_VnWjtYyG-1U";
               let tld = "rafeyfah.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break

case 'd41': {
                    if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "144f7c48ca035135390fe5adb49d642f";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "kayyoffc.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 
case 'd42': {
                    if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4fc8192dd8160307100b207d308da80c";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "kayypedia.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 
case 'd43': {
                    if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a1fa0ffcde9549bd36e9ae3de4b66b4a";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "panell.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 
case 'd44': {
                    if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a112599ddfdd5a2bac5dc91864020015";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "panellstoree.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 
case 'd45': {
                    if (!Access) return reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fc1ee81d43fce2e42edcef622e5cf370";
               let apitoken = "F3bZqMzcRMxxinfwtcLVSLkfu85eNyxQ52JvDSyu";
               let tld = "windastore.live";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 
case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
          const zanspiwfeature = () =>{
const data = fs.readFileSync("./start/system.js", 'utf-8');
        const caseMatches = data.match(/case\s+['"`]?\w+['"`]?\s*:/g);
     return caseMatches ? caseMatches.length : 0
        }
            reply(`Total Features ${zanspiwfeature()}`)
        break

            default:
if (budy.startsWith('>')) {
if (!Access) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${text}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!Access) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}

        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
