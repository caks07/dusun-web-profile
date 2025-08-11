-- Seed initial data for the village website

-- Insert slider data
INSERT INTO slider_data (image_url, title, subtitle, sort_order) VALUES
('/placeholder.svg?height=600&width=1200', 'Selamat Datang di Dusun Kami', 'Dusun yang asri dan damai di jantung Yogyakarta', 1),
('/placeholder.svg?height=600&width=1200', 'Tradisi dan Budaya', 'Melestarikan warisan budaya Jawa yang kaya', 2),
('/placeholder.svg?height=600&width=1200', 'Gotong Royong', 'Semangat kebersamaan dalam membangun desa', 3);

-- Insert village information
INSERT INTO village_info (section, title, content, data_value) VALUES
('demographics', 'Total Penduduk', 'Jumlah total penduduk desa', '520'),
('demographics', 'Kepala Keluarga', 'Jumlah kepala keluarga', '156'),
('demographics', 'RT/RW', 'Jumlah RT dan RW', '12'),
('demographics', 'Luas Wilayah', 'Luas wilayah dalam hektar', '15'),
('description', 'Deskripsi Desa', 'Dusun kami adalah sebuah komunitas yang terletak di jantung Yogyakarta, dikenal dengan keramahan penduduknya dan kekayaan budaya Jawa yang masih terjaga.', NULL);

-- Insert sample news
INSERT INTO news (title, excerpt, content, author, category, image_url, published_at) VALUES
('Gotong Royong Pembersihan Lingkungan Desa', 'Kegiatan gotong royong pembersihan lingkungan akan dilaksanakan pada hari Minggu, 15 Januari 2024.', 'Kegiatan gotong royong pembersihan lingkungan akan dilaksanakan pada hari Minggu, 15 Januari 2024 pukul 07.00 WIB. Seluruh warga diharapkan dapat berpartisipasi aktif dalam kegiatan ini untuk menjaga kebersihan dan keindahan lingkungan desa kita.', 'Admin Desa', 'Kegiatan', '/placeholder.svg?height=200&width=400', '2024-01-10'),
('Pembangunan Jalan Desa Tahap II Dimulai', 'Proyek pembangunan jalan desa tahap II akan dimulai minggu depan dengan anggaran dari dana desa.', 'Proyek pembangunan jalan desa tahap II akan dimulai minggu depan dengan anggaran dari dana desa. Pembangunan ini diharapkan dapat meningkatkan aksesibilitas warga dan mendukung perekonomian desa.', 'Kepala Desa', 'Pembangunan', '/placeholder.svg?height=200&width=400', '2024-01-08');

-- Insert sample products
INSERT INTO products (name, description, price, category, seller_name, seller_location, seller_phone, image_url, rating) VALUES
('Gudeg Khas Bu Sari', 'Gudeg tradisional dengan cita rasa autentik, dibuat dengan resep turun temurun.', 15000, 'Makanan', 'Bu Sari', 'RT 02/RW 01', '081234567890', '/placeholder.svg?height=200&width=300', 4.8),
('Tas Anyaman Pandan', 'Tas anyaman dari pandan berkualitas tinggi, ramah lingkungan dan tahan lama.', 75000, 'Kerajinan', 'Pak Bambang', 'RT 03/RW 02', '081234567891', '/placeholder.svg?height=200&width=300', 4.5),
('Beras Organik Premium', 'Beras organik hasil panen lokal, bebas pestisida dan pupuk kimia.', 18000, 'Pertanian', 'Kelompok Tani Makmur', 'RT 01/RW 01', '081234567892', '/placeholder.svg?height=200&width=300', 4.9);

-- Insert achievements
INSERT INTO achievements (title, year, category, description) VALUES
('Desa Terbersih Tingkat Kecamatan', '2023', 'Lingkungan', 'Penghargaan atas komitmen menjaga kebersihan lingkungan'),
('Juara 1 Lomba Desa Wisata', '2022', 'Pariwisata', 'Pengembangan potensi wisata berbasis masyarakat'),
('Desa Mandiri Energi', '2023', 'Energi', 'Implementasi energi terbarukan di tingkat desa');

-- Insert facilities
INSERT INTO facilities (name, category, description, location) VALUES
('Balai Desa', 'Pemerintahan', 'Pusat kegiatan masyarakat dan pelayanan administrasi', 'Jl. Raya Desa No. 1'),
('Masjid Al-Ikhlas', 'Ibadah', 'Tempat ibadah utama masyarakat muslim', 'Jl. Masjid No. 5'),
('SD Negeri 1', 'Pendidikan', 'Sekolah dasar negeri terdekat', 'Jl. Pendidikan No. 10'),
('Puskesmas Pembantu', 'Kesehatan', 'Layanan kesehatan dasar masyarakat', 'Jl. Sehat No. 3');
