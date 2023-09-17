import { ConfigProvider } from "antd";
import React from "react";
import Rotas from "./routes";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "green",
          colorBgBase: "#454B4E",
          colorTextBase: "#fff",
          colorText: "#fff",
        },
      }}
    >
      <Rotas />
    </ConfigProvider>
  );
}
