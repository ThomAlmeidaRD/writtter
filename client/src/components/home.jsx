import Navbar from "./navbar"

function Home() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="container-content">
                    <h1>
                        Sua próxima referência para dev <span>front-end</span>
                    </h1>
                    
                    <p>Professor e Desenvolvedor Front-end com passagens em uma multinacional, com foco em entregar com excelência os resultados ideais, seja muito bem-vindo para conhecer meus projetos e artigos.</p>
                  
                    <section className="tech-links">
                        <ul>
                            <li><ion-icon name="logo-javascript"></ion-icon></li>
                            <li><ion-icon name="logo-react"></ion-icon></li>
                            <li>-</li>
                            <li className="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                                <a
                                    href="#"
                                    target="https://www.linkedin.com/in/thomalmeidard/"
                                >Thomas Almeida</a>
                            </li>
                            <li className="social-link">
                                <ion-icon name="logo-github"></ion-icon>
                                <a
                                    href="https://github.com/ThomAlmeidaRD" target="blank">ThomalmeidaRD</a>
                            </li>
                            <li className="social-link">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                                <a href="#" target="blank">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        </>
    )
}

export default Home