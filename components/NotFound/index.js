import {useParams } from "react-router-dom";


const NotFound = () => {
    let { eventKey } = useParams();
    return(
        <div className="notfound">
            <h1>404 Error Page</h1>
            <p className="zoom-area">Página não encontrada </p>
            <section className="error-container">
                <span>4</span>
                <span><span className="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <div className="link-container">
                <a target="_blank" href={`/${eventKey}`} rel="noreferrer" className="more-link">Visite o site original</a>
                <p>Certifique-se que o endereço foi digitado corretamente e tente novamente ou entre em contato com o suporte.</p>
            </div>
        </div>
    );
}

export default NotFound;