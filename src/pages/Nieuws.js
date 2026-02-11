import PageBanner from "../components/PageBanner.js";
import NewsCard from "../components/NewsCard.js";
import LoadingSpinner from "../components/LoadingSpinner.js";
import EmptyState from "../components/EmptyState.js";
import ErrorState from "../components/ErrorState.js";

const Nieuws = () => {
    document.title = "Schrijvershoek || Nieuws";
    const root = document.getElementById('root');
    
    root.innerHTML = `
    ${PageBanner("Nieuws")}
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Laatste nieuws</h2>
        <div id="news-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${LoadingSpinner()}
        </div>
    </div>
    `;

    fetchNews();
}

const fetchNews = async () => {
    const newsContainer = document.getElementById('news-container');
    
    try {
        const response = await fetch('http://localhost:8000/api/v1/news/');
        
        if (!response.ok) {
            throw new Error('Kon nieuws niet ophalen');
        }
        
        const newsItems = await response.json();
        
        if (newsItems.length === 0) {
            newsContainer.innerHTML = EmptyState("Er zijn nog geen nieuwsberichten.");
            return;
        }
        
        newsContainer.innerHTML = newsItems.map(item => NewsCard(item)).join('');
        
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = ErrorState("Er ging iets mis bij het ophalen van het nieuws.");
    }
}

export default Nieuws;
