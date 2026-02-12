const Lidmaatschappen = (lidmaatschapNaam, lidmaatschapBeschrijving, lidmaatschapKosten, voordelen, aanmeldLink, cardIndex = 0) => {
    const safeNaam = (typeof lidmaatschapNaam === 'string' ? lidmaatschapNaam : String(lidmaatschapNaam ?? 'lidmaatschap'));
    const modalId = `aanmelden-${safeNaam.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
    const btnId = `btn-${modalId}`;
    
    return `
        <div class="membership-card max-w-sm w-full mx-auto px-6 py-8 flex flex-col items-center justify-center bg-white shadow-lg rounded-3xl border border-gray-100/50 hover:border-cyaan/20 transition-all duration-500" style="--card-index: ${cardIndex};">
            <!-- Card Header with Accent -->
            <div class="w-full mb-6 relative">
                <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyaan to-cyaan/80 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span class="text-white text-2xl font-bold">${cardIndex + 1}</span>
                </div>
                <h2 class="text-2xl font-bold text-gray-800 mt-10 text-center">${safeNaam}</h2>
            </div>
            
            <!-- Price Badge -->
            <div class="mb-6">
                <span class="inline-block px-6 py-2 bg-cyaan/10 text-cyaan font-semibold rounded-full text-lg">
                    ${lidmaatschapKosten}
                </span>
            </div>
            
            <!-- Description -->
            <p class="text-gray-600 text-center mb-6 leading-relaxed">${lidmaatschapBeschrijving}</p>
            
            <!-- Benefits -->
            <div class="w-full mb-8">
                <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">Voordelen</h3>
                <ul class="space-y-3">
                    ${voordelen.map((voordeel, i) => `
                        <li class="flex items-center gap-3 text-gray-600" style="animation: slideInFromLeft 0.4s ease forwards; animation-delay: ${0.1 + i * 0.1}s; opacity: 0;">
                            <span class="flex-shrink-0 w-5 h-5 bg-cyaan/10 rounded-full flex items-center justify-center">
                                <svg class="w-3 h-3 text-cyaan" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                            ${voordeel}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <!-- CTA Button with Expand Effect -->
            <div class="w-full relative">
                <button 
                    type="button" 
                    id="${btnId}"
                    class="expand-btn w-full bg-gradient-to-r from-cyaan to-cyaan/90 text-white px-6 py-3 rounded-full font-semibold hover:from-cyaan/90 hover:to-cyaan transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    onclick="openExpandingModal('${modalId}', '${btnId}')"
                >
                    <span class="relative z-10 flex items-center justify-center gap-2">
                        <span>Meld je aan</span>
                        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </span>
                    <!-- Shimmer effect -->
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </button>
            </div>
        </div>
        
        <!-- Expanding Modal -->
        <div id="${modalId}" class="expand-popup" role="dialog" aria-modal="true" aria-label="Aanmeldformulier">
            <div class="expand-popup-backdrop" onclick="closeExpandingModal('${modalId}')"></div>
            <div class="expand-popup-content bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 mx-4">
                <!-- Modal Header -->
                <div class="flex items-center justify-between mb-6">
                    <div>
                        <h4 class="text-2xl font-bold text-gray-800">Aanmelden</h4>
                        <p class="text-cyaan font-medium">${safeNaam} - ${lidmaatschapKosten}</p>
                    </div>
                    <button 
                        type="button" 
                        class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 hover:rotate-90" 
                        aria-label="Sluit" 
                        onclick="closeExpandingModal('${modalId}')"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Form -->
                <form class="space-y-5" onsubmit="event.preventDefault(); handleFormSubmit('${modalId}');">
                    <div class="form-group">
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="${modalId}-naam">
                            <span class="flex items-center gap-2">
                                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                Naam
                            </span>
                        </label>
                        <input 
                            id="${modalId}-naam" 
                            type="text" 
                            name="naam" 
                            required 
                            class="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/30 focus:border-cyaan transition-all duration-300 hover:border-gray-300" 
                            placeholder="Jouw naam"
                        />
                    </div>
                    <div class="form-group">
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="${modalId}-email">
                            <span class="flex items-center gap-2">
                                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                E-mail
                            </span>
                        </label>
                        <input 
                            id="${modalId}-email" 
                            type="email" 
                            name="email" 
                            required 
                            class="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/30 focus:border-cyaan transition-all duration-300 hover:border-gray-300" 
                            placeholder="jouw@email.nl"
                        />
                    </div>
                    <div class="form-group">
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="${modalId}-iban">
                            <span class="flex items-center gap-2">
                                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                                </svg>
                                Bankgegevens (IBAN)
                            </span>
                        </label>
                        <input 
                            id="${modalId}-iban" 
                            type="text" 
                            name="iban" 
                            placeholder="NL00BANK0123456789" 
                            required 
                            class="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/30 focus:border-cyaan transition-all duration-300 hover:border-gray-300 font-mono"
                        />
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="flex items-center justify-end gap-3 pt-4">
                        <button 
                            type="button" 
                            class="px-6 py-3 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium" 
                            onclick="closeExpandingModal('${modalId}')"
                        >
                            Annuleer
                        </button>
                        <button 
                            type="submit" 
                            class="px-6 py-3 rounded-full bg-gradient-to-r from-cyaan to-cyaan/90 text-white hover:from-cyaan/90 hover:to-cyaan transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                        >
                            Bevestig aanmelding
                        </button>
                    </div>
                </form>
            </div>
        </div>`;
}

// Global functions for modal handling
if (typeof window !== 'undefined') {
    window.openExpandingModal = function(modalId, btnId) {
        const modal = document.getElementById(modalId);
        
        if (modal) {
            const content = modal.querySelector('.expand-popup-content');
            
            // Set transform origin to center of viewport
            if (content) {
                content.style.transformOrigin = 'center center';
            }
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus first input after animation
            setTimeout(() => {
                modal.querySelector('input')?.focus();
            }, 400);
        }
    };
    
    window.closeExpandingModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            const content = modal.querySelector('.expand-popup-content');
            if (content) {
                content.style.transform = 'scale(0.9)';
                content.style.opacity = '0';
            }
            
            setTimeout(() => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                if (content) {
                    content.style.transform = '';
                    content.style.opacity = '';
                }
            }, 300);
        }
    };
    
    window.handleFormSubmit = function(modalId) {
        const modal = document.getElementById(modalId);
        const content = modal?.querySelector('.expand-popup-content');
        
        if (content) {
            // Success animation
            content.innerHTML = `
                <div class="text-center py-8">
                    <div class="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                        <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">Bedankt!</h3>
                    <p class="text-gray-600 mb-6">Je aanmelding is succesvol verstuurd.</p>
                    <button 
                        onclick="closeExpandingModal('${modalId}'); location.reload();" 
                        class="px-6 py-3 rounded-full bg-cyaan text-white font-medium hover:bg-cyaan/90 transition-all duration-200"
                    >
                        Sluiten
                    </button>
                </div>
            `;
        }
    };
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.expand-popup.active');
            if (activeModal) {
                const modalId = activeModal.id;
                window.closeExpandingModal(modalId);
            }
        }
    });
}

export default Lidmaatschappen;

