import Home from "./pages/Home.js";
import Bestuur from "./pages/Bestuur.js";
import Nieuws from "./pages/nieuws.js";
import OverOns from "./pages/OverOns.js";
import Activiteiten from "./pages/Activiteiten.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Four04 from "./pages/404.js";

// Routing en pagina rendering
const routes = {
    '': renderHome,
    'Home': renderHome,
    'Bestuur': renderBestuur,
    'Nieuws': renderNieuws,
    'Activiteiten': renderActiviteiten,
    'OverOns': renderOverOns,
    '404': renderNotFound
};


const root = document.getElementById('root');

Header();
Footer();

function renderHome() {
    const app = document.getElementById('root');
    if (!app) {
        app = document.createElement('main');
        app.id = 'root';
        document.body.appendChild(app);
    }
    app.innerHTML = '';
    Home();
}

function renderBestuur() {
    const app = document.getElementById('root');
    if (!app) {
        app = document.createElement('main');
        app.id = 'root';
        document.body.appendChild(app);
    }
    app.innerHTML = '';
    Bestuur();
}

function renderNieuws() {
    const app = document.getElementById('root');
    if (!app) {
        app = document.createElement('main');
        app.id = 'root';
        document.body.appendChild(app);
    }
    app.innerHTML = '';
    Nieuws();
}

function renderOverOns() {
    const app = document.getElementById('root');
    if (!app) {
        app = document.createElement('main');
        app.id = 'root';
        document.body.appendChild(app);
    }
    app.innerHTML = '';
    OverOns();
}

function renderActiviteiten() {
    const app = document.getElementById('root');
    if (!app) {
        app = document.createElement('main');
        app.id = 'root';
        document.body.appendChild(app);
    }
    app.innerHTML = '';
    Activiteiten();
}

function renderNotFound() {
    const app = document.getElementById('root');
    if (!app) {
        app = document.createElement('main');
        app.id = 'root';
        document.body.appendChild(app);
    }
    app.innerHTML = '';
    Four04();
}

function router() {
    const raw = location.hash || '#/';
    const name = raw.replace(/^#\/?/, '');
    const fn = routes[name] || routes['404'];
    fn();
}

window.addEventListener('hashchange', router);

// Console message
console.log('%c[Schrijvershoek] Samen maken we ons dorp!', 'color: #0a705e; font-size: 16px; font-weight: bold;');
console.log('%cHeb je interesse in webontwikkeling? Neem contact op via het contactformulier!', 'color: #666; font-size: 12px;');

// Konami Code Easter Egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Konami code complete!
            triggerKonamiEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function triggerKonamiEasterEgg() {
    // Create epic confetti
    const colors = ['#0a705e', '#9c2f2f', '#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#7B68EE', '#32CD32'];
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: -20px;
                width: ${Math.random() * 15 + 5}px;
                height: ${Math.random() * 15 + 5}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                pointer-events: none;
                z-index: 9999;
                animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
            `;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }, i * 20);
    }
    
    // Show special message
    const toast = document.createElement('div');
    toast.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyaan to-bruin rounded-3xl shadow-2xl p-8 z-[9999] text-white text-center';
    toast.style.animation = 'bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    toast.innerHTML = `
        <div class="text-6xl mb-4 font-black">!!!</div>
        <h2 class="text-2xl font-bold mb-2">Buurtfeest ontgrendeld!</h2>
        <p class="text-lg opacity-90">Welkom bij de geheime club</p>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="/"]').forEach(a => {
        const href = a.getAttribute('href');
        const cleaned = href.replace(/^\//, '');
        a.setAttribute('href', '#/' + cleaned);
    });
    router();
});