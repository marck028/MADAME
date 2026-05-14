// ══════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════
let products = [
  { id: 1, name: 'Sérum Hidratante Intenso', price: 120, cat: 'seca', emoji: '❋', desc: 'Ácido hialurónico + aloe vera para hidratación profunda de 72h.', extraDesc: 'Aplicar 2-3 gotas sobre el rostro limpio. Ideal para uso nocturno.', stock: 45, badge: 'Bestseller', img: 'img/A1.png' },
  { id: 2, name: 'Crema Nutritiva de Argán', price: 165, cat: 'seca', emoji: '❀', desc: 'Aceite de argán puro con manteca de karité para nutrir pieles secas.', extraDesc: 'Rica en vitamina E y ácidos grasos esenciales.', stock: 30, img: 'img/2.png' },
  { id: 3, name: 'Sérum Control Sebo', price: 110, cat: 'grasa', emoji: '❀', desc: 'Niacinamida + zinc para regular el exceso de grasa y minimizar poros.', extraDesc: 'Fórmula ligera de rápida absorción. Libre de aceites.', stock: 60, badge: 'Nuevo', img: 'img/3.png' },
  { id: 4, name: 'Tónico Poros Invisibles', price: 95, cat: 'grasa', emoji: '✦', desc: 'Ácido salicílico natural + té verde para piel fresca y sin brillo.', extraDesc: 'Aplicar con algodón por las mañanas.', stock: 40, img: 'img/4.png' },
  { id: 5, name: 'Crema Equilibrante', price: 130, cat: 'mixta', emoji: '◈', desc: 'Fórmula bifásica que hidrata zonas secas y controla la zona T.', extraDesc: 'Para mejores resultados, usar mañana y noche.', stock: 25, img: 'img/5.png' },
  { id: 6, name: 'Mascarilla Purificante', price: 85, cat: 'mixta', emoji: '❧', desc: 'Arcilla kaolín + carbón activado para limpieza profunda semanal.', extraDesc: 'Aplicar 1-2 veces por semana durante 10 minutos.', stock: 55, img: 'img/6.png' },
  { id: 7, name: 'Sérum Calmante de Rosa', price: 155, cat: 'sensible', emoji: '✿', desc: 'Rosa mosqueta + centella asiática para pieles reactivas.', extraDesc: 'Sin fragancia, sin colorantes. Dermatológicamente probado.', stock: 20, badge: 'Favorito', img: 'img/7.png' },
  { id: 8, name: 'Crema Barrera Protectora', price: 140, cat: 'sensible', emoji: '◆', desc: 'Ceramidas + péptidos para reforzar la barrera cutánea natural.', extraDesc: 'Especial para pieles post-tratamiento.', stock: 35, img: 'img/8.png' },
  { id: 9, name: 'Retinol Suave Nocturno', price: 175, cat: 'madura', emoji: '☾', desc: 'Retinol encapsulado 0.3% + vitamina E para regenerar mientras duermes.', extraDesc: 'Usar solo de noche. Aplicar protector solar al día siguiente.', stock: 18, badge: 'Premium', img: 'img/9.png' },
  { id: 10, name: 'Crema Antioxidante Lumière', price: 195, cat: 'madura', emoji: '✦', desc: 'Vitamina C estabilizada + resveratrol para luminosidad y firmeza.', extraDesc: 'Protege contra radicales libres y polución ambiental.', stock: 22, img: 'img/10.png' },
  { id: 11, name: 'Aceite Facial de Jojoba', price: 90, cat: 'todos', emoji: '❀', desc: 'Aceite de jojoba 100% puro, apto para todo tipo de piel.', extraDesc: 'Mezclar con crema habitual o aplicar solo en las noches.', stock: 80, img: 'img/11.png' },
  { id: 12, name: 'Protector Solar SPF50', price: 115, cat: 'todos', emoji: '☼', desc: 'Protección mineral con zinc + activos botánicos.', extraDesc: 'No deja residuo blanco. Fórmula invisible y ligera.', stock: 65, img: 'img/12.png' }
];

let cart = [], orders = [], quizAnswers = {}, currentStep = 0, heroCarIdx = 0, nosCarIdx = 0;
let editingProductId = null, editingProductImg = null;
let waNumber = '+59171234567', qrImageSrc = null;
let deliveryMode = 'tienda'; // 'tienda' | 'delivery' | 'departamento'

let socialLinks = { instagram: '', facebook: '', tiktok: '' };
let locationData = { title: 'Encuéntranos', street: 'Av. Ejemplo #123, Cochabamba', hours: 'Lun – Sáb: 9:00 – 20:00', ref: 'A media cuadra del parque principal', mapUrl: '', mapImg: null };

// ══ CAROUSEL DATA ══
let heroSlides = [
  { type: 'logo' },
  { type: 'quote', icon: '❀', text: '"La naturaleza tiene la mejor respuesta para tu piel"', img: null },
  { type: 'quote', icon: '✿', text: '"Ingredientes puros, resultados extraordinarios"', img: null },
  { type: 'quote', icon: '❧', text: '"Belleza consciente, ritual diario"', img: null },
  { type: 'quote', icon: '✦', text: '"Cada gota celebra tu esencia natural"', img: null },
];

