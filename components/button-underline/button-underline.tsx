'use client';

interface ButtonUnderlineProps {
  title: string;
  color?: string;
  onClick?: () => void;
}

export default function ButtonUnderline({ title, color = 'border-theme-green', onClick }: ButtonUnderlineProps) {
  const onLocalClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();

    onClick?.();
  };

  return (
    <div>
      <button className={`pb-2 border-b-2 ${color || ''}`} onClick={onLocalClick}>
        <p className=" text-font-mobile-button uppercase ">{title}</p>
      </button>
    </div>
  );
}
