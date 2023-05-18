function BlogPost(props) {
    return (
        <div className="blogpost">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <a href={props.link}>Ler artigo</a>
        </div>
    )
}


export default BlogPost