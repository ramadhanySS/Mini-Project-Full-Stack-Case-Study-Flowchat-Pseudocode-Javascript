# Studi Kasus Checkout Produk Sederhana

**Nama:** Ramadhany Setiawan Shogira

## Deskripsi
Program ini menghitung pembayaran checkout produk menggunakan JavaScript dan Node.js. Program memvalidasi input, menghitung subtotal, menerapkan diskon member, menentukan ongkos kirim, lalu menghitung total pembayaran.

## Aturan Bisnis
1. `harga` harus berupa angka terbatas (bukan `NaN` atau tak hingga) dan lebih dari 0.
2. `jumlah` harus berupa bilangan bulat positif.
3. Member mendapat diskon 10% dari subtotal. Non-member tidak mendapat diskon.
4. Ongkos kirim gratis jika total setelah diskon minimal Rp250.000. Jika kurang dari Rp250.000, ongkos kirim Rp15.000.
5. Total pembayaran = total setelah diskon + ongkos kirim.
6. `isMember` harus berupa boolean: `true` atau `false`.

## Kebutuhan
- Node.js sudah terpasang.
- Tidak memerlukan library tambahan.

## Cara Menjalankan
1. Buka folder proyek di Visual Studio Code.
2. Buka terminal pada folder proyek.
3. Jalankan perintah:

```bash
node cheackout.js
```

Untuk mencoba input lain, ubah contoh pemanggilan fungsi di bagian bawah `cheackout.js`.

## Ringkasan Penggunaan AI
AI hanya digunakan untuk membantu menyusun skenario pengujian serta meninjau apakah alur program sudah benar dan diagram yang digunakan sudah tepat. 
