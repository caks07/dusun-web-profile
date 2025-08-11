"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    fetchSliderData,
    fetchVillageInfo,
    fetchNewsData,
    fetchProductData,
    fetchAchievementData,
    fetchFacilityData
} from "@/lib/google-sheets-multi"

interface TestResult {
    name: string
    status: 'loading' | 'success' | 'error'
    data?: any[]
    error?: string
}

export default function GoogleSheetsTest() {
    const [results, setResults] = useState<TestResult[]>([])
    const [isTesting, setIsTesting] = useState(false)

    const testFunctions = [
        { name: 'Slider Data', fn: fetchSliderData },
        { name: 'Village Info', fn: fetchVillageInfo },
        { name: 'News Data', fn: fetchNewsData },
        { name: 'Product Data', fn: fetchProductData },
        { name: 'Achievement Data', fn: fetchAchievementData },
        { name: 'Facility Data', fn: fetchFacilityData },
    ]

    const runTests = async () => {
        setIsTesting(true)
        const newResults: TestResult[] = []

        for (const test of testFunctions) {
            // Set loading state
            newResults.push({ name: test.name, status: 'loading' })
            setResults([...newResults])

            try {
                const data = await test.fn()
                newResults[newResults.length - 1] = {
                    name: test.name,
                    status: 'success',
                    data: data
                }
            } catch (error) {
                newResults[newResults.length - 1] = {
                    name: test.name,
                    status: 'error',
                    error: error instanceof Error ? error.message : 'Unknown error'
                }
            }

            setResults([...newResults])
        }

        setIsTesting(false)
    }

    const getStatusColor = (status: TestResult['status']) => {
        switch (status) {
            case 'loading': return 'bg-yellow-500'
            case 'success': return 'bg-green-500'
            case 'error': return 'bg-red-500'
        }
    }

    const getStatusText = (status: TestResult['status']) => {
        switch (status) {
            case 'loading': return 'Loading...'
            case 'success': return 'Success'
            case 'error': return 'Error'
        }
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Google Sheets Connection Test</CardTitle>
                    <CardDescription>
                        Test koneksi ke Google Sheets dan ambil data dari berbagai tabel
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <Button
                            onClick={runTests}
                            disabled={isTesting}
                            className="w-full"
                        >
                            {isTesting ? 'Testing...' : 'Run Tests'}
                        </Button>

                        <div className="grid gap-4">
                            {results.map((result, index) => (
                                <Card key={index}>
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-lg">{result.name}</CardTitle>
                                            <Badge className={getStatusColor(result.status)}>
                                                {getStatusText(result.status)}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        {result.status === 'loading' && (
                                            <div className="text-sm text-muted-foreground">
                                                Mengambil data...
                                            </div>
                                        )}

                                        {result.status === 'success' && (
                                            <div className="space-y-2">
                                                <div className="text-sm text-green-600">
                                                    ✅ Berhasil mengambil {result.data?.length || 0} data
                                                </div>
                                                {result.data && result.data.length > 0 && (
                                                    <details className="text-sm">
                                                        <summary className="cursor-pointer text-muted-foreground">
                                                            Lihat data (klik untuk expand)
                                                        </summary>
                                                        <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto max-h-40">
                                                            {JSON.stringify(result.data, null, 2)}
                                                        </pre>
                                                    </details>
                                                )}
                                            </div>
                                        )}

                                        {result.status === 'error' && (
                                            <div className="text-sm text-red-600">
                                                ❌ Error: {result.error}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {results.length === 0 && (
                            <div className="text-center text-muted-foreground py-8">
                                Klik "Run Tests" untuk memulai testing koneksi Google Sheets
                            </div>
                        )}

                        {results.length > 0 && results.every(r => r.status !== 'loading') && (
                            <Card className="mt-6">
                                <CardHeader>
                                    <CardTitle className="text-lg">Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-green-600">
                                                {results.filter(r => r.status === 'success').length}
                                            </div>
                                            <div className="text-sm text-muted-foreground">Success</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-red-600">
                                                {results.filter(r => r.status === 'error').length}
                                            </div>
                                            <div className="text-sm text-muted-foreground">Error</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600">
                                                {results.length}
                                            </div>
                                            <div className="text-sm text-muted-foreground">Total</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 