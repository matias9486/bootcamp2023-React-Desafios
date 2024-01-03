import EducacionItemComponent from "./EducacionItemComponent";

import thisStyles from './EducacionComponent.module.css'

const EducacionComponent = (props) => {
    const {titulo:tituloPrincipal, educacion} = props;
    const {establecimiento, titulo, anio, linkCertificado} = educacion;
    return (
        <div>
            <h3 className={`text-uppercase ${thisStyles.textGrey}`}>{tituloPrincipal}</h3>
            <hr/>
            <EducacionItemComponent establecimiento= {establecimiento}
                        anio = {anio}
                        titulo={titulo}
                        linkCertificado = {linkCertificado}
                        />
        </div>
    )
}

export default EducacionComponent
