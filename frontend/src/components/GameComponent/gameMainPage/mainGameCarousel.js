import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import './gameMain.css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react';
import { Autoplay,EffectCoverflow, Pagination, Navigation } from 'swiper';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import GameList from './GameMain';
import axios from 'axios';
import loadin from '../../asseets/loadinghd7.gif'
import { Carousel } from 'react-responsive-carousel';



function ImageCarousel() {

  const [List, setList] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiGameCall = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_DataBase_link_to_Access_data}/gameMainGet`
      );
      setList(res.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    apiGameCall();
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DataBase_link_to_Access_data}/gameMainGet`)
      .then((res) => res.json())

      .then((data) => setPopular(data));
  }, []);

  return (
    <div className='gamefinal'>
    {loading ?
     <div className="loading-ani">
         <img src={loadin}/>
         <h2>Loading...</h2>
     </div>:
     <>
    <div className="container-carousel">
    {/* <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={21}
              infiniteLoop={true}
              showStatus={false}
              className='Carousel'
            >
              {List.map((e, index) => {
                return <img src={e.detailImage} className="game-img" key={index} />;
              })}
            </Carousel> */}
       <Swiper
      
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
      }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        
          
          
          {List.map((e, index)=>{
            return(
              <>
              <SwiperSlide key={index}>
              <Link to={`/games/${e._id}`}>
                <picture>
                  <source className='img' media='(max-width:665px)' srcSet={e.homeImage}/>
            <img className='img' src={e.detailImage}/>

                </picture>
          </Link>
        </SwiperSlide>
        </>
            )
          })}
          
        
        
        
        <div style={{display:'flex', justifyContent:'center'}}  className="slider-controler">
           <div justifyContent={'center'} >
          <div   className="swiper-pagination"></div>
          </div>
        </div>
       
      </Swiper> 
          <GameList List={List} setList={setList}/>

    </div>
    </>}
    </div>
    
  );
}

export default ImageCarousel;
