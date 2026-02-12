const Footer = () => {
    let footer = document.getElementById('footer');
    if (!footer) {
        footer = document.createElement('div');
        footer.id = 'footer';
        document.body.appendChild(footer);
    }
    footer.className = 'mt-auto';
    footer.innerHTML = `
        <footer class="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700 py-12 rounded-t-3xl">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <!-- Contact Section -->
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Contact
                        </h3>
                        <ul class="space-y-3 text-sm">
                            <li class="flex items-center gap-2 group">
                                <span class="text-gray-400">Email:</span>
                                <a href="mailto:temp@mail.com" class="text-cyaan hover:text-cyaan/80 transition-colors duration-200">temp@mail.com</a>
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-gray-400">Adres:</span>
                                <span>Schrijvershoekstraat 1</span>
                            </li>
                            <li class="flex items-center gap-3 pt-2">
                                <a href="#" class="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-cyaan/10 transition-all duration-200 group">
                                    <svg class="w-4 h-4 text-gray-500 group-hover:text-cyaan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a href="#" class="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-cyaan/10 transition-all duration-200 group">
                                    <svg class="w-4 h-4 text-gray-500 group-hover:text-cyaan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a href="#" class="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-cyaan/10 transition-all duration-200 group">
                                    <svg class="w-4 h-4 text-gray-500 group-hover:text-cyaan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Navigation Links -->
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            Navigatie
                        </h3>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/" class="hover:text-cyaan transition-colors duration-200 flex items-center gap-2 group"><span class="w-0 h-0.5 bg-cyaan group-hover:w-2 transition-all duration-200"></span>Home</a></li>
                            <li><a href="/Nieuws" class="hover:text-cyaan transition-colors duration-200 flex items-center gap-2 group"><span class="w-0 h-0.5 bg-cyaan group-hover:w-2 transition-all duration-200"></span>Nieuws</a></li>
                            <li><a href="/Activiteiten" class="hover:text-cyaan transition-colors duration-200 flex items-center gap-2 group"><span class="w-0 h-0.5 bg-cyaan group-hover:w-2 transition-all duration-200"></span>Activiteiten</a></li>
                            <li><a href="/Bestuur" class="hover:text-cyaan transition-colors duration-200 flex items-center gap-2 group"><span class="w-0 h-0.5 bg-cyaan group-hover:w-2 transition-all duration-200"></span>Bestuur</a></li>
                            <li><a href="/OverOns" class="hover:text-cyaan transition-colors duration-200 flex items-center gap-2 group"><span class="w-0 h-0.5 bg-cyaan group-hover:w-2 transition-all duration-200"></span>Over ons</a></li>
                        </ul>
                    </div>
                    
                    <!-- Sponsors Section -->
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                            </svg>
                            Sponsors
                        </h3>
                        <div class="flex flex-wrap gap-3">
                            <div class="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400 text-xs hover:shadow-md transition-shadow duration-200">A</div>
                            <div class="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400 text-xs hover:shadow-md transition-shadow duration-200">B</div>
                            <div class="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400 text-xs hover:shadow-md transition-shadow duration-200">C</div>
                        </div>
                    </div>
                </div>
                
                <!-- Bottom Bar -->
                <div class="border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p class="text-sm text-gray-500">© ${new Date().getFullYear()} Schrijvershoek. Alle rechten voorbehouden.</p>
                    <div class="flex items-center gap-4 text-sm text-gray-500">
                        <a href="#" class="hover:text-cyaan transition-colors duration-200">Privacy</a>
                        <span>•</span>
                        <a href="#" class="hover:text-cyaan transition-colors duration-200">Voorwaarden</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

export default Footer;
