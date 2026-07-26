# ⚽ Prediksi Bola Auto Generator

### GitHub Pages Edition — Multi-Brand Sites

Generator prediksi bola otomatis multi-brand — **pure HTML/JS**, tanpa PHP backend, 100% static, deploy gratis di GitHub Pages.

---

## 🏷️ Daftar Brand

| # | Brand | File Generator | File Auto Embed | Tema Warna |
|---|-------|---------------|-----------------|------------|
| 1 | **HOKBENTOTO** | `hokbentoto.html` | `hokbentoto-auto.html` | Black & Gold |
| 2 | **BANDAR80** | `bandar80.html` | `bandar80-auto.html` | Sky Blue |
| 3 | **LINE TOGEL** | `linetogel.html` | `linetogel-auto.html` | Neon Purple |
| 4 | **ZIA TOGEL** | `ziatogel.html` | `ziatogel-auto.html` | Yellow & Blue |

---

## ✨ Fitur Utama

- **Auto Fetch Prediksi** — Ambil data prediksi otomatis via multi-proxy fallback + auto refresh setiap 5 menit
- **Parser Anti-JADWAL** — Hanya membaca section **PREDIKSI BOLA** dari sumber; section JADWAL (angka handicap) otomatis di-skip sehingga skor yang tampil selalu skor prediksi asli
- **Support Semua Format Skor** — Pemisah skor `:`, `-`, maupun en-dash `–` semuanya terbaca
- **Tanggal Otomatis Format Lengkap** — Rentang tanggal dihitung dari data, format `27 Juli - 28 Juli 2026` (nama bulan penuh Bahasa Indonesia di kedua tanggal)
- **Logo Lookup 8-Step Fuzzy** — Database 30.000+ logo tim sepakbola, dengan SVG fallback inisial jika logo tidak ditemukan
- **Override Logo Manual** — File `logo-db.js` untuk menambah/menimpa logo dari database utama
- **Multi-Brand Theming** — Setiap brand punya warna, logo, favicon, dan background tersendiri
- **Responsive Design** — Output HTML otomatis menyesuaikan tampilan mobile dan desktop
- **Custom Color Picker** — Ubah warna tema per brand langsung dari generator
- **100% Static** — Tidak butuh server backend, deploy langsung di GitHub Pages

---

## 📁 Struktur Repository

```
bolaauto/
│
├── index.html                  ← Menu utama pilih site
│
├── hokbentoto.html             ← Generator HOKBENTOTO
├── bandar80.html               ← Generator BANDAR80
├── linetogel.html              ← Generator LINE TOGEL
├── ziatogel.html               ← Generator ZIA TOGEL
│
├── hokbentoto-auto.html        ← Auto Embed (standalone, LOGO_DB tertanam)
├── bandar80-auto.html          ← Auto Embed (standalone, LOGO_DB tertanam)
├── linetogel-auto.html         ← Auto Embed (standalone, LOGO_DB tertanam)
├── ziatogel-auto.html          ← Auto Embed (loader ringan)
│
├── linetogel-main.js           ← Script eksternal LINE TOGEL (untuk WordPress embed)
├── ziatogel-main.js            ← Script eksternal ZIA TOGEL (untuk WordPress embed)
│
├── logo-db-0.js … logo-db-9.js ← Database logo tim (30.000+ entries, split 10 file)
├── logo-db.js                  ← ★ Override logo manual (di-load paling akhir)
│
└── README.md
```

---

## 🚀 Cara Deploy ke GitHub Pages

1. **Push** semua file ke repository GitHub
2. Buka **Settings** → **Pages**
3. Pilih Source: **branch `main`**, folder: **`/ (root)`**
4. Tunggu build selesai, akses via:

```
https://<username>.github.io/bolaauto/
https://<username>.github.io/bolaauto/hokbentoto.html
https://<username>.github.io/bolaauto/bandar80.html
https://<username>.github.io/bolaauto/linetogel.html
https://<username>.github.io/bolaauto/ziatogel.html
```

---

## 📝 Format Input Prediksi

Paste teks prediksi ke dalam textarea generator dengan format berikut:

```
WORLD CUP 2026 [ IN CANADA, MEXICO & USA ]
19/07 04:00 WIB France VS England 0 : 2

NORWAY ELITESERIEN
18/07 19:00 WIB [6] Ham-Kam VS [1] Tromso 2 : 1
18/07 21:00 WIB [15] Kristiansund VS [7] Sarpsborg 08 1 : 3
```

**Aturan parsing:**

