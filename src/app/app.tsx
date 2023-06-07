import { Suspense } from "react";
import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appRoutes } from "./routes/routes";
import { appTheme } from "../lib/theme/theme";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "@fontsource-variable/inter";
import { PersistGate } from "redux-persist/integration/react";

export function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <CookiesProvider />
      <ToastContainer
        position="top-right"
        limit={3}
        theme="colored"
        bodyStyle={{
          fontFamily: "Inter Variable",
          fontSize: 14,
          fontWeight: "600",
        }}
      />
      <Suspense>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <RouterProvider router={appRoutes} />
          </PersistGate>
        </Provider>
      </Suspense>
    </ThemeProvider>
  );
}
