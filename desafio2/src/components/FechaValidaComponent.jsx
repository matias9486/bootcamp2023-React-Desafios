import { useState } from "react";
import { validarFecha } from "../utils/ValidarFecha";
import { Mensaje } from "./Mensaje";


export const FechaValidaComponent = () => {
    const [fecha, setFecha] = useState();    
    const [mensaje, setMensaje] = useState();

    const handler = (fecha) =>{
        setMensaje(validarFecha(fecha));
    };
    
    return (
        <>
            
            <div className="container-fluid col-6">                    
                <h1 className="text-center">Desafío 2</h1>
                <label htmlFor="fecha" className="form-label">Fecha: </label>
                <input type="text" 
                    className="form-control mb-3"
                    name="fecha" 
                    id="fecha" 
                    placeholder="dd/mm/aaaa"                 
                    onChange={(e) => setFecha(e.target.value)}
                />
                <button className="btn btn-primary" onClick={()=> handler(fecha)}>Validar Fecha</button>
                
                {                                 
                    mensaje && 
                        <div>
                            <Mensaje mensaje={mensaje}/>                    
                        </div>
                }                                           
            </div>
        </>
    )
}
