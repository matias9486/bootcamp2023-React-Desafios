export const ExperienciaComponent = ( {experiencia} ) => {

    const {id, lugar, puesto, fecha, tareas} = experiencia;
    const titulo = lugar? `${lugar}. ${puesto} (${fecha})` : `${puesto} (${fecha})`;
    
    let items = tareas;
    items = items.map((element, i) => <li key={i}>{element}</li>);

    return (        
        <>  
            <div>
                <h4>{titulo}</h4>                
                <ul>
                    {items}
                </ul>
            </div>
        </>
    )
}
