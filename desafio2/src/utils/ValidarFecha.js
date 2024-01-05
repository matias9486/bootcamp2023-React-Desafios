const validarFormato = (fecha) => {
    const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;    
    return regexFecha.test(fecha);
}

const descomponerFecha = (fecha) => {
    const fechaArray = fecha.split("/");

    const dia = parseInt(fechaArray[0]);
    const mes = parseInt(fechaArray[1]);
    const anio = parseInt(fechaArray[2]);

    return {dia, mes, anio};
}

const validarAnio = (anio) => {
    return (anio >= 1900 && anio <= 2099);
}

const validarMes = (mes) => {
    return (mes >= 1 && mes <= 12);
}

const comprobarAnioBisiesto = (anio) => {
    return ((anio % 4 == 0) && (anio % 100 != 0 || (anio % 100 == 0 && anio % 400 == 0)));
}

const validarDia = (dia, mes, anio) => {
    let diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (comprobarAnioBisiesto(anio)) 
        diasDelMes[1] = 29;

    return (dia > 0 && dia <= diasDelMes[mes - 1]);
}
export const validarFecha = (fecha) => {			    
    if (!validarFormato(fecha))
        return "Formato de fecha incorrecto. Ingrese dd/mm/aaaa";
    
    const {dia, mes, anio } = descomponerFecha(fecha);

    if(validarAnio(anio) === false)
        return "Año incorrecto. Ingrese año desde 1900 hasta 2099";

    if(validarMes(mes) ===false)
        return "Mes incorrecto. Ingrese mes desde 1 hasta 12";
            
    return validarDia(dia,mes,anio)? 'Fecha correcta' : 'Día incorrecto. Ingrese día acorde al mes.';
}