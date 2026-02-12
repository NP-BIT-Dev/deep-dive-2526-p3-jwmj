import Lidmaatschappen from "../components/lidmaatschappen.js";
import PageBanner from "../components/PageBanner.js";

const Data = {
    lidmaatschappen: [
        {
            name: "Gezinslidmaatschap",
            description: "Lidmaatschap voor het hele gezin",
            price: "€15 per maand",
            benefits: [],
        },
        {
            name: "Persoonlijk lidmaatschap",
            description: "Lidmaatschap voor individuen",
            price: "€9,45 per maand",
            benefits: [],
        },
        {
            name: "Donateur",
            description: "Donateur vanaf €5,00 per jaar",
            price: "min €5,00 per jaar",
            benefits: [],
        }
    ]
}

const Home = (app) => {
    document.title = "Schrijvershoek || Home";
    const root = document.getElementById('root');
    
    // Check if homepage is corrupted by 404 easter egg
    const isCorrupted = sessionStorage.getItem('homepageCorrupted') === 'true';
    
    const welcomeTitle = isCorrupted ? "Wëlkøm bįj Schr̸ijvershoek!" : "Welkom bij Schrijvershoek!";
    const welcomeText1 = isCorrupted 
        ? "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const welcomeText2 = isCorrupted
        ? "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam. Oeps."
        : "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    root.innerHTML = `
    ${PageBanner("Schrijvershoek", null, false, "home-banner")}
    <div class="max-w-7xl md:mx-auto px-4 py-2 md:py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in ${isCorrupted ? 'animate-pulse' : ''}">Home${isCorrupted ? ' (glitched)' : ''}</h2>
        ${isCorrupted ? '<p class="text-center text-red-500 text-sm mb-4">⚠️ Je hebt iets stuk gemaakt! Zoek "404" opnieuw en klik op repareren...</p>' : ''}
        <div class="rounded-3xl p-2 flex md:flex-row flex-col items-center justify-center mb-12 gap-4">
            <div class="card flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl w-4/5 md:w-1/2 min-h-87 order-2 md:order-1 mb-6 md:mb-0 shadow-lg overflow-hidden group ${isCorrupted ? 'rotate-1' : ''}">
                <div class="relative w-full h-full min-h-87 flex items-center justify-center">
                    <p class="text-gray-400">${isCorrupted ? '¿placeholder?' : 'placeholder'}</p>
                    <div class="absolute inset-0 bg-gradient-to-t from-cyaan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>
            <div class="ml-0 md:ml-6 w-4/5 md:w-1/2 flex flex-col justify-between order-1 md:order-2">
                <div class="card flex items-center justify-center h-32 w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 shadow-md ${isCorrupted ? '-rotate-1' : ''}">
                    <p class="text-gray-400">${isCorrupted ? '????' : 'placeholder'}</p>
                </div>
                <div class="card bg-white p-6 rounded-2xl shadow-md ${isCorrupted ? 'border-2 border-red-300' : ''}">
                    <h3 class="text-2xl font-bold text-gray-800 mb-3 ${isCorrupted ? 'line-through decoration-red-500' : ''}">${welcomeTitle}</h3>
                    <p class="text-gray-600 mb-4 leading-relaxed ${isCorrupted ? 'italic' : ''}">${welcomeText1}</p>
                    <p class="text-gray-600 leading-relaxed">${welcomeText2}</p>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Membership Section -->
    <div class="bg-gradient-to-b from-gray-50 to-white py-16">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Lidmaatschappen</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-8 items-start pt-8">
                ${Data.lidmaatschappen.map((lidmaatschap, index) => 
                    Lidmaatschappen(
                        lidmaatschap.name,
                        lidmaatschap.description,
                        lidmaatschap.price,
                        lidmaatschap.benefits,
                        "#",
                        index
                    )
                ).join('')}
            </div>
        </div>
    </div>
    `;
    
    // Initialize scroll animations
    initScrollAnimations();
}

const initScrollAnimations = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });
};

export default Home;