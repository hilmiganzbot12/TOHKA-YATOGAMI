let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═══ *〘 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 〙*
║ ┅ ๑————————————๑

PAYMENT BY Black BotZ Official



🏧 BANK

1. BRI 

	ㅁ 3653 0103 1536 539	

💰 E-MONEY

1. GOPAY

	ㅁ 0821 4334 9069

2. OVO

	ㅁ 0821 4334 9069

3. DANA

	ㅁ 0821 4334 9069

	

Bank BRI 

   A/N TYAS HARYATI     

📲 PULSA

Tidak tersedia

	

Sebelum melakukan pembayaran ada baiknya anda menghubungi owner terlebih dahulu!


▌│█║▌║▌║║▌║▌║█│▌
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Payment')).buffer(), ext, `Tohka Yatogami`, 'Nomor Owner', '.owner', 'Sewa Bot', '.sewa', m)

}
handler.help = ['payment']
handler.tags = ['owner']
handler.command = /^(payment)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
