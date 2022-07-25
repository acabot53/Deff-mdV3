/**
 - Create By ALEX TZ STORE
 - Contact Me on https://wa.me/+6283167581315
 - Follow iG : @alextz_store
*/

const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = fs.readFileSync("./worker/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./worker/media/image/thumb.jpg")
global.err4r = fs.readFileSync("./worker/media/image/thumb.jpg")
global.owner = ['62895330437426','6283167581315']
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname = "✞︎𝑷𝒆𝒎𝒃𝒖𝒂𝒕 𝑺𝒕𝒊𝒌𝒆𝒓 𝐀𝐥𝐞𝐱 𝐭𝐳 𝑺𝐭𝐨𝐫𝐞❥︎ 🅵︎🅾︎🅻︎🅾︎🆆︎ 🅸︎🅶︎ : @𝙖𝙡𝙚𝙭𝙩𝙯_𝙨𝙩𝙤𝙧𝙚 𝒀𝒈 𝑮𝒂𝒏𝒕𝒊 𝑾𝒎 𝑮𝒖𝒂 𝑫𝒐𝒂𝒊𝒏 𝑴𝒂𝒏𝒅𝒖𝒍"
global.packname2 = "BY ALEXBOTZ ~ ALEX"
global.author = "ALEX"
global.sessionName = "session"
global.linkgrupss = "https://chat.whatsapp.com/KHyGMBYD9OG1lvgGHFYzKy"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})