function Project(props){
    return(
        <div className="project">
            <img src={props.print} alt="imagem de portfolio" />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <ul>
                <li>{props.langs}</li>
            </ul>
        </div>
    )
}


export default Project