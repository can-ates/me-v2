import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/avatar.png"
        width={1024}
        height={1024}
        alt=""
        className="translate-z-0 h-full w-full"
      />
    </div>
  );
};

export default Avatar;
