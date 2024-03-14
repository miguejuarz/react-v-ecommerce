import React, {useState, createContext} from 'react';
//create context
export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(false);
  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, toggleSidebar}} >
      {children}
    </SidebarContext.Provider>
  )
};

export default SidebarProvider;
