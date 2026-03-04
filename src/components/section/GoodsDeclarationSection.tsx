import { Table, Card, Input, InputNumber } from "antd";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import type { ColumnsType } from "antd/es/table";
import type { DeclarationFormData } from "../../types/declaration";

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

  const { fields } = useFieldArray({
    control,
    name: "KhaiHang",
  });

  const renderInput = (name: string) => (
    <Controller
      control={control}
      name={name as any}
      render={({ field }) => <Input {...field} />}
    />
  );

  const renderNumber = (name: string) => (
    <Controller
      control={control}
      name={name as any}
      render={({ field }) => (
        <InputNumber {...field} style={{ width: "100%" }} />
      )}
    />
  );

  const columns: ColumnsType<KhaiHangItem> = [
    { title: "STT", dataIndex: "STTHang", width: 70 },
    {
      title: "Tên hàng",
      width: 300,
      render: (_, __, index) => (
        <Controller
          control={control}
          name={`KhaiHang.${index}.Ten_hang`}
          render={({ field }) => (
            <Input.TextArea
              {...field}
              autoSize={{ minRows: 1, maxRows: 6 }}
              style={{
                resize: "none",
                padding: "4px 8px",
              }}
            />
          )}
        />
      ),
    },
    {
      title: "Mã hàng",
      // width: 150,
      render: (_, __, index) => renderInput(`KhaiHang.${index}.Ma_hang`),
    },
    {
      title: "Mã HS",
      width: 120,
      render: (_, __, index) => renderInput(`KhaiHang.${index}.Ma_HS`),
    },
    {
      title: "Nước XX",
      width: 120,
      render: (_, __, index) => renderInput(`KhaiHang.${index}.Nuoc_XX`),
    },
    {
      title: "Đơn vị tính",
      width: 120,
      render: (_, __, index) => renderInput(`KhaiHang.${index}.Don_vi_tinh`),
    },
    {
      title: "Lượng",
      width: 100,
      render: (_, __, index) => renderNumber(`KhaiHang.${index}.Luong`),
    },
    {
      title: "Đơn giá HĐ",
      width: 140,
      render: (_, __, index) => renderNumber(`KhaiHang.${index}.Don_gia_HD`),
    },
    {
      title: "Trị giá HĐ",
      width: 150,
      render: (_, __, index) => renderNumber(`KhaiHang.${index}.Tri_gia_HD`),
    },
    // {
    //   title: "Trị giá tính thuế",
    //   width: 160,
    //   render: (_, __, index) =>
    //     renderNumber(`KhaiHang.${index}.Tri_gia_tinh_thue`),
    // },
    // {
    //   title: "Mã miễn giảm không chịu thuế XNK",
    //   width: 220,
    //   render: (_, __, index) =>
    //     renderInput(`KhaiHang.${index}.Ma_mien_giam_khong_chiu_thue_XNK`),
    // },
    // {
    //   title: "Số tiền giảm thuế XNK",
    //   width: 170,
    //   render: (_, __, index) =>
    //     renderNumber(`KhaiHang.${index}.So_tien_giam_thue__XNK`),
    // },
    // {
    //   title: "Tiền thuế suất",
    //   width: 150,
    //   render: (_, __, index) =>
    //     renderNumber(`KhaiHang.${index}.Tien_thue_suat`),
    // },
    // {
    //   title: "Tiền thuế TV",
    //   width: 150,
    //   render: (_, __, index) => renderNumber(`KhaiHang.${index}.Tien_thue_TV`),
    // },
    // {
    //   title: "Tiền thuế PB",
    //   width: 150,
    //   render: (_, __, index) => renderNumber(`KhaiHang.${index}.Tien_thue_PB`),
    // },
    // {
    //   title: "Tiền Thuế TTĐB",
    //   width: 160,
    //   render: (_, __, index) =>
    //     renderNumber(`KhaiHang.${index}.Tien_Thue_TTDB`),
    // },
    // {
    //   title: "Tiền thuế MT",
    //   width: 150,
    //   render: (_, __, index) => renderNumber(`KhaiHang.${index}.Tien_thue_MT`),
    // },
    // {
    //   title: "Tiền thuế VAT",
    //   width: 150,
    //   render: (_, __, index) => renderNumber(`KhaiHang.${index}.Tien_thue_VAT`),
    // },
    {
      title: "Đơn giá hợp đồng TM",
      width: 180,
      render: (_, __, index) =>
        renderNumber(`KhaiHang.${index}.Don_gia_hop_dong_TM`),
    },
    {
      title: "Trị giá hợp đồng TM",
      width: 180,
      render: (_, __, index) =>
        renderNumber(`KhaiHang.${index}.Tri_gia_hop_dong_TM`),
    },
    // {
    //   title: "Mã biểu thuế nhập khẩu",
    //   width: 200,
    //   render: (_, __, index) =>
    //     renderInput(`KhaiHang.${index}.Ma_bieu_thue_nhap_khau`),
    // },
    // {
    //   title: "Mã biểu thuế VAT",
    //   width: 160,
    //   render: (_, __, index) =>
    //     renderInput(`KhaiHang.${index}.Ma_bieu_thue_VAT`),
    // },
    {
      title: "Loại hàng",
      width: 120,
      render: (_, __, index) => renderInput(`KhaiHang.${index}.Loai_hang`),
    },
    {
      title: "Mã miễn giảm",
      width: 150,
      render: (_, __, index) => renderInput(`KhaiHang.${index}.Ma_mien_giam`),
    },
    {
      title: "Đơn vị tính 2",
      width: 120,
      render: (_, __, index) => renderInput(`KhaiHang.${index}.Don_vi_tinh_2`),
    },
    {
      title: "Lượng 2",
      width: 100,
      render: (_, __, index) => renderNumber(`KhaiHang.${index}.Luong_2`),
    },
  ];

  return (
    <Card title="Khai hàng">
      <Table<KhaiHangItem>
        rowKey="id"
        scroll={{ x: "max-content" }}
        pagination={false}
        columns={columns}
        dataSource={fields}
      />
    </Card>
  );
}
