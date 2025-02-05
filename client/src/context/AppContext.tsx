import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Toast from "../components/Toast";
import { validateUser } from "../api/apiClient";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

interface IToastMessage {
  message: string;
  type: "success" | "error" | "warning";
}

interface IAppContext {
  showToast: (toastMessage: IToastMessage) => void;
  isLoggedIn: boolean;
}

interface IAppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [toast, setToast] = useState<IToastMessage | undefined>(undefined);
  const [isError, setIsError] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const resultStatus = await validateUser();
      console.log(resultStatus);
      if (!resultStatus) {
        dispatch(login());
      }

      setIsError(resultStatus);
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        isLoggedIn: !isError,
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
