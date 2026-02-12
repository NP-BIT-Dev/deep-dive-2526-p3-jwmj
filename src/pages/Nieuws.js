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
        newsContainer.innerHTML = ErrorState("Er ging iets mis bij het ophalen van het nieuws.");
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
    
    const imageUrl = item.images && item.images.length > 0 
        ? `${STATIC_URL}${item.images[0].file_path}` 
        : null;

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'article-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="article-modal-backdrop absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeArticleModal()"></div>
        <div class="article-modal-content relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden opacity-0 scale-95 transition-all duration-200">
            ${imageUrl ? `
                <div class="h-64 overflow-hidden relative">
                    <img src="${imageUrl}" alt="${item.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
            ` : ''}
            <button onclick="closeArticleModal()" class="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-colors duration-200 shadow-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <div class="p-8 overflow-y-auto max-h-[60vh]">
                <div class="text-sm text-cyaan font-medium mb-2">${formattedDate}</div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">${item.title}</h2>
                ${item.description ? `<p class="text-gray-600 text-lg mb-6 font-medium">${item.description}</p>` : ''}
                ${item.content ? `<div class="prose prose-gray max-w-none text-gray-700 leading-relaxed">${item.content}</div>` : ''}
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

    // Global close function
    window.closeArticleModal = () => {
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
            window.closeArticleModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

const initSearchFunctionality = () => {
    const searchInput = document.getElementById('news-search');
    const clearBtn = document.getElementById('clear-search');
    const searchStatus = document.getElementById('search-status');
    
    if (!searchInput) return;
    
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
