import { useComboBox } from './ComboBox';

export interface ListProps {
  children: React.ReactNode;
  className?: string;
}
export const ComboList = ({ children, className }: ListProps) => {
  const { isOpen } = useComboBox();

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} ${className}`}>
      {children}
    </div>
  );
};
