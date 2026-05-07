function openDetail(id) {
  const inner = document.getElementById('detail-inner');
  const d = IMGS[id] || {hero:'',grid:[]};
  let html = `<div class="detail-cat">${CATS_EN[id]||''}</div>
    <h2 class="detail-title">${TITLES[id]||id}</h2>
    <p class="detail-desc">${DESC_EN[id]||''}</p>`;
  if (d.hero) {
    if (d.heroType === 'video') {
      html += `<video class="detail-hero-img" autoplay muted loop playsinline style="width:100%;max-height:82vh;object-fit:cover;display:block;"><source src="${d.hero}" type="video/mp4"></video>`;
    } else {
      html += `<img class="detail-hero-img" src="${d.hero}" alt="${TITLES[id]||''}" loading="lazy">`;
    }
  } else {
    html += `<div class="detail-no-img"><span style="font-family:var(--mono);font-size:10px;letter-spacing:0.14em;color:var(--ink-faint);text-transform:uppercase;">Images coming soon</span></div>`;
  }
  if (d.grid && d.grid.length > 0) {
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:3px;">';
    d.grid.forEach(src => {
      html += `<img src="${src}" alt="" loading="lazy" style="width:100%;aspect-ratio:4/5;object-fit:cover;display:block;">`;
    });
    html += '</div>';
  }
  // Instagram embed
  if (d.instagram) {
    html += `
    <div style="margin-top:40px;padding-top:32px;border-top:0.5px solid var(--ink-faint);">
      <div style="font-family:var(--mono);font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:20px;">From Instagram</div>
      <div style="max-width:540px;">
        <blockquote class="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/${d.instagram}/"
          data-instgrm-version="14"
          style="background:#fff;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,.5),0 1px 10px 0 rgba(0,0,0,.15);margin:0;padding:0;width:100%;max-width:540px;">
        </blockquote>
      </div>
    </div>`;
  }
  inner.innerHTML = html;
  // Trigger Instagram embed after innerHTML is set
  if (d.instagram) {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else if (!document.querySelector('script[src*="instagram.com/embed"]')) {
      const s = document.createElement('script');
      s.async = true;
      s.src = '//www.instagram.com/embed.js';
      document.body.appendChild(s);
    }
  }
  const ov = document.getElementById('detail-overlay');
  ov.classList.add('open');
  ov.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
function closeDetail() {
  document.getElementById('detail-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key==='Escape') closeDetail(); });

function showPage(id, pushState=true) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  const n = document.getElementById('nav-'+id);
  if (n) n.classList.add('active');
  window.scrollTo(0,0);
  if (pushState) history.pushState({page:id}, '', '#'+id);
  return false;
}

// Browser back/forward button support
window.addEventListener('popstate', e => {
  const id = (e.state && e.state.page) || 'home';
  showPage(id, false);
});

// Set initial history state
history.replaceState({page:'home'}, '', '#home');

function filterWork(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#work-grid .project-card').forEach(c => {
    c.classList.toggle('hidden', cat!=='all' && c.dataset.cat!==cat);
  });
}

// ── BRAND FORM → MAILTO ──
function sendBrandForm(e) {
  e.preventDefault();
  const g = id => (document.getElementById(id)||{}).value || '';
  const lines = [
    'BRAND QUESTIONNAIRE — SEZEN TUNCA STUDIO',
    '==========================================',
    '',
    'NAME: ' + g('f-name'),
    'EMAIL: ' + g('f-email'),
    'COMPANY: ' + g('f-company'),
    'WEBSITE: ' + g('f-website'),
    '',
    'PROJECT TYPE: ' + g('f-type'),
    'BRAND STAGE: ' + g('f-stage'),
    '',
    'ABOUT THE BRAND:',
    g('f-about'),
    '',
    'TARGET AUDIENCE:',
    g('f-audience'),
    '',
    'BRAND PERSONALITY:',
    g('f-personality'),
    '',
    'BRANDS THEY ADMIRE:',
    g('f-admire'),
    '',
    'DESIRED FEELING:',
    g('f-feeling'),
    '',
    'BUDGET: ' + g('f-budget'),
    'TIMELINE: ' + g('f-timeline'),
    '',
    'ADDITIONAL NOTES:',
    g('f-extra'),
  ];
  const body = lines.join('\n');
  const subject = 'New Project Inquiry — ' + (g('f-company') || g('f-name'));
  const mailto = 'mailto:hello@sezentunca.com'
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);
  window.location.href = mailto;
}

