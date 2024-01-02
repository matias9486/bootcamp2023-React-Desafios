import fotoPerfil from '../assets/fotoPerfil.jpg';
import thisStyles from './FotoComponent.module.css'

export const FotoComponent = () => {
    return (
        <div className={`${thisStyles.fotoContainer}`}>
            <img src={fotoPerfil} alt="Foto Perfil" className={`rounded-circle border border-white border-4 ${thisStyles.fotoCV}`}/>
        </div>
    )
}
