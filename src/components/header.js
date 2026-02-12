const Header = () => {
    let header = document.querySelector('header');
    if (!header) {
        header = document.createElement('header');
        document.body.insertBefore(header, document.body.firstChild);
    }
    header.innerHTML = `
    <header class="fixed top-5 left-0 w-full z-50 pointer-events-none px-4">
        <div class="max-w-5xl mx-auto">
            <!-- Desktop Header - Single Pill -->
            <nav class="hidden md:flex nav-pill bg-white/90 backdrop-blur-xl rounded-full shadow-lg px-4 py-2 items-center justify-between pointer-events-auto border border-gray-100/50">
                
                <!-- Logo - Left -->
                <div class="logo-container flex items-center">
                    <a href="/" class="text-2xl font-bold text-cyaan transition-colors duration-200">
                        <span class="logo-text">LOGO</span>
                    </a>
                </div>

                <!-- Menu Items - Center -->
                <ul class="flex items-center space-x-1">
                    <li class="nav-item" style="--item-index: 0;">
                        <a href="/" class="nav-link px-4 py-2 rounded-full text-gray-600 font-medium hover:bg-cyaan/10 hover:text-cyaan transition-all duration-200">Home</a>
                    </li>
                    <li class="nav-item" style="--item-index: 1;">
                        <a href="/Nieuws" class="nav-link px-4 py-2 rounded-full text-gray-600 font-medium hover:bg-cyaan/10 hover:text-cyaan transition-all duration-200">Nieuws</a>
                    </li>
                    <li class="nav-item" style="--item-index: 2;">
                        <a href="/Activiteiten" class="nav-link px-4 py-2 rounded-full text-gray-600 font-medium hover:bg-cyaan/10 hover:text-cyaan transition-all duration-200">Activiteiten</a>
                    </li>
                    <li class="nav-item" style="--item-index: 3;">
                        <a href="/Bestuur" class="nav-link px-4 py-2 rounded-full text-gray-600 font-medium hover:bg-cyaan/10 hover:text-cyaan transition-all duration-200">Bestuur</a>
                    </li>
                    <li class="nav-item" style="--item-index: 4;">
                        <a href="/OverOns" class="nav-link px-4 py-2 rounded-full text-gray-600 font-medium hover:bg-cyaan/10 hover:text-cyaan transition-all duration-200">Over ons</a>
                    </li>
                </ul>

                <!-- Search - Right (Expandable) -->
                <div class="search-container flex items-center">
                    <div id="search-wrapper" class="flex items-center overflow-hidden transition-all duration-300 ease-out" style="width: 40px;">
                        <input 
                            type="text" 
                            id="global-search" 
                            placeholder="Zoeken..." 
                            class="search-input w-0 opacity-0 px-0 py-2 text-sm text-gray-700 bg-transparent border-none outline-none transition-all duration-300"
                        >
                        <button id="search-toggle" class="search-btn p-2 rounded-full text-gray-500 hover:text-cyaan transition-colors duration-200 flex-shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <!-- Mobile Header - Single Pill -->
            <nav class="md:hidden nav-pill bg-white/90 backdrop-blur-xl rounded-full shadow-lg px-4 py-2 flex justify-between items-center pointer-events-auto border border-gray-100/50">
                
                <!-- Logo -->
                <div class="logo-container flex items-center">
                    <a href="/" class="text-2xl font-bold text-cyaan transition-colors duration-200">
                        <span class="logo-text">LOGO</span>
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="flex flex-col space-y-1.5 p-2 focus:outline-none group">
                    <span class="block w-6 h-0.5 bg-gray-800 transition-all duration-200 group-hover:bg-cyaan hamburger-line-1"></span>
                    <span class="block w-6 h-0.5 bg-gray-800 transition-all duration-200 group-hover:bg-cyaan hamburger-line-2"></span>
                    <span class="block w-6 h-0.5 bg-gray-800 transition-all duration-200 group-hover:bg-cyaan hamburger-line-3"></span>
                </button>
            </nav>

            <!-- Mobile Navigation -->
            <div id="mobile-nav" class="mobile-nav hidden pointer-events-auto mt-4 mx-auto w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 md:hidden">
                <!-- Mobile Search -->
                <div class="p-4 border-b border-gray-100">
                    <div class="relative">
                        <input type="text" id="mobile-search" placeholder="Zoeken..." class="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyaan/50 text-sm">
                        <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
                <a href="/" class="mobile-nav-item block px-6 py-3 border-b border-gray-100 hover:bg-cyaan/5 hover:text-cyaan text-center transition-all duration-200" style="--mobile-index: 0;">Home</a>
                <a href="/Nieuws" class="mobile-nav-item block px-6 py-3 border-b border-gray-100 hover:bg-cyaan/5 hover:text-cyaan text-center transition-all duration-200" style="--mobile-index: 1;">Nieuws</a>
                <a href="/Activiteiten" class="mobile-nav-item block px-6 py-3 border-b border-gray-100 hover:bg-cyaan/5 hover:text-cyaan text-center transition-all duration-200" style="--mobile-index: 2;">Activiteiten</a>
                <a href="/Bestuur" class="mobile-nav-item block px-6 py-3 border-b border-gray-100 hover:bg-cyaan/5 hover:text-cyaan text-center transition-all duration-200" style="--mobile-index: 3;">Bestuur</a>
                <a href="/OverOns" class="mobile-nav-item block px-6 py-3 border-b border-gray-100 hover:bg-cyaan/5 hover:text-cyaan text-center transition-all duration-200" style="--mobile-index: 4;">Over Ons</a>
                <a href="/Contact" class="mobile-nav-item block px-6 py-3 hover:bg-cyaan/5 hover:text-cyaan text-center transition-all duration-200" style="--mobile-index: 5;">Contact</a>
            </div>
        </div>
    </header>
    `;

    // Initialize header interactions
    setTimeout(() => {
        initHeaderInteractions();
    }, 0);
};

