type CircleIconProps = {
  content: React.ReactNode | number;
  className?: string;
  active?: boolean;
  bgColor?: string;
  textColor?: string;
  size?: number;
};

const CircleIcon = ({
  content,
  className = '',
  active = false,
  bgColor = 'bg-white',
  textColor = 'text-gray-800',
}: CircleIconProps) => {
  return (
    <div className="mt-6">
      <div
        className={`
          rounded-full flex items-center justify-center w-14 h-14 border border-[#333]
          ${active ? 'bg-black text-white' : `${bgColor} ${textColor}`}
          ${!active ? 'hover:bg-[#dcb28a] hover:border-none hover:text-white' : ''}
          transition-all ease-in-out duration-300
          ${className}
        `}
      >
        <span className="flex text-sm">{content}</span>
      </div>
    </div>
  );
};
export default CircleIcon;