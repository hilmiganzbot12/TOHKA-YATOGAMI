let handler = async m => m.reply(`
https://tinyurl.com/y7ummo5w
*《DIAHARAPKAN UNTUK MEMATUHI PERATURAN GRUP ITU》*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
