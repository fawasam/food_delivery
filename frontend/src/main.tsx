import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import StoreContextProvider from "./context/Store.tsx";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StoreContextProvider>
      <Suspense fallback={<Loader />}>
        <App />
        {/* <Loader /> */}
      </Suspense>
    </StoreContextProvider>
  </BrowserRouter>
);
