import PageBanner from "../components/PageBanner.js";
import NewsCard from "../components/NewsCard.js";
import LoadingSpinner from "../components/LoadingSpinner.js";
import EmptyState from "../components/EmptyState.js";
import ErrorState from "../components/ErrorState.js";

let allNewsItems = [];

const Nieuws = () => {
    document.title = "Schrijvershoek || Nieuws";
    const root = document.getElementById('root');
    
    root.innerHTML = `
    ${PageBanner("Nieuws", null, false, "nieuws-banner")}
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in">Laatste nieuws</h2>
        
        <!-- Search Bar -->
        <div class="page-search max-w-xl mx-auto mb-10">
            <div class="relative">
                <input 
                    type="text" 
                    id="news-search" 
                    placeholder="Zoek in nieuwsberichten..." 
                    class="w-full px-6 py-4 pr-14 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyaan/30 focus:border-cyaan transition-all duration-300 text-gray-700 bg-white shadow-sm hover:shadow-md"
                >
                <div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button id="clear-search" class="hidden p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div class="w-px h-6 bg-gray-200"></div>
                    <svg class="w-5 h-5 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </div>
            <p id="search-status" class="text-sm text-gray-500 mt-3 text-center hidden"></p>
        </div>
        
        <!-- News Grid -->
        <div id="news-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${LoadingSpinner()}
        </div>
        
        <!-- No Results State -->
        <div id="no-results" class="hidden text-center py-16">
            <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">Geen resultaten gevonden</h3>
            <p class="text-gray-500">Probeer een andere zoekterm</p>
        </div>
    </div>
    `;

    fetchNews();
    initSearchFunctionality();
}

const fetchNews = async () => {
    const newsContainer = document.getElementById('news-container');
    
    try {
        const response = await fetch('http://localhost:8000/api/v1/news/');
        
        if (!response.ok) {
            throw new Error('Kon nieuws niet ophalen');
        }
        
        const newsItems = await response.json();
        allNewsItems = newsItems;
        
        if (newsItems.length === 0) {
            newsContainer.innerHTML = EmptyState("Er zijn nog geen nieuwsberichten.");
            return;
        }
        
        renderNewsItems(newsItems);
        
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = ErrorState("Technische fout bij het laden.", "news");
    }
}

const renderNewsItems = (items) => {
    const newsContainer = document.getElementById('news-container');
    const noResults = document.getElementById('no-results');
    
    if (items.length === 0) {
        newsContainer.innerHTML = '';
        noResults?.classList.remove('hidden');
        return;
    }
    
    noResults?.classList.add('hidden');
    newsContainer.innerHTML = items.map((item, index) => {
        const card = NewsCard(item);
        // Add stagger animation class
        return card.replace('<article class="', `<article style="--card-index: ${index};" class="card-stagger `);
    }).join('');

    // Add click handlers for articles
    initArticleClickHandlers();
}

const initArticleClickHandlers = () => {
    const articles = document.querySelectorAll('.news-article');
    articles.forEach(article => {
        article.addEventListener('click', () => {
            const newsId = article.dataset.newsId;
            const newsItem = allNewsItems.find(item => item.id == newsId);
            if (newsItem) {
                openArticleModal(newsItem);
            }
        });
    });
}

