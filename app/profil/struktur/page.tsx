"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
        const organizationData = await fetchOrganizationData()
        const transformedData = transformOrganizationData(organizationData)
        setOrganizationMembers(transformedData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching organization from Google Sheets:", error)
        const placeholderMembers: OrganizationMember[] = []
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Struktur Organisasi Dusun Pogung Lor</h1>
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

  // Filter members berdasarkan level
  const kepalaDusun = organizationMembers.filter(member => member.level === "kepala_dusun")
  const lembagaMasyarakat = organizationMembers.filter(member => member.level === "lembaga_masyarakat")
  const rw = organizationMembers.filter(member => member.level === "rw")
  const rt = organizationMembers.filter(member => member.level === "rt")

  // Komponen render kartu
  const MemberCard = ({ member }: { member: OrganizationMember }) => (
    <Card className="w-full sm:w-[45%] lg:w-[30%] hover:shadow-lg transition-shadow">
      <CardContent className="text-center p-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
          <img
            src={member.imageUrl || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="font-bold text-gray-800 mb-2">{member.name}</h4>
        <p className="text-green-600 font-medium text-sm mb-2">{member.position}</p>
        <Badge variant="outline" className="text-xs">
          {member.period}
        </Badge>
      </CardContent>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Struktur Organisasi Dusun Pogung Lor</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mengenal jajaran pengurus dusun yang berdedikasi untuk melayani masyarakat.
        </p>
      </div>

      {/* Jajaran Pengurus Dusun */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Jajaran Pengurus Dusun</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto"></div>
        </div>
      </section>

      {/* Kepala Dusun */}
      {kepalaDusun.length > 0 && (
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Kepala Dusun</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {kepalaDusun.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {/* Lembaga Masyarakat */}
      {lembagaMasyarakat.length > 0 && (
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Lembaga Masyarakat</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {lembagaMasyarakat.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {/* Ketua RW */}
      {rw.length > 0 && (
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Ketua RW</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {rw.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {/* Ketua RT */}
      {rt.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Ketua RT</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {rt.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
