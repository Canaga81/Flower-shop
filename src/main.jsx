import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SidebarProvider from "./contexts/SidebarContexts.jsx";
import DataProvider from "./contexts/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </SidebarProvider>
);
