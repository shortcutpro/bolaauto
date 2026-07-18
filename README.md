# Prediksi Bola Auto Generator — GitHub Pages Edition (10 Sites)

Generator prediksi bola multi-brand — pure HTML/JS, tanpa PHP backend.

**Sites:** HOKBENTOTO · BANDAR80 · TVTOTO · WATITOTO · MARKASWD · LINE TOGEL · ZIA TOGEL · INDRA TOGEL · YOWES TOGEL · MANCINGDUIT

## 🌐 Live Demo

> Deploy ke GitHub Pages: `https://<username>.github.io/<repo>/`

## 📁 Struktur Repo

```
repo/
├── index.html          ← Menu pilih site
├── hokbentoto.html     ← Generator HOKBENTOTO   (Black & Gold)
├── bandar80.html       ← Generator BANDAR80     (Sky Blue)
├── tvtoto.html         ← Generator TVTOTO       (Crimson Red)
├── watitoto.html       ← Generator WATITOTO     (Inferno Fire)
├── markaswd.html       ← Generator MARKASWD     (Royal Gold)
├── linetogel.html      ← Generator LINE TOGEL   (Neon Purple)
├── ziatogel.html       ← Generator ZIA TOGEL    (Yellow & Blue)
├── indratogel.html     ← Generator INDRA TOGEL  (Violet)
├── yowestogel.html     ← Generator YOWES TOGEL  (Red & Gold)
├── mancingduit.html    ← Generator MANCINGDUIT  (Ocean Blue)
│
├── hokbentoto-auto.html   ← Auto Embed HOKBENTOTO (standalone, LOGO_DB inline)
├── bandar80-auto.html     ← Auto Embed BANDAR80
├── tvtoto-auto.html       ← Auto Embed TVTOTO
├── watitoto-auto.html     ← Auto Embed WATITOTO
├── markaswd-auto.html     ← Auto Embed MARKASWD
├── linetogel-auto.html    ← Auto Embed LINE TOGEL
├── ziatogel-auto.html     ← Auto Embed ZIA TOGEL
├── indratogel-auto.html   ← Auto Embed INDRA TOGEL
├── yowestogel-auto.html   ← Auto Embed YOWES TOGEL
├── mancingduit-auto.html  ← Auto Embed MANCINGDUIT
├── logo-db-0.js … logo-db-9.js  ← Database logo tim (30.000+ entries)
├── logo-db.js          ← ★ INPUT LOGO MANUAL (override, di-load terakhir)
└── README.md
```

## 🚀 Deploy ke GitHub Pages

1. Push semua file ke repo GitHub
2. Settings → Pages → Source: branch utama, folder: `/ (root)`
3. Akses via `https://<username>.github.io/<repo>/`
   - `.../hokbentoto.html`
   - `.../bandar80.html`
   - `.../tvtoto.html`
   - `.../watitoto.html`
   - `.../markaswd.html`
   - `.../linetogel.html`
   - `.../ziatogel.html`
   - `.../indratogel.html`
   - `.../yowestogel.html`
   - `.../mancingduit.html`

## 📝 Format Input Prediksi

```
WORLD CUP 2026 [ IN CANADA, MEXICO & USA ]
19/07 04:00 WIB France VS England 0 : 2

NORWAY ELITESERIEN
18/07 19:00 WIB [6] Ham-Kam VS [1] Tromso 2 : 1
18/07 21:00 WIB [15] Kristiansund VS [7] Sarpsborg 08 1 : 3
```

- Baris tanpa jam = **nama liga**
- `[6]`, `[1]` dsb (angka klasemen) otomatis **di-strip** — tidak ikut tampil
- Skor bisa pakai `:` atau `-`
- Suffix `[W]`, `U19`, `U21` dsb otomatis dibersihkan saat lookup logo

## ⚡ Auto Embed (`*-auto.html`)

Versi standalone mengikuti `hkb77-auto-embed.html` dari repo leo08:

- **Auto fetch** prediksi dari `https://shortq.xyz/prediksibola` (multi-proxy fallback) + auto refresh 5 menit
- LOGO_DB **sudah tertanam di dalam file** (tidak butuh logo-db-*.js eksternal)
- Background, logo, favicon, dan warna sesuai brand masing-masing
- Cara pakai: buka langsung, atau paste seluruh isi file ke halaman/blog

## 🔧 Tambah Logo Manual

Edit `logo-db.js` (file ini di-load **paling akhir**, jadi otomatis menimpa database utama):

```js
Object.assign(LOGO_DB, {
    "manchester united": "https://...url-logo.png",
    "ham-kam": "https://...url-logo.png",
});
```

Key harus **lowercase**.

## ⚙️ Konfigurasi Brand

Tiap file HTML punya blok `SITES` sendiri (logo, favicon, background, warna):

```js
var SITES = {
  hokbentoto: {
    name:'HOKBENTOTO',
    logo:'https://...',
    favicon:'https://...',
    bg:'https://...background.jpg',
    cssVars:{ '--primary':'#FFD700', ... }
  }
};
```

## ✨ Fitur

- ✅ Auto fetch prediksi via proxy + auto refresh 60 detik
- ✅ Logo lookup 8-step fuzzy (30k+ entries) + SVG fallback inisial tim
- ✅ `logo-db.js` untuk input logo manual (override)
- ✅ Tanggal otomatis + custom color picker per brand
- ✅ Output HTML siap embed, responsive mobile/desktop
- ✅ 100% static — deploy gratis di GitHub Pages
