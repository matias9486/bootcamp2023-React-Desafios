import thisStyles from './SobremiComponent.module.css';

export const SobreMiComponent = ({titulo, sobreMi}) => {
  return (
    <>
      <h3 className={`text-uppercase ${thisStyles.textGrey}`}>{titulo}</h3>
      <hr/>
      <div>{sobreMi}</div>
    </>
    
  )
}
