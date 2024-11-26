import React,{useEffect} from 'react'
import './Main.css'

import img from '../../assest/Cappdocia.jpeg'
import img1 from '../../assest/Cinque.jpeg'
import img2 from '../../assest/Dejarling.jpeg'
import img3 from '../../assest/Guanajuato.jpeg'
import img4 from '../../assest/images.jpeg'
import img5 from '../../assest/JalMahal.jpeg'
import img6 from '../../assest/Mah_Fort.jpeg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [

{
   id:1,
  imgsrc: img2,
  desttitle:'Darjeeling',
  location:'India',
  grade:'cultural Relex',
  fees: '$900',
  description: 'The epiton of romance, Darjeelilng is one of the best travel destianation in the world. This place is known for its luxurious stays and adventurous activities. '
},
{
  id:2,
 imgsrc: img1,
 desttitle:'MAchu PIcchu',
 location:'Peru',
 grade:'cultural Relex',
 fees: '$600',
 description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
},
{
  id:3,
 imgsrc: img4,
 desttitle:'Great Barrier Reef',
 location:'Australia',
 grade:'cultural Relex',
 fees: '$700',
 description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place. '
},
{
  id:4,
 imgsrc: img,
 desttitle:'Cappadocia',
 location:'Turkey',
 grade:'cultural Relex',
 fees: '$800',
 description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.'
},
{
  id:5,
 imgsrc: img3,
 desttitle:'Guanajuato',
 location:'Maxico',
 grade:'cultural Relex',
 fees: '$1100',
 description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available, Always welcome.'
},
{
  id:6,
 imgsrc: img5,
 desttitle:'Cinque terre',
 location:'ltaly',
 grade:'cultural Relex',
 fees: '$840',
 description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
},
{
  id:7,
 imgsrc: img6,
 desttitle:'Angkor Wat',
 location:'Cambodia',
 grade:'cultural Relex',
 fees: '$790',
 description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.'
},
{
  id:8,
 imgsrc: img3,
 desttitle:'Bora Bora',
 location:'Newzealand',
 grade:'cultural Relex',
 fees: '$700',
 description: 'The epiton of romance, Bora Bora is one of the best travel destianation in the world. This place is known for its luxurious stays and adventurous activities.'
},
{
  id:9,
 imgsrc: img4,
 desttitle:'Bali Island',
 location:'Indonesia',
 grade:'cultural Relex',
 fees: '$500',
 description: 'Bali is an Indonesian island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
}


]

export default function Main() {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

  return (
    <section className='main container section'>
      <div className='settitle'>
        <h3 data-aos="fade-right" className='title'>Most Visited Destination </h3>
      </div>

      <div className='setcontent grid'>
{
        Data.map(({id , imgsrc , desttitle, location, grade, fees,description}) => {

                    return(
                                <div data-aos="fade-up" key={id} className='singledestination'>

                                  <div className='imgdiv'>
                                    <img src={imgsrc} alt={desttitle}/>
                                  </div>

                                  <div className='cardinfo'>
                                  <h4 className='desttitle'>{desttitle}</h4>
                                  <span className='continent flex'>
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className='name'>{location}</span>
                                  </span>                              

                                  <div className='fees flex'>
                                    <div className='grade'>
                                      <span>
                                       {grade} <small>+1</small>
                                      </span>
                                    </div>

                                    <div className='price'>
                                      <h5>{fees}</h5>
                                    </div>
                                  </div>

                                  <div className='desc'>
                                    <p>{description}</p>
                                  </div>
                                  <button className='btn flex'>
                                    Details<HiOutlineClipboardCheck className='icon'/>
                                  </button>
                                  </div>

                                  

                                </div>
                                )


                         })
 }


      </div>
    </section>
  )
}
