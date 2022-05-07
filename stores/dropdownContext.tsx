import { useState, createContext } from "react";

type propType = {
  children: React.ReactNode;
};

export const DropdownContext = createContext<{
  isOpen: boolean;
  toggle: (v: boolean) => void;
}>({
  isOpen: false,
  toggle: (v: boolean) => {},
});

export const DropdownContextProvider = ({ children }: propType) => {
  const [dropdownOpen, toggleDropdown] = useState<boolean>(false);

  const toggleHandler = () => {
    toggleDropdown((state) => {
      return !state;
    });
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen: dropdownOpen,
        toggle: toggleHandler,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
