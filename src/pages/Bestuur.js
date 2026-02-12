import personen from "../components/personen.js";
import PageBanner from "../components/PageBanner.js";

const Bestuur = () => {
    document.title = "Schrijvershoek || Bestuur";
    const root = document.getElementById('root');
    
    const boardMembers = [
        { name: "Jan de Vries", role: "Voorzitter" },
        { name: "Maria Jansen", role: "Secretaris" },
        { name: "Pieter Bakker", role: "Penningmeester" },
        { name: "Anna Visser", role: "Bestuurslid" },
        { name: "John Doe", role: "Bestuurslid" }
    ];
    
    root.innerHTML = `
    ${PageBanner("Bestuur", null, false, "bestuur-banner")}
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center animate-fade-in">Ons Bestuur</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Maak kennis met de mensen die Schrijvershoek leiden en ondersteunen.</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            ${ boardMembers.map((member, i) => personen(member.name, member.role, i)).join('') }
        </div>
    </div>
    `;
}

export default Bestuur;