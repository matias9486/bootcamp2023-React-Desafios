import thisStyles from './DatosPersonalesComponent.module.css';

export const DatosPersonalesComponent = ({titulo, datos}) => {
    const {email,celular,github,portfolio,linkedin,lugar} = datos;
    return (
        <div>
            <h3 className={`text-uppercase ${thisStyles.textGrey}`}>{titulo}</h3>
            <hr/>
            <div>            
                <p><a href={`mailto:${email}`}> <i className="bi bi-envelope-fill"></i> {email}</a></p>
                <p><a href={`tel:${celular}`}> <i className="bi bi-telephone-fill"></i> {celular}</a></p>
                <p><a href={github}> <i className="bi bi-github"></i> {github}</a> </p>
                <p><a href={portfolio}> <i className="bi bi-file-code-fill"></i> {portfolio}</a></p>
                <p><a href={linkedin}> <i className="bi bi-linkedin"></i> {linkedin}</a> </p>
                <p><i className="bi bi-geo-alt-fill"></i> {lugar}</p>
            </div>
        </div>        
    )
}
