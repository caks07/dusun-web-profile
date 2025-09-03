import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ArrowRight } from "lucide-react"

export default function VillageStructure() {
  return (
    <Card className="h-full">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-8 h-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl">Struktur Dusun</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 mb-6">Organisasi pemerintahan Dusun Pogung Lor yang terstruktur dan profesional.</p>
        <Link href="/profil/struktur">
          <Button variant="outline" className="group bg-transparent">
            Lihat Struktur
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
