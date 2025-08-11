"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, FileText, Users, Home, MilkIcon as Cow } from "lucide-react"
import { fetchRegulationData, transformRegulationData } from "@/lib/google-sheets-multi"

interface Regulation {
  id: string
  title: string
  description: string
  category: string
  fileUrl: string
  views: number
  publishedAt: string
}

// Icon mapping berdasarkan kategori
const getIconForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'lingkungan':
      return AlertTriangle
    case 'keamanan':
      return Users
    case 'pembangunan':
      return Home
    case 'peternakan':
      return Cow
    default:
      return AlertTriangle
  }
}

// Color mapping berdasarkan kategori
const getColorForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'lingkungan':
      return "text-red-600 bg-red-100"
    case 'keamanan':
      return "text-blue-600 bg-blue-100"
    case 'pembangunan':
      return "text-green-600 bg-green-100"
    case 'peternakan':
      return "text-orange-600 bg-orange-100"
    default:
      return "text-gray-600 bg-gray-100"
  }
}

export default function PeraturanPage() {
  const [regulations, setRegulations] = useState<Regulation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRegulations = async () => {
      try {
        // Fetch data from Google Sheets
        const regulationData = await fetchRegulationData()
        const transformedData = transformRegulationData(regulationData)

        setRegulations(transformedData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching regulations from Google Sheets:", error)

        // Fallback to placeholder data
        const placeholderRegulations: Regulation[] = [
          {
            id: "1",
            title: "Larangan Membuang Sampah Sembarangan",
            description: "Setiap warga dilarang keras membuang sampah di sungai, selokan, jalan, atau area publik lainnya. Sampah harus dikelola di tempat pembuangan sampah yang telah disediakan di masing-masing RT. Pelanggaran akan dikenakan sanksi sosial berupa kerja bakti membersihkan area desa selama 1 hari.",
            category: "Lingkungan",
            fileUrl: "",
            views: 0,
            publishedAt: "2024-01-01"
          },
          {
            id: "2",
            title: "Wajib Lapor Tamu 1x24 Jam",
            description: "Setiap warga yang menerima tamu yang menginap lebih dari 1x24 jam wajib melaporkan identitas tamu tersebut kepada Ketua RT setempat. Hal ini bertujuan untuk menjaga keamanan dan ketertiban bersama.",
            category: "Keamanan",
            fileUrl: "",
            views: 0,
            publishedAt: "2024-01-01"
          },
        ]
        setRegulations(placeholderRegulations)
        setLoading(false)
      }
    }

    fetchRegulations()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Peraturan Desa</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Memuat peraturan...</p>
        </div>
        <div className="space-y-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Peraturan Desa</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tata tertib yang disepakati bersama demi mewujudkan lingkungan yang aman, bersih, dan harmonis.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {regulations.map((regulation, index) => {
          const IconComponent = getIconForCategory(regulation.category)
          const colorClass = getColorForCategory(regulation.category)

          return (
            <Card key={regulation.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${colorClass} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{regulation.title}</h2>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-20">
                <p className="text-gray-600 leading-relaxed">{regulation.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Legal Basis */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            Dasar Hukum
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">
            Semua peraturan ini disusun berdasarkan Musyawarah Desa tanggal 1 Januari 2024 dan disetujui oleh seluruh
            perwakilan warga. Mari kita patuhi bersama untuk kemajuan Dusun Yogyakarta.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
