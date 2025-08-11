import { MapPin, Phone, Mail, Clock } from "lucide-react"

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
                <h3 className="font-bold text-xl">Dusun Yogyakarta</h3>
                <p className="text-gray-400 text-sm">Website Resmi</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dusun Yogyakarta adalah komunitas yang berkomitmen untuk terus berkembang sambil melestarikan nilai-nilai
              luhur warisan leluhur dan tradisi budaya Jawa.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontak Resmi</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Jl. Raya Desa No. 123</p>
                  <p className="text-gray-300 text-sm">Yogyakarta, Indonesia 55281</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">(0274) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@dusunyogyakarta.id</span>
              </li>
            </ul>
          </div>

          {/* Important Contacts */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontak Penting</h4>
            <ul className="space-y-3">
              <li>
                <p className="text-gray-400 text-xs">Kepala Desa</p>
                <p className="text-gray-300 text-sm">081234567890</p>
              </li>
              <li>
                <p className="text-gray-400 text-xs">Sekretaris Desa</p>
                <p className="text-gray-300 text-sm">081234567891</p>
              </li>
              <li>
                <p className="text-gray-400 text-xs">Layanan Ambulans</p>
                <p className="text-gray-300 text-sm">081234567892</p>
              </li>
              <li>
                <p className="text-gray-400 text-xs">Pos Kamling</p>
                <p className="text-gray-300 text-sm">081234567893</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Dusun Yogyakarta. Semua hak cipta dilindungi.</p>
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
