function createFooter(){
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p> &copy; Juan Haro all right reserved ${new Date().getFullYear()}</p>
    `;

    return footer;
}

document.body.appendChild(createFooter());