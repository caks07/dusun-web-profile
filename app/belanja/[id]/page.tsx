"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import {
  fetchProductData,
  transformProductData,
  getDirectGoogleDriveUrl,
} from "@/lib/google-sheets-multi"

interface ProductDetail {
  id: string
  name: string
  description: string
  price: string
  category: string
  sellerName: string
  sellerLocation: string
  sellerPhone: string
  imageUrl: string
  images: string[]
  details: string
  rating: string
  waLink?: string
  instaLink?: string
}

const handleClick = (url?: string) => {
  if (url) {
    window.open(url, "_blank")
  } else {
    alert("Maaf, data belum tersedia.")
  }
}

export default function BelanjaDetailPage() {
  const params = useParams()
  const id = params?.id as string

  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!id) return
    const fetchSheet = async () => {
      try {
        const raw = await fetchProductData()
        const products = transformProductData(raw)
        const found = products.find((item) => item.id === id)
        if (!found) throw new Error("Product not found")
        setProduct(found)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSheet()
  }, [id])

  if (loading) return <p className="text-center py-12">Memuat produk...</p>
  if (error) return <p className="text-center py-12 text-red-600">Error: {error}</p>
  if (!product) return null

  // gabungkan gambar utama + images tambahan
  const gallery = [product.imageUrl, ...product.images]

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back */}
      <div className="mb-8">
        <Link href="/belanja">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Belanja
          </Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Galeri Gambar */}
        <div>
          <div className="relative mb-4">
            <iframe
              key={currentIndex}
              src={gallery[currentIndex]}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            ></iframe>

            {/* Tombol navigasi */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail */}
          <div className="grid grid-cols-4 gap-3">
            {gallery.map((src, i) => (
              <div
                key={i}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                  i === currentIndex
                    ? "border-green-600"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentIndex(i)}
              >
                <iframe
                  src={src}
                  className="w-full h-20 object-cover"
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Info Produk */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-medium">{product.rating}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{product.sellerLocation}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {product.name}
          </h1>
          <div className="text-4xl font-bold text-green-600 mb-6">
            Rp {product.price}
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">
                Informasi Penjual
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">
                    {product.sellerName}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{product.sellerPhone}</span>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => handleClick(product.waLink)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => handleClick(product.instaLink)}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">
                Detail Produk
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium">
                    {product.details}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
