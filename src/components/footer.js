const Footer = () => {
    let footer = document.getElementById('footer');
    if (!footer) {
        footer = document.createElement('div');
        footer.id = 'footer';
        document.body.appendChild(footer);
    }
    footer.classList.add('mt-auto', 'bg-gray-200', 'text-gray-700', 'py-4', 'rounded-t-3xl');
    footer.innerHTML = `
        <div class="max-w-7xl text-left text-sm py-4 flex justify-around mx-auto">
            <list>
                <ul><h3>Contact</h3></ul>
                <ul>Email Address: <a href="mailto:temp@mail.com">temp@mail.com</a></ul>
                <ul>Adress: </ul>
                <ul>Social Media:</ul>
            </list>
            <list>
                <ul><a href="/">Home</a></ul>
                <ul><a href="/Bestuur">Bestuur</a></ul>
                <ul><a href="/Nieuws">Nieuws</a></ul>
                <ul><a href="/OverOns">Over ons</a></ul>
                <ul><a href="/Activiteiten">Activiteiten</a></ul>
            </list>
            <list>
                <ul><h3>Sponsors</h3></ul>
                <ul>A</ul>
                <ul>B</ul>
                <ul>C</ul>
            </list>
        </div>
    `;
}

export default Footer;
