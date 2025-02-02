import { createContext, ReactNode, useContext, useState } from "react";
import Toast from "../components/Toast";

interface IToastMessage {
  message: string;
  type: "success" | "error" | "warning";
}

interface IAppContext {
  showToast: (toastMessage: IToastMessage) => void;
}

interface IAppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [toast, setToast] = useState<IToastMessage | undefined>(undefined);
  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as IAppContext;
};

