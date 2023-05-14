


function Navbar() {
    return (
        <nav>
            <ul>
                <li id="logo"><ion-icon name="albums"></ion-icon></li>
                <li id="src-field">
                    <input type="text" name="" id="search" placeholder="Pesquise projetos, artigos e +" />
                </li>
                <li id="side-links">
                    <ul>
                        <li>Projetos</li>
                        <li>Artigos</li>
                        <li id="color-mode"><ion-icon name="moon"></ion-icon></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar