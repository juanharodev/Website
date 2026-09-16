function createHeader(){
    const header = document.createElement('header');
    header.innerHTML = `
        <p style="font-size: 18px;">Juan Haro</p>
        <nav class="header-navigation">
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </nav>
    `;

    return header;
}

document.body.appendChild(createHeader());