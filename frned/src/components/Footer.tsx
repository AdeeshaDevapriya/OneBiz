import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 bg-white border-t">
      <div className="container flex items-center justify-between">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} gooky. All rights reserved.</div>
        <div className="text-sm">Built with ♥ by AD</div>
      </div>
    </footer>
  )
}