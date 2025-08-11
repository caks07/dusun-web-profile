import GoogleSheetsTest from "@/components/google-sheets-test"

export default function TestGoogleSheetsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Test Google Sheets Integration
                    </h1>
                    <p className="text-gray-600">
                        Halaman ini untuk testing koneksi ke Google Sheets dan memastikan data dapat diambil dengan benar.
                    </p>
                </div>

                <GoogleSheetsTest />

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h2 className="text-lg font-semibold text-blue-900 mb-2">
                        Cara Setup Google Sheets
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-blue-800">
                        <li>Buat file <code className="bg-blue-100 px-1 rounded">.env.local</code> di root project</li>
                        <li>Tambahkan <code className="bg-blue-100 px-1 rounded">GOOGLE_SHEETS_URL=YOUR_SHEET_URL</code></li>
                        <li>Buat Google Sheets dan publish ke web</li>
                        <li>Copy-paste data dari <code className="bg-blue-100 px-1 rounded">scripts/sheets-output/combined-data-complete.csv</code></li>
                        <li>Klik "Run Tests" di atas untuk test koneksi</li>
                    </ol>
                </div>
            </div>
        </div>
    )
} 