"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, ShoppingBag, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { fetchProductData, transformProductData } from "@/lib/google-sheets-multi"

interface Product {
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
}

export default function BelanjaPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from Google Sheets
        const productData = await fetchProductData()
        const transformedData = transformProductData(productData)

        // Map to Product format
        const productsData: Product[] = transformedData.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          category: item.category,
          sellerName: item.sellerName,
          sellerLocation: item.sellerLocation,
          sellerPhone: item.sellerPhone,
          imageUrl: item.imageUrl,
          images: item.images,
          details: item.details,
          rating: item.rating,
          waLink: item.waLink,
          instaLink: item.instaLink
        }))

        setProducts(productsData)
      } catch (error) {
        console.error("Error fetching products from Google Sheets:", error)

        // Fallback to placeholder data
        const placeholderProducts: Product[] = [
          {
            id: "1",
            name: "Keripik Singkong Original",
            description: "Keripik singkong resep keluarga, gurih dan renyah.",
            price: "15000",
            category: "Snack",
            sellerName: "Keripik Bu Sari",
            sellerLocation: "RT 02/RW 01",
            sellerPhone: "081234567890",
            imageUrl: "/placeholder.svg?height=200&width=300",
            images: ["/placeholder.svg?height=200&width=300"],
            details: "Berat 250 gram",
            rating: "4.9",
          },
          {
            id: "2",
            name: "Batik Tulis Motif Jogja",
            description: "Batik tulis asli Jogja dengan motif klasik.",
            price: "250000",
            category: "Clothing",
            sellerName: "Batik Pak Joko",
            sellerLocation: "RT 03/RW 02",
            sellerPhone: "081298765432",
            imageUrl: "/placeholder.svg?height=200&width=300",
            images: ["/placeholder.svg?height=200&width=300"],
            details: "Bahan Katun",
            rating: "4.9",
          },
        ]
        setProducts(placeholderProducts)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Belanja UMKM Dusun Pogung Lor</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Memuat produk...</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-80 bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Belanja UMKM Dusun Pogung Lor</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Dukung ekonomi lokal dengan berbelanja produk berkualitas dari UMKM Dusun Pogung Lor
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <ShoppingBag className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-green-600 mb-1">8+</div>
          <div className="text-gray-600">Produk Tersedia</div>
        </div>
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <Star className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-blue-600 mb-1">4.8</div>
          <div className="text-gray-600">Rating Rata-rata</div>
        </div>
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <Users className="w-12 h-12 text-purple-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-purple-600 mb-1">15+</div>
          <div className="text-gray-600">UMKM Terdaftar</div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <iframe
                src={product.imageUrl || "/placeholder.svg"}
                // alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              ></iframe>
              <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{product.sellerName}</p>
              <p className="text-gray-500 text-xs mb-3">{product.sellerLocation}</p>
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-green-600">Rp {product.price}</div>
                <Link href={`/belanja/${product.id}`}>
                  <Button size="sm" className="group/btn">
                    Lihat Detail
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-green-50 rounded-lg p-8">
        <TrendingUp className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingin Bergabung Sebagai Penjual?</h2>
        <p className="text-gray-600 mb-6">Daftarkan UMKM Anda dan jangkau lebih banyak pelanggan</p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <a
            href="https://wa.me/+6282227676377"
            target="_blank"
            rel="noopener noreferrer"
          >
          Hubungi Admin
          </a>
        </Button>
      </div>
    </div>
  )
}
