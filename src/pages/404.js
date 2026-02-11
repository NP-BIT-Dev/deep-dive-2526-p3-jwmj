const Four04 = () => {
    document.title = "Schrijvershoek || 404 Not Found";
    const root = document.getElementById('root');
    root.innerHTML = `
        <div class="four04-container">
            <style>
                .four04-container {
                    --hue: 223;
                    --sat: 10%;
                    --light: #ffffff;
                    --dark: #000000;
                    --trans-dur: 0.3s;
                    color-scheme: light dark;
                    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
                    background-color: var(--light);
                    color: var(--dark);
                    display: grid;
                    place-items: center;
                    height: 100vh;
                    transition: background-color var(--trans-dur), color var(--trans-dur);
                }
                @media (prefers-color-scheme: dark) {
                    .four04-container {
                        background-color: var(--light);
                        color: var(--dark);
                    }
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
                @keyframes eyes {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            </style>
            <main>
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
            </main>
        </div>
    `;
};

export default Four04;
