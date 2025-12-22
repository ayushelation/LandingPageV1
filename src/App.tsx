import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// Remove __BASE_PATH__ or define it properly
const basePath = import.meta.env.BASE_URL || '/';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={basePath}>
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
