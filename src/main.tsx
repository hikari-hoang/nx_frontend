import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";

import dayjs from "dayjs";
import "dayjs/locale/vi";
import { DeclarationProvider } from "./context/DeclarationContext";

dayjs.locale("vi");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <DeclarationProvider>
        <ConfigProvider
          locale={viVN}
          theme={{
            token: {
              fontFamily: "NeueFrutigerWorld, sans-serif",
              colorText: "#1a005d",
            },
          }}
        >
          <AppRouter />
        </ConfigProvider>
      </DeclarationProvider>
    </AuthProvider>
  </React.StrictMode>,
);
