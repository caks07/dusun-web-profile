"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Medal, Crown, Target } from "lucide-react"
import { fetchAchievementData, transformAchievementData } from "@/lib/google-sheets-multi"

interface Achievement {
  id: string
  title: string
  year: string
  category: string
  description: string
}

// Icon mapping berdasarkan kategori
const getIconForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'pariwisata':
      return Trophy
    case 'lingkungan':
      return Award
    case 'teknologi':
      return Star
    case 'energi':
      return Medal
    case 'inovasi':
      return Crown
    case 'kesehatan':
      return Target
    default:
      return Trophy
  }
}

// Color mapping berdasarkan kategori
const getColorForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'pariwisata':
      return "text-yellow-600 bg-yellow-100"
    case 'lingkungan':
      return "text-green-600 bg-green-100"
    case 'teknologi':
      return "text-blue-600 bg-blue-100"
    case 'energi':
      return "text-orange-600 bg-orange-100"
    case 'inovasi':
      return "text-purple-600 bg-purple-100"
    case 'kesehatan':
      return "text-red-600 bg-red-100"
    default:
      return "text-gray-600 bg-gray-100"
  }
}

export default function PrestasiPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        // Fetch data from Google Sheets
        const achievementData = await fetchAchievementData()
        const transformedData = transformAchievementData(achievementData)

        // Map to Achievement format with details
        const achievementsData: Achievement[] = transformedData.map(item => ({
          id: item.id,
          title: item.title,
          year: item.year,
          category: item.category,
          description: item.description,
        }))

        setAchievements(achievementsData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching achievements from Google Sheets:", error)

        // Fallback to placeholder data
        const placeholderAchievements: Achievement[] = [
          {
            id: "1",
            title: "Desa Sadar Wisata",
            year: "2023",
            category: "Pariwisata",
            description: "Penghargaan dari Dinas Pariwisata Provinsi atas keberhasilan mengembangkan potensi wisata lokal."
          },
          {
            id: "2",
            title: "Juara 1 Lomba Kebersihan Tingkat Kabupaten",
            year: "2023",
            category: "Lingkungan",
            description: "Komitmen tinggi warga dalam menjaga kebersihan lingkungan membuahkan hasil terbaik."
          },
        ]
        setAchievements(placeholderAchievements)
        setLoading(false)
      }
    }

    fetchAchievements()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Prestasi Desa</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Memuat prestasi...</p>
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
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Prestasi Desa</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Berbagai pencapaian yang membanggakan hasil kerja keras dan kolaborasi seluruh warga desa.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="text-center p-6 bg-yellow-50 rounded-lg">
          <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-yellow-600 mb-1">{achievements.length}+</div>
          <div className="text-gray-600">Total Prestasi</div>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-green-600 mb-1">3</div>
          <div className="text-gray-600">Juara 1</div>
        </div>
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <Star className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-blue-600 mb-1">2023</div>
          <div className="text-gray-600">Tahun Terbaik</div>
        </div>
      </div>

      {/* Achievements List */}
      <div className="space-y-12">
        {achievements.map((achievement, index) => {
          const IconComponent = getIconForCategory(achievement.category)
          const colorClass = getColorForCategory(achievement.category)

          return (
            <Card key={achievement.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${colorClass} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-gray-800 font-semibold">{achievement.year}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 mb-3">{achievement.title}</CardTitle>
                    <p className="text-gray-600 leading-relaxed font-medium">{achievement.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Detail Prestasi:</h4>
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
