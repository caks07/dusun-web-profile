import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, MapPin, GraduationCap, Heart, ArrowRight } from "lucide-react"

const facilities = [
  { name: "Balai Desa", icon: Building, color: "bg-green-100 text-green-600" },
  { name: "Sekolah Dasar", icon: GraduationCap, color: "bg-blue-100 text-blue-600" },
  { name: "Puskesmas", icon: Heart, color: "bg-red-100 text-red-600" },
  { name: "Masjid Jami'", icon: MapPin, color: "bg-purple-100 text-purple-600" },
]

export default function PublicFacilities() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Umum</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600">Berbagai fasilitas untuk mendukung kehidupan masyarakat desa.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {facilities.map((facility, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className={`w-16 h-16 ${facility.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <facility.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">{facility.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/profil/fasilitas">
          <Button variant="outline" className="group bg-transparent">
            Lihat Semua Fasilitas
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
