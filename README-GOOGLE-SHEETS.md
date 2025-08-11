# Setup Google Sheets untuk Website Desa

## 🚀 Quick Start

### 1. Generate Data CSV
```bash
node scripts/convert-sql-to-sheets.js
```

### 2. Buat Google Sheets dengan Multiple Sheets
1. Buka [Google Sheets](https://sheets.google.com)
2. Buat spreadsheet baru: "Data Website Desa"
3. Rename sheet pertama menjadi "slider_data"
4. Buat sheet baru untuk setiap jenis data:
   - `village_info`
   - `news`
   - `products`
   - `achievements`
   - `facilities`
5. Copy-paste data dari file CSV yang sesuai ke masing-masing sheet

### 3. Publish Google Sheets
1. File > Share > Publish to web
2. Pilih "Entire Document"
3. Format: "Web page"
4. Copy URL yang dihasilkan

### 4. Setup Environment
Buat file `.env.local`:
```env
GOOGLE_SHEETS_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID
```

### 5. Test
```bash
npm run dev
```

## 📁 File yang Dibuat

- `lib/google-sheets.ts` - Library untuk fetch data
- `scripts/convert-sql-to-sheets.js` - Script konversi SQL ke CSV
- `scripts/sheets-output/` - File CSV hasil konversi
- `docs/` - Dokumentasi lengkap

## 🔧 Cara Update Data

1. Edit data langsung di sheet yang sesuai di Google Sheets
2. Data akan otomatis ter-refresh di website
3. Tidak perlu deploy ulang
4. Setiap jenis data memiliki sheet terpisah untuk kemudahan pengelolaan

## 📊 Struktur Data

Data diorganisir dalam multiple sheets terpisah untuk kemudahan pengelolaan:
- `slider_data` - Data slider (Sheet 1, GID=0)
- `village_info` - Info desa (Sheet 2, GID=1)
- `news` - Berita (Sheet 3, GID=2)
- `products` - Produk UMKM (Sheet 4, GID=3)
- `achievements` - Prestasi (Sheet 5, GID=4)
- `facilities` - Fasilitas (Sheet 6, GID=5)

## 🛠️ Troubleshooting

### Data tidak muncul?
- Cek URL di `.env.local`
- Pastikan Google Sheets sudah di-publish
- Cek console browser untuk error

### Format data salah?
- Pastikan struktur kolom sesuai dengan sheet yang benar
- Semua data harus dalam format string
- Cek file CSV di `sheets-output/`
- Pastikan urutan sheet sesuai dengan GID (0,1,2,3,4,5)

## 📚 Dokumentasi Lengkap

Lihat file `PANDUAN-GOOGLE-SHEETS.md` untuk panduan lengkap dan step-by-step.

## 🎯 Keuntungan

✅ **Mudah diupdate** - Edit langsung di Google Sheets  
✅ **Real-time** - Data ter-refresh otomatis  
✅ **User-friendly** - Interface familiar  
✅ **No database** - Tidak perlu setup database  
✅ **Collaborative** - Bisa diakses multiple user  
✅ **Backup otomatis** - Google backup data  

## 🔄 Migrasi dari SQL

Jika sudah ada data di database SQL:
1. Export data ke format yang sesuai
2. Jalankan script konversi
3. Import ke Google Sheets
4. Update environment variable
5. Test website

## 📞 Support

Jika ada masalah:
1. Cek dokumentasi di folder `docs/`
2. Cek error di console browser
3. Validasi format data di Google Sheets
4. Test dengan data sample terlebih dahulu 