import '../App.css'
import dica01 from '../Img/nav/ideia.png'
import { useEffect, useState } from "react"
function Digajogador ({numero,lista}){
    const [contagem,SetContagem] =useState(0)
    const jogador = lista[numero]
    const [dica, SetDica] = useState('')

    useEffect(() => {
        SetContagem(0)
        SetDica('')
    },[numero])

    function Dica(){
        SetContagem(contagem + 1)
        if(jogador === 'SPORT'){
            if(contagem === 0){
                SetDica('Conciderado o maior do nordeste ')
                SetContagem(1)
            }
            if(contagem === 1){
                SetDica('É rubunegro')
                SetContagem(2)
            }
            if(contagem === 2){
                SetDica('Tem uma torcida apaxonada')
                SetContagem(0)
            }
            
        }
        if(jogador === 'NAUTICO'){
            if(contagem === 0){
                SetDica('É conhecido como Timbu.')
                SetContagem(1)
            }
            if(contagem === 1){
                SetDica('Joga nos Aflitos.')
                SetContagem(2)
            }
            if(contagem === 2){
                SetDica('Foi campeão pernambucano em 2022.')
                SetContagem(0)
            }
        }
        if(jogador === 'SALGUEIRO'){
            if(contagem === 0){
                SetDica('É conhecido como Carcará.')
                SetContagem(1)
            }
            if(contagem === 1){
                SetDica('É um clube do interior de Pernambuco.')
                SetContagem(2)
            }
            if(contagem === 2){
                SetDica('Foi campeão pernambucano em 2020, seu primeiro título estadual.')
                SetContagem(0)
            }
        }
        if(jogador === 'SANTOS'){
            if(contagem === 0){
                SetDica('Já conquistou títulos importantes fora do Brasil.')
                SetContagem(1)
            }
            if(contagem === 1){
                SetDica('Seu uniforme tradicional tem faixas verticais.')
                SetContagem(2)
            }
            if(contagem === 2){
                SetDica('Teve uma das equipes mais marcantes do futebol brasileiro na década de 1960.')
                SetContagem(0)
            }
        }
        if(jogador === 'CORINTIANS'){
            if(contagem === 0){
                SetDica('Conquistou seu primeiro título da Libertadores em 2012.')
                SetContagem(1)
            }
            if(contagem === 1){
                SetDica('Foi campeão mundial de clubes em 2000 e 2012.')
                SetContagem(2)
            }
            if(contagem === 2){
                SetDica('Seu estádio atual foi inaugurado em 2014.')
                SetContagem(0)
            }
        }
        if(jogador === 'PALMEIRAS'){
            if(contagem === 0){
                SetDica('Sua origem está ligada à imigração italiana em São Paulo.')
                SetContagem(1)
            }
            if(contagem === 1){
                SetDica('Conquistou a Libertadores três vezes.')
                SetContagem(2)
            }
            if(contagem === 2){
                SetDica('Já teve outro nome antes de adotar a denominação atual.')
                SetContagem(0)
            }
        }
        if(jogador === 'IBIS'){
            if(contagem === 0){
                SetDica('Ficou famoso por um longo período sem conquistar vitórias.')
                SetContagem(1)
            }
            if(contagem === 1){
                SetDica('O clube é de Pernambuco.')
                SetContagem(2)
            }
            if(contagem === 2){
                SetDica('Seu apelido está relacionado a uma ave.')
                SetContagem(0)
            }
        }
        if(jogador === 'CENTRAL'){
            if(contagem === 0){
                SetDica('É um clube da cidade de Caruaru.')
                SetContagem(1)
            }
            if(contagem === 1){
                SetDica('Manda seus jogos no Lacerdão.')
                SetContagem(2)
            }
            if(contagem === 2){
                SetDica('Suas cores tradicionais são amarelo e preto.')
                SetContagem(0)
            }
        }
        if(jogador === 'BARCELONA'){
            if(contagem === 0){
                SetDica('É um dos clubes mais tradicionais da Catalunha.')
                SetContagem(1)
            }
            if(contagem === 1){
                SetDica('Seu estádio histórico é o Camp Nou.')
                SetContagem(2)
            }
            if(contagem === 2){
                SetDica('Suas cores formam uma combinação conhecida como blaugrana.')
                SetContagem(0)
            }
        }
        if(jogador === 'PORTO'){
            if(contagem === 0){
                SetDica('É um dos principais clubes de Portugal.')
                SetContagem(1)
            }
            if(contagem === 1){
                SetDica('Seu estádio atual foi construído para a Euro 2004.')
                SetContagem(2)
            }
            if(contagem === 2){
                SetDica('Suas cores tradicionais são azul e branco.')
                SetContagem(0)
            }
        }
    }
    return(
        <>
         <button className="dicaa" onClick={Dica}><img src={dica01}alt="" />Dicas</button>
         <div className='bu'>
            <p> {dica}</p>
         </div>
        </>
    )
}

export default Digajogador