import { useEffect } from 'react';
import { useComboBox } from './ComboBox';

export interface ListItemProps {
  value: string;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}
const ComboListItem = ({
  value,
  onClick,
  className,
  children,
}: ListItemProps) => {
  const { setSelected, setIsOpen, setListItems } = useComboBox();
  const handleListItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    const value = target.dataset.value;
    if (!value) return;
    setSelected(value);
    onClick();
    setIsOpen(false);
  };

  useEffect(() => {
    setListItems((prev) => {
      if (prev.some((item) => item.value === value)) return prev;
      return [...prev, { label: String(children), value }];
    });
  }, [children, value, setListItems]);

  return (
    <button
      data-value={value}
      className={className}
      onClick={handleListItemClick}
    >
      {children}
    </button>
  );
};

export default ComboListItem;
