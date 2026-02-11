const Nieuws = () => {
    document.title = "Schrijvershoek || Nieuws";
    const root = document.getElementById('root');
    
    root.innerHTML = `
    <div class="bg-cyaan/75 py-40 rounded-b-3xl mb-8">
        <div class="max-w-7xl mx-auto px-4 py-8 flex items-center justify-center">
            <h1 class="text-4xl font-bold text-center text-gray-800 mb-6 my-auto">Nieuws</h1>
        </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Laatste nieuws</h2>
        <div id="news-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="col-span-full flex justify-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
            </div>
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
            newsContainer.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-gray-600 text-lg">Er zijn nog geen nieuwsberichten.</p>
                </div>
            `;
            return;
        }
        
        newsContainer.innerHTML = newsItems.map(item => {
            const date = new Date(item.date_posted);
            const formattedDate = date.toLocaleDateString('nl-NL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
            
            const imageUrl = item.images && item.images.length > 0 
                ? `/${item.images[0].file_path}` 
                : null;
            
            return `
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    ${imageUrl ? `
                        <div class="h-48 overflow-hidden">
                            <img src="${imageUrl}" alt="${item.title}" class="w-full h-full object-cover">
                        </div>
                    ` : `
                        <div class="h-48 bg-gray-100 flex items-center justify-center">
                            <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                    `}
                    <div class="p-6">
                        <p class="text-sm text-gray-500 mb-2">${formattedDate}</p>
                        <h3 class="text-xl font-semibold text-gray-800 mb-3">${item.title}</h3>
                        <button class="text-cyaan hover:text-cyaan/80 font-medium transition-colors duration-200">
                            Lees meer →
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-red-600 text-lg mb-4">Er ging iets mis bij het ophalen van het nieuws.</p>
                <button onclick="location.reload()" class="bg-cyaan hover:bg-cyaan/80 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Probeer opnieuw
                </button>
            </div>
        `;
    }
}

export default Nieuws;
