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
}

// Icon mapping berdasarkan kategori
const getIconForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case "lingkungan":
      return AlertTriangle
    case "keamanan":
      return Users
    case "pembangunan":
      return Home
    case "peternakan":
      return Cow
    default:
      return FileText
  }
}

// Color mapping berdasarkan kategori
const getColorForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case "lingkungan":
      return "text-red-600 bg-red-100"
    case "keamanan":
      return "text-blue-600 bg-blue-100"
    case "pembangunan":
      return "text-green-600 bg-green-100"
    case "peternakan":
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
        const regulationData = await fetchRegulationData()
        const transformedData = transformRegulationData(regulationData)
        setRegulations(transformedData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching regulations from Google Sheets:", error)

        // fallback dummy data
        const placeholderRegulations: Regulation[] = [
          {
            id: "1",
            title: "Penghuni Sewa Di Pogung Lor",
            description:
              "Wajib menyerahkan foto copy KTP (identitas pribadi) & nomor handphone kepada pemilik rumah sewa pada saat pertama kali menghuni rumah sewa.",
            category: "Lingkungan",
          },
          {
            id: "2",
            title: "Wajib Lapor Tamu 1x24 Jam",
            description:
              "Setiap warga yang menerima tamu yang menginap lebih dari 1x24 jam wajib melaporkan identitas tamu tersebut kepada Ketua RT setempat.",
            category: "Keamanan",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Peraturan Dusun Pogung Lor</h1>
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
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Peraturan Dusun Pogung Lor</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tata tertib yang disepakati bersama demi mewujudkan lingkungan yang aman, bersih, dan harmonis.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {regulations.map((regulation) => {
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
                  <h2 className="text-xl font-bold text-gray-800">{regulation.title}</h2>
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
        <p className="text-gray-600 leading-relaxed mb-4">
          Peraturan ini disusun, disepakati, dan ditandatangani melalui musyawarah warga sebagai dasar hukum pelaksanaan. Kesepakatan ini ditandatangani oleh Kepala Dukuh Pogung Lor Nurbatin Kuncoro, Ketua LPMD H. Bijidadi, Bhabinkamtibmas Sinduadi 1 A. Heru Sutanto, serta Babinsa Sinduadi 1 Sutrisno di Pogung Lor pada 1 April 2018.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Mari kita patuhi peraturan ini bersama-sama demi mewujudkan ketertiban, keamanan, dan keharmonisan di lingkungan Dusun Pogung Lor.
        </p>
        </CardContent>
      </Card>
    </div>
  )
}
