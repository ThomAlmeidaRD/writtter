


function Navbar() {
    return (
        <nav>
            <ul>
                <li id="logo">
                    <a href="/">
                        <ion-icon name="albums"></ion-icon>
                    </a>
                </li>
                <li id="src-field">
                    <input type="text" name="" id="search" placeholder="Pesquise projetos, artigos e +" />
                </li>
                <li id="side-links">
                    <ul>
                        <li><a href="/">Projetos</a></li>
                        <li><a href="/artigos">Artigos</a></li>
                        <li id="color-mode"><ion-icon name="moon"></ion-icon></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar