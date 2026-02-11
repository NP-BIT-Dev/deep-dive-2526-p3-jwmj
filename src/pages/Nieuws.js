const Nieuws = () => {
    document.title = "Schrijvershoek || Nieuws";
    const root = document.getElementById('root');
    root.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 py-8">
        <h1>Welkom bij de Schrijvershoek!</h1>
        <p>Nieuws content</p>
    </div>`;
}
export default Nieuws;
