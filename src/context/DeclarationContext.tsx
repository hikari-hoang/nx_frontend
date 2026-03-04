import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface DeclarationContextType {
  filesId: string[] | null;
  setFilesId: (ids: string[] | null) => void;
}

const STORAGE_KEY = "declaration_files_id";

const DeclarationContext = createContext<DeclarationContextType | undefined>(
  undefined
);

export const DeclarationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [filesId, setFilesIdState] = useState<string[] | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  // 🔥 Wrap setState để lưu vào localStorage
  const setFilesId = (ids: string[] | null) => {
    setFilesIdState(ids);

    if (ids) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

 
  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      setFilesIdState(stored ? JSON.parse(stored) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <DeclarationContext.Provider value={{ filesId, setFilesId }}>
      {children}
    </DeclarationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDeclaration = () => {
  const context = useContext(DeclarationContext);
  if (!context) {
    throw new Error("useDeclaration must be used inside DeclarationProvider");
  }
  return context;
};