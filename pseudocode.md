# Pseudocode — hitungCheckout

FUNGSI hitungCheckout(harga, jumlah, isMember)

    JIKA harga bukan angka valid ATAU harga <= 0
        KEMBALIKAN pesan error "Input tidak valid: harga harus berupa angka positif."
    AKHIR JIKA

    JIKA jumlah bukan bilangan bulat ATAU jumlah <= 0
        KEMBALIKAN pesan error "Input tidak valid: jumlah harus bilangan bulat positif."
    AKHIR JIKA

    JIKA isMember bukan true DAN isMember bukan false
        KEMBALIKAN pesan error "Input tidak valid: status member harus boolean."
    AKHIR JIKA

    subtotal = harga * jumlah

    JIKA isMember == true
        diskon = subtotal * 0.10
    JIKA TIDAK
        diskon = 0
    AKHIR JIKA

    totalSetelahDiskon = subtotal - diskon

    JIKA totalSetelahDiskon >= 250000
        ongkir = 0
    JIKA TIDAK
        ongkir = 15000
    AKHIR JIKA

    totalPembayaran = totalSetelahDiskon + ongkir

    KEMBALIKAN {
        subtotal,
        diskon,
        totalSetelahDiskon,
        ongkir,
        totalPembayaran
    }

AKHIR FUNGSI
