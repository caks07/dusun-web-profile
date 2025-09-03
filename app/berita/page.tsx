"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { fetchNewsData, transformNewsData, getDirectGoogleDriveUrl } from "@/lib/google-sheets-multi"


interface NewsItem {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
}

export default function BeritaPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch data from Google Sheets
        const newsData = await fetchNewsData()
        const transformedData = transformNewsData(newsData)

        // Map to NewsItem format
        const newsItems: NewsItem[] = transformedData.map(item => ({
          id: item.id,
          title: item.title,
          excerpt: item.excerpt,
          author: item.author,
          date: item.publishedAt,
          category: item.category,
          image: item.imageUrl
        }))

        setNews(newsItems)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching news from Google Sheets:", error)

        // Fallback to placeholder data
        const placeholderNews: NewsItem[] = [
          {
            id: "1",
            title: "Pembangunan Jalan Desa Tahap II Dimulai",
            excerpt: "Pembangunan jalan desa tahap kedua telah dimulai untuk meningkatkan akses transportasi warga.",
            author: "Admin Desa",
            date: "2024-01-15",
            category: "Pembangunan",
            image: "/placeholder.svg?height=200&width=400",
          },
          {
            id: "2",
            title: "Festival Budaya Desa 2024",
            excerpt:
              "Festival budaya tahunan desa akan diselenggarakan bulan depan dengan berbagai pertunjukan tradisional.",
            author: "Panitia Festival",
            date: "2024-01-10",
            category: "Budaya",
            image: "/placeholder.svg?height=200&width=400",
          },
        ]
        setNews(placeholderNews)
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Berita Dusun Pogung Lor</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Memuat berita...</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-80 bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Berita Dusun Pogung Lor</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600">Informasi terkini dan berita penting dari Dusun Pogung Lor</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative aspect-video">
              <iframe
                src={getDirectGoogleDriveUrl(item.image) || "/placeholder.svg"}
                title={item.title}
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                frameBorder="0"
              ></iframe>
              <Badge className="absolute top-3 right-3 bg-green-600">{item.category}</Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(item.date).toLocaleDateString("id-ID")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{item.author}</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-3 line-clamp-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
              <Link href={`/berita/${item.id}`}>
                <Button variant="outline" size="sm" className="group/btn bg-transparent">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
