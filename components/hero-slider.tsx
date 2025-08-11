"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fetchSliderData, transformSliderData } from "@/lib/google-sheets-multi"

interface SlideData {
  image: string
  title: string
  subtitle: string
}

export default function HeroSlider() {
  const [slides, setSlides] = useState<SlideData[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSliderDataFromSheets = async () => {
      try {
        // Fetch data from Google Sheets
        const sliderData = await fetchSliderData()
        const transformedData = transformSliderData(sliderData)

        // Map to SlideData format
        const slideData: SlideData[] = transformedData.map(item => ({
          image: item.imageUrl,
          title: item.title,
          subtitle: item.subtitle
        }))

        setSlides(slideData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching slider data from Google Sheets:", error)

        // Fallback to placeholder data
        const placeholderSlides: SlideData[] = [
          {
            image: "/placeholder.svg?height=600&width=1200",
            title: "Budaya dan Tradisi",
            subtitle: "Melestarikan warisan leluhur",
          },
          {
            image: "/placeholder.svg?height=600&width=1200",
            title: "Keindahan Alam",
            subtitle: "Pesona alam yang memukau",
          },
          {
            image: "/placeholder.svg?height=600&width=1200",
            title: "Gotong Royong",
            subtitle: "Semangat kebersamaan warga",
          },
        ]
        setSlides(placeholderSlides)
        setLoading(false)
      }
    }

    fetchSliderDataFromSheets()
  }, [])

  useEffect(() => {
    if (slides.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  if (loading) {
    return <div className="h-[500px] bg-gray-100 animate-pulse" />
  }

  if (slides.length === 0) {
    return (
      <div className="h-[500px] bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">No slides available</p>
      </div>
    )
  }

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl md:text-2xl font-light">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
