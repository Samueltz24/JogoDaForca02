import styles from '../Css/Card.module.css'
import Cardpri from './Cardpri'
import '../App.css'
import Img from '../Img/imgcard/img01.png'


function Card(){
    return(
        <>
        <div id='marca'>
        <div className={styles.card1}>
            <Cardpri nomes='Times' Link={'/times'}/>
            <Cardpri nomes='objetos' Link={'/Objetos'}/>
            <Cardpri nomes='Paises'  Link={'/Paises'}/>
            <Cardpri nomes='Animais' Link={'/Animais'}/>
         </div>
        </div>
        </>
    )
}
export default Card 