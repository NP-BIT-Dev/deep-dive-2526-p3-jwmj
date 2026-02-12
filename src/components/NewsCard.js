const NewsCard = (item) => {
    const STATIC_URL = "http://127.0.0.1:8000/";
    const date = new Date(item.date_posted);
    const formattedDate = date.toLocaleDateString('nl-NL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    const imageUrl = item.images && item.images.length > 0 
        ? `${STATIC_URL}${item.images[0].file_path}` 
        : null;

    return `
    <article class="card news-article bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100/50 hover:border-cyaan/20 cursor-pointer" data-news-id="${item.id}">
        <div class="relative overflow-hidden">
            ${imageUrl ? `
                <div class="h-52 overflow-hidden">
                    <img 
                        src="${imageUrl}" 
                        alt="${item.title}" 
                        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    >
                </div>
            ` : `
                <div class="h-52 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-cyaan/5 group-hover:to-cyaan/10 transition-colors duration-300">
                    <svg class="w-16 h-16 text-gray-300 group-hover:text-cyaan/40 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                </div>
            `}
            <!-- Date badge -->
            <div class="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-600 shadow-sm">
                ${formattedDate}
            </div>
        </div>
        
        <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-cyaan transition-colors duration-200 line-clamp-2">${item.title}</h3>
            
            ${item.description ? `
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">${item.description}</p>
            ` : ''}
            
            <span class="inline-flex items-center gap-2 text-cyaan hover:text-cyaan/80 font-medium transition-all duration-200 group/btn">
                <span>Lees meer</span>
                <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
            </span>
        </div>
        
        <!-- Bottom accent line -->
        <div class="h-1 bg-gradient-to-r from-cyaan to-cyaan/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </article>`;
}

export default NewsCard;
