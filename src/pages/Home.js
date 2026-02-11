import Lidmaatschappen from "../components/lidmaatschappen.js";

const Home = (app) => {
    document.title = "Schrijvershoek || Home";
    const root = document.getElementById('root');
    root.innerHTML = `
    <div class="bg-cyaan/75 py-40 rounded-b-3xl mb-8">
        <div class="max-w-7xl mx-auto px-4 py-8 flex items-center justify-center">
            <h1 class="text-4xl font-bold text-center text-gray-800 mb-6 my-auto">Schrijvershoek</h1>
        </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Home</h2>
        <div class="rounded-lg p-6 flex items-center justify-center mb-8">
            <div class="flex items-center justify-center bg-gray-100 rounded-lg w-1/2 min-h-87">
                <p>placeholder</p>
            </div>
            <div class="ml-6 w-1/2 flex flex-col justify-between">
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
        <div class="rounded-lg p-6 flex items-center justify-center mb-8">
            ${Lidmaatschappen()}
        </div>
    </div>
    `;
}

export default Home;