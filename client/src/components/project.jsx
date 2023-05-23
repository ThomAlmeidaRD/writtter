
function Project(props) {

    const handleLink = (project) => {
        window.open(project.currentTarget.childNodes[3].href, 'blank')
    }

    return (
        <div className="project" onClick={handleLink}>
            <img src={props.print} alt="imagem de portfolio" draggable="false" />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <a href={props.url} target="blank"></a>
            <ul>
                <li>{props.langs}</li>
            </ul>
        </div>
    )
}


export default Project