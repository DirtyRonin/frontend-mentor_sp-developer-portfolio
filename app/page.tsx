import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import ProfileMobile from '../assets/images/image-profile-mobile.webp';
import ProjectList from '@/components/project-list/project-list';
import React from 'react';
import ButtonUnderline from '@/components/button-underline/button-underline';
import { ContactForm } from '@/components/contact-form/contact-form';
import { Socials } from '@/components/socials';

const spaceGrotesk = Space_Grotesk({
  weight: ['500', '700'],
  variable: '--space-grotesk',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`flex flex-col pt-5 gap-16 ${spaceGrotesk.className} text-white`}>
      {/* <section className="header">
        <div className="relative overflow-x-clip grid grid-cols-[repeat(auto-fit,minmax(174px,50%))] justify-center ">
          <div className="absolute right-1/2 top-1/2 translate-y-[-64px] w-[530px] h-[129px]">
            <Image src="/img/pattern-rings.svg" alt="" width={530} height={129} />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 ">
            <Socials />
          </div>
          <div className="absolute right-0 translate-x-1/2 bottom-0 w-[129px] h-[129px]">
            <Image src="/img/pattern-circle.svg" alt="" width={129} height={129} />
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
      <section className="welcome-text">
        <div className="flex px-4 flex-col text-center gap-6">
          <h2 className="text-font-mobile-l">
            Nice to meet you! I&apos;m <span className="underline underline-offset-8 decoration-theme-green decoration-[4px]">Adam Keyes</span>.
          </h2>
          <p className=" text-font-mobile-text text-theme-gray ">
            Based in the UK, I&apos;m a front-end developer passionate about building accessible web apps that users love.
          </p>
          <ButtonUnderline title="contact me" />
        </div>
      </section>
      <section className="experience ">
        <div className="relative overflow-x-clip">
          <div className="grid py-10 mx-5 gap-6 text-center border-t-2 border-b-2 border-theme-gray">
            <div>
              <h2 className="uppercase text-font-mobile-experience-header">html</h2>
              <p className="capitalize text-font-mobile-experience-text text-theme-gray">4 years experience</p>
            </div>
            <div>
              <h2 className="uppercase text-font-mobile-experience-header">css</h2>
              <p className="capitalize text-font-mobile-experience-text text-theme-gray">4 years experience</p>
            </div>
            <div>
              <h2 className="capitalize text-font-mobile-experience-header">javascript</h2>
              <p className="capitalize text-font-mobile-experience-text text-theme-gray">4 years experience</p>
            </div>
            <div>
              <h2 className="capitalize text-font-mobile-experience-header">accessibility</h2>
              <p className="capitalize text-font-mobile-experience-text text-theme-gray">4 years experience</p>
            </div>
            <div>
              <h2 className="capitalize text-font-mobile-experience-header">react</h2>
              <p className="capitalize text-font-mobile-experience-text text-theme-gray">3 years experience</p>
            </div>
            <div>
              <h2 className="capitalize text-font-mobile-experience-header">sass</h2>
              <p className="capitalize text-font-mobile-experience-text text-theme-gray">3 years experience</p>
            </div>
            <div className="absolute left-1/2 translate-x-[0] bottom-0 translate-y-[64px]  w-[530px] h-[129px]">
              <Image src="/img/pattern-rings.svg" alt="" width={530} height={129} />
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="grid gap-10">
          <div className="flex justify-between items-center px-4">
            <h2 className="text-font-mobile-l">projects</h2>
            <ButtonUnderline title="contact me" />
          </div>
          <div className="px-4">
            <ProjectList />
          </div>
        </div>
      </section> */}
      <section className="contact">
        <div className="grid gap-[50px] py-[60px] px-4">
          <div className="relative">
            <div className="text-center">
              <h2 className="text-font-mobile-l">contact</h2>
              <p className="text-font-mobile-experience-text text-theme-gray">
                I would love to hear about your project and how I could help. Please fill in the form, and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
            <div className="absolute overflow-y-clip right-1/2 bottom-5 w-[530px] h-[129px]">
              <Image src="/img/pattern-rings.svg" alt="" width={530} height={129} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="border-t pt-10 pb-[60px] px-4">
          <Socials />
        </div>
      </section>
    </div>
  );
}
