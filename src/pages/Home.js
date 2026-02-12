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
    root.innerHTML = `
    ${PageBanner("Schrijvershoek", null, false, "home-banner")}
    <div class="max-w-7xl md:mx-auto px-4 py-2 md:py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in">Home</h2>
        <div class="rounded-3xl p-2 flex md:flex-row flex-col items-center justify-center mb-12 gap-4">
            <div class="card flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl w-4/5 md:w-1/2 min-h-87 order-2 md:order-1 mb-6 md:mb-0 shadow-lg overflow-hidden group">
                <div class="relative w-full h-full min-h-87 flex items-center justify-center">
                    <p class="text-gray-400">placeholder</p>
                    <div class="absolute inset-0 bg-gradient-to-t from-cyaan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>
            <div class="ml-0 md:ml-6 w-4/5 md:w-1/2 flex flex-col justify-between order-1 md:order-2">
                <div class="card flex items-center justify-center h-32 w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 shadow-md">
                    <p class="text-gray-400">placeholder</p>
                </div>
                <div class="card bg-white p-6 rounded-2xl shadow-md">
                    <h3 class="text-2xl font-bold text-gray-800 mb-3">Welkom bij Schrijvershoek!</h3>
                    <p class="text-gray-600 mb-4 leading-relaxed">Schrijvershoek is een platform voor schrijvers en lezers om samen te komen, verhalen te delen en inspiratie op te doen. Of je nu een beginnende schrijver bent of een doorgewinterde auteur, hier vind je een gemeenschap van gelijkgestemde mensen die hun passie voor schrijven delen.</p>
                    <p class="text-gray-600 leading-relaxed">Doe mee aan discussies, deel je werk, en ontdek nieuwe verhalen van andere schrijvers. Schrijvershoek is de plek waar creativiteit bloeit en verhalen tot leven komen.</p>
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