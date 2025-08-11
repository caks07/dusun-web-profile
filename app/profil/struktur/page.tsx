"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar } from "lucide-react"
import { fetchOrganizationData, transformOrganizationData } from "@/lib/google-sheets-multi"

interface OrganizationMember {
  id: string
  name: string
  position: string
  period: string
  imageUrl: string
  level: string
}

export default function StrukturPage() {
  const [organizationMembers, setOrganizationMembers] = useState<OrganizationMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        // Fetch data from Google Sheets
        const organizationData = await fetchOrganizationData()
        const transformedData = transformOrganizationData(organizationData)

        setOrganizationMembers(transformedData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching organization from Google Sheets:", error)

        // Fallback to placeholder data
        const placeholderMembers: OrganizationMember[] = [
          {
            id: "1",
            name: "Bapak Suharto",
            position: "Kepala Desa",
            period: "2019-2025",
            imageUrl: "/placeholder.svg?height=150&width=150",
            level: "kepala_desa"
          },
          {
            id: "2",
            name: "Ibu Siti Aminah",
            position: "Sekretaris Desa",
            period: "2020-2026",
            imageUrl: "/placeholder.svg?height=150&width=150",
            level: "sekretaris"
          },
        ]
        setOrganizationMembers(placeholderMembers)
        setLoading(false)
      }
    }

    fetchOrganization()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Struktur Organisasi Dusun</h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Memuat struktur organisasi...</p>
        </div>
        <div className="space-y-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  // Filter members by level
  const kepalaDesa = organizationMembers.find(member => member.level === 'kepala_desa')
  const sekretaris = organizationMembers.find(member => member.level === 'sekretaris')
  const kaur = organizationMembers.filter(member => member.level === 'kaur')
  const rw = organizationMembers.filter(member => member.level === 'rw')

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Struktur Organisasi Dusun</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mengenal jajaran pemerintahan yang berdedikasi untuk melayani masyarakat Dusun Yogyakarta.
        </p>
      </div>

      {/* Bagan Organisasi */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Bagan Organisasi</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center text-gray-500 py-16">
            <Users className="w-24 h-24 mx-auto mb-4" />
            <p className="text-lg">Bagan Struktur Organisasi Desa</p>
            <p className="text-sm">Diagram hierarki organisasi pemerintahan desa</p>
          </div>
        </div>
      </section>

      {/* Jajaran Aparatur */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Jajaran Aparatur Dusun</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Kepala Desa */}
        {kepalaDesa && (
          <div className="mb-12">
            <Card className="max-w-md mx-auto">
              <CardContent className="text-center p-8">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                  <img
                    src={kepalaDesa.imageUrl || "/placeholder.svg"}
                    alt={kepalaDesa.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{kepalaDesa.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{kepalaDesa.position}</p>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Masa Jabatan: {kepalaDesa.period}
                </Badge>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Sekretaris */}
        {sekretaris && (
          <div className="mb-12">
            <Card className="max-w-md mx-auto">
              <CardContent className="text-center p-8">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                  <img
                    src={sekretaris.imageUrl || "/placeholder.svg"}
                    alt={sekretaris.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{sekretaris.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{sekretaris.position}</p>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Masa Jabatan: {sekretaris.period}
                </Badge>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Kepala Urusan */}
        {kaur.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Kepala Urusan</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kaur.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="text-center p-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img
                        src={member.imageUrl || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{member.name}</h4>
                    <p className="text-purple-600 font-medium text-sm mb-2">{member.position}</p>
                    <Badge variant="outline" className="text-xs">
                      {member.period}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Ketua RW */}
        {rw.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Ketua RW</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {rw.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="text-center p-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img
                        src={member.imageUrl || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{member.name}</h4>
                    <p className="text-orange-600 font-medium text-sm mb-2">{member.position}</p>
                    <Badge variant="outline" className="text-xs">
                      {member.period}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
