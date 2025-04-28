import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const Icon = ({ name, size = 24, className = '' }: IconProps) => {
  // @ts-ignore - Dynamic icon component from lucide-react
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    console.warn(`Icon '${name}' not found in lucide-react`);
    return <span className={className}>Icon</span>;
  }

  return <LucideIcon size={size} className={className} />;
};

export default Icon;