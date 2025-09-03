"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { fetchGalleryData, transformGalleryData } from "@/lib/google-sheets-multi"

interface GalleryItem {
  id: string
  title: string
  category: string
  image_url: string
  description: string
}

export default function VillageGallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const galleryData = await fetchGalleryData()
        const transformedData = transformGalleryData(galleryData)
        setGalleryItems(transformedData)
        setLoading(false)
      } catch (error) {
        setGalleryItems([
          { id: "1", title: "Galeri foto 1", category: "", image_url: "/placeholder.svg?height=300&width=400", description: "" },
          { id: "2", title: "Galeri foto 2", category: "", image_url: "/placeholder.svg?height=300&width=400", description: "" },
          { id: "3", title: "Galeri foto 3", category: "", image_url: "/placeholder.svg?height=300&width=400", description: "" },
          { id: "4", title: "Galeri foto 4", category: "", image_url: "/placeholder.svg?height=300&width=400", description: "" },
          { id: "5", title: "Galeri foto 5", category: "", image_url: "/placeholder.svg?height=300&width=400", description: "" },
          { id: "6", title: "Galeri foto 6", category: "", image_url: "/placeholder.svg?height=300&width=400", description: "" },
        ])
        setLoading(false)
      }
    }
    fetchGallery()
  }, [])

  if (loading) {
    return (
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeri Foto Dusun Pogung Lor</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Memuat galeri...</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeri Foto Dusun Pogung Lor</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600">
          Dokumentasi kegiatan dan keindahan dusun yang menggambarkan kehidupan sehari-hari masyarakat.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {galleryItems.map((image, index) => (
          <div key={image.id || index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <iframe
              src={image.image_url || "/placeholder.svg"}
              
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            ></iframe>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/profil/galeri">
          <Button variant="outline" className="group bg-transparent">
            Lihat Semua Foto
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
