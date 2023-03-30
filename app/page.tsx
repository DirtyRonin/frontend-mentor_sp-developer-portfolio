import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import ProfileMobile from '../assets/images/image-profile-mobile.webp';

const spaceGrotesk = Space_Grotesk({
  weight: ['500', '700'],
  variable: '--space-grotesk',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${spaceGrotesk.className} text-white  grid-cols-[minmax(375px,1440px)] pt-5 `}>
      <section>
        <div className="relative grid grid-cols-[repeat(auto-fit,minmax(174px,50%))] justify-center ">
          <div className="absolute right-1/2 top-1/2 translate-y-[-64px] w-[530px] h-[129px]">
            <Image src="/img/pattern-rings.svg" alt="" width={530} height={129} />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-5 items-center">
            <p className="text-font-m text-center leading-[-0.33px] ">adamkeyes</p>
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
          <div className="absolute right-0 translate-x-1/2 bottom-0 w-[129px] h-[129px]">
            <Image src="/img/pattern-circle.svg" alt="" width={530} height={129} />
          </div>
          <div>
            <picture>
              <source srcSet="/img/image-profile-desktop.webp" media="(min-width:1240px)" />
              <source srcSet="/img/image-profile-tablet.webp" media="(min-width:1024px)" />
              <source srcSet="/img/image-profile-mobile.webp" media="(min-width:375px)" />
              <Image src={ProfileMobile} alt="profile" style={{ objectFit: 'contain', width: 'auto', zIndex: 1000, position: 'relative' }} />
            </picture>
          </div>
        </div>
      </section>
      <div className="w-full bg-slate-100 h-100">stuff</div>
    </div>
  );
}
