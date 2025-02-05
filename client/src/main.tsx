import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { AppContextProvider } from "./context/AppContext.tsx";
import store from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContextProvider>
          <App />
          <Toaster position="top-center" />
        </AppContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
