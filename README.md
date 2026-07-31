# ⚽ BOLAAUTO — Widget Prediksi Bola Otomatis

Widget prediksi bola **multi-brand** yang link sumbernya **berganti sendiri mengikuti tanggal hari ini** — tanpa edit manual setiap hari.

---

## 🏷️ Brand yang Tersedia

| Brand | Auto | Embed | Main JS | Static |
|-------|------|-------|---------|--------|
| **HOKBENTOTO** | ✅ `hokbentoto-auto.html` | ✅ `hokbentoto-embed.html` | ✅ `hokbentoto-main.js` | ✅ `hokbentoto.html` |
| **BANDAR80** | ✅ `bandar80-auto.html` | ✅ `bandar80-embed.html` | ✅ `bandar80-main.js` | ✅ `bandar80.html` |
| **LINETOGEL** | ✅ `linetogel-auto.html` | ❌ | ✅ `linetogel-main.js` | ✅ `linetogel.html` |
| **ZIATOGEL** | ✅ `ziatogel-auto.html` | ❌ | ✅ `ziatogel-main.js` | ✅ `ziatogel.html` |

---

## ✨ Fitur

- **Auto tanggal (WIB)** — URL sumber dibentuk otomatis mengikuti tanggal hari ini. Contoh: `prediksi-bola-28-29-juli-2026` → besok otomatis jadi `prediksi-bola-29-30-juli-2026`.
- **Pertandingan Spesial (Big Match)** — **dibangun sendiri dari 5 pasaran pertandingan teratas** pada daftar prediksi, lengkap dengan logo tim, Pasaran HDP, dan Prediksi skor. Tidak lagi bergantung pada section `.featured-card` halaman sumber, jadi **tetap tampil walau sumber tidak punya Pertandingan Spesial**. Auto-scroll berjalan dari kiri ke kanan + efek shine kaca kilat.
- **Fallback berlapis** — halaman hari ini belum terbit → pakai kemarin → sumber down total → fallback ke sumber cadangan (shortq.xyz).
- **Pasaran HDP format voor Indonesia** — Handicap ditampilkan gaya bandar lokal: `0 : 1 1/4`, `2 : 0`, `0 : 3/4`. Sisi favorit selalu `0`, lawannya yang terima voor. Nilai diacak per pertandingan tapi terkunci (tidak berubah tiap refresh).
- **Database logo ±30.000 tim** — fuzzy lookup 6-step bertingkat, fallback ke SVG inisial otomatis.
- **Auto-refresh 5 menit** — halaman yang sudah terbuka ikut update sendiri tanpa reload manual.
- **Tema per brand** — warna otomatis menyesuaikan tiap brand.

---

## 🚀 Cara Pasang (Embed via iframe)

Tempel kode di bawah ke halaman WordPress (Custom HTML block) atau halaman web mana pun. Tinggi iframe menyesuaikan isi konten secara otomatis.

### HOKBENTOTO

```html
<iframe id="hkb-embed" src="https://shortcutpro.github.io/bolaauto/hokbentoto-embed.html" style="width:100%;height:1400px;border:0;display:block;background:#000;" scrolling="no"></iframe>
<script>
window.addEventListener('message', function (e) {
    if (e.data && e.data.ziaEmbedHeight) {
        var f = document.getElementById('hkb-embed');
        if (f) f.style.height = e.data.ziaEmbedHeight + 'px';
    }
});
</script>
```

### BANDAR80

```html
<iframe id="bdr-embed" src="https://shortcutpro.github.io/bolaauto/bandar80-embed.html" style="width:100%;height:1400px;border:0;display:block;background:#000;" scrolling="no"></iframe>
<script>
window.addEventListener('message', function (e) {
    if (e.data && e.data.ziaEmbedHeight) {
        var f = document.getElementById('bdr-embed');
        if (f) f.style.height = e.data.ziaEmbedHeight + 'px';
    }
});
</script>
```

> **Catatan:** Script di bawah iframe berfungsi menyesuaikan tinggi iframe secara otomatis. Biarkan `scrolling="no"` agar tidak muncul scrollbar ganda. Nilai `height:1400px` hanya tinggi awal — setelah data masuk, tinggi menyesuaikan sendiri.

---

## 📂 Struktur File

```
bolaauto/
├── index.html                  # Halaman indeks
│
├── hokbentoto-embed.html       # Loader iframe HOKBENTOTO
├── hokbentoto-main.js          # Logika utama HOKBENTOTO
├── hokbentoto-auto.html        # Standalone (logo tertanam, tanpa file eksternal)
├── hokbentoto.html             # Halaman static HOKBENTOTO
│
├── bandar80-embed.html         # Loader iframe BANDAR80
├── bandar80-main.js            # Logika utama BANDAR80
├── bandar80-auto.html          # Standalone BANDAR80
├── bandar80.html               # Halaman static BANDAR80
│
├── linetogel-main.js           # Logika utama LINETOGEL
├── linetogel-auto.html         # Standalone LINETOGEL
├── linetogel.html              # Halaman static LINETOGEL
│
├── ziatogel-main.js            # Logika utama ZIATOGEL
├── ziatogel-auto.html          # Standalone ZIATOGEL
├── ziatogel.html               # Halaman static ZIATOGEL
│
├── logo-db-0.js … logo-db-9.js # Database logo utama (±30.000 entri)
└── logo-db.js                  # Override logo manual (di-load terakhir)
```

### Jenis File

| Jenis | Keterangan |
|-------|-----------|
| `*-embed.html` | Loader iframe — memuat logo-db + main.js berurutan. Dipakai dengan kode embed di atas. |
| `*-main.js` | Logika utama: fetch sumber, parser data, render widget, Big Match. |
| `*-auto.html` | Versi standalone (±2,4 MB) — LOGO_DB sudah tertanam di dalam file, tidak butuh file eksternal. Tinggal buka langsung. |
| `*.html` (tanpa suffix) | Halaman static. |
| `logo-db-0..9.js` | Database logo utama, dipecah 10 file. |
| `logo-db.js` | Override logo manual — menimpa entri database utama. |

---

## 🔄 Cara Kerja Auto-Update

```
┌─────────────────────────────────────────────────────┐
│  Widget dibuka / auto-refresh 5 menit               │
│  ↓                                                  │
│  Bentuk URL sesuai tanggal WIB hari ini             │
│  contoh: prediksi-bola-29-30-juli-2026              │
│  ↓                                                  │
│  Fetch halaman sumber via CORS proxy                │
│  ↓                                                  │
│  Parse daftar pertandingan per liga                 │
│  ↓                                                  │
│  Ambil 5 pertandingan TERATAS → Pertandingan Spesial│
│  ↓                                                  │
│  Render widget dengan logo lookup + tema brand      │
└─────────────────────────────────────────────────────┘

Fallback:
  URL hari ini 404 → coba URL kemarin
  Semua URL gagal → fallback ke sumber cadangan
```

Saat halaman sumber diperbarui, widget ikut update pada fetch berikutnya. Tidak perlu edit apa pun setiap hari.

> Kartu **Pertandingan Spesial** dihitung dari daftar prediksi itu sendiri — selama masih ada minimal 1 pertandingan, section-nya pasti tampil.

---

## 🔧 Konfigurasi

Semua konfigurasi ada di dalam `{brand}-main.js` (atau `{brand}-auto.html`):

| Setting | Lokasi | Default |
|---------|--------|---------|
| Domain sumber | `var JPK_BASE = '...'` | `https://jpbolepalngi.pagesco.de/prediksi-bola-` |
| On/off sumber utama | `var JPK_ENABLED = true` | `true` |
| Sumber cadangan | `var SOURCE_URL = '...'` | `https://shortq.xyz/prediksibola` |
| Interval refresh | `var AUTO_REFRESH = 5 * 60 * 1000` | 5 menit |
| Jumlah kartu Pertandingan Spesial | `var BM_LIMIT = 5` | 5 kartu |
| Cara pilih Pertandingan Spesial | `var BM_MODE = 'urut'` | `'urut'` |
| Jumlah badge BIG MATCH | `var BM_BIG = 2` | 2 kartu teratas |
| Step pasaran HDP | `var HDP_TANGGA = [...]` | `0` → `4` (step 1/4) |
| Kecepatan scroll Big Match | `SPEED=32` (px/detik) | 32 px/detik |
| Kecepatan efek shine | `animation:bmShine 3.6s` | 3,6 detik per kilat |

**Matikan sumber utama** (balik ke sumber cadangan):
```js
var JPK_ENABLED = false;
```

**Pilihan `BM_MODE`:**

| Nilai | Hasil |
|-------|-------|
| `'urut'` *(default)* | 5 pertandingan paling atas apa adanya — boleh dari liga yang sama |
| `'liga'` | 1 pertandingan teratas dari tiap liga — 5 kartu = 5 liga berbeda |

```js
var BM_LIMIT = 5;        // ganti jadi 3, 6, 8, dst.
var BM_MODE  = 'liga';   // biar tiap kartu dari liga berbeda
var BM_BIG   = 2;        // 2 kartu teratas = BIG MATCH + api, sisanya MATCH DAY
```

`BM_BIG` harus ≤ `BM_LIMIT`. Kalau diisi sama besar, semua kartu jadi BIG MATCH; kalau `0`, semuanya MATCH DAY tanpa api.

### Pasaran HDP

Nilai diambil dari `HDP_TANGGA`, dipilih acak-terkunci per pertandingan (seed: nama tim + tanggal + jam) — jadi variatif antar laga tapi **tidak berubah-ubah** tiap auto-refresh 5 menit.

Lebar voor ikut selisih skor prediksi:

| Selisih skor prediksi | Rentang voor |
|-----------------------|--------------|
| belum ada skor | `0` – `3/4` |
| 0 (imbang) | `0` – `1/2` |
| 1 | `1/4` – `1` |
| 2 | `3/4` – `1 3/4` |
| 3 | `1 1/2` – `2 1/2` |
| 4+ | `2 1/4` – `3 1/4` |

Baca arahnya: **kiri = Home, kanan = Away, yang dapat `0` itu favoritnya.**

```
0 : 1 1/4   → Home favorit, kasih voor 1 1/4 ke Away
2 : 0       → Away favorit, kasih voor 2 ke Home
0 : 0       → pasaran rata (AH 0)
```

---

## 🎨 Update Logo

Edit **`logo-db.js`** untuk menambah atau mengganti logo tim. File ini di-load paling akhir sehingga entri di dalamnya menimpa database utama.

```js
// logo-db.js
Object.assign(window.LOGO_DB, {
  "nama tim lowercase": "https://url-logo.png",
  "tim baru": "https://url-logo-baru.png"
});
```

Berlaku untuk semua `*-embed.html` dan `*-main.js`.

> ⚠️ File `*-auto.html` (2,4 MB) memiliki LOGO_DB tertanam — perubahan `logo-db.js` tidak berlaku untuk file auto. Perlu regenerasi database inline.

---

## 📋 Changelog

| Tanggal | Perubahan |
|---------|-----------|
| 01 Agu 2026 | Badge **BIG MATCH kini 2 kartu teratas** (sebelumnya 1). Diatur lewat `BM_BIG`. |
| 01 Agu 2026 | Pasaran HDP & kolom Handicap ganti ke **format voor Indonesia** (`0 : 1 1/4`, `2 : 0`) — acak-terkunci per laga, ikut selisih skor prediksi. |
| 01 Agu 2026 | **Pertandingan Spesial lepas dari halaman sumber** — kartu kini dibangun dari 5 pasaran pertandingan teratas + logo LOGO_DB. Section tidak lagi hilang saat sumber tak punya Big Match. Tambah `BM_LIMIT` & `BM_MODE`. |
| 31 Jul 2026 | Big Match v3: border & warna disamakan dengan tabel liga, auto-scroll berjalan + efek shine kaca kilat |
| 30 Jul 2026 | Tambah section Big Match (Pertandingan Spesial) dari halaman sumber |
| 29 Jul 2026 | Domain sumber diganti ke `jpbolepalngi.pagesco.de` |
| 28 Jul 2026 | Sumber utama diganti ke jpkoloni4d — URL otomatis ikut tanggal WIB + fallback berlapis |
