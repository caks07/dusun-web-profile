import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Target, Users, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

const organizationMembers = [
  { name: "Bapak Nurbatin Kuncoro, SE.", position: "Kepala Dusun", period: "" },
  { name: "Mas Guntur Megananto", position: "Ketua Forum Pemuda Pemudi Pogung Lor", period: "" },
  { name: "Bapak H. Sukemi Dwi Winanto", position: "Ketua RW 46", period: "2020-2025" },
  { name: "Bapak Adinah", position: "Ketua RW 47", period: "2020-2025" },
  { name: "Bapak Ir. Supriyadi, Msc., A.Md.", position: "Ketua RW 48", period: "2020-2025" },
  { name: "Bapak Ir. Haryono Kusumo, M.M.", position: "Ketua RW 52", period: "2020-2025" },
]

export default function ProfilPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Profil Dusun Pogung Lor</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mengenal lebih dekat Dusun Pogung Lor melalui visi misi, struktur organisasi, dan informasi wilayah
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
            Maju Bersama Menuju Sejahtera
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
                <span>Mengayomi dan melindungi masyarakat untuk menuju kehidupan yang harmonis</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Mengembangkan potensi ekonomi dusun berbasis kearifan lokal</span>
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
          Berdasarkan cerita rakyat setempat, nama Pogung memiliki dua versi asal-usul. Pertama, nama ini berasal dari istilah Belanda untuk ketela, yaitu 'pohung', yang kemudian diserap menjadi Pogung. Kedua, legenda lain menyebut nama Pogung berasal dari suara alat musik gamelan "Pong... Gung..." yang dimainkan saat pembangunan dusun oleh Ki Dalang.

Sedangkan kata "Lor" ditambahkan untuk menunjukkan bahwa dusun ini terletak di utara, karena "lor" dalam bahasa Jawa memang berarti utara.
          </p>
        </CardContent>
      </Card>
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
              <h3 className="font-semibold text-lg mb-4">Peta Lokasi Pogung Lor</h3>
              <div className="bg-gray-100 rounded-lg h-64 overflow-hidden">
                <a 
                  href="https://share.google/bQQjB3WJ6Ho0j92PK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img 
                    src="https://i.pinimg.com/736x/47/39/5c/47395caa5f3d97ee323f2fee34dfb58b.jpg" 
                    alt="Peta Lokasi Pogung Lor" 
                    className="w-full h-full object-cover" 
                  />
                </a>
              </div>
              <div className="text-center text-gray-500 mt-2">
                <p className="text-sm">Koordinat: -7.7536454°S, 110.3768254°E</p>
              </div>
            </div>

            {/* Detail Informasi */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Detail Wilayah</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Batas Utara:</span>
                  <span className="font-medium">Kalurahan Sariharjo</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Batas Selatan:</span>
                  <span className="font-medium">Padukuhan Pogung Kidul</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Batas Timur:</span>
                  <span className="font-medium">Kalurahan Condongcatur</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Batas Barat:</span>
                  <span className="font-medium">Padukuhan Gemawang</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Jumlah Penduduk:</span>
                  <span className="font-medium">3039 jiwa</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Jumlah KK:</span>
                  <span className="font-medium">1019 KK</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
