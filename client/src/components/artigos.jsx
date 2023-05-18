import BlogPost from "./blogPost"


function Artigos() {
    return (
        <>
            <main>
                <div className="content">
                    <h1>Relatos sobre Design, Programação e Carreira </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita accusamus illo saepe aliquid, exercitationem id dolor assumenda dicta labore dignissimos nulla, error itaque eligendi! In voluptatibus praesentium nemo nihil.</p>
                    <div className="article-list">
                        <BlogPost
                            title="Como Steve Jobs Influenciou Minha Carreira no Front-end com o Design System da Apple"
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita accusamus illo sae"
                            link="/artigos/artigo-1"
                        />
                            <BlogPost
                            title="Aprenda a começar de vez no Front-end sem se frustrar no caminho"
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita accusamus illo sae"
                            link="/artigos/artigo-2"
                        />
                            <BlogPost
                            title="Como PHP me ajudou a entender React de uma forma muito mais fácil"
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita accusamus illo sae"
                            link="/artigos/artigo-3"
                        />
                            <BlogPost
                            title="O quem vem depois do cargo de Junior ?, falando sobre promoções"
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita accusamus illo sae"
                            link="/artigos/artigo-4"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}


export default Artigos