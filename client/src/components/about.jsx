import Timeline from './timeline'

function About() {
    return (
        <main>
            <div className="content about">
                <h1>Como me tornei um dev com foco em resultados, conversão e criação de interfaces incríveis?</h1>

                <div>
                    <Timeline
                        year="📅 2019"
                        exp=" Lima Magazine | Estágio em Desenvolvimento Web"
                        desc="
                    Estágio em desenvolimento web em um ecommerce, usando tecnlogias web simples (html, css e js), e fazendo integrações com plataformas de lojas virtuais como a LOJA INTEGRADA
                "
                    />
                    <Timeline
                        year="📅 2020"
                        exp=" StartPro Educação Completa | Professor de Tecnologia e Gestão"
                        desc="Professor de informática, gestão empresarial e desenvolvimento. Enquanto dava aulas, aprimorei minha comunicação e soft skils em times ágeis, realizando aulas e palestras sobre as tecnologias que aprendia e me aprimorava"
                    />
                    <Timeline
                        year="📅 2021"
                        exp=" Grupo Ideal Trends | Desevolvedor Front-End"
                        desc="Desenvolvedor Front-end com foco em SEO, onde minha carreira deslanchou, fazendo com que saísse de Junior para Pleno. Também atuei desenvolvendo ferramentas internas para otimizar o tempo de atividades e processos dos times de produto me tornando referência em JS"
                    />
                    <Timeline
                        year="📅 2023"
                        exp=" Aceitando Propostas"
                        desc="Estudando React e formas de crescer negócios com Growth, busco oportunidades de desenvolvimento front-end que resolvem problemas, apresentam produtos e plataformas com interfaces incríveis focadas em conversão e resultados ideais para os clientes finais!"
                    />
                </div>
            </div>
        </main>

    )
}

export default About