let nosSlides = [
  { icon: '❀', quote: '"La verdadera belleza nace del equilibrio entre naturaleza y ciencia"', author: '— Fundadora, Madame Natural' },
  { icon: '✿', quote: '"Ingredientes puros, resultados extraordinarios, siempre sostenibles"', author: '— Nuestra Filosofía' },
  { icon: '❧', quote: '"Cada producto es una promesa: respetamos tu piel y el medio ambiente"', author: '— Compromiso Madame Natural' },
  { icon: '✦', quote: '"Rituales botánicos para revelar tu mejor versión"', author: '— Nuestra Visión' },
  { icon: '◈', quote: '"Lujo natural, hecho a mano con dedicación artesanal"', author: '— Esencia Madame' },
];

let aboutCards = [
  { icon: '❀', title: '100% Natural', text: 'Ingredientes botánicos seleccionados con rigor científico para garantizar pureza y eficacia.' },
  { icon: '♺', title: 'Sostenible', text: 'Envases eco-friendly y fórmulas cruelty-free. Belleza que cuida el planeta.' },
  { icon: '✦', title: 'Asesoramiento', text: 'Cada clienta recibe una guía personalizada para construir su rutina ideal.' },
];

let quizData = [
  { question: '¿Cómo describes tu tipo de piel generalmente?', options: [{ text: 'Tirante, escamosa o áspera', val: 'seca' }, { text: 'Brillante, con poros dilatados', val: 'grasa' }, { text: 'Grasa en zona T, seca en mejillas', val: 'mixta' }, { text: 'Se irrita o enrojece fácilmente', val: 'sensible' }, { text: 'Muestra líneas de expresión y pérdida de firmeza', val: 'madura' }] },
  { question: '¿Cuál es tu principal preocupación de piel?', options: [{ text: 'Falta de hidratación', val: 'hidra' }, { text: 'Acné o imperfecciones', val: 'acne' }, { text: 'Manchas o tono desigual', val: 'manchas' }, { text: 'Envejecimiento prematuro', val: 'anti' }] },
  { question: '¿Qué rutina sigues actualmente?', options: [{ text: 'Ninguna, empiezo desde cero', val: 'ninguna' }, { text: 'Solo limpieza y crema', val: 'basica' }, { text: 'Tengo una rutina completa', val: 'completa' }, { text: 'Uso activos como vitamina C o retinol', val: 'activos' }] },
  { question: '¿Cuánto tiempo dedicas a tu rutina diaria?', options: [{ text: '5 minutos — quiero algo rápido', val: '5min' }, { text: '15 minutos — busco equilibrio', val: '15min' }, { text: '30+ minutos — disfruto el ritual', val: '30min' }] },
];

const catLabels = { seca: 'Piel Seca', grasa: 'Piel Grasa', mixta: 'Piel Mixta', sensible: 'Piel Sensible', madura: 'Piel Madura', todos: 'Todo Tipo' };

// ══ NAV ══
function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
  if (id === 'catalogo') renderProducts();
  if (id === 'carrito') { renderCart(); updateOrderSummary(); }
  if (id === 'nosotros') renderNosCarousel();
  if (id === 'quiz') initQuiz();
  if (id === 'home') { renderHeroCarousel(); renderHomeAboutStrip(); }
}

// ══ HERO CAROUSEL ══
function renderHeroCarousel() {
  const track = document.getElementById('heroCarTrack');
  track.innerHTML = heroSlides.map((sl, i) => {
    if (sl.type === 'logo') return `<div class="hero-car-slide"><div class="slide-logo-center"><div class="slide-logo-svg-wrap"><svg viewBox="0 0 260 120" width="160"><use href="#madame-logo"/></svg></div></div></div>`;
    if (sl.img) return `<div class="hero-car-slide" id="heroSlide${i}">${sl.img ? `<img src="${sl.img}" style="width:100%;height:100%;object-fit:cover;">` : `<div class="slide-quote-inner"><span class="slide-quote-icon">${sl.icon}</span><p class="slide-quote-text">${sl.text}</p></div>`}</div>`;
    return `<div class="hero-car-slide" id="heroSlide${i}"><div class="slide-quote-inner"><span class="slide-quote-icon">${sl.icon}</span><p class="slide-quote-text">${sl.text}</p></div></div>`;
  }).join('');
  initHeroCarousel();
}
function initHeroCarousel() {
  heroCarIdx = 0;
  const slides = document.querySelectorAll('#heroCarTrack .hero-car-slide');
  document.getElementById('heroCarTrack').style.transform = 'translateX(0)';
  document.getElementById('heroCarDots').innerHTML = Array.from(slides, (_, i) => `<div class="hero-car-dot${i === 0 ? ' active' : ''}" onclick="goHeroCar(${i})"></div>`).join('');
}
function moveHeroCar(dir) { const n = document.querySelectorAll('#heroCarTrack .hero-car-slide').length; heroCarIdx = (heroCarIdx + dir + n) % n; document.getElementById('heroCarTrack').style.transform = `translateX(-${heroCarIdx * 100}%)`; document.querySelectorAll('.hero-car-dot').forEach((d, i) => d.classList.toggle('active', i === heroCarIdx)); }
function goHeroCar(i) { heroCarIdx = i; document.getElementById('heroCarTrack').style.transform = `translateX(-${i * 100}%)`; document.querySelectorAll('.hero-car-dot').forEach((d, j) => d.classList.toggle('active', j === i)); }
setInterval(() => { if (document.getElementById('home').classList.contains('active')) moveHeroCar(1); }, 4500);

