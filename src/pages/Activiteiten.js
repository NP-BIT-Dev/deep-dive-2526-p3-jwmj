import PageBanner from "../components/PageBanner.js";

const Activiteiten = () => {
    document.title = "Schrijvershoek || Activiteiten";
    const root = document.getElementById('root');
    root.innerHTML = `
    ${PageBanner("Activiteiten")}
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Onze activiteiten</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Ontdek alle activiteiten die Schrijvershoek organiseert. Van schrijfworkshops tot lezingen, er is voor ieder wat wils!</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${ActivityCard({
                title: "Schrijfworkshops",
                description: "Wekelijkse workshops waar je jouw schrijfvaardigheden kunt verbeteren onder begeleiding van ervaren auteurs.",
                icon: "pencil",
                schedule: "Elke woensdag om 19:00"
            })}
            ${ActivityCard({
                title: "Leesclub",
                description: "Maandelijkse bijeenkomst waar we samen een boek bespreken en onze gedachten delen.",
                icon: "book",
                schedule: "Eerste vrijdag van de maand"
            })}
            ${ActivityCard({
                title: "Open Podium",
                description: "Een avond waar leden hun eigen werk kunnen voordragen aan een enthousiast publiek.",
                icon: "microphone",
                schedule: "Elke laatste zaterdag van de maand"
            })}
            ${ActivityCard({
                title: "Gastlezingen",
                description: "Regelmatige lezingen van bekende auteurs en experts uit de literaire wereld.",
                icon: "presentation",
                schedule: "Zie agenda"
            })}
            ${ActivityCard({
                title: "Schrijfwedstrijden",
                description: "Jaarlijkse wedstrijden met verschillende thema's en prijzen voor de beste inzendingen.",
                icon: "trophy",
                schedule: "Diverse momenten per jaar"
            })}
            ${ActivityCard({
                title: "Sociale evenementen",
                description: "Gezellige bijeenkomsten om andere schrijvers te ontmoeten en ervaringen uit te wisselen.",
                icon: "users",
                schedule: "Zie agenda"
            })}
        </div>
    </div>
    `;
}

const ActivityCard = ({ title, description, icon, schedule }) => {
    const icons = {
        pencil: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>`,
        book: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>`,
        microphone: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>`,
        presentation: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>`,
        trophy: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>`,
        users: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>`
    };

    return `
    <div class="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <div class="bg-cyaan/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
            <svg class="w-7 h-7 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${icons[icon]}
            </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">${title}</h3>
        <p class="text-gray-600 mb-4">${description}</p>
        <div class="flex items-center text-sm text-cyaan">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            ${schedule}
        </div>
    </div>`;
}

export default Activiteiten;
