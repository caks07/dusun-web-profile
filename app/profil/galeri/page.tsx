"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { fetchGalleryData, transformGalleryData } from "@/lib/google-sheets-multi"

interface GalleryItem {
  id: string
  title: string
  category: string
  image_url: string
  description: string
}

export default function GaleriPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("Semua")

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        // Fetch data from Google Sheets
        const galleryData = await fetchGalleryData()
        const transformedData = transformGalleryData(galleryData)

        setGalleryItems(transformedData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching gallery from Google Sheets:", error)

        // Fallback to placeholder data
        const placeholderItems: GalleryItem[] = [
          {
            id: "1",
            title: "Warga gotong royong membersihkan desa",
            category: "Kegiatan Warga",
            image_url: "/placeholder.svg?height=300&width=400",
            description: "Kegiatan gotong royong rutin warga dalam menjaga kebersihan lingkungan desa."
          },
          {
            id: "2",
            title: "Pemandangan sawah terasering di pagi hari",
            category: "Keindahan Alam",
            image_url: "/placeholder.svg?height=300&width=400",
            description: "Keindahan alam sawah terasering yang menjadi ciri khas pertanian desa."
          },
        ]
        setGalleryItems(placeholderItems)
        setLoading(false)
      }
    }

    fetchGallery()
  }, [])

  // Get unique categories from gallery items
  const categories = ["Semua", ...Array.from(new Set(galleryItems.map(item => item.category)))]

  const filteredItems =
    selectedCategory === "Semua" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Galeri Foto Desa</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Memuat galeri...</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Galeri Foto Desa</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Abadikan setiap momen, ceritakan setiap sudut keindahan Dusun Yogyakarta.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : "bg-transparent"}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <iframe
                src={item.image_url || "/placeholder.svg"}
                // alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              ></iframe>
              <Badge className="absolute top-3 right-3 bg-green-600">{item.category}</Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {
        filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Tidak ada foto untuk kategori ini.</p>
          </div>
        )
      }
    </div >
  )
}
