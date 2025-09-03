"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Share2, Facebook, MessageCircle, Copy } from "lucide-react"
import Link from "next/link"
import { fetchNewsData, transformNewsData, NewsData, getDirectGoogleDriveUrl } from "@/lib/google-sheets-multi"

interface TransformedNewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  imageUrl: string
  views: number
  publishedAt: string
}

export default function BeritaDetailPage() {
  const params = useParams()
  const id = params?.id as string

  const [newsItem, setNewsItem] = useState<TransformedNewsItem | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchAndSetNews = async () => {
      try {
        const rawData: NewsData[] = await fetchNewsData()
        const transformedData = transformNewsData(rawData)
        const foundItem = transformedData.find((item) => item.id === id)

        if (!foundItem) {
          throw new Error("Berita tidak ditemukan.")
        }

        setNewsItem(foundItem)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAndSetNews()
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center py-12">Memuat berita...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center py-12 text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center py-12">Berita tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/berita">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Berita
          </Button>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Badge className="mb-4 bg-green-600">{newsItem.category}</Badge>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{newsItem.title}</h1>
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(newsItem.publishedAt).toLocaleDateString("id-ID")}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{newsItem.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <iframe
            src={getDirectGoogleDriveUrl(newsItem.imageUrl) || "/placeholder.svg"}
            title={newsItem.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            frameBorder="0"
          ></iframe>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div
            className="text-gray-700 leading-relaxed space-y-6 break-words whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </div>

        {/* Share Section */}
        <div className="border-t pt-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Bagikan Berita
          </h3>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              Salin Link
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}