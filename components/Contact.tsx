'use client'
import { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Phone } from 'lucide-react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string|null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const phone = String(formData.get('phone') || '')
    const message = String(formData.get('message') || '')

    if (!name || !phone) {
      setStatus('Будь ласка, заповніть імʼя та телефон.')
      return
    }
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message }),
      })
      if (!res.ok) throw new Error('Network error')
      setStatus('Дякуємо! Заявку надіслано. Ми звʼяжемось із вами найближчим часом у робочі години.')
      form.reset()
    } catch (err) {
      setStatus('На жаль, не вдалося надіслати. Спробуйте ще раз або зателефонуйте.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 rounded-2xl border border-gray-100 bg-gradient-to-tr from-brand/5 to-white p-6 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold">Запис на консультацію</h2>
            <p className="mt-3 text-gray-600">Залиште ваші дані — ми звʼяжемось якнайшвидше в робочі години.</p>
            <a href="tel:+380502626666" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-white hover:bg-brand/90">
              <Phone className="h-5 w-5" /> 050-262-66-66
            </a>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Імʼя *</label>
              <Input name="name" placeholder="Ваше імʼя" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Телефон *</label>
              <Input name="phone" placeholder="050-262-66-66" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Повідомлення (необовʼязково)</label>
              <Textarea name="message" placeholder="Коротко опишіть питання" />
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit" disabled={loading}>{loading ? 'Надсилання…' : 'Надіслати'}</Button>
              {status && <p className="text-sm text-gray-700">{status}</p>}
            </div>
            <p className="text-xs text-gray-500">Натискаючи «Надіслати», ви погоджуєтесь на обробку персональних даних.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
