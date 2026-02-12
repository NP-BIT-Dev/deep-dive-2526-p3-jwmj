/**
 * PageBanner Component
 * @param {string} title - The title to display on the banner
 * @param {string|null} imageUrl - Optional background image URL
 * @param {boolean} allowUpload - Whether to show upload option (for admin use)
 * @param {string} uploadId - Unique ID for the upload input
 */
const PageBanner = (title, imageUrl = null, allowUpload = false, uploadId = 'banner-upload') => {
    const hasImage = imageUrl && imageUrl.trim() !== '';
    
    const uploadSection = allowUpload ? `
        <div class="absolute bottom-4 right-4 z-20">
            <label for="${uploadId}" class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>Wijzig afbeelding</span>
            </label>
            <input type="file" id="${uploadId}" accept="image/*" class="hidden" onchange="handleBannerUpload(this, '${uploadId}')">
        </div>
    ` : '';

    return `
    <div class="page-banner relative py-32 md:py-40 rounded-b-3xl mb-8 overflow-hidden" id="page-banner-${uploadId}">
        <!-- Background Layer -->
        <div class="page-banner-bg ${hasImage ? '' : 'bg-cyaan/75'}" 
             style="${hasImage ? `background-image: url('${imageUrl}');` : ''}">
        </div>
        
        <!-- Overlay -->
        <div class="page-banner-overlay ${hasImage ? '' : 'bg-transparent'}"></div>
        
        <!-- Content -->
        <div class="page-banner-content max-w-7xl mx-auto px-4 py-8 flex flex-col items-center justify-center">
            <h1 class="text-4xl md:text-5xl font-bold text-center text-white mb-4 drop-shadow-lg animate-fade-in">${title}</h1>
            
            <!-- Optional subtitle slot -->
            <div id="banner-subtitle-${uploadId}" class="text-white/80 text-lg text-center max-w-2xl"></div>
        </div>
        
        ${uploadSection}
        
        <!-- Decorative blur elements -->
        <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>`;
}

// Global function to handle banner image upload
if (typeof window !== 'undefined') {
    window.handleBannerUpload = function(input, uploadId) {
        const file = input.files[0];
        if (!file) return;
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Selecteer een afbeelding (JPG, PNG, etc.)');
            return;
        }
        
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Afbeelding mag maximaal 5MB zijn');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const banner = document.getElementById(`page-banner-${uploadId}`);
            const bgDiv = banner?.querySelector('.page-banner-bg');
            
            if (bgDiv) {
                // Add motion blur transition effect
                bgDiv.style.filter = 'blur(10px)';
                bgDiv.style.opacity = '0.5';
                
                setTimeout(() => {
                    bgDiv.style.backgroundImage = `url('${e.target.result}')`;
                    bgDiv.classList.remove('bg-cyaan/75');
                    
                    // Animate back
                    requestAnimationFrame(() => {
                        bgDiv.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                        bgDiv.style.filter = 'blur(0)';
                        bgDiv.style.opacity = '1';
                    });
                }, 200);
                
                // Show overlay for better text readability
                const overlay = banner?.querySelector('.page-banner-overlay');
                if (overlay) {
                    overlay.classList.remove('bg-transparent');
                }
                
                // Store in localStorage for persistence (optional)
                try {
                    localStorage.setItem(`banner-image-${uploadId}`, e.target.result);
                } catch (err) {
                    console.warn('Could not save banner to localStorage:', err);
                }
            }
        };
        reader.readAsDataURL(file);
    };
    
    // Function to load saved banner images
    window.loadSavedBanner = function(uploadId) {
        try {
            const savedImage = localStorage.getItem(`banner-image-${uploadId}`);
            if (savedImage) {
                const banner = document.getElementById(`page-banner-${uploadId}`);
                const bgDiv = banner?.querySelector('.page-banner-bg');
                if (bgDiv) {
                    bgDiv.style.backgroundImage = `url('${savedImage}')`;
                    bgDiv.classList.remove('bg-cyaan/75');
                }
            }
        } catch (err) {
            console.warn('Could not load saved banner:', err);
        }
    };
}

export default PageBanner;
