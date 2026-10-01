import '../App.css'
import styles from '../Css/Nav.module.css'
import Img from '../Img/nav/github.png'
import Img01 from '../Img/nav/lua.png'
import Img02 from '../Img/nav/sol.png'
import Img03 from '../Img/Nav/voltar.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function Nav({Link: caminho}){
    function pri(){
        let voltar = document.getElementById('voltar')
        let luso = document.getElementById('luso')
        voltar.style.display='none'
        luso.style.display='none'
    }
    function Lua(){
        let sol= document.getElementById('sol')
        let lua= document.getElementById('lua')
        let ma = document.getElementById('ma')
        let ma1 = document.getElementById('marca')
        lua.style.display='none'
        sol.style.display='block'
        ma.style.background='#897a7a'
        ma1.style,background='#897a7a'
    }
    function Sol(){
        let sol= document.getElementById('sol')
        let lua= document.getElementById('lua')
        let ma = document.getElementById('ma')
        let ma1 = document.getElementById('marca')
        sol.style.display='none'
        lua.style.display='block'
        ma.style.background='#fff'
        ma1.style.background='#fff'
    }
    return(
        <>

        <nav>
            <div className={styles.card}>
                <div className={styles.filho1}>
                    <a href="https://github.com/Samueltz24?tab=repositories" target='_black'>
                        <img  src={Img} alt="" />
                    </a>
                    
                </div>
                <div className={styles.filho4} id='voltar' onClick={pri}>
                    <Link to={'/'}>
                        <img src={Img03} alt=""/>
                    </Link>
                </div>
                <div className={styles.filho2}>
                    <h1>Jogo da forca</h1>
                </div>
                <div className={styles.filho3}>
                    <div id='luso'>
                        <img onClick={Lua} id='lua' src={Img02} alt="" />

                        <img className={styles.sol} onClick={Sol} id='sol'  src={Img01} alt="" />
                    </div>
                    
                </div>
            </div>
        </nav>
        
        </>
    )
}

export default Nav 