"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Landmark } from "lucide-react"
import { fetchHistoryData, transformHistoryData } from "@/lib/google-sheets-multi"

interface HistoryEvent {
  id: string
  year: string
  title: string
  description: string
  imageUrl: string
}

// Icon mapping berdasarkan title
const getIconForEvent = (title: string) => {
  if (title.toLowerCase().includes('pendirian')) return MapPin
  if (title.toLowerCase().includes('kolonial')) return Landmark
  if (title.toLowerCase().includes('kemerdekaan')) return Users
  if (title.toLowerCase().includes('pembangunan')) return Calendar
  if (title.toLowerCase().includes('digital')) return Users
  return MapPin
}

// Color mapping berdasarkan title
const getColorForEvent = (title: string) => {
  if (title.toLowerCase().includes('pendirian')) return "bg-green-600"
  if (title.toLowerCase().includes('kolonial')) return "bg-blue-600"
  if (title.toLowerCase().includes('kemerdekaan')) return "bg-red-600"
  if (title.toLowerCase().includes('pembangunan')) return "bg-purple-600"
  if (title.toLowerCase().includes('digital')) return "bg-orange-600"
  return "bg-gray-600"
}

export default function SejarahPage() {
  const [timelineEvents, setTimelineEvents] = useState<HistoryEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // Fetch data from Google Sheets
        const historyData = await fetchHistoryData()
        const transformedData = transformHistoryData(historyData)

        setTimelineEvents(transformedData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching history from Google Sheets:", error)

        // Fallback to placeholder data
        const placeholderEvents: HistoryEvent[] = [
          {
            id: "1",
            year: "1850",
            title: "Pendirian Dusun",
            description: "Dusun Yogyakarta didirikan oleh sekelompok perantau dari Jawa Tengah, mencari lahan subur untuk pertanian. Nama 'Yogyakarta' dipilih dengan harapan menjadi tempat yang makmur.",
            imageUrl: "/placeholder.svg?height=400&width=800"
          },
          {
            id: "2",
            year: "1900-1940",
            title: "Era Kolonial",
            description: "Di bawah pemerintahan Belanda, desa menjadi pusat perkebunan tebu dan kopi. Infrastruktur dasar seperti jalan setapak dan irigasi mulai dibangun oleh warga secara gotong royong.",
            imageUrl: "/placeholder.svg?height=400&width=800"
          },
        ]
        setTimelineEvents(placeholderEvents)
        setLoading(false)
      }
    }

    fetchHistory()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sejarah Dusun Yogyakarta</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Memuat sejarah...</p>
        </div>
        <div className="space-y-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sejarah Dusun Yogyakarta</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Menelusuri jejak waktu dan peristiwa yang membentuk dusun kita tercinta.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-16">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://i.pinimg.com/originals/6e/82/c4/6e82c4705f9a2554c3f087a300361062.jpg"
            alt="Ilustrasi desa zaman dulu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">Ilustrasi desa zaman dulu</h2>
              <p className="text-lg">Perjalanan sejarah yang penuh makna</p>
            </div>
          </div>
        </div>
      </div>

      {/* Awal Mula */}
      <section className="mb-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800 mb-4">Awal Mula yang Sederhana</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              Cerita Dusun Yogyakarta berawal dari visi para pendirinya di pertengahan abad ke-19. Mereka adalah petani
              tangguh yang melihat potensi luar biasa di tanah ini. Dengan semangat gotong royong, mereka membuka lahan,
              membangun pemukiman, dan menata sistem irigasi sederhana yang menjadi cikal bakal kemakmuran dusun.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nama "Yogyakarta" bukan sekadar nama, melainkan doa dan cita-cita: sebuah tempat yang layak untuk hidup
              sejahtera dan damai. Nilai-nilai ini terus dipegang teguh oleh generasi penerus hingga hari ini.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Timeline */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Linimasa Perjalanan Dusun</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = getIconForEvent(event.title)
              const colorClass = getColorForEvent(event.title)

              return (
                <div
                  key={event.id}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-4 h-4 ${colorClass} rounded-full transform -translate-x-2 md:-translate-x-2 z-10`}
                  ></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="ml-12 md:ml-0 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 ${colorClass} rounded-full flex items-center justify-center`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <Badge variant="secondary" className="text-sm font-semibold">
                            {event.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-800">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