| Elemen | Keterangan |
|--------|-----------|
| Baris tanpa jam | Otomatis dikenali sebagai **nama liga** |
| `[6]`, `[1]` dst | Angka klasemen — otomatis **di-strip**, tidak tampil di output |
| Skor | Bisa pakai `:`, `-`, atau en-dash `–` sebagai pemisah |
| Skor pecahan handicap (`1/2`, `3/4`) | **Ditolak otomatis** — bukan skor prediksi |
| Suffix `[W]`, `U19`, `U21` | Otomatis dibersihkan saat lookup logo |

---

## ⚡ Auto Embed (`*-auto.html` & `*-main.js`)

File auto embed adalah versi **standalone** yang bisa langsung ditanam di halaman/blog tanpa konfigurasi tambahan:

- **Auto fetch** prediksi dari source URL via multi-proxy fallback
- **Auto refresh** setiap 5 menit
- **Hanya membaca section PREDIKSI** — section JADWAL berisi angka handicap tidak akan pernah ikut tampil
- **LOGO_DB sudah tertanam** di file `*-auto.html` besar (tidak butuh `logo-db-*.js` eksternal)
- **Warna dan branding** otomatis sesuai masing-masing brand
- **Tanggal header** otomatis mengikuti data, format `27 Juli - 28 Juli 2026`
- **Cara pakai:** Buka langsung URL-nya, atau load `*-main.js` sebagai external script di WordPress

---

## 🔧 Tambah / Override Logo Manual

Edit file **`logo-db.js`** — file ini di-load **paling akhir** sehingga otomatis menimpa entry dari database utama (`logo-db-0.js` s/d `logo-db-9.js`):

```javascript
Object.assign(LOGO_DB, {
    "manchester united": "https://example.com/logo-manu.png",
    "ham-kam":           "https://example.com/logo-hamkam.png",
    "persib bandung":    "https://example.com/logo-persib.png"
});
```

> ⚠️ Key (nama tim) harus **lowercase**.

---

## ⚙️ Konfigurasi Brand

Setiap file HTML generator punya blok konfigurasi `SITES` sendiri untuk mengatur identitas visual:

```javascript
var SITES = {
  hokbentoto: {
    name:    'HOKBENTOTO',
    logo:    'https://...logo.png',
    favicon: 'https://...favicon.ico',
    bg:      'https://...background.jpg',
    cssVars: {
      '--primary':   '#FFD700',
      '--secondary': '#1a1a2e',
      '--accent':    '#e94560'
    }
  }
};
```

---

## 🔍 Logo Lookup — 8-Step Fuzzy Matching

Sistem pencarian logo menggunakan 8 langkah matching bertingkat untuk menemukan logo tim yang tepat:

1. **Exact match** — Nama tim persis sama
2. **Lowercase match** — Perbandingan case-insensitive
3. **Strip suffix** — Hapus `[W]`, `U19`, `U21`, `FC`, dll
4. **Strip prefix** — Hapus angka klasemen `[6]`, `[1]`
5. **Alias/abbreviation** — Cek singkatan umum
6. **Partial match** — Cocokkan sebagian nama
7. **Word-level match** — Cocokkan per kata
8. **SVG Fallback** — Jika tidak ditemukan, generate badge SVG dengan inisial tim

---

## 🩹 Changelog Perbaikan Parser (Juli 2026)

Sumber `shortq.xyz/prediksibola` mengubah format skor prediksi menjadi en-dash (`2–0`) dan menampilkan section JADWAL (handicap) di atas section PREDIKSI. Perbaikan yang diterapkan ke **semua** generator dan auto embed:

1. **Skor en-dash/em-dash terbaca** — `preNorm` menormalisasi `–`/`—` menjadi `-`, dan regex `MATCH_RE` diperluas
2. **Section JADWAL diblokir total** — parser fallback hanya membaca dari heading `PREDIKSI BOLA` terakhir; button accordion mengandung `JADWAL` di-skip. Angka handicap (`0 : 3`, `0 : 2 1/2`) tidak akan pernah tampil sebagai skor
3. **Guard anti-liga-palsu** — baris berisi `vs` yang gagal parse tidak bisa jadi header liga
4. **Liga pertama tidak hilang** — capture dimulai langsung dari header liga sebelum match pertama
5. **Format tanggal** — `27 Juli - 28 Juli 2026` (bulan penuh Bahasa Indonesia, ditulis di kedua tanggal)
6. **Dobel WIB dihilangkan** — tampilan jam tidak lagi `18:00 WIB WIB`

---

## 🛠️ Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Database Logo | JavaScript Object (`LOGO_DB`), 30.000+ entries |
| Hosting | GitHub Pages (static) |
| Data Source | Auto fetch via multi-proxy CORS |

---

## 📄 Lisensi

Internal use only — **ShortcutPro** © 2026

---

> Dibuat oleh **[shortcutpro](https://github.com/shortcutpro)** — Pure HTML/JS, zero dependencies, zero backend.
