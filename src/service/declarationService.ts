import { baseServiceApi } from "./baseApiService";

export interface DeclarationResponse {
  id: string;

  source_email: string;
  mail_id: string;
  files_id: string[];

  email_content: string;
  status: string;

  declaration_id: string;
  declaration_info: Declaration;

  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Declaration {
  id: string;
  type: "IMPORT" | "EXPORT";
  status: string;
  referenceNo: string | null;

  createdAt: string;
  updatedAt: string;

  docsInfo: {
    KhaiHang: KhaiHangItem[];
    KhaiToKhai: KhaiToKhai;
    extractionMetadata: ExtractionMetadata;
  };
}

export interface KhaiHangItem {
  STTHang: number;
  Ten_hang: string;
  Ma_HS: number;
  Nuoc_XX: string;
  Luong: number;
  Don_vi_tinh: string;

  Don_gia_HD: number;
  Tri_gia_HD: number;
  Tri_gia_tinh_thue: number;

  Tien_thue_VAT: number;
  Tien_thue_suat: number;

  Ma_bieu_thue_VAT: string;
  Ma_bieu_thue_nhap_khau: string;

  // optional vì trong JSON có nhiều field nullable
  Ma_hang?: string | null;
  Loai_hang?: string | null;
  Ma_mien_giam?: string | null;
  So_tien_giam_thue__XNK?: number;
  Ma_mien_giam_khong_chiu_thue_XNK?: string | null;
}

export interface KhaiToKhai {
  So_to_khai: string;
  Ma_HQ: string;
  Ma_LH: string;
  Trang_thai: string;

  Ngay_HD: string;
  Ngay_HDTM: string;
  Ngay_dang_ky: string;

  Ten_don_vi_xuat_nhap_khau: string;
  Dia_chi_doanh_nghiep_xuat_nhap_khau: string;

  Ten_doi_tac: string;
  Ma_nuoc_xuat_khau: string;

  Tong_tien_thue: number;
  Tong_tri_gia_HD: number;
  Tong_tri_gia_TT: number;

  Ty_gia_VND: number;
  Tri_gia_KB: number;

  Van_don: string;
  Hoa_don_thuong_mai: string;

  Ten_dia_diem_do_hang: string;
  Ten_dia_diem_xep_hang: string;
}

export interface ExtractionMetadata {
  llmModel: string;
  confidence: number;
  extractionDate: string;
  filesProcessed: string[];
  processingTime: number;
}
export interface DeclarationQueryParams {
  page?: number;
  limit?: number;
  type?: "IMPORT" | "EXPORT";
  referenceNo?: string;
  fromDate?: string;
  toDate?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// export interface DeclarationResponse {
//   data: Declaration[];
//   hasNextPage: boolean;
// }
// export interface SingleDeclarationResponse {
//   data: Declaration;
// }

export interface UpdateDeclarationRequest {
  type?: string;
  referenceNo?: string | null;
  docsInfo: {
    KhaiHang: KhaiHangItem[] | any;
    KhaiToKhai: KhaiToKhai;
    extractionMetadata?: ExtractionMetadata;
  };
}

class DeclarationService {
  getDeclarations(params: DeclarationQueryParams) {
    return baseServiceApi.get<DeclarationResponse>(
      "/api/declaration-triggering-setting-history",
      {
        params,
      },
    );
  }
  getDeclarationById(id: string) {
    return baseServiceApi.get<Declaration>(`/api/v1/declarations/${id}`);
  }
  updateDeclaration(id: string, payload: UpdateDeclarationRequest) {
    return baseServiceApi.put<Declaration>(
      `/api/v1/declarations/${id}`,
      payload,
    );
  }
  exportExcel(declarationId: string) {
    return baseServiceApi.post(
      `/api/v1/declarations/export-ecus-excel/${declarationId}`,
      {},
      {
        responseType: "blob",
      },
    );
  }
}

export const declarationService = new DeclarationService();
