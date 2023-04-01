import Image from 'next/image';

export function Socials() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <p className="text-font-mobile-m text-center">adamkeyes</p>
      <div className="flex flex-row gap-[26px] h-5">
        <div className="w-[19.69px] h-[19.2px]">
          <Image src="/img/icon-github.svg" alt="" width={19.69} height={19.2} />
        </div>
        <div className="w-[19.68px] h-[17.6px]">
          <Image src="/img/icon-frontend-mentor.svg" alt="" width={19.68} height={17.6} />
        </div>
        <div className="w-[19.2px] h-[19.2px]">
          <Image src="/img/icon-linkedin.svg" alt="" width={19.2} height={19.2} />
        </div>
        <div className="w-[18.62px] h-[15.14px]">
          <Image src="/img/icon-twitter.svg" alt="" width={18.62} height={15.14} />
        </div>
      </div>
    </div>
  );
}