// ══ NOS CAROUSEL ══
function renderNosCarousel() {
  document.getElementById('nosCarouselTrack').innerHTML = nosSlides.map(sl => `<div class="carousel-slide"><div class="carousel-slide-bg">${sl.img ? `<img src="${sl.img}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.3;">` : ''}${sl.icon}</div><div class="carousel-slide-content"><p class="carousel-slide-quote">${sl.quote}</p><p class="carousel-slide-author">${sl.author}</p></div></div>`).join('');
  initNosCarousel();
}
function initNosCarousel() { nosCarIdx = 0; const slides = document.querySelectorAll('#nosCarouselTrack .carousel-slide'); document.getElementById('nosCarouselTrack').style.transform = 'translateX(0)'; document.getElementById('nosCarouselDots').innerHTML = Array.from(slides, (_, i) => `<div class="carousel-dot${i === 0 ? ' active' : ''}" onclick="goNosCar(${i})"></div>`).join(''); }
function moveNosCarousel(dir) { const n = document.querySelectorAll('#nosCarouselTrack .carousel-slide').length; nosCarIdx = (nosCarIdx + dir + n) % n; document.getElementById('nosCarouselTrack').style.transform = `translateX(-${nosCarIdx * 100}%)`; document.querySelectorAll('#nosCarouselDots .carousel-dot').forEach((d, i) => d.classList.toggle('active', i === nosCarIdx)); }
function goNosCar(i) { nosCarIdx = i; document.getElementById('nosCarouselTrack').style.transform = `translateX(-${i * 100}%)`; document.querySelectorAll('#nosCarouselDots .carousel-dot').forEach((d, j) => d.classList.toggle('active', j === i)); }
setInterval(() => { if (document.getElementById('nosotros').classList.contains('active')) moveNosCarousel(1); }, 5000);

// ══ SOCIAL ══
function openSocial(net, e) { const url = socialLinks[net]; if (!url) { e.preventDefault(); showToast('Enlace de ' + net + ' no configurado aún'); } else { document.getElementById('link' + net.charAt(0).toUpperCase() + net.slice(1)).href = url; } }
function scrollToLocation() { document.getElementById('homeLocationSection').scrollIntoView({ behavior: 'smooth' }); }

// ══ PRODUCTS ══
function renderProducts(filter = 'todos') {
  const grid = document.getElementById('productsGrid');
  const list = filter === 'todos' ? products : products.filter(p => p.cat === filter || p.cat === 'todos');
  grid.innerHTML = list.map(p => `
    <div class="product-card">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <div class="product-img">${p.img ? `<img src="${p.img}" alt="${p.name}">` : ''}<span class="product-emoji" style="${p.img ? 'opacity:0;' : ''}">${p.emoji}</span></div>
      <div class="product-info">
        <div class="product-cat">${catLabels[p.cat]}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        ${p.extraDesc ? `<div class="product-extra-desc">${p.extraDesc}</div>` : ''}
        <div class="product-footer">
          <div class="product-price">Bs. ${p.price}<span> /unidad</span></div>
          <button class="btn-add" onclick="addToCart(${p.id})">+ Añadir</button>
        </div>
      </div>
    </div>`).join('');
}
function filterProducts(cat, btn) { document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderProducts(cat); }
function addToCart(id) { const p = products.find(x => x.id === id); const ex = cart.find(i => i.id === id); if (ex) ex.qty++; else cart.push({ ...p, qty: 1 }); updateCartCount(); showToast(`${p.name} añadido al carrito`); }
function updateCartCount() { document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0); }

// ══ CART ══
function renderCart() {
  const list = document.getElementById('cartItemsList');
  if (cart.length === 0) { list.innerHTML = `<div class="cart-empty"><span class="cart-empty-icon">❖</span><p style="color:var(--muted);font-size:0.85rem;font-family:'Raleway',sans-serif;">Tu carrito está vacío</p><button class="btn-outline" style="margin-top:1.2rem;" onclick="showSection('catalogo')">Ver Catálogo</button></div>`; }
  else { list.innerHTML = cart.map(item => `<div class="cart-item"><div class="cart-item-icon">${item.img ? `<img src="${item.img}" alt="">` : `<span style="font-size:1.7rem">${item.emoji}</span>`}</div><div class="cart-item-info"><div class="cart-item-name">${item.name}</div><div class="cart-item-cat">${catLabels[item.cat]}</div><div class="cart-item-controls"><button class="qty-btn" onclick="updateQty(${item.id},-1)">−</button><span class="qty-num">${item.qty}</span><button class="qty-btn" onclick="updateQty(${item.id},1)">+</button></div></div><div class="cart-item-price">Bs. ${item.price * item.qty}</div><button class="cart-remove" onclick="removeFromCart(${item.id})">✕</button></div>`).join(''); }
}
function updateQty(id, delta) { const item = cart.find(i => i.id === id); if (item) { item.qty += delta; if (item.qty <= 0) cart = cart.filter(i => i.id !== id); } updateCartCount(); renderCart(); updateOrderSummary(); }
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); updateCartCount(); renderCart(); updateOrderSummary(); }

