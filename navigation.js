const links = [
    '<a href="index.html">Home</a>',
    '<a href="menu.html">Menu</a>',
    '<a href="history.html">History</a>',
    '<a href="about.html">About Us</a>'
]

const navigation = (page) => {
    const container = document.getElementById('navigation')

    let build = ''
    for (let i = 0; i < 4; i++) {
        // if (i != page)
        build += links[i]
    }
    container.innerHTML = build
}