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
  const finalBg = active ? 'bg-black' : bgColor;
  const finalText = active ? 'text-white' : textColor;

  return (
    <div
      className={`rounded-full ${finalBg} ${finalText} 
      flex items-center  justify-center w-12 h-12 border border-[#333] ${className}`}
    >
      <span className="flex text-sm">{content}</span>
    </div>
  );
};
export default CircleIcon;