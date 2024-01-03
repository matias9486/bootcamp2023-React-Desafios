const EducacionItemComponent = (props) => {
    const {establecimiento, anio, titulo, linkCertificado } = props;
    
    return (
        <div>
            <h4>{establecimiento} {anio}</h4>
            {
                linkCertificado?
                    <p>{titulo}<a href={`${linkCertificado}`}>(ver certificado)</a></p> :
                    <p>{titulo}</p>
            }            
        </div>
    )
}

export default EducacionItemComponent