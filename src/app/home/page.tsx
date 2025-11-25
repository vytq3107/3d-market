import Menubar from "@/components/menubar"
import HotPick from "@/components/hot-pick"
import Catalog from "@/components/catalog"

export const metadata = {
  title: "3D Product Showcase - Khám phá sản phẩm 3D",
  description: "Trải nghiệm tương tác với mô hình 3D của các sản phẩm công nghệ, đồ chơi và hơn thế nữa.",
}

export default function HomePage() {
  return (
    <div className="bg-white">
      <Menubar />

      {/* Hero Section */}
      <section className="min-h-screen bg-white flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <p className="text-sm font-semibold text-black/60 uppercase tracking-widest mb-4">Chào mừng</p>
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Khám phá sản phẩm
            <br />
            <span className="inline-block mt-2">với trải nghiệm 3D</span>
          </h1>
          <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tương tác với mô hình 3D chi tiết, xoay, phóng to để hiểu rõ từng chi tiết sản phẩm
          </p>
          <button className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition">
            Bắt đầu khám phá
          </button>
        </div>
      </section>

      <HotPick />
      <Catalog />

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">3D Store</h4>
              <p className="text-white/70 text-sm">Nền tảng khám phá sản phẩm với công nghệ 3D tương tác</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Danh mục</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#phones" className="hover:text-white transition">
                    Điện thoại
                  </a>
                </li>
                <li>
                  <a href="#laptops" className="hover:text-white transition">
                    Laptop
                  </a>
                </li>
                <li>
                  <a href="#toys" className="hover:text-white transition">
                    Đồ chơi
                  </a>
                </li>
                <li>
                  <a href="#cars" className="hover:text-white transition">
                    Xe
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Công ty</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pháp lý</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Điều khoản
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Riêng tư
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>&copy; 2025 3D Store. Tất cả quyền được bảo lưu.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
