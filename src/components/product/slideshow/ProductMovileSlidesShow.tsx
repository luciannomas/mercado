"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './slideshow.css';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { ProductImage } from '@/components';


interface Props{
  images:string[];
  title: string;
  className?:string;
}


export const ProductMobileSlidesShow = ({ images, title, className}:Props) => {


    return (
        <div className={className}>
           <Swiper
        style={{
          width:'100vh',
          height:'500px'
        }}
        pagination
        autoplay={{delay:2500}}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper2"
      >
        {
          images.map(image=>(
            <SwiperSlide key={image}>
                <ProductImage
                  width={600}
                  height={500}
                  src={image}
                  alt={title}
                  className='rounded-lg  object-fill'
                />
            </SwiperSlide>
          ))
        }
        
        
      </Swiper>

        </div>
        
      );
    };

