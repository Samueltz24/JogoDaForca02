import '../App.css'
import dica01 from '../Img/nav/ideia.png'
import { useEffect, useState } from "react"
function Dicaobjetos({numero,lista}){
    const [contagem,SetContagem] =useState(0)
            const jogador = lista[numero]
            const [dica, SetDica] = useState('')
        
            useEffect(() => {
                SetContagem(0)
                SetDica('')
            },[numero])
        
            function Dica(){
                SetContagem(contagem + 1)
                if(jogador === 'CARRO'){
                    if(contagem === 0){
                        SetDica('Possui rodas e normalmente um motor. ')
                        SetContagem(1)
                    }
                    if(contagem === 1){
                        SetDica('É usado para transportar pessoas pelas ruas e estradas.')
                        SetContagem(2)
                    }
                    if(contagem === 2){
                        SetDica('Pode ter volante, câmbio e pedais.')
                        SetContagem(0)
                    }
                    
                }
                if(jogador === 'CASA'){
                if(contagem === 0){
                    SetDica('É um lugar onde as pessoas podem morar.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Pode ter quartos, cozinha e banheiro.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Normalmente possui paredes, portas e janelas.')
                    SetContagem(0)
                }
            }
            if(jogador === 'ESCADA'){
                if(contagem === 0){
                    SetDica('É usada para alcançar lugares mais altos.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Possui vários degraus.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Pode ser encontrada em casas, prédios e outros lugares.')
                    SetContagem(0)
                }
            }
            if(jogador === 'CADEIRA'){
                if(contagem === 0){
                    SetDica('É um objeto usado principalmente para descansar o corpo.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Normalmente possui pernas e um encosto.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('É comum encontrá-la ao redor de mesas.')
                    SetContagem(0)
                }
            }
            if(jogador === 'PORTA'){
                if(contagem === 0){
                    SetDica('Serve para controlar a entrada e saída de um ambiente.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Pode ser feita de madeira, metal ou vidro.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Geralmente possui maçaneta ou algum tipo de fechadura.')
                    SetContagem(0)
                }
            }
            if(jogador === 'AVIAO'){
                if(contagem === 0){
                    SetDica('É um meio de transporte usado para viagens de longa distância.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Possui asas e turbinas ou motores.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Pode transportar passageiros por diferentes países.')
                    SetContagem(0)
                }
            }
            if(jogador === 'CELULAR'){
                if(contagem === 0){
                    SetDica('É um aparelho eletrônico portátil.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Pode acessar a internet e instalar aplicativos.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Atualmente, também é usado para tirar fotos, assistir vídeos e fazer pagamentos.')
                    SetContagem(0)
                }
            }
            if(jogador === 'TELEVISAO'){
                if(contagem === 0){
                    SetDica('É um aparelho usado para assistir conteúdos audiovisuais.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Pode receber sinais por internet, antena ou outros dispositivos.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Atualmente, muitos modelos permitem instalar aplicativos de streaming.')
                    SetContagem(0)
                }
            }
            if(jogador === 'ESCOVA'){
                if(contagem === 0){
                    SetDica('Possui várias cerdas.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Pode ser usada para limpar diferentes objetos ou partes do corpo.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Uma das versões mais comuns é usada junto com pasta para cuidar dos dentes.')
                    SetContagem(0)
                }
            }
            if(jogador === 'MOTO'){
                if(contagem === 0){
                    SetDica('É um veículo de duas rodas.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Normalmente possui um motor e guidão.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('É bastante utilizada para deslocamentos rápidos e pode ser mais estreita que um carro.')
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

export default Dicaobjetos