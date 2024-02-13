import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Jotform Inbox',
          path: '/inbox.png',
          src: 'https://www.jotform.com/features/inbox/',
          text: ['Jotform', 'Inbox'],
        },
        {
          title: 'Jotform Builder',
          path: '/form-builder.png',
          src: 'https://www.jotform.com/features/form-builder/',
          text: ['Jotform', 'Builder'],
        },
        {
          title: 'Jotform PDF Editor',
          path: '/pdf-editor.png',
          src: 'https://www.jotform.com/products/pdf-editor/features/',
          text: ['Jotform', 'PDF Editor'],
        },
        {
          title: 'Game Portal',
          path: '/gameportal.png',
          src: 'https://game-portal.vercel.app',
          text: ['Game', 'Portal'],
        },
      ],
    },
    {
      images: [
        {
          title: 'Tagly',
          path: '/tagly.png',
          src: 'https://github.com/can-ates/tagly',
          text: ['GITHUB', 'PROJECT'],
        },
        {
          title: 'Gab',
          path: '/gab.png',
          src: 'https://github.com/can-ates/gab-frontend',
          text: ['GITHUB', 'PROJECT'],
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
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
              {slide.images.map((image) => {
                const projectText = image.text;
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
                      <Link href={image.src} passHref legacyBehavior>
                        <a
                          target="__blank"
                          className="absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-10 group-hover:xl:-translate-y-20"
                        >
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part1 */}
                            <div className="delay-100">{projectText[0]}</div>
                            {/* title part2 */}
                            <div className="translate-y-[500%] transition-all delay-150 duration-300 group-hover:translate-y-0">
                              {projectText[1]}
                            </div>
                            {/* icon */}
                            <div>
                              <BsArrowRight className="translate-y-[500%] text-xl transition-all delay-200 duration-300 group-hover:translate-y-0" />
                            </div>
                          </div>
                        </a>
                      </Link>
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
