import Project from "./project"


function Home() {
    return (
        <>

            <div className="container">
                <div className="container-content">


                    <div className='presentation'>



                        <h2 id='name'>Thomas Almeida</h2>
                        <h1 id='title'>
                            <h1>Um Desenvolvedor</h1>
                            <span>front-end</span>
                            <h1 id="with">com</h1>
                        </h1>


                        <p>Passagens em uma multinacional, com foco em entregar com excelência os resultados ideais, seja muito bem-vindo para conhecer meus projetos e artigos.</p>

                        <section className="tech-links">
                            <ul>
                                <li className="hide-mobile"><ion-icon name="logo-javascript"></ion-icon></li>
                                <li className="hide-mobile"><ion-icon name="logo-react"></ion-icon></li>
                                <li className="hide-mobile"><ion-icon name="logo-html5"></ion-icon></li>
                                <li className="hide-mobile"><ion-icon name="logo-css3"></ion-icon></li>
                                <li className="hide-mobile"><ion-icon name="logo-figma"></ion-icon></li>
                                <li className="hide-mobile">|</li>
                                <li className="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                    <a
                                        href="#"
                                        target="https://www.linkedin.com/in/thomalmeidard/"
                                    >Thom Almeida</a>
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


                    <ion-icon name="chevron-down" id="down"></ion-icon>


                    <h3 id="prj">Projetos</h3>
                    <div className='projects' id="projetos">
                        <Project
                            print="https://github.com/ThomAlmeidaRD/Meu-Time/blob/main/meu-time/public/shots.png?raw=true"
                            name="Meu Time (Teste de Front-End)"
                            desc="Aplicativo Web que fiz recentemente para um teste de vaga front-end que lista estatísticas e informações de times e ligas do mundo todo, usando API do API-Football"
                            langs="React, ChartJS, Vercel"
                            url="https://meu-time-lemon.vercel.app"
                        />
                        <Project
                            print='https://github.com/ThomAlmeidaRD/beka/blob/main/shots.png?raw=true'
                            name="Beka"
                            desc="App de tarefas feito para minha namorada, usando o banco de dados direto do navegador (IndexDB) com o pacote npm Deexie.js"
                            langs="React, Deexie.js & Vercel"
                            url = "https://beka.vercel.app"
                        />
                        <Project
                            print="https://github.com/ThomAlmeidaRD/ecommerce-js/blob/main/589shots_so.png?raw=true"
                            name="Javascritp Ecommerce "
                            desc="Ecommerce feito com React, com a proposta de ter rotas e outras funcionalidades de um ecommerce porém sem a forma convecional que eu realizava antes"
                            langs="React, Vercel"
                            url="https://ecommerce-js-five.vercel.app"
                        />
                        <Project
                            print="https://github.com/ThomAlmeidaRD/version-evolved-kanban/blob/main/160shots_so.png?raw=true"
                            name="Version Kanbam"
                            desc="Um app de kanbam com interações e realização de tarefas, feito para ser um extensão do desafio: Bora codar da Rocketseat"
                            langs="JavaScript, Github Pages"
                            url="https://thomalmeidard.github.io/version-evolved-kanban/"

                        />


                        <Project
                            print="https://github.com/ThomAlmeidaRD/audioemtexto.com.br/blob/main/766shots_so.png?raw=true"
                            name="Audio em Texto"
                            desc="App que converte audio do microfone em texto que pode ser copiado para a área de transferência, usando a API do Google Chrome"
                            langs="JavaScript, php"
                            url="https://github.com/ThomAlmeidaRD/audioemtexto.com.br"
                        />
                        <Project
                            print="https://github.com/ThomAlmeidaRD/Huuro/blob/main/96shots_so.png?raw=true"
                            name="Huuro"
                            desc="Huuro é um site que calcula conta de luz baseada nos valores em KWh gastos durante o mês, usei a base de cálculos da ENEL aqui da capital de SP"
                            langs="JavaScript, Github Pages"
                            url="https://thomalmeidard.github.io/Huuro/"
                        />
                        <Project
                            print="https://github.com/ThomAlmeidaRD/Pomodoro-Music-Clock/blob/main/312shots_so.png?raw=true"
                            name="Pomodoro Music Clock"
                            desc="Pomodoro que tem um music player, esse foi um dos meus projetos mais difíceis na época que estava começando a aprender e aperfeiçoar JavaScript, mas foi muito divertido e realaizador de terminar"
                            langs="JavaScript"
                            url="https://thomalmeidard.github.io/Pomodoro-Music-Clock/"
                        />

                    </div>



                </div>
            </div>
        </>
    )
}

export default Home