import Image from 'next/image';
import Link from 'next/link';

import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/JAN_15_RESUME.pdf"
        target="_blank"
        className="group relative flex h-[185px] w-[185px] items-center justify-center bg-cover bg-center bg-no-repeat"
      >
        <Image
          src={'/my-resume.png'}
          alt=""
          className="h-full max-h-[400px] w-full max-w-[400px]"
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