// ══ DELIVERY ══
function selectDelivery(mode, el) {
  deliveryMode = mode;
  document.querySelectorAll('.delivery-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('datosDelivery').style.display = (mode === 'delivery' ? 'block' : 'none');
  document.getElementById('datosDept').classList.toggle('visible', mode === 'departamento');
  updateOrderSummary();
}

function updateOrderSummary() {
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let shipping = 0, shippingLabel = 'Gratis';
  if (deliveryMode === 'delivery') { shipping = 15; shippingLabel = 'Bs. 15'; }
  else if (deliveryMode === 'departamento') { shipping = 0; shippingLabel = 'A convenir'; }
  document.getElementById('subtotalDisplay').textContent = `Bs. ${sub}`;
  document.getElementById('shippingCost').textContent = shippingLabel;
  document.getElementById('totalDisplay').textContent = deliveryMode === 'departamento' ? `Bs. ${sub} + envío` : `Bs. ${sub + shipping}`;
}

function showQR() {
  document.getElementById('qrSection').classList.add('visible');
  if (qrImageSrc) document.getElementById('qrImgArea').innerHTML = `<img src="${qrImageSrc}" style="width:126px;height:126px;object-fit:contain;">`;
  showToast('Escanea el QR para completar tu pago');
}

function confirmOrderWA() {
  const ciudad = document.getElementById('ciudad').value;
  const ci = document.getElementById('ci').value;
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  if (!ciudad || !nombre) { showToast('Por favor completa tus datos'); return; }
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const items = cart.map(i => `• ${i.name} x${i.qty} = Bs.${i.price * i.qty}`).join('\n');
  let entregaInfo = '';
  if (deliveryMode === 'tienda') entregaInfo = '◆ Recojo en tienda';
  else if (deliveryMode === 'delivery') { const dir = document.getElementById('direccion').value; const zona = document.getElementById('zona').value; entregaInfo = `◇ Delivery — ${dir}, ${zona}`; }
  else { const dept = document.getElementById('departamento').value; const cd = document.getElementById('ciudadDept').value; entregaInfo = `❐ Envío a ${dept} / ${cd} (costo a convenir)`; }
  const msg = encodeURIComponent(`❀ *MADAME NATURAL — Pedido*\n\n◉ *Cliente:* ${nombre}\n◆ *Ciudad:* ${ciudad}\n◈ *CI:* ${ci}\n✆ *Tel:* ${telefono}\n\n❐ *Entrega:* ${entregaInfo}\n\n*Productos:*\n${items}\n\n◆ *Subtotal:* Bs. ${sub}\n\nAdjunto el comprobante de pago. ¡Muchas gracias! ✦`);
  orders.unshift({ id: `#${String(orders.length + 1).padStart(3, '0')}`, cliente: nombre, total: `Bs. ${sub}`, entrega: entregaInfo, estado: 'Pendiente', fecha: new Date().toISOString().split('T')[0], ciudad, ci, productos: cart.map(i => `${i.name} x${i.qty}`).join(', ') });
  window.open(`https://wa.me/${waNumber.replace(/\D/g, '')}?text=${msg}`, '_blank');
  cart = []; updateCartCount(); showToast('¡Pedido enviado a WhatsApp! ✦');
}

// ══ QUIZ ══
function initQuiz() { currentStep = 0; quizAnswers = {}; document.getElementById('quizResult').style.display = 'none'; document.getElementById('quizNav').style.display = 'flex'; document.getElementById('quizBack').style.display = 'none'; renderQuizSteps(); }
function renderQuizSteps() { document.getElementById('quizStepsContainer').innerHTML = quizData.map((q, i) => `<div class="quiz-step${i === 0 ? ' active' : ''}" data-step="${i}"><p class="quiz-q">${q.question}</p><div class="quiz-options">${q.options.map(o => `<button class="quiz-opt" onclick="selectQuizOpt(this,'${o.val}')">${o.text}</button>`).join('')}</div></div>`).join(''); renderProgress(); }
function renderProgress() { document.getElementById('quizProgress').innerHTML = Array.from({ length: quizData.length }, (_, i) => `<div class="progress-seg${i < currentStep ? ' done' : ''}"></div>`).join(''); }
function selectQuizOpt(btn, val) { btn.closest('.quiz-options').querySelectorAll('.quiz-opt').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); quizAnswers[currentStep] = val; }
function nextQuizStep() { if (!quizAnswers[currentStep]) { showToast('Selecciona una opción'); return; } currentStep++; if (currentStep >= quizData.length) { showQuizResult(); return; } document.querySelectorAll('.quiz-step').forEach((s, i) => s.classList.toggle('active', i === currentStep)); document.getElementById('quizBack').style.display = 'block'; renderProgress(); }
function prevQuizStep() { currentStep--; document.querySelectorAll('.quiz-step').forEach((s, i) => s.classList.toggle('active', i === currentStep)); if (currentStep === 0) document.getElementById('quizBack').style.display = 'none'; renderProgress(); }
function showQuizResult() { document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active')); document.getElementById('quizNav').style.display = 'none'; document.getElementById('quizResult').style.display = 'block'; const skin = quizAnswers[0]; const types = { seca: { label: 'Piel Seca', desc: 'Tu piel necesita nutrición profunda y protección de la barrera cutánea. Te recomendamos una rutina altamente nutritiva.' }, grasa: { label: 'Piel Grasa', desc: 'Tu piel se beneficiará de productos que regulen el sebo sin resecarla. La clave es equilibrio y ligereza.' }, mixta: { label: 'Piel Mixta', desc: 'Necesitas productos equilibrantes que gestionen distintas zonas. La hidratación ligera es tu aliada.' }, sensible: { label: 'Piel Sensible', desc: 'Tu piel requiere ingredientes suaves. Prioriza la reparación de la barrera con fórmulas sin fragancia.' }, madura: { label: 'Piel Madura', desc: 'Tu piel se beneficiará de activos antiedad y antioxidantes que restauren firmeza y luminosidad.' } }; const t = types[skin] || types['mixta']; document.getElementById('resultType').textContent = `Tu tipo: ${t.label}`; document.getElementById('resultDesc').textContent = t.desc; const recs = products.filter(p => p.cat === skin || p.cat === 'todos').slice(0, 3); document.getElementById('resultProducts').innerHTML = recs.map(p => `<div class="result-product">${p.img ? `<img src="${p.img}" style="width:56px;height:56px;object-fit:cover;margin:0 auto 0.4rem;display:block;border:1px solid var(--border);">` : `<span class="result-product-icon">${p.emoji}</span>`}<div class="result-product-name">${p.name}</div><div style="color:var(--gold-bright);font-family:'Playfair Display',serif;margin-top:0.38rem;font-size:0.95rem;font-weight:700;">Bs. ${p.price}</div><button class="btn-add" style="margin-top:0.65rem;width:100%;" onclick="addToCart(${p.id})">+ Añadir</button></div>`).join(''); }
function downloadPDF() { showToast('Generando PDF... (función con backend).'); }
function sendResultsWA() { const skin = quizAnswers[0] || 'mixta'; const msg = encodeURIComponent(`❀ *MADAME NATURAL — Mi Rutina Personalizada*\n\nTipo de piel: ${skin}\n\n¡Quiero saber más sobre mi rutina recomendada! ✦`); window.open(`https://wa.me/${waNumber.replace(/\D/g, '')}?text=${msg}`, '_blank'); }

// ══ ABOUT STRIP ══
function renderHomeAboutStrip() { document.getElementById('homeAboutStrip').innerHTML = aboutCards.map(c => `<div class="home-about-card"><span class="home-about-icon">${c.icon}</span><h3 class="home-about-title">${c.title}</h3><p class="home-about-text">${c.text}</p></div>`).join(''); }

// ══ ADMIN AUTH ══
function adminLogin() {
  const user = document.getElementById('adminUser').value.trim();
  const pass = document.getElementById('adminPass').value;
  if (user === 'Daniela madame' && pass === 'madam$') {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminPanel').classList.add('visible');
    renderAdminDashboard(); renderAdminProducts(); renderAdminOrders(); renderQuizAdminEditor(); renderAboutCardsEditor(); renderHeroSlidesEditor(); renderNosSlidesEditor();
    loadSocialAdminFields(); loadLocationAdminFields();
  } else { showToast('Credenciales incorrectas'); }
}
function adminLogout() { document.getElementById('adminLogin').style.display = 'flex'; document.getElementById('adminPanel').classList.remove('visible'); document.getElementById('adminUser').value = ''; document.getElementById('adminPass').value = ''; }
function showAdminSection(id, btn) { document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active')); document.getElementById(`sec-${id}`).classList.add('active'); document.querySelectorAll('.admin-nav-item').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }

// ══ ADMIN RENDERS ══
function renderAdminDashboard() {
  document.getElementById('adminStats').innerHTML = [{ label: 'Productos', val: products.length }, { label: 'Unidades Stock', val: products.reduce((s, p) => s + p.stock, 0) }, { label: 'Pedidos', val: orders.length }, { label: 'Ingresos Aprox.', val: `Bs.${orders.length * 200}` }].map(s => `<div class="admin-stat"><div class="admin-stat-label">${s.label}</div><div class="admin-stat-val">${s.val}</div></div>`).join('');
  document.getElementById('adminOrdersTbody').innerHTML = (orders.length ? orders.slice(0, 5) : [{ id: '—', cliente: 'Sin pedidos', entrega: '—', total: '—', estado: '—', fecha: '—' }]).map(o => `<tr><td>${o.id}</td><td>${o.cliente}</td><td style="font-size:0.7rem">${o.entrega || '—'}</td><td style="color:var(--gold-bright)">${o.total}</td><td><span class="stock-badge ${o.estado === 'Confirmado' ? 'stock-ok' : o.estado === 'Enviado' ? 'stock-low' : 'stock-out'}">${o.estado}</span></td><td>${o.fecha}</td></tr>`).join('');
}
function renderAdminProducts() { document.getElementById('adminProductsTbody').innerHTML = products.map(p => `<tr><td>${p.img ? `<img src="${p.img}" style="width:38px;height:38px;object-fit:cover;border:1px solid var(--border);">` : p.emoji}</td><td>${p.name}</td><td>${catLabels[p.cat]}</td><td>Bs. ${p.price}</td><td><span class="stock-badge ${p.stock > 30 ? 'stock-ok' : p.stock > 5 ? 'stock-low' : 'stock-out'}">${p.stock} uds</span></td><td><button class="btn-sm" onclick="openProductModal(${p.id})">Editar</button><button class="btn-sm danger" onclick="deleteProduct(${p.id})">Eliminar</button></td></tr>`).join(''); }
function renderAdminOrders() { document.getElementById('pedidosTbody').innerHTML = (orders.length ? orders : [{ id: '—', cliente: 'Sin pedidos', entrega: '—', ciudad: '—', ci: '—', productos: '—', total: '—', estado: '—' }]).map(o => `<tr><td>${o.id}</td><td>${o.cliente}</td><td style="font-size:0.7rem">${o.entrega || '—'}</td><td>${o.ciudad || '—'}</td><td style="font-size:0.68rem;color:var(--muted)">${o.productos || '—'}</td><td style="color:var(--gold-bright)">${o.total}</td><td><span class="stock-badge ${o.estado === 'Confirmado' ? 'stock-ok' : o.estado === 'Enviado' ? 'stock-low' : 'stock-out'}">${o.estado}</span></td></tr>`).join(''); }

// ══ QUIZ ADMIN ══
function renderQuizAdminEditor() { document.getElementById('quizAdminEditor').innerHTML = quizData.map((q, qi) => `<div class="admin-block"><div class="form-group"><label class="form-label">Pregunta ${qi + 1}</label><input type="text" class="form-input" id="quizQ${qi}" value="${q.question}"></div><label class="form-label" style="margin-bottom:0.45rem;display:block;">Opciones (Texto | Valor)</label>${q.options.map((o, oi) => `<div style="display:grid;grid-template-columns:2fr 1fr;gap:0.45rem;margin-bottom:0.45rem;"><input type="text" class="form-input" id="quizOpt${qi}_${oi}" value="${o.text}" style="font-size:0.75rem;"><input type="text" class="form-input" id="quizOptVal${qi}_${oi}" value="${o.val}" style="font-size:0.75rem;" placeholder="valor"></div>`).join('')}</div>`).join(''); }
function saveQuizFromAdmin() { quizData = quizData.map((q, qi) => ({ question: document.getElementById(`quizQ${qi}`).value, options: q.options.map((_, oi) => ({ text: document.getElementById(`quizOpt${qi}_${oi}`).value, val: document.getElementById(`quizOptVal${qi}_${oi}`).value })) })); showToast('Quiz actualizado ✓'); }

// ══ ABOUT CARDS ══
function renderAboutCardsEditor() { document.getElementById('aboutCardsEditor').innerHTML = aboutCards.map((c, i) => `<div style="display:grid;grid-template-columns:55px 1fr 2fr;gap:0.65rem;margin-bottom:0.65rem;align-items:center;"><input type="text" class="form-input" id="cardIcon${i}" value="${c.icon}" style="text-align:center;font-size:1.15rem;padding:0.5rem;"><input type="text" class="form-input" id="cardTitle${i}" value="${c.title}" placeholder="Título"><input type="text" class="form-input" id="cardText${i}" value="${c.text}" placeholder="Descripción"></div>`).join(''); }
function saveAboutCards() { aboutCards = aboutCards.map((_, i) => ({ icon: document.getElementById(`cardIcon${i}`).value, title: document.getElementById(`cardTitle${i}`).value, text: document.getElementById(`cardText${i}`).value })); renderHomeAboutStrip(); showToast('Tarjetas actualizadas ✓'); }

// ══ SOCIAL ADMIN ══
function loadSocialAdminFields() { document.getElementById('adminInstagram').value = socialLinks.instagram; document.getElementById('adminFacebook').value = socialLinks.facebook; document.getElementById('adminTiktok').value = socialLinks.tiktok; }
function saveSocial(net) {
  const val = document.getElementById('admin' + net.charAt(0).toUpperCase() + net.slice(1)).value.trim();
  socialLinks[net] = val;
  const el = document.getElementById('link' + net.charAt(0).toUpperCase() + net.slice(1));
  if (el && val) el.href = val;
  showToast(`${net} guardado ✓`);
}

// ══ LOCATION ADMIN ══
function loadLocationAdminFields() {
  document.getElementById('adminLocTitle').value = locationData.title;
  document.getElementById('adminLocStreet').value = locationData.street;
  document.getElementById('adminLocHours').value = locationData.hours;
  document.getElementById('adminLocRef').value = locationData.ref;
  document.getElementById('adminLocMap').value = locationData.mapUrl;
}
function saveLocation() {
  locationData.title = document.getElementById('adminLocTitle').value;
  locationData.street = document.getElementById('adminLocStreet').value;
  locationData.hours = document.getElementById('adminLocHours').value;
  locationData.ref = document.getElementById('adminLocRef').value;
  locationData.mapUrl = document.getElementById('adminLocMap').value;
  // update visible fields
  document.getElementById('locationTitle').textContent = locationData.title;
  document.getElementById('locationStreet').textContent = locationData.street;
  document.getElementById('locationHours').textContent = locationData.hours;
  document.getElementById('locationRef').textContent = locationData.ref;
  if (locationData.mapUrl) document.getElementById('locationMapLink').href = locationData.mapUrl;
  document.getElementById('footerAddress').textContent = '◆ ' + locationData.street;
  showToast('Ubicación actualizada ✓');
}
function uploadMapImg(input) {
  const file = input.files[0]; if (!file) return;
  const r = new FileReader();
  r.onload = e => {
    locationData.mapImg = e.target.result;
    document.getElementById('locationMapArea').innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;">`;
    const prev = document.getElementById('mapImgPreviewAdmin'); prev.src = e.target.result; prev.style.display = 'block';
    showToast('Croquis actualizado ✓');
  };
  r.readAsDataURL(file);
}

// ══ PRODUCT MODAL ══
function openProductModal(id = null) {
  editingProductId = id; editingProductImg = null;
  document.getElementById('pImgPreview').style.display = 'none'; document.getElementById('pImgPreview').src = '';
  document.getElementById('pImgUploadLabel').textContent = '↑ Haz clic para subir imagen';
  if (id) { const p = products.find(x => x.id === id); document.getElementById('modalTitle').textContent = 'Editar Producto'; document.getElementById('pName').value = p.name; document.getElementById('pPrice').value = p.price; document.getElementById('pCat').value = p.cat; document.getElementById('pStock').value = p.stock; document.getElementById('pEmoji').value = p.emoji; document.getElementById('pDesc').value = p.desc; document.getElementById('pExtraDesc').value = p.extraDesc || ''; editingProductImg = p.img; if (p.img) { document.getElementById('pImgPreview').src = p.img; document.getElementById('pImgPreview').style.display = 'block'; document.getElementById('pImgUploadLabel').textContent = '✓ Imagen cargada'; } }
  else { document.getElementById('modalTitle').textContent = 'Agregar Producto';['pName', 'pPrice', 'pStock', 'pEmoji', 'pDesc', 'pExtraDesc'].forEach(f => document.getElementById(f).value = ''); document.getElementById('pCat').value = 'todos'; }
  document.getElementById('productModal').classList.add('open');
}
function previewProductImg(input) { const file = input.files[0]; if (!file) return; const r = new FileReader(); r.onload = e => { editingProductImg = e.target.result; document.getElementById('pImgPreview').src = e.target.result; document.getElementById('pImgPreview').style.display = 'block'; document.getElementById('pImgUploadLabel').textContent = '✓ Imagen lista'; }; r.readAsDataURL(file); }
function closeModal() { document.getElementById('productModal').classList.remove('open'); }
function saveProduct() {
  const name = document.getElementById('pName').value, price = +document.getElementById('pPrice').value;
  if (!name || !price) { showToast('Completa nombre y precio'); return; }
  const data = { name, price, cat: document.getElementById('pCat').value, stock: +document.getElementById('pStock').value, emoji: document.getElementById('pEmoji').value || '❀', desc: document.getElementById('pDesc').value, extraDesc: document.getElementById('pExtraDesc').value, img: editingProductImg };
  if (editingProductId) { const p = products.find(x => x.id === editingProductId); Object.assign(p, data); const ci = cart.find(x => x.id === editingProductId); if (ci) Object.assign(ci, data); showToast('Producto actualizado ✓'); }
  else { products.push({ id: Date.now(), ...data, badge: null }); showToast('Producto agregado ✓'); }
  renderAdminProducts(); renderAdminDashboard(); closeModal();
}
function deleteProduct(id) { if (confirm('¿Eliminar este producto?')) { products = products.filter(p => p.id !== id); cart = cart.filter(i => i.id !== id); updateCartCount(); renderAdminProducts(); renderAdminDashboard(); showToast('Producto eliminado'); } }

// ══ CONTENT ══
function uploadQR(input) { const file = input.files[0]; if (!file) return; const r = new FileReader(); r.onload = e => { qrImageSrc = e.target.result; const p = document.getElementById('qrPreviewAdmin'); p.src = e.target.result; p.style.display = 'block'; showToast('QR actualizado ✓'); }; r.readAsDataURL(file); }
function uploadHeroSlide(input, idx) { const file = input.files[0]; if (!file) return; const r = new FileReader(); r.onload = e => { const sl = document.getElementById(`heroSlide${idx}`); if (sl) { sl.innerHTML = ''; const img = document.createElement('img'); img.src = e.target.result; img.style.cssText = 'width:100%;height:100%;object-fit:cover;'; sl.appendChild(img); } const prev = document.getElementById(`heroSlidePreview${idx}`); if (prev) { prev.src = e.target.result; prev.style.display = 'block'; } showToast(`Slide ${idx + 1} actualizado ✓`); initHeroCarousel(); }; r.readAsDataURL(file); }

// ══ HERO SLIDES EDITOR (hasta 5) ══
function renderHeroSlidesEditor() {
  const cont = document.getElementById('heroSlidesEditor'); if (!cont) return;
  while (heroSlides.length < 5) heroSlides.push({ type: 'quote', icon: '✦', text: '', img: null });
  cont.innerHTML = heroSlides.slice(0, 5).map((sl, i) => {
    const isLogo = sl.type === 'logo';
    return `<div style="border:1px solid var(--border);padding:0.7rem;margin-bottom:0.6rem;">
      <p style="font-size:0.58rem;color:var(--gold);margin-bottom:0.5rem;letter-spacing:0.12em;font-weight:600;">SLIDE ${i + 1}${isLogo ? ' (Logo — fijo)' : ''}</p>
      ${isLogo ? '<p style="font-size:0.7rem;color:var(--muted);">Este slide muestra el logo de la marca.</p>' : `
      <div style="display:grid;grid-template-columns:55px 1fr;gap:0.5rem;margin-bottom:0.5rem;">
        <input type="text" class="form-input" id="hsIcon${i}" value="${sl.icon || ''}" style="text-align:center;font-size:1.1rem;">
        <input type="text" class="form-input" id="hsText${i}" value="${(sl.text || '').replace(/"/g, '&quot;')}" placeholder="Frase del slide">
      </div>
      <div style="display:flex;align-items:center;gap:0.7rem;">
        <input type="file" accept="image/*" onchange="uploadHeroSlideData(this,${i})" style="font-size:0.7rem;color:var(--muted);">
        ${sl.img ? `<img src="${sl.img}" style="width:50px;height:50px;object-fit:cover;border:1px solid var(--border);">` : ''}
        ${sl.img ? `<button class="btn-sm" onclick="clearHeroSlideImg(${i})">Quitar imagen</button>` : ''}
      </div>`}
    </div>`;
  }).join('');
}
function uploadHeroSlideData(input, i) { const f = input.files[0]; if (!f) return; const r = new FileReader(); r.onload = e => { heroSlides[i].img = e.target.result; renderHeroSlidesEditor(); }; r.readAsDataURL(f); }
function clearHeroSlideImg(i) { heroSlides[i].img = null; renderHeroSlidesEditor(); }
function saveHeroSlides() {
  heroSlides = heroSlides.slice(0, 5).map((sl, i) => {
    if (sl.type === 'logo') return sl;
    const ic = document.getElementById('hsIcon' + i), tx = document.getElementById('hsText' + i);
    return { type: 'quote', icon: ic ? ic.value : sl.icon, text: tx ? tx.value : sl.text, img: sl.img || null };
  });
  renderHeroCarousel(); showToast('Carrusel de Inicio actualizado ✓');
}

