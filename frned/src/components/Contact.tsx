import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now we only simulate submit. Later connect EmailJS or Formspree.
    setSent(true)
    setTimeout(() => {
      setName('')
      setEmail('')
      setMessage('')
      setSent(false)
      alert('Message sent (demo). Replace with EmailJS/Formspree integration in production.')
    }, 800)
  }

  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container max-w-2xl">
        <h3 className="text-2xl font-bold mb-4">Contact</h3>
        <p className="text-gray-600 mb-6">Fill the form or hit WhatsApp to discuss your site.</p>

        <form onSubmit={submit} className="grid gap-4">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="p-3 rounded border" required />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" className="p-3 rounded border" />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message / requirements" className="p-3 rounded border h-32" />

          <div className="flex items-center gap-3">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
            <a href="https://wa.me/947XXXXXXXX" className="inline-block border border-green-600 text-green-600 px-4 py-2 rounded">WhatsApp</a>
            {sent && <div className="text-sm text-gray-600">Sending...</div>}
          </div>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          <div>Phone: <a href="tel:+947XXXXXXXX" className="text-blue-600">+94 763748420</a></div>
          <div>Address: Malabe, Colombo</div>
        </div>
      </div>
    </section>
  )
}