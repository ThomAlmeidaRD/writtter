function Timeline(props) {
    return (
        <>
            <div className="timeline-item">
                <h3>{props.year}</h3>
                <section className="timeline-info">
                <h4>{props.exp}</h4>
                <p>{props.desc}</p>
                </section>
            </div>
        </>
    )
}

export default Timeline