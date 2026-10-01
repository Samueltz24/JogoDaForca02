import styles from '../Css/Card.module.css'
import Digajogador from './Dicajogador'
import '../App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function Cardpri({nomes,img,Link :caminho}){
    function muda(){
        let voltar = document.getElementById('voltar')
         let luso = document.getElementById('luso')
        voltar.style.display='block'
        luso.style.display='block'
    }
    return(
        <>
            <div className={styles.carpri} id='marca'>
                <div className={styles.nome}>
                    <h3>{nomes}</h3>
                </div>
                
                <div className={styles.tex}>
                    <Link className={styles.a} to={caminho} onClick={muda}>
                        <p className={styles.aa}>Jogar</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Cardpri