import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/authTools.jsx";
import jwtInterceptor from "./utils/jwtInterceptor.js";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProProvider } from "./contexts/ProTools.jsx";

// Attach token in header of every request
jwtInterceptor();

const domain = import.meta.env.AUTH0_DOMAIN;
const clientID = import.meta.env.AUTH0_CLIENT_ID;
// const callBackURL = import.meta.env.AUTH0_CALLBACK_URL

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProProvider>
        <Auth0Provider
          domain={domain}
          clientId={clientID}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </ProProvider>
    </AuthProvider>
  </React.StrictMode>
);
