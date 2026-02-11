import Home from "./pages/home.js";
import Bestuur from "./pages/Bestuur.js";
import Nieuws from "./pages/nieuws.js";
import OverOns from "./pages/OverOns.js";
import Activiteiten from "./pages/Activiteiten.js";
import Contact from "./pages/contact.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";

// Routing en pagina rendering
const routes = {
    '': renderHome,
    'Home': renderHome,
    'Contact': renderContact,
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

function renderContact() {
    const app = document.getElementById('root');
    if (!app) {
        app = document.createElement('main');
        app.id = 'root';
        document.body.appendChild(app);
    }
    app.innerHTML = '';
    Contact();
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
    app.innerHTML = '<h1>404</h1><p>Page not found.</p>';
}

function router() {
    const raw = location.hash || '#/';
    const name = raw.replace(/^#\/?/, '');
    const fn = routes[name] || routes['404'];
    fn();
}

window.addEventListener('hashchange', router);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="/"]').forEach(a => {
        const href = a.getAttribute('href');
        const cleaned = href.replace(/^\//, '');
        a.setAttribute('href', '#/' + cleaned);
    });
    router();
});