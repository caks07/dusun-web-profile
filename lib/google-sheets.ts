// Utility functions for fetching data from Google Sheets

export interface SheetData {
  [key: string]: string
}

export interface SliderData {
  id: string
  image_url: string
  title: string
  subtitle: string
  is_active: string
  sort_order: string
  created_at: string
  updated_at: string
}

export interface VillageInfo {
  id: string
  section: string
  title: string
  content: string
  data_value: string
  created_at: string
  updated_at: string
}

export interface NewsData {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  image_url: string
  views: string
  is_published: string
  published_at: string
  created_at: string
  updated_at: string
}

export interface ProductData {
  id: string
  name: string
  description: string
  price: string
  category: string
  seller_name: string
  seller_location: string
  seller_phone: string
  image_url: string
  rating: string
  in_stock: string
  created_at: string
  updated_at: string
  waLink?: string;
  instaLink?: string
}

export interface RegulationData {
  id: string
  title: string
  description: string
  category: string
  file_url: string
  views: string
  status: string
  published_at: string
  created_at: string
  updated_at: string
}

export interface AchievementData {
  id: string
  title: string
  year: string
  category: string
  description: string
  created_at: string
  updated_at: string
}

export interface GalleryData {
  id: string
  title: string
  category: string
  image_url: string
  description: string
  created_at: string
  updated_at: string
}

export interface FacilityData {
  id: string
  name: string
  category: string
  description: string
  location: string
  contact: string
  image_url: string
  created_at: string
  updated_at: string
}

export async function fetchGoogleSheetData(sheetUrl: string): Promise<SheetData[]> {
  try {
    const response = await fetch(sheetUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const csvText = await response.text()

    // Parse CSV data
    const lines = csvText.split("\n")
    if (lines.length < 2) {
      return []
    }

    const headers = lines[0].split(",").map((header) => header.trim().replace(/"/g, ""))

    const data: SheetData[] = []

    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(",").map((value) => value.trim().replace(/"/g, ""))
        const row: SheetData = {}

        headers.forEach((header, index) => {
          row[header] = values[index] || ""
        })

        data.push(row)
      }
    }

    return data
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error)
    return []
  }
}

// Base URL untuk Google Sheets (akan diambil dari environment variable)
const getBaseSheetUrl = () => {
  const url = process.env.GOOGLE_SHEETS_URL || "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pub?output=csv"

  // Check if URL is still using placeholder
  if (url.includes('YOUR_SHEET_ID')) {
    console.warn('⚠️ Google Sheets URL masih menggunakan placeholder. Silakan setup environment variable.')
    return null
  }

  return url
}

// Helper functions untuk mengambil data dari sheet tertentu
export async function fetchSliderData(): Promise<SliderData[]> {
  const sheetUrl = getBaseSheetUrl()
  if (!sheetUrl) return []
  const data = await fetchGoogleSheetData(sheetUrl)
  return data.filter((row) => row.type === "slider" || row.table === "slider_data") as unknown as SliderData[]
}

export async function fetchVillageInfo(): Promise<VillageInfo[]> {
  const sheetUrl = getBaseSheetUrl()
  if (!sheetUrl) return []
  const data = await fetchGoogleSheetData(sheetUrl)
  return data.filter((row) => row.type === "village_info" || row.table === "village_info") as unknown as VillageInfo[]
}

export async function fetchNewsData(): Promise<NewsData[]> {
  const sheetUrl = getBaseSheetUrl()
  if (!sheetUrl) return []
  const data = await fetchGoogleSheetData(sheetUrl)
  return data.filter((row) => row.type === "news" || row.table === "news") as unknown as NewsData[]
}

export async function fetchProductData(): Promise<ProductData[]> {
  const sheetUrl = getBaseSheetUrl()
  if (!sheetUrl) return []
  const data = await fetchGoogleSheetData(sheetUrl)
  return data.filter((row) => row.type === "product" || row.table === "products") as unknown as ProductData[]
}

export async function fetchRegulationData(): Promise<RegulationData[]> {
  const sheetUrl = getBaseSheetUrl()
  if (!sheetUrl) return []
  const data = await fetchGoogleSheetData(sheetUrl)
  return data.filter((row) => row.type === "regulation" || row.table === "regulations") as unknown as RegulationData[]
}

export async function fetchAchievementData(): Promise<AchievementData[]> {
  const sheetUrl = getBaseSheetUrl()
  if (!sheetUrl) return []
  const data = await fetchGoogleSheetData(sheetUrl)
  return data.filter((row) => row.type === "achievement" || row.table === "achievements") as unknown as AchievementData[]
}

export async function fetchGalleryData(): Promise<GalleryData[]> {
  const sheetUrl = getBaseSheetUrl()
  if (!sheetUrl) return []
  const data = await fetchGoogleSheetData(sheetUrl)
  return data.filter((row) => row.type === "gallery" || row.table === "gallery") as unknown as GalleryData[]
}

export async function fetchFacilityData(): Promise<FacilityData[]> {
  const sheetUrl = getBaseSheetUrl()
  if (!sheetUrl) return []
  const data = await fetchGoogleSheetData(sheetUrl)
  return data.filter((row) => row.type === "facility" || row.table === "facilities") as unknown as FacilityData[]
}

// Utility functions untuk transform data
export function transformSliderData(data: SliderData[]) {
  return data
    .filter(item => item.is_active === "true")
    .sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))
    .map(item => ({
      id: item.id,
      imageUrl: item.image_url,
      title: item.title,
      subtitle: item.subtitle
    }))
}

export function transformVillageInfo(data: VillageInfo[]) {
  const demographics = data.filter(item => item.section === "demographics")
  const description = data.find(item => item.section === "description")

  return {
    demographics: demographics.map(item => ({
      title: item.title,
      content: item.content,
      value: item.data_value
    })),
    description: description?.content || ""
  }
}

export function transformNewsData(data: NewsData[]) {
  return data
    .filter(item => item.is_published === "true")
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .map(item => ({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      author: item.author,
      category: item.category,
      imageUrl: item.image_url,
      views: parseInt(item.views) || 0,
      publishedAt: item.published_at
    }))
}

export function transformProductData(data: ProductData[]) {
  return data
    .filter(item => item.in_stock === "true")
    .map(item => ({
      id: item.id,
      name: item.name,
      description: item.description,
      price: parseFloat(item.price) || 0,
      category: item.category,
      sellerName: item.seller_name,
      sellerLocation: item.seller_location,
      sellerPhone: item.seller_phone,
      imageUrl: item.image_url,
      rating: parseFloat(item.rating) || 0
    }))
}

export function transformRegulationData(data: RegulationData[]) {
  return data
    .filter(item => item.status === "Aktif")
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      category: item.category,
      fileUrl: item.file_url,
      views: parseInt(item.views) || 0,
      publishedAt: item.published_at
    }))
}

export function transformAchievementData(data: AchievementData[]) {
  return data
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .map(item => ({
      id: item.id,
      title: item.title,
      year: item.year,
      category: item.category,
      description: item.description
    }))
}

export function transformGalleryData(data: GalleryData[]) {
  return data.map(item => ({
    id: item.id,
    title: item.title,
    category: item.category,
    imageUrl: item.image_url,
    description: item.description
  }))
}

export function transformFacilityData(data: FacilityData[]) {
  return data.map(item => ({
    id: item.id,
    name: item.name,
    category: item.category,
    description: item.description,
    location: item.location,
    contact: item.contact,
    imageUrl: item.image_url
  }))
}