// ── i18n ──
const TR = {
  navWork:'Çalışmalar', navAbout:'Hakkında', navServices:'Hizmetler', navJournal:'Günlük', navContact:'İletişim',
  heroTagline:'Markanın ruhunu yansıtan görsel deneyimler yaratıyoruz — strateji, form ve kalıcı zanaatla.',
  homeSel:'Seçili Çalışmalar', homeAll:'Tümünü Gör →',
  workTitle:'Tüm Projeler', fbAll:'Tümü', fbBrand:'Marka Kimliği', fbPack:'Ambalaj', fbDir:'Art Direction',
  aboutSec:'Stüdyo Hakkında', aboutHead:'Tasarım bir<br><em>düşünme biçimidir</em>',
  aboutB1:"Sezen Tunca Studio, 2020 yılında İstanbul'da kurulan bir yaratıcı stüdyodur. Amaçlı, hassas ve sessizce unutulmaz marka kimlikleri inşa ediyoruz.",
  aboutB2:'Çalışma alanımız; marka stratejisi, görsel kimlik, ambalaj tasarımı ve art direction\'ı kapsar — bir markanın dünyada anlamlı biçimde var olduğu her yerde.',
  srvSec:'Hizmetlerimiz', srvHead:'Her markanın hak ettiği<br><em>net bir ses</em>',
  procSec:'Süreç', procSub:'İyi fikirlerin temposunda ilerleyen, düşünceli bir süreç.',
  roadSteps:[
    {title:'Tanışma', desc:'Markayı, kurucuyu, ürünü ve arkasındaki niyeti anlamak.'},
    {title:'Marka Temeli', desc:'Markanın neye inandığını, nasıl davrandığını ve neyle hatırlanmak istediğini netleştirmek.'},
    {title:'Görsel Dünya', desc:'Moodboard, referanslar ve atmosfer ile ilk görsel dili oluşturmak.'},
    {title:'Geri Bildirim & Netleştirme', desc:'Doğru yönü birlikte keskinleştirmek.'},
    {title:'Kimlik Tasarımı', desc:'Logo, tipografi, renk paleti ve tüm görsel dili tasarlamak.'},
    {title:'Marka Sistemi', desc:'Markanın farklı alanlarda tutarlı şekilde kullanılabileceği bir yapı kurmak.'},
    {title:'Teslim', desc:'Tüm dosyaları ve kullanım rehberini eksiksiz şekilde sunmak.'},
  ],
  jrnHead:'Günlük', jrnSub:'Tasarım, marka ve yaratıcı<br>pratik üzerine düşünceler',
  conSec:'İletişim', conHead:'Birlikte kalıcı<br>bir şey<br><em>yaratalım</em>', conForm:'Proje Başlat', conSubmit:'Gönder →',
  closeBtn:'Kapat ×'
};
const EN = {
  navWork:'Work', navAbout:'About', navServices:'Services', navJournal:'Journal', navContact:'Contact',
  heroTagline:"Creating visual experiences that reflect you and your brand's soul — through strategy, form, and enduring craft.",
  homeSel:'Selected Work', homeAll:'View All →',
  workTitle:'All Projects', fbAll:'All', fbBrand:'Branding', fbPack:'Packaging', fbDir:'Direction',
  aboutSec:'About the Studio', aboutHead:'Design as a form<br>of <em>thinking</em>',
  aboutB1:'Sezen Tunca Studio is an Istanbul-based creative studio founded in 2020. We build brand identities that are purposeful, precise, and quietly unforgettable.',
  aboutB2:'Our practice spans brand strategy, visual identity, packaging design, and art direction — everywhere a brand shows up in the world to meaningfully connect.',
  srvSec:'What We Do', srvHead:'Every brand deserves<br><em>a clear voice</em>',
  procSec:'Process', procSub:'A thoughtful process that moves at the pace of good ideas.',
  roadSteps:[
    {title:'Introduction', desc:'Understanding the brand, the founder, the product and the intention behind it.'},
    {title:'Brand Core', desc:'Defining what the brand believes in, how it behaves, and what it wants to be known for.'},
    {title:'Visual World', desc:'Creating the moodboard, references, atmosphere and first visual direction.'},
    {title:'Feedback & Refinement', desc:'Clarifying the direction through conversation, feedback and creative editing.'},
    {title:'Identity Design', desc:'Designing the logo, typography, colour palette, visual language and key brand assets.'},
    {title:'Brand System', desc:'Building a clear and usable system that can live across packaging, print, digital and social touchpoints.'},
    {title:'Final Delivery', desc:'Preparing the brand files and guidelines so the identity can be used consistently and confidently.'},
  ],
  jrnHead:'Journal', jrnSub:'Thoughts on design, brand,<br>and creative practice',
  conSec:'Get in Touch', conHead:"Let's make<br>something<br><em>worth keeping</em>", conForm:'Start a Project', conSubmit:'Send Questionnaire →',
  closeBtn:'Close ×'
};

