const Bestuur = () => {
    document.title = "Schrijvershoek || Bestuur";
    const root = document.getElementById('root');
    root.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h1>Welkom bij de Schrijvershoek!</h1>
        <p>Bestuur content</p>
    </div>
    `;
}

export default Bestuur;