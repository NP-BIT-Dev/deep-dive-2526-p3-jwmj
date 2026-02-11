import Lidmaatschappen from "../components/lidmaatschappen.js";

const Home = (app) => {
    document.title = "Schrijvershoek || Home";
    const root = document.getElementById('root');
    root.innerHTML = `
    <div class="bg-cyaan/75 py-40 rounded-b-3xl mb-8">
        <div class="max-w-7xl md:mx-auto px-4 py-8 flex items-center justify-center">
            <h1 class="text-4xl font-bold text-center text-gray-800 mb-6 my-auto">Schrijvershoek</h1>
        </div>
    </div>
    <div class="max-w-7xl  md:mx-auto px-4 py-2 md:py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Home</h2>
        <div class="rounded-3xl p-2 flex md:flex-row flex-col items-center justify-center mb-8">
            <div class="flex items-center justify-center bg-gray-100 rounded-3xl w-4/5 md:w-1/2 min-h-87 order-2 md:order-1 mb-6 md:mb-0">
                <p>placeholder</p>
            </div>
            <div class="ml-6 w-4/5 md:w-1/2 flex flex-col justify-between order-1 md:order-2">
                <div class="flex items-center justify-center h-32 w-full bg-gray-100 rounded-lg mb-4">
                    <p>placeholder</p>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Welkom bij Schrijvershoek!</h3>
                <p class="text-gray-600 mb-4">Schrijvershoek is een platform voor schrijvers en lezers om samen te komen, verhalen te delen en inspiratie op te doen. Of je nu een beginnende schrijver bent of een doorgewinterde auteur, hier vind je een gemeenschap van gelijkgestemde mensen die hun passie voor schrijven delen.</p>
                <p class="text-gray-600">Doe mee aan discussies, deel je werk, en ontdek nieuwe verhalen van andere schrijvers. Schrijvershoek is de plek waar creativiteit bloeit en verhalen tot leven komen.</p>
            </div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Lidmaatschappen</h2>
        <div class="rounded-3xl p-6 flex md:flex-row flex-col items-center justify-center mb-8">
            ${ (() => { let result = ''; for(let i = 0; i <= 2; i++) { result += Lidmaatschappen(i, "Beschrijving van lidmaatschap " + i, "€10 per maand", ["Voordeel 1", "Voordeel 2", "Voordeel 3"], "#"); } return result; })() }
        </div>
    </div>
    `;
}

export default Home;