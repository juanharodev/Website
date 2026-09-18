function createFooter(){
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p> &copy; Juan Haro todos los derechos reservados ${new Date().getFullYear()}</p>
    `;

    return footer;
}

document.body.appendChild(createFooter());