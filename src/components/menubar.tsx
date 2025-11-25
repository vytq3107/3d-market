"use client"

import { ShoppingCart, User, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const categories = [
  { name: "Điện thoại", href: "#phones" },
  { name: "Laptop", href: "#laptops" },
  { name: "Đồ chơi", href: "#toys" },
  { name: "Xe", href: "#cars" },
]

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/home" className="flex items-center">
            <span className="text-2xl font-bold text-black">3D Store</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/home" className="text-black hover:text-black/70 transition">
              Trang chủ
            </Link>
            <div className="relative group">
              <button className="text-black hover:text-black/70 transition flex items-center gap-1">
                Danh mục
                <span className="text-xs">▾</span>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-black/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="block px-4 py-2 text-black hover:bg-black/5 first:rounded-t-md last:rounded-b-md transition"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-black hover:bg-black/5 rounded-lg transition">
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="p-2 text-black hover:bg-black/5 rounded-lg transition">
              <User size={20} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-black hover:bg-black/5 rounded-lg transition"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-black/10 py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-black hover:bg-black/5 rounded-md transition">
              Home
            </Link>
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-black/70 mb-2">Danh mục</p>
              <div className="space-y-1 ml-4">
                {categories.map((cat) => (
                  <Link key={cat.name} href={cat.href} className="block py-1 text-black hover:text-black/70 transition">
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
