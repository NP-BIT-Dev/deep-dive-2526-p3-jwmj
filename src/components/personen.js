const personen = (name = "Naam", role = "Functie", index = 0, imagePath = null, quote = null) => {
    const imageSection = imagePath 
        ? `<img src="http://localhost:8000/${imagePath}" alt="${name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">`
        : `<div class="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>`;
    
    const quoteText = quote ? `"${quote}"` : '"Had geen airfryer :("';
    
    return `
    <div class="card-stagger group" style="--card-index: ${index};">
        <div class="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100/50 hover:border-cyaan/20">
            <!-- Profile Image -->
            <div class="relative">
                <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center items-center overflow-hidden">
                    ${imageSection}
                </div>
                <!-- Overlay on hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-cyaan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <!-- Info Section -->
            <div class="p-5 text-center">
                <h4 class="text-lg font-semibold text-gray-800 mb-1 group-hover:text-cyaan transition-colors duration-300">${name}</h4>
                <p class="text-sm text-cyaan font-medium mb-3">${role}</p>
                <p class="text-gray-500 text-sm italic">${quoteText}</p>
            </div>
            
            <!-- Bottom accent line -->
            <div class="h-1 bg-gradient-to-r from-cyaan to-cyaan/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
    </div>`
}

export default personen