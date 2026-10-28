
function hitungCheckout(harga, jumlah, isMember) {
  if (typeof harga !== "number") {
    return {
      error: "Harga harus berupa angka positif."
    };
  }

  if (!Number.isFinite(harga)) {
    return {
      error: "Harga harus berupa angka positif."
    };
  }

  if (harga <= 0) {
    return {
      error: "Harga harus berupa angka positif."
    };
  }

  if (!Number.isInteger(jumlah) || jumlah <= 0) {
    return {
      error: "Jumlah harus bilangan bulat positif."
    };
  }

  if (typeof isMember !== "boolean") {
    return {
      error: "Status member harus true atau false."
    };
  }

  const subtotal = harga * jumlah;

  const diskon = isMember ? subtotal * 0.10 : 0;

  const totalSetelahDiskon = subtotal - diskon;

  const ongkir = totalSetelahDiskon >= 250000 ? 0 : 15000;

  const totalPembayaran = totalSetelahDiskon + ongkir;

  return {
    subtotal,
    diskon,
    totalSetelahDiskon,
    ongkir,
    totalPembayaran
  };
}

// Contoh penggunaan
const hasil = hitungCheckout(100000, 3, true);

if (hasil.error) {
  console.log(hasil.error);
} else {
  console.log("Hasil Checkout:");
  console.log(hasil);
}

module.exports = { hitungCheckout };
