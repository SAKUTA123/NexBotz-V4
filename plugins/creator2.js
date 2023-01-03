let handler = function (m) {
   this.sendContact(m.chat, '6287760550924', 'Leon Nob', m)
  conn.sendContact(m.chat, '6287760550924', 'Leon Nob', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(kontak)$/i

module.exports = handler
