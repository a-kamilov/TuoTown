import React,{useEffect} from 'react'
import AOS from "aos";
import img1 from './img/CuttingMeat_2.png';
import img2 from './img/knifes_2.png';
import img3 from './img/knifes_3.png';

const News = () => {
    useEffect(()=>{
    AOS.init();
    }, [])
  return (
    <div className='news'>
        <h1>Всё самое интересное о ножах</h1>
        <div className="n_cards">
            <div data-aos="fade-left" aos-delay="200" data-aos-duration="1500"  className="card">
                <img src={img1}/>
                <p>4 августа 2021 19:24</p>
                <a href="#">Традиционные виды японских кухонных ножей</a>
            </div>
            <div data-aos="fade-down-right" aos-delay="200" data-aos-duration="1500" className="card">
                <img src={img2}/>
                <p>4 августа 2021 19:24</p>
                <a href="#">Всемирная история режущих клинков — взгляд в прошлое</a>
            </div>
            <div data-aos="fade-right" aos-delay="200" data-aos-duration="1500" className="card">
                <img src={img3}/>
                <p>4 августа 2021 19:24</p>
                <a href="#">Как ухаживать за японскими кухонными ножами?</a>
            </div>
        </div>
    </div>
  )
}

export default News