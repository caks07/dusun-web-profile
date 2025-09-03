"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, GraduationCap, Heart, MapPin, Users, Clock, Phone } from "lucide-react"
import { fetchFacilityData, transformFacilityData } from "@/lib/google-sheets-multi"

interface Facility {
  id: string
  name: string
  category: string
  description: string
  location: string
  contact: string
  imageUrl: string
}

// Icon mapping berdasarkan kategori
const getIconForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'pemerintahan':
      return Building
    case 'pendidikan':
      return GraduationCap
    case 'kesehatan':
      return Heart
    case 'keagamaan':
      return MapPin
    case 'ekonomi':
      return Users
    case 'transportasi':
      return MapPin
    default:
      return Building
  }
}

// Color mapping berdasarkan kategori
const getColorForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'pemerintahan':
      return "text-green-600 bg-green-100"
    case 'pendidikan':
      return "text-blue-600 bg-blue-100"
    case 'kesehatan':
      return "text-red-600 bg-red-100"
    case 'keagamaan':
      return "text-purple-600 bg-purple-100"
    case 'ekonomi':
      return "text-yellow-600 bg-yellow-100"
    case 'transportasi':
      return "text-indigo-600 bg-indigo-100"
    default:
      return "text-gray-600 bg-gray-100"
  }
}

export default function FasilitasPage() {
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        // Fetch data from Google Sheets
        const facilityData = await fetchFacilityData()
        const transformedData = transformFacilityData(facilityData)

        setFacilities(transformedData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching facilities from Google Sheets:", error)

        // Fallback to placeholder data
        const placeholderFacilities: Facility[] = [
          {
            id: "1",
            name: "Balai Desa",
            category: "Pemerintahan",
            description: "Pusat pemerintahan dan pelayanan administrasi warga. Dilengkapi dengan aula serbaguna untuk berbagai kegiatan masyarakat.",
            location: "Jl. Raya Desa No. 1",
            contact: "(0274) 123-4567",
            imageUrl: "/placeholder.svg?height=300&width=400"
          },
          {
            id: "2",
            name: "Sekolah Dasar Negeri",
            category: "Pendidikan",
            description: "Menyediakan pendidikan dasar berkualitas bagi anak-anak dusun. Memiliki 6 ruang kelas, perpustakaan, dan lapangan olahraga.",
            location: "Jl. Pendidikan No. 10",
            contact: "(0274) 123-4568",
            imageUrl: "/placeholder.svg?height=300&width=400"
          },
        ]
        setFacilities(placeholderFacilities)
        setLoading(false)
      }
    }

    fetchFacilities()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Fasilitas Umum Dusun</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Memuat fasilitas...</p>
        </div>
        <div className="space-y-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Fasilitas Umum Dusun Pogung Lor</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Sarana dan prasarana yang kami sediakan untuk kenyamanan dan kemajuan bersama.
        </p>
      </div>

      <div className="space-y-12">
        {facilities.map((facility, index) => {
          const IconComponent = getIconForCategory(facility.category)
          const colorClass = getColorForCategory(facility.category)

          return (
            <Card key={facility.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative">
                <iframe
                src={facility.imageUrl.replace('/view?usp=sharing', '/preview') || "/placeholder.svg"}
                title={facility.name}
                allowFullScreen
                className="w-full h-64 lg:h-full border-none object-cover"
                 />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${colorClass} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-bold text-gray-800 mb-3">{facility.name}</CardTitle>
                    <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <MapPin className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-700">Alamat:</span>
                          <p className="text-gray-600">{facility.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <Phone className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-700">Kontak:</span>
                          <p className="text-gray-600">{facility.contact}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
