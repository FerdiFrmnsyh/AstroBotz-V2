
const timeout = 604800000

let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastmulung + 604800000
  if (new Date - global.db.data.users[m.sender].lastmulung< 604800000) throw `📮ᴀɴᴅᴀ sᴜᴅᴀʜ ᴍᴇʀᴀᴍᴘᴏᴋ ʙᴀɴᴋ\nᴛᴜɴɢɢᴜ sᴇʟᴀᴍᴀ ⏲️ ${msToTime(time - new Date())} ʟᴀɢɪ`
	let botolnye = `${Math.floor(Math.random() * 30000)}`.trim()
	let kalengnye = `${Math.floor(Math.random() * 999)}`.trim()
	let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
	global.db.data.users[m.sender].money += botolnye * 1
	global.db.data.users[m.sender].exp += kalengnye * 1
	global.db.data.users[m.sender].kardus += kardusnye * 1
	global.db.data.users[m.sender].lastmulung = new Date * 1
  m.reply(`sᴇʟᴀᴍᴀᴛ ᴋᴀᴍᴜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ : \n💰+${botolnye} ᴍᴏɴᴇʏ\n📦+${kardusnye} ᴋᴀʀᴅᴜs\n✨+${kalengnye} ᴇxᴘ`)
  setTimeout(() => {
					conn.reply(m.chat, `ᴄᴏʟᴅᴏᴡɴ sᴜᴅᴀʜ ʙᴇʀᴀᴋʜɪʀ,ʏᴜᴋ ᴍᴀʟɪɴɢ ʟᴀɢɪ 👋…`, m)
					}, timeout)
}
handler.help = ['maling']
handler.tags = ['rpg']
handler.command = /^(maling)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

export default handler 

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}