// ══ NOS SLIDES EDITOR (hasta 5) ══
function renderNosSlidesEditor() {
  const cont = document.getElementById('nosSlidesEditor'); if (!cont) return;
  while (nosSlides.length < 5) nosSlides.push({ icon: '✦', quote: '', author: '', img: null });
  cont.innerHTML = nosSlides.slice(0, 5).map((sl, i) => `
    <div style="border:1px solid var(--border);padding:0.7rem;margin-bottom:0.6rem;">
      <p style="font-size:0.58rem;color:var(--gold);margin-bottom:0.5rem;letter-spacing:0.12em;font-weight:600;">SLIDE ${i + 1}</p>
      <div style="display:grid;grid-template-columns:55px 1fr;gap:0.5rem;margin-bottom:0.5rem;">
        <input type="text" class="form-input" id="nsIcon${i}" value="${sl.icon || ''}" style="text-align:center;font-size:1.1rem;">
        <input type="text" class="form-input" id="nsQuote${i}" value="${(sl.quote || '').replace(/"/g, '&quot;')}" placeholder="Frase / cita">
      </div>
      <input type="text" class="form-input" id="nsAuthor${i}" value="${(sl.author || '').replace(/"/g, '&quot;')}" placeholder="Autor / atribución" style="margin-bottom:0.5rem;">
      <div style="display:flex;align-items:center;gap:0.7rem;">
        <input type="file" accept="image/*" onchange="uploadNosSlideImg(this,${i})" style="font-size:0.7rem;color:var(--muted);">
        ${sl.img ? `<img src="${sl.img}" style="width:50px;height:50px;object-fit:cover;border:1px solid var(--border);">` : ''}
        ${sl.img ? `<button class="btn-sm" onclick="clearNosSlideImg(${i})">Quitar imagen</button>` : ''}
      </div>
    </div>`).join('');
}
function uploadNosSlideImg(input, i) { const f = input.files[0]; if (!f) return; const r = new FileReader(); r.onload = e => { nosSlides[i].img = e.target.result; renderNosSlidesEditor(); }; r.readAsDataURL(f); }
function clearNosSlideImg(i) { nosSlides[i].img = null; renderNosSlidesEditor(); }
function saveNosSlides() {
  nosSlides = nosSlides.slice(0, 5).map((sl, i) => ({
    icon: document.getElementById('nsIcon' + i).value,
    quote: document.getElementById('nsQuote' + i).value,
    author: document.getElementById('nsAuthor' + i).value,
    img: sl.img || null
  }));
  renderNosCarousel(); showToast('Carrusel de Nosotros actualizado ✓');
}
function saveWA() { waNumber = document.getElementById('waNumber').value; document.getElementById('footerWA').textContent = '✆ WhatsApp: ' + waNumber; showToast('WhatsApp guardado ✓'); }

// ══ TOAST ══
function showToast(msg) { const t = document.getElementById('toast'); document.getElementById('toastMsg').textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3200); }

// ══ INIT ══
renderProducts();
renderHeroCarousel();
renderHomeAboutStrip();
updateOrderSummary();
