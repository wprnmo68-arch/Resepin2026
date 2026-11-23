// Database Resep Lengkap
const recipesData = [
    {
        id: 1,
        title: "Rendang Daging Sapi Padang",
        category: "Nusantara",
        time: "3 Jam",
        difficulty: "Sulit",
        calories: "468 kkal",
        servings: "6 Porsi",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        description: "Masakan daging sapi kaya rempah khas Minangkabau yang dimasak perlahan dengan santan hingga kering dan meresap sempurna.",
        ingredients: [
            "1 kg daging sapi (potong kotak sesuai selera)",
            "1.5 liter santan kental dari 3 butir kelapa",
            "4 lembar daun jeruk & 2 lembar daun kunyit",
            "2 batang serai, memarkan",
            "12 butir bawang merah & 6 siung bawang putih (haluskan)",
            "100 gr cabai merah keriting (haluskan)",
            "3 cm jahe, 3 cm lengkuas, 1 sdt ketumbar (haluskan)",
            "Garam dan gula merah secukupnya"
        ],
        steps: [
            "Tumis bumbu halus bersama serai, daun jeruk, dan daun kunyit hingga harum dan matang.",
            "Masukkan potongan daging sapi, aduk rata hingga daging berubah warna.",
            "Tuangkan santan perlahan sambil terus diaduk agar santan tidak pecah.",
            "Masak dengan api sedang hingga santan mendidih, lalu kecilkan api.",
            "Aduk sesekali dan masak terus selama 2.5 - 3 jam hingga santan menyusut, mengeluarkan minyak, dan bumbu berwarna cokelat gelap."
        ]
    },
    {
        id: 2,
        title: "Nasi Goreng Kampung Spesial",
        category: "Sarapan",
        time: "20 Menit",
        difficulty: "Mudah",
        calories: "380 kkal",
        servings: "2 Porsi",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        description: "Nasi goreng rumahan dengan aroma terasi bakar, suwiran ayam, dan telur mata sapi yang cocok untuk sarapan cepat.",
        ingredients: [
            "2 piring nasi putih dingin (nasi sisa semalam lebih baik)",
            "2 butir telur ayam",
            "100 gr dada ayam rebus, suwir-suwir",
            "5 siung bawang merah & 3 siung bawang putih (iris/ulek kasar)",
            "3 buah cabai rawit merah",
            "1 sdt terasi bakar",
            "2 sdm kecap manis & 1 sdm saus tiram",
            "Garam, lada, dan daun bawang secukupnya"
        ],
        steps: [
            "Panaskan sedikit minyak, buat telur orak-arik lalu sisihkan di pinggir wajan.",
            "Tumis bawang merah, bawang putih, cabai, dan terasi hingga harum.",
            "Masukkan nasi putih dan suwiran ayam, aduk dengan api besar.",
            "Tambahkan kecap manis, saus tiram, garam, dan lada. Aduk cepat hingga merata dan berasap.",
            "Taburi daun bawang, sajikan hangat dengan kerupuk dan acar."
        ]
    },
    {
        id: 3,
        title: "Spaghetti Carbonara Creamy",
        category: "Makanan Utama",
        time: "25 Menit",
        difficulty: "Sedang",
        calories: "520 kkal",
        servings: "2 Porsi",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
        description: "Pasta klasik Italia dengan saus lembut dari kuning telur, keju parmesan, lada hitam, dan daging asap renyah.",
        ingredients: [
            "200 gr pasta spaghetti",
            "4 lembar smoked beef, potong kotak kecil",
            "2 butir kuning telur + 1 telur utuh",
            "50 gr keju parmesan parut",
            "2 siung bawang putih, geprek",
            "1 sdt lada hitam bubuk kasar",
            "Garam dan 1 sdm olive oil"
        ],
        steps: [
            "Rebus spaghetti dalam air mendidih bergaram hingga al dente (sekitar 8-10 menit). Sisihkan 1/2 gelas air rebusan pasta.",
            "Kocok lepas telur, keju parmesan, dan lada hitam dalam mangkuk.",
            "Tumis bawang putih dan smoked beef dengan olive oil hingga garing, buang bawang putihnya.",
            "Matikan api kompor, masukkan spaghetti ke wajan berisi smoked beef.",
            "Tuang campuran telur dan sedikit air rebusan pasta, aduk cepat hingga saus mengental creamy (jangan di atas api agar telur tidak menggumpal)."
        ]
    },
    {
        id: 4,
        title: "Pancake Madu & Buah Berry",
        category: "Sarapan",
        time: "20 Menit",
        difficulty: "Mudah",
        calories: "310 kkal",
        servings: "3 Porsi",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
        description: "Pancake lembut dan mengembang sempurna dengan siraman madu murni dan potongan stroberi segar.",
        ingredients: [
            "150 gr tepung terigu protein sedang",
            "2 sdm gula pasir",
            "1 sdt baking powder & 1/4 sdt garam",
            "1 butir telur ayam",
            "150 ml susu cair full cream",
            "2 sdm mentega cair",
            "Madu dan buah stroberi/blueberry untuk topping"
        ],
        steps: [
            "Campurkan tepung terigu, gula, baking powder, dan garam dalam wadah.",
            "Di wadah terpisah, kocok telur, susu cair, dan mentega cair.",
            "Tuang adonan basah ke adonan kering, aduk perlahan asal tercampur (jangan overmix).",
            "Panaskan teflon anti lengket dengan api kecil, tuang 1 sendok sayur adonan.",
            "Balik pancake saat permukaan sudah berlubang-lubang kecil. Masak hingga kecokelatan dan sajikan dengan madu."
        ]
    },
    {
        id: 5,
        title: "Klepon Ketan Gula Merah",
        category: "Dessert",
        time: "40 Menit",
        difficulty: "Sedang",
        calories: "240 kkal",
        servings: "15 Buah",
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
        description: "Jajanan tradisional kenyal berbalut kelapa parut gurih dengan ledakan gula merah cair di dalamnya.",
        ingredients: [
            "250 gr tepung ketan putih",
            "50 gr tepung beras",
            "200 ml air hangat + pasta pandan secukupnya",
            "100 gr gula merah, sisir halus",
            "1/2 butir kelapa parut agak muda (kukus dengan sedikit garam)",
            "Air untuk merebus"
        ],
        steps: [
            "Campur tepung ketan dan tepung beras, tuangi air pandan hangat sedikit demi sedikit hingga adonan bisa dipulung.",
            "Ambil sedikit adonan, pipihkan, isi dengan gula merah sisir, lalu bulatkan rapat agar tidak bocor.",
            "Didihkan air dalam panci, masukkan bola-bola klepon.",
            "Tunggu hingga klepon mengapung tanda sudah matang, angkat dan tiriskan.",
            "Gulingkan klepon hangat di atas kelapa parut kukus hingga terbalut rata."
        ]
    },
    {
        id: 6,
        title: "Es Kopi Susu Gula Aren",
        category: "Minuman",
        time: "10 Menit",
        difficulty: "Mudah",
        calories: "190 kkal",
        servings: "1 Gelas",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
        description: "Minuman kopi kekinian perpaduan espresso pekat, susu segar creamy, dan manis legit gula aren.",
        ingredients: [
            "60 ml espresso (atau 2 sdt kopi hitam tanpa ampas seduh air panas)",
            "120 ml susu cair full cream",
            "30 ml sirup gula aren cair",
            "Es batu secukupnya"
        ],
        steps: [
            "Tuangkan sirup gula aren cair ke dasar gelas saji.",
            "Masukkan es batu hingga memenuhi 3/4 bagian gelas.",
            "Tuangkan susu cair full cream secara perlahan.",
            "Terakhir, tuangkan espresso di bagian paling atas untuk menciptakan gradasi cantik. Aduk sebelum diminum."
        ]
    },
    {
        id: 7,
        title: "Soto Ayam Lamongan Kuah Kuning",
        category: "Nusantara",
        time: "1 Jam",
        difficulty: "Sedang",
        calories: "340 kkal",
        servings: "4 Porsi",
        image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=800&q=80",
        description: "Soto ayam berkuah kuning segar dengan taburan bubuk koya gurih, soun, kol, dan telur rebus.",
        ingredients: [
            "500 gr ayam kampung/negeri",
            "2 liter air",
            "8 bawang merah, 4 bawang putih, 3 cm kunyit bakar, 2 cm jahe, 3 kemiri (haluskan)",
            "2 batang serai, 3 lembar daun jeruk, 2 lembar daun salam",
            "Pelengkap: Soun seduh, irisan kol, telur rebus, seledri, jeruk nipis",
            "Koya: 4 kerupuk udang + 2 sdm bawang putih goreng (haluskan)"
        ],
        steps: [
            "Rebus ayam hingga empuk, angkat ayam lalu goreng sebentar dan suwir-suwir.",
            "Tumis bumbu halus bersama serai, daun jeruk, dan daun salam hingga harum.",
            "Masukkan tumisan bumbu ke dalam air kaldu rebusan ayam, bumbui garam, gula, dan kaldu bubuk.",
            "Tata soun, kol, suwiran ayam, dan telur di mangkuk. Siram kuah panas dan taburi bubuk koya."
        ]
    },
    {
        id: 8,
        title: "Brownies Panggang Shiny Crust",
        category: "Dessert",
        time: "50 Menit",
        difficulty: "Sedang",
        calories: "410 kkal",
        servings: "8 Potong",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
        description: "Fudgy brownies cokelat pekat dengan lapisan atas mengilap dan renyah (shiny crust).",
        ingredients: [
            "150 gr dark cooking chocolate (DCC)",
            "50 gr mentega & 40 ml minyak goreng",
            "2 butir telur",
            "130 gr gula pasir halus (blender gula pasir biasa)",
            "100 gr tepung terigu protein sedang",
            "35 gr cokelat bubuk",
            "Chocochips atau almond slice untuk topping"
        ],
        steps: [
            "Lelehkan DCC, mentega, dan minyak dengan cara ditim, sisihkan hingga hangat.",
            "Kocok telur dan gula halus menggunakan whisk hingga gula benar-benar larut (kunci shiny crust).",
            "Masukkan lelehan cokelat, aduk rata. Ayak tepung terigu dan cokelat bubuk, aduk lipat dengan spatula.",
            "Tuang ke loyang berlapiskan baking paper, beri topping, panggang suhu 170°C selama 30-35 menit."
        ]
    }
];

// State Aplikasi
let currentCategory = "Semua";
let searchQuery = "";
let showOnlyFavorites = false;
let currentUser = JSON.parse(localStorage.getItem("resepin_currentUser")) || null;
let favorites = JSON.parse(localStorage.getItem("resepin_favorites")) || [];

// Selektor DOM
const recipeGrid = document.getElementById("recipe-grid");
const emptyState = document.getElementById("empty-state");
const recipeCount = document.getElementById("recipe-count");
const sectionTitle = document.getElementById("section-title");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const categoryBtns = document.querySelectorAll(".cat-btn");
const favFilterBtn = document.getElementById("fav-filter-btn");
const favCountBadge = document.getElementById("fav-count");
const themeToggleBtn = document.getElementById("theme-toggle");

// Selektor Modal Resep
const recipeModal = document.getElementById("recipe-modal");
const closeRecipeModalBtn = document.getElementById("close-recipe-modal");
const modalRecipeContent = document.getElementById("modal-recipe-content");

// Selektor Auth
const authArea = document.getElementById("auth-area");
const authModal = document.getElementById("auth-modal");
const closeAuthModalBtn = document.getElementById("close-auth-modal");
const authTabs = document.querySelectorAll(".auth-tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// ================= INISIALISASI =================
function init() {
    loadTheme();
    updateAuthUI();
    updateFavBadge();
    renderRecipes();
}

// ================= TEMA GELAP / TERANG =================
function loadTheme() {
    const savedTheme = localStorage.getItem("resepin_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("resepin_theme", newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggleBtn.innerHTML = theme === "dark" 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

// ================= RENDER RESEP & FILTER =================
function renderRecipes() {
    const filtered = recipesData.filter(recipe => {
        const matchesCat = currentCategory === "Semua" || recipe.category === currentCategory;
        const matchesFav = !showOnlyFavorites || favorites.includes(recipe.id);
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
            recipe.title.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(query));

        return matchesCat && matchesFav && matchesSearch;
    });

    recipeCount.textContent = `Menampilkan ${filtered.length} resep`;
    
    if (showOnlyFavorites) {
        sectionTitle.textContent = "Resep Favorit Tersimpan";
    } else {
        sectionTitle.textContent = currentCategory === "Semua" ? "Semua Resep Pilihan" : `Kategori: ${currentCategory}`;
    }

    if (filtered.length === 0) {
        recipeGrid.innerHTML = "";
        emptyState.classList.remove("hidden");
        return;
    }

    emptyState.classList.add("hidden");
    recipeGrid.innerHTML = filtered.map(recipe => {
        const isFav = favorites.includes(recipe.id);
        return `
            <div class="recipe-card">
                <div class="card-img-wrap">
                    <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                    <span class="card-category">${recipe.category}</span>
                    <button class="card-fav-btn ${isFav ? 'loved' : ''}" onclick="toggleFavorite(${recipe.id})" title="Simpan ke Favorit">
                        <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${recipe.title}</h3>
                    <p class="card-desc">${recipe.description}</p>
                    <div class="card-meta">
                        <span><i class="far fa-clock"></i> ${recipe.time}</span>
                        <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                        <span><i class="fas fa-fire"></i> ${recipe.calories}</span>
                    </div>
                    <button class="btn-detail" onclick="openRecipeDetail(${recipe.id})">Lihat Resep Lengkap</button>
                </div>
            </div>
        `;
    }).join("");
}

// Event Pencarian
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    clearSearchBtn.classList.toggle("hidden", searchQuery === "");
    renderRecipes();
});

clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.classList.add("hidden");
    renderRecipes();
});

// Event Filter Kategori
categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        showOnlyFavorites = false;
        favFilterBtn.classList.remove("active-fav");
        renderRecipes();
    });
});

// ================= FITUR FAVORIT =================
function toggleFavorite(id) {
    if (!currentUser) {
        showToast("Silakan masuk/daftar akun untuk menyimpan resep favorit!");
        openAuthModal();
        return;
    }

    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        showToast("Dihapus dari daftar favorit");
    } else {
        favorites.push(id);
        showToast("Berhasil disimpan ke favorit!");
    }

    localStorage.setItem("resepin_favorites", JSON.stringify(favorites));
    updateFavBadge();
    renderRecipes();
}

function updateFavBadge() {
    favCountBadge.textContent = favorites.length;
}

favFilterBtn.addEventListener("click", () => {
    showOnlyFavorites = !showOnlyFavorites;
    favFilterBtn.classList.toggle("active-fav", showOnlyFavorites);
    renderRecipes();
});

// ================= DETAIL MODAL RESEP =================
function openRecipeDetail(id) {
    const recipe = recipesData.find(r => r.id === id);
    if (!recipe) return;

    modalRecipeContent.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="detail-hero">
        <div class="detail-body">
            <span class="card-category" style="position:static; display:inline-block; margin-bottom:10px;">${recipe.category}</span>
            <h2>${recipe.title}</h2>
            <p style="color:var(--text-muted); margin-top:6px;">${recipe.description}</p>
            
            <div class="detail-badges">
                <div class="detail-badge"><i class="far fa-clock"></i> Waktu: ${recipe.time}</div>
                <div class="detail-badge"><i class="fas fa-signal"></i> Tingkat: ${recipe.difficulty}</div>
                <div class="detail-badge"><i class="fas fa-utensils"></i> Porsi: ${recipe.servings}</div>
                <div class="detail-badge"><i class="fas fa-fire"></i> Kalori: ${recipe.calories}</div>
            </div>

            <div class="detail-grid">
                <div class="detail-section">
                    <h3><i class="fas fa-basket-shopping"></i> Bahan-bahan</h3>
                    <ul class="ingredient-list">
                        ${recipe.ingredients.map(item => `
                            <li><input type="checkbox"> <span>${item}</span></li>
                        `).join("")}
                    </ul>
                </div>

                <div class="detail-section">
                    <h3><i class="fas fa-list-ol"></i> Cara Membuat</h3>
                    <ol class="step-list">
                        ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
                    </ol>
                </div>
            </div>
        </div>
    `;

    recipeModal.classList.remove("hidden");
}

closeRecipeModalBtn.addEventListener("click", () => recipeModal.classList.add("hidden"));
recipeModal.querySelector(".modal-overlay").addEventListener("click", () => recipeModal.classList.add("hidden"));

// ================= SISTEM LOGIN & DAFTAR AKUN =================
function openAuthModal() {
    authModal.classList.remove("hidden");
}

closeAuthModalBtn.addEventListener("click", () => authModal.classList.add("hidden"));
authModal.querySelector(".modal-overlay").addEventListener("click", () => authModal.classList.add("hidden"));

// Ganti Tab Login / Register
authTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        authTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        if (tab.dataset.tab === "login") {
            loginForm.classList.remove("hidden");
            registerForm.classList.add("hidden");
        } else {
            loginForm.classList.add("hidden");
            registerForm.classList.remove("hidden");
        }
    });
});

// Proses Daftar Akun
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value;
    const regError = document.getElementById("reg-error");

    const users = JSON.parse(localStorage.getItem("resepin_users")) || [];

    if (users.some(u => u.email === email)) {
        regError.textContent = "Email sudah terdaftar. Silakan masuk.";
        regError.classList.remove("hidden");
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("resepin_users", JSON.stringify(users));

    // Otomatis login setelah daftar
    currentUser = { name, email };
    localStorage.setItem("resepin_currentUser", JSON.stringify(currentUser));
    
    regError.classList.add("hidden");
    registerForm.reset();
    authModal.classList.add("hidden");
    updateAuthUI();
    showToast(`Selamat datang di Resepin, ${name}!`);
});

// Proses Login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    const loginError = document.getElementById("login-error");

    const users = JSON.parse(localStorage.getItem("resepin_users")) || [];
    const validUser = users.find(u => u.email === email && u.password === password);

    if (!validUser) {
        loginError.textContent = "Email atau kata sandi salah!";
        loginError.classList.remove("hidden");
        return;
    }

    currentUser = { name: validUser.name, email: validUser.email };
    localStorage.setItem("resepin_currentUser", JSON.stringify(currentUser));

    loginError.classList.add("hidden");
    loginForm.reset();
    authModal.classList.add("hidden");
    updateAuthUI();
    showToast(`Halo kembali, ${validUser.name}!`);
});

// Update Tampilan Navbar Saat Login/Logout
function updateAuthUI() {
    if (currentUser) {
        authArea.innerHTML = `
            <div class="user-profile">
                <i class="fas fa-user-circle" style="color:var(--primary); font-size:1.2rem;"></i>
                <span>${currentUser.name}</span>
                <button class="btn-logout" onclick="logoutUser()" title="Keluar"><i class="fas fa-sign-out-alt"></i></button>
            </div>
        `;
    } else {
        authArea.innerHTML = `<button id="open-auth-btn" class="btn-primary" onclick="openAuthModal()">Masuk / Daftar</button>`;
    }
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem("resepin_currentUser");
    showOnlyFavorites = false;
    favFilterBtn.classList.remove("active-fav");
    updateAuthUI();
    renderRecipes();
    showToast("Anda telah keluar dari akun.");
}

// ================= NOTIFIKASI TOAST =================
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

// Jalankan Aplikasi
init();
