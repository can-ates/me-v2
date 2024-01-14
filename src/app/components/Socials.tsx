import Link from 'next/link';

import { RiLinkedinLine, RiGithubLine } from 'react-icons/ri';
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.linkedin.com/in/mutlucanates98/"
        target="__blank"
        className="transition-all duration-300 hover:text-accent"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        target="__blank"
        href="https://github.com/can-ates"
        className="transition-all duration-300 hover:text-accent"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
