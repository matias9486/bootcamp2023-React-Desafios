import { ExperienciaComponent } from "./ExperienciaComponent";
import thisStyles from './ExperienciaLaboralComponent.module.css';

export const ExperienciaLaboralComponent = ({titulo, experienciaLaboral}) => {

    let experienciaItems = experienciaLaboral.map( (exp) => (
            <ExperienciaComponent
                key={exp.id}
                experiencia={exp}
            />
    ));
                
    return (
        <div>            
            <h3 className={`text-uppercase ${thisStyles.textGrey}`}>{titulo}</h3>
            <hr/>
            {
                experienciaItems
            }   
        </div>        
    )
}
