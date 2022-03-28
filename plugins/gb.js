let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Waduh Sc Private Bos!, Kalau Mau Minta Owner Aja*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Madhang:v*', 'status@broadcast') 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler
