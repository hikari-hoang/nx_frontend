import { Button } from "antd";
import { useState } from "react";
import { handleExportExcel } from "../helper/helper";

interface Props {
  id: string;
}

export default function ActionButtons({ id }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  const baseStyle: React.CSSProperties = {
    backgroundColor: "#1a005d",
    color: "#ffffff",
    border: "none",
    borderRadius: "12px", //
    height: "44px", //
    padding: "0 24px",
    fontSize: "15px",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    transition: "all 0.25s ease",
    transform: "translateY(0px)",
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: "#8ec300",
    color: "#1a005d",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 18px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div
      style={{
        marginTop: 16,
        marginBottom: 16,
        textAlign: "right",
        display: "flex",
        justifyContent: "flex-end",
        gap: 16,
      }}
    >
      <Button
        style={{
          ...baseStyle,
          ...(hovered === "excel" ? hoverStyle : {}),
        }}
        onMouseEnter={() => setHovered("excel")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => handleExportExcel(id)}
      >
        Xuất file Excel
      </Button>

      <Button
        htmlType="submit"
        style={{
          ...baseStyle,
          ...(hovered === "save" ? hoverStyle : {}),
        }}
        onMouseEnter={() => setHovered("save")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => {
          document
            .getElementById("declaration-form")
            ?.dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true }),
            );
        }}
      >
        Lưu tờ khai
      </Button>
    </div>
  );
}
