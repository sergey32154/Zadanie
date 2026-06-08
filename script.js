// --- ДАННЫЕ ТОВАРОВ  ---
const products = [
  {"id":"engine-belt","name":"Ремень ГРМ","sku":"VW-PASSAT-B8","price":4599,"stock":true,"category":"Двигатель","brand":"Volkswagen","autoType":"Легковой","subgroup":"Ремни","description":"Ремень ГРМ для Passat B8.","reviews":[{"user":"Иван","text":"Отличное качество.","rating":5}],"image":"https://avatars.mds.yandex.net/get-mpic/11378054/2a0000019b0df993fd0f6667d311695b3e09/450x600"},
  {"id":"brake-pads","name":"Тормозные колодки","sku":"TOYOTA-CAMRY-V5","price":3299,"stock":true,"category":"Тормозная система","brand":"Toyota","autoType":"Легковой","subgroup":"Тормозные системы","description":"Колодки для Toyota Camry.","reviews":[{"user":"Петр","text":"Хорошие тормоза.","rating":4}],"image":"https://ir.ozone.ru/s3/multimedia-h/c500/6716874437.jpg"},
  {"id":"oil-filter","name":"Масляный фильтр","sku":"MAHLE-OC235","price":799,"stock":false,"category":"Двигатель","brand":"Mahle","autoType":"Легковой","subgroup":"Фильтры","description":"Масляный фильтр Mahle.","reviews":[],"image":"https://img-server-10.parts-soft.ru/images/199/12364893"},
  {"id":"wiper-blades","name":"Щетки стеклоочистителя","sku":"BOSCH-AEROTWIN","price":1899,"stock":true,"category":"Кузов и оптика","brand":"Bosch","autoType":"Легковой","subgroup":"Щетки","description":"Щетки стеклоочистителя Bosch.","reviews":[{"user":"Алина","text":"Мягкие и тихие.","rating":4}],"image":"http://stockzap.ru/content/files/images/products_images/shhetka-stekloochistitelya-650mm-3397008539-ar26u_1582128736.jpg"},
  {"id":"spark-plugs","name":"Свечи зажигания","sku":"NGK-IKH16","price":2499,"stock":true,"category":"Двигатель","brand":"NGK","autoType":"Легковой","subgroup":"Свечи","description":"Свечи NGK.","reviews":[{"user":"Сергей","text":"Работают отлично.","rating":5}],"image":"https://main-cdn.sbermegamarket.ru/big2/hlr-system/-20/620/563/784/261/633/100066534041b2.webp"},
  {"id":"air-filter","name":"Воздушный фильтр","sku":"MANN-FILTER-C2528","price":1199,"stock":true,"category":"Двигатель","brand":"Mann Filter","autoType":"Легковой","subgroup":"Фильтры","description":"Воздушный фильтр Mann.","reviews":[],"image":"https://www.sokoleso.ru/content/images/avtotovari/goods/image_18909_big.jpg"},
  {"id":"headlight-lamp-h7","name":"Лампа H7","sku":"OSRAM-NIGHT-BREAKER-LASER-H7","price":1699,"stock":true,"category":"Кузов и оптика","brand":"Osram","autoType":"Легковой","subgroup":"Лампы","description":"Лампа H7 OSRAM.","reviews":[{"user":"Елена","text":"Яркая и долговечная.","rating":4}],"image":"https://koleso.ru/themes/tireshop2/images/product/cache/800_800/86912745716_2077687.jpg"},
  // --- Внедорожники ---
  {"id":"shock-absorber-front-l","name":"Амортизатор передний левый","sku":"KYB-339759","price":3899,"stock":true,"category":"Подвеска","brand":"KYB","autoType":"Внедорожник","subgroup":"Амортизаторы","description":"Амортизатор KYB.","reviews":[{"user":"Игорь","text":"Хорошо держит дорогу.","rating":4}],"image":"https://ir.ozone.ru/s3/multimedia-1-z/c600/8352345743.jpg"},
  {"id":"shock-absorber-front-r","name":"Амортизатор передний правый","sku":"KYB-339769","price":3899,"stock":true,"category":"Подвеска","brand":"KYB","autoType":"Внедорожник","subgroup":"Амортизаторы","description":"Амортизатор KYB.","reviews":[{"user":"Игорь","text":"Отлично работает.","rating":5}],"image":"https://avatars.mds.yandex.net/get-mpic/12569700/2a0000018faaedd0f480aa01fe21f4fb2dc2/9hq"},
  // --- Грузовые ---
  {"id":"battery-varta-blue-dynamic","name":"Аккумулятор Varta","sku":"VARTA-C43-6CT-66Ah","price":7999,"stock":true,"category":"Электрика","brand":"Varta","autoType":"Грузовой","subgroup":"Аккумуляторы","description":"Аккумулятор Varta.","reviews":[{"user":"Михаил","text":"Долго держит заряд.","rating":5}],"image":"https://avtotemir-cdn.fra1.digitaloceanspaces.com/93389/conversions/89b803fb66805351b66f3d622678a1c0-default-lg.jpg"},
  {"id":"radiator-hose-set","name":"Комплект патрубков радиатора","sku":"GATES-RH218KIT","price":2999,"stock":true,"category":"Система охлаждения","brand":"Gates","autoType":"Грузовой","subgroup":"Патрубки","description":"Комплект радиаторных патрубков.","reviews":[],"image":"https://img.tachka.ru/m3xGw0lUj_G7K7RNDlpQWfHvbfI=/trim:top-left:50/fit-in/640x800/brand/pramo/pramo-KP0118-SFBJ9i2.jpeg"},
  {"id":"clutch-kit-luk","name":"Комплект сцепления Luk","sku":"LUK-6223766","price":8999,"stock":true,"category":"Трансмиссия","brand":"Luk","autoType":"Грузовой","subgroup":"Сцепление","description":"Сцепление Luk.","reviews":[{"user":"Андрей","text":"Очень надежное.","rating":5}],"image":"https://gabarit23.ru/thumb/2/9Gkd9GhE4CBQHW2mQAD_uQ/750r750/d/p0055939.jpg"},
  // --- Специальные ---
  {"id":"cabin-air-filter","name":"Салонный фильтр угольный","sku":"MANN-FILTER-CUK","price":699,"stock":true,"category":"Кузов и оптика","brand":"Mann Filter","autoType":"Легковой","subgroup":"Фильтры","description":"Салонный фильтр с угольным фильтром.","reviews":[],"image":"https://vb22.ru/img/products/67528/screenshot-20.jpg"},
  {"id":"fuel-pump-electric","name":"Топливный насос электрический","sku":"BOSCH-FP-ECO","price":4899,"stock":true,"category":"Топливная система","brand":"Bosch","autoType":"Легковой","subgroup":"Топливная система","description":"Электрический топливный насос.","reviews":[{"user":"Ирина","text":"Работает стабильно.","rating":4}],"image":"https://img.autocompas.ru/_big/95/14849915.webp"},
  {"id":"alternator-belt","name":"Ремень генератора","sku":"CONTITECH-6PKX","price":899,"stock":true,"category":"Двигатель","brand":"Contitech","autoType":"Легковой","subgroup":"Ремни","description":"Ремень генератора.","reviews":[],"image":"https://ir.ozone.ru/s3/multimedia-y/c600/6062467054.jpg"},
  {"id":"control-arm-rear-left","name":"Рычаг задний левый","sku":"FEBEST-ARM-LR","price":2799,"stock":true,"category":"Подвеска","brand":"Febest","autoType":"Легковой","subgroup":"Рычаги","description":"Задний левый рычаг.","reviews":[{"user":"Алексей","text":"Удобная установка.","rating":4}],"image":"https://photos.autorus.ru/upload/2c/40/ac/2c40acb5-ae1e-4e09-86d6-694e2ba50ef3.jpeg"},
  {"id":"starter-motor-remanufactured","name":"Стартер (восстановленный)","sku":"VALEO-SR-ECO","price":6999,"stock":true,"category":"Электрика","brand":"Valeo","autoType":"Легковой","subgroup":"Стартеры","description":"Восстановленный стартер.","reviews":[{"user":"Михаил","text":"Работает как новый.","rating":5}],"image":"https://ir.ozone.ru/s3/multimedia-z/6488770919.jpg"}
];

