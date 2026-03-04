import { declarationService } from "../service/declarationService";

export const mockData = {
  id: "e6975aa5-be15-41e0-9711-b2c632960ec4",
  type: "IMPORT",
  status: "DRAFT",
  referenceNo: null,
  docsInfo: {
    goods: [
      {
        unit: "PCE",
        model: "MXS1/MXS1",
        hsCode: "90330000",
        quantity: 1,
        brandName: "FUJIFILM",
        unitPrice: 19550,
        totalValue: 19550,
        description:
          "Đầu dò siêu âm tim 3D qua thành ngực (bộ phận, phụ kiện dùng cho máy siêu âm chẩn đoán), loại: MXS1/MXS1 PROBE",
        manufacturer: "FUJIFILM CORPORATION",
        serialNumbers: null,
        totalQuantity: 1,
        packingDetails: {
          packages: 1,
          dimensions: {
            unit: "CM",
            width: 34,
            height: 14,
            length: 51,
          },
          packageType: "PKG (OUTER)",
          marksAndNumbers: "INV NO.96515609",
        },
        countryOfOrigin: "JP",
      },
      {
        unit: "PCE",
        model: "EZU-RVF1C",
        hsCode: "83024999",
        quantity: 1,
        brandName: "FUJIFILM",
        unitPrice: 1950,
        totalValue: 1950,
        description:
          "Giá đỡ linh hoạt cho bộ RVS (chất liệu bằng nhôm, dùng cho máy siêu âm chuẩn đoán) / EZU-RVF1 MAGNETIC TRANSMITTER STAND",
        manufacturer: "FUJIFILM CORPORATION",
        serialNumbers: null,
        totalQuantity: 1,
        packingDetails: {
          packages: 1,
          dimensions: {
            unit: "CM",
            width: 110,
            height: 94,
            length: 130,
          },
          packageType: "PKG (OUTER)",
          marksAndNumbers: "INV NO.96515609",
        },
        countryOfOrigin: "JP",
      },
    ],
    parties: {
      shipper: {
        city: "TOKYO",
        name: "FUJIFILM CORPORATION",
        email: null,
        phone: null,
        taxId: null,
        address: "26-30, NISHIAZABU 2-CHOME MINATO-KU TOKYO 106-8620",
        country: "JP",
        postalCode: "106-8620",
        contactPerson: null,
      },
      consignee: {
        city: "HO CHI MINH CITY",
        name: "FUJIFILM VIETNAM CO.,LTD",
        email: null,
        phone: "39390847",
        taxId: "0311169111",
        address:
          "19TH FL, TWR A, COMMERCIAL AND HIGH-RISE BLDG, LOT 1-13, FT NO.1, THU THIEM NUA NO.15 TRAN BACH DANG ST, AN KHANH WARD, HCMC",
        country: "VN",
        postalCode: null,
        contactPerson: null,
      },
      notifyParty: {
        city: null,
        name: null,
        email: null,
        phone: null,
        taxId: null,
        address: null,
        country: null,
        postalCode: null,
        contactPerson: null,
      },
      freightForwarder: {
        city: "TOKYO",
        name: "MOL LOGISTICS CO., LTD.",
        email: null,
        phone: "+81362712123",
        taxId: null,
        address:
          "HIBIYA DAIBIRU BUILDING 1-2-2 UCHISAIWAICHO, CHIYODA-KU, TOKYO, 100-0011",
        country: "JP",
        postalCode: "100-0011",
        contactPerson: null,
      },
    },
    compliance: {
      permits: null,
      taxRate: null,
      dutyRate: null,
      exemptions: null,
      certificates: null,
      restrictions: null,
      quarantineRequired: null,
    },
    customsInfo: {
      customsNotes: "Hàng sử dụng nội bộ trong công ty. (Internal use only)",
      customsOfficeCode: "HQCNC",
      inspectionClassificationCode: "1 (Green Lane / Luồng Xanh)",
    },
    documentInfo: {
      issueDate: "2025-08-28T13:32:30",
      expiryDate: null,
      documentType: "Import Declaration / Arrival Notice",
      documentNumber: "MLGAA0034235",
      issuingAuthority: "Vietnam Customs",
      declarationNumber: "107482625500",
    },
    commercialInfo: {
      currency: "USD",
      insurance: null,
      totalValue: 21500,
      invoiceDate: "2025-08-13",
      exchangeRate: 26216,
      otherCharges: null,
      paymentTerms: "T/T (KC)",
      TotalQuantity: 2,
      invoiceNumber: "96515609",
      freightCharges: null,
    },
    shipmentDetails: {
      vessel: "VN301",
      volume: {
        unit: "M3",
        amount: 1.368,
      },
      weight: {
        net: 53,
        unit: "KGM",
        gross: 53,
      },
      shipmentId: "SAE239Y04224",
      voyageNumber: null,
      actualArrival: "2025-08-17T14:25:00",
      departureDate: "2025-08-17T09:30:00",
      portOfLoading: "JPNRT (NARITA APT)",
      totalPackages: 2,
      portOfDischarge: "VNSGN (HO CHI MINH CITY)",
      containerNumbers: null,
      estimatedArrival: "2025-08-17T14:25:00",
      transportMethodCode: "AIR",
    },
    extractionMetadata: {
      errors: [
        "Inconsistent invoice number formatting (96515609 vs A-96515609) across docs",
      ],
      llmModel: "google/gemini-3-flash-preview",
      confidence: 0.95,
      extractionDate: "2026-02-13T10:31:14.898Z",
      filesProcessed: [
        "Arrival%20Notice%20%2813%29.pdf",
        "BILL.pdf",
        "CongVan%20NHAP%20NOI%20BO.xls",
        "INVOICE.pdf",
        "TKHQ%204235.xls",
        "ToKhaiHQ7N_QDTQ_107482625500.xls",
      ],
      processingTime: 14361,
    },
  },
  createdAt: "2026-02-13T10:31:14.903Z",
  updatedAt: "2026-02-13T10:31:14.903Z",
};


export const handleExportExcel = async (id: string) => {
  try {
    const response : any = await declarationService.exportExcel(id);
    console.log('res', response)

    const blob = new Blob([response], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `declaration-${id}.xlsx`;
    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Export failed", error);
  }
};
