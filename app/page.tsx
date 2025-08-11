import { Suspense } from "react"
import HeroSlider from "@/components/hero-slider"
import VillageDescription from "@/components/village-description"
import VillageHistory from "@/components/village-history"
import VillageStructure from "@/components/village-structure"
import PublicFacilities from "@/components/public-facilities"
import VillageAchievements from "@/components/village-achievements"
import VillageGallery from "@/components/village-gallery"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="h-[500px] bg-gray-100 animate-pulse" />}>
        <HeroSlider />
      </Suspense>

      <div className="container mx-auto px-4 py-16 space-y-20">
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg" />}>
          <VillageDescription />
        </Suspense>

        <div className="grid lg:grid-cols-2 gap-12">
          <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg" />}>
            <VillageStructure />
          </Suspense>

          <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg" />}>
            <VillageHistory />
          </Suspense>
        </div>

        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg" />}>
          <PublicFacilities />
        </Suspense>

        <Suspense fallback={<div className="h-48 bg-gray-100 animate-pulse rounded-lg" />}>
          <VillageAchievements />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}>
          <VillageGallery />
        </Suspense>
      </div>
    </main>
  )
}
