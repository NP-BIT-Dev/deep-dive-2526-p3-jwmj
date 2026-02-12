const Four04 = () => {
    document.title = "Schrijvershoek || 404 Not Found";
    const root = document.getElementById('root');
    
    // 5% chance of special error message
    const specialMessages = [
        { title: "Error 418", subtitle: "I'm a teapot", desc: "De server weigert koffie te zetten omdat het een theepot is." },
        { title: "Error 451", subtitle: "Unavailable for Legal Reasons", desc: "Deze pagina is verwijderd op last van de Dorpsvereniging Geheime Dienst." },
        { title: "Error 503", subtitle: "Service Unavailable", desc: "De hamster die onze server aandrijft is even pauze aan het nemen." },
        { title: "Error 666", subtitle: "Cursed Page", desc: "Je hebt een vervloekte pagina gevonden. Veel geluk!" },
        { title: "Error 42", subtitle: "Life, Universe & Everything", desc: "Je vroeg de verkeerde vraag. Probeer het nog eens over 7,5 miljoen jaar." }
    ];
    
    const isSpecial = Math.random() < 0.05;
    const special = isSpecial ? specialMessages[Math.floor(Math.random() * specialMessages.length)] : null;
    
    const errorTitle = special ? special.title : "404";
    const errorSubtitle = special ? special.subtitle : "Pagina niet gevonden";
    const errorDesc = special ? special.desc : "De pagina die je zoekt bestaat helaas niet.";
    
    root.innerHTML = `
        <div class="four04-container">
            <style>
                .four04-container {
                    --trans-dur: 0.3s;
                    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
                    background-color: #ffffff;
                    color: #000000;
                    display: grid;
                    place-items: center;
                    height: 100vh;
                }
                .four04-container main {
                    padding: 1.5em 0;
                }
                .four04-container .face {
                    display: block;
                    width: 12em;
                    height: auto;
                }
                .four04-container .face__eyes,
                .four04-container .face__eye-lid,
                .four04-container .face__mouth-left,
                .four04-container .face__mouth-right,
                .four04-container .face__nose,
                .four04-container .face__pupil {
                    animation: eyes 1s 0.3s cubic-bezier(0.65, 0, 0.35, 1) forwards;
                }
                .four04-container .face__eye-lid,
                .four04-container .face__pupil {
                    animation-duration: 4s;
                    animation-delay: 1.3s;
                    animation-iteration-count: infinite;
                }
                .four04-container .face__eye-lid {
                    animation-name: eye-lid;
                }
                .four04-container .face__mouth-left,
                .four04-container .face__mouth-right {
                    animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
                }
                .four04-container .face__mouth-left {
                    animation-name: mouth-left;
                }
                .four04-container .face__mouth-right {
                    animation-name: mouth-right;
                }
                .four04-container .face__nose {
                    animation-name: nose;
                }
                .four04-container .face__pupil {
                    animation-name: pupil;
                }

                /* Animations */
                @keyframes eye-lid {
                    from,
                    40%,
                    45%,
                    to {
                        transform: translateY(0);
                    }
                    42.5% {
                        transform: translateY(17.5px);
                    }
                }
                @keyframes eyes {
                    from {
                        transform: translateY(112.5px);
                    }
                    to {
                        transform: translateY(15px);
                    }
                }
                @keyframes pupil {
                    from,
                    37.5%,
                    40%,
                    45%,
                    87.5%,
                    to {
                        stroke-dashoffset: 0;
                        transform: translate(0, 0);
                    }
                    12.5%,
                    25%,
                    62.5%,
                    75% {
                        stroke-dashoffset: 0;
                        transform: translate(-35px, 0);
                    }
                    42.5% {
                        stroke-dashoffset: 35;
                        transform: translate(0, 17.5px);
                    }
                }
                @keyframes mouth-left {
                    from,
                    50% {
                        stroke-dashoffset: -102;
                    }
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                @keyframes mouth-right {
                    from,
                    50% {
                        stroke-dashoffset: 102;
                    }
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                @keyframes nose {
                    from {
                        transform: translate(0, 0);
                    }
                    to {
                        transform: translate(0, 22.5px);
                    }
                }
            </style>
            <main>
                ${special ? `
                    <div class="text-center p-8">
                        <div class="text-8xl mb-4 font-black text-gray-300">X_X</div>
                        <h1 class="text-6xl font-black text-cyaan mb-2">${errorTitle}</h1>
                        <h2 class="text-2xl font-bold text-gray-600 mb-4">${errorSubtitle}</h2>
                        <p class="text-gray-500 mb-8">${errorDesc}</p>
                        <a href="#/" class="px-6 py-3 bg-cyaan text-white font-bold rounded-xl hover:bg-cyaan/80 transition-all">Terug naar Home</a>
                    </div>
                ` : `
                <svg class="face" viewBox="0 0 320 380" width="320px" height="380px" aria-label="A 404 becomes a face, looks to the sides, and blinks. The 4s slide up, the 0 slides down, and then a mouth appears.">
                    <g fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="25">
                        <g class="face__eyes" transform="translate(0, 112.5)">
                            <g transform="translate(15, 0)">
                                <polyline class="face__eye-lid" points="37,0 0,120 75,120" />
                                <polyline class="face__pupil" points="55,120 55,155" stroke-dasharray="35 35" />
                            </g>
                            <g transform="translate(230, 0)">
                                <polyline class="face__eye-lid" points="37,0 0,120 75,120" />
                                <polyline class="face__pupil" points="55,120 55,155" stroke-dasharray="35 35" />
                            </g>
                        </g>
                        <rect class="face__nose" rx="4" ry="4" x="132.5" y="112.5" width="55" height="155" />
                        <g stroke-dasharray="102 102" transform="translate(65, 334)">
                            <path class="face__mouth-left" d="M 0 30 C 0 30 40 0 95 0" stroke-dashoffset="-102" />
                            <path class="face__mouth-right" d="M 95 0 C 150 0 190 30 190 30" stroke-dashoffset="102" />
                        </g>
                    </g>
                </svg>
                `}
            </main>
        </div>
    `;
};

export default Four04;
