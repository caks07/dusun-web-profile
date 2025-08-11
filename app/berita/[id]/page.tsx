import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Share2, Facebook, MessageCircle, Copy } from "lucide-react"
import Link from "next/link"

// This would typically fetch data based on the ID
const newsData = {
  id: "1",
  title: "Pembangunan Jalan Desa Tahap II Dimulai",
  author: "Admin Desa",
  date: "2024-01-15",
  category: "Pembangunan",
  image: "/placeholder.svg?height=400&width=800",
  content: `
    <p>Pembangunan jalan desa tahap kedua telah resmi dimulai pada hari Senin, 15 Januari 2024. Proyek ini merupakan kelanjutan dari pembangunan jalan tahap pertama yang telah berhasil diselesaikan tahun lalu.</p>
    
    <p>Kepala Desa, Bapak Suharto, menyampaikan bahwa pembangunan jalan ini bertujuan untuk meningkatkan akses transportasi warga, terutama untuk mendukung aktivitas ekonomi dan pendidikan. "Dengan jalan yang baik, warga akan lebih mudah mengakses pasar, sekolah, dan fasilitas kesehatan," ujarnya.</p>
    
    <p>Proyek pembangunan jalan sepanjang 2,5 kilometer ini menggunakan dana dari APBD Kabupaten dan ADD (Alokasi Dana Desa). Total anggaran yang dialokasikan mencapai Rp 1,2 miliar dengan target penyelesaian dalam waktu 6 bulan.</p>
    
    <p>Kontraktor yang menangani proyek ini adalah PT. Karya Mandiri, sebuah perusahaan konstruksi yang telah berpengalaman dalam pembangunan infrastruktur desa. Mereka berkomitmen untuk menyelesaikan proyek tepat waktu dengan kualitas terbaik.</p>
    
    <p>Warga desa menyambut baik proyek ini dan berharap dapat segera merasakan manfaatnya. Beberapa warga bahkan secara sukarela membantu dalam proses pembebasan lahan dan koordinasi dengan tim konstruksi.</p>
  `,
}

export default function BeritaDetailPage() {
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
          <Badge className="mb-4 bg-green-600">{newsData.category}</Badge>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{newsData.title}</h1>
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(newsData.date).toLocaleDateString("id-ID")}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{newsData.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={newsData.image || "/placeholder.svg"}
            alt={newsData.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div
            className="text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: newsData.content }}
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
