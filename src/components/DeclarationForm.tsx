import { message, Spin } from "antd";
import { FormProvider, useForm } from "react-hook-form";



import type { DeclarationFormData } from "../types/declaration";

import GeneralDeclarationSection from "./section/GeneralDeclarationSection";
import EnterpriseCustomsSection from "./section/EnterpriseCustomsSection";
import TransportInformationSection from "./section/TransportInformationSection";
import ContractInvoiceSection from "./section/ContractInvoiceSection";

import GoodsDeclarationSection from "./section/GoodsDeclarationSection";
import LocationSection from "./section/LocationSection";
import { useEffect } from "react";
import {
  declarationService,
  type ExtractionMetadata,
  type UpdateDeclarationRequest,
} from "../service/declarationService";
import { StarOutlined } from "@ant-design/icons";

interface DeclarationFormProps {
  id?: string;
  initialData?: DeclarationFormData;
  loading?: boolean;
  extractionMetadata: ExtractionMetadata | any;
}

export default function DeclarationForm({
  id,
  initialData,
  loading = false,
  extractionMetadata,
}: DeclarationFormProps) {
  const methods = useForm<DeclarationFormData>({
    defaultValues: {
      KhaiToKhai: {},
      KhaiHang: [],
    },
  });
  //  const [messageApi, contextHolder] = message.useMessage();

  const { reset } = methods;

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);
  const onSubmit = async (data: DeclarationFormData) => {
    try {
      // Map N/E -> IMPORT/EXPORT
      const type = data.KhaiToKhai?.Loai_to_khai_nhap_xuat;

      const payload: UpdateDeclarationRequest = {
        type,
        docsInfo: {
          KhaiToKhai: data.KhaiToKhai as any,
          KhaiHang: data.KhaiHang,
          extractionMetadata: extractionMetadata ?? {
            llmModel: "",
            confidence: 0,
            extractionDate: "",
            filesProcessed: [],
            processingTime: 0,
          },
        },
      };

      console.log("payload", payload);

      await declarationService.updateDeclaration(id as string, payload);

      message.success("Lưu tờ khai thành công!");
    } catch (error) {
      console.error("Update failed", error);
      message.error("Lưu tờ khai thất bại. Vui lòng thử lại!");
    }
  };

  return (
    <FormProvider {...methods}>
      <form id="declaration-form" onSubmit={methods.handleSubmit(onSubmit)}>
        {/* Old form */}
        {/* <DeclarationSection />

        <ImporterSection />
      
        <ShipmentSection />

        <ContractSection />

        <LicenseSection />
    
        <InvoiceSection />

        <TaxGuaranteeSection />

        <AttachmentSection />

        <TransportationInfoSection />

        <AdditionalInfoSection />

        <LoadingLocationSection />

        <GoodsListSection /> */}
        <>
          {loading ? (
            <div
              style={{
                height: "100%",
                minHeight: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spin />
            </div>
          ) : (
            <>
              {/* Title */}
              <div
                style={{
                  marginBottom: 24,
                  padding: "16px 20px",
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #1a005d, #3b0ca3)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                }}
              >
                <StarOutlined
                  style={{
                    fontSize: 22,
                    color: "#8ec300",
                    animation: "pulse 1.8s infinite",
                  }}
                />
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700 }}>
                    Kiểm tra dữ liệu do AI trích xuất
                  </div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>
                    Vui lòng kiểm tra và xác nhận lại thông tin trước khi lưu tờ
                    khai
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {/* New form */}
                <GeneralDeclarationSection />
                <EnterpriseCustomsSection />
                <TransportInformationSection />
                <LocationSection />
                <ContractInvoiceSection />
                {/* <TaxGuaranteeSection /> */}
                {/* <AdditionalInformationSection/> */}
                <GoodsDeclarationSection />
                {/* Submit */}
                {/* <ActionButtons id={id} /> */}
              </div>
            </>
          )}
        </>
      </form>
    </FormProvider>
  );
}
