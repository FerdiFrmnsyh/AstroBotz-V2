let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 DONASI 𝐁𝐎𝐓 』––––––❏*

⏣ ᴛᴇʟᴋᴏᴍsᴇʟ: [ Chat Onwer Kak ]
⏣ ɪɴᴅᴏsᴀᴛ: [ Chat Owner Kak ]
⏣ Axis: [ Chat Owner Kak ]

⫹⫺ ᴅᴏɴᴀsɪ • ɴᴏɴ ᴘᴜʟsᴀ ⫹⫺
⏣ ᴅᴀɴᴀ: [ Chat Owner Kak ] 
⏣ ᴏᴠᴏ: [ Chat Owner Kak ]
⏣ ɢᴏᴘᴀʏ: [ Chat Owner Kak ]

ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ ʙᴀɢɪ ʏᴀɴɢ sᴜᴅᴀʜ ᴅᴏɴᴀsɪ ᴋᴇᴘᴀᴅᴀ ʙᴏᴛ

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
         ❨ ${namebot} ❩

${botdate}
`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/e0f16596f8876fdb28cb2.jpg', null, caption, m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(donasi|dns)$/i;

handler.register = false
export default handler