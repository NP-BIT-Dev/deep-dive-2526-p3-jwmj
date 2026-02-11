import PageBanner from "../components/PageBanner.js";

const Contact = () => {
    document.title = "Schrijvershoek || Contact";
    const root = document.getElementById('root');
    root.innerHTML = `
    ${PageBanner("Contact")}
    <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h2 class="text-3xl font-bold text-gray-800 mb-6">Neem contact op</h2>
                <p class="text-gray-600 mb-8">Heb je een vraag, suggestie of wil je meer weten over Schrijvershoek? Vul het formulier in en we nemen zo snel mogelijk contact met je op.</p>
                
                <form id="contact-form" class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="naam">Naam</label>
                        <input id="naam" type="text" name="naam" required 
                            class="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/50 focus:border-cyaan transition-colors" 
                            placeholder="Je naam" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="email">E-mail</label>
                        <input id="email" type="email" name="email" required 
                            class="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/50 focus:border-cyaan transition-colors" 
                            placeholder="je@email.nl" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="onderwerp">Onderwerp</label>
                        <input id="onderwerp" type="text" name="onderwerp" required 
                            class="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/50 focus:border-cyaan transition-colors" 
                            placeholder="Waar gaat je bericht over?" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" for="bericht">Bericht</label>
                        <textarea id="bericht" name="bericht" rows="5" required 
                            class="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyaan/50 focus:border-cyaan transition-colors resize-none" 
                            placeholder="Schrijf hier je bericht..."></textarea>
                    </div>
                    <button type="submit" 
                        class="w-full bg-cyaan hover:bg-cyaan/80 text-white font-medium py-3 px-6 rounded-2xl transition-colors duration-200">
                        Verstuur bericht
                    </button>
                </form>
            </div>
            
            <div>
                <h2 class="text-3xl font-bold text-gray-800 mb-6">Contactgegevens</h2>
                <div class="bg-white rounded-3xl shadow-md p-6 space-y-6">
                    <div class="flex items-start gap-4">
                        <div class="bg-cyaan/10 p-3 rounded-xl">
                            <svg class="w-6 h-6 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800 mb-1">Adres</h3>
                            <p class="text-gray-600">Schrijvershoekstraat 1<br>1234 AB Dorpnaam</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="bg-cyaan/10 p-3 rounded-xl">
                            <svg class="w-6 h-6 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800 mb-1">E-mail</h3>
                            <a href="mailto:temp@mail.com" class="text-cyaan hover:text-cyaan/80 transition-colors">temp@mail.com</a>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="bg-cyaan/10 p-3 rounded-xl">
                            <svg class="w-6 h-6 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800 mb-1">Telefoon</h3>
                            <a href="tel:+31612345678" class="text-cyaan hover:text-cyaan/80 transition-colors">+31 6 12345678</a>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8 bg-gray-100 rounded-3xl h-64 flex items-center justify-center">
                    <p class="text-gray-500">Kaart placeholder</p>
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

export default Contact;
