"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"

const hotPickProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "29.990.000 đ",
    image: "/iphone-15-pro-3d.jpg",
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: "45.990.000 đ",
    image: "/macbook-pro-3d.jpg",
  },
  {
    id: 3,
    name: "iPad Air",
    price: "18.990.000 đ",
    image: "/ipad-air-3d.jpg",
  },
  {
    id: 4,
    name: "Apple Watch",
    price: "9.990.000 đ",
    image: "/apple-watch-3d.jpg",
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: "5.990.000 đ",
    image: "/airpods-pro-3d.jpg",
  },
]

export default function HotPick() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm font-semibold text-black/60 uppercase tracking-wider">Nổi bật</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">Sản phẩm đề xuất</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-black text-white hover:bg-black/90 rounded-full transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-black text-white hover:bg-black/90 rounded-full transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4">
          {hotPickProducts.map((product) => (
            <div key={product.id} className="flex-none w-56 cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg bg-black/5 aspect-square mb-4 group-hover:bg-black/10 transition">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-black">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
