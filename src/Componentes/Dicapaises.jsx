import '../App.css'
import dica01 from '../Img/nav/ideia.png'
import { useEffect, useState } from "react"
function Dicapaises({numero,lista}){
        const [contagem,SetContagem] =useState(0)
        const jogador = lista[numero]
        const [dica, SetDica] = useState('')
    
        useEffect(() => {
            SetContagem(0)
            SetDica('')
        },[numero])
    
        function Dica(){
            SetContagem(contagem + 1)
            if(jogador === 'BRASIL'){
                if(contagem === 0){
                    SetDica('Sou o maior país da América do Sul. ')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Minha língua oficial é o português.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Sou conhecido pelo Carnaval e pelo futebol.')
                    SetContagem(0)
                }
                
            }
            if(jogador === 'ARGENTINA'){
                if(contagem === 0){
                    SetDica('Fico na América do Sul.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Minha capital é Buenos Aires.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Sou famoso pelo tango e pelo futebol.')
                    SetContagem(0)
                }
            }
            if(jogador === 'MEXICO'){
                if(contagem === 0){
                    SetDica('Fico na América do Norte.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Minha capital é Cidade do México.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Sou conhecido pela comida apimentada e pelas civilizações asteca e maia.')
                    SetContagem(0)
                }
            }
            if(jogador === 'ALEMANHA'){
                if(contagem === 0){
                    SetDica('Fico na Europa.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Minha capital é Berlim.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Sou conhecido pela Oktoberfest e pela história do Muro de Berlim.')
                    SetContagem(0)
                }
            }
            if(jogador === 'ESPANHA'){
                if(contagem === 0){
                    SetDica('Fico na Europa.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Minha capital é Madri.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Sou conhecida pelo flamenco, pelas touradas e pelo futebol.')
                    SetContagem(0)
                }
            }
            if(jogador === 'INGLATERRA'){
                if(contagem === 0){
                    SetDica('Faz parte do Reino Unido.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Sua capital é Londres.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('É o país de origem de um dos campeonatos de futebol mais famosos do mundo.')
                    SetContagem(0)
                }
            }
            if(jogador === 'PORTUGAL'){
                if(contagem === 0){
                    SetDica('Fica na Península Ibérica.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Faz fronteira terrestre apenas com a Espanha.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('É conhecido por sua forte tradição na navegação durante a Era dos Descobrimentos.')
                    SetContagem(0)
                }
            }
            if(jogador === 'CUBA'){
                if(contagem === 0){
                    SetDica('É uma ilha localizada no Caribe.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Sua capital é Havana.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('É conhecida por sua história ligada à Revolução Cubana e pela produção de charutos.')
                    SetContagem(0)
                }
            }
            if(jogador === 'CHINA'){
                if(contagem === 0){
                    SetDica('Está localizada no leste da Ásia.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Possui uma das maiores populações do mundo.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('A Grande Muralha é uma de suas construções históricas mais conhecidas.')
                    SetContagem(0)
                }
            }
            if(jogador === 'JAPAO'){
                if(contagem === 0){
                    SetDica('É formado por milhares de ilhas no Oceano Pacífico.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Sua capital é Tóquio.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Possui uma combinação marcante entre tecnologia moderna e tradições antigas.')
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

export default Dicapaises