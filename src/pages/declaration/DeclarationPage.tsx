import { Row, Col, ConfigProvider, message } from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

import SidebarFileList from "../../components/SidebarFileList";
import DeclarationForm from "../../components/DeclarationForm";
import type { DeclarationFormData } from "../../types/declaration";
import { declarationService } from "../../service/declarationService";
import { fileService, type FileResponse } from "../../service/fileService";
import ActionButtons from "../../components/ActionButtons";
import { useDeclaration } from "../../context/DeclarationContext";
import "./Declaration.css";

const DeclarationsPage = () => {
  const { id } = useParams();
  const { filesId } = useDeclaration();

  const [data, setData] = useState<DeclarationFormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<FileResponse[]>([]);
  const [extractionMetadata, setExtractionMetadata] = useState<any>(null);

  // ---------------- FETCH DECLARATION ----------------
  const fetchDeclaration = useCallback(async () => {
    if (!id) return;

    try {
      setLoading(true);

      const declaration = await declarationService.getDeclarationById(id);

      const mappedData: DeclarationFormData = {
        KhaiToKhai: {
          ...declaration.docsInfo.KhaiToKhai,
          Loai_to_khai_nhap_xuat: declaration.type,
        },
        KhaiHang: declaration.docsInfo.KhaiHang,
      };

      setData(mappedData);
      setExtractionMetadata(declaration.docsInfo.extractionMetadata);
    } catch (error) {
      console.error(error);
      message.error("Không thể tải tờ khai");
    } finally {
      setLoading(false);
    }
  }, [id]);

  // ---------------- FETCH FILES FROM CONTEXT ----------------
  const fetchFiles = useCallback(async () => {
    if (!filesId?.length) {
      setFiles([]);
      return;
    }

    try {
      const res : any = await fileService.getFilesByIds(filesId);
      setFiles(res.data || res);
    } catch (error) {
      console.error("Load file error:", error);
      message.error("Không thể tải danh sách file");
    }
  }, [filesId]);

  // load declaration
  useEffect(() => {
    fetchDeclaration();
  }, [fetchDeclaration]);

  // load files khi filesId thay đổi
  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  return (
    <div
      style={{
        padding: 4,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "#fff",
          padding: "8px 12px",
          borderRadius: 12,
          border: "1px solid #f0f0f0",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            fontSize: 13,
            color: "#8c8c8c",
            marginBottom: 6,
          }}
        >
          Danh sách tờ khai &nbsp;›&nbsp; Thông tin tờ khai
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#1f1f1f",
            }}
          >
            Thông tin tờ khai
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <ActionButtons id={id!} />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Row gutter={12} style={{ height: "100%" }}>
          {/* LEFT: FILE LIST */}
          <Col span={10} style={{ height: "100%" }}>
            <div
              style={{
                border: "1px solid #f0f0f0",
                borderRadius: 8,
                height: "100%",
                overflowY: "auto",
                background: "#fff",
              }}
            >
              <SidebarFileList files={files} />
            </div>
          </Col>

          {/* RIGHT: FORM */}
          <Col span={14} style={{ height: "100%" }}>
            <div
              style={{
                border: "1px solid #f0f0f0",
                borderRadius: 8,
                height: "100%",
                overflowY: "auto",
                background: "#fff",
                padding: 8,
              }}
            >
              <ConfigProvider
                theme={{
                  token: {
                    borderRadius: 12,
                    colorBorder: "#e5e7eb",
                    fontSize: 14,
                  },
                  components: {
                    Card: {
                      headerFontSize: 18,
                      // headerFontWeight: 700,
                      borderRadiusLG: 12,
                      tabsMarginBottom: 10
                    },
                    Form: {
                      labelColor: "#6b7280",
                      labelFontSize: 14,
                    },
                    Input: {
                      fontWeightStrong: 600,
                    },
                    Select: {
                      fontWeightStrong: 600,
                    },
                  },
                }}
              >
                <DeclarationForm
                  id={id}
                  initialData={data ?? undefined}
                  loading={loading}
                  extractionMetadata={extractionMetadata}
                />
              </ConfigProvider>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DeclarationsPage;
