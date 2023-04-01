import { Project } from '@/model/project';
import Image from 'next/image';
import ButtonUnderline from '../button-underline/button-underline';

interface ProjectListItemProps {
  project: Project;
}

export function ProjectListItem({ project: { title, linkCode, linkDemo, tags, screenshot, alt } }: ProjectListItemProps) {
  return (
    <div className="grid w-full justify-center gap-5">
      {/* <picture>
        <source srcSet={screenshot.large} media="(min-width:1024px)" />
        <source srcSet={screenshot.small} media="(min-width:375px)" />
        <Image priority src={screenshot.small} alt={alt || ''} width={686} height={506} style={{ objectFit: 'contain', position: 'relative', width: 'auto' }} />
      </picture> */}
      <Image priority src={screenshot.large} alt={alt || ''} width={686} height={506} style={{ objectFit: 'contain', position: 'relative', width: 'auto' }} />
      <div className="grid gap-[7px]">
        <h2 className="uppercase text-font-m">{title}</h2>
        <div className="flex flex-row flex-wrap gap-[18px]">
          {tags.map((tag, index) => (
            <p key={`${title}-tag-${index}`} className="uppercase text-font-text text-theme-gray">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2">
        <ButtonUnderline title="view project" />
        <ButtonUnderline title="view code" />
      </div>
    </div>
  );
}
