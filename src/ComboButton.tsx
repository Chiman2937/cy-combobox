import { useEffect } from 'react';
import { useComboBox } from './ComboBox';

export interface ButtonProps {
  value?: string;
  initialLabel?: string;
  className?: string;
  children?: React.ReactNode;
}
export const ComboButton = ({
  value,
  initialLabel,
  className,
  children,
}: ButtonProps) => {
  const { listItems, selected, setSelected, setIsOpen } = useComboBox();

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!value) return;
    setSelected(value);
  }, [value, setSelected]);

  return (
    <button className={className} onClick={handleButtonClick}>
      {listItems.find((item) => item.value === selected)?.label || initialLabel}
      {children}
    </button>
  );
};
