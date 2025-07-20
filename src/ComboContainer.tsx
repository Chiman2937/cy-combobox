import { useComboBox } from './ComboBox';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ComboContainer = ({ children, className }: ContainerProps) => {
  const { dropdownRef } = useComboBox();
  return (
    <div ref={dropdownRef} className={className}>
      {children}
    </div>
  );
};
