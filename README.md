# ⚽ Prediksi Bola Auto Generator

### GitHub Pages Edition — 10 Multi-Brand Sites

Generator prediksi bola otomatis untuk 10 brand berbeda — **pure HTML/JS**, tanpa PHP backend, 100% static, deploy gratis di GitHub Pages.

---

## 🏷️ Daftar Brand

| # | Brand | File Generator | File Auto Embed | Tema Warna |
|---|-------|---------------|-----------------|------------|
| 1 | **HOKBENTOTO** | `hokbentoto.html` | `hokbentoto-auto.html` | Black & Gold |
| 2 | **BANDAR80** | `bandar80.html` | `bandar80-auto.html` | Sky Blue |
| 3 | **TVTOTO** | `tvtoto.html` | `tvtoto-auto.html` | Crimson Red |
| 4 | **WATITOTO** | `watitoto.html` | `watitoto-auto.html` | Inferno Fire |
| 5 | **MARKASWD** | `markaswd.html` | `markaswd-auto.html` | Royal Gold |
| 6 | **LINE TOGEL** | `linetogel.html` | `linetogel-auto.html` | Neon Purple |
| 7 | **ZIA TOGEL** | `ziatogel.html` | `ziatogel-auto.html` | Yellow & Blue |
| 8 | **INDRA TOGEL** | `indratogel.html` | `indratogel-auto.html` | Violet |
| 9 | **YOWES TOGEL** | `yowestogel.html` | `yowestogel-auto.html` | Red & Gold |
| 10 | **MANCINGDUIT** | `mancingduit.html` | `mancingduit-auto.html` | Ocean Blue |

---

## ✨ Fitur Utama

- **Auto Fetch Prediksi** — Ambil data prediksi otomatis via multi-proxy fallback + auto refresh setiap 5 menit
- **Logo Lookup 8-Step Fuzzy** — Database 30.000+ logo tim sepakbola, dengan SVG fallback inisial jika logo tidak ditemukan
- **Override Logo Manual** — File `logo-db.js` untuk menambah/menimpa logo dari database utama
- **Multi-Brand Theming** — Setiap brand punya warna, logo, favicon, dan background tersendiri
- **Responsive Design** — Output HTML otomatis menyesuaikan tampilan mobile dan desktop
- **Custom Color Picker** — Ubah warna tema per brand langsung dari generator
- **Tanggal Otomatis** — Rentang tanggal prediksi dihitung secara otomatis
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
├── tvtoto.html                 ← Generator TVTOTO
├── watitoto.html               ← Generator WATITOTO
├── markaswd.html               ← Generator MARKASWD
├── linetogel.html              ← Generator LINE TOGEL
├── ziatogel.html               ← Generator ZIA TOGEL
├── indratogel.html             ← Generator INDRA TOGEL
├── yowestogel.html             ← Generator YOWES TOGEL
├── mancingduit.html            ← Generator MANCINGDUIT
│
├── hokbentoto-auto.html        ← Auto Embed (standalone)
├── bandar80-auto.html          ← Auto Embed (standalone)
├── tvtoto-auto.html            ← Auto Embed (standalone)
├── watitoto-auto.html          ← Auto Embed (standalone)
├── markaswd-auto.html          ← Auto Embed (standalone)
├── linetogel-auto.html         ← Auto Embed (standalone)
├── ziatogel-auto.html          ← Auto Embed (standalone)
├── indratogel-auto.html        ← Auto Embed (standalone)
├── yowestogel-auto.html        ← Auto Embed (standalone)
├── mancingduit-auto.html       ← Auto Embed (standalone)
│
├── logo-db-0.js … logo-db-9.js ← Database logo tim (30.000+ entries, split 10 file)
├── logo-db.js                  ← ★ Override logo manual (di-load paling akhir)
│
├── linetogel-main.js           ← Script khusus LINE TOGEL
├── indratogel-main.js          ← Script khusus INDRA TOGEL
├── yowestogel-main.js          ← Script khusus YOWES TOGEL
├── ziatogel-main.js            ← Script khusus ZIA TOGEL
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
https://<username>.github.io/bolaauto/tvtoto.html
...dst
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
| Skor | Bisa pakai `:` atau `-` sebagai pemisah |
| Suffix `[W]`, `U19`, `U21` | Otomatis dibersihkan saat lookup logo |

---

## ⚡ Auto Embed (`*-auto.html`)

File auto embed adalah versi **standalone** yang bisa langsung ditanam di halaman/blog tanpa konfigurasi tambahan:

- **Auto fetch** prediksi dari source URL via multi-proxy fallback
- **Auto refresh** setiap 5 menit
- **LOGO_DB sudah tertanam** di dalam file (tidak butuh `logo-db-*.js` eksternal)
- **Warna dan branding** otomatis sesuai masing-masing brand
- **Cara pakai:** Buka langsung URL-nya, atau copy-paste seluruh isi file ke halaman target

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

## 🛠️ Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Database Logo | JavaScript Object (`LOGO_DB`), 30.000+ entries |
| Hosting | GitHub Pages (static) |
| Data Source | Auto fetch via multi-proxy CORS |

---

## 📄 Lisensi

Internal use only — **ShortcutPro** © 2025

---

> Dibuat oleh **[shortcutpro](https://github.com/shortcutpro)** — Pure HTML/JS, zero dependencies, zero backend.
