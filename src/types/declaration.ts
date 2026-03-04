export interface KhaiHangData {
  Ten_hang?: string;
  Ma_hang?: string;
  Ma_HS?: string;
  Nuoc_XX?: string;
  Don_vi_tinh?: string;
  Luong?: number;
  Don_gia_HD?: number;
  Tri_gia_HD?: number;
  Tri_gia_tinh_thue?: number;
  STTHang?: number;
  Ma_mien_giam_khong_chiu_thue_XNK?: string;
  So_tien_giam_thue__XNK?: number;
  Tien_thue_suat?: number;
  Tien_thue_TV?: number;
  Tien_thue_PB?: number;
  Tien_Thue_TTDB?: number;
  Tien_thue_MT?: number;
  Tien_thue_VAT?: number;
  Don_gia_hop_dong_TM?: number;
  Tri_gia_hop_dong_TM?: number;
  Ma_bieu_thue_nhap_khau?: string;
  Ma_bieu_thue_VAT?: string;
  Loai_hang?: string;
  Ma_mien_giam?: string;
  Don_vi_tinh_2?: string;
  Luong_2?: number;
}

export interface DeclarationFormData {
  KhaiToKhai: {
    STT?: number;
    So_to_khai?: string;
    Ngay_dang_ky?: string;
    Trang_thai?: string;
    Phan_luong?: string;
    Loai_to_khai_nhap_xuat?: string;
    Loai_hinh_to_khai?: string;
    Ma_phan_loai_to_khai_tri_gia?: string;
    Ghi_chu?: string;

    Ten_doi_tac?: string;
    Ten_don_vi_xuat_nhap_khau?: string;
    Dia_chi_doanh_nghiep_xuat_nhap_khau?: string;
    Dia_chi_nguoi_xuat_nhap_khau1?: string;
    Dia_chi_nguoi_xuat_nhap_khau2?: string;
    Dia_chi_nguoi_xuat_nhap_khau3?: string;
    Dia_chi_nguoi_xuat_nhap_khau4?: string;
    Ma_HQ?: string;
    Ma_LH?: string;
    Ma_dai_ly_HQ?: string;
    Ma_bo_phan_xu_ly_tk?: string;
    Phan_loai_cac_nhan_to_chuc?: string;
    Nguoi_nop_thue?: string;
    Ma_nuoc_xuat_khau?: string;
    Ma_ly_do_de_nghi_BP?: string;

    Ma_hieu_phuong_thuc_van_chuyen?: string;
    Ma_phuong_tien_van_chuyen?: string;
    Ten_phuong_tien_van_chuyen?: string;
    Ngay_den?: string;
    Ngay_khoi_hanh_van_chuyen?: string;
    Dia_diem_dich_cho_van_chuyen_bao_thue?: string;
    Ngay_du_kien_den_dia_diem_dich?: string;
    Van_don?: string;
    So_luong_kien?: number;
    Loai_kien?: string;
    So_luong_cont?: number;
    Tong_trong_luong_hang_Gross?: number;
    Don_vi_tinh_trong_luong?: string;

    Ma_dia_diem_luu_kho?: string;
    Ten_dia_diem_luu_kho?: string;
    Ma_dia_diem_xep_hang?: string;
    Ten_dia_diem_xep_hang?: string;
    Ma_dia_diem_do_hang?: string;
    Ten_dia_diem_do_hang?: string;

    So_HDTM?: string;
    Ngay_HDTM?: string;
    So_HD?: string;
    Ngay_HD?: string;
    Ngay_HHHD?: string;
    Hoa_don_thuong_mai?: string;
    Ma_phan_loai_hoa_don?: string;
    Ma_phan_loai_hinh_thuc_hoa_don?: string;
    Tong_tri_gia_HD?: number;
    Phuong_thuc_thanh_toan?: string;
    Dieu_kien_gia_hoa_don?: string;
    Ng_Te_hoa_don?: string;
    Ty_gia_VND?: number;

    Phi_BH?: number;
    Phi_VC?: number;
    Ma_phan_loai_phi_van_chuyen?: string;
    Ma_phan_loai_phi_bao_hiem?: string;
    Ma_tien_phi_van_chuyen?: string;
    Ma_tien_phi_bao_hiem?: string;
    Tri_gia_KB?: number;
    Tong_tri_gia_TT?: number;
    Tong_tien_thue?: number;
    Ma_dong_tien_tri_gia_tinh_thue?: string;
    Ma_ngan_hang_tra_thue?: string;
    Nam_phat_hanh_han_muc?: string;
    Ky_hieu_CT_han_muc?: string;
    So_CT_han_muc?: string;
    Ma_xac_dinh_thoi_han_nop_thue?: string;
    Ma_ngan_hang_bao_lanh?: string;
    Nam_phat_hanh_bao_lanh?: string;
    Ky_hieu_CT_bao_lanh?: string;
    So_hieu_CT_bao_lanh?: string;
    So_giay_phep?: string;
  };

  KhaiHang: KhaiHangData[] | any;
}
