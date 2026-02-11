const Header = () => {
    let header = document.querySelector('header');
    if (!header) {
        header = document.createElement('header');
        document.body.insertBefore(header, document.body.firstChild);
    }
    header.innerHTML = `
    <header class="fixed top-5 left-0 w-full z-50 pointer-events-none px-4">
        <div class="max-w-5xl mx-auto">
            <nav class="bg-white rounded-full shadow-xl px-8 py-3 flex justify-between items-center pointer-events-auto border border-gray-100">
                
                <div class="text-2xl font-bold text-brand-dark">
                    LOGO
                </div>

                <ul class="hidden md:flex space-x-2">
                    <li><a href="/" class="px-5 py-2 rounded-full text-gray-600 font-medium hover:bg-brand-light hover:text-brand-green transition-all">Home</a></li>
                    <li><a href="/Nieuws" class="px-5 py-2 rounded-full text-gray-600 font-medium hover:bg-brand-light hover:text-brand-green transition-all">Nieuws</a></li>
                    <li><a href="/Activiteiten" class="px-5 py-2 rounded-full text-gray-600 font-medium hover:bg-brand-light hover:text-brand-green transition-all">Activiteiten</a></li>
                    <li><a href="/Bestuur" class="px-5 py-2 rounded-full text-gray-600 font-medium hover:bg-brand-light hover:text-brand-green transition-all">Bestuur</a></li>
                    <li><a href="/OverOns" class="px-5 py-2 rounded-full text-gray-600 font-medium hover:bg-brand-light hover:text-brand-green transition-all">Over ons</a></li>
                </ul>

                <button id="mobile-menu-btn" class="md:hidden flex flex-col space-y-1.5 p-2 focus:outline-none">
                    <span class="block w-6 h-0.5 bg-gray-800"></span>
                    <span class="block w-6 h-0.5 bg-gray-800"></span>
                    <span class="block w-6 h-0.5 bg-gray-800"></span>
                </button>
            </nav>

            <div id="mobile-nav" class="hidden pointer-events-auto mt-4 mx-auto w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 md:hidden">
                <a href="/" class="block px-6 py-3 border-b border-gray-100 hover:bg-gray-50 text-center">Home</a>
                <a href="/Nieuws" class="block px-6 py-3 border-b border-gray-100 hover:bg-gray-50 text-center">Nieuws</a>
                <a href="/Activiteiten" class="block px-6 py-3 border-b border-gray-100 hover:bg-gray-50 text-center">Activiteiten</a>
                <a href="/Bestuur" class="block px-6 py-3 border-b border-gray-100 hover:bg-gray-50 text-center">Bestuur</a>
                <a href="/OverOns" class="block px-6 py-3 border-b border-gray-100 hover:bg-gray-50 text-center">Over Ons</a>
                <a href="/Contact" class="block px-6 py-3 hover:bg-gray-50 text-center">Contact</a>
            </div>
        </div>
    </header>
    `;

    document.addEventListener('DOMContentLoaded', () => {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileNav = document.getElementById('mobile-nav');

        // Toggle menu functie
        menuBtn.addEventListener('click', () => {
            if (mobileNav.style.display === 'block') {
                mobileNav.style.display = 'none';
            } else {
                mobileNav.style.display = 'block';
            }
        });
    });
};

export default Header;

// <button class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
//                        <span class="icon">&#9776;</span>
//                    </button>