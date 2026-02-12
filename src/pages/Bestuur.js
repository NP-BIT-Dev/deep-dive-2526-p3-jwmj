import personen from "../components/personen.js";
import PageBanner from "../components/PageBanner.js";
import LoadingSpinner from "../components/LoadingSpinner.js";
import ErrorState from "../components/ErrorState.js";

const Bestuur = async () => {
    document.title = "Schrijvershoek || Bestuur";
    const root = document.getElementById('root');
    
    // Show loading state initially
    root.innerHTML = `
    ${PageBanner("Bestuur", null, false, "bestuur-banner")}
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center animate-fade-in">Ons Bestuur</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Maak kennis met de mensen die Schrijvershoek leiden en ondersteunen.</p>
        <div id="bestuur-container" class="flex justify-center">
            ${LoadingSpinner()}
        </div>
    </div>
    `;
    
    try {
        const response = await fetch('http://localhost:8000/api/v1/bestuurders/');
        
        if (!response.ok) {
            throw new Error('Kon bestuurders niet laden');
        }
        
        const boardMembers = await response.json();
        const container = document.getElementById('bestuur-container');
        
        if (boardMembers.length === 0) {
            container.innerHTML = `
                <div class="text-center py-12">
                    <p class="text-gray-500 text-lg">Geen bestuursleden gevonden.</p>
                </div>
            `;
        } else {
            container.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6';
            container.innerHTML = boardMembers.map((member, i) => 
                personen(member.name, member.role, i, member.image_path, member.quote)
            ).join('');
        }
    } catch (error) {
        console.error('Error loading bestuurders:', error);
        const container = document.getElementById('bestuur-container');
        container.innerHTML = ErrorState("Kon bestuursleden niet laden", "Probeer de pagina te vernieuwen of kom later terug.");
    }
}

export default Bestuur;