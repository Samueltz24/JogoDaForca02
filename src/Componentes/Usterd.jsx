import { useState } from 'react'
import '../App.css'
import Butao from './Butao'
import Imagem, {forca} from './Imagem'
import Digajogador from './Dicajogador'
function Usterd(){
    const [Jogadores,SetJogadores]=useState([
    'SPORT','NAUTICO','SALGUEIRO','SANTOS','CORINTIANS','PALMEIRAS','IBIS','CENTRAL','BARCELONA','PORTO']
)
    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState(
         Math.floor(Math.random() * Jogadores.length)
    )
    const [erro, setErro] = useState(0)
    const [acerto, SetAcerto] = useState(0)
    const [palavracorreta,SetPalavracorreta] = useState(0)
    const [palavraincorreta,SetPalavraincorreta] = useState(0)
    const [nomeerrado,SetNomeerrado] = useState('')
    const [nomecorreto,SetNomecorreto] = useState('')
    const [fim, setFim]= useState(false)
    const [resultado,SetResultado] = useState({
    })
    const [letras,SetLetra] = useState([])
    const [nome1, setNome1] = useState(
        Array(Jogadores[numero].length).fill('__')
    )
    
  function click(event){

    // Se o jogo terminou, não faz mais nada

        if(fim){
            return
        }

        const letra = event.currentTarget.dataset.letra

        if(letras.includes(letra)){
            return
        }
        SetLetra([...letras,letra])

        const palavra = Jogadores[numero]

        if(!palavra){
            return
        }

        if(palavra.includes(letra)){
           const NovaPalavra = [...nome1]
           SetResultado({
            ...resultado,
            [letra]: 'acerto'
           })
        for(let i = 0; i < palavra.length; i ++){
            if(palavra[i] === letra){
                NovaPalavra[i] = letra
            }
        }

            setNome1(NovaPalavra)
            setNome(letra)
            SetAcerto(acerto + 1)
            // Terminou a palavra

        if(!NovaPalavra.includes('__')){
            // Remove a palavra que acabou
            const palavraTerminada = Jogadores[numero]
            const novaLista = Jogadores.filter((item, index) => index !== numero)

            if(novaLista.length === 0){
                setFim(true)
                alert(palavraTerminada)
                alert('terminou o jogo')
                return

            }
            SetJogadores(novaLista)

            // Ainda existem palavras
           
             const novoNumero = Math.floor( Math.random() * novaLista.length )

             setNumero(novoNumero)

                setNome1(
                    Array(novaLista[novoNumero].length).fill('__')
                )
             
              setErro(0)
              SetAcerto(0)
              setNome('')
              SetPalavracorreta(palavracorreta + 1)
              SetLetra([])
              SetResultado({}) // ← reseta as cores
              SetNomecorreto(`Nome é ${palavraTerminada}`)

              // Não existem mais palavras
         }
        }
        // errou o nome
        else if(letra){
            setNome('')
            SetResultado({
                ...resultado,
                [letra]: 'errado'
            })
            if(erro === 6){
                const palavraErrada = Jogadores[numero]
                 const novaLista = Jogadores.filter(
            (item, index) => index !== numero
        )

                SetNomeerrado(`nome era ${palavraErrada}`)

            if(novaLista.length === 0){
                setFim(true)
                alert('terminou o jogo')
                return
            }    

            SetJogadores(novaLista)

             const novoNumero = Math.floor(
            Math.random() * novaLista.length
        )

        setNumero(novoNumero)

        setNome1(
            Array(novaLista[novoNumero].length).fill('__')
        )

        setErro(0)
        SetAcerto(0)
        setNome('')
        SetPalavraincorreta(palavraincorreta + 1)
        SetLetra([])
        SetResultado({})
            }else{
                setErro(erro + 1)
            }
        }
    }



    return(
        <>
        <section className='marge' id='ma'>

        <div className='nomes'>
            <div className='azul cart'>
                {nomecorreto}
            </div>
            <div className='vermelho cart'>
                {nomeerrado}
            </div>
        </div>
        <div className='contagem'>
            <div className='ca1 ace'>
                <p>{palavracorreta}</p>
            </div>
            <div className='ca1 err'>
                <p>{palavraincorreta}</p>
            </div>
        </div>
        <div className='dicas'>
          <Digajogador  numero={numero} lista={Jogadores}/>
        </div>

         <h2 className='largo'>
           {nome1.join(' ')}
        </h2>
       <div className='jogoforca'>
        <Imagem img={forca[erro]}/>
       </div>
        
            <Butao Click={click} resultado={resultado}/>
        </section>
       
        </>
    )
}

export default Usterd