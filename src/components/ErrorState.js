// Funny error messages per category
const funnyMessages = {
    news: [
        "De nieuwsserver is even een bakje koffie halen...",
        "Onze nieuwsduiven zijn verdwaald. We sturen er nieuwe.",
        "De database heeft besloten om een dutje te doen.",
        "Error 418: De server is een theepot en weigert nieuws te serveren.",
        "Het nieuws zit vast in het verkeer. Probeer het zo nog eens.",
        "De hamster in ons serverwieltje is moe. Even geduld."
    ],
    board: [
        "De bestuursleden zijn in vergadering en nemen niet op.",
        "Het bestuur is stiekem op teambuilding. Niemand weet waar.",
        "De bestuursgegevens zijn ontvoerd door aliens. We onderhandelen.",
        "Error 500: Het bestuur is te belangrijk om te laden.",
        "De bestuursfoto's zijn nog bij de kapper.",
        "Bestuursleden.exe werkt niet meer. Probeer opnieuw."
    ],
    activities: [
        "De activiteiten zijn even op vakantie gegaan.",
        "Onze agenda is verdwenen in een zwart gat.",
        "De activiteitenserver speelt zelf een activiteit: verstoppertje.",
        "Error 404: Activiteiten not found. Net als mijn motivatie.",
        "De planning is in de was. Binnenkort weer beschikbaar.",
        "De activiteiten zijn stiekem al afgelopen. Of begonnen. We weten het niet meer."
    ],
    default: [
        "Er ging iets mis. De schuld ligt volledig bij de stagiair.",
        "Houston, we hebben een probleem. En het is niet de server.",
        "De bits en bytes zijn even de weg kwijt.",
        "Error: Iets is kapot. Wat? Geen idee. Waarom? Ook geen idee.",
        "De server doet moeilijk. Net als altijd eigenlijk.",
        "Dit was niet de bedoeling. Excuses namens de IT-afdeling."
    ]
};

const getRandomFunnyMessage = (category = 'default') => {
    const messages = funnyMessages[category] || funnyMessages.default;
    return messages[Math.floor(Math.random() * messages.length)];
};

const ErrorState = (message, category = 'default', retryAction = "location.reload()") => {
    const funnyMessage = getRandomFunnyMessage(category);
    
    return `
    <div class="col-span-full text-center py-12">
        <div class="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
        </div>
        <p class="text-gray-700 text-lg font-medium mb-2">${funnyMessage}</p>
        <p class="text-gray-500 text-sm mb-6">${message}</p>
        <button onclick="${retryAction}" class="bg-cyaan hover:bg-cyaan/80 text-white font-medium py-2.5 px-6 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md">
            Probeer opnieuw
        </button>
    </div>`;
}

export default ErrorState;
export { getRandomFunnyMessage };
