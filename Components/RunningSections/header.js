function createHeader(){
    const header = document.createElement('header');
    header.innerHTML = `
        <p style="font-size: 18px;">Juan Haro</p>
        <nav class="header-navigation">
            <a href="/">Inicio</a>
            <a href="/portfolio">Portafolio</a>
        </nav>
    `;

    return header;
}

document.body.appendChild(createHeader());