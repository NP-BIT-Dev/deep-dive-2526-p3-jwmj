const NewsCard = (item) => {
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
    </div>`;
}

export default NewsCard;
