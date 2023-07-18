let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(`Mau jadi owner ku?
Berikut Harga Untuk Jadi Owner Aku !

1 Bulan : 5.000
3 Bulan : 10.000
7 Bulan : 20.000

Pembayaran Bisa Melalui :
Dana, Ovo, Gopay, Pulsa Telkomsel, Qris

Minat? Hubungi Admin : 081346214917`)
}

handler.customPrefix = /^(jadiowner)$/i
handler.command = new RegExp
export default handler

