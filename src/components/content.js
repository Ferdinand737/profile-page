export default function Content(props) {
    return (
        <div className="content">
            <div className="content-inner">
                {
                    props.title &&
                    <h1 className="content-title">
                        {props.title}
                    </h1>
                }
                <hr></hr>
                {props.children}
                <hr></hr>

                <footer className="footer">
                    © Ferdinand Haaben {new Date().getFullYear()}
                </footer>
            </div>
        </div>
    )
}