import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import type { FileResponse } from "../service/fileService";

interface Props {
  files: FileResponse[];
}

export default function SidebarFileList({ files }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [files]);

  if (!files || files.length === 0) {
    return <div style={{ padding: 16 }}>No documents</div>;
  }

  const currentFile = files[currentIndex];

  const next = () => {
    if (currentIndex < files.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Detect file type
  const getViewerUrl = () => {
    if (!currentFile.presignedUrl) return null;

    const fileName = currentFile.original_filename.toLowerCase();
    const url = currentFile.presignedUrl;

    //  PDF → hiển thị trực tiếp
    if (fileName.endsWith(".pdf")) {
      return `${url}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`;
    }

    // Image
    if (
      fileName.endsWith(".png") ||
      fileName.endsWith(".jpg") ||
      fileName.endsWith(".jpeg")
    ) {
      return url;
    }

    // Excel / Word / PowerPoint → dùng Office Viewer
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      url
    )}`;
  };

  const viewerUrl = getViewerUrl();

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "8px 12px",
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fafafa",
        }}
      >
        <Button
          icon={<LeftOutlined />}
          onClick={prev}
          disabled={currentIndex === 0}
        />

        <div style={{ fontSize: 13, fontWeight: 500 }}>
          {currentFile.original_filename} &nbsp;
          <span style={{ color: "#999" }}>
            {currentIndex + 1} / {files.length}
          </span>
        </div>

        <Button
          icon={<RightOutlined />}
          onClick={next}
          disabled={currentIndex === files.length - 1}
        />
      </div>

      {/* Viewer */}
      <div style={{ flex: 1 }}>
        {viewerUrl ? (
          <iframe
            src={viewerUrl}
            title={currentFile.original_filename}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        ) : (
          <div style={{ padding: 16 }}>Không thể tải file</div>
        )}
      </div>
    </div>
  );
}