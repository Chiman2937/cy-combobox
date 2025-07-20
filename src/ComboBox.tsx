import {
  createContext,
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ListItemType {
  label: string;
  value: string;
}

const ComboBoxContext = createContext<{
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  listItems: ListItemType[];
  setListItems: Dispatch<SetStateAction<ListItemType[]>>;
  dropdownRef: RefObject<HTMLDivElement | null>;
} | null>(null);

interface DropdownProps {
  children: React.ReactNode;
}

export const ComboBox = ({ children }: DropdownProps) => {
  const [listItems, setListItems] = useState<ListItemType[]>([]);
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ComboBoxContext.Provider
      value={{
        selected,
        setSelected,
        isOpen,
        setIsOpen,
        listItems,
        setListItems,
        dropdownRef,
      }}
    >
      {children}
    </ComboBoxContext.Provider>
  );
};

export const useComboBox = () => {
  const context = useContext(ComboBoxContext);
  if (!context) {
    throw new Error(
      'useEditorDropdown must be used within an EditorDropdown provider'
    );
  }
  return context;
};
