"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter as useNextRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Star, MapPin, Phone, MessageCircle, PhoneCall, Instagram } from "lucide-react"
import Link from "next/link"
import { fetchProductData, transformProductData, getDirectGoogleDriveUrl } from "@/lib/google-sheets-multi"


interface ProductDetail {
  id: string
  name: string
  description: string
  price: number
  category: string
  sellerName: string
  sellerLocation: string
  sellerPhone: string
  imageUrl: string
  images: string[]
  details: string
  rating: number
  waLink?: string;
  instaLink?: string;
}

const handleClick = (url?: string) => {
  if (url) {
    window.open(url, "_blank")
  } else {
    alert("Maaf, data belum tersedia.")
  }
}


export default function BelanjaDetailPage() {
  // useParams works in client components under app router
  const params = useParams()
  const id = params?.id as string

  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        {/* Gambar */}
        <div>
          <div className="mb-4">
            <iframe
              src={product.imageUrl}
              // alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((src, i) => (
              <iframe
                key={i}
                src={getDirectGoogleDriveUrl(src)}
                // alt={`${product.name} ${i + 1}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              ></iframe>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-medium">{product.rating}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{product.sellerLocation}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">{product.name}</h1>
          <div className="text-4xl font-bold text-green-600 mb-6">
            Rp {product.price.toLocaleString("id-ID")}
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Informasi Penjual</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{product.sellerName}</span>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{product.sellerPhone}</span>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={() => handleClick(product.waLink)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat WhatsApp
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent"
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
              <h3 className="font-semibold text-lg mb-4">Detail Produk</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium">{product.details}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
