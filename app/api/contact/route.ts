import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, phone, message } = body || {}
  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  const text = `🔔 Нова заявка з сайту\n\nІм'я: ${name}\nТелефон: ${phone}\nПовідомлення: ${message || '(немає)'}`

  try {
    if (token && chatId) {
      const url = `https://api.telegram.org/bot${token}/sendMessage`
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      })
      if (!res.ok) {
        console.error('Telegram error', await res.text())
      }
    } else {
      console.log('Mock send to Telegram:', text)
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
