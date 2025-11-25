"use client"

import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: "phones",
    name: "Điện thoại",
    icon: "📱",
    products: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Điện thoại ${i + 1}`,
      price: `${10 + i}.990.000 đ`,
      image: `/placeholder.svg?height=200&width=150&query=phone-${i + 1}-3d`,
    })),
  },
  {
    id: "laptops",
    name: "Laptop",
    icon: "💻",
    products: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Laptop ${i + 1}`,
      price: `${20 + i * 2}.990.000 đ`,
      image: `/placeholder.svg?height=200&width=150&query=laptop-${i + 1}-3d`,
    })),
  },
  {
    id: "toys",
    name: "Đồ chơi",
    icon: "🧸",
    products: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Đồ chơi ${i + 1}`,
      price: `${1 + i * 0.5}.990.000 đ`,
      image: `/placeholder.svg?height=200&width=150&query=toy-${i + 1}-3d`,
    })),
  },
  {
    id: "cars",
    name: "Xe",
    icon: "🚗",
    products: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Xe ${i + 1}`,
      price: `${50 + i * 5}.990.000 đ`,
      image: `/placeholder.svg?height=200&width=150&query=car-${i + 1}-3d`,
    })),
  },
]

export default function Catalog() {
  return (
    <section className="bg-white py-20">
      {categories.map((category) => (
        <div key={category.id} id={category.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-black">{category.name}</h3>
              <p className="text-black/60 mt-1">Khám phá chi tiết sản phẩm với mô hình 3D tương tác</p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-6 min-w-full">
              {category.products.slice(0, 3).map((product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="flex-none w-48 group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-black/5 aspect-square mb-3 group-hover:bg-black/10 transition">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <h4 className="font-semibold text-black mb-2 group-hover:text-black/70 transition">{product.name}</h4>
                  <p className="text-xl font-bold text-black">{product.price}</p>
                </Link>
              ))}
              {/* Show more indicator */}
              <div className="flex-none w-48 flex items-center justify-center bg-black/5 rounded-lg hover:bg-black/10 transition cursor-pointer">
                <div className="text-center">
                  <p className="text-2xl font-bold text-black">+</p>
                  <p className="text-sm text-black/60">Xem thêm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

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