function setLang(lang) {
  const l = lang==='tr' ? TR : EN;
  document.documentElement.lang = lang;
  document.getElementById('btn-tr').classList.toggle('active', lang==='tr');
  document.getElementById('btn-en').classList.toggle('active', lang==='en');
  document.getElementById('nav-work').textContent = l.navWork;
  document.getElementById('nav-about').textContent = l.navAbout;
  document.getElementById('nav-services').textContent = l.navServices;
  document.getElementById('nav-journal').textContent = l.navJournal;
  document.getElementById('nav-contact').textContent = l.navContact;
  const ht = document.getElementById('hero-tagline');
  if (ht) ht.textContent = l.heroTagline;
  document.getElementById('home-sel-label').textContent = l.homeSel;
  document.getElementById('home-view-all').textContent = l.homeAll;
  document.getElementById('work-title').textContent = l.workTitle;
  document.getElementById('fb-all').textContent = l.fbAll;
  document.getElementById('fb-branding').textContent = l.fbBrand;
  document.getElementById('fb-packaging').textContent = l.fbPack;
  document.getElementById('fb-direction').textContent = l.fbDir;
  document.getElementById('about-sec').textContent = l.aboutSec;
  document.getElementById('about-headline').innerHTML = l.aboutHead;
  document.getElementById('about-body1').textContent = l.aboutB1;
  document.getElementById('about-body2').textContent = l.aboutB2;
  document.getElementById('srv-sec').textContent = l.srvSec;
  document.getElementById('srv-headline').innerHTML = l.srvHead;
  const ps = document.getElementById('proc-sec-label');
  if (ps) ps.textContent = l.procSec;
  const psub = document.getElementById('proc-sec-sub');
  if (psub) psub.textContent = l.procSub;
  if (l.roadSteps) {
    document.querySelectorAll('.road-step').forEach((step, i) => {
      if (l.roadSteps[i]) {
        const t = step.querySelector('.road-title');
        const d = step.querySelector('.road-desc');
        if (t) t.textContent = l.roadSteps[i].title;
        if (d) d.textContent = l.roadSteps[i].desc;
      }
    });
  }
  document.getElementById('jrn-headline').textContent = l.jrnHead;
  document.getElementById('jrn-sub').innerHTML = l.jrnSub;
  document.getElementById('con-sec').textContent = l.conSec;
  document.getElementById('con-headline').innerHTML = l.conHead;
  document.getElementById('con-form-label').textContent = l.conForm;
  document.getElementById('con-submit').textContent = l.conSubmit;
  document.getElementById('detail-close-btn').textContent = l.closeBtn;
  // Form labels
  const fl = {
    tr: {
      name:'Ad Soyad *', email:'E-posta *', company:'Şirket / Marka Adı', website:'Web Sitesi',
      type:'Ne tür bir proje arıyorsunuz? *', about:'Markanız hakkında anlatın',
      stage:'Süreçte neredesiniz?', audience:'Hedef kitleniz kim?',
      personality:'Markanızın kişiliğini nasıl tanımlarsınız?',
      admire:'Hayran olduğunuz 3 marka (ve neden)',
      feeling:'İnsanlar markanızla karşılaştığında ne hissettirmek istersiniz?',
      budget:'Bütçe Aralığı', timeline:'Zaman Çizelgesi / Son Tarih',
      extra:'Bilmemizi istediğiniz başka bir şey var mı?',
      loc:'Konum'
    },
    en: {
      name:'Your Name *', email:'Email *', company:'Company / Brand Name', website:'Website',
      type:'What type of project are you looking for? *', about:'Tell us about your brand',
      stage:'Where are you in the process?', audience:'Who is your target audience?',
      personality:"How would you describe your brand's personality?",
      admire:'3 brands you admire (and why)',
      feeling:'What do you want people to feel when they encounter your brand?',
      budget:'Budget range', timeline:'Timeline / Deadline',
      extra:"Anything else you'd like us to know?",
      loc:'Based in'
    }
  };
  const lf = fl[lang] || fl.en;
  ['name','email','company','website','type','about','stage','audience','personality','admire','feeling','budget','timeline','extra'].forEach(k => {
    const el = document.getElementById('fl-' + k);
    if (el) el.textContent = lf[k];
  });
  const locEl = document.getElementById('con-loc-label');
  if (locEl) locEl.textContent = lf.loc;
  // Maps label
  const officeLabel = document.querySelector('#page-contact .sec-label[style*="margin-bottom:16px"]');
  if (officeLabel) officeLabel.textContent = lang === 'tr' ? 'Ofisimiz' : 'Our Office';
}

// Default: English
// TANKS video: show last frame, play on hover
function initTanksVideo() {
  document.querySelectorAll('.tanks-video').forEach(vid => {
    function seekToEnd() {
      if (vid.duration && isFinite(vid.duration)) vid.currentTime = vid.duration - 0.01;
    }
    vid.addEventListener('loadeddata', seekToEnd);
    vid.addEventListener('canplay', seekToEnd);
    if (vid.readyState >= 2) seekToEnd();
    const card = vid.closest('.project-card');
    if (!card) return;
    card.addEventListener('mouseenter', () => { vid.currentTime = 0; vid.play().catch(()=>{}); });
    card.addEventListener('mouseleave', () => { vid.pause(); setTimeout(seekToEnd, 50); });
  });
}
initTanksVideo();
setTimeout(initTanksVideo, 500);

setLang('en');
