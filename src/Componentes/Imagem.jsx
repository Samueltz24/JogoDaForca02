import im0 from '../Img/imgforca/vazia.png'
import im1 from '../Img/imgforca/cabeca.png'
import im2 from '../Img/imgforca/corpo.png'
import im3 from '../Img/imgforca/braco1.png'
import im4 from '../Img/imgforca/braco2.png'
import im5 from '../img/imgforca/perna1.png'
import im6 from '../img/imgforca/perna2.png'
export let forca =[im0,im1,im2,im3,im4,im5,im6]

function Imagem({img}){
    return(
        <>
            <img src={img} alt="" />
        </>
    )
}

export default Imagem