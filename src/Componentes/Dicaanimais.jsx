import '../App.css'
import dica01 from '../Img/nav/ideia.png'
import { useEffect, useState } from "react"
function Dicaanimais({numero,lista}){
    const [contagem,SetContagem] =useState(0)
        const jogador = lista[numero]
        const [dica, SetDica] = useState('')
    
        useEffect(() => {
            SetContagem(0)
            SetDica('')
        },[numero])
    
        function Dica(){
            SetContagem(contagem + 1)
            if(jogador === 'CACHORRO'){
                if(contagem === 0){
                    SetDica('É conhecido por ser um animal muito companheiro.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Possui um olfato bastante desenvolvido.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Existem muitas raças com tamanhos e características diferentes.')
                    SetContagem(0)
                }
                
            }
            if(jogador === 'GATO'){
                if(contagem === 0){
                    SetDica('É conhecido por sua agilidade e equilíbrio.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Costuma usar as unhas para se defender e subir.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Muitos conseguem enxergar bem com pouca luz.')
                    SetContagem(0)
                }
            }
            if(jogador === 'ZEBRA'){
                if(contagem === 0){
                    SetDica('Vive principalmente em regiões da África.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Cada indivíduo possui um padrão de listras diferente.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('É parente próximo dos cavalos e burros.')
                    SetContagem(0)
                }
            }
            if(jogador === 'LEAO'){
                if(contagem === 0){
                    SetDica('É um dos maiores felinos existentes.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Vive em grupos chamados alcateias.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('O macho adulto costuma possuir uma juba.')
                    SetContagem(0)
                }
            }
            if(jogador === 'GIRAFA'){
                if(contagem === 0){
                    SetDica('É o animal terrestre mais alto.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Usa seu longo pescoço para alcançar folhas.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Sua língua pode ser bastante comprida.')
                    SetContagem(0)
                }
            }
            if(jogador === 'PRIGUIÇA'){
                if(contagem === 0){
                    SetDica('Passa grande parte do tempo nas árvores.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Seus movimentos são bem lentos.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Possui garras fortes para se pendurar nos galhos.')
                    SetContagem(0)
                }
            }
            if(jogador === 'URSO'){
                if(contagem === 0){
                    SetDica('Algumas espécies passam o inverno em tocas.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Pode ser encontrado em regiões muito frias.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Algumas espécies são excelentes nadadoras.')
                    SetContagem(0)
                }
            }
            if(jogador === 'GALINHA'){
                if(contagem === 0){
                    SetDica('É uma ave criada frequentemente em fazendas.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Bota ovos que podem ser usados como alimento.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Possui asas, mas não costuma voar por longas distâncias.')
                    SetContagem(0)
                }
            }
            if(jogador === 'PASSARO'){
                if(contagem === 0){
                    SetDica('Possui penas e bico.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Muitas espécies constroem ninhos para colocar seus ovos.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('A maioria consegue voar usando suas asas.')
                    SetContagem(0)
                }
            }
            if(jogador === 'CAVALO'){
                if(contagem === 0){
                    SetDica('É usado em corridas e competições.')
                    SetContagem(1)
                }
                if(contagem === 1){
                    SetDica('Pode ser montado por pessoas.')
                    SetContagem(2)
                }
                if(contagem === 2){
                    SetDica('Possui crina e costuma viver em pastos.')
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
export default Dicaanimais