// --- Остальной JS-код, который отвечает за фильтры, отображение карточек, модальное окно и сортировки ---

const catalog = document.getElementById('catalog-grid');
const noProductsMsg = document.getElementById('no-products');
const priceRange = document.getElementById('price-range');
const priceNum = document.getElementById('price-num');
const searchInput = document.getElementById('search');
const brandFilter = document.getElementById('brand-filter');
const categoryFilter = document.getElementById('category-filter');
const autoTypeFilter = document.getElementById('auto-type-filter');
const viewBtn = document.getElementById('view-toggle');
const sortButtons = document.querySelectorAll('.btn-sort');

let currentView = 'grid';
let filteredProducts = [...products];

const overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.style.position = 'fixed';
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
overlay.style.zIndex = 1400;
overlay.style.display = 'none';
document.body.appendChild(overlay);

const productDetail = document.getElementById('product-detail');
const closeDetailBtn = document.getElementById('close-detail');

function renderProducts() {
  catalog.innerHTML = '';
  if (filteredProducts.length === 0) {
    noProductsMsg.style.display = 'block';
    return;
  } else {
    noProductsMsg.style.display = 'none';
  }
  filteredProducts.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.id = p.id;
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="product-card-content">
        <h4>${p.name}</h4>
        <p><strong>Артикул:</strong> ${p.sku}</p>
        <p><strong>Цена:</strong> ${p.price.toLocaleString('ru-RU')} ₽</p>
        <p><strong>В наличии:</strong> ${p.stock ? 'Да' : 'Нет'}</p>
        <button onclick="openDetail('${p.id}')">Посмотреть детали</button>
      </div>
    `;
    catalog.appendChild(card);
  });
  applyViewMode();
}

function applyViewMode() {
  if (currentView === 'list') {
    document.querySelector('.catalog').classList.add('view-list');
    viewBtn.innerHTML = `<i class='bx bx-grid'></i> Переключить на плитку`;
  } else {
    document.querySelector('.catalog').classList.remove('view-list');
    viewBtn.innerHTML = `<i class='bx bx-list'></i> Переключить на фото`;
  }
}

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const maxPrice = parseInt(priceRange.value);
  const selectedBrand = brandFilter.value.toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();
  const selectedAutoType = autoTypeFilter.value.toLowerCase();

  filteredProducts = products.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(searchTerm) || p.sku.toLowerCase().includes(searchTerm);
    const priceMatch = p.price <= maxPrice;
    const brandMatch = !selectedBrand || p.brand.toLowerCase() === selectedBrand;
    const categoryMatch = !selectedCategory || p.category.toLowerCase() === selectedCategory;
    const autoTypeMatch = !selectedAutoType || p.autoType.toLowerCase() === selectedAutoType;
    return nameMatch && priceMatch && brandMatch && categoryMatch && autoTypeMatch;
  });
  renderProducts();
}

function updateSubgroups() {
  // Убрали фильтр подгрупп
}

categoryFilter.addEventListener('change', () => {
  // updateSubgroups(); // убрано
  applyFilters();
});
autoTypeFilter.addEventListener('change', () => {
  applyFilters();
});
brandFilter.addEventListener('change', () => {
  applyFilters();
});
searchInput.addEventListener('input', () => {
  applyFilters();
});
priceRange.addEventListener('input', () => {
  priceNum.textContent = parseInt(priceRange.value).toLocaleString('ru-RU');
  applyFilters();
});
document.getElementById('clear-filters').addEventListener('click', () => {
  searchInput.value = '';
  brandFilter.value = '';
  categoryFilter.value = '';
  autoTypeFilter.value = '';
  priceRange.value = priceRange.max;
  priceNum.textContent = parseInt(priceRange.max).toLocaleString('ru-RU');
  applyFilters();
});
viewBtn.addEventListener('click', () => {
  currentView = currentView === 'grid' ? 'list' : 'grid';
  applyViewMode();
});
sortButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    sortButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const id = btn.id;
    if (id === 'sort-alpha') {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (id === 'sort-rating') {
      filteredProducts.sort((a, b) => {
        const ra = a.reviews.length ? a.reviews.reduce((s, r) => s + r.rating, 0) / a.reviews.length : 0;
        const rb = b.reviews.length ? b.reviews.reduce((s, r) => s + r.rating, 0) / b.reviews.length : 0;
        return rb - ra;
      });
    } else if (id === 'sort-price-asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (id === 'sort-price-desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
    renderProducts();
  });
});

function openDetail(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  document.getElementById('detail-image').src = p.image;
  document.getElementById('detail-name').textContent = p.name;
  document.getElementById('detail-sku').textContent = p.sku;
  document.getElementById('detail-price').textContent = `${p.price.toLocaleString('ru-RU')} ₽`;
  document.getElementById('detail-stock').textContent = p.stock ? 'В наличии' : 'Нет в наличии';
  document.getElementById('detail-compatibility').textContent = p.compatibility || 'Не указана';
  document.getElementById('detail-description').textContent = p.description || 'Описание отсутствует.';
  const avgRating = p.reviews.length ? p.reviews.reduce((s, r) => s + r.rating, 0) / p.reviews.length : 0;
  document.getElementById('detail-rating').textContent = avgRating.toFixed(1);
  const reviewsDiv = document.getElementById('detail-reviews');
  reviewsDiv.innerHTML = '';
  if (p.reviews && p.reviews.length > 0) {
    p.reviews.forEach(r => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${r.user}:</strong> ${r.text} (Оценка ${r.rating}/5)`;
      div.style.marginBottom = '1rem';
      div.style.borderLeft = '3px solid var(--color-primary)';
      div.style.paddingLeft = '1rem';
      reviewsDiv.appendChild(div);
    });
  } else {
    reviewsDiv.innerHTML = '<em style="color:#ccc;">Отзывов пока нет.</em>';
  }
  document.getElementById('product-detail').classList.add('active');
  document.getElementById('overlay').style.display = 'block';
}
document.getElementById('close-detail').addEventListener('click', () => {
  document.getElementById('product-detail').classList.remove('active');
  document.getElementById('overlay').style.display = 'none';
});
document.getElementById('overlay').addEventListener('click', () => {
  document.getElementById('product-detail').classList.remove('active');
  document.getElementById('overlay').style.display = 'none';
});

// Инициализация
window.onload = () => {
  priceNum.textContent = parseInt(priceRange.max).toLocaleString('ru-RU');
  applyFilters();
  // updateSubgroups(); // убрано
  applyViewMode();
};