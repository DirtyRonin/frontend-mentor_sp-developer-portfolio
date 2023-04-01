'use client';

interface ButtonUnderlineProps {
  title: string;
  color?: string;
  active?: boolean;
  onClick?: () => void;
}

export default function ButtonUnderline({ title, color = 'border-theme-green', onClick, active }: ButtonUnderlineProps) {
  const onLocalClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();

    onClick?.();
  };

  const getActivityColors = () => {
    if (active === false) return `border-white text-gray-600`;

    return `border-white ${color}`;
  };

  return (
    <div>
      <button className={`pb-2 border-b-2 ${getActivityColors()}`} onClick={onLocalClick}>
        <p className=" text-font-mobile-button uppercase ">{title}</p>
      </button>
    </div>
  );
}
