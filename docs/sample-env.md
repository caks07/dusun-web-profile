# Setup Environment Variable

## Buat file .env.local

Buat file `.env.local` di root project dengan isi:

```env
# Google Sheets Configuration
# Untuk testing, gunakan URL sample ini:
GOOGLE_SHEETS_URL=https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/pub?output=csv

# Atau gunakan URL Google Sheets Anda sendiri:
# GOOGLE_SHEETS_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pub?output=csv
```

## Langkah-langkah Setup Google Sheets:

### 1. Buat Google Sheets
1. Buka [Google Sheets](https://sheets.google.com)
2. Buat spreadsheet baru dengan nama "Data Website Desa"
3. Copy-paste isi file `scripts/sheets-output/combined-data-complete.csv` ke sheet pertama

### 2. Publish ke Web
1. File > Share > Publish to web
2. Pilih "Entire Document"
3. Format: "Web page"
4. Copy URL yang dihasilkan

### 3. Update Environment Variable
Ganti URL di file `.env.local` dengan URL yang dihasilkan dari step 2.

### 4. Test
Jalankan `npm run dev` dan cek apakah data berhasil diambil.

## Troubleshooting

Jika masih error 404:
1. Pastikan Google Sheets sudah di-publish
2. Cek URL di browser apakah bisa diakses
3. Pastikan permission set ke "Anyone with the link can view"
4. Cek format URL: harus berakhir dengan `&output=csv` 