import { ProTable } from "@ant-design/pro-components";
import { Card, Form } from "antd";
import type { ProColumns } from "@ant-design/pro-components";
import type { DeclarationFormData } from "../../types/declaration";
import { useFormContext, useWatch } from "react-hook-form";

interface KhaiHangItem {
  id?: string;

  STTHang?: number;
  Ten_hang?: string;
  Ma_hang?: string;
  Ma_HS?: string;
  Nuoc_XX?: string;

  Don_vi_tinh?: string;
  Luong?: number;
  Don_gia_HD?: number;
  Tri_gia_HD?: number;

  Tri_gia_tinh_thue?: number;

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

export default function GoodsDeclarationSection() {
  const { control } = useFormContext<DeclarationFormData>();
   const data = useWatch({
    control,
    name: "KhaiHang",
  }) || [];
  const columns: ProColumns<KhaiHangItem>[] = [
    { title: "STT", dataIndex: "STTHang", valueType: "digit", width: 70 },

    { title: "Tên hàng", dataIndex: "Ten_hang", width: 200 },
    { title: "Mã hàng", dataIndex: "Ma_hang", width: 120 },
    { title: "Mã HS", dataIndex: "Ma_HS", width: 120 },
    { title: "Nước XX", dataIndex: "Nuoc_XX", width: 120 },

    { title: "Đơn vị tính", dataIndex: "Don_vi_tinh", width: 120 },
    { title: "Lượng", dataIndex: "Luong", valueType: "digit", width: 100 },

    {
      title: "Đơn giá HĐ",
      dataIndex: "Don_gia_HD",
      width: 140,
    },
    {
      title: "Trị giá HĐ",
      dataIndex: "Tri_gia_HD",
      width: 150,
    },

    {
      title: "Trị giá tính thuế",
      dataIndex: "Tri_gia_tinh_thue",
      width: 160,
    },

    {
      title: "Mã miễn giảm không chịu thuế XNK",
      dataIndex: "Ma_mien_giam_khong_chiu_thue_XNK",
      width: 220,
    },
    {
      title: "Số tiền giảm thuế XNK",
      dataIndex: "So_tien_giam_thue__XNK",
      width: 170,
    },

    {
      title: "Tiền thuế suất",
      dataIndex: "Tien_thue_suat",
      width: 150,
    },
    {
      title: "Tiền thuế TV",
      dataIndex: "Tien_thue_TV",
      width: 150,
    },
    {
      title: "Tiền thuế PB",
      dataIndex: "Tien_thue_PB",
      width: 150,
    },
    {
      title: "Tiền Thuế TTĐB",
      dataIndex: "Tien_Thue_TTDB",
      width: 160,
    },
    {
      title: "Tiền thuế MT",
      dataIndex: "Tien_thue_MT",
      width: 150,
    },
    {
      title: "Tiền thuế VAT",
      dataIndex: "Tien_thue_VAT",
      width: 150,
    },

    {
      title: "Đơn giá hợp đồng TM",
      dataIndex: "Don_gia_hop_dong_TM",
      width: 180,
    },
    {
      title: "Trị giá hợp đồng TM",
      dataIndex: "Tri_gia_hop_dong_TM",
      width: 180,
    },

    {
      title: "Mã biểu thuế nhập khẩu",
      dataIndex: "Ma_bieu_thue_nhap_khau",
      width: 200,
    },
    { title: "Mã biểu thuế VAT", dataIndex: "Ma_bieu_thue_VAT", width: 160 },

    { title: "Loại hàng", dataIndex: "Loai_hang", width: 120 },
    { title: "Mã miễn giảm", dataIndex: "Ma_mien_giam", width: 150 },

    { title: "Đơn vị tính 2", dataIndex: "Don_vi_tinh_2", width: 120 },
    { title: "Lượng 2", dataIndex: "Luong_2", valueType: "digit", width: 100 },
  ];

  return (
    <Card title="Khai hàng">
      <Form.Item name="KhaiHang" initialValue={[]}>
        <ProTable<KhaiHangItem>
          rowKey="id"
          scroll={{ x: 3200 }}
          columns={columns}
          dataSource={data} 
        />
      </Form.Item>
    </Card>
  );
}
