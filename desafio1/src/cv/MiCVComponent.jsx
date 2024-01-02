import thisStyles from './MiCVComponent.module.css';
import EducacionComponent from './EducacionComponent.jsx'
import { DatosPersonalesComponent } from './DatosPersonalesComponent.jsx';
import { ExperienciaLaboralComponent } from './ExperienciaLaboralComponent.jsx';
import { SobreMiComponent } from './SobreMiComponent.jsx';
import { FotoComponent } from './FotoComponent.jsx';

export const MiCVComponent = () => {    
    const datosPersonales = {
        email:"matias9486mdp@gmail.com ",
        celular:"+542235943972 ",
        github:"https://github.com/matias9486",
        portfolio:"https://matias-portfolio.netlify.app/",
        linkedin:"https://www.linkedin.com/in/matias-alancay/",
        lugar:"Mar del Plata, Buenos Aires"
    }

    const sobreMi = 'Estudiante de tecnología con ganas de empezar a trabajar como desarrollador en una empresa donde pueda aprender y crecer profesionalmente.';
    
    const educacion = {                
        establecimiento:'UTN San Rafael, Mendoza',
        titulo: 'Tecnicatura Universitaria en Programacion. Finalizando 2º Año (último)',
        anio: '(2022 - 2023)'        
    }
    
    const experienciaLaboral = 
        [
            {
                id:4,
                lugar: null,
                puesto: "Servicio Técnico Particular",
                fecha:"2015 - Hasta la fecha",
                tareas: ["Diagnóstico de problemas y resolución", "Instalación, mantenimiento y actualización de Software y Hardware"]
            },
            {
                id:3,
                lugar:"Universidad FASTA",
                puesto: "Soporte Técnico ",
                fecha:"2014 - 2015",
                tareas: ["Asistencia a Docentes y Personal de la Universidad" ,"Diagnóstico de problemas y resolución" ,"Instalación, mantenimiento y actualización de Software y Hardware", "Trabajo en equipo para realizar tareas"]
            },
            {
                id:2,
                lugar:"Universidad FASTA",
                puesto: "Auxiliar de Laboratorios",
                fecha:"2011 - 2015",
                tareas: ["Mantenimiento y control de Laboratorios de Informática", "Asistencia a Docentes y Alumnos", "Diagnóstico de problemas y resolución", "Instalación, mantenimiento y actualización de Software y Hardware", "Trabajo en equipo para realizar tareas"]
            },
            {
                id:1,
                lugar:"Universidad FASTA",
                puesto: "Voluntario (Dpto Informática)",
                fecha:"2008 - 2011",
                tareas: ["Mantenimiento y control de Laboratorios de Informática", "Asistencia a Docentes y Alumnos", "Diagnóstico de problemas y resolución", "Instalación, mantenimiento y actualización de Software y Hardware", "Trabajo en equipo para realizar tareas"]
            }
        ];
    
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
