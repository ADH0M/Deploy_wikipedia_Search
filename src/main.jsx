import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./Components/Auth/Login.jsx";
import AuthProvider from "./Components/Context/AuthProvider.jsx";
import FirstComponent from "./Components/useEfecteTarining/FirstComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* <Login /> */}
      {/* <App /> */}
      <FirstComponent />
    </AuthProvider>

  </StrictMode>
);
