const Lidmaatschappen = () => {
    return `
        <div class="max-w-7xl mx-auto px-4 py-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">${lidmaatschapNaam}</h2>
            <p class="text-gray-600 text-lg mb-6 text-center">${lidmaatschapBeschrijving}</p>
            <div class="flex flex-col md:flex-row items-center justify-center gap-6">
                <div class="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Voordelen</h3>
                    <ul class="list-disc list-inside text-gray-600">
                        ${voordelen.map(voordeel => `<li>${voordeel}</li>`).join('')}
                    </ul>
                </div>
                <div class="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Kosten</h3>
                    <p class="text-gray-600 text-lg">${lidmaatschapKosten}</p>
                </div>
                <div class="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Aanmelden</h3>
                    <a href="${aanmeldLink}" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Meld je aan</a>
                </div>
            </div>
        </div>`;
}

export default Lidmaatschappen;

