import React from 'react'

const services = [
  { title: 'Single page website', desc: 'All info on one modern scrollable page. Perfect for shops.' },
  { title: 'Menu / Gallery', desc: 'Beautiful product & service gallery.' },
  { title: 'WhatsApp orders', desc: 'Direct WhatsApp ordering button and contact.' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container">
        <h3 className="text-2xl font-bold mb-6">Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border rounded-lg p-6 hover:shadow-lg transition">
              <h4 className="font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}