const openArticleModal = (item) => {
    const STATIC_URL = "http://127.0.0.1:8000/";
    const date = new Date(item.date_posted);
    const formattedDate = date.toLocaleDateString('nl-NL', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // Handle all images
    const images = item.images && item.images.length > 0 ? item.images : [];
    const hasImages = images.length > 0;
    
    // Store images for fullscreen navigation
    window.articleImages = images.map(img => `${STATIC_URL}${img.file_path}`);
    window.currentImageIndex = 0;
    
    // Create image gallery HTML
    let imageGalleryHTML = '';
    if (hasImages) {
        imageGalleryHTML = `
            <div class="overflow-hidden relative">
                <div class="h-64 md:h-80 overflow-hidden relative group">
                    <img src="${STATIC_URL}${images[0].file_path}" alt="${item.title}" class="article-main-image w-full h-full object-cover cursor-pointer" onclick="openFullscreenImage()">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                    <button onclick="openFullscreenImage()" class="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-colors duration-200 shadow-md opacity-0 group-hover:opacity-100">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                        </svg>
                    </button>
                </div>
                ${images.length > 1 ? `
                    <div class="flex gap-2 p-4 overflow-x-auto bg-gray-50">
                        ${images.map((img, idx) => `
                            <img 
                                src="${STATIC_URL}${img.file_path}" 
                                alt="${item.title} - afbeelding ${idx + 1}" 
                                class="article-thumb w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 ${idx === 0 ? 'ring-2 ring-cyaan' : ''}"
                                data-index="${idx}"
                            >
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'article-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="article-modal-backdrop absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeArticleModal()"></div>
        <div class="article-modal-content relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden opacity-0 scale-95 transition-all duration-200">
            ${imageGalleryHTML}
            <button onclick="closeArticleModal()" class="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-colors duration-200 shadow-md z-10">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <div class="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
                <div class="text-sm text-cyaan font-medium mb-2">${formattedDate}</div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">${item.title || 'Geen titel'}</h2>
                ${item.description ? `<p class="text-gray-600 text-lg mb-4 font-medium">${item.description}</p>` : ''}
                ${item.content ? `<div class="prose prose-gray max-w-none text-gray-700 leading-relaxed whitespace-pre-line">${item.content}</div>` : '<p class="text-gray-500 italic">Geen inhoud beschikbaar.</p>'}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Animate in
    requestAnimationFrame(() => {
        const content = modal.querySelector('.article-modal-content');
        content.style.opacity = '1';
        content.style.transform = 'scale(1)';
    });

    // Add thumbnail click handlers
    const thumbs = modal.querySelectorAll('.article-thumb');
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = parseInt(thumb.dataset.index);
            const mainImg = modal.querySelector('.article-main-image');
            if (mainImg && window.articleImages[index]) {
                mainImg.src = window.articleImages[index];
                window.currentImageIndex = index;
                // Update ring styling
                thumbs.forEach(t => t.classList.remove('ring-2', 'ring-cyaan'));
                thumb.classList.add('ring-2', 'ring-cyaan');
            }
        });
    });

    // Fullscreen image function
    window.openFullscreenImage = () => {
        if (!window.articleImages || window.articleImages.length === 0) return;
        
        const fullscreen = document.createElement('div');
        fullscreen.id = 'fullscreen-image';
        fullscreen.className = 'fixed inset-0 z-[100] bg-black flex items-center justify-center';
        fullscreen.innerHTML = `
            <img src="${window.articleImages[window.currentImageIndex]}" class="max-w-full max-h-full object-contain fullscreen-img">
            <button onclick="closeFullscreenImage()" class="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            ${window.articleImages.length > 1 ? `
                <button onclick="navigateFullscreen(-1)" class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button onclick="navigateFullscreen(1)" class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                    ${window.currentImageIndex + 1} / ${window.articleImages.length}
                </div>
            ` : ''}
        `;
        document.body.appendChild(fullscreen);
    };

    window.closeFullscreenImage = () => {
        document.getElementById('fullscreen-image')?.remove();
    };

    window.navigateFullscreen = (direction) => {
        const total = window.articleImages.length;
        window.currentImageIndex = (window.currentImageIndex + direction + total) % total;
        const img = document.querySelector('.fullscreen-img');
        if (img) img.src = window.articleImages[window.currentImageIndex];
        // Update counter
        const counter = document.querySelector('#fullscreen-image .text-sm');
        if (counter) counter.textContent = `${window.currentImageIndex + 1} / ${total}`;
        // Update thumbnails in article modal
        const thumbs = document.querySelectorAll('.article-thumb');
        thumbs.forEach((t, i) => {
            t.classList.toggle('ring-2', i === window.currentImageIndex);
            t.classList.toggle('ring-cyaan', i === window.currentImageIndex);
        });
        // Update main image
        const mainImg = document.querySelector('.article-main-image');
        if (mainImg) mainImg.src = window.articleImages[window.currentImageIndex];
    };

    // Global close function
    window.closeArticleModal = () => {
        window.closeFullscreenImage?.();
        const content = modal.querySelector('.article-modal-content');
        content.style.opacity = '0';
        content.style.transform = 'scale(0.95)';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 200);
    };

    // Close on Escape
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('fullscreen-image')) {
                window.closeFullscreenImage();
            } else {
                window.closeArticleModal();
                document.removeEventListener('keydown', handleEscape);
            }
        }
        // Arrow keys for fullscreen navigation
        if (document.getElementById('fullscreen-image')) {
            if (e.key === 'ArrowLeft') window.navigateFullscreen(-1);
            if (e.key === 'ArrowRight') window.navigateFullscreen(1);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

const initSearchFunctionality = () => {
    const searchInput = document.getElementById('news-search');
    const clearBtn = document.getElementById('clear-search');
    const searchStatus = document.getElementById('search-status');
    
    if (!searchInput) return;
    
    // Check for global search query from header search
    const globalQuery = sessionStorage.getItem('globalSearchQuery');
    if (globalQuery) {
        searchInput.value = globalQuery;
        sessionStorage.removeItem('globalSearchQuery');
        // Trigger search after news items are loaded
        setTimeout(() => {
            performSearch(globalQuery.toLowerCase());
            if (clearBtn) clearBtn.classList.remove('hidden');
        }, 500);
    }
    
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        // Show/hide clear button
        if (clearBtn) {
            clearBtn.classList.toggle('hidden', query === '');
        }
        
        // Debounce search
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            performSearch(query);
        }, 200);
    });
    
    // Clear search
    clearBtn?.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.classList.add('hidden');
        searchStatus?.classList.add('hidden');
        renderNewsItems(allNewsItems);
        searchInput.focus();
    });
    
    // Keyboard shortcuts
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            clearBtn?.classList.add('hidden');
            searchStatus?.classList.add('hidden');
            renderNewsItems(allNewsItems);
            searchInput.blur();
        }
    });
}

const performSearch = (query) => {
    const searchStatus = document.getElementById('search-status');
    
    if (query === '') {
        searchStatus?.classList.add('hidden');
        renderNewsItems(allNewsItems);
        return;
    }
    
    const filteredItems = allNewsItems.filter(item => {
        const titleMatch = item.title?.toLowerCase().includes(query);
        const contentMatch = item.content?.toLowerCase().includes(query);
        const descriptionMatch = item.description?.toLowerCase().includes(query);
        return titleMatch || contentMatch || descriptionMatch;
    });
    
    // Update status
    if (searchStatus) {
        searchStatus.textContent = `${filteredItems.length} ${filteredItems.length === 1 ? 'resultaat' : 'resultaten'} gevonden`;
        searchStatus.classList.remove('hidden');
    }
    
    renderNewsItems(filteredItems);
}

export default Nieuws;
