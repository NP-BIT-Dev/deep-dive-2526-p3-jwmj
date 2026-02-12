import PageBanner from "../components/PageBanner.js";

const OverOns = () => {
    document.title = "Schrijvershoek || Over Ons";
    const root = document.getElementById('root');
    root.innerHTML = `
    ${PageBanner("Over Ons", null, false, "overons-banner")}

    <div class="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-8">
        <div class="card flex items-center justify-center mb-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl w-full md:w-1/2 h-96 order-2 md:order-1 shadow-lg overflow-hidden group">
            <div class="relative w-full h-full flex items-center justify-center">
                <p class="text-gray-400">placeholder</p>
                <div class="absolute inset-0 bg-gradient-to-t from-cyaan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        </div>
        <div class="card flex flex-col items-start justify-center text-start mb-8 w-full md:w-1/2 order-1 md:order-2 bg-white p-8 rounded-3xl shadow-lg">
            <h2 class="text-3xl font-bold text-gray-800 mb-4 text-start">Over Schrijvershoek</h2>
            <p class="text-gray-600 mb-6 text-start leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>

    <div class="bg-gradient-to-b from-gray-50 to-white py-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">Contact</h2>

        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="card bg-white p-8 rounded-3xl shadow-lg">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">Neem contact op</h2>
                    <p class="text-gray-600 mb-8">Heb je een vraag, suggestie of wil je meer weten over Schrijvershoek? Vul het formulier in en we nemen zo snel mogelijk contact met je op.</p>
                    
                    <form id="contact-form" class="space-y-5">
                        <div class="form-group">
                            <label class="block text-sm font-medium text-gray-700 mb-2" for="naam">
                                <span class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    Naam
                                </span>
                            </label>
                            <input id="naam" type="text" name="naam" required 
                                class="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/30 focus:border-cyaan transition-all duration-300 hover:border-gray-300" 
                                placeholder="Je naam" />
                        </div>
                        <div class="form-group">
                            <label class="block text-sm font-medium text-gray-700 mb-2" for="email">
                                <span class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    E-mail
                                </span>
                            </label>
                            <input id="email" type="email" name="email" required 
                                class="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/30 focus:border-cyaan transition-all duration-300 hover:border-gray-300" 
                                placeholder="je@email.nl" />
                        </div>
                        <div class="form-group">
                            <label class="block text-sm font-medium text-gray-700 mb-2" for="onderwerp">
                                <span class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                    </svg>
                                    Onderwerp
                                </span>
                            </label>
                            <input id="onderwerp" type="text" name="onderwerp" required 
                                class="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/30 focus:border-cyaan transition-all duration-300 hover:border-gray-300" 
                                placeholder="Waar gaat je bericht over?" />
                        </div>
                        <div class="form-group">
                            <label class="block text-sm font-medium text-gray-700 mb-2" for="bericht">
                                <span class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                    </svg>
                                    Bericht
                                </span>
                            </label>
                            <textarea id="bericht" name="bericht" rows="5" required 
                                class="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/30 focus:border-cyaan transition-all duration-300 resize-none hover:border-gray-300" 
                                placeholder="Schrijf hier je bericht..."></textarea>
                        </div>
                        <button type="submit" 
                            class="expand-btn w-full bg-gradient-to-r from-cyaan to-cyaan/90 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
                            <span class="relative z-10 flex items-center justify-center gap-2">
                                Verstuur bericht
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </span>
                            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        </button>
                    </form>
                </div>
                
                <div>
                    <h2 class="text-2xl font-bold text-gray-800 mb-6">Contactgegevens</h2>
                    <div class="card bg-white rounded-3xl shadow-lg p-6 space-y-6">
                        <div class="flex items-start gap-4 group">
                            <div class="bg-cyaan/10 p-3 rounded-xl group-hover:bg-cyaan/20 group-hover:scale-110 transition-all duration-300">
                                <svg class="w-6 h-6 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 mb-1 group-hover:text-cyaan transition-colors duration-300">Adres</h3>
                                <p class="text-gray-600">Schrijvershoekstraat 1<br>1234 AB Dorpnaam</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 group">
                            <div class="bg-cyaan/10 p-3 rounded-xl group-hover:bg-cyaan/20 group-hover:scale-110 transition-all duration-300">
                                <svg class="w-6 h-6 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 mb-1 group-hover:text-cyaan transition-colors duration-300">E-mail</h3>
                                <a href="mailto:temp@mail.com" class="text-cyaan hover:text-cyaan/80 transition-colors">temp@mail.com</a>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 group">
                            <div class="bg-cyaan/10 p-3 rounded-xl group-hover:bg-cyaan/20 group-hover:scale-110 transition-all duration-300">
                                <svg class="w-6 h-6 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 mb-1 group-hover:text-cyaan transition-colors duration-300">Telefoon</h3>
                                <a href="tel:+31612345678" class="text-cyaan hover:text-cyaan/80 transition-colors">+31 6 12345678</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8 card bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl h-64 flex items-center justify-center shadow-lg overflow-hidden group">
                        <div class="relative w-full h-full flex items-center justify-center">
                            <p class="text-gray-400">Kaart placeholder</p>
                            <div class="absolute inset-0 bg-gradient-to-t from-cyaan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    initContactForm();
}

const initContactForm = () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.');
        form.reset();
    });
}

export default OverOns;
