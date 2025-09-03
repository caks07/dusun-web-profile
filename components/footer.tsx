import { MapPin, Phone, Mail, Clock, Instagram, Contact2, PhoneCall } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Dusun Pogung Lor</h3>
                <p className="text-gray-400 text-sm">Website Resmi</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Website Resmi Pogung Lor sebagai sarana informasi, budaya, dan potensi bagi warga serta masyarakat luas.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Alamat</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Jl. Pogung Lor</p>
                  <p className="text-gray-300 text-sm">Pogung Lor, Sinduadi, Kec. Mlati, Kab. Sleman, Daerah Istimewa Yogyakarta</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Important Contacts */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontak Penting</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <PhoneCall className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div className="flex flex-col">
                    <p className="text-gray-400 text-xs">Kepala Dukuh Pogung Lor</p>
                    <p className="text-gray-300 text-sm">08122771616</p>
                  </div>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneCall className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div className="flex flex-col">
                    <p className="text-gray-400 text-xs">Ketua Pemuda Pemudi Pogung Lor</p>
                    <p className="text-gray-300 text-sm">082227676377</p>
                  </div>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div className="flex flex-col">
                    <p className="text-gray-400 text-xs">Instagram</p>
                    <p className="text-gray-300 text-sm">@pogunglor</p>
                  </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div className="flex flex-col">
                    <p className="text-gray-400 text-xs">Pengembang Website</p>
                    <p className="text-gray-300 text-sm">argawicaksana07@gmail.com</p>
                  </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Dusun Pogung Lor. Semua hak cipta dilindungi.</p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
