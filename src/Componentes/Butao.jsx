import '../App.css'
function Butao({Click,resultado}){
    
    return(
        <>
     <div className='opaa'>
            <button  className={`butto ${resultado.Q === 'certo'? 'certo': resultado.Q === 'errado'? 'errado': ''}`} onClick={Click}data-letra='Q'>Q</button>
             <button  className={`butto ${resultado.W === 'certo'? 'certo': resultado.W === 'errado'? 'errado': ''}`} onClick={Click}data-letra='W'>W</button>
            <button className={`butto ${resultado.E === 'certo'? 'certo': resultado.E === 'errado'? 'errado': ''}`} onClick={Click}  data-letra='E'>E</button>
            <button className={`butto ${resultado.R === 'certo'? 'certo': resultado.R === 'errado'? 'errado': ''}`} onClick={Click} data-letra='R'>R</button>
            <button className={`butto ${resultado.T === 'certo'? 'certo': resultado.T === 'errado'? 'errado': ''}`} onClick={Click} data-letra='T'>T</button>
            <button className={`butto ${resultado.Y === 'certo'? 'certo': resultado.Y === 'errado'? 'errado': ''}`} onClick={Click} data-letra='Y'>Y</button>
            <button className={`butto ${resultado.U === 'certo'? 'certo': resultado.U === 'errado'? 'errado': ''}`} onClick={Click} data-letra='U'>U</button>
            <button className={`butto ${resultado.I === 'certo'? 'certo': resultado.I === 'errado'? 'errado': ''}`} onClick={Click} data-letra='I'>I</button>
            <button className={`butto ${resultado.O === 'certo'? 'certo': resultado.O === 'errado'? 'errado': ''}`} onClick={Click} data-letra='O'>O</button>
            <button className={`butto ${resultado.P === 'certo'? 'certo': resultado.P === 'errado'? 'errado': ''}`} onClick={Click} data-letra='P'>P</button>
            <button className={`butto ${resultado.A === 'certo'? 'certo': resultado.A === 'errado'? 'errado': ''}`} onClick={Click} data-letra='A'>A</button>
            <button className={`butto ${resultado.S === 'certo'? 'certo': resultado.S === 'errado'? 'errado': ''}`} onClick={Click} data-letra='S'>S</button>
            <button className={`butto ${resultado.D === 'certo'? 'certo': resultado.D === 'errado'? 'errado': ''}`} onClick={Click} data-letra='D'>D</button>
            <button className={`butto ${resultado.F === 'certo'? 'certo': resultado.F === 'errado'? 'errado': ''}`} onClick={Click} data-letra='F'>F</button>
            <button className={`butto ${resultado.G === 'certo'? 'certo': resultado.G === 'errado'? 'errado': ''}`} onClick={Click} data-letra='G'>G</button>
            <button className={`butto ${resultado.H === 'certo'? 'certo': resultado.H === 'errado'? 'errado': ''}`} onClick={Click} data-letra='H'>H</button>
            <button className={`butto ${resultado.J === 'certo'? 'certo': resultado.J === 'errado'? 'errado': ''}`} onClick={Click} data-letra='J'>J</button>
            <button className={`butto ${resultado.K === 'certo'? 'certo': resultado.K === 'errado'? 'errado': ''}`} onClick={Click} data-letra='K'>K</button>
            <button className={`butto ${resultado.L === 'certo'? 'certo': resultado.L === 'errado'? 'errado': ''}`} onClick={Click} data-letra='L'>L</button>
            <button className={`butto ${resultado.Ç === 'certo'? 'certo': resultado.Ç === 'errado'? 'errado': ''}`} onClick={Click} data-letra='Ç'>Ç</button>
            <button className={`butto ${resultado.Z === 'certo'? 'certo': resultado.Z === 'errado'? 'errado': ''}`} onClick={Click} data-letra='Z'>Z</button>
            <button className={`butto ${resultado.X === 'certo'? 'certo': resultado.X === 'errado'? 'errado': ''}`} onClick={Click} data-letra='X'>X</button>
            <button className={`butto ${resultado.C === 'certo'? 'certo': resultado.C === 'errado'? 'errado': ''}`} onClick={Click} data-letra='C'>C</button>
            <button className={`butto ${resultado.V === 'certo'? 'certo': resultado.V === 'errado'? 'errado': ''}`} onClick={Click} data-letra='V'>V</button>
            <button className={`butto ${resultado.B === 'certo'? 'certo': resultado.B === 'errado'? 'errado': ''}`} onClick={Click} data-letra='B'>B</button>
            <button className={`butto ${resultado.N === 'certo'? 'certo': resultado.N === 'errado'? 'errado': ''}`} onClick={Click} data-letra='N'>N</button>
            <button className={`butto ${resultado.M === 'certo'? 'certo': resultado.M === 'errado'? 'errado': ''}`} onClick={Click} data-letra='M'>M</button>
        </div>
        </>
    )
}

export default Butao