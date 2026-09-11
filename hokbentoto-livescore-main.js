/* ============================================================
   LIVE SCORE HOKBENTOTO — versi JavaScript (untuk embed <script src>)
   Upload file ini ke GitHub. Di admin cukup tempel:
     <div id="hokben-livescore"></div>
     <script src="https://shortcutpro.github.io/bolaauto/hokbentoto-livescore.js"></script>
   Update di GitHub -> admin ikut otomatis, tanpa ganti admin.
   ============================================================ */
(function(){
  'use strict';

  // 1) Suntik CSS ke <head> (sekali saja)
  if(!document.getElementById('hbtls-style')){
    var st=document.createElement('style');
    st.id='hbtls-style';
    st.textContent="/* RESET keras: cegah tema situs menimpa widget */\n.hbtls,.hbtls *{box-sizing:border-box!important;margin:0!important;padding:0!important;float:none!important}\n.hbtls{\n  --accent:#e0b64a;--accent-2:#f5d27a;--bg:#0a0a0a;--bg-2:#141210;--card:#17150f;--card-2:#1e1b12;--line:#2c2718;--txt:#f3ead0;--muted:#a8a17f;--danger:#ff5d5d;--live:#2ee06a;\n  display:block!important;\n  font-family:'Segoe UI',system-ui,-apple-system,Roboto,Arial,sans-serif!important;\n  color:var(--txt)!important;background:var(--bg)!important;\n  width:100%!important;max-width:1100px!important;margin:0 auto!important;\n  border:1px solid var(--line)!important;border-radius:18px!important;overflow:hidden!important;\n  box-shadow:0 20px 60px rgba(0,0,0,.6)!important;text-align:left!important;line-height:1.4!important;\n}\n.hbtls img{max-width:none!important;height:auto;border:0!important;box-shadow:none!important;border-radius:0!important;display:inline-block;vertical-align:middle;background:none!important;padding:0!important}\n.hbtls a{text-decoration:none!important;box-shadow:none!important;border:0!important;background:none;display:inline-block}\n.hbtls button,.hbtls input{font-family:inherit!important;box-shadow:none!important}\n.hbtls p,.hbtls h2,.hbtls strong,.hbtls small,.hbtls span,.hbtls div,.hbtls section,.hbtls label{background:none;border-radius:0;letter-spacing:normal;text-transform:none}\n\n.hbtls-shell{display:block!important;width:100%!important}\n\n/* HERO */\n.hbtls-hero{position:relative!important;display:grid!important;grid-template-columns:auto 1fr auto!important;gap:22px!important;align-items:center!important;padding:26px 28px!important;background:radial-gradient(1200px 300px at 50% -60%,rgba(224,182,74,.22),transparent 70%),linear-gradient(180deg,#0d0b07,#0a0a0a)!important;border-bottom:1px solid var(--line)!important}\n.hbtls-logo{display:flex!important;align-items:center!important;justify-content:center!important}\n.hbtls-logo img{height:64px!important;width:auto!important;display:block!important;filter:drop-shadow(0 4px 12px rgba(224,182,74,.35))}\n.hbtls-copy{text-align:center!important;min-width:0!important}\n.hbtls-kicker{display:flex!important;align-items:center!important;justify-content:center!important;gap:10px!important;font-size:11px!important;letter-spacing:3px!important;color:var(--accent)!important;font-weight:700!important;margin-bottom:6px!important}\n.hbtls-kicker:before,.hbtls-kicker:after{content:\"\"!important;width:26px!important;height:1px!important;background:linear-gradient(90deg,transparent,var(--accent))!important}\n.hbtls-kicker:after{transform:scaleX(-1)!important}\n.hbtls-title{font-size:34px!important;font-weight:800!important;line-height:1!important;letter-spacing:1px!important;text-align:center!important;color:#fff!important;background:linear-gradient(180deg,#fff,#cdbf95)!important;-webkit-background-clip:text!important;background-clip:text!important;-webkit-text-fill-color:transparent!important;animation:hbtls-flickerA 4.1s linear infinite!important;margin:0!important}\n.hbtls-title span{color:var(--accent)!important;-webkit-text-fill-color:var(--accent)!important;text-shadow:0 0 4px var(--accent),0 0 12px rgba(224,182,74,.8),0 0 30px rgba(224,182,74,.42)!important;animation:hbtls-flickerB 3.3s linear infinite!important}\n@keyframes hbtls-flickerA{0%,18%,23%,50%,54%,80%,100%{opacity:1}20%,52%,81%{opacity:.68}}\n@keyframes hbtls-flickerB{0%,17%,22%,27%,51%,56%,76%,100%{opacity:1}19%,24%,53%,78%{opacity:.6;color:#c99a2e;text-shadow:0 0 3px rgba(224,182,74,.35)}}\n.hbtls-sub{margin:8px auto 0!important;font-size:13px!important;color:var(--muted)!important;max-width:560px!important;line-height:1.5!important;text-align:center!important}\n.hbtls-cta-wrap{display:flex!important;justify-content:flex-end!important}\n.hbtls-cta{display:inline-block!important;padding:13px 20px!important;border-radius:12px!important;font-weight:800!important;font-size:13px!important;letter-spacing:.5px!important;text-decoration:none!important;white-space:nowrap!important;color:#1a1400!important;background:linear-gradient(180deg,var(--accent-2),var(--accent))!important;box-shadow:0 8px 22px rgba(224,182,74,.35)!important;transition:transform .15s,box-shadow .15s!important;border:0!important}\n.hbtls-cta:hover{transform:translateY(-2px)!important;box-shadow:0 12px 28px rgba(224,182,74,.5)!important;color:#1a1400!important}\n\n/* STATUS */\n.hbtls-status{display:flex!important;justify-content:space-between!important;align-items:center!important;flex-wrap:wrap!important;gap:10px!important;padding:12px 28px!important;background:var(--bg-2)!important;border-bottom:1px solid var(--line)!important;font-size:13px!important}\n.hbtls-status-left{display:flex!important;align-items:center!important;gap:10px!important}\n.hbtls-dot{display:inline-block!important;width:10px!important;height:10px!important;border-radius:50%!important;background:var(--live)!important;box-shadow:0 0 6px rgba(46,224,106,.8)!important;animation:hbtls-pulse 1.6s infinite!important}\n@keyframes hbtls-pulse{0%{box-shadow:0 0 0 0 rgba(46,224,106,.55)}70%{box-shadow:0 0 0 10px rgba(46,224,106,0)}100%{box-shadow:0 0 0 0 rgba(46,224,106,0)}}\n.hbtls-date{color:var(--txt)!important;font-size:12px!important;font-weight:700!important;border:1px solid var(--line)!important;background:rgba(224,182,74,.06)!important;padding:4px 12px!important;border-radius:8px!important}\n.hbtls-cache{color:var(--muted)!important;font-size:12px!important;border:1px solid var(--line)!important;padding:4px 10px!important;border-radius:20px!important}\n\n/* TICKER */\n.hbtls-ticker{display:flex!important;align-items:center!important;gap:14px!important;padding:10px 28px!important;background:#0d0b07!important;border-bottom:1px solid var(--line)!important;overflow:hidden!important}\n.hbtls-ticker-label{font-size:10px!important;font-weight:900!important;letter-spacing:2px!important;color:var(--live)!important;white-space:nowrap!important;background:rgba(46,224,106,.10)!important;border:1px solid rgba(46,224,106,.35)!important;padding:7px 11px!important;border-radius:9px!important;flex:0 0 auto!important}\n.hbtls-ticker-window{flex:1!important;overflow:hidden!important;min-width:0!important}\n.hbtls-ticker-track{display:inline-block!important;white-space:nowrap!important;color:var(--muted)!important;font-size:13px!important;animation:hbtls-scroll 30s linear infinite!important;min-width:100%!important}\n@keyframes hbtls-scroll{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}\n.hbtls-tick-item{display:inline-block!important;background:#100d07!important;border:1px solid rgba(224,182,74,.22)!important;border-radius:8px!important;padding:6px 12px!important;margin:0 2px!important;color:var(--txt)!important;font-size:12px!important;font-weight:600!important;vertical-align:middle!important}.hbtls-tick-time{color:var(--accent)!important;font-weight:900!important;margin-right:2px!important}.hbtls-tick-vs{color:var(--accent)!important;font-weight:900!important;margin:0 3px!important}.hbtls-tick-live{color:var(--live)!important;font-weight:900!important;margin-right:2px!important}.hbtls-tick-sep{display:inline-block!important;color:var(--accent)!important;margin:0 10px!important;vertical-align:middle!important;opacity:.7!important}\n\n/* CONTROLS */\n.hbtls-controls{display:block!important;padding:18px 28px 6px!important}\n.hbtls-search-row{display:flex!important;gap:12px!important;flex-wrap:wrap!important;align-items:center!important;margin-bottom:14px!important}\n.hbtls-search{flex:1!important;min-width:220px!important;display:flex!important;align-items:center!important;gap:8px!important;background:var(--card)!important;border:1px solid var(--line)!important;border-radius:12px!important;padding:0 12px!important}\n.hbtls-search:focus-within{border-color:var(--accent)!important}\n.hbtls-search-icon{color:var(--muted)!important;font-size:16px!important}\n.hbtls-search-input{flex:1!important;background:transparent!important;border:0!important;outline:none!important;color:var(--txt)!important;-webkit-text-fill-color:var(--txt)!important;padding:12px 0!important;font-size:14px!important;width:auto!important;height:auto!important;box-shadow:none!important}\n.hbtls-search-input::placeholder{color:var(--muted)!important;-webkit-text-fill-color:var(--muted)!important;opacity:1!important}\n.hbtls-clear{background:transparent!important;border:0!important;color:var(--muted)!important;font-size:20px!important;cursor:pointer!important;line-height:1!important;display:none!important;width:auto!important}\n.hbtls-search.has-value .hbtls-clear{display:block!important}\n.hbtls-filters{display:flex!important;gap:8px!important}\n.hbtls-filter{display:flex!important;align-items:center!important;gap:6px!important;background:var(--card)!important;border:1px solid var(--line)!important;color:var(--muted)!important;padding:10px 16px!important;border-radius:12px!important;cursor:pointer!important;font-weight:700!important;font-size:13px!important;transition:.15s!important;width:auto!important;min-width:0!important}\n.hbtls-filter.active{background:linear-gradient(180deg,var(--accent-2),var(--accent))!important;color:#1a1400!important;border-color:transparent!important}\n.hbtls-live-dot{display:inline-block!important;width:9px!important;height:9px!important;border-radius:50%!important;background:var(--live)!important;box-shadow:0 0 8px rgba(46,224,106,.9)!important;animation:hbtls-blink 1.1s ease-in-out infinite,hbtls-pulse2 1.6s infinite!important}\n@keyframes hbtls-pulse2{0%{box-shadow:0 0 0 0 rgba(46,224,106,.7)}70%{box-shadow:0 0 0 9px rgba(46,224,106,0)}100%{box-shadow:0 0 0 0 rgba(46,224,106,0)}}@keyframes hbtls-blink{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.8)}}\n.hbtls-sports{display:grid!important;grid-template-columns:repeat(5,minmax(0,1fr))!important;gap:8px!important;padding-bottom:6px!important}\n.hbtls-sport{display:flex!important;align-items:center!important;justify-content:center!important;gap:7px!important;background:var(--card)!important;border:1px solid var(--line)!important;color:var(--muted)!important;padding:11px 10px!important;border-radius:10px!important;cursor:pointer!important;font-weight:600!important;font-size:13px!important;transition:.15s!important;width:100%!important}\n.hbtls-sport img{width:18px!important;height:18px!important}\n.hbtls-sport.active{border-color:var(--accent)!important;color:var(--txt)!important;background:var(--card-2)!important}\n\n/* TOOLBAR */\n.hbtls-toolbar{display:flex!important;justify-content:space-between!important;align-items:center!important;padding:14px 28px 6px!important;flex-wrap:wrap!important;gap:8px!important}\n.hbtls-toolbar strong{font-size:15px!important;letter-spacing:.5px!important;color:var(--txt)!important;font-weight:800!important}\n.hbtls-current-sport{color:var(--accent)!important}\n.hbtls-live-count{display:inline-block!important;min-width:26px!important;text-align:center!important;background:var(--accent)!important;color:#1a1400!important;font-weight:800!important;border-radius:20px!important;padding:2px 10px!important;margin-left:8px!important;font-size:13px!important}\n.hbtls-toolbar small{display:block!important;color:var(--muted)!important;font-size:12px!important;margin-top:3px!important}\n\n/* LIST */\n.hbtls-list{display:block!important;padding:12px 20px 8px!important}\n.hbtls-group{display:block!important;margin:10px 8px 18px!important;border:1px solid var(--line)!important;border-radius:14px!important;overflow:hidden!important;background:var(--card)!important;width:auto!important}\n.hbtls-group-head{display:flex!important;justify-content:space-between!important;align-items:center!important;padding:12px 16px!important;background:var(--card-2)!important;border-bottom:1px solid var(--line)!important;box-shadow:inset 3px 0 0 var(--accent)!important}\n.hbtls-group-info{display:flex!important;align-items:center!important;gap:12px!important;min-width:0!important}\n.hbtls-group-logo{display:flex!important;align-items:center!important;justify-content:center!important;flex:0 0 34px!important;width:34px!important;height:34px!important;color:var(--accent)!important;font-size:20px!important}\n.hbtls-group-logo img{width:30px!important;height:30px!important;object-fit:contain!important}\n.hbtls-group-name{font-weight:700!important;font-size:14px!important;color:var(--txt)!important}\n.hbtls-group-region{font-size:11px!important;color:var(--muted)!important}\n.hbtls-group-count{flex:0 0 auto!important;font-size:10px!important;color:var(--accent)!important;font-weight:900!important;letter-spacing:.5px!important;white-space:nowrap!important;background:rgba(224,182,74,.14)!important;border:1px solid rgba(224,182,74,.40)!important;padding:5px 12px!important;border-radius:999px!important}\n.hbtls-match{display:grid!important;grid-template-columns:110px minmax(0,1fr) auto minmax(0,1fr)!important;gap:10px!important;align-items:center!important;padding:13px 16px!important;border-bottom:1px solid var(--line)!important;width:auto!important}\n.hbtls-match:last-child{border-bottom:0!important}\n.hbtls-match.live{background:linear-gradient(90deg,rgba(255,93,93,.06),transparent)!important}\n.hbtls-time{text-align:center!important}\n.hbtls-time>div{font-weight:700!important;font-size:13px!important;color:var(--txt)!important}\n.hbtls-time small{color:var(--muted)!important;font-size:10px!important;display:block!important;margin-top:2px!important}\n.hbtls-match.live .hbtls-time small{color:var(--live)!important;font-weight:700!important}\n.hbtls-team{display:flex!important;align-items:center!important;gap:10px!important;min-width:0!important}\n.hbtls-team.home{justify-content:flex-end!important;text-align:right!important}\n.hbtls-team.away{justify-content:flex-start!important;text-align:left!important}\n.hbtls-team-name{font-size:13px!important;font-weight:600!important;color:var(--txt)!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;min-width:0!important}\n.hbtls-team-logo{display:flex!important;align-items:center!important;justify-content:center!important;flex:0 0 28px!important;width:28px!important;height:28px!important;font-size:9px!important;font-weight:800!important;color:var(--muted)!important}\n.hbtls-team-logo img{width:26px!important;height:26px!important;object-fit:contain!important}\n.hbtls-score{min-width:64px!important;text-align:center!important;font-weight:800!important;font-size:16px!important;color:var(--accent)!important;letter-spacing:1px!important}\n.hbtls-match.upcoming .hbtls-score{color:var(--muted)!important;font-size:13px!important}\n.hbtls-match.final .hbtls-score{color:var(--txt)!important}\n\n/* FOOTER */\n.hbtls-footer{display:flex!important;justify-content:space-between!important;align-items:center!important;padding:14px 28px!important;background:var(--bg-2)!important;border-top:1px solid var(--line)!important;font-size:12px!important;color:var(--muted)!important}\n.hbtls-empty{display:block!important;text-align:center!important;padding:34px 16px!important;color:var(--muted)!important;font-size:14px!important}\n\n@media(max-width:760px){\n  .hbtls-hero{grid-template-columns:1fr!important;text-align:center!important;justify-items:center!important;gap:14px!important}\n  .hbtls-cta-wrap{justify-content:center!important}\n  .hbtls-title{font-size:28px!important}\n  .hbtls-match{grid-template-columns:66px minmax(0,1fr) auto minmax(0,1fr)!important;gap:6px!important;padding:11px 10px!important}\n  .hbtls-team-name{font-size:12px!important}\n  .hbtls-list{padding:8px!important}\n  .hbtls-sports{grid-template-columns:repeat(2,minmax(0,1fr))!important}\n  .hbtls-sport:nth-child(5){grid-column:1 / -1!important}\n  .hbtls-cache{display:none!important}\n}\n@media(prefers-reduced-motion:reduce){\n  .hbtls-title,.hbtls-title span,.hbtls-ticker-track,.hbtls-dot,.hbtls-live-dot{animation:none!important}\n}";
    document.head.appendChild(st);
  }

  // 2) Siapkan wadah. Prioritas: <div id='hokben-livescore'>. Kalau tidak ada, sisip di lokasi script ini.
  var html="<div id=\"hbtls-1\" class=\"hbtls\" style=\"--accent:#e0b64a;\">\n<div class=\"hbtls-shell\">\n\n  <!-- HERO -->\n  <div class=\"hbtls-hero\">\n    <div class=\"hbtls-logo\">\n      <a href=\"https://gopath.id/link_hokbentoto\" target=\"_blank\" rel=\"noopener noreferrer nofollow\" aria-label=\"Kunjungi HOKBENTOTO\">\n        <img src=\"https://cdn.areabermain.club/assets/cdn/az6/2026/02/04/20260204/b320864d719e41630e6662f49dee7ebf/logo-mobile.png\" alt=\"HOKBENTOTO\">\n      </a>\n    </div>\n    <div class=\"hbtls-copy\">\n      <div class=\"hbtls-kicker\">REAL MATCHES \u2022 REAL MOMENTS</div>\n      <h2 class=\"hbtls-title\">LIVE <span>SCORE</span></h2>\n      <p class=\"hbtls-sub\">Semua pertandingan olahraga dalam satu halaman. Pantau jadwal dan skor terbaru dengan sistem shared snapshot berperforma tinggi.</p>\n    </div>\n    <div class=\"hbtls-cta-wrap\">\n      <a class=\"hbtls-cta\" href=\"https://gopath.id/link_hokbentoto\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">KUNJUNGI HOKBENTOTO \u2192</a>\n    </div>\n  </div>\n\n  <!-- STATUS -->\n  <div class=\"hbtls-status\">\n    <div class=\"hbtls-status-left\">\n      <span class=\"hbtls-dot\"></span>\n      <strong>Live Score Hari Ini</strong>\n      <span class=\"hbtls-date\">Memuat...</span>\n    </div>\n  </div>\n\n  <!-- TICKER -->\n  <div class=\"hbtls-ticker\">\n    <div class=\"hbtls-ticker-label\">LIVE TICKER</div>\n    <div class=\"hbtls-ticker-window\">\n      <div class=\"hbtls-ticker-track\">Memuat pertandingan HOKBENTOTO...</div>\n    </div>\n  </div>\n\n  <!-- CONTROLS -->\n  <div class=\"hbtls-controls\">\n    <div class=\"hbtls-search-row\">\n      <label class=\"hbtls-search\">\n        <span class=\"hbtls-search-icon\" aria-hidden=\"true\">\u2315</span>\n        <input type=\"search\" class=\"hbtls-search-input\" placeholder=\"Cari tim, liga, negara atau round...\" autocomplete=\"off\" spellcheck=\"false\" aria-label=\"Cari pertandingan\">\n        <button type=\"button\" class=\"hbtls-clear\" aria-label=\"Hapus pencarian\">\u00d7</button>\n      </label>\n      <div class=\"hbtls-filters\">\n        <button type=\"button\" class=\"hbtls-filter active\" data-filter=\"all\"><span>Semua</span></button>\n        <button type=\"button\" class=\"hbtls-filter\" data-filter=\"live\"><span class=\"hbtls-live-dot\"></span><span>LIVE</span></button>\n      </div>\n    </div>\n    <div class=\"hbtls-sports\">\n      <button type=\"button\" class=\"hbtls-sport active\" data-sport=\"football\"><span aria-hidden=\"true\"><img alt=\"\u26bd\" src=\"https://s.w.org/images/core/emoji/17.0.2/svg/26bd.svg\"></span><span>Football</span></button>\n      <button type=\"button\" class=\"hbtls-sport\" data-sport=\"hockey\"><span aria-hidden=\"true\"><img alt=\"\ud83c\udfd2\" src=\"https://s.w.org/images/core/emoji/17.0.2/svg/1f3d2.svg\"></span><span>Hockey</span></button>\n      <button type=\"button\" class=\"hbtls-sport\" data-sport=\"basketball\"><span aria-hidden=\"true\"><img alt=\"\ud83c\udfc0\" src=\"https://s.w.org/images/core/emoji/17.0.2/svg/1f3c0.svg\"></span><span>Basketball</span></button>\n      <button type=\"button\" class=\"hbtls-sport\" data-sport=\"tennis\"><span aria-hidden=\"true\"><img alt=\"\ud83c\udfbe\" src=\"https://s.w.org/images/core/emoji/17.0.2/svg/1f3be.svg\"></span><span>Tennis</span></button>\n      <button type=\"button\" class=\"hbtls-sport\" data-sport=\"cricket\"><span aria-hidden=\"true\"><img alt=\"\ud83c\udfcf\" src=\"https://s.w.org/images/core/emoji/17.0.2/svg/1f3cf.svg\"></span><span>Cricket</span></button>\n    </div>\n  </div>\n\n  <!-- TOOLBAR -->\n  <div class=\"hbtls-toolbar\">\n    <div>\n      <strong>LIVE <span class=\"hbtls-current-sport\">FOOTBALL</span> MATCHES</strong>\n      <span class=\"hbtls-live-count\">0</span>\n      <small>Today \u2022 LIVE, Upcoming &amp; Finished</small>\n    </div>\n  </div>\n\n  <!-- MATCH LIST -->\n  <div class=\"hbtls-list\">\n    <div class=\"hbtls-empty\">Memuat live score...</div>\n  </div>\n\n  <!-- FOOTER -->\n  <div class=\"hbtls-footer\">\n    <span class=\"hbtls-updated\">Menunggu snapshot...</span>\n  </div>\n\n</div>\n</div>";
  function inject(){
    if(document.getElementById('hbtls-1'))return true;
    var mount=document.getElementById('hokben-livescore');
    if(mount){mount.innerHTML=html;return true;}
    // fallback: sisipkan tepat sebelum tag <script> pemanggil
    var scripts=document.getElementsByTagName('script');
    var self=null;
    for(var i=scripts.length-1;i>=0;i--){
      if(scripts[i].src&&scripts[i].src.indexOf('hokbentoto-livescore.js')!==-1){self=scripts[i];break;}
    }
    var wrap=document.createElement('div');
    wrap.innerHTML=html;
    if(self&&self.parentNode){self.parentNode.insertBefore(wrap.firstChild||wrap,self);}
    else{document.body.appendChild(wrap);}
    return true;
  }

  // 3) Logika live score (jalan setelah wadah siap)
  function runLogic(){
(function(config){
  'use strict';

  function boot(){
    var root=document.getElementById(config.id);
    if(!root)return;

    var list=root.querySelector('.hbtls-list');
    var searchBox=root.querySelector('.hbtls-search');
    var input=root.querySelector('.hbtls-search-input');
    var clearBtn=root.querySelector('.hbtls-clear');
    var sports=root.querySelectorAll('.hbtls-sport');
    var filters=root.querySelectorAll('.hbtls-filter');
    var liveCount=root.querySelector('.hbtls-live-count');
    var currentSport=root.querySelector('.hbtls-current-sport');
    var ticker=root.querySelector('.hbtls-ticker-track');
    var updated=root.querySelector('.hbtls-updated');
    var cache=root.querySelector('.hbtls-cache');
    var dateEl=root.querySelector('.hbtls-date');

    var sport=config.sport, filter='all', query='', matches=[], timer=null, controller=null, etags=Object.create(null);

    function node(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined&&text!==null)e.textContent=String(text);return e;}
    function normalize(v){return String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();}
    function safeUrl(v){if(!v)return '';try{var u=new URL(String(v),window.location.href);if(u.protocol!=='http:'&&u.protocol!=='https:')return '';return u.href;}catch(e){return '';}}
    function initials(name){var p=String(name||'').trim().split(/\s+/).filter(Boolean);if(!p.length)return '?';if(p.length===1)return p[0].substring(0,2).toUpperCase();return (p[0][0]+p[p.length-1][0]).toUpperCase();}

    function flag(code){code=String(code||'').toUpperCase();if(!/^[A-Z]{2}$/.test(code))return '';return String.fromCodePoint(127397+code.charCodeAt(0),127397+code.charCodeAt(1));}

    // === DATABASE LOGO (LOGO_DB dari shortcutpro.github.io/bolaauto) ===
    var logoIndex=null;
    var aliases={
      'man city':'manchester city','man utd':'manchester united','manchester utd':'manchester united',
      'inter milan':'inter','internazionale':'inter','paris saint germain':'psg','paris st germain':'psg',
      'lask linz':'lask','borussia dortmund':'dortmund','lille osc':'lille','celta de vigo':'celta vigo',
      'aek athina':'aek athens','real betis balompie':'real betis'
    };
    function logoName(name){
      var v=normalize(name).replace(/[.'’_,\-]/g,' ')
        .replace(/\b(fc|cf|afc|sc|ac|rc|cd|sd|ud|fk|sk|club)\b/g,' ')
        .replace(/\s+/g,' ').trim();
      return aliases[v]||v;
    }
    function dbIndex(){
      if(logoIndex!==null)return logoIndex;
      logoIndex=Object.create(null);
      if(typeof window.LOGO_DB!=='object'||!window.LOGO_DB)return logoIndex;
      Object.keys(window.LOGO_DB).forEach(function(key){
        var val=window.LOGO_DB[key];
        if(val)logoIndex[logoName(key)]=val;
      });
      return logoIndex;
    }

    function teamLogo(name,provider){
      var box=node('div','hbtls-team-logo');
      var url=safeUrl(provider);
      // Cadangan: kalau data tidak menyertakan logo, cari di database logo
      if(!url&&sport==='football'){
        var found=dbIndex()[logoName(name)];
        url=safeUrl(found);
      }
      if(!url){box.textContent=initials(name);return box;}
      var img=document.createElement('img');
      img.src=url;img.alt=name||'';img.loading='lazy';img.decoding='async';
      img.onerror=function(){box.textContent=initials(name);};
      box.appendChild(img);return box;
    }

    function groupLogo(m){
      var box=node('div','hbtls-group-logo');
      var logo=safeUrl(m.competition_logo);
      if(logo){var img=document.createElement('img');img.src=logo;img.alt=m.competition||'';img.loading='lazy';img.onerror=function(){box.textContent=flag(m.region_code)||'◉';};box.appendChild(img);}
      else{box.textContent=flag(m.region_code)||'◉';}
      return box;
    }

    function scoreText(m){if(m.score&&/\d/.test(String(m.score)))return String(m.score);return m.state==='upcoming'?'VS':'—';}
    function searchable(m){return normalize([m.home,m.away,m.competition,m.region,m.round,m.status].filter(Boolean).join(' '));}

    function teamCell(name,logo,side){
      var box=node('div','hbtls-team '+side);
      var text=node('div','hbtls-team-name',name||'-');
      var image=teamLogo(name,logo);
      if(side==='home'){box.appendChild(text);box.appendChild(image);}else{box.appendChild(image);box.appendChild(text);}
      return box;
    }

    function renderTicker(){
      var live=matches.filter(function(m){return m.state==='live';}).slice(0,6);
      var up=matches.filter(function(m){return m.state==='upcoming';}).slice(0,6);
      function esc(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
      var items=[];
      live.forEach(function(m){
        items.push('<span class="hbtls-tick-item"><b class="hbtls-tick-live">● LIVE</b> '+esc(m.home)+' <b class="hbtls-tick-vs">'+esc(scoreText(m))+'</b> '+esc(m.away)+(m.minute?' ('+esc(m.minute)+')':'')+'</span>');
      });
      up.forEach(function(m){
        items.push('<span class="hbtls-tick-item"><b class="hbtls-tick-time">'+esc(m.kickoff_wib||'--:--')+' WIB</b> '+esc(m.home)+' <b class="hbtls-tick-vs">VS</b> '+esc(m.away)+'</span>');
      });
      ticker.innerHTML=items.length?items.join('<span class="hbtls-tick-sep">◆</span>'):'Tidak ada pertandingan hari ini saat ini';
      ticker.style.animation='none';void ticker.offsetWidth;ticker.style.animation='';
    }

    function render(){
      list.textContent='';
      var visible=matches.slice();
      if(filter==='live')visible=visible.filter(function(m){return m.state==='live';});
      if(query)visible=visible.filter(function(m){return searchable(m).indexOf(query)!==-1;});
      if(!visible.length){
        list.appendChild(node('div','hbtls-empty',query?'Pertandingan tidak ditemukan.':(filter==='live'?'Tidak ada pertandingan LIVE saat ini.':'Tidak ada pertandingan hari ini saat ini.')));
        return;
      }
      var groups=new Map();
      visible.forEach(function(m){
        var name=m.competition||m.region||'Kompetisi Lainnya';
        var round=m.round||'';var key=name+'||'+round;
        if(!groups.has(key))groups.set(key,[]);
        groups.get(key).push(m);
      });
      groups.forEach(function(items,groupKey){
        var parts=groupKey.split('||');
        var group=node('section','hbtls-group');
        var head=node('div','hbtls-group-head');
        var info=node('div','hbtls-group-info');
        info.appendChild(groupLogo(items[0]));
        var titleBox=node('div','');
        titleBox.appendChild(node('div','hbtls-group-name',parts[0]));
        titleBox.appendChild(node('div','hbtls-group-region',[items[0].region,parts[1]].filter(Boolean).join(' • ')));
        info.appendChild(titleBox);
        head.appendChild(info);
        head.appendChild(node('div','hbtls-group-count',items.length+(items.length===1?' MATCH':' MATCHES')));
        group.appendChild(head);
        items.forEach(function(m){
          var row=node('div','hbtls-match '+(m.state||''));
          var time=node('div','hbtls-time');
          time.appendChild(node('div','',(m.kickoff_wib||'--:--')+' WIB'));
          if(m.state==='live'){time.appendChild(node('small','',(m.minute?m.minute+' • ':'')+'● LIVE'));}
          else{time.appendChild(node('small','',m.state==='final'?'Selesai':(m.status||'')));}
          row.appendChild(time);
          row.appendChild(teamCell(m.home,m.home_logo,'home'));
          row.appendChild(node('div','hbtls-score',scoreText(m)));
          row.appendChild(teamCell(m.away,m.away_logo,'away'));
          group.appendChild(row);
        });
        list.appendChild(group);
      });
    }

    function renderAll(){
      if(liveCount)liveCount.textContent=String(matches.filter(function(m){return m.state==='live';}).length);
      renderTicker();render();
    }

    function updateCurrentSport(){
      var active=root.querySelector('.hbtls-sport.active');
      if(!active)return;
      var label=active.querySelectorAll('span');
      currentSport.textContent=(label.length>1?label[label.length-1].textContent:active.textContent).replace(/\s+/g,' ').trim().toUpperCase();
    }

    async function load(){
      if(document.hidden||!navigator.onLine)return;
      if(controller)controller.abort();
      var current=new AbortController();controller=current;
      try{
        // Endpoint LINETOGEL yang benar: sport dikirim lewat query string (…/scores?sport=football)
        var url=new URL(String(config.rest),window.location.origin);
        url.searchParams.set('sport',sport);
        var headers={'Accept':'application/json'};
        if(etags[sport])headers['If-None-Match']=etags[sport];
        var response=await fetch(url.toString(),{method:'GET',headers:headers,credentials:'omit',cache:'no-cache',signal:current.signal});
        if(response.status===304){if(updated)updated.textContent='Snapshot tidak berubah';return;}
        if(!response.ok)throw new Error('HTTP '+response.status);
        var json=await response.json();
        var etag=response.headers.get('ETag');
        if(etag)etags[sport]=etag;
        matches=Array.isArray(json.matches)?json.matches:[];
        if(json.today_label&&dateEl)dateEl.textContent=json.today_label;
        if(updated)updated.textContent='Update: '+(json.updated_wib||'--:--:--')+' WIB'+(json.partial?' • sebagian sumber tidak tersedia':'');
        if(cache){var cs=json.cache_state||response.headers.get('X-LSL-Cache')||'ready';cache.textContent='Snapshot: '+cs;}
        renderAll();
      }catch(error){
        if(error.name==='AbortError')return;
        if(!matches.length){
          list.textContent='';
          list.appendChild(node('div','hbtls-empty','Live score belum dapat dimuat. Jika ini terus terjadi, sumber data mungkin memblokir akses lintas-domain (CORS).'));
        }
        if(updated)updated.textContent='Koneksi snapshot gagal • data terakhir dipertahankan';
      }finally{
        if(controller===current)controller=null;
      }
    }

    function clearTimer(){if(timer){window.clearTimeout(timer);timer=null;}}
    function schedule(){
      clearTimer();
      var jitter=Math.floor(Math.random()*Number(config.jitter||10000));
      timer=window.setTimeout(async function(){
        if(!document.hidden&&navigator.onLine)await load();
        schedule();
      },Number(config.refresh||35000)+jitter);
    }

    input.addEventListener('input',function(){query=normalize(this.value);searchBox.classList.toggle('has-value',!!this.value);render();});
    clearBtn.addEventListener('click',function(){input.value='';query='';searchBox.classList.remove('has-value');render();input.focus();});

    filters.forEach(function(b){b.addEventListener('click',function(){filter=b.dataset.filter||'all';filters.forEach(function(x){x.classList.toggle('active',x===b);});render();});});

    sports.forEach(function(b){b.addEventListener('click',async function(){
      var next=b.dataset.sport;if(!next||next===sport)return;
      clearTimer();if(controller){controller.abort();controller=null;}
      sport=next;filter='all';query='';input.value='';searchBox.classList.remove('has-value');matches=[];
      sports.forEach(function(x){x.classList.toggle('active',x===b);});
      filters.forEach(function(x){x.classList.toggle('active',x.dataset.filter==='all');});
      updateCurrentSport();
      list.textContent='';list.appendChild(node('div','hbtls-empty','Memuat live score...'));
      await load();schedule();
    });});

    document.addEventListener('visibilitychange',async function(){
      if(document.hidden){clearTimer();if(controller){controller.abort();controller=null;}return;}
      if(!navigator.onLine)return;
      await load();schedule();
    });
    window.addEventListener('online',async function(){await load();schedule();});
    window.addEventListener('offline',function(){clearTimer();if(updated)updated.textContent='Offline • menampilkan data terakhir';});
    window.addEventListener('beforeunload',function(){clearTimer();if(controller)controller.abort();});

    // Muat database logo tim (11 file), lalu render ulang agar logo kosong terisi
    function loadLogoDb(){
      if(window.HBTLS_LOGO_LOADED)return Promise.resolve();
      if(window.HBTLS_LOGO_LOADING)return window.HBTLS_LOGO_LOADING;
      window.LOGO_DB=window.LOGO_DB||{};
      var base=config.logoBase;
      var files=[];
      for(var i=0;i<=9;i++)files.push(base+'logo-db-'+i+'.js');
      files.push(base+'logo-db.js');
      window.HBTLS_LOGO_LOADING=files.reduce(function(chain,src){
        return chain.then(function(){
          return new Promise(function(resolve){
            var s=document.createElement('script');
            s.src=src;s.async=false;s.referrerPolicy='no-referrer';
            var done=false;
            var to=window.setTimeout(function(){finish();},8000);
            function finish(){if(done)return;done=true;window.clearTimeout(to);resolve();}
            s.onload=finish;s.onerror=finish;
            document.head.appendChild(s);
          });
        });
      },Promise.resolve()).then(function(){
        window.HBTLS_LOGO_LOADED=true;logoIndex=null;
      });
      return window.HBTLS_LOGO_LOADING;
    }

    updateCurrentSport();
    load().finally(function(){
      schedule();
      // Setelah data pertama tampil, muat database logo di latar belakang
      loadLogoDb().then(function(){logoIndex=null;renderAll();});
    });
  }

  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',boot,{once:true});}else{boot();}

})({
  "id":"hbtls-1",
  "rest":"https://lineblog953.com/wp-json/lsl/v1/scores",
  "logoBase":"https://shortcutpro.github.io/bolaauto/",
  "sport":"football",
  "refresh":35000,
  "jitter":10000
});
  }

  function start(){ inject(); runLogic(); sendHeightLoop(); }

  // Pengirim tinggi ke iframe induk (auto-height), stabil tanpa loop memanjang
  function sendHeightLoop(){
    var lastH=0;
    function measure(){
      var el=document.getElementById('hbtls-1');
      if(!el)return 0;
      // tinggi widget yang sebenarnya tampil (paling akurat, tidak ada ruang kosong)
      var rect=el.getBoundingClientRect();
      return Math.ceil(rect.height)+8;
    }
    function send(force){
      try{
        var h=measure();
        if(h>200&&(force||Math.abs(h-lastH)>2)){
          lastH=h;
          if(window.parent&&window.parent!==window)window.parent.postMessage({hbtlsHeight:h},'*');
        }
      }catch(e){}
    }
    window.addEventListener('load',function(){send(true);});
    window.addEventListener('resize',function(){send(true);});
    if(window.MutationObserver){
      var pending=false;
      var mo=new MutationObserver(function(){if(pending)return;pending=true;setTimeout(function(){pending=false;send(false);},300);});
      var t=document.getElementById('hbtls-1')||document.body;
      mo.observe(t,{childList:true,subtree:true,characterData:true});
    }
    [200,600,1200,2500,4500,7000].forEach(function(ms){setTimeout(function(){send(true);},ms);});
    // kirim berkala ringan: hanya benar-benar mengirim kalau tinggi berubah (tidak bikin loop)
    setInterval(function(){send(false);},1500);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',start,{once:true});
  }else{ start(); }
})();

/* ===== Proteksi (anti inspect / view-source / klik-kanan) ===== */
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey &&
        (e.key.toUpperCase() === 'I' ||
         e.key.toUpperCase() === 'J' ||
         e.key.toUpperCase() === 'C')) {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
        e.preventDefault();
        return false;
    }

    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
