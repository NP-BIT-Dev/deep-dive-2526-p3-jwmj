const Lidmaatschappen = (lidmaatschapNaam, lidmaatschapBeschrijving, lidmaatschapKosten, voordelen, aanmeldLink) => {
    const safeNaam = (typeof lidmaatschapNaam === 'string' ? lidmaatschapNaam : String(lidmaatschapNaam ?? 'lidmaatschap'));
    const modalId = `aanmelden-${safeNaam.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
    return `
        <div class="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center justify-center bg-white shadow-lg rounded-3xl">
            <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">${safeNaam}</h2>
            <p class="text-gray-600 text-lg mb-6 text-center">${lidmaatschapBeschrijving}</p>
            <div class="flex flex-col items-center justify-center gap-6">
                <div class="p-2 w-full text-center">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Voordelen</h3>
                    <ul class="list-none text-gray-600 text-lg">
                        ${voordelen.map(voordeel => `<li>${voordeel}</li>`).join('')}
                    </ul>
                </div>
                <div class="p-2 w-full">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Aanmelden voor ${lidmaatschapKosten}</h3>
                    <button type="button" class="inline-block bg-cyaan text-white px-4 py-2 rounded-3xl hover:bg-cyaan/90 transition w-full" onclick="document.getElementById('${modalId}').classList.remove('hidden')">
                        Meld je aan
                    </button>
                </div>
            </div>
            <div id="${modalId}" class="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/50" role="dialog" aria-modal="true" aria-label="Aanmeldformulier">
                <div class="bg-white w-full max-w-lg rounded-3xl shadow-xl p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h4 class="text-xl font-semibold text-gray-800">Aanmelden voor ${lidmaatschapKosten}</h4>
                        <button type="button" class="text-gray-500 hover:text-gray-700" aria-label="Sluit" onclick="document.getElementById('${modalId}').classList.add('hidden')">&times;</button>
                    </div>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Aanmelding verstuurd!'); document.getElementById('${modalId}').classList.add('hidden');">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1" for="${modalId}-naam">Naam</label>
                            <input id="${modalId}-naam" type="text" name="naam" required class="w-full rounded-3xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyaan/50" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1" for="${modalId}-email">E-mail</label>
                            <input id="${modalId}-email" type="email" name="email" required class="w-full rounded-3xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyaan/50" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1" for="${modalId}-iban">Bankgegevens (IBAN)</label>
                            <input id="${modalId}-iban" type="text" name="iban" placeholder="NL00BANK0123456789" required class="w-full rounded-3xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyaan/50" />
                        </div>
                        <div class="flex items-center justify-end gap-3 pt-2">
                            <button type="button" class="px-4 py-2 rounded-3xl border border-gray-300 text-gray-700 hover:bg-gray-50" onclick="document.getElementById('${modalId}').classList.add('hidden')">Annuleer</button>
                            <button type="submit" class="px-4 py-2 rounded-3xl bg-blue-500 text-white hover:bg-blue-600">Verstuur</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;
}

export default Lidmaatschappen;

