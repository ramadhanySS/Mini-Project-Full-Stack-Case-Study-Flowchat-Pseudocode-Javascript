# Dekomposisi Masalah — Checkout Produk Sederhana

## 1. Input
- `harga`: harga satu produk; harus berupa angka yang valid dan lebih dari 0.
- `jumlah`: jumlah produk; harus berupa bilangan bulat positif.
- `isMember`: status keanggotaan; `true` untuk member dan `false` untuk non-member.

## 2. Proses
1. Periksa apakah `harga` berupa angka valid dan lebih dari 0.
2. Periksa apakah `jumlah` berupa bilangan bulat dan lebih dari 0.
3. Periksa apakah `isMember` berupa boolean.
4. Hitung `subtotal = harga × jumlah`.
5. Jika pelanggan member, hitung diskon 10% dari subtotal. Jika bukan member, diskon = 0.
6. Hitung `totalSetelahDiskon = subtotal − diskon`.
7. Jika `totalSetelahDiskon >= 250000`, ongkos kirim = 0. Jika tidak, ongkos kirim = 15000.
8. Hitung `totalPembayaran = totalSetelahDiskon + ongkir`.

Jika validasi gagal, fungsi mengembalikan pesan error dan tidak melanjutkan perhitungan.

## 3. Output
Jika input valid, fungsi mengembalikan objek yang berisi:
- `subtotal`
- `diskon`
- `totalSetelahDiskon`
- `ongkir`
- `totalPembayaran`

Jika input tidak valid, fungsi mengembalikan objek berisi pesan `error`.

## 4. Pattern Recognition (Pengenalan Pola)
Alur checkout memiliki pola yang berulang:
- Memvalidasi input sebelum digunakan.
- Menghitung nilai awal dari harga dikali jumlah.
- Menerapkan diskon berdasarkan status member.
- Menentukan ongkos kirim berdasarkan nilai setelah diskon.
- Menjumlahkan nilai setelah diskon dan ongkos kirim untuk memperoleh total pembayaran.

## 5. Abstraction (Abstraksi)
Perhitungan tidak membutuhkan nama produk, nama pelanggan, metode pembayaran, stok, atau alamat pengiriman. Informasi yang diperlukan hanya harga, jumlah, dan status member. Seluruh aturan perhitungan dikelompokkan dalam satu fungsi yang dapat digunakan kembali, yaitu `hitungCheckout(harga, jumlah, isMember)`.

## Aturan Keputusan
- Harga, jumlah, atau tipe status member tidak valid → kembalikan pesan error.
- `isMember === true` → diskon sebesar 10% dari subtotal.
- `isMember === false` → tidak ada diskon.
- Total setelah diskon ≥ Rp250.000 → ongkos kirim gratis.
- Total setelah diskon < Rp250.000 → ongkos kirim Rp15.000.
