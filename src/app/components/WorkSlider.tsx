import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title1',
          path: '/thumb1.jpg',
        },
        {
          title: 'title2',
          path: '/thumb2.jpg',
        },
        {
          title: 'title3',
          path: '/thumb3.jpg',
        },
        {
          title: 'title4',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title5',
          path: '/thumb4.jpg',
        },
        {
          title: 'title6',
          path: '/thumb1.jpg',
        },
        {
          title: 'title7',
          path: '/thumb2.jpg',
        },
        {
          title: 'title8',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] lg:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid cursor-pointer grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={image.title}
                    className="group relative flex items-center justify-center overflow-hidden rounded-lg"
                  >
                    <div className="itesm-center group relative flex justify-center overflow-hidden">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-80"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part2 */}
                          <div className="translate-y-[500%] transition-all delay-150 duration-300 group-hover:translate-y-0">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div>
                            <BsArrowRight className="translate-y-[500%] text-xl transition-all delay-200 duration-300 group-hover:translate-y-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
