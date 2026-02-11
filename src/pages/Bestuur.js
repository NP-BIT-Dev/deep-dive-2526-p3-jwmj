import personen from "../components/personen.js";
const Bestuur = () => {
    document.title = "Schrijvershoek || Bestuur";
    const root = document.getElementById('root');
    root.innerHTML = `
    <div class="bg-cyaan/75 py-40 rounded-b-3xl mb-8">
        <div class="max-w-7xl mx-auto px-4 py-8 flex items-center justify-center">
            <h1 class="text-4xl font-bold text-center text-gray-800 mb-6 my-auto">Schrijvershoek</h1>
        </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Bestuur</h2>
        <div class="rounded-lg p-6 flex items-center justify-between mb-8 max-w-7xl">
            ${ (() => { let result = ''; for(let i = 0; i <= 4; i++) { result += personen(); } return result; })() }
        </div>

        
     </div>
    `;
}

export default Bestuur;