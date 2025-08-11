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
  details: string
  imageUrl: string
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
      return "text-yellow-600"
    case 'lingkungan':
      return "text-green-600"
    case 'teknologi':
      return "text-blue-600"
    case 'energi':
      return "text-orange-600"
    case 'inovasi':
      return "text-purple-600"
    case 'kesehatan':
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

export default function VillageAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const achievementData = await fetchAchievementData()
        const transformedData = transformAchievementData(achievementData)
        setAchievements(transformedData as Achievement[])
        setLoading(false)
      } catch (error) {
        // Fallback ke data placeholder jika error
        setAchievements([
          {
            id: "1",
            title: "Desa Sadar Wisata",
            year: "2023",
            category: "Pariwisata",
            description: "Penghargaan dari Dinas Pariwisata Provinsi atas keberhasilan mengembangkan potensi wisata lokal.",
            details: "",
            imageUrl: ""
          },
          {
            id: "2",
            title: "Juara 1 Lomba Kebersihan Tingkat Kabupaten",
            year: "2023",
            category: "Lingkungan",
            description: "Komitmen tinggi warga dalam menjaga kebersihan lingkungan membuahkan hasil terbaik.",
            details: "",
            imageUrl: ""
          },
          {
            id: "3",
            title: "Desa Digital Terbaik",
            year: "2023",
            category: "Teknologi",
            description: "Apresiasi atas pemanfaatan teknologi untuk pelayanan publik dan transparansi informasi desa.",
            details: "",
            imageUrl: ""
          },
        ])
        setLoading(false)
      }
    }
    fetchAchievements()
  }, [])

  if (loading) {
    return (
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Prestasi Desa</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Memuat prestasi...</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Prestasi Desa</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600">
          Berbagai pencapaian yang membanggakan hasil kerja keras dan kolaborasi seluruh warga desa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => {
          const IconComponent = getIconForCategory(achievement.category)
          const colorClass = getColorForCategory(achievement.category)
          return (
            <Card key={achievement.id || index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className={`w-8 h-8 ${colorClass}`} />
                </div>
                <Badge variant="secondary" className="mb-2">
                  {achievement.year}
                </Badge>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
