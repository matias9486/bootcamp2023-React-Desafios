import thisStyles from './MiCVComponent.module.css';
import EducacionComponent from '../Educacion/EducacionComponent.jsx'
import {DatosPersonalesComponent} from '../DatosPersonales/DatosPersonalesComponent.jsx';
import { ExperienciaLaboralComponent } from '../ExperienciaLaboral/ExperienciaLaboralComponent.jsx';
import { SobreMiComponent } from '../SobreMi/SobreMiComponent.jsx';
import { FotoComponent } from '../Foto/FotoComponent.jsx';
import {datosPersonales, sobreMi, educacion, experienciaLaboral} from '../../utils/data.js';

export const MiCVComponent = () => {    
    
    return (
        <>
            <div className={`${thisStyles.bgBlue} py-3 ps-5 text-uppercase`}>
                <h1 className='display-5 fw-bold'>Abel Matias Alancay</h1>
                <h2>Desarrollador Trainee</h2>
            </div>
            
            <div className='row d-flex flex-md-row-reverse'>            
                <div className={`col-md-5 ${thisStyles.bgWhite} position-relative py-3 px-5`}>
                    <div>
                        <FotoComponent/>
                    </div>

                    <div className={`${thisStyles.containerDesplazado}`}>
                        <SobreMiComponent titulo ='Sobre mi' sobreMi = {sobreMi}/>
                    </div>
                    
                    <div className={`${thisStyles.datosPersonales} my-3`}>
                        <DatosPersonalesComponent titulo="Datos Personales" datos={datosPersonales}/>
                    </div>
                </div>

                <div className={`col-md-7 ${thisStyles.bgGrey} py-3 px-5`}>
                    <div className={thisStyles.formacion}>                
                        <EducacionComponent titulo='Educación' educacion = {educacion}>                    
                        </EducacionComponent>
                    </div>
                    
                    <div className={thisStyles.experienciaLaboral}>
                        <ExperienciaLaboralComponent titulo="Experiencia Laboral" experienciaLaboral={experienciaLaboral}/>
                    </div>
                </div>
                                
            </div>
        </>
    )
}
