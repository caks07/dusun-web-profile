# 📋 Panduan Lengkap Google Sheets untuk Website Desa

## 🎯 Apa yang Akan Dibuat?

Website akan mengambil data dari Google Sheets dengan **6 sheet terpisah**:
- **slider_data** - Data slider homepage
- **village_info** - Info desa (penduduk, luas, dll)
- **news** - Berita desa
- **products** - Produk UMKM
- **achievements** - Prestasi desa
- **facilities** - Fasilitas desa

## 🚀 Langkah Setup (Step by Step)

### Step 1: Generate Data Sample
```bash
node scripts/convert-sql-to-sheets.js
```
Ini akan membuat file CSV di folder `scripts/sheets-output/`

### Step 2: Buat Google Sheets
1. Buka [Google Sheets](https://sheets.google.com)
2. Buat spreadsheet baru: **"Data Website Desa"**
3. Rename sheet pertama menjadi **"slider_data"**
4. Buat 5 sheet baru dengan nama:
   - `village_info`
   - `news`
   - `products`
   - `achievements`
   - `facilities`

### Step 3: Import Data
Copy-paste data dari file CSV ke sheet yang sesuai:
- `slider_data.csv` → sheet slider_data
- `village_info.csv` → sheet village_info
- `news.csv` → sheet news
- `products.csv` → sheet products
- `achievements.csv` → sheet achievements
- `facilities.csv` → sheet facilities

### Step 4: Publish Google Sheets
1. File → Share → **Publish to web**
2. Pilih **"Entire Document"**
3. Format: **"Web page"**
4. Klik **"Publish"**
5. Copy URL yang muncul

### Step 5: Setup Environment
Buat file `.env.local` di root project:
```env
GOOGLE_SHEETS_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID
```
Ganti `YOUR_SHEET_ID` dengan ID dari URL Google Sheets Anda.

### Step 6: Test Website
```bash
npm run dev
```
Buka `http://localhost:3000/test-google-sheets` untuk test koneksi.

## 📝 Cara Update Data

### Menambah Slider Baru
1. Buka sheet `slider_data`
2. Tambah row baru
3. Isi data sesuai kolom yang ada
4. Set `is_active` = "true" untuk tampil

### Menambah Berita Baru
1. Buka sheet `news`
2. Tambah row baru
3. Isi data sesuai kolom yang ada
4. Set `is_published` = "true" untuk publish

### Menambah Produk Baru
1. Buka sheet `products`
2. Tambah row baru
3. Isi data sesuai kolom yang ada
4. Set `in_stock` = "true" untuk tampil

## 🔧 Troubleshooting

### Error 404
- Pastikan Google Sheets sudah di-publish
- Cek URL di `.env.local` sudah benar
- Pastikan permission set ke "Anyone with the link can view"

### Data tidak muncul
- Cek urutan sheet (harus sesuai: slider_data, village_info, news, products, achievements, facilities)
- Pastikan struktur kolom sesuai dengan file CSV
- Cek console browser untuk error detail

### Hydration Error
- Ini normal jika data berubah antara server dan client
- Data akan ter-refresh otomatis

## 📊 Struktur Data

### Sheet: slider_data
| id | image_url | title | subtitle | is_active | sort_order | created_at | updated_at |
|---|---|---|---|---|---|---|---|

### Sheet: news
| id | title | excerpt | content | author | category | image_url | views | is_published | published_at | created_at | updated_at |
|---|---|---|---|---|---|---|---|---|---|---|---|

### Sheet: products
| id | name | description | price | category | seller_name | seller_location | seller_phone | image_url | rating | in_stock | created_at | updated_at |
|---|---|---|---|---|---|---|---|---|---|---|---|

## 🎯 Keuntungan Sistem Ini

✅ **Mudah dikelola** - Setiap jenis data memiliki sheet terpisah  
✅ **Input data langsung** - Tidak perlu mengisi kolom type/table  
✅ **Update real-time** - Data langsung muncul di website  
✅ **Tidak perlu database** - Google Sheets sebagai backend  
✅ **User-friendly** - Interface familiar untuk admin  

## 📞 Support

Jika ada masalah:
1. Cek error di console browser (F12)
2. Pastikan semua step di atas sudah dilakukan
3. Test dengan halaman `/test-google-sheets`
4. Cek file CSV di `scripts/sheets-output/` untuk referensi struktur data

---

**Catatan**: Sistem ini menggunakan library `google-sheets-multi.ts` yang sudah otomatis mengatur GID untuk setiap sheet. Anda tidak perlu mengatur GID manual. 