import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Target, Users, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

const organizationMembers = [
  { name: "Bapak Suharto", position: "Kepala Desa", period: "2019-2025" },
  { name: "Ibu Siti Aminah", position: "Sekretaris Desa", period: "2020-2026" },
  { name: "Bapak Ahmad Wijaya", position: "Kepala Urusan Pemerintahan", period: "2020-2026" },
  { name: "Bapak Bambang Sutrisno", position: "Kepala Urusan Pembangunan", period: "2020-2026" },
  { name: "Ibu Dewi Sartika", position: "Kepala Urusan Kesejahteraan", period: "2020-2026" },
  { name: "Bapak Eko Prasetyo", position: "Kepala Urusan Keuangan", period: "2020-2026" },
]

export default function ProfilPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Profil Desa</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mengenal lebih dekat Dusun Yogyakarta melalui visi misi, struktur organisasi, dan informasi wilayah
        </p>
      </div>

      {/* Visi & Misi */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-600" />
              Visi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Menjadi desa yang maju, mandiri, dan sejahtera dengan tetap melestarikan nilai-nilai budaya lokal
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              Misi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Mengembangkan potensi ekonomi desa berbasis kearifan lokal</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Melestarikan budaya dan tradisi yang ada</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Meningkatkan infrastruktur dan fasilitas umum</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Menciptakan tata kelola pemerintahan yang transparan dan akuntabel</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Struktur Organisasi */}
      <Card className="mb-16">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Users className="w-5 h-5 text-green-600" />
            Struktur Organisasi
          </CardTitle>
          <div className="flex justify-center mt-4">
            <Link href="/profil/struktur">
              <Button variant="outline" size="sm">
                selengkapnya
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {organizationMembers.map((member, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium text-sm mb-1">{member.position}</p>
                <Badge variant="secondary" className="text-xs">
                  {member.period}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sejarah Desa */}
      <Card className="mb-16">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 text-green-600" />
            Sejarah Desa
          </CardTitle>
          <div className="flex justify-center mt-4">
            <Link href="/profil/sejarah">
              <Button variant="outline" size="sm">
                selengkapnya
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">
            Dusun Yogyakarta didirikan pada tahun 1850 oleh sekelompok pendatang dari berbagai daerah di Pulau Jawa.
            Nama "Yogyakarta" diambil dari bahasa Sanskerta "Ayogyakarta" yang berarti "kota yang layak untuk makmur".
            Pada masa kolonial Belanda, desa ini menjadi salah satu pusat pertanian padi dan tebu di wilayah Yogyakarta.
            Setelah kemerdekaan Indonesia, desa ini terus berkembang dengan mempertahankan karakteristik budaya Jawa
            yang kental. Hingga saat ini, Dusun Yogyakarta telah mengalami berbagai transformasi modern namun tetap
            mempertahankan nilai-nilai tradisional dan kearifan lokal yang menjadi ciri khasnya.
          </p>
        </CardContent>
      </Card>

      {/* Informasi Wilayah */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" />
            Informasi Wilayah
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Peta Lokasi */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Peta Lokasi Desa</h3>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Peta Lokasi Desa</p>
                  <p className="text-sm">Koordinat: -7.7956°S, 110.3695°E</p>
                </div>
              </div>
            </div>

            {/* Detail Informasi */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Detail Wilayah</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Luas Wilayah:</span>
                  <span className="font-medium">15.5 km²</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Batas Utara:</span>
                  <span className="font-medium">Desa Sleman Utara</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Batas Selatan:</span>
                  <span className="font-medium">Desa Bantul Selatan</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Batas Timur:</span>
                  <span className="font-medium">Desa Klaten Timur</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Batas Barat:</span>
                  <span className="font-medium">Desa Kulon Progo Barat</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Jumlah Penduduk:</span>
                  <span className="font-medium">8.542 jiwa</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Jumlah KK:</span>
                  <span className="font-medium">2.156 KK</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Kepadatan Penduduk:</span>
                  <span className="font-medium">551 jiwa/km²</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
