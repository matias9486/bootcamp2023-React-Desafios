export const Mensaje = (props) => {
    const {mensaje} = props;
    return (
        <>            
            <div className="my-3 alert alert-secondary alert-dismissible fade show" role="alert">
                {mensaje}!
            </div>
        </>
    )
}
