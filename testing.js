
const { hitungCheckout } = require("./cheackout.js");

// Daftar skenario pengujian
const pengujian = [
  {
    nama: "1. Member mendapat diskon 10%",
    input: [100000, 2, true],
    ekspektasi: {
      subtotal: 200000,
      diskon: 20000,
      totalSetelahDiskon: 180000,
      ongkir: 15000,
      totalPembayaran: 195000
    }
  },
  {
    nama: "2. Non-member tanpa diskon",
    input: [100000, 2, false],
    ekspektasi: {
      subtotal: 200000,
      diskon: 0,
      totalSetelahDiskon: 200000,
      ongkir: 15000,
      totalPembayaran: 215000
    }
  },
  {
    nama: "3. Gratis ongkir setelah diskon",
    input: [150000, 2, true],
    ekspektasi: {
      subtotal: 300000,
      diskon: 30000,
      totalSetelahDiskon: 270000,
      ongkir: 0,
      totalPembayaran: 270000
    }
  },
  {
    nama: "4. Total tepat Rp250.000",
    input: [250000, 1, false],
    ekspektasi: {
      subtotal: 250000,
      diskon: 0,
      totalSetelahDiskon: 250000,
      ongkir: 0,
      totalPembayaran: 250000
    }
  },
  {
    nama: "5. Total di bawah batas gratis ongkir",
    input: [100000, 2, false],
    ekspektasi: {
      subtotal: 200000,
      diskon: 0,
      totalSetelahDiskon: 200000,
      ongkir: 15000,
      totalPembayaran: 215000
    }
  },
  {
    nama: "6. Jumlah produk nol",
    input: [100000, 0, false],
    ekspektasiError: true
  },
  {
    nama: "7. Jumlah produk pecahan",
    input: [100000, 1.5, false],
    ekspektasiError: true
  },
  {
    nama: "8. Harga nol",
    input: [0, 2, false],
    ekspektasiError: true
  },
  {
    nama: "9. Harga berupa teks",
    input: ["100000", 2, false],
    ekspektasiError: true
  },
  {
    nama: "10. Status member tidak valid",
    input: [100000, 2, "ya"],
    ekspektasiError: true
  }
];

// Jalankan seluruh pengujian
let berhasil = 0;
let gagal = 0;

console.log("=== HASIL PENGUJIAN CHECKOUT ===\n");

for (const kasus of pengujian) {
  const hasil = hitungCheckout(...kasus.input);

  let lulus;

  if (kasus.ekspektasiError) {
    lulus = Boolean(hasil.error);
  } else {
    lulus =
      !hasil.error &&
      Object.keys(kasus.ekspektasi).every(
        (kunci) => hasil[kunci] === kasus.ekspektasi[kunci]
      );
  }

  if (lulus) {
    berhasil++;
    console.log(`✅ LULUS - ${kasus.nama}`);
  } else {
    gagal++;
    console.log(`❌ GAGAL - ${kasus.nama}`);
    console.log("   Hasil:", hasil);
    console.log(
      "   Ekspektasi:",
      kasus.ekspektasi ?? "Harus menghasilkan error"
    );
  }
}

console.log("\n=== RINGKASAN ===");
console.log(`Total pengujian : ${pengujian.length}`);
console.log(`Berhasil        : ${berhasil}`);
console.log(`Gagal           : ${gagal}`);
console.log(
  gagal === 0
    ? "Semua pengujian berhasil!"
    : "Masih ada pengujian yang perlu diperbaiki."
);
