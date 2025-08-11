# 📋 Panduan Lengkap Google Sheets untuk Website Desa (Update)

## 🎯 Apa yang Telah Diubah?

Website sekarang mengambil data dari Google Sheets dengan **10 sheet terpisah**:
- **slider_data** - Data slider homepage
- **village_info** - Info desa (penduduk, luas, dll)
- **news** - Berita desa
- **products** - Produk UMKM
- **regulations** - Peraturan desa (BARU)
- **facilities** - Fasilitas desa (BARU)
- **achievements** - Prestasi desa (BARU)
- **history** - Sejarah desa (BARU)
- **organization** - Struktur organisasi (BARU)
- **gallery** - Galeri foto (BARU)

## 🚀 Langkah Setup (Step by Step)

### Step 1: Buat Google Sheets
1. Buka [Google Sheets](https://sheets.google.com)
2. Buat spreadsheet baru: **"Data Website Desa"**
3. Buat 10 sheet dengan nama:
   - `slider_data`
   - `village_info`
   - `news`
   - `products`
   - `regulations` (BARU)
   - `facilities` (BARU)
   - `achievements` (BARU)
   - `history` (BARU)
   - `organization` (BARU)
   - `gallery` (BARU)

### Step 2: Import Data dari File CSV
Copy-paste data dari file CSV di folder `scripts/sheets-output/` ke sheet yang sesuai:

#### Sheet: regulations
```
id,title,description,category,file_url,views,status,published_at,created_at,updated_at
1,Larangan Membuang Sampah Sembarangan,"Setiap warga dilarang keras membuang sampah di sungai, selokan, jalan, atau area publik lainnya. Sampah harus dikelola di tempat pembuangan sampah yang telah disediakan di masing-masing RT. Pelanggaran akan dikenakan sanksi sosial berupa kerja bakti membersihkan area desa selama 1 hari.",Lingkungan,,0,Aktif,2024-01-01,2024-01-01,2024-01-01
2,Wajib Lapor Tamu 1x24 Jam,"Setiap warga yang menerima tamu yang menginap lebih dari 1x24 jam wajib melaporkan identitas tamu tersebut kepada Ketua RT setempat. Hal ini bertujuan untuk menjaga keamanan dan ketertiban bersama.",Keamanan,,0,Aktif,2024-01-01,2024-01-01,2024-01-01
3,Izin Mendirikan Bangunan (IMB) Desa,"Warga yang akan membangun atau merenovasi rumah wajib mengurus IMB tingkat desa melalui Kepala Urusan Pembangunan. Ini untuk memastikan tata ruang desa tetap terjaga kerapian dan keserasiannya.",Pembangunan,,0,Aktif,2024-01-01,2024-01-01,2024-01-01
4,Larangan Ternak Berkeliaran,"Hewan ternak seperti sapi, kambing, dan ayam harus berada di dalam kandang dan tidak boleh dilepasliarkan di area pemukiman warga untuk menghindari kerusakan tanaman dan menjaga kebersihan lingkungan.",Peternakan,,0,Aktif,2024-01-01,2024-01-01,2024-01-01
```

#### Sheet: facilities
```
id,name,category,description,location,contact,image_url,created_at,updated_at
1,Balai Desa,Pemerintahan,"Pusat pemerintahan dan pelayanan administrasi warga. Dilengkapi dengan aula serbaguna untuk berbagai kegiatan masyarakat.","Jl. Raya Desa No. 1","(0274) 123-4567","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
2,Sekolah Dasar Negeri,Pendidikan,"Menyediakan pendidikan dasar berkualitas bagi anak-anak dusun. Memiliki 6 ruang kelas, perpustakaan, dan lapangan olahraga.","Jl. Pendidikan No. 10","(0274) 123-4568","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
3,Puskesmas Pembantu,Kesehatan,"Memberikan layanan kesehatan primer, termasuk pemeriksaan umum, KIA, dan apotek kecil untuk warga.","Jl. Sehat No. 3","(0274) 123-4569","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
4,Masjid Jami',Keagamaan,"Tempat ibadah utama bagi warga muslim, sekaligus pusat kegiatan keagamaan dan sosial.","Jl. Masjid No. 5","(0274) 123-4570","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
5,Pasar Desa,Ekonomi,"Pusat kegiatan ekonomi tempat warga menjual hasil bumi dan kebutuhan sehari-hari. Beroperasi setiap pagi.","Jl. Pasar No. 7","(0274) 123-4571","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
6,Halte Transportasi Umum,Transportasi,"Memudahkan akses warga menuju pusat kota dengan layanan angkutan desa yang terjadwal.","Jl. Raya Utama","(0274) 123-4572","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
```

#### Sheet: achievements
```
id,title,year,category,description,details,image_url,created_at,updated_at
1,Desa Sadar Wisata,2023,Pariwisata,"Penghargaan dari Dinas Pariwisata Provinsi atas keberhasilan mengembangkan potensi wisata lokal.","Program pengembangan wisata berbasis masyarakat yang melibatkan seluruh warga dalam melestarikan budaya dan alam. Desa berhasil menciptakan paket wisata edukasi pertanian dan budaya tradisional.","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
2,Juara 1 Lomba Kebersihan Tingkat Kabupaten,2023,Lingkungan,"Komitmen tinggi warga dalam menjaga kebersihan lingkungan membuahkan hasil terbaik.","Implementasi program 3R (Reduce, Reuse, Recycle) dan bank sampah yang dikelola secara mandiri oleh warga. Tingkat kebersihan lingkungan mencapai 95% dengan partisipasi aktif seluruh RT/RW.","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
3,Desa Digital Terbaik,2023,Teknologi,"Apresiasi atas pemanfaatan teknologi untuk pelayanan publik dan transparansi informasi desa.","Peluncuran sistem informasi desa berbasis web, aplikasi mobile untuk layanan administrasi, dan digitalisasi data kependudukan. Tingkat literasi digital warga meningkat 80%.","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
4,Desa Mandiri Energi,2022,Energi,"Implementasi energi terbarukan di tingkat desa dengan panel surya dan biogas.","Instalasi panel surya di 50 rumah warga dan pembangunan 10 unit biogas dari limbah ternak. Penghematan biaya listrik mencapai 60% dan pengurangan emisi karbon sebesar 40%.","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
5,Juara 2 Lomba Desa Inovatif,2022,Inovasi,"Pengakuan atas inovasi dalam pengembangan UMKM dan ekonomi kreatif desa.","Pengembangan sentra kerajinan anyaman pandan dan batik tulis yang menjadi produk unggulan desa. Omzet UMKM meningkat 150% dengan jangkauan pasar hingga luar daerah.","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
6,Desa Sehat Nasional,2021,Kesehatan,"Penghargaan tingkat nasional untuk program kesehatan masyarakat yang komprehensif.","Program Posyandu aktif di setiap RT, kampanye hidup sehat, dan cakupan imunisasi 100%. Angka stunting turun menjadi 0% dan tingkat kesehatan masyarakat meningkat signifikan.","/placeholder.svg?height=300&width=400",2024-01-01,2024-01-01
```

#### Sheet: history
```
id,year,title,description,image_url,created_at,updated_at
1,1850,Pendirian Dusun,"Dusun Yogyakarta didirikan oleh sekelompok perantau dari Jawa Tengah, mencari lahan subur untuk pertanian. Nama 'Yogyakarta' dipilih dengan harapan menjadi tempat yang makmur.","/placeholder.svg?height=400&width=800",2024-01-01,2024-01-01
2,1900-1940,Era Kolonial,"Di bawah pemerintahan Belanda, desa menjadi pusat perkebunan tebu dan kopi. Infrastruktur dasar seperti jalan setapak dan irigasi mulai dibangun oleh warga secara gotong royong.","/placeholder.svg?height=400&width=800",2024-01-01,2024-01-01
3,1945-1965,Masa Kemerdekaan,"Warga desa turut serta dalam perjuangan kemerdekaan. Setelah merdeka, balai desa pertama dibangun sebagai simbol pemerintahan mandiri.","/placeholder.svg?height=400&width=800",2024-01-01,2024-01-01
4,1980-2000,Era Pembangunan,"Pemerintah mulai menggalakkan program pembangunan desa. Listrik masuk desa, sekolah dasar negeri dibangun, dan akses jalan diperlebar.","/placeholder.svg?height=400&width=800",2024-01-01,2024-01-01
5,2001-Sekarang,Transformasi Digital,"Memasuki milenium baru, desa beradaptasi dengan teknologi. UMKM mulai bermunculan, dan website desa ini diluncurkan untuk menyebarkan informasi ke seluruh dunia.","/placeholder.svg?height=400&width=800",2024-01-01,2024-01-01
```

#### Sheet: organization
```
id,name,position,period,image_url,level,created_at,updated_at
1,Bapak Suharto,Kepala Desa,2019-2025,"/placeholder.svg?height=150&width=150",kepala_desa,2024-01-01,2024-01-01
2,Ibu Siti Aminah,Sekretaris Desa,2020-2026,"/placeholder.svg?height=150&width=150",sekretaris,2024-01-01,2024-01-01
3,Bapak Ahmad Wijaya,Kepala Urusan Pemerintahan,2020-2026,"/placeholder.svg?height=150&width=150",kaur,2024-01-01,2024-01-01
4,Bapak Bambang Sutrisno,Kepala Urusan Pembangunan,2020-2026,"/placeholder.svg?height=150&width=150",kaur,2024-01-01,2024-01-01
5,Ibu Dewi Sartika,Kepala Urusan Kesejahteraan,2020-2026,"/placeholder.svg?height=150&width=150",kaur,2024-01-01,2024-01-01
6,Bapak Eko Prasetyo,Kepala Urusan Keuangan,2020-2026,"/placeholder.svg?height=150&width=150",kaur,2024-01-01,2024-01-01
7,Bapak Subagyo,Ketua RW 01,2021-2026,"/placeholder.svg?height=150&width=150",rw,2024-01-01,2024-01-01
8,Bapak Hermawan,Ketua RW 02,2021-2026,"/placeholder.svg?height=150&width=150",rw,2024-01-01,2024-01-01
9,Bapak Sujono,Ketua RW 03,2021-2026,"/placeholder.svg?height=150&width=150",rw,2024-01-01,2024-01-01
```

#### Sheet: gallery
```
id,title,category,image_url,description,created_at,updated_at
1,Warga gotong royong membersihkan desa,Kegiatan Warga,"/placeholder.svg?height=300&width=400","Kegiatan gotong royong rutin warga dalam menjaga kebersihan lingkungan desa.",2024-01-01,2024-01-01
2,Pemandangan sawah terasering di pagi hari,Keindahan Alam,"/placeholder.svg?height=300&width=400","Keindahan alam sawah terasering yang menjadi ciri khas pertanian desa.",2024-01-01,2024-01-01
3,Penari tradisional dalam acara desa,Budaya,"/placeholder.svg?height=300&width=400","Pertunjukan tari tradisional dalam acara budaya tahunan desa.",2024-01-01,2024-01-01
4,Pembangunan jalan baru di desa,Pembangunan,"/placeholder.svg?height=300&width=400","Proses pembangunan infrastruktur jalan untuk meningkatkan akses transportasi.",2024-01-01,2024-01-01
5,Anak-anak bermain di lapangan desa,Kegiatan Warga,"/placeholder.svg?height=300&width=400","Kegiatan bermain dan olahraga anak-anak di lapangan desa.",2024-01-01,2024-01-01
6,Sungai jernih yang mengalir di tepi desa,Keindahan Alam,"/placeholder.svg?height=300&width=400","Keindahan sungai yang mengalir di tepi desa dengan air yang jernih.",2024-01-01,2024-01-01
7,Gedung balai desa yang baru direnovasi,Pembangunan,"/placeholder.svg?height=300&width=400","Hasil renovasi gedung balai desa yang menjadi pusat kegiatan warga.",2024-01-01,2024-01-01
8,Upacara adat tahunan desa,Budaya,"/placeholder.svg?height=300&width=400","Upacara adat tradisional yang dilaksanakan setiap tahun untuk melestarikan budaya.",2024-01-01,2024-01-01
9,Matahari terbenam di atas perbukitan desa,Keindahan Alam,"/placeholder.svg?height=300&width=400","Pemandangan matahari terbenam yang indah di atas perbukitan desa.",2024-01-01,2024-01-01
```

### Step 3: Publish Google Sheets
1. File → Share → **Publish to web**
2. Pilih **"Entire Document"**
3. Format: **"Web page"**
4. Klik **"Publish"**
5. Copy URL yang muncul

### Step 4: Setup Environment
Buat file `.env.local` di root project:
```env
GOOGLE_SHEETS_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID
```
Ganti `YOUR_SHEET_ID` dengan ID dari URL Google Sheets Anda.

### Step 5: Test Website
```bash
npm run dev
```
Buka `http://localhost:3000/test-google-sheets` untuk test koneksi.

## 📝 Cara Update Data

### Menambah Peraturan Baru
1. Buka sheet `regulations`
2. Tambah row baru
3. Isi data sesuai kolom yang ada
4. Set `status` = "Aktif" untuk tampil

### Menambah Fasilitas Baru
1. Buka sheet `facilities`
2. Tambah row baru
3. Isi data sesuai kolom yang ada
4. Pilih `category` yang sesuai (Pemerintahan, Pendidikan, Kesehatan, dll)

### Menambah Prestasi Baru
1. Buka sheet `achievements`
2. Tambah row baru
3. Isi data sesuai kolom yang ada
4. Pilih `category` yang sesuai (Pariwisata, Lingkungan, Teknologi, dll)

### Menambah Sejarah Baru
1. Buka sheet `history`
2. Tambah row baru
3. Isi data sesuai kolom yang ada
4. Data akan otomatis diurutkan berdasarkan tahun

### Menambah Anggota Organisasi Baru
1. Buka sheet `organization`
2. Tambah row baru
3. Isi data sesuai kolom yang ada
4. Pilih `level` yang sesuai (kepala_desa, sekretaris, kaur, rw)

### Menambah Foto Galeri Baru
1. Buka sheet `gallery`
2. Tambah row baru
3. Isi data sesuai kolom yang ada
4. Pilih `category` yang sesuai (Kegiatan Warga, Keindahan Alam, Pembangunan, Budaya)

## 🔧 Troubleshooting

### Error 404
- Pastikan Google Sheets sudah di-publish
- Cek URL di `.env.local` sudah benar
- Pastikan permission set ke "Anyone with the link can view"

### Data tidak muncul
- Cek urutan sheet (harus sesuai dengan GID di `google-sheets-multi.ts`)
- Pastikan struktur kolom sesuai dengan file CSV
- Cek console browser untuk error detail

### Hydration Error
- Ini normal jika data berubah antara server dan client
- Data akan ter-refresh otomatis

## 📊 Struktur Data Baru

### Sheet: regulations
| id | title | description | category | file_url | views | status | published_at | created_at | updated_at |
|---|---|---|---|---|---|---|---|---|---|

### Sheet: facilities
| id | name | category | description | location | contact | image_url | created_at | updated_at |
|---|---|---|---|---|---|---|---|---|

### Sheet: achievements
| id | title | year | category | description | details | image_url | created_at | updated_at |
|---|---|---|---|---|---|---|---|---|

### Sheet: history
| id | year | title | description | image_url | created_at | updated_at |
|---|---|---|---|---|---|---|

### Sheet: organization
| id | name | position | period | image_url | level | created_at | updated_at |
|---|---|---|---|---|---|---|---|

### Sheet: gallery
| id | title | category | image_url | description | created_at | updated_at |
|---|---|---|---|---|---|---|

## 🎯 Keuntungan Sistem Ini

✅ **Mudah dikelola** - Setiap jenis data memiliki sheet terpisah  
✅ **Input data langsung** - Tidak perlu mengisi kolom type/table  
✅ **Update real-time** - Data langsung muncul di website  
✅ **Tidak perlu database** - Google Sheets sebagai backend  
✅ **User-friendly** - Interface familiar untuk admin  
✅ **Kategori dinamis** - Icon dan warna otomatis berdasarkan kategori  
✅ **Fallback data** - Jika Google Sheets error, website tetap berjalan dengan data placeholder  

## 📞 Support

Jika ada masalah:
1. Cek error di console browser (F12)
2. Pastikan semua step di atas sudah dilakukan
3. Test dengan halaman `/test-google-sheets`
4. Cek file CSV di `scripts/sheets-output/` untuk referensi struktur data

---

**Catatan**: Sistem ini menggunakan library `google-sheets-multi.ts` yang sudah otomatis mengatur GID untuk setiap sheet. Anda tidak perlu mengatur GID manual. 