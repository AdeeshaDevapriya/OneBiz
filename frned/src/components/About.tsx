import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-3">About our service</h2>
          <p className="text-gray-600 mb-4">We build modern single-page websites optimized for mobile and speed. Perfect for salons, restaurants, small shops and freelancers. Fast delivery, friendly price.</p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Responsive design (mobile-first)</li>
            <li>WhatsApp contact button & contact form</li>
            <li>Image gallery and services section</li>
            <li>Optional Google Map / SEO guidance</li>
          </ul>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="/Owner.JPG" alt="owner" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}