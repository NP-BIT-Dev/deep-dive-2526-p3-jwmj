import PageBanner from "../components/PageBanner.js";
import LoadingSpinner from "../components/LoadingSpinner.js";
import EmptyState from "../components/EmptyState.js";
import ErrorState from "../components/ErrorState.js";

let allActivities = [];

const Activiteiten = () => {
    document.title = "Schrijvershoek || Activiteiten";
    const root = document.getElementById('root');
    root.innerHTML = `
    ${PageBanner("Activiteiten", null, false, "activiteiten-banner")}
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center animate-fade-in">Onze activiteiten</h2>
        <p class="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Ontdek alle activiteiten die Schrijvershoek organiseert. Van schrijfworkshops tot lezingen, er is voor ieder wat wils!</p>
        
        <!-- Search Bar -->
        <div class="page-search max-w-xl mx-auto mb-10">
            <div class="relative">
                <input 
                    type="text" 
                    id="activities-search" 
                    placeholder="Zoek activiteiten..." 
                    class="w-full px-6 py-4 pr-14 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyaan/30 focus:border-cyaan transition-all duration-300 text-gray-700 bg-white shadow-sm hover:shadow-md"
                >
                <div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button id="clear-activities-search" class="hidden p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div class="w-px h-6 bg-gray-200"></div>
                    <svg class="w-5 h-5 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </div>
            <p id="activities-search-status" class="text-sm text-gray-500 mt-3 text-center hidden"></p>
        </div>
        
        <div id="activities-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${LoadingSpinner()}
        </div>
        
        <!-- No Results -->
        <div id="no-activities-results" class="hidden text-center py-16">
            <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">Geen activiteiten gevonden</h3>
            <p class="text-gray-500">Probeer een andere zoekterm</p>
        </div>
    </div>
    `;

    fetchActivities();
    initActivitiesSearch();
}

const fetchActivities = async () => {
    const container = document.getElementById('activities-container');
    
    try {
        const response = await fetch('http://localhost:8000/api/v1/activities/');
        
        if (!response.ok) {
            throw new Error('Kon activiteiten niet ophalen');
        }
        
        const activities = await response.json();
        
        if (activities.length === 0) {
            container.innerHTML = EmptyState("Er zijn nog geen activiteiten gepland.");
            return;
        }
        
        allActivities = activities;
        renderActivities(activities);
        
    } catch (error) {
        console.error('Error fetching activities:', error);
        container.innerHTML = ErrorState("Technische fout bij het laden.", "activities");
    }
}

const renderActivities = (items) => {
    const container = document.getElementById('activities-container');
    const noResults = document.getElementById('no-activities-results');
    
    if (items.length === 0) {
        container.innerHTML = '';
        noResults?.classList.remove('hidden');
        return;
    }
    
    noResults?.classList.add('hidden');
    container.innerHTML = items.map((activity, index) => ActivityCard(activity, index)).join('');
}

const initActivitiesSearch = () => {
    const searchInput = document.getElementById('activities-search');
    const clearBtn = document.getElementById('clear-activities-search');
    const searchStatus = document.getElementById('activities-search-status');
    
    if (!searchInput) return;
    
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        clearBtn?.classList.toggle('hidden', query === '');
        
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (query === '') {
                searchStatus?.classList.add('hidden');
                renderActivities(allActivities);
                return;
            }
            
            const filtered = allActivities.filter(a => 
                a.activity?.toLowerCase().includes(query) ||
                a.locatie?.toLowerCase().includes(query) ||
                a.datum?.toLowerCase().includes(query)
            );
            
            if (searchStatus) {
                searchStatus.textContent = `${filtered.length} ${filtered.length === 1 ? 'resultaat' : 'resultaten'} gevonden`;
                searchStatus.classList.remove('hidden');
            }
            
            renderActivities(filtered);
        }, 200);
    });
    
    clearBtn?.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.classList.add('hidden');
        searchStatus?.classList.add('hidden');
        renderActivities(allActivities);
        searchInput.focus();
    });
}

const ActivityCard = (activity, index = 0) => {
    const icons = {
        pencil: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>`,
        book: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>`,
        microphone: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>`,
        presentation: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>`,
        trophy: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>`,
        users: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>`,
        calendar: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>`
    };

    const iconPath = icons[activity.icon] || icons.calendar;

    return `
    <div class="card-stagger bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition-all duration-500 group border border-gray-100/50 hover:border-cyaan/20" style="--card-index: ${index};">
        <div class="bg-cyaan/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-cyaan/20 group-hover:scale-110 transition-all duration-300">
            <svg class="w-7 h-7 text-cyaan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${iconPath}
            </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2 group-hover:text-cyaan transition-colors duration-300">${activity.activity}</h3>
        <p class="text-gray-600 mb-4">${activity.locatie}</p>
        <div class="flex items-center text-sm text-cyaan">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            ${activity.datum}
        </div>
        <!-- Bottom accent line -->
        <div class="h-1 bg-gradient-to-r from-cyaan to-cyaan/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-4 rounded-full"></div>
    </div>`;
}

export default Activiteiten;
