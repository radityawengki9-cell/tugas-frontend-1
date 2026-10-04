// LOGIKA — dikerjakan bersama di Bagian 6.
// Kebiasaan hari ini: tulis LANGKAH 1–3 sebagai komentar DULU, baru kode.

console.table(daftarMenu);

// ── Contoh yang sudah jadi ─────────────────────────────────────
function hitungTotal(daftar) {
  let total = 0;
  for (const item of daftar) {
    total = total + item.harga;
  }
  return total;
}

console.log("Total semua harga:", hitungTotal(daftarMenu));

// ── Giliran kita: cariTermurah ─────────────────────────────────
// LANGKAH 1 — PAHAMI
// Masukan : ...
// Keluaran: ...

// LANGKAH 2 — CONTOH
// ...

// LANGKAH 3 — LANGKAH (pseudocode)
// ...

// LANGKAH 4 — TERJEMAHKAN
// function cariTermurah(daftar) { ... }