const initHeaderInteractions = () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const searchToggle = document.getElementById('search-toggle');
    const searchWrapper = document.getElementById('search-wrapper');
    const searchInput = document.getElementById('global-search');
    let searchOpen = false;

    // Mobile menu toggle with animation
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const isOpen = !mobileNav.classList.contains('hidden');
            
            if (isOpen) {
                // Close animation
                mobileNav.style.opacity = '0';
                mobileNav.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    mobileNav.classList.add('hidden');
                }, 200);
            } else {
                // Open animation
                mobileNav.classList.remove('hidden');
                mobileNav.style.opacity = '0';
                mobileNav.style.transform = 'translateY(-10px)';
                requestAnimationFrame(() => {
                    mobileNav.style.transition = 'all 0.2s ease-out';
                    mobileNav.style.opacity = '1';
                    mobileNav.style.transform = 'translateY(0)';
                });
                
                // Animate menu items
                const items = mobileNav.querySelectorAll('.mobile-nav-item');
                items.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-10px)';
                    setTimeout(() => {
                        item.style.transition = 'all 0.2s ease-out';
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, 30 + (index * 30));
                });
            }
            
            // Animate hamburger to X
            const lines = menuBtn.querySelectorAll('span');
            if (!isOpen) {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    }

    // Search expansion functionality
    const expandSearch = () => {
        if (!searchWrapper || !searchInput) return;
        searchOpen = true;
        searchWrapper.style.width = '200px';
        searchWrapper.style.backgroundColor = 'rgba(10, 112, 94, 0.1)';
        searchWrapper.style.borderRadius = '9999px';
        searchWrapper.style.paddingLeft = '12px';
        searchInput.style.width = '150px';
        searchInput.style.opacity = '1';
        setTimeout(() => searchInput.focus(), 100);
    };

    const collapseSearch = () => {
        if (!searchWrapper || !searchInput) return;
        searchOpen = false;
        searchInput.blur();
        searchInput.value = '';
        searchWrapper.style.width = '40px';
        searchWrapper.style.backgroundColor = 'transparent';
        searchWrapper.style.paddingLeft = '0';
        searchInput.style.width = '0';
        searchInput.style.opacity = '0';
    };

    if (searchToggle && searchWrapper) {
        searchToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (searchOpen) {
                collapseSearch();
            } else {
                expandSearch();
            }
        });
    }

    // Close search on click outside
    document.addEventListener('click', (e) => {
        if (searchOpen && searchWrapper && !searchWrapper.contains(e.target)) {
            collapseSearch();
        }
    });

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                collapseSearch();
            }
            if (e.key === 'Enter') {
                const query = searchInput.value.trim().toLowerCase();
                if (query) {
                    // Check for page matches
                    const pages = {
                        'home': '#/',
                        'nieuws': '#/Nieuws',
                        'news': '#/Nieuws',
                        'activiteiten': '#/Activiteiten',
                        'activities': '#/Activiteiten',
                        'bestuur': '#/Bestuur',
                        'board': '#/Bestuur',
                        'over ons': '#/OverOns',
                        'about': '#/OverOns',
                        'contact': '#/OverOns',
                        // OverOns contact keywords
                        'email': '#/OverOns',
                        'e-mail': '#/OverOns',
                        'mail': '#/OverOns',
                        'adres': '#/OverOns',
                        'address': '#/OverOns',
                        'locatie': '#/OverOns',
                        'location': '#/OverOns',
                        'telefoon': '#/OverOns',
                        'phone': '#/OverOns',
                        'telefoonnummer': '#/OverOns',
                        'bellen': '#/OverOns',
                        'contactgegevens': '#/OverOns',
                        'schrijvershoekstraat': '#/OverOns'
                    };
                    
                    // Check for exact page match
                    if (pages[query]) {
                        window.location.hash = pages[query];
                    } else {
                        // Check for partial matches on contact info
                        const contactKeywords = ['email', 'mail', 'adres', 'telefoon', 'phone', 'contact', 'locatie'];
                        const isContactSearch = contactKeywords.some(keyword => query.includes(keyword));
                        
                        if (isContactSearch) {
                            window.location.hash = '#/OverOns';
                        } else {
                            // Navigate to Nieuws page with search query
                            window.location.hash = '#/Nieuws';
                            // Store search query for Nieuws page to pick up
                            sessionStorage.setItem('globalSearchQuery', query);
                        }
                    }
                    collapseSearch();
                }
            }
        });
    }

    // Mobile search functionality
    const mobileSearchInput = document.getElementById('mobile-search');
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = mobileSearchInput.value.trim().toLowerCase();
                if (query) {
                    const pages = {
                        'home': '#/',
                        'nieuws': '#/Nieuws',
                        'activiteiten': '#/Activiteiten',
                        'bestuur': '#/Bestuur',
                        'over ons': '#/OverOns',
                        'contact': '#/OverOns',
                        // OverOns contact keywords
                        'email': '#/OverOns',
                        'e-mail': '#/OverOns',
                        'mail': '#/OverOns',
                        'adres': '#/OverOns',
                        'address': '#/OverOns',
                        'locatie': '#/OverOns',
                        'location': '#/OverOns',
                        'telefoon': '#/OverOns',
                        'phone': '#/OverOns',
                        'telefoonnummer': '#/OverOns',
                        'bellen': '#/OverOns',
                        'contactgegevens': '#/OverOns',
                        'schrijvershoekstraat': '#/OverOns'
                    };
                    
                    if (pages[query]) {
                        window.location.hash = pages[query];
                    } else {
                        // Check for partial matches on contact info
                        const contactKeywords = ['email', 'mail', 'adres', 'telefoon', 'phone', 'contact', 'locatie'];
                        const isContactSearch = contactKeywords.some(keyword => query.includes(keyword));
                        
                        if (isContactSearch) {
                            window.location.hash = '#/OverOns';
                        } else {
                            window.location.hash = '#/Nieuws';
                            sessionStorage.setItem('globalSearchQuery', query);
                        }
                    }
                    
                    // Close mobile menu
                    if (mobileNav) {
                        mobileNav.classList.add('hidden');
                        const lines = menuBtn?.querySelectorAll('span');
                        if (lines) {
                            lines[0].style.transform = 'none';
                            lines[1].style.opacity = '1';
                            lines[2].style.transform = 'none';
                        }
                    }
                }
            }
        });
    }
};

export